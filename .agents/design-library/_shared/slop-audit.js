/**
 * slop-audit.js
 * Bidirectional DOM & CSSOM audit for measuring:
 *   1. Ceiling (Slop Budget) — prevents UI inflation.
 *   2. Floor (Richness Floor) — prevents sterile/rigid layouts.
 * Usable in Chrome DevTools Console or via CDP Runtime.evaluate:
 *   window.runSlopAudit(customBudget, customFloor)
 */
(function (root) {
  const DEFAULT_PROFESSIONAL_BUDGET = {
    decorativeBadges: 0,
    maxFilledPerScreen: 1,
    outlineFullPage: 2,
    maxUniqueBorderRadii: 3,
    maxUniqueBorderWidths: 2,
    maxUniqueFontWeights: 3,
    maxNestedContainers: 0,
    staticShadows: 0,
    alternatingSectionBgs: 0
  };

  const DEFAULT_RICHNESS_FLOOR = {
    minMeaningfulVisuals: 1,
    minDataVisualizations: 1,
    requireDataTableAlternative: true,
    minCompositionPatterns: 3,
    minDisplayToBodyRatio: 2.0,
    requireTabularLining: true,
    minFunctionalColors: 4,
    requireMotionDeclaration: true,
    requireReducedMotionFallback: true
  };

  function isVisible(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.closest('[hidden], .hidden, script, style, template')) return false;
    const st = getComputedStyle(el);
    if (st.display === 'none' || st.visibility === 'hidden' || parseFloat(st.opacity) === 0) return false;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return false;
    // Skip visually offscreen skip-links
    if (el.classList.contains('skip-link') && rect.bottom < 0) return false;
    return true;
  }

  function selectorOf(el) {
    if (!el) return '';
    const tag = el.tagName.toLowerCase();
    const id = el.id ? '#' + el.id : '';
    const cls = typeof el.className === 'string' && el.className.trim()
      ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
      : '';
    return tag + id + cls;
  }

  function parseRgba(str) {
    if (!str || str === 'transparent') return [0, 0, 0, 0];
    const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (!m) return [0, 0, 0, 1];
    return [+m[1], +m[2], +m[3], m[4] !== undefined ? +m[4] : 1];
  }

  function isTransparent(str) {
    const [, , , a] = parseRgba(str);
    return a === 0;
  }

  function isNeutralSurfaceColor(str) {
    const [r, g, b, a] = parseRgba(str);
    if (a === 0) return true;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const spread = max - min;
    // Neutral whites/slates/dark-slates have low RGB channel spread (< 28)
    return spread <= 28 && (max > 220 || max < 48);
  }

  function effectiveBg(el) {
    let cur = el;
    while (cur && cur.nodeType === 1) {
      const bg = getComputedStyle(cur).backgroundColor;
      if (!isTransparent(bg)) return bg;
      cur = cur.parentElement;
    }
    return getComputedStyle(document.body).backgroundColor;
  }

  function borderSidesCount(st) {
    let count = 0;
    const sides = [
      ['borderTopWidth', 'borderTopStyle', 'borderTopColor'],
      ['borderRightWidth', 'borderRightStyle', 'borderRightColor'],
      ['borderBottomWidth', 'borderBottomStyle', 'borderBottomColor'],
      ['borderLeftWidth', 'borderLeftStyle', 'borderLeftColor']
    ];
    for (const [w, s, c] of sides) {
      if (parseFloat(st[w]) > 0 && st[s] !== 'none' && !isTransparent(st[c])) count++;
    }
    return count;
  }

  function parseDurationListMaxMs(str, computedRoot) {
    if (!str || str === 'none') return 0;
    let resolved = String(str);
    if (computedRoot) {
      resolved = resolved.replace(/var\((--[^,\s)]+)(?:,\s*([^)]+))?\)/g, (_, name, fallback) => {
        const v = computedRoot.getPropertyValue(name).trim();
        return v || fallback || '0ms';
      });
    }
    let maxMs = 0;
    for (const part of resolved.split(/[\s,]+/)) {
      const m = part.trim().match(/^([\d.]+)(ms|s)$/);
      if (!m) continue;
      const val = parseFloat(m[1]);
      const ms = m[2] === 's' ? val * 1000 : val;
      if (ms > maxMs) maxMs = ms;
    }
    return maxMs;
  }

  function collectStyleSignals(doc) {
    let hasMotionDeclaration = false;
    let hasReducedMotionFallback = false;
    const rootVarValues = {};
    const computedRoot = getComputedStyle(doc.documentElement);

    function walkRuleList(rules, inReducedMotion) {
      if (!rules) return;
      let list;
      try {
        list = [...rules];
      } catch (_) {
        return;
      }
      for (const rule of list) {
        if (typeof CSSKeyframesRule !== 'undefined' && rule instanceof CSSKeyframesRule) {
          if (!inReducedMotion) hasMotionDeclaration = true;
          continue;
        }
        if (typeof CSSMediaRule !== 'undefined' && rule instanceof CSSMediaRule) {
          const mediaText = (rule.conditionText || rule.media?.mediaText || '').toLowerCase();
          const isReduced = mediaText.includes('prefers-reduced-motion');
          if (isReduced) hasReducedMotionFallback = true;
          walkRuleList(rule.cssRules, inReducedMotion || isReduced);
          continue;
        }
        if (rule.cssRules) {
          walkRuleList(rule.cssRules, inReducedMotion);
          continue;
        }
        if (typeof CSSStyleRule !== 'undefined' && rule instanceof CSSStyleRule && rule.style) {
          if (!inReducedMotion) {
            const td = Math.max(
              parseDurationListMaxMs(rule.style.transitionDuration, computedRoot),
              parseDurationListMaxMs(rule.style.transition, computedRoot)
            );
            const ad = Math.max(
              parseDurationListMaxMs(rule.style.animationDuration, computedRoot),
              parseDurationListMaxMs(rule.style.animation, computedRoot)
            );
            if (td > 50 || ad > 50) hasMotionDeclaration = true;
          }
          const sel = rule.selectorText || '';
          if (/(^|[\s,])(:root|html)([\s,]|$)/.test(sel)) {
            for (let i = 0; i < rule.style.length; i++) {
              const prop = rule.style[i];
              if (prop.startsWith('--')) {
                const val = rule.style.getPropertyValue(prop).trim();
                if (val && !(prop in rootVarValues)) rootVarValues[prop] = val;
              }
            }
          }
        }
      }
    }

    for (const sheet of [...doc.styleSheets]) {
      try {
        walkRuleList(sheet.cssRules, false);
      } catch (_) {
        // Cross-origin stylesheet cannot be inspected via cssRules; skip safely.
      }
    }

    if (!hasMotionDeclaration && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const sampleTargets = [...doc.querySelectorAll('a, button, input, section, [data-animate], .btn, .tab, svg *')].slice(0, 40);
      for (const node of sampleTargets) {
        const nst = getComputedStyle(node);
        if (parseDurationListMaxMs(nst.transitionDuration, computedRoot) > 50 || parseDurationListMaxMs(nst.animationDuration, computedRoot) > 50) {
          hasMotionDeclaration = true;
          break;
        }
      }
    }

    // Fallback check via computed root values for declared properties
    const knownColorProps = [
      '--accent-primary', '--color-primary', '--brand-primary',
      '--accent-secondary', '--color-secondary', '--brand-secondary',
      '--accent-data-1', '--accent-data-2', '--accent-data-3',
      '--bg-warm', '--bg-tint', '--bg-subtle', '--bg-chapter', '--bg-canvas', '--bg-surface',
      '--status-success-fg', '--status-danger-fg', '--status-warning-fg', '--status-info-fg'
    ];
    for (const prop of knownColorProps) {
      if (!(prop in rootVarValues)) {
        const v = computedRoot.getPropertyValue(prop).trim();
        if (v) rootVarValues[prop] = v;
      }
    }

    const functionalRoles = new Set();
    const functionalColors = {};
    for (const [prop, rawVal] of Object.entries(rootVarValues)) {
      const val = rawVal.trim();
      if (!val || val === 'none' || val === 'transparent') continue;
      if (/^--(accent|color|brand)-primary\b/i.test(prop)) {
        functionalRoles.add('primary');
        functionalColors.primary = val;
      } else if (/^--(accent|color|brand)-secondary\b/i.test(prop)) {
        functionalRoles.add('secondary');
        functionalColors.secondary = val;
      } else if (/^--(accent-data|data-|chart-|viz-)/i.test(prop)) {
        functionalRoles.add('dataAccent');
        functionalColors.dataAccent = functionalColors.dataAccent || [];
        functionalColors.dataAccent.push(`${prop}:${val}`);
      } else if (/^--(bg-warm|bg-tint|bg-subtle|bg-chapter)\b/i.test(prop) ||
        (/^--(bg-canvas|bg-surface)\b/i.test(prop) && !/^#fff(?:fff)?$/i.test(val) && !/^rgb\(\s*255,\s*255,\s*255\s*\)$/i.test(val))) {
        functionalRoles.add('warmNeutral');
        functionalColors.warmNeutral = functionalColors.warmNeutral || val;
      } else if (/^--status-(success|danger|warning|info)/i.test(prop) || /^--btn-danger/i.test(prop)) {
        functionalRoles.add('status');
        functionalColors.status = functionalColors.status || val;
      }
    }

    return {
      hasMotionDeclaration,
      hasReducedMotionFallback,
      functionalRoles: [...functionalRoles],
      functionalColorCount: functionalRoles.size,
      functionalColors
    };
  }

  function detectSectionTopology(sec) {
    const hasSticky = [...sec.querySelectorAll('*')].some(el => isVisible(el) && getComputedStyle(el).position === 'sticky');
    if (hasSticky) return 'sticky-split';

    const candidates = [sec, ...sec.querySelectorAll('div')].slice(0, 12).filter(isVisible);
    for (const box of candidates) {
      const st = getComputedStyle(box);
      if (st.display !== 'grid' && st.display !== 'flex') continue;
      const visChildren = [...box.children].filter(ch => isVisible(ch) && ch.getBoundingClientRect().width >= 120);
      if (visChildren.length < 2) continue;
      const rects = visChildren.map(ch => ch.getBoundingClientRect());
      // Check if at least two children share horizontal row space (multi-column)
      const firstTop = rects[0].top;
      const rowCols = rects.filter(r => Math.abs(r.top - firstTop) < Math.max(40, Math.min(rects[0].height, r.height) * 0.8));
      if (rowCols.length >= 2) {
        const widths = rowCols.map(r => r.width);
        const minW = Math.min(...widths);
        const maxW = Math.max(...widths);
        if (minW > 0 && maxW / minW >= 1.25) return 'asymmetric-grid';
        return 'symmetric-grid';
      }
    }
    return 'single-col';
  }

  function runSlopAudit(customBudget, customFloor) {
    const rawBudget = Object.assign({}, customBudget || {});
    const embeddedFloor = rawBudget.richnessFloor && typeof rawBudget.richnessFloor === 'object' ? rawBudget.richnessFloor : {};
    delete rawBudget.richnessFloor;
    const budget = Object.assign({}, DEFAULT_PROFESSIONAL_BUDGET, rawBudget);
    const floor = Object.assign({}, DEFAULT_RICHNESS_FLOOR, embeddedFloor, customFloor || {});
    const doc = document;
    const allEls = [...doc.querySelectorAll('body *')].filter(el => {
      if (el.closest('svg') || el.tagName.toLowerCase() === 'svg') return false;
      return isVisible(el);
    });

    // 1. Badges & Pills
    const statusBadgeNodes = [];
    const decorativeBadgeNodes = [];
    const badgeSeen = new Set();

    for (const el of allEls) {
      if (badgeSeen.has(el)) continue;
      const cls = typeof el.className === 'string' ? el.className : '';
      const hasBadgeClass = /\b(badge|chip|tag|pill|masthead-badge)\b/i.test(cls);
      const st = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      const tag = el.tagName.toLowerCase();

      const looksLikeInlinePill = !hasBadgeClass &&
        !['button', 'input', 'select', 'textarea', 'a'].includes(tag) &&
        (st.display === 'inline-flex' || st.display === 'inline-block') &&
        rect.height > 0 && rect.height <= 42 && rect.width <= 360 &&
        !isTransparent(st.backgroundColor) &&
        st.backgroundColor !== effectiveBg(el.parentElement) &&
        parseFloat(st.borderTopLeftRadius) > 0;

      if (hasBadgeClass || looksLikeInlinePill) {
        badgeSeen.add(el);
        const isStatus = el.hasAttribute('data-status-badge') ||
          el.id === 'track-badge' ||
          Boolean(el.closest('[role="status"]'));
        if (isStatus) {
          statusBadgeNodes.push(selectorOf(el));
        } else {
          decorativeBadgeNodes.push({
            selector: selectorOf(el),
            text: el.textContent.trim().slice(0, 40)
          });
        }
      }
    }

    // 2. Buttons (filled vs outline vs ghost)
    const filledBtns = [];
    const outlineBtns = [];
    const ghostBtns = [];

    const btnCandidates = allEls.filter(el => {
      const tag = el.tagName.toLowerCase();
      return tag === 'button' || (tag === 'a' && /\bbtn\b/.test(el.className || ''));
    });

    for (const el of btnCandidates) {
      if (/\bchip\b/.test(el.className || '')) continue;
      const st = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      const topAbs = rect.top + window.scrollY;
      const bottomAbs = rect.bottom + window.scrollY;
      const bg = st.backgroundColor;
      const sides = borderSidesCount(st);

      const isFilled = !isTransparent(bg) && !isNeutralSurfaceColor(bg);
      const isOutline = !isFilled && sides >= 3;

      const info = {
        selector: selectorOf(el),
        text: el.textContent.trim().slice(0, 40),
        top: Math.round(topAbs),
        bottom: Math.round(bottomAbs)
      };

      if (isFilled) filledBtns.push(info);
      else if (isOutline) outlineBtns.push(info);
      else ghostBtns.push(info);
    }

    // Sliding 900px screen window across page to measure max filled buttons visible per screen
    const docHeight = Math.max(doc.documentElement.scrollHeight, 900);
    const screenH = 900;
    let maxFilledPerScreen = 0;
    for (let y = 0; y <= docHeight; y += 100) {
      const count = filledBtns.filter(b => b.bottom > y && b.top < y + screenH).length;
      if (count > maxFilledPerScreen) maxFilledPerScreen = count;
    }
    const filledInInitialViewport = filledBtns.filter(b => b.top < screenH).length;
    const outlineInInitialViewport = outlineBtns.filter(b => b.top < screenH).length;

    // 3. Computed style variance (border-radius, border-width, font-size, font-weight)
    const radiiSet = new Set();
    const borderWidthSet = new Set();
    const fontSizeSet = new Set();
    const fontWeightSet = new Set();
    const staticShadowNodes = [];

    for (const el of allEls) {
      const tag = el.tagName.toLowerCase();
      const isNativeCheckOrRadio = tag === 'input' && (el.type === 'radio' || el.type === 'checkbox');
      const st = getComputedStyle(el);

      if (!isNativeCheckOrRadio) {
        const rads = [st.borderTopLeftRadius, st.borderTopRightRadius, st.borderBottomRightRadius, st.borderBottomLeftRadius];
        for (const r of rads) {
          const val = parseFloat(r);
          if (val > 0) radiiSet.add(Math.round(val) + 'px');
        }
        const bws = [
          [st.borderTopWidth, st.borderTopStyle],
          [st.borderRightWidth, st.borderRightStyle],
          [st.borderBottomWidth, st.borderBottomStyle],
          [st.borderLeftWidth, st.borderLeftStyle]
        ];
        for (const [w, s] of bws) {
          const val = parseFloat(w);
          if (val > 0 && s !== 'none') borderWidthSet.add(Math.round(val * 10) / 10 + 'px');
        }
      }

      if (el.childNodes.length && [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) {
        fontSizeSet.add(Math.round(parseFloat(st.fontSize) * 100) / 100 + 'px');
        fontWeightSet.add(st.fontWeight);
      }

      const isOverlay = st.position === 'fixed' || st.position === 'absolute' || el.getAttribute('role') === 'dialog';
      if (!isOverlay && st.boxShadow && st.boxShadow !== 'none') {
        staticShadowNodes.push(selectorOf(el));
      }
    }

    // 4. Nested container depth (boxed or distinct-bg containers inside containers)
    function isVisualContainer(el) {
      const tag = el.tagName.toLowerCase();
      if (['html', 'body', 'header', 'main', 'footer', 'nav', 'aside', 'section', 'button', 'input', 'select', 'textarea', 'a', 'label', 'span', 'strong', 'em', 'code'].includes(tag)) {
        if (!['section', 'aside', 'form', 'div', 'article', 'li'].includes(tag)) return false;
      }
      if (tag === 'section') return false;
      const st = getComputedStyle(el);
      if (st.display === 'inline') return false;
      const sides = borderSidesCount(st);
      const hasBoxBorder = sides >= 3;
      const parentBg = el.parentElement ? effectiveBg(el.parentElement) : getComputedStyle(doc.body).backgroundColor;
      const hasDistinctBg = !isTransparent(st.backgroundColor) && st.backgroundColor !== parentBg;
      return hasBoxBorder || hasDistinctBg;
    }

    let maxContainerDepth = 0;
    const nestedOffenders = [];
    function walkContainers(el, depth) {
      if (!isVisible(el) || el.tagName.toLowerCase() === 'svg') return;
      const isCont = el.parentElement && isVisualContainer(el);
      const nextDepth = isCont ? depth + 1 : depth;
      if (nextDepth > maxContainerDepth) maxContainerDepth = nextDepth;
      if (nextDepth > 1 && isCont) {
        nestedOffenders.push({ selector: selectorOf(el), depth: nextDepth });
      }
      for (const child of el.children) {
        walkContainers(child, nextDepth);
      }
    }
    const mainEl = doc.querySelector('main') || doc.body;
    walkContainers(mainEl, 0);
    const maxNestedContainers = Math.max(0, maxContainerDepth - 1);

    // 5. Alternating section backgrounds
    const sections = [...doc.querySelectorAll('main > section')].filter(isVisible);
    const sectionBgs = sections.map(s => ({
      selector: selectorOf(s),
      bg: getComputedStyle(s).backgroundColor
    }));
    let alternatingSectionBgs = 0;
    for (let i = 1; i < sectionBgs.length; i++) {
      if (sectionBgs[i].bg !== sectionBgs[i - 1].bg) alternatingSectionBgs++;
    }

    const metrics = {
      decorativeBadges: decorativeBadgeNodes.length,
      statusBadges: statusBadgeNodes.length,
      filledInInitialViewport,
      maxFilledPerScreen,
      filledFullPage: filledBtns.length,
      outlineInInitialViewport,
      outlineFullPage: outlineBtns.length,
      ghostFullPage: ghostBtns.length,
      uniqueBorderRadii: radiiSet.size,
      uniqueBorderWidths: borderWidthSet.size,
      uniqueFontSizes: fontSizeSet.size,
      uniqueFontWeights: fontWeightSet.size,
      staticShadows: staticShadowNodes.length,
      maxNestedContainers,
      alternatingSectionBgs
    };

    const checks = {
      decorativeBadges: { actual: metrics.decorativeBadges, limit: budget.decorativeBadges, status: metrics.decorativeBadges <= budget.decorativeBadges ? 'LULUS' : 'GAGAL' },
      maxFilledPerScreen: { actual: metrics.maxFilledPerScreen, limit: budget.maxFilledPerScreen, status: metrics.maxFilledPerScreen <= budget.maxFilledPerScreen ? 'LULUS' : 'GAGAL' },
      outlineFullPage: { actual: metrics.outlineFullPage, limit: budget.outlineFullPage, status: metrics.outlineFullPage <= budget.outlineFullPage ? 'LULUS' : 'GAGAL' },
      uniqueBorderRadii: { actual: metrics.uniqueBorderRadii, limit: budget.maxUniqueBorderRadii, status: metrics.uniqueBorderRadii <= budget.maxUniqueBorderRadii ? 'LULUS' : 'GAGAL' },
      uniqueBorderWidths: { actual: metrics.uniqueBorderWidths, limit: budget.maxUniqueBorderWidths, status: metrics.uniqueBorderWidths <= budget.maxUniqueBorderWidths ? 'LULUS' : 'GAGAL' },
      uniqueFontWeights: { actual: metrics.uniqueFontWeights, limit: budget.maxUniqueFontWeights, status: metrics.uniqueFontWeights <= budget.maxUniqueFontWeights ? 'LULUS' : 'GAGAL' },
      maxNestedContainers: { actual: metrics.maxNestedContainers, limit: budget.maxNestedContainers, status: metrics.maxNestedContainers <= budget.maxNestedContainers ? 'LULUS' : 'GAGAL' },
      staticShadows: { actual: metrics.staticShadows, limit: budget.staticShadows, status: metrics.staticShadows <= budget.staticShadows ? 'LULUS' : 'GAGAL' },
      alternatingSectionBgs: { actual: metrics.alternatingSectionBgs, limit: budget.alternatingSectionBgs, status: metrics.alternatingSectionBgs <= budget.alternatingSectionBgs ? 'LULUS' : 'GAGAL' }
    };

    const passedAll = Object.values(checks).every(c => c.status === 'LULUS');

    // 6. Bidirectional Richness Floor (anti-sterile lower bounds)
    const bodyBg = getComputedStyle(doc.body).backgroundColor;
    const mainScope = doc.querySelector('main') || doc.body;

    // 6a. Meaningful non-text visuals & per-section breakdown
    const photoPlaceholders = [...mainScope.querySelectorAll('[data-photo-direction], [data-visual-placeholder]')].filter(el => {
      if (!isVisible(el)) return false;
      const hasContent = el.querySelector('svg, figcaption, [data-photo-caption]') || el.textContent.trim().length >= 20;
      return Boolean(hasContent);
    });
    const standaloneVisualEls = [...mainScope.querySelectorAll('svg, img, canvas')].filter(el => {
      if (!isVisible(el)) return false;
      if (el.closest('[data-photo-direction], [data-visual-placeholder]')) return false;
      if (el.tagName.toLowerCase() === 'svg' && el.parentElement && el.parentElement.closest('svg')) return false;
      const rect = el.getBoundingClientRect();
      const explicitVisual = el.hasAttribute('data-visual-system') || el.hasAttribute('data-chart') || el.hasAttribute('data-viz');
      return explicitVisual || (rect.width >= 48 && rect.height >= 48);
    });
    const meaningfulVisualNodes = [...photoPlaceholders, ...standaloneVisualEls];
    const visualsPerSection = sections.map(sec => ({
      selector: selectorOf(sec),
      count: meaningfulVisualNodes.filter(node => sec.contains(node)).length
    }));

    // 6b. Real data visualizations & semantic table alternative
    const chartCandidates = [...mainScope.querySelectorAll('[data-chart], [data-viz], svg')].filter(el => {
      if (!isVisible(el)) return false;
      const tag = el.tagName.toLowerCase();
      if (tag === 'svg' && el.parentElement && el.parentElement.closest('[data-chart], [data-viz]')) return false;
      const svgTarget = tag === 'svg' ? el : el.querySelector('svg');
      const rect = (svgTarget || el).getBoundingClientRect();
      if (rect.width < 120 || rect.height < 60) return false;
      if (el.hasAttribute('data-chart') || el.hasAttribute('data-viz')) return true;
      const labels = el.querySelectorAll('text').length;
      if (labels < 2) return false;
      const dataCurves = el.querySelectorAll('path, circle, polyline, polygon').length;
      if (dataCurves >= 2) return true;
      const bars = [...el.querySelectorAll('rect')];
      const barDimensions = new Set(bars.map(b => {
        const w = Math.round(parseFloat(b.getAttribute('width') || 0));
        const h = Math.round(parseFloat(b.getAttribute('height') || 0));
        return `${w}x${h}`;
      }));
      return bars.length >= 3 && barDimensions.size >= 3;
    });
    const tableAlternatives = [...mainScope.querySelectorAll('table')].filter(tbl => {
      if (tbl.closest('[hidden].skip-audit')) return false;
      const hasHeaders = tbl.querySelectorAll('th').length >= 2;
      const hasRows = tbl.querySelectorAll('tbody tr, tr').length >= 2;
      return hasHeaders && hasRows;
    });

    // 6c. Composition patterns per section
    const sectionPatterns = sections.map(sec => {
      const secBg = getComputedStyle(sec).backgroundColor;
      const bandType = (!isTransparent(secBg) && secBg !== bodyBg) ? 'full-bleed-band' : 'canvas-band';
      const innerContainer = sec.querySelector('.container, .inner, .wrap') || sec.firstElementChild || sec;
      const containerW = Math.round(innerContainer.getBoundingClientRect().width);
      const widthBucket = containerW <= 780 ? 'narrow' : (containerW <= 1160 ? 'standard' : 'wide');
      const topology = detectSectionTopology(sec);
      const visualCount = meaningfulVisualNodes.filter(n => sec.contains(n)).length + chartCandidates.filter(c => sec.contains(c)).length;
      const visualRole = visualCount > 0 ? 'with-visual-stage' : 'text-led';
      const signature = `${bandType}|${widthBucket}|${topology}|${visualRole}`;
      return { selector: selectorOf(sec), signature, widthPx: containerW };
    });
    const uniqueCompositionPatterns = new Set(sectionPatterns.map(p => p.signature)).size;

    // 6d. Display-to-body ratio
    const bodyFontSize = parseFloat(getComputedStyle(doc.body).fontSize) || 16;
    const headingEls = [...mainScope.querySelectorAll('h1')].filter(isVisible);
    const fallbackHeadings = headingEls.length ? headingEls : [...mainScope.querySelectorAll('h2, h3')].filter(isVisible);
    const maxDisplayPx = fallbackHeadings.reduce((max, h) => Math.max(max, parseFloat(getComputedStyle(h).fontSize) || 0), 0);
    const displayToBodyRatio = Math.round((maxDisplayPx / bodyFontSize) * 100) / 100;

    // 6e. Tabular + lining numerals on data numbers
    const explicitNumericEls = [...mainScope.querySelectorAll('[data-numeric], table td, .kpi-value, .stat-value, .stat-number, .metric-value, .data-number')]
      .filter(el => isVisible(el) && /\d/.test(el.textContent));
    const heuristicNumericEls = [...mainScope.querySelectorAll('*')].filter(el => {
      if (!isVisible(el) || el.closest('svg, a, button, label, select, option')) return false;
      if (el.children.length > 0) return false;
      const txt = el.textContent.trim();
      if (txt.length === 0 || txt.length > 32) return false;
      return /^(?:[+-]?(?:Rp\s?)?[\d.,]+(?:\s?(?:%|T|M|Jt|rb|hari(?:\s+kerja)?|kerja|juta|miliar|triliun|tahun|bulan))?)$/i.test(txt) && /\d/.test(txt);
    });
    const dataNumericEls = [...new Set([...explicitNumericEls, ...heuristicNumericEls])];
    const nonTabularLiningNodes = [];
    let dataNumberCompliant = 0;
    for (const el of dataNumericEls) {
      const fvn = getComputedStyle(el).fontVariantNumeric || '';
      if (/\btabular-nums\b/.test(fvn) && /\blining-nums\b/.test(fvn)) {
        dataNumberCompliant++;
      } else if (nonTabularLiningNodes.length < 10) {
        nonTabularLiningNodes.push({
          selector: selectorOf(el),
          text: el.textContent.trim().slice(0, 24),
          fontVariantNumeric: fvn
        });
      }
    }
    const hasTabularLining = dataNumericEls.length > 0 && dataNumberCompliant === dataNumericEls.length;

    // 6f. CSSOM functional colors, motion declaration & reduced-motion fallback
    const styleSignals = collectStyleSignals(doc);

    const richnessMetrics = {
      meaningfulVisuals: meaningfulVisualNodes.length,
      dataVisualizations: chartCandidates.length,
      hasDataTableAlternative: tableAlternatives.length > 0,
      compositionPatterns: uniqueCompositionPatterns,
      displayToBodyRatio,
      dataNumberChecked: dataNumericEls.length,
      dataNumberCompliant,
      hasTabularLining,
      functionalColors: styleSignals.functionalColorCount,
      hasMotionDeclaration: styleSignals.hasMotionDeclaration,
      hasReducedMotionFallback: styleSignals.hasReducedMotionFallback
    };

    const richnessChecks = {
      meaningfulVisuals: {
        actual: richnessMetrics.meaningfulVisuals,
        minimum: floor.minMeaningfulVisuals,
        status: richnessMetrics.meaningfulVisuals >= floor.minMeaningfulVisuals ? 'LULUS' : 'GAGAL'
      },
      dataVisualizations: {
        actual: richnessMetrics.dataVisualizations,
        minimum: floor.minDataVisualizations,
        status: richnessMetrics.dataVisualizations >= floor.minDataVisualizations ? 'LULUS' : 'GAGAL'
      },
      dataTableAlternative: {
        actual: richnessMetrics.hasDataTableAlternative,
        minimum: floor.requireDataTableAlternative,
        status: (!floor.requireDataTableAlternative || richnessMetrics.hasDataTableAlternative) ? 'LULUS' : 'GAGAL'
      },
      compositionPatterns: {
        actual: richnessMetrics.compositionPatterns,
        minimum: floor.minCompositionPatterns,
        status: richnessMetrics.compositionPatterns >= floor.minCompositionPatterns ? 'LULUS' : 'GAGAL'
      },
      displayToBodyRatio: {
        actual: richnessMetrics.displayToBodyRatio,
        minimum: floor.minDisplayToBodyRatio,
        status: richnessMetrics.displayToBodyRatio >= floor.minDisplayToBodyRatio ? 'LULUS' : 'GAGAL'
      },
      tabularLining: {
        actual: richnessMetrics.hasTabularLining,
        minimum: floor.requireTabularLining,
        status: (!floor.requireTabularLining || richnessMetrics.hasTabularLining) ? 'LULUS' : 'GAGAL'
      },
      functionalColors: {
        actual: richnessMetrics.functionalColors,
        minimum: floor.minFunctionalColors,
        status: richnessMetrics.functionalColors >= floor.minFunctionalColors ? 'LULUS' : 'GAGAL'
      },
      motionDeclaration: {
        actual: richnessMetrics.hasMotionDeclaration,
        minimum: floor.requireMotionDeclaration,
        status: (!floor.requireMotionDeclaration || richnessMetrics.hasMotionDeclaration) ? 'LULUS' : 'GAGAL'
      },
      reducedMotionFallback: {
        actual: richnessMetrics.hasReducedMotionFallback,
        minimum: floor.requireReducedMotionFallback,
        status: (!floor.requireReducedMotionFallback || richnessMetrics.hasReducedMotionFallback) ? 'LULUS' : 'GAGAL'
      }
    };

    const richnessPassedAll = Object.values(richnessChecks).every(c => c.status === 'LULUS');
    const bidirectionalPassedAll = passedAll && richnessPassedAll;

    return {
      url: location.href,
      viewportWidth: window.innerWidth,
      passedAll,
      richnessPassedAll,
      bidirectionalPassedAll,
      metrics,
      checks,
      richnessMetrics,
      richnessChecks,
      details: {
        decorativeBadgeNodes,
        statusBadgeNodes,
        filledBtns,
        outlineBtns,
        ghostBtns,
        borderRadiiValues: [...radiiSet].sort(),
        borderWidthValues: [...borderWidthSet].sort(),
        fontSizeValues: [...fontSizeSet].sort((a, b) => parseFloat(a) - parseFloat(b)),
        fontWeightValues: [...fontWeightSet].sort(),
        staticShadowNodes,
        nestedOffenders,
        sectionBgs
      },
      richnessDetails: {
        meaningfulVisualNodes: meaningfulVisualNodes.map(n => selectorOf(n)),
        visualsPerSection,
        chartNodes: chartCandidates.map(n => selectorOf(n)),
        tableAlternativesCount: tableAlternatives.length,
        sectionPatterns,
        functionalColorRoles: styleSignals.functionalRoles,
        functionalColors: styleSignals.functionalColors,
        nonTabularLiningNodes
      }
    };
  }

  root.runSlopAudit = runSlopAudit;
  return runSlopAudit;
})(typeof window !== 'undefined' ? window : globalThis);

# DESIGN.md — Kuratorku.com Institutional Design System (v2)y

> Binding rules for every page, component, document, and email of Kuratorku.com.
> **AI agents: read this file completely before changing any UI.** If a task conflicts with this file, follow this file and report the conflict.

---

## 0. How to use this file

- **Scope: presentation layer only** (layout, components, copy, formatting, motion). Never change business logic, access rules, data schema, calculations, or endpoints.
- **Work in stages.** Audit first (no code changes) → wait for decisions → implement stage by stage, on a separate branch, one commit per stage, approval at the end of each stage.
- **Missing backend data:** build UI that accepts the data, show only what exists, leave `// TODO(data): ...`, and list it in the stage report. Never invent data.
- **Section 12 (human decisions) is not yours to decide.** Report, propose options, wait.
- **Before finishing any task,** run Section 13 (guardrails + definition of done).

---

## 1. Philosophy: Institutional Legal & Financial Authority

Kuratorku.com is an Indonesian platform for bankruptcy (kepailitan), PKPU, and bankruptcy-asset (boedel) auctions under UU No. 37 Tahun 2004. Users: Kurator/Pengurus, Hakim Pengawas, Kreditur, Investor, Admin. All are legal or financial professionals. The interface must feel calm, exact, and trustworthy: closer to a well-run court registry than a startup landing page.

Every page (public `/`, `/cases`, `/curators`, `/bidding`, `/legal-hub`; auth `/login`, `/register`, `/forgot-password`; all five role dashboards `/dashboard/*`) shares one design language.

**Principles**
1. **Facts, not verdicts.** The system shows what happened and when. It never scores, grades, ranks, or labels people or institutions ("Excellent", "A+", stars, "On-Time" as a verdict). Status derived from dates is allowed and worded factually ("Diserahkan terlambat 12 hari").
2. **Answer the user's first question.** Each page opens with what the user needs most: what needs my action, what is the status, when is the deadline.
3. **Every element earns its place.** Test: "If I remove this, is information or function lost?" If not, remove it. Borders, dividers, numbering, and labels must encode information. Numbering only for real sequences (stages, steps).
4. **No claim without a mechanism.** "Immutable", "Encrypted", "Verified", "Resmi", "Clear & clean", "0 pelanggaran" appear only when backed by real data or a real, implemented mechanism.
5. **One way to do each thing.** One format helper, one label dictionary, one status palette, one primary-action color, one shell.
6. **Honest emptiness.** Missing data is hidden. Empty states say what is missing and what to do next.

---

## 2. Anti-Slop Catalogue (banned unless stated)

**Surfaces & effects**
- Gradients (purple/blue/orange), gradient text, glow, glassmorphism (`backdrop-blur-*`), `shadow-xl`/`shadow-2xl`, colored shadows, blob/grid/aurora backgrounds.
- `rounded-2xl`/`rounded-3xl`, pill-shaped containers.
- Card-in-card, a big white wrapper card around a grid or table, identical rounded cards for non-parallel content.

**Typographic tells**
- Eyebrow pills/badges above headlines; two-color headlines (one accented word); all-caps tracked labels (only allowed: table column headers); small typographic labels above content that add no information.
- Spaced-em-dash labels ("WORD — fragment"); middle-dot strings as a design device ("Kurator · Pengurus · Kreditur"; compact metadata is fine only when every segment is real data); `→` appended to every link/button (an arrow icon is allowed only for external links `↗`).
- Monospace for data labels or figures (see Section 4).

**Imagery & icons**
- Icon-in-colored-box; decorative icons in titles, labels, and data rows; medal/shield/eye/clock icons used as decoration; emoji.
- Placeholder image blocks ("Foto Dokumentasi Aset (Terverifikasi)"), stock photos presented as evidence, generic illustrations.

**Content**
- Round/fake numbers, fake logos/testimonials/avatars, real institution or person names in seed data.
- Clichés: "seamless", "revolusioner", "world-class", "Bukan hanya X, tapi juga Y". Mixed English/Indonesian UI terms.

**Interaction**
- Two competing primary buttons on one screen. Carousels with one item; autoplay carousels. `animate-pulse` dots.

---

## 3. Color

### Tokens
```css
:root {
  --akpi-navy: #001840;      /* sidebar, dark headers, ink on amber fills */
  --akpi-deep: #06152d;      /* hover/elevated navy */
  --canvas: #f8fafc;         /* bg-slate-50 */
  --surface: #ffffff;        /* cards, tables */
  --ink: #0d1526;            /* primary text */
  --ink-2: #475569;          /* secondary text (slate-600) */
  --hairline: #e2e8f0;       /* border-slate-200 */
}
.dark {
  --canvas: #061123;
  --surface: #0b192e;        /* elevated: #0f1f38 */
  --hairline: #1e293b;       /* border-slate-800 */
}
```

### Single accent: Institutional Amber
Amber is used **only** for: (1) the one primary button per view, (2) the active-navigation indicator, (3) "needs action"/active status, (4) focus rings. **Never** for numbers, decorative icons, ordinary card borders, or "financial emphasis" (amounts use ink color).

| Use | Light | Dark |
|---|---|---|
| Fill (primary button) | `amber-500`, hover `amber-600`, **navy text** | same |
| Text/links | `amber-700` or darker | `amber-400` |
| Active nav | `border-l-2 border-amber-500 bg-white/10 text-white` | same |

**Contrast rule:** white text on `amber-600` is about 3.2:1 and fails AA for normal text. Use navy text on amber fills. Amber text on light surfaces must be `amber-700` or darker (about 5:1). Verify every pair with a contrast checker.

### Buttons (one primary per view)
```
Primary:     h-10 rounded-md bg-amber-500 px-4 text-sm font-semibold text-[#001840] hover:bg-amber-600
             focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2
Secondary:   h-10 rounded-md border border-slate-300 bg-white text-[#0d1526] hover:bg-slate-50
             dark:border-slate-700 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800
Link:        text-amber-700 underline-offset-2 hover:underline dark:text-amber-400
Destructive: bg-rose-700 text-white hover:bg-rose-800 (always behind ConfirmDialog)
```
Disabled buttons stay visible and show the reason next to them (never silently hidden). Same primary color on every page, every role.

### Semantic status (muted)
| Meaning | Classes | Typical labels |
|---|---|---|
| Success | `bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60` | Terverifikasi, Diakui, Terjual, Selesai, Diserahkan tepat waktu |
| Needs action | `bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60` | Perlu tindakan, Menunggu verifikasi, Menunggu persetujuan, Lelang dibuka |
| Urgent / negative | `bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60` | Terlambat, Ditolak, Dibantah, Ditangguhkan, Verifikasi gagal, tenggat < 3 hari |
| Neutral | `bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/70 dark:text-slate-300 dark:border-slate-700` | Draf, Lelang ditutup, Belum jatuh tempo, **jenis perkara** (Pailit, PKPU tetap, PKPU sementara) |

Rules: **case type is a category, not a state, so it is neutral.** Zero is never green. Status is never conveyed by color alone (the label is always present). One status badge per object.

---

## 4. Typography

- **Display** (`font-serif`, Source Serif 4, weight 400–600, `tracking-tight`): page title (`text-2xl sm:text-3xl`), section titles, modal titles, large KPI figures. Headlines are sentence case, one color, no accented word.
- **UI/body** (`font-sans`, Inter): labels `text-xs`/`text-sm font-medium` in sentence case. Table headers `text-[11px] font-semibold uppercase tracking-wider` are the **only** uppercase allowed. No `font-black`/`font-extrabold`.
- **No monospace anywhere (v2).** Figures, case numbers, and timestamps use `tabular-nums lining-nums` on Inter or Source Serif 4. Verify `tnum`/`lnum` render in the served Source Serif 4 subset; if not, use Inter for numerals in tables.
- **Case numbers** ("45/Pdt.Sus-PKPU/2026/PN Niaga Jkt.Pst") are secondary text with a copy button. The **debtor name** is the title.
- **Scale:** h1 2xl–3xl, h2 xl, h3 lg, body sm/base, caption xs. Prose max width 70ch; serif prose line-height 1.6–1.7. Use typographic quotes and apostrophes.
- Figures and units stay on one line (`whitespace-nowrap`): "Rp 125 M+" never wraps.

---

## 5. Geometry, Elevation & Layout

- **Radii:** cards, panels, modals, tables `rounded-lg`; buttons, inputs, selects, badges `rounded-md`.
- **Elevation:** flat. `border border-slate-200 dark:border-slate-800`. Modals/popovers: `shadow-lg border border-slate-200 dark:border-slate-700`.
- **Spacing:** 4/8 scale. One `<Container>` (public, `max-w-7xl`) and one `<PageContent>` (dashboard). **All left edges align** (navbar, header, filters, content, footer).
- **Page headers are compact:** one H1, one sentence of intro, content begins within the first viewport at 1440×900.
- **Filter bars** are sticky below the navbar.
- **Card rows:** equal height, footers aligned (`flex flex-col`, actions pushed to the bottom), titles `line-clamp-2`.
- **Grids:** 3 columns ≥1280px, 2 columns 768–1279px, 1 column <768px. Tables become card lists below 768px. Test at 375, 768, 1440.
- **Footer:** compact. Brand + one sentence, two or three link columns (only pages that exist), one legal line. No "Kembali ke Atas".
- Separate sections with hairlines and spacing, not nested boxes.

---

## 6. Formatting, Language & Data Rules

### Single sources of truth
- `lib/format.ts` is the **only** place allowed to use `Intl`/`toLocale*`:
  - `formatRupiah(v, { compact })` → "Rp 40 miliar", "Rp 1,5 miliar", "Rp 850 juta". Full form "Rp 40.000.000.000" is secondary text. **Compact never drops the unit.**
  - `terbilang(n)` → "lima belas miliar lima ratus juta rupiah".
  - `formatDate` → "15 Maret 2026"; `formatDateTime` → "19 November 2026, 02.08 WIB" (always with time zone).
  - `daysLeft(date)` → "5 hari lagi" / "terlambat 3 hari" (urgent color only if < 3 days, plus text).
  - `initials(name)` → first letter of first and last name, ignoring titles (S.H., M.H., LL.M., Dr., Ir., …): "Ahmad Fauzi, S.H." → "AF".
- `lib/labels.ts`: every enum → Indonesian label. **Raw enums never reach the UI.** Missing key: throw in dev, humanized fallback in prod.

```ts
CASE_TYPE      = { PAILIT: "Pailit", PKPU_SEMENTARA: "PKPU sementara", PKPU_TETAP: "PKPU tetap" }
ASSET_CATEGORY = { LAND_AND_BUILDING: "Tanah dan bangunan", MACHINERY: "Mesin dan peralatan", CASH: "Kas dan piutang" }
AUCTION_STATUS = { OPEN: "Lelang dibuka", CLOSED: "Lelang ditutup", SOLD: "Terjual" }
AUDIT_ACTION   = { VERIFIED_CLAIM: "Tagihan diverifikasi", APPROVE_BID: "Penawaran disetujui" }
// Extend from the real enums found in the codebase. Do not guess values.
```

### Glossary & voice
- **Kurator** (pailit) / **Pengurus** (PKPU); Hakim Pengawas; Debitur; Kreditur (separatis, preferen, konkuren); Boedel; Tagihan. Spell out DPT (Daftar Piutang Tetap) and DPS (Daftar Piutang Sementara) on first use.
- **"bid"** is the product term for investor offers (Ajukan bid, Portofolio bid, Bid tertinggi). **"penawaran"** in formal prose. Never mix within one component.
- "Unggah"/"Unduh" (not Upload/Download), "aset" (not "objek"), "jejak audit" (not "audit trail"), "Surat Minat (LOI)".
- Indonesian formal, plain verbs, active voice, sentence case. A CTA says exactly what happens ("Ajukan tagihan", "Kirim penawaran") and the same verb is used through the flow (button "Kirim penawaran" → toast "Penawaran terkirim"). Errors say what went wrong and how to fix it, never apologize. Empty states invite action.

### Empty-data rule
No `-`, `N/A`, "Indonesia", "Tim Kurator Terdaftar", or other filler. Hide the row; hide the section if all rows are empty; or show one informative empty state.

### Never invent
Names, amounts, case numbers, dates, deadlines, licenses, contacts, photos, legal claims. Seed/demo data uses neutral names only (no real banks, companies, or people). Do not recompute business values in the UI if the backend provides them; deriving status from dates is fine.

---

## 7. Dashboard Shell (one component for all five roles)

`<DashboardShell>` is shared by `admin`, `curator`, `creditor`, `investor`, `observer`. No page builds its own sidebar or header.

**Sidebar** (`#001840`, `w-64`, collapsible)
- Brand; role subtitle in sentence case: "Portal kurator", "Portal kreditur", "Portal investor", "Portal hakim pengawas", "Portal admin".
- Active item: `border-l-2 border-amber-500 bg-white/10 text-white`. Count badges only when > 0.
- **"Perkara aktif" card** (curator, observer, creditor): debtor name as title, full case number (up to 2 lines), court **once**, **one** neutral type badge. Nothing truncated or duplicated.
- **Footer:** theme toggle ("Mode gelap") and user menu: name + role, tooltip when truncated, optional avatar via `initials()`, logout. Verification status appears in **one** place only.

**Header** (`h-16`, `bg-white dark:bg-[#0b192e] border-b`, generous vertical padding)
- Serif page title + one-line subtitle.
- Case selector (full case number visible, tooltip for court), `NotificationBell` (opens a list; count only when > 0; `aria-label` includes the count), at most one secondary action.
- **No theme toggle in the header.**

---

## 8. Shared Components

Build once in `components/ui`, use everywhere. Do not restyle per page.

| Component | Rules |
|---|---|
| `StatusBadge` | One per object, label from dictionary, text + color. |
| `StatStrip` | One container, 1px dividers, label above, figure below, optional context line. No icons, no per-cell colors. |
| `DataList` | Label left, value right, hides empty rows. |
| `DataTable` | Semantic table (`caption`, `th scope`, `aria-sort`), sortable, row = one link, hairline hover. Becomes card list <768px. |
| `Tabs` | Underline style, no icons, ARIA tabs, active tab in URL hash (`#jadwal`). |
| `Stepper` | Horizontal, 1px line; done / active / next. Only real stages with real dates. |
| `AssetCard` | Variants: public, investor, curator. No image block unless a real photo exists. |
| `FilterBar` | Sticky; state in query string; active-filter chips; "Atur ulang"; result count with `aria-live`. |
| `Combobox` | Replaces native `<select>`; keyboard-navigable. |
| `MoneyInput` | `Rp` prefix, live thousand separators, compact echo ("Rp 15,5 miliar") + `terbilang`, inline validation with `aria-describedby`. No misleading placeholder amounts. |
| `DocumentUpload` | Accepted types and size taken from the backend limits, progress, remove, retry, clear errors. |
| `DocumentList` | Name, type, size, date, "Unduh". |
| `ConfirmDialog` | For every binding action: summary of what will happen, required consent/reason when needed, double-submit prevention, focus trap, Esc, focus returns to trigger. |
| `Dialog` / `Drawer` | Focus trap, Esc, `aria-labelledby`, one footer primary action, no duplicate "Tutup" button next to the X. |
| `EmptyState` | One line + optional action. No large icon. |
| `Skeleton` | Same size as the real content (no layout shift). |
| `Toast` | Max 3, auto-dismiss, pause on hover, `aria-live`. |

---

## 9. Page Patterns

**9.1 Public list pages** (directory, catalog): compact header → sticky `FilterBar` → results (table by default for cases/people; cards for assets) → empty/skeleton/pagination → explainer section *below* the list.

**9.2 Detail pages:** title (debtor or asset) + one status badge + `StatStrip` → `Tabs` (Ringkasan, Jadwal, Dokumen) → sticky action panel on the right (desktop) / sticky bottom button (mobile) → "Diperbarui pada …" source line.

**9.3 Dashboard home:** "Perlu tindakan" first (real data; one line when empty) → `StatStrip` → main table → deadlines/schedule → recent activity. No cards that merely repeat sidebar menu items.

**9.4 Queue/data pages:** `DataTable` with segments (Perlu tindakan | Selesai), filters, row actions as text links, detail in `Drawer`, binding actions through `ConfirmDialog`, outcomes written to the audit trail by the backend.

**9.5 Binding forms** (bids, claims, approvals, registrations, broadcasts): input → review summary → explicit consent → submit (no double submit) → receipt (reference number, time, status, download). Design every state: not logged in, unverified, closed/deadline passed, insufficient deposit/eligibility (disabled with visible reason), server error (data preserved), offline. Participant identity is read-only from the verified profile.

**9.6 Supervision & audit:** facts only. Audit table columns: time (with zone), action (label), object (linked, with amount), actor (name + role), result, detail drawer. Filters (action, actor, date range, search) in URL; export CSV/PDF with metadata (case, range, export time, exporter) if permitted. Integrity indicator only if a real mechanism exists ("Integritas log diverifikasi pada …"). Read-only.

**9.7 Auth** (`/login`, `/register`, `/forgot-password`): centered single column (`max-w-md`), brand on top, no hero art or quotes. Proper `autocomplete` (`username`, `current-password`, `new-password`), show/hide password, neutral error messages ("Email atau kata sandi tidak sesuai."), neutral reset message ("Jika email terdaftar, tautan akan dikirim."), clear post-registration verification status. Never store credentials in `localStorage` or log them.

**9.8 Knowledge/legal content** (`/legal-hub`, process guide, FAQ): reading width ≤70ch, table of contents for long documents, source and published/updated date on every item, citations only from verified sources, document lists with publisher/date/size/download.

**9.9 Print/PDF (A4)** (quarterly report, claim form, bid receipt, audit export): header (small logo, document name, document ID, case), Source Serif 4 title, Inter 10–11pt body, hairline tables without heavy fills, footer (created time with zone, page x/y, "Dicetak dari Kuratorku.com"), black-and-white friendly. Figures and dates via helpers. No signature, QR, or "sah/resmi" claims unless the backend supports them and Section 12 approves.

**9.10 System pages** (404, 500, empty, loading): serif title, one sentence, one action, small error code. No illustrations.

---

## 10. Motion (restrained, institutional)

Motion answers a person's action or shows what changed. Non-user-triggered motion is rare and deliberate.

- **Tokens:** `--motion-fast: 150ms`, `--motion-base: 220ms`, `--motion-slow: 320ms` (maximum); ease-out for entering, ease-in for leaving; animate only `transform` and `opacity`.
- **Used:** button/link/input state transitions; dialog/drawer/dropdown open and close (fade + scale 0.98→1, or slide); tab underline slide; 150ms crossfade when filters or tabs swap content; skeleton → content; brief row highlight when data changes; confirm check mark; toast in/out; **one** orchestrated load sequence on the landing hero (headline → paragraph → CTA, under 600ms); optional single-pass, subtle reveal on public marketing sections (not on every section).
- **Not used:** entrance animations on dashboard lists/cards/tables, staggered lists, count-up numbers, hover lift/scale on cards, parallax, scroll-jacking, tilt/3D, custom cursors, typing/rotating text, marquee, particles, aurora/blobs, animated gradients, glow pulses, splash screens, autoplay carousels, bounce/elastic.
- `animate-pulse` only inside `Skeleton` (a subtle shimmer is preferred).
- `prefers-reduced-motion`: all non-essential motion off; final values appear immediately. Reserve space to avoid layout shift.
- CSS first. Use Motion (framer-motion) only for mount/unmount presence; never two animation libraries.

---

## 11. Accessibility & Performance

- WCAG 2.2 AA in light and dark mode. Visible keyboard focus. Correct heading order. Target size ≥24px.
- Tables semantic; tabs/dialogs follow ARIA patterns; results, errors, and status changes announced with `aria-live="polite"`; status never by color alone.
- Forms: associated labels, `aria-describedby` errors, focus moves to the first error.
- Landing hero photo: decorative (`alt=""`, `aria-hidden`), navy scrim ≥80% so text meets AA over any part of the image, `next/image` with `priority`.
- All images via `next/image`, lazy loaded. No Lighthouse regression, minimal added bundle, no layout shift.
- Never store sensitive or financial data in `localStorage`; never `console.log` amounts, files, or credentials.

---

## 12. Human Decisions (agents must not decide these)

Report findings, propose options with a recommendation, then wait for an answer.

1. Which data is public, masked, or verified-users-only (NPWP, address, contacts, curator license, names).
2. Role rules in bids and claims (may a curator see or submit bid/claim forms; conflicts of interest; who approves what).
3. Bid rules: deposit before bidding, minimum and increment, revision/withdrawal, which asset types and statuses are biddable.
4. Any scoring, rating, or ranking of people or institutions (default: not allowed).
5. Integrity/security claims (immutable, encrypted, verified) and anomaly-detection claims.
6. Legal citations, disclaimers, "resmi" wording, legal validity of PDFs or e-signatures.
7. URL changes (UUID → slug) and redirects.
8. Irreversible actions (approvals, broadcasts, deletions, suspensions): wording and whether undo exists.
9. Seed/demo data policy.
10. Retention and export of audit logs.

---

## 13. Guardrails & Definition of Done

Run before every commit (ripgrep). Expect **zero hits** outside the stated exceptions; review the hits otherwise.

```bash
rg -n "font-mono|IBM Plex Mono" app components lib
rg -n "rounded-(2xl|3xl)|shadow-(xl|2xl)|backdrop-blur|bg-gradient|bg-clip-text" app components
rg -n "animate-pulse" app components                       # only inside Skeleton
rg -n "\b(orange|purple|indigo|violet|fuchsia|pink|cyan|sky|teal)-[0-9]{2,3}" app components
rg -n "uppercase|tracking-(wider|widest)" app components   # only table headers
rg -n "toLocaleString|Intl\.(NumberFormat|DateTimeFormat)" app components   # only lib/format.ts
rg -n "LAND_AND_BUILDING|MACHINERY|CASH|PKPU_TETAP|PKPU_SEMENTARA|VERIFIED_CLAIM|APPROVE_BID" app components   # only lib/labels.ts and the data layer
rg -n "['\"]-['\"]" app components                         # filler placeholders
rg -n "Upload|Letter of Intent|Audit Trail|Immutable|On-Time|Excellent|Encrypted|Window\b" app components   # English UI copy
rg -n "ThemeToggle" app components                         # only sidebar footer
rg -n "localStorage|console\.log" app components lib
```

**Definition of done**
- [ ] No monospace; at most two font families; figures use tabular lining numerals.
- [ ] All money/dates/initials go through `lib/format.ts`; all enums through `lib/labels.ts`; units never dropped ("Rp 8 miliar", not "Rp 8").
- [ ] One status badge per object; status palette from Section 3; case type neutral; zero never green.
- [ ] One primary button per view, amber fill with navy text; same on every page.
- [ ] No decorative badges, icons, gradients, glow, glass, two-color headlines, filler "-", placeholder image blocks, or card-in-card.
- [ ] No scores, grades, or verdict words; no claim without a mechanism.
- [ ] All five dashboards use `<DashboardShell>`; theme toggle in sidebar footer; correct initials; nothing truncated or duplicated.
- [ ] Binding actions have review, consent, receipt, and every state designed.
- [ ] Left edges aligned; card heights equal; responsive at 375/768/1440.
- [ ] Motion follows Section 10; `prefers-reduced-motion` respected; no layout shift.
- [ ] WCAG AA contrast in both modes; full keyboard operation; dialogs trap and restore focus.
- [ ] Every missing-data item is a recorded `TODO(data)`; nothing invented.

---

## 14. Decision Log (v1 → v2)

| Change | Reason |
|---|---|
| IBM Plex Mono removed; `tabular-nums lining-nums` on Inter/Source Serif 4 | Monospace gave a "terminal" look, ambiguous 12-digit amounts, and wrapping ("Rp 125" / "M+"). Tabular numerals align columns without it. |
| Primary button: amber fill + navy text (v1: navy primary + orange) | One consistent primary color; white on amber-600 is about 3.2:1 and fails AA. |
| Amber limited to primary action, active nav, needs-action status, focus | v1 allowed "key financial emphasis", which produced amber amounts everywhere. |
| Sentence-case role subtitles; uppercase only for table headers | Uppercase tracked labels were used on nearly every block. |
| Theme toggle moved from header to sidebar footer | Reduces header clutter; keeps the shell identical across roles. |
| Added: facts-not-verdicts, no-claim-without-mechanism, empty-data rule | Observed scores ("A+ EXCELLENT"), "Immutable/Encrypted" labels, and "-" fillers. |
| Added: format helpers, label dictionaries, glossary | Enum leaks (`PKPU_TETAP`), "Rp 8" unit bug, mixed-language copy, wrong initials ("AH", "DI"). |
| Motion reduced: no list/section entrance animation, no count-up, no hover lift | Institutional tone; those effects read as generic generated UI. Motion now responds to actions. |
| Added: page patterns, human decisions, guardrails | Make audits repeatable and keep legal/policy decisions with people, not agents. |

---
name: frontend-modern-web
description: Panduan Frontend Engineering (arsitektur komponen, tata letak responsif, standar web/SEO, performa Core Web Vitals, aksesibilitas WCAG 2.2 AA, serta implementasi Next.js, React, Tailwind CSS, Laravel Blade, Inertia.js, dan Livewire). Seluruh keputusan visual (warna, font, radius, elevasi, motion) wajib dibaca dari ./DESIGN.md melalui design-system-tokens.
---

# Frontend Engineering Guide (`frontend-modern-web`)

Skill ini berfokus murni pada **rekayasa frontend** (*frontend engineering*). Dilarang menetapkan font, palet warna, mode gelap, glassmorphism, radius, gradien, atau bayangan secara global di luar `./DESIGN.md`.

---

## 0. Kontrak dengan `DESIGN.md` & Standar Pengujian
1. **Otoritas Desain**: Baca `./DESIGN.md` (Level 2) dan turunkan seluruh nilainya ke variabel semantik lewat `design-system-tokens` sebelum menulis komponen UI.
2. **Eksekusi `modern-web-guidance`**: Bila plugin `modern-web-guidance` dan akses runtime/cache-nya tersedia, konsultasikan untuk pola HTML/CSS/JS browser modern; bila tidak tersedia offline, jangan klaim telah dijalankan.
3. **Verifikasi Browser**: Periksa render nyata pada viewport **`375px`**, **`768px`**, dan **`1280px`** via `chrome-devtools-plugin` + `.agents/design-library/_shared/slop-audit.js` + `accessibility-wcag` (`verification-and-qa`).

---

## 1. Architecture & Component Composition
- **Komposisi & Pemisahan Tanggung Jawab**: Pisahkan komponen presentasi berulang (`Button`, `Field`, `DataTable`, `Modal`) dari logika fetch/state atau orkestrasi halaman.
- **Token-Driven Styling**: Seluruh komponen hanya mereferensikan token semantik (`var(--accent-primary)`, `var(--bg-surface)`, `var(--radius-control)`); hindari duplikasi style dan hindari wrapper komponen sekali pakai tanpa kebutuhan nyata.
- **Clean State & CSS**: Kelola state asinkron (`idle/loading/empty/error/success/disabled` melalui `ui-states-and-interaction`), cegah `z-index` liar, dan jaga struktur CSS tetap terbaca serta hemat spesifikasi (*specificity*).

---

## 2. Responsive Engineering
- **Mobile-First**: Tulis gaya dasar untuk layar sempit (`375px`), lalu perluas bertahap di `>= 768px` (tablet) dan `>= 1024px/1280px` (desktop).
- **Layout & Fluid Typography**: Gunakan CSS Grid / Flexbox / Container Queries secara tepat, `min-width: 0` pada item grid, dan skala `clamp()` atau breakpoint token sesuai `./DESIGN.md`.
- **Touch Target & Zero Overflow**: Semua tombol, tautan navigasi, dan kontrol interaktif minimal `44x44px` pada mobile; wajib `document.documentElement.scrollWidth <= window.innerWidth` di `375px`, `768px`, dan `1280px`.

---

## 3. Web Standards & SEO Fundamentals
- **HTML5 Semantik**: Gunakan tepat satu `<h1>` per halaman, struktur heading berurutan (`<h1> -> <h2> -> <h3>`), serta landmark `<header>`, `<nav>`, `<main>`, `<section>`, dan `<footer>`.
- **Metadata & OpenGraph**: Pada halaman publik/landing page, siapkan `<title>` spesifik, `<meta name="description">`, canonical URL, dan tag OpenGraph/Twitter sesuai domain klien.
- **Form Semantics & ARIA Minimal**: Gunakan `<button type="button|submit">` untuk aksi dan `<a href>` untuk navigasi; pasang `<label for>`, `autocomplete`, dan `aria-describedby` pada input; tambahkan ARIA hanya jika semantik HTML native tidak mencukupi.

---

## 4. Performance Engineering
- **Gambar & Media**: Gunakan format modern (`AVIF`/`WebP` untuk foto, SVG inline terkompresi untuk ikon/diagram), tetapkan dimensi eksplisit (`width`/`height` atau `aspect-ratio`) untuk `CLS = 0`, pasang `fetchpriority="high"` + `loading="eager"` pada media LCP, dan `loading="lazy"` di bawah lipatan layar.
- **Font Optimization**: Gunakan `WOFF2` subset dengan `font-display: swap` dan fallback metrik (`size-adjust` / `ascent-override`). Untuk profil `gov-enterprise`, font **wajib self-hosted** tanpa request CDN eksternal saat runtime.
- **Bundle & Runtime Budget**: Hindari JavaScript klien yang tidak diperlukan (utamakan Server Components / HTML+CSS native seperti `<details>`, `:focus-visible`), muat skrip berat secara `defer` atau lazy `import()`, dan patuhi target Core Web Vitals di `.agents/design-library/_shared/performance-budget.md`.

---

## 5. Accessibility (WCAG 2.2 AA)
- **Navigasi Keyboard**: Seluruh alur utama dapat diakses lewat `Tab`/`Shift+Tab`/`Enter`/`Space`/`Esc`; modal/drawer menutup dengan `Esc` dan mengembalikan fokus ke pemicu.
- **Focus Management**: Terapkan `:focus-visible` dengan garis tegas sesuai `--focus-ring` di `./DESIGN.md` dan `scroll-padding-top` agar elemen fokus tidak tertutup header `sticky`.
- **Kontras & Motion**: Pertahankan kontras warna dari token `./DESIGN.md` (`>= 4.5:1` teks normal, `>= 3:1` komponen UI/grafik), serta wajib bungkus animasi non-esensial dengan `@media (prefers-reduced-motion: reduce)`.
- **Screen Reader**: Gunakan `aria-live="polite"`/`role="alert"` secara terukur pada ringkasan error form, filter dinamis, dan notifikasi status.

---

## 6. Framework Implementation Patterns (Mengonsumsi Token `DESIGN.md`)

### A. Next.js & React (App Router + Tailwind)
- Pertahankan batas Server vs Client Component (`'use client'` hanya untuk interaktivitas klien; gunakan Metadata API untuk SEO).
- Petakan utilitas Tailwind ke variabel semantik dari `DESIGN.md` sehingga pergantian arketipe atau mode tema tidak membutuhkan pengubahan class per komponen:
  ```html
  <button type="button" class="inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius-control)] bg-[var(--accent-primary)] px-4 py-2 font-bold text-[var(--accent-on-primary)] transition-[background-color] duration-[var(--duration-fast)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-50">
    Simpan Perubahan
  </button>
  ```

### B. Laravel Blade + Livewire + Inertia.js
- **Blade Components** (`resources/views/components/button.blade.php`) membaca variabel semantik `--*` dari `./DESIGN.md`, bukan warna atau radius acak:
  ```blade
  @props(['variant' => 'primary', 'type' => 'button'])
  @php
      $base = 'inline-flex min-h-[44px] items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-[var(--radius-control)] transition-colors duration-[var(--duration-fast)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] disabled:opacity-50 disabled:cursor-not-allowed';
      $variants = [
          'primary' => 'bg-[var(--accent-primary)] text-[var(--accent-on-primary)] hover:bg-[var(--accent-primary-hover)] border border-[var(--accent-primary)]',
          'outline' => 'bg-transparent text-[var(--text-primary)] border border-[var(--border-strong)] hover:bg-[var(--bg-surface)]',
      ];
  @endphp
  <button type="{{ $type }}" {{ $attributes->merge(['class' => $base . ' ' . ($variants[$variant] ?? $variants['primary'])]) }}>
      {{ $slot }}
  </button>
  ```
- **Livewire**: gunakan `wire:loading.attr="disabled"` untuk anti double-submit, `wire:key` unik pada item list, dan `@error('field')` berpasangan `aria-invalid`/`aria-describedby`.
- **Inertia.js**: gunakan `useForm` (`processing`, `errors`, `reset`) untuk state loading/error dan `<Link>` untuk transisi antar-rute.

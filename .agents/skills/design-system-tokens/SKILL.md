---
name: design-system-tokens
description: Mendefinisikan satu sumber kebenaran token desain semantik (latar, permukaan, teks, border, aksen, status, tipografi, spasi, radius, elevasi, motion, breakpoint) sebagai CSS variables dan/atau konfigurasi Tailwind yang diturunkan langsung dari ./DESIGN.md. Aktifkan saat memulai UI project baru atau menstandarkan komponen UI. JANGAN aktifkan jika task hanya mengubah logika backend.
---

# Design System Tokens

## Prinsip Otoritas Desain
- **`./DESIGN.md` adalah satu-satunya sumber kebenaran nilai token**. Skill ini menstandarkan **penamaan token semantik**, bukan menyeragamkan tampilan antar-arketipe. Nilai warna, font, radius, bayangan, dan motion wajib mengikuti arketipe proyek pada `./DESIGN.md`.
- Dilarang memanggil `stitch-design-taste` secara otomatis sebagai pembuat `DESIGN.md`. Jika `./DESIGN.md` belum ada, jalankan `project-intake` untuk memilih arketipe dari `.agents/design-library/` lalu salin dan sesuaikan menjadi `./DESIGN.md`.

## Langkah Konkret
1. **Baca `./DESIGN.md` & `.agents/project.md`**: Pastikan arketipe sumber, palet terang/gelap (jika ada), tipografi, skala spasi, radius, elevasi, dan peta motion sudah terkunci.
2. **Turunkan Token Semantik ke CSS Custom Properties (`:root` / `[data-theme]`)**:
   - **Background & Surface**: `--bg-canvas`, `--bg-warm` (atau `--bg-tint` bila arketipe memakai pita tonal), `--bg-surface`, `--bg-elevated`.
   - **Text Hierarchy**: `--text-primary`, `--text-secondary`, `--text-muted` *(lolos kontras target `DESIGN.md` / WCAG 2.2 AA)*.
   - **Border**: `--border-subtle`, `--border-strong`, `--focus-ring`.
   - **Accent & Data**: `--accent-primary`, `--accent-primary-hover`, `--accent-on-primary`, `--accent-secondary`, serta `--accent-data-1..N` bila ada visualisasi data.
   - **Semantic Status Colors**: `--status-info-bg/fg`, `--status-success-bg/fg`, `--status-warning-bg/fg`, `--status-danger-bg/fg`.
   - **Typography**: `--font-display`, `--font-sans`, `--font-mono`, skala responsif (`clamp()`), plus `font-variant-numeric: tabular-nums lining-nums` untuk data numerik.
   - **Spacing & Breakpoints**: skala spasi dasar (misal kelipatan `8px`/`4px`) dan breakpoint target proyek (mengikuti `DESIGN.md`, minimal mencakup `375px`, `768px`, `1280px`).
   - **Radius & Elevation**: `--radius-control`, `--radius-container` (dibatasi sesuai *Slop Budget* `DESIGN.md`), `--shadow-none` / `--shadow-offset` / `--shadow-overlay`.
   - **Motion**: `--duration-fast`, `--duration-normal`, `--ease-standard` (atau `--ease-out-quart` / `--ease-spring-*` sesuai `DESIGN.md`), wajib tunduk pada `@media (prefers-reduced-motion: reduce)`.
3. **Sinkronkan Tailwind tanpa Konflik Nilai**:
   - Pada `tailwind.config.*` atau Tailwind v4 `@theme inline`, petakan utilitas Tailwind ke CSS variables (`bg-canvas: 'var(--bg-canvas)'`, `fontFamily.display: 'var(--font-display)'`) **bukan** menyalin kode hex keras yang berisiko tidak sinkron saat tema/arketipe berubah.
4. **Larangan Hardcode**: Komponen UI tidak boleh memakai warna hex/Tailwind acak (`bg-indigo-600`, `rounded-xl`) di luar token semantik `DESIGN.md`.

## Contoh Benar vs Salah
- **Salah**: Menetapkan nilai hex dan font tetap (`Inter`, `#6366f1`, `rounded-xl`) di setiap project terlepas dari arketipe di `./DESIGN.md`.
- **Benar**: Menurunkan nilai aktual `./DESIGN.md` ke variabel semantik lalu mengikat Tailwind/CSS kepadanya:
  ```css
  :root {
    --bg-canvas: /* nilai dari ./DESIGN.md */;
    --bg-surface: /* nilai dari ./DESIGN.md */;
    --text-primary: /* nilai dari ./DESIGN.md */;
    --text-secondary: /* nilai dari ./DESIGN.md */;
    --border-subtle: /* nilai dari ./DESIGN.md */;
    --accent-primary: /* nilai dari ./DESIGN.md */;
    --radius-control: /* nilai dari ./DESIGN.md */;
    --duration-fast: /* nilai dari ./DESIGN.md */;
  }
  ```

## Checklist Keluaran
- [ ] `./DESIGN.md` dibaca terlebih dahulu (atau diinisialisasi lewat `project-intake` dari `.agents/design-library/`).
- [ ] Seluruh kategori token (latar, permukaan, teks, border, aksen, status, tipografi, spasi, radius, elevasi, motion, breakpoint) terpetakan dengan nilai persis dari `./DESIGN.md`.
- [ ] Tidak ada duplikasi atau konflik antara CSS variables dan konfigurasi Tailwind.

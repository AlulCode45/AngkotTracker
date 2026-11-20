# DESIGN.md — `corporate-trust` (Situs Korporat, Hubungan Investor & Laporan Tahunan)

- **Arketipe Sumber**: `professional/corporate-trust`
- **Jalur**: `Profesional` (Keanggunan tenang berbasis tipografi editorial, data terverifikasi, aksesibel & cepat)
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 3 | Variance: 3 | Motion: 3`
- **Tingkat Kerumitan**: `Standar (Executive Editorial Credibility)`

---

## 1. Identitas, Niat & Big Idea
- **Identitas & Niat**: Dirancang untuk emiten publik, grup infrastruktur, perbankan korporasi, dan laporan keberlanjutan tahunan yang audiens utamanya adalah investor institusional, analis, regulator pasar modal, dan mitra strategis. Dalam 3 detik pertama, situs memancarkan ketenangan dan wibawa lewat ruang kosong (*whitespace*) yang lega, huruf serif editorial yang tegas, dan sajian angka kinerja nyata yang langsung bisa diperiksa per segmen usaha.
- **Big Idea**: **"Laporan Tahunan yang Bernapas dan Dapat Diuji"** — menyajikan kinerja keuangan lintas segmen secara interaktif dan dapat diunduh dalam satu halaman editorial yang sunyi, berwibawa, dan cepat.

---

## 2. Prinsip Desain (5 Prinsip)
1. **Wibawa Lewat Tipografi dan Ruang Kosong (*Editorial Authority*)**
   - *Terapkan*: Padukan judul *serif* berskala tegas dengan teks bacaan *sans-serif* berlebar kolom `60ch–68ch` di atas kanvas kertas hangat `#FAF9F6`.
   - *Hindari*: Kotak fitur berderet tiga, gradien korporat klise, atau foto jabat tangan generik.
2. **Data dan Fakta sebagai Bintang (*Evidence Over Slogans*)**
   - *Terapkan*: Sajikan laporan keuangan 3 tahun dan publikasi keterbukaan informasi dalam tabel dan daftar baris yang presisi (`tabular-nums`, rata kanan pada nominal).
   - *Hindari*: Statistik karangan (*"Terbaik di Asia"*) atau angka dekoratif tanpa tahun dan satuan.
3. **Satu Gerakan Halus per Layar (*Restrained Motion*)**
   - *Terapkan*: Batasi animasi pada transisi segmen laporan keuangan (`200ms`, `--ease-out-quart`) dengan fallback instan saat `prefers-reduced-motion: reduce`.
   - *Hindari*: Efek *parallax*, *reveal* teks seragam saat digulir, atau *counter* angka yang berputar lama.
4. **Satu Tindakan Utama per Layar**
   - *Terapkan*: `Unduh Laporan Tahunan 2026` di hero (tombol terisi utama) dan `Kirim Pertanyaan` di formulir investor (layar terbawah).
   - *Hindari*: Banjir tombol ajakan atau badge kategori pada daftar laporan PDF.
5. **Aksesibel dan Ringan**
   - *Terapkan*: Seluruh pasangan warna lolos kontras WCAG 2.2 AA/AAA (termasuk mode kontras gelap), grafik memiliki label angka langsung, dan bobot halaman awal tetap `<= 200 KB`.
   - *Hindari*: Menyajikan angka laporan hanya sebagai gambar atau PDF tanpa ringkasan HTML semantik.

---

## 3. Token Warna & Pasangan Kontras

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai (Terang) | Nilai (Gelap) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Warm Paper | `#FAF9F6` | `#0C1210` | Latar tunggal halaman & seksi |
| `--bg-subtle` | Stone Tint | `#F3F1EC` | `#141E1A` | Latar panel sorotan & tabel hover |
| `--bg-elevated` | Elevated Sheet | `#FFFFFF` | `#141E1A` | Drawer pengembang (overlay saja) |
| `--text-primary` | Obsidian Ink | `#111827` | `#F9FAFB` | Judul serif, angka kinerja, teks utama |
| `--text-secondary` | Charcoal Reading | `#374151` | `#D1D5DB` | Paragraf bacaan, keterangan jabatan |
| `--text-muted` | Archive Gray | `#4B5563` | `#9CA3AF` | Tanggal publikasi, satuan, footer |
| `--border-subtle` | Editorial Rule | `#D1D5DB` | `#374151` | Garis pemisah baris & seksi (`1px`) |
| `--border-strong` | Input & Rule Border | `#4B5563` | `#9CA3AF` | Border input formulir & garis tajuk tabel (`1px`) |
| `--accent-primary` | Corporate Emerald | `#0F5132` | `#6EE7B7` | Tombol utama, garis tab aktif, tautan |
| `--accent-primary-hover` | Deep Pine | `#0A3622` | `#A7F3D0` | Hover tombol utama |
| `--accent-on-primary` | Pure White / Deep Forest | `#FFFFFF` | `#052E16` | Teks di atas `--accent-primary` |
| `--focus-ring` | Terracotta Focus | `#9A3412` | `#FBBF24` | Cincin `:focus-visible` (`3px solid`) |
| `--status-danger-bg` / `--status-danger-fg` | Error Crimson | `#FEF2F2` / `#7F1D1D` | `#450A0A` / `#FEE2E2` | Ringkasan error formulir |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` di atas `Background`) | Kode Hex (Terang / Gelap) | Rasio Terukur | Target | Status |
| :--- | :--- | ---: | :--- | :--- |
| `--text-primary` / `--bg-canvas` | `#111827` / `#FAF9F6` (`#F9FAFB` / `#0C1210`) | **`16,85:1`** / **`18,11:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` / `--bg-canvas` | `#374151` / `#FAF9F6` (`#D1D5DB` / `#0C1210`) | **`9,79:1`** / **`12,84:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` / `--bg-canvas` (`--bg-subtle`) | `#4B5563` / `#FAF9F6` (`#F3F1EC`) | **`7,18:1`** (`6,70:1`) | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-on-primary` / `--accent-primary` | `#FFFFFF` / `#0F5132` (`#052E16` / `#6EE7B7`) | **`9,36:1`** / **`9,78:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--accent-primary` (tautan) / `--bg-canvas` | `#0F5132` / `#FAF9F6` (`#6EE7B7` / `#0C1210`) | **`8,89:1`** / **`12,42:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--focus-ring` / `--bg-canvas` | `#9A3412` / `#FAF9F6` | **`6,94:1`** | `>= 3,0:1` (UI) | `LULUS (AA)` |
| `--border-strong` / `--bg-canvas` | `#4B5563` / `#FAF9F6` | **`7,18:1`** | `>= 3,0:1` (UI) | `LULUS (AA)` |

---

## 4. Tipografi
- **Display & Heading (`--font-serif`)**: `'Newsreader', Georgia, 'Times New Roman', serif` (atau `'Instrument Serif'`, `OFL-1.1`).
- **Body, Tabel & UI (`--font-sans`)**: `'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif` (`OFL-1.1`).
- **Kode Dokumen / IDX Ticker (`--font-mono`)**: `'JetBrains Mono', ui-monospace, monospace` (hanya kode dokumen & ticker saham).
- **Skala (6 Token, 3 Bobot: `400`, `500`, `700`)**:
  - `--text-display`: `clamp(2rem, 3.6vw, 3.25rem)` (`1.12` line-height, `-0.02em` tracking, `700` serif)
  - `--text-h2`: `clamp(1.375rem, 2.2vw, 1.85rem)` (`1.25` line-height, `-0.01em` tracking, `700` serif)
  - `--text-h3`: `1.0625rem` (`1.35` line-height, `700` sans)
  - `--text-body`: `1rem` (`1.65` line-height, `400` sans)
  - `--text-sm`: `0.875rem` (`1.5` line-height, `400`/`500` sans)
  - `--text-xs`: `0.75rem` (`1.35` line-height, `400`/`500`/`700` sans)

---

## 5. Spasi, Grid, Radius, Elevasi & Slop Budget
- **Spasi (Basis 8px)**: `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`.
- **Container**: Maksimum `1200px`, kolom editorial teks dibatasi `65ch`, formulir dibatasi `640px`.
- **Radius (`2` nilai)**: `--radius-control: 4px`, `--radius-container: 6px`.
- **Border Width (`2` nilai)**: `1px` dan `2px`.
- **Elevasi Statis**: `0` bayangan pada elemen statis.

### Slop Budget (`corporate-trust`)
| Metrik | Batas |
| :--- | :--- |
| Badge dekoratif | `0` |
| Badge status | `0` atau hanya yang dinamis |
| Tombol terisi / layar | Maks `1` (`Unduh Laporan Tahunan 2026` di hero; `Kirim Pertanyaan` di form) |
| Tombol outline / halaman | Maks `2` (`Hubungi Hubungan Investor`) |
| Border radius unik / Border width / Font weights | Maks `2` radius / Maks `2` border / Maks `3` bobot |
| Wadah bersarang / Bayangan statis / Latar seksi berselang-seling | `0` / `0` / `0` |

---

## 6. Komponen Kunci, Motion, Copy & Performa
- **Hero Editorial + Diagram Infrastruktur SVG Geometris**: Tanpa foto stok generik; garis diagram teknik bersih menggambarkan portofolio energi (Pembangkitan, Transmisi, Logistik).
- **Signature Moment — Ikhtisar Keuangan Interaktif Lintas Segmen**: Tab garis bawah (`Konsolidasi`, `Pembangkitan`, `Transmisi`, `Logistik Energi`) memperbarui tabel kinerja 3 tahun (`2024–2026`) dan grafik batang SVG berlabel angka dengan satu transisi halus `200ms` (`opacity`).
- **Daftar Publikasi & Keterbukaan Informasi**: Baris tabel/daftar dengan kode dokumen `.code-mono` dan tautan unduh PDF beserta ukuran berkas.
- **Tata Kelola Perusahaan (GCG)**: Daftar Komisaris & Direksi dengan nama realistis Indonesia (`Ir. Hendra Kusuma`, `Ratna Dewi Prawiro, S.E., M.M.`, `Dr. Bagus Santika`) ditandai sebagai data contoh.
- **Formulir Pertanyaan Investor**: 1 kolom (`max-width: 640px`) dengan validasi inline dan Error Summary Box.
- **Anggaran Performa**: LCP `<= 1,2s`, INP `<= 80ms`, CLS `0`, bobot awal `<= 180 KB`.

---

## 7. Cek Anti-Template (3 Hal yang Mustahil Ada di Template Umum)
1. Penjajaran editorial serif (`Newsreader`) + angka kinerja keuangan `tabular-nums` tanpa satu pun kartu fitur berbayang.
2. Pengalih segmen laporan keuangan yang memperbarui tabel 3 tahun dan grafik SVG berlabel sekaligus dalam satu transisi tenang.
3. Diagram infrastruktur geometris SVG tanpa gambar stok berat.

---

## 8. Implementasi CSS Variables (`:root`)
```css
:root {
  --bg-canvas: #FAF9F6;
  --bg-subtle: #F3F1EC;
  --text-primary: #111827;
  --text-secondary: #374151;
  --text-muted: #4B5563;
  --border-subtle: #D1D5DB;
  --border-strong: #4B5563;
  --accent-primary: #0F5132;
  --accent-on-primary: #FFFFFF;
  --focus-ring: #9A3412;
  --radius-control: 4px;
  --radius-container: 6px;
}
```

---

## 9. Checklist QA
- [x] `slop-audit.js` lulus 100% seluruh metrik budget profesional (`decorativeBadges: 0`, `statusBadges: 0`, `maxFilledPerScreen: 1`, `outlineFullPage: 1`, `uniqueBorderRadii: 1`, `uniqueBorderWidths: 2`, `uniqueFontSizes: 6`, `uniqueFontWeights: 3`, `staticShadows: 0`, `maxNestedContainers: 0`, `alternatingSectionBgs: 0`).
- [x] `axe-core` WCAG 2.2 AA: `30 passes, 0 violations, 1 incomplete` (`color-contrast` pada elemen `<text>` SVG) untuk terang, gelap, dan `?dev=1` (catatan: state error form investor tidak diaudit terpisah lewat skrip).
- [x] Lighthouse nyata: Mobile `100/100/100/100` (`LCP 1.0 s`, `FCP 1.0 s`, `CLS 0`, `TBT 40 ms`, `88 KiB`); Desktop `100/100/100/100` (`LCP 0.3 s`, `FCP 0.3 s`, `CLS 0`, `TBT 0 ms`, `88 KiB`).
- [x] Uji keyboard `Tab` `:focus-visible` (`tabAllHaveVisibleOutline: true`, `tabAnyInClosedDrawer: false`) & `prefers-reduced-motion: reduce` (`matches: true`, `btnDuration: "1e-05s"`) terverifikasi; skrip tidak mengotomasi klik tab segmen atau error summary form.
- [x] Screenshot `375px` & `1280px` (terang & gelap) tanpa horizontal overflow (`scrollWidth === innerWidth`), `0` console error, dan telah diperiksa secara visual setelah perbaikan diagram SVG hero & tata letak tautan PDF.

# DESIGN.md — `gov-portal` (Portal Layanan Publik & Perizinan Warga)

- **Arketipe Sumber**: `professional/gov-portal`
- **Jalur**: `Profesional` (Standar setara Singapore Government Design System / SGDS)
- **Overlay Pendamping**: `professional/overlays/id-gov.md` (aktifkan untuk instansi `.go.id`)
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 5 | Variance: 2 | Motion: 2`
- **Tingkat Kerumitan**: `Standar (High-Trust Civic Utility)`

---

## 1. Identitas, Niat & Big Idea
- **Identitas & Niat**: Membangun rasa percaya, kejelasan prosedural, dan ketenangan bagi warga atau pelaku usaha dari segala usia dan tingkat literasi digital yang datang untuk menyelesaikan urusan resmi (mengajukan izin, memeriksa syarat, atau melacak status permohonan). Dalam 3 detik pertama, pengunjung langsung melihat kotak pencarian layanan, daftar tugas terstruktur, dan pelacak status aman tanpa terhalang pil slogan, kotak dekoratif, atau jargon birokrasi.
- **Big Idea**: **"Meja Layanan Publik Tanpa Antrean"** — seluruh syarat, biaya resmi, dan perkiraan hari kerja dihitung secara interaktif sebelum warga mengisi formulir, disajikan dengan tipografi, spasi, dan garis tipis tanpa inflasi kotak.

---

## 2. Prinsip Desain (5 Prinsip)
1. **Hierarki dari Tipografi dan Spasi, Bukan Kotak (*Type & Space Before Boxes*)**
   - *Terapkan*: Bangun struktur dengan urutan ukuran huruf, bobot (`400`, `500`, `700`), spasi kelipatan `8px`, warna teks, lalu garis pemisah `1px`. Gunakan wadah berlatar hanya untuk panel pelacakan.
   - *Hindari*: Membungkus setiap item daftar, pilihan radio, dan baris checkbox ke dalam kotak berborder dan kartu bersarang.
2. **Tugas di Atas Seremoni (*Task Over Ceremony*)**
   - *Terapkan*: Ringkas strip resmi di atas menjadi satu baris kompak (~`28px`), tampilkan pencarian layanan dan pelacak status langsung di paruh atas layar pertama.
   - *Hindari*: Pil slogan di atas H1, label arketipe di UI warga, atau karusel pengumuman yang menutupi layar.
3. **Satu Tindakan Utama per Layar (*Strict Action Hierarchy*)**
   - *Terapkan*: Maksimal **1** tombol terisi (`btn-primary`) dalam satu viewport, maksimal **2** tombol outline di seluruh halaman, dan ubah aksi sekunder/baris daftar menjadi tautan teks atau tombol *ghost* yang tenang.
   - *Hindari*: Deretan enam tombol outline identik yang bersaing satu sama lain.
4. **Badge Hanya untuk Status Dinamis**
   - *Terapkan*: Gunakan badge hanya pada penanda status yang berubah (misal tahap verifikasi berkas `#track-badge`).
   - *Hindari*: Pil kategori per kartu, badge jumlah dokumen, atau label slogan statis.
5. **Privasi Default & Kata Ringkas**
   - *Terapkan*: Pelacakan publik bebas PII (tanpa nama atau NIK, wajib 2 faktor, pesan galat generik anti-enumerasi), dan pangkas kalimat UI yang tidak mengubah keputusan warga.
   - *Hindari*: Klaim kepatuhan hukum di antarmuka warga atau pengulangan kalimat `"Rp0 (Gratis)"` (cukup `"Gratis"`).

---

## 3. Token Warna & Pasangan Kontras

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai (Terang — Default) | Nilai (Gelap / High-Contrast Night) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Pure Canvas | `#FFFFFF` | `#0B1120` | Latar tunggal seluruh halaman & seksi |
| `--bg-subtle` | Slate Tint | `#F1F5F9` | `#1E293B` | Strip resmi, panel pelacakan, progress track |
| `--bg-selected` | Selection Tint | `#EFF6FF` | `#172554` | Latar baris radio yang dipilih |
| `--bg-elevated` | Elevated Sheet | `#FFFFFF` | `#111827` | Drawer pengembang (overlay saja) |
| `--text-primary` | Deep Ink | `#0F172A` | `#F8FAFC` | Judul, label input, nama layanan, angka |
| `--text-secondary` | Slate Reading | `#334155` | `#CBD5E1` | Deskripsi layanan, petunjuk input |
| `--text-muted` | Neutral Meta | `#475569` | `#94A3B8` | Header kolom, label mobile, waktu pembaruan |
| `--border-subtle` | Divider Line | `#CBD5E1` | `#334155` | Garis pemisah baris & seksi (`1px`) |
| `--border-strong` | Form Control Border | `#475569` | `#94A3B8` | Border input formulir & tombol outline (`1px`) |
| `--accent-primary` | Civic Ultramarine | `#1D4ED8` | `#60A5FA` | Tombol terisi utama, garis aktif, tautan |
| `--accent-primary-hover` | Deep Ultramarine | `#1E40AF` | `#93C5FD` | State hover tombol utama |
| `--accent-primary-active` | Pressed Navy | `#1E3A8A` | `#BFDBFE` | State active tombol utama |
| `--accent-on-primary` | Crisp White | `#FFFFFF` | `#0F172A` | Teks di atas `--accent-primary` |
| `--focus-ring` | High-Vis Amber Ring | `#B45309` | `#FBBF24` | Cincin `:focus-visible` kontras tinggi (`3px solid`) |
| `--skip-bg` / `--skip-fg` | Skip Link Signal | `#FBBF24` / `#0F172A` | `#FBBF24` / `#0F172A` | Tautan lewati ke konten utama |
| `--btn-danger-bg` / `--btn-danger-fg` | Alert Crimson | `#B91C1C` / `#FFFFFF` | `#B91C1C` / `#FFFFFF` | Tombol aksi destruktif |
| `--btn-disabled-bg` / `--btn-disabled-fg` | Muted Disabled | `#E2E8F0` / `#64748B` | `#1E293B` / `#94A3B8` | Tombol non-aktif |
| `--status-info-bg` / `--status-info-fg` | Info Notice | `#EFF6FF` / `#1E3A8A` | `#172554` / `#DBEAFE` | Banner pemeliharaan / status diterima |
| `--status-success-bg` / `--status-success-fg` | Verified Green | `#F0FDF4` / `#14532D` | `#052E16` / `#DCFCE7` | Status verifikasi / selesai |
| `--status-danger-bg` / `--status-danger-fg` | Error Box Crimson | `#FEF2F2` / `#7F1D1D` | `#450A0A` / `#FEE2E2` | Validasi gagal / error summary |

### B. Pasangan Kontras Terukur (WCAG 2.2 — Seluruh Pasangan)

#### Mode Terang (Default)
| Pasangan (`Foreground` di atas `Background`) | Kode Hex | Rasio Terukur | Target WCAG 2.2 | Status |
| :--- | :--- | ---: | :--- | :--- |
| `--text-primary` di atas `--bg-canvas` | `#0F172A` / `#FFFFFF` | **`17,85:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-primary` di atas `--bg-subtle` | `#0F172A` / `#F1F5F9` | **`16,30:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` di atas `--bg-canvas` | `#334155` / `#FFFFFF` | **`10,35:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` di atas `--bg-subtle` | `#334155` / `#F1F5F9` | **`9,45:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` di atas `--bg-canvas` / `--bg-subtle` | `#475569` / `#FFFFFF` (`#F1F5F9`) | **`7,58:1`** (`6,92:1`) | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-on-primary` di atas `--accent-primary` | `#FFFFFF` / `#1D4ED8` | **`6,70:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-on-primary` di atas `--accent-primary-hover` | `#FFFFFF` / `#1E40AF` | **`8,72:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--accent-primary` (tautan) di atas `--bg-canvas` / `--bg-subtle` | `#1D4ED8` / `#FFFFFF` (`#F1F5F9`) | **`6,70:1`** (`6,12:1`) | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--border-strong` di atas `--bg-canvas` | `#475569` / `#FFFFFF` | **`7,58:1`** | `>= 3,0:1` (SC 1.4.11 UI) | `LULUS (AA)` |
| `--focus-ring` di atas `--bg-canvas` / `--bg-subtle` | `#B45309` / `#FFFFFF` (`#F1F5F9`) | **`5,02:1`** (`4,58:1`) | `>= 3,0:1` (SC 1.4.11 / 2.4.13) | `LULUS (AA)` |
| `--skip-fg` di atas `--skip-bg` | `#0F172A` / `#FBBF24` | **`10,69:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--status-info-fg` di atas `--status-info-bg` | `#1E3A8A` / `#EFF6FF` | **`9,52:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--status-success-fg` di atas `--status-success-bg` | `#14532D` / `#F0FDF4` | **`8,70:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--status-danger-fg` di atas `--status-danger-bg` | `#7F1D1D` / `#FEF2F2` | **`9,16:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--btn-danger-fg` di atas `--btn-danger-bg` | `#FFFFFF` / `#B91C1C` | **`6,47:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |

#### Mode Kontras Gelap (`[data-theme="dark"]`)
| Pasangan (`Foreground` di atas `Background`) | Kode Hex | Rasio Terukur | Target WCAG 2.2 | Status |
| :--- | :--- | ---: | :--- | :--- |
| `--text-primary` di atas `--bg-canvas` / `--bg-subtle` | `#F8FAFC` / `#0B1120` (`#1E293B`) | **`18,00:1`** (`13,98:1`) | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` di atas `--bg-canvas` | `#CBD5E1` / `#0B1120` | **`12,67:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` di atas `--bg-canvas` / `--bg-subtle` | `#94A3B8` / `#0B1120` (`#1E293B`) | **`7,34:1`** (`5,71:1`) | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-on-primary` di atas `--accent-primary` | `#0F172A` / `#60A5FA` | **`7,02:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--accent-primary` (tautan) di atas `--bg-canvas` / `--bg-subtle` | `#60A5FA` / `#0B1120` (`#1E293B`) | **`7,40:1`** (`5,75:1`) | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--focus-ring` di atas `--bg-canvas` | `#FBBF24` / `#0B1120` | **`11,29:1`** | `>= 3,0:1` (SC 1.4.11 UI) | `LULUS (AA)` |
| `--status-info-fg` di atas `--status-info-bg` | `#DBEAFE` / `#172554` | **`12,04:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--status-success-fg` di atas `--status-success-bg` | `#DCFCE7` / `#052E16` | **`13,57:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--status-danger-fg` di atas `--status-danger-bg` | `#FEE2E2` / `#450A0A` | **`13,22:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |

---

## 4. Tipografi

### A. Keluarga Font & Lisensi
| Peran | Token | Keluarga Font | Lisensi & Sumber | Fallback Stack |
| :--- | :--- | :--- | :--- | :--- |
| Heading & UI | `--font-display`, `--font-sans` | `'Plus Jakarta Sans'` atau `'Inter'` | `SIL Open Font License 1.1` (Self-hosted WOFF2) | `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` |
| ID, Kode Registrasi & Nomor Tiket | `--font-mono` | `'JetBrains Mono'` | `SIL Open Font License 1.1` (Self-hosted WOFF2) | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

**Aturan Monospace & Bobot**: `--font-mono` (`font-size: inherit`) hanya untuk nomor registrasi non-sekuensial (`PT-2026-K7M9-4X2P`), nomor tiket (`OPS-2026-114`), dan kode teknis. Angka waktu layanan dan tarif memakai `--font-sans` dengan `font-variant-numeric: tabular-nums`. Seluruh halaman hanya memakai **3 bobot huruf**: `400` (reguler), `500` (medium), dan `700` (tebal).

### B. Skala Responsif (6 Token Baku)
| Token | Ukuran (Mobile → Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(1.65rem, 2.5vw, 2.25rem)` | `1.2` | `-0.01em` | `700` | Judul portal utama (H1) |
| `--text-h2` | `clamp(1.25rem, 1.7vw, 1.5rem)` | `1.3` | `0` | `700` | Judul seksi utama dan angka hasil estimasi |
| `--text-h3` | `1.0625rem` (`17px`) | `1.35` | `0` | `700` | Judul grup layanan, panel pelacakan, judul footer |
| `--text-body` | `1rem` (`16px`) | `1.6` | `0` | `400/700` | Teks bacaan, nama layanan, label field, input form |
| `--text-sm` | `0.875rem` (`14px`) | `1.5` | `0` | `400/500` | Deskripsi layanan, petunjuk, navigasi, tab filter |
| `--text-xs` | `0.75rem` (`12px`) | `1.3` | `0` | `400/500/700` | Masthead, header kolom tabel, status badge, metadata waktu |

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Grid 8px SGDS)**: `--space-1: 4px`, `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`.
- **Grid & Container**: Maksimum `--container-max: 1200px` (`16px` mobile / `24px` desktop). Judul formulir & *stepper* sejajar container `1200px`; `max-width: 680px` membatasi `.form-column` saja.
- **Latar Seksi**: Satu warna latar halaman tunggal (`--bg-canvas`), dipisahkan jarak vertikal `48px` dan garis pembatas tipis `1px solid var(--border-subtle)`.
- **Radius (2 Nilai)**: `--radius-control: 4px` (tombol, input, status badge) dan `--radius-container: 6px` (panel pelacakan, kotak error summary).
- **Ketebalan Border (2 Nilai)**: `--border-thin: 1px` dan `--border-accent: 2px`.
- **Elevasi Statis**: **`0`** bayangan pada elemen statis (`box-shadow` hanya untuk drawer overlay).

---

## 6. Slop Budget & Aturan Badge (`gov-portal`)

| Metrik per Tampilan Satu Halaman | Batas Wajib (`gov-portal`) |
| :--- | :--- |
| Badge/pil dekoratif | **`0`** |
| Badge status informatif | Hanya yang berubah (`#track-badge`, 1 per pelacakan) |
| Tombol terisi (primer) | Maks **`1`** per layar (`Cari Layanan` di hero; `Simpan dan Lanjut` di form) |
| Tombol outline | Maks **`2`** di seluruh halaman (`Periksa Status Berkas` & `Gunakan di Formulir Pengajuan`) |
| Border-radius berbeda | Maks **`2`** (`4px`, `6px`) |
| Ketebalan border berbeda | Maks **`2`** (`1px`, `2px`) |
| Bobot huruf berbeda | Maks **`3`** (`400`, `500`, `700`) |
| Wadah bersarang | **`0`** |
| Bayangan pada elemen statis | **`0`** |
| Latar seksi berselang-seling | **`0`** (satu warna latar halaman) |

---

## 7. Komponen Kunci & Pola Pelacakan Aman

1. **Strip Resmi (`masthead`)**: Satu baris ringkas ~`28px` tanpa kotak badge, dilengkapi tombol teks `Cara mengenali situs resmi` + ikon SVG chevron (`aria-hidden="true"`).
2. **Filter Kategori (Tab Tersegmentasi)**: Tombol *ghost* berpenanda garis bawah `2px solid var(--accent-primary)` pada tab aktif dengan hitungan seragam (`Semua (6)`, `Perizinan Usaha (2)`, `Keterangan & Domisili (2)`, `Tenaga Kesehatan (2)`).
3. **Daftar Layanan Bergrup**: Daftar baris dengan garis bawah tipis (`1px solid var(--border-subtle)`), judul grup kategori `<h3>`, kolom sejajar `Layanan | Waktu | Biaya | Tindakan`, tulisan `"Gratis"` (bukan `"Rp0 (Gratis)"`), dan tautan aksi seragam `"Lihat syarat"`.
4. **Pengecek Syarat Bebas Boxitis**: Radio layanan berbatas garis tipis dengan latar `--bg-selected` + garis aksen kiri `2px` saat terpilih; estimasi waktu & tarif tanpa kotak dan tanpa monospace; bilah progres tipis `4px` + daftar centang polos tanpa kotak.
5. **Pola Pelacakan Aman (*Public Status Tracking*)**:
   - **Tanpa PII**: Dilarang menampilkan nama (sekalipun disamarkan) atau NIK. Tampilkan hanya Nomor Registrasi, Layanan, Status & Tahap (`1` badge status dinamis), waktu pembaruan, dan estimasi selesai.
   - **Nomor Registrasi Non-Sekuensial**: Minimal 8 karakter alfanumerik acak (`PT-2026-K7M9-4X2P`).
   - **Verifikasi Faktor Kedua Wajib**: Nomor Registrasi + 4 digit akhir nomor ponsel pemohon (`8421`).
   - **Rate Limit & Anti-Enumerasi**: Maksimal 5 percobaan gagal berturut-turut, lookup waktu konstan, dan satu pesan galat generik.
   - **Tanpa Klaim Hukum di UI**: Jelaskan secara konkret data apa yang dienkripsi dan tidak dipublikasikan.

---

## 8. Sistem Motion, Gamifikasi, Copy & Performa
- **Motion**: Hening (`150ms`, `--ease-out-quart`), fallback instan pada `prefers-reduced-motion: reduce`.
- **Gamifikasi**: Tidak berlaku.
- **Copywriting**: Bahasa Indonesia baku EYD V, kalimat langsung tanpa klise/slogan internal (`Transparan SLA`, `dapat diaudit`). Menjelaskan **NIB**, **OSS** (PP No. 5/2021 pengganti **IUMK**), **STR**, **SIP**, **PNBP**, **PDRD**, dan **Perangkat Daerah** pada kemunculan pertama.
- **Anggaran Performa**: LCP `<= 1,2s`, INP `<= 80ms`, CLS `0`, total bobot `<= 150 KB`.

---

## 9. Signature Moment & Cek Anti-Template
- **Signature Moment**: Pengecek syarat & estimasi waktu layanan langsung di halaman depan yang menghitung kesiapan dokumen (`Siap X dari 3 dokumen` pada bilah progres) dan meneruskan pilihan layanan ke formulir pengajuan tanpa reload.
- **3 Hal yang Mustahil Ada di Template Umum**:
  1. Pelacakan aman dua faktor (`Nomor Registrasi non-sekuensial` + `4 digit akhir HP`) tanpa PII dan tanpa kotak bersarang.
  2. Daftar layanan bergrup berkolom sejajar dengan tautan rincian tarif Peraturan Daerah PDRD dan penyelarasan satu tombol terisi per layar.
  3. Kotak Ringkasan Error (`role="alert"`, `tabindex="-1"`) yang memindahkan fokus keyboard langsung ke kolom salah.

---

## 10. Implementasi CSS Variables (`:root`)
```css
:root {
  --bg-canvas: #FFFFFF;
  --bg-subtle: #F1F5F9;
  --bg-selected: #EFF6FF;
  --text-primary: #0F172A;
  --text-secondary: #334155;
  --text-muted: #475569;
  --border-subtle: #CBD5E1;
  --border-strong: #475569;
  --accent-primary: #1D4ED8;
  --accent-on-primary: #FFFFFF;
  --focus-ring: #B45309;
  --radius-control: 4px;
  --radius-container: 6px;
  --border-thin: 1px;
  --border-accent: 2px;
}
```

---

## 11. Checklist QA
- [x] `slop-audit.js` lulus 100% (9/9 metrik LULUS: `0` decorative badge, `max 1` tombol terisi/layar, `max 2` tombol outline, `0` nested containers, `0` static shadows, `0` alternating section bgs, `2` border radius, `2` border width, `3` font weights).
- [x] `axe-core` WCAG 2.2 AA `0 violations, 0 incomplete` pada 4 kondisi (terang, error, gelap, `?dev=1`).
- [x] Lighthouse `13.6.0`: Mobile `100/100/100/100` (`LCP 1.1s`, `TBT 40ms`, `CLS 0`); Desktop `100/100/100/100` (`LCP 0.3s`, `TBT 0ms`, `CLS 0`).
- [x] Uji keyboard (`Tab`, `:focus-visible 3px solid`, radio/checkbox tanpa kotak, `Enter`/`Escape`) & `prefers-reduced-motion: reduce`.
- [x] Screenshot `375px` & `1280px` tanpa horizontal overflow (`overflow: false`) atau console error (`0`).

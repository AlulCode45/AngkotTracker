# DESIGN.md — `BusTracking` (Ekosistem Angkutan Pelajar Gratis)

- **Arketipe Sumber**: `professional/gov-civic-warm`
- **Jalur**: `Profesional (GOV V2)`
- **Dial Ekspresivitas**: `4.5 / 10` — *Ramah, sabar, dan jelas untuk pelajar (SD–SMA), pengemudi di lapangan, serta operator Dinas Perhubungan.*
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 5 | Variance: 4 | Motion: 3`
- **Tingkat Kerumitan**: `Standar (Self-Hosted WOFF2, Zero CDN, Zero PII Tracking)`
- **Overlay Wajib**: Gabungkan dengan [`.agents/design-library/professional/overlays/id-gov.md`](.agents/design-library/professional/overlays/id-gov.md) saat diterapkan pada domain pemerintah resmi (`.go.id`).

---

## 1. Identitas, Niat, Dial Ekspresivitas, Big Idea & Uji Kaku

### Identitas & Niat
Ekosistem angkutan pelajar gratis melayani tiga pengguna yang sangat berbeda dalam satu alur harian: pelajar SD–SMA (dan orang tua) yang menunjukkan Kartu QR untuk naik angkutan, pengemudi angkutan umum yang memindai QR di kondisi pencahayaan lapangan untuk mengklaim perjalanan gratis, serta operator dinas yang memantau armada dan validasi subsidi. `BusTracking` mengadaptasi `gov-civic-warm` — ketenangan kertas krem hangat (`#FCFBF8`), pita gandum (`#F2EDE4`), teal terpercaya (`#0F5E63`), dan aksen terakota (`#9A3F16`) — agar terasa seperti layanan publik yang ramah bagi pelajar sekaligus cepat, tegas, dan berketepatan tinggi bagi pengemudi.

- **Alasan Dial Ekspresivitas (`4.5 / 10`)**: Pelajar SD–SMA dan pengemudi di jalan membutuhkan kejelasan seketika tanpa gangguan dekorasi, namun tetap terasa hangat dan bersahabat sebagai layanan pendidikan/transportasi daerah.
- **Big Idea**: **"Kartu QR Pelajar & Klaim Seketika"** — layanan transportasi publik yang ramah seperti petugas sekolah yang membimbing pelajar naik bus, dipadukan dengan pemindai QR pengemudi berkecepatan tinggi dan pelacak posisi bus bebas PII.

### Uji Kaku (5 Pertanyaan Wajib Dijawab Tertulis dengan Bukti)
1. **Apa gagasan besarnya dalam satu kalimat?**  
   *Naik angkutan sekolah gratis semudah menunjukkan Kartu QR, dipindai pengemudi dalam satu ketukan, dan dipantau tanpa mengekspos data pribadi pelajar* — diwujudkan lewat pemilih tugas berbasis peran (`Kartu QR Pelajar`, `Scanner Pengemudi`, `Pantau Armada`), kartu QR bertanda tangan dinamis, dan pelacak rute Zero-PII.
2. **Apa yang membuat halaman ini tidak bisa tertukar dengan template?**  
   Beranda langsung membuka pemilih tugas ekosistem pelajar + alur 3 langkah (`Daftar/Aktivasi Pelajar` → `Tunjukkan QR Saat Naik` → `Pengemudi Scan & Klaim`), bukan hero pemasaran generik.
3. **Di mana mata pertama mendarat dan kenapa?**  
   Mata pertama mendarat pada judul `Figtree` (`48px` desktop, bobot `700`, `#162328` di atas pita hangat `#F2EDE4`), lalu langsung ke pemilih peran utama dan kartu QR / status armada.
4. **Di mana desain terasa hangat atau manusiawi?**  
   Pada kanvas kertas krem (`#FCFBF8`) dan pita gandum (`#F2EDE4`), bahasa Indonesia yang sabar dan mudah dicerna pelajar SD–SMA maupun pengemudi, serta ilustrasi garis `2px` alur naik angkutan gratis.
5. **Di mana ia menolak godaan untuk dihias?**  
   Pada layar **Kartu QR Pelajar** (latar bersih `#FFFFFF` berbatas `#D5CFC4` agar kamera pengemudi mudah membaca QR tanpa silau), **Hasil Scan Klaim Pengemudi** (hanya status besar kontras tinggi `VALID / DITOLAK` + jenjang/rute tanpa membocorkan NIK/alamat), dan **Pelacak Armada Zero-PII**.

---

## 2. Prinsip Desain
1. **Orientasi Tugas dari Detik Pertama (*Task-First*, SGDS)**
   - *Terapkan*: Buka langsung dengan pencarian layanan, pemilih 4 tugas utama warga, dan status estimasi kerja nyata sebelum form panjang.
   - *Hindari*: Karusel foto pejabat seremonial atau sambutan instansi yang mendorong form terlalu jauh ke bawah.
2. **Kehangatan lewat Sistem Garis Konsisten, Bukan Dekorasi Kosong**
   - *Terapkan*: Gunakan ilustrasi SVG orisinal bersistem ketebalan garis `2px` (`round cap & join`) dengan palet terbatas (teal `#0F5E63`, terakota `#9A3F16`, slate) untuk menjelaskan proses layanan.
   - *Hindari*: Kotak abu-abu kosong, ikon emoji, atau tumpukan badge/pil slogan di atas H1.
3. **Sabar Mengawal Formulir sebelum Submit**
   - *Terapkan*: Pisahkan langkah "Cek Syarat + Bilah Progres Hidup" → "Isi Data Minimal + Bantuan Sticky" → "Tinjau Ringkasan" → "Nomor Registrasi Tenang".
   - *Hindari*: Formulir 20 field sekaligus atau error validasi yang menyalahkan warga tanpa fokus keyboard yang jelas.
4. **Privasi Pelacakan Publik tanpa Data Pribadi (Zero-PII)**
   - *Terapkan*: Gunakan nomor registrasi acak non-sekuensial (`CS-2026-XXXX-XXXX`) + 4 digit akhir ponsel, *rate limit* 5 percobaan, pesan galat generik anti-enumerasi, serta hasil pelacakan yang hanya memuat status, tahap, pembaruan, dan estimasi.
   - *Hindari*: Menampilkan nama tersamarkan (`S***`), NIK, atau alamat pemohon di pelacakan tanpa login.
5. **Satu Tindakan Utama per Layar & Zero Boxitis**
   - *Terapkan*: Maksimal `1` tombol terisi (`.btn-primary`) per viewport `900px`, maksimal `2` tombol outline di seluruh halaman, serta gunakan spasi kelipatan `8px` dan garis tipis `1px` daripada membungkus setiap baris radio/checkbox ke dalam kotak.
   - *Hindari*: Deretan 6 tombol outline identik yang bersaing atau panel di dalam panel.

---

## 3. Token Warna & Pasangan Kontras

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai Terang (Default) | Nilai Gelap (`data-theme="dark"`) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Warm Ivory Paper | `#FCFBF8` | `#0D1619` | Latar utama halaman & area form tenang |
| `--bg-warm` | Sunlit Wheat Band | `#F2EDE4` | `#142126` | Pita bidang penuh lebar hero & pelacak/data |
| `--bg-surface` | Clean Desk Surface | `#FFFFFF` | `#111C20` | Permukaan panel wizard, tabel, kartu diskret |
| `--bg-elevated` | Popover Slate | `#FFFFFF` | `#162429` | Dropdown masthead & laci `?dev=1` |
| `--text-primary` | Deep Harbor Ink | `#162328` | `#F4F7F6` | Judul & teks bacaan utama |
| `--text-secondary` | River Stone Slate | `#374950` | `#C7D6DA` | Deskripsi tugas, label sekunder, navigasi |
| `--text-muted` | Ash Harbor Caption | `#4B5D64` | `#9BB0B6` | Helper text, catatan kaki, metadata (`>= 5.9:1`) |
| `--border-subtle` | Sand Divider | `#D5CFC4` | `#24383F` | Garis pembatas horizontal, tabel, batas wadah |
| `--border-strong` | Charcoal Slate Edge | `#4B5D64` | `#8CA5AC` | Batas input form & tombol outline |
| `--accent-primary` | Civic Sea Teal | `#0F5E63` | `#4FD1C5` | CTA utama, tautan aktif, bilah progres |
| `--accent-primary-hover` | Deep Sea Teal | `#0B474B` | `#7DE0D6` | Hover CTA utama |
| `--accent-on-primary` | Contrast Ink on Accent | `#FFFFFF` | `#091E20` | Teks di atas `--accent-primary` |
| `--accent-secondary` | Terracotta Clay | `#9A3F16` | `#F5A67E` | Aksen hangat sorotan langkah, ilustrasi, anotasi |
| `--accent-data-1` | Teal Data Primary | `#0F5E63` | `#4FD1C5` | Batang Realisasi SLA (solid) |
| `--accent-data-2` | Terracotta Benchmark | `#9A3F16` | `#F5A67E` | Batang Target SLA (berpola hatch diagonal) |
| `--accent-data-3` | Indigo Verification | `#4B4F8A` | `#B4B8F8` | Garis batas target kepatuhan |
| `--focus-ring` | High-Contrast Amber | `#B45309` | `#FBBF24` | Outline fokus `3px solid` |
| `--status-info-bg` / `--status-info-fg` | Info Pelayanan | `#EFF6FF` / `#1E3A5F` | `#172554` / `#DBEAFE` | Pemberitahuan layanan & info |
| `--status-success-bg` / `--status-success-fg` | Terpenuhi / Selesai | `#ECFDF5` / `#14532D` | `#052E16` / `#BBF7D0` | Dokumen lengkap & berkas selesai |
| `--status-warning-bg` / `--status-warning-fg` | Dalam Proses / Perhatian | `#FFF7ED` / `#7C2D12` | `#431407` / `#FED7AA` | Sedang diverifikasi petugas |
| `--status-danger-bg` / `--status-danger-fg` | Galat / Ditolak | `#FFF1F2` / `#881337` | `#4C0519` / `#FECDD3` | Error form & batas percobaan |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` di atas `Background`) | Rasio Terang | Rasio Gelap | Target WCAG | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--text-primary` di atas `--bg-canvas` | **`15,55:1`** | **`17,00:1`** | `>= 7,0:1` (AAA) | `LULUS` |
| `--text-primary` di atas `--bg-warm` | **`13,80:1`** | **`15,28:1`** | `>= 7,0:1` (AAA) | `LULUS` |
| `--text-secondary` di atas `--bg-canvas` / `--bg-warm` | **`9,09:1`** / **`8,07:1`** | **`12,27:1`** / **`11,02:1`** | `>= 4,5:1` (AA) | `LULUS` |
| `--text-muted` (`12px–14px`) di atas `--bg-canvas` / `--bg-warm` / `--bg-surface` | **`6,66:1`** / **`5,91:1`** / **`6,89:1`** | **`8,10:1`** / **`7,28:1`** / **`7,66:1`** | `>= 4,5:1` (AA teks kecil) | `LULUS` |
| `--accent-on-primary` di atas `--accent-primary` | **`7,50:1`** | **`9,24:1`** | `>= 4,5:1` (AA) | `LULUS` |
| `--accent-primary` (tautan) di atas `--bg-canvas` / `--bg-warm` | **`7,24:1`** / **`6,43:1`** | **`9,83:1`** / **`8,83:1`** | `>= 4,5:1` (AA) | `LULUS` |
| `--accent-secondary` di atas `--bg-canvas` / `--bg-warm` | **`6,55:1`** / **`5,82:1`** | **`9,28:1`** / **`8,34:1`** | `>= 4,5:1` (AA) | `LULUS` |
| `--accent-data-1..3` di atas `--bg-surface` | **`7,50:1`** / **`6,78:1`** / **`7,54:1`** | **`9,30:1`** / **`8,79:1`** / **`9,21:1`** | `>= 3,0:1` (grafis UI & label) | `LULUS` |
| `--status-success-fg` di atas `--status-success-bg` | **`8,65:1`** | **`12,30:1`** | `>= 4,5:1` | `LULUS` |
| `--status-warning-fg` di atas `--status-warning-bg` | **`8,83:1`** | **`11,56:1`** | `>= 4,5:1` | `LULUS` |
| `--status-danger-fg` di atas `--status-danger-bg` | **`8,71:1`** | **`11,08:1`** | `>= 4,5:1` | `LULUS` |
| `--status-info-fg` di atas `--status-info-bg` | **`10,57:1`** | **`12,04:1`** | `>= 4,5:1` | `LULUS` |

---

## 4. Tipografi

### A. Keluarga Font, Self-Hosting & Fallback Terancang
Seluruh berkas font dimuat lokal dari `../_fonts/` tanpa request CDN eksternal:

| Peran | Token | Keluarga Font & Berkas Lokal (`WOFF2`) | Lisensi & Sumber Resmi | Fallback Stack & Metric Override |
| :--- | :--- | :--- | :--- | :--- |
| Display / Heading | `--font-display` | `'Figtree'` (`../_fonts/figtree-latin-wght-normal.woff2`) | `SIL OFL-1.1` (`github.com/erikdkennedy/figtree`) | `'Figtree Fallback', 'Inter Fallback', system-ui, -apple-system, sans-serif` (`size-adjust: 100%; ascent-override: 93%`) |
| Body / UI | `--font-sans` | `'Inter'` (`../_fonts/inter-latin-wght-normal.woff2`) | `SIL OFL-1.1` (`github.com/rsms/inter`) | `'Inter Fallback', system-ui, -apple-system, 'Segoe UI', sans-serif` (`size-adjust: 107%; ascent-override: 90%`) |
| Nomor Registrasi & Kode | `--font-mono` | `'JetBrains Mono'` (`../_fonts/jetbrains-mono-latin-wght-normal.woff2`) | `SIL OFL-1.1` (`github.com/JetBrains/JetBrainsMono`) | `ui-monospace, SFMono-Regular, Menlo, monospace` |

### B. Skala Responsif, Angka Lining Tabular & Aturan Keterbacaan
| Token | Ukuran (Mobile -> Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(2.25rem, 3.6vw, 3rem)` (`36px -> 48px`) | `1.12` | `-0.02em` | `700` | Hanya 1 per halaman (H1 Hero, `48/16 = 3.0`) |
| `--text-h2` | `clamp(1.5rem, 2.2vw, 1.875rem)` (`24px -> 30px`) | `1.22` | `-0.015em` | `700` | Judul seksi utama |
| `--text-h3` | `1.1875rem` (`19px`) | `1.3` | `-0.005em` | `700` | Subjudul panel, langkah wizard, bantuan |
| `--text-body-lg` | `1.0625rem` (`17px`) | `1.6` | `0` | `400` | Lead paragraf pembuka (`45ch–64ch`) |
| `--text-body` | `1rem` (`16px`) | `1.6` | `0` | `400` | Teks bacaan & input form (`>= 16px` cegah auto-zoom iOS) |
| `--text-sm` | `0.875rem` (`14px`) | `1.5` | `0` | `400/500` | Tabel, label grafik SVG, helper text (`>= 14px`) |
| `--text-xs` | `0.75rem` (`12px`) | `1.4` | `0.02em` | `500` | Keterangan kecil masthead / kicker terukur (`>= 4.5:1`) |

- **Angka Data**: `.stat-num, table td, .sla-value, .progress-num, [data-numeric]` wajib menerapkan `font-variant-numeric: tabular-nums lining-nums;`.
- **Anti Kata Yatim & Lebar Baris**: `h1, h2, h3 { text-wrap: balance; }` agar judul tidak menyisakan satu kata tunggal di baris terakhir; paragraf dibatasi `45ch–68ch`.

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `--space-1: 4px`, `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`.
- **Grid & Container**: `--container-max: 1200px`, padding horizontal `16px` mobile / `28px` desktop.
- **Breakpoint**: `sm: 512px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.
- **Radius (Hanya 2 Nilai)**: `--radius-control: 6px` (tombol, input, tab, badge status), `--radius-container: 10px` (panel wizard, bingkai ilustrasi, placeholder arahan foto).
- **Elevasi**: `--shadow-none: none` untuk semua elemen statis; `--shadow-overlay: 0 12px 28px rgba(22, 35, 40, 0.14)` hanya untuk `#dev-drawer`.

---

## 5.5 Slop Budget (Batas Atas) & Richness Floor (Batas Bawah)

### A. Slop Budget (Batas Atas)
| Metrik per Tampilan | Batas `gov-civic-warm` | Catatan / Alasan |
| :--- | :--- | :--- |
| Badge/pil dekoratif | **`0`** | Tidak ada tag/slogan/pil dekoratif |
| Badge status informatif | Hanya yang berubah | Maks 1–2 badge status dinamis (status pelacakan & status berkas) |
| Tombol terisi (primer) | Maks **`1`** per layar | Diatur agar tiap tombol primer berjarak > 920px vertikal |
| Tombol outline | Maks **`2`** seluruh halaman | `#theme-toggle` dan `#track-submit-btn`; lainnya memakai tautan atau `.btn-ghost` |
| Border-radius berbeda | Maks **`2`** (`6px`, `10px`) | — |
| Ketebalan border berbeda | Maks **`2`** (`1px`, `2px`) | `1px` pembatas wadah/input, `2px` aksen aktif/error |
| Bobot huruf berbeda | Maks **`3`** (`400`, `500`, `700`) | — |
| Wadah bersarang | **`0`** | Tidak ada panel di dalam panel berborder/berlatar beda |
| Bayangan elemen statis | **`0`** | Hanya overlay `?dev=1` |
| Latar seksi berselang-seling | Maks **`3`** | Disengaja memakai 2 pita `--bg-warm` (Hero & Pelacak/Data) mengapit kanvas tenang `--bg-canvas` (Wizard Form & Panduan Tatap Muka) |

### B. Richness Floor (Batas Bawah — Jalur Profesional V2)
| Syarat Kekayaan Minimum | Target | Bukti Penerapan pada `gov-civic-warm` |
| :--- | :--- | :--- |
| Sistem visual non-teks bermakna | `>= 1` (aktual `3`) | 1) Ilustrasi SVG orisinal alur loket 3 langkah di Hero (`svg-loket-ramah`), 2) Grafik Data Kinerja SLA SVG di Seksi 3, 3) Placeholder Arahan Foto loket ramah di Seksi 4 |
| Visualisasi data nyata + tabel alternatif | `>= 1` + `<table>` | Grafik batang Target vs Realisasi SLA 4 layanan dengan label langsung, pola garis diagonal, anotasi temuan, toggle Grafik/Tabel HTML semantik, dan tombol Unduh CSV |
| Pola komposisi berbeda | `>= 3` | Hero asimetris 1.15fr/0.85fr (`warm`), Wizard 2 kolom dengan aside `sticky` (`canvas`), Grid data + tracker 0.9fr/1.1fr (`warm`), Panduan tatap muka terpusat (`narrow`) |
| Rasio display/body & `tabular-nums lining-nums` | `>= 2.0` (`3.0` desktop) | `Figtree` `48px` vs `Inter` `16px`; aktif `tabular-nums lining-nums` pada angka KPI SLA, langkah, progres dokumen, nomor registrasi, dan tabel |
| Warna fungsional | `>= 4` (aktual `5`) | Primer `#0F5E63`, Sekunder `#9A3F16`, Aksen Data `1..3`, Netral Hangat `#F2EDE4`, Status info/sukses/warning/danger |
| Interaksi / gerak fungsional + fallback | `>= 1` + fallback | Progres hidup cek syarat, transisi langkah wizard 1→2→3, angka SLA dianimasikan saat terlihat; patuh `prefers-reduced-motion` |
| Microcopy manusiawi & spesifik | Terbukti | Kalimat sabar berbasis tugas tanpa jargon birokrasi atau klise pemasaran |

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
1. **Tombol (`.btn-primary`, `.btn-outline`, `.btn-ghost`)**: minimal target sentuh `44x44px`, 8 state (`default`, `hover`, `focus-visible` `3px solid var(--focus-ring)`, `active`, `disabled`, `loading`, `error`, `success`).
2. **Pemilih Tugas Warga (4 Tombol Aksi Cepat)**: navigasi `Tab` / `Enter` / `Space`; `aria-pressed="true"` memindahkan pilihan aktif ke Wizard Pengajuan tanpa memuat ulang halaman.
3. **Wizard 3-Langkah + Checklist Polos & Bantuan Sticky**: setiap baris syarat memakai pembatas bawah tipis `1px`, fokus terarah ke judul langkah saat berpindah tahap; Langkah 2 menyediakan validasi inline (`aria-invalid="true"`) + Error Summary dengan tautan melompat ke field pertama yang keliru.
4. **Pelacak 2FA Zero-PII & Grafik SLA**: mendukung keyboard `Enter` pada form lacak, rate limit 5x salah, dan tombol `.tab-toggle` (`aria-pressed`) untuk berganti antara Grafik SVG dan `<table>` tanpa kehilangan fokus.

---

## 7. Pola Layout & Peta Komposisi (4 Pola Berbeda)
| Nama Pola Komposisi | Anatomi Grid & Lebar Kontainer | Kapan Dipakai | Contoh Penggunaan |
| :--- | :--- | :--- | :--- |
| **1. Pita Hangat Asimetris (`1.15fr 0.85fr`)** | Penuh lebar `--bg-warm`, grid dalam `1200px` | Orientasi pertama warga (judul + pilihan tugas + ilustrasi penjelas) | Seksi 1 Hero + Pemilih Tugas + Ilustrasi Loket |
| **2. Alur Kerja dengan Bantuan Sticky (`1.35fr 0.65fr`)** | Kanvas bersih `--bg-canvas`, kolom kanan `position: sticky` | Mengisi syarat atau formulir yang rawan keraguan warga | Seksi 2 Wizard 3-Langkah + Panel Bantuan Petugas Sticky |
| **3. Panggung Bukti Data & Lacak (`0.9fr 1.1fr`)** | Pita `--bg-warm`, form lacak sejajar dengan bukti kinerja | Membuktikan keandalan layanan berdampingan dengan pelacak status | Seksi 3 Pelacak 2FA Zero-PII + Grafik & Tabel SLA |
| **4. Seksi Panduan Terfokus (`max-width: 960px`)** | Kanvas `--bg-canvas`, lebar baca ringkas `<= 960px` | Informasi kunjungan fisik & arahan foto loket yang tenang | Seksi 4 Kedatangan Loket & Placeholder Arahan Foto |

---

## 8. Sistem Motion & Koreografi
- **Token**: `--duration-fast: 150ms`, `--duration-normal: 220ms`, `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)`. Tanpa efek spring memantul agar wibawa layanan tetap terjaga.
- **Peta Motion**:
  | Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` |
  | :--- | :--- | :--- | :--- | :--- |
  | Centang syarat | `#doc-progress` (`<progress>`) | `220ms ease-out-quart` | Memberi umpan balik progres kesiapan dokumen | Nilai langsung berubah tanpa animasi (`0.01ms`) |
  | Klik Lanjut/Kembali | `#wizard-step-*` & tombol | `150ms–220ms ease-out-quart` | Menandai perpindahan tahap wizard & state kontrol secara tenang | Langsung tampil seketika (`0.01ms`) |
  | Klik Lihat Tabel / Grafik | `#sla-chart-wrap` & `#sla-table-wrap` | Seketika (disarankan animasi `<=400ms` *scaleX* opsional di produksi) | Mengalihkan visual batang SLA ke tabel HTML semantik | Tampil penuh secara instan |

---

## 9. Interaksi & Mikro-Interaksi
- Pencarian header menyaring pemilih tugas & daftar layanan secara langsung dan mengumumkan jumlah temuan melalui `aria-live="polite"`.
- Toggle bahasa `ID / EN` di header mengubah teks navigasi, hero, label wizard, pelacak, grafik, dan footer secara langsung.
- Tombol **Unduh CSV Data SLA** menghasilkan file `.csv` nyata dari array data simulasi menggunakan `Blob`.

---

## 10. Gamifikasi
- **Status**: `Tidak Berlaku` — Layanan publik wajib warga dilarang memakai lencana poin, rentetan harian, atau mekanik permainan; progres dokumen murni berfungsi informatif.

---

## 11. Sistem Visual, Ilustrasi, Arahan Foto & Visualisasi Data

### A. Sistem Ilustrasi SVG Orisinal
- **Aturan**: ketebalan garis seragam `stroke-width="2"`, sudut membulat `stroke-linecap="round"` dan `stroke-linejoin="round"`, maksimal 3 warna token (`--accent-primary`, `--accent-secondary`, `--text-primary`) di atas kertas `--bg-surface`, zero gradien mencolok.
- **Contoh Kode SVG Representatif**:
  ```svg
  <svg viewBox="0 0 460 320" width="460" height="320" role="img" aria-label="Ilustrasi alur tiga langkah di loket ramah: siapkan berkas, isi data singkat, pantau nomor lacak.">
    <rect x="16" y="20" width="428" height="280" rx="10" fill="var(--bg-surface)" stroke="var(--border-subtle)" stroke-width="1"/>
    <g aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">
      <line x1="56" y1="240" x2="404" y2="240" stroke="var(--text-primary)" stroke-width="2"/>
      <!-- Figur petugas sabar & meja loket -->
      <circle cx="132" cy="128" r="22" fill="var(--bg-warm)" stroke="var(--accent-primary)" stroke-width="2"/>
      <path d="M96 240 v-46 c0-16 14-28 36-28 s36 12 36 28 v46" fill="var(--bg-warm)" stroke="var(--accent-primary)" stroke-width="2"/>
      <!-- Kartu tahapan berangka 1-2-3 -->
      <rect x="220" y="74" width="176" height="44" rx="6" fill="var(--bg-warm)" stroke="var(--accent-primary)" stroke-width="2"/>
    </g>
  </svg>
  ```

### B. Arahan Foto (*Photo Direction*)
- **Subjek & Momen**: Petugas loket pelayanan terpadu duduk sejajar (tanpa sekat kaca tinggi) bersama warga lanjut usia memeriksa lembar persyaratan tercetak.
- **Framing & Komposisi**: Rasio `16:9`, komposisi horizontal dua per tiga kanan memuat meja & gestur tangan menunjuk daftar centang, sepertiga kiri lapang untuk keterangan lokasi.
- **Cahaya & Warna**: Cahaya siang natural dari jendela samping, suhu warna hangat seimbang dengan `--bg-warm` (`#F2EDE4`) dan aksen pakaian kerja teal gelap.
- **Hal yang Dilarang**: Jabat tangan seremonial kaku menghadap kamera, ruang kosong steril, filter biru dingin berlebihan.
- **Placeholder Terarah**: Menampilkan `data-photo-direction="true"` dengan sketsa garis SVG ruang meja, penanda rasio `16:9 · FOTO-LOKET-01`, dan teks keterangan arahan lengkap bagi fotografer instansi.

### C. Sistem Visualisasi Data & Aksesibilitas
- **Grafik Batang Perbandingan SLA (`#sla-chart-svg`)**: membandingkan `Target Standar` (batang terakota `--accent-data-2` + pola hatch SVG `<pattern>` diagonal) terhadap `Realisasi Rata-Rata` (batang teal solid `--accent-data-1`) untuk 4 layanan warga, dilengkapi label nilai langsung di ujung batang (`14px` horizontal, `tabular-nums lining-nums`), anotasi temuan ringkas, toggle ke `<table>` semantik (`<caption>` + `<th scope>`), serta tombol Unduh CSV.
- Untuk kompatibilitas penuh pembaca layar & `axe-core`, teks visual di dalam `<svg role="img" aria-label="...">` dibungkus `<g aria-hidden="true">` dan seluruh angkanya tersedia identik di tabel HTML alternatif.

### D. Ikonografi
- Ikon tugas menggunakan SVG garis tunggal `24x24px` (`stroke-width="2"`, `aria-hidden="true"` karena selalu didampingi label teks).

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: Sabar, ramah, aktif, setara dengan warga, zero klaim hukum kosong.
- **Contoh Benar vs Salah**:
  - *Benar*: `"Siapkan tiga berkas berikut terlebih dahulu agar pengisian Anda tidak terhenti di tengah jalan."`
  - *Salah*: `"Transformasi Digital Perizinan Tanpa Batas Sesuai Regulasi Terkini!"`
- **Data Contoh Fiktif Terindikasi**: Kota Ciptasari (fiktif contoh), nomor registrasi non-sekuensial `CS-2026-X9K2-7M4P`, kode faktual uji `4821`.

---

## 13. Aksesibilitas Khusus
- Seluruh font `WOFF2` self-hosted; `skip-link`, `3px solid` `:focus-visible`, `Esc` menutup masthead & laci developer, tabel HTML alternatif setara grafik SLA, *rate limit* pelacakan 5x gagal, serta bebas PII.

---

## 14. Anggaran Performa
- Mengacu `_shared/performance-budget.md` Jalur Profesional: `LCP <= 1,5 s`, `CLS <= 0,02` (`0`), bobot awal `<= 350 KB` (`Figtree` `20,2 KB` + `Inter` `48,3 KB` + `JetBrains Mono` `40,4 KB` = `~108,9 KB` font + `< 75 KB` HTML).

---

## 15. Signature Moment
- **Deskripsi Konkret**: Pemilih *"Apa yang ingin Anda lakukan hari ini?"* + Ilustrasi Alur Loket 3-Langkah + Wizard Progres Hidup dengan Bantuan Petugas `sticky` dan Grafik Realisasi SLA.
- **Langkah Implementasi Teknis**: State layanan JS ringan menghubungkan pemilih tugas -> checklist syarat berprogres -> bantuan kontekstual sticky -> ringkasan & nomor registrasi non-sekuensial -> pelacak 2FA & grafik SVG/`<table>`.
- **Fallback Reduced Motion**: Semua transisi bar progres dan hitungan SLA jatuh ke `0.01ms` tampilan instan.

---

## 16. Cek Anti-Template
1. Pemilih 4 tugas warga terintegrasi ke state wizard & panel bantuan sticky (bukan kartu fitur mati 3 kolom).
2. Ilustrasi SVG bersistem garis `2px` adegan meja loket + placeholder arahan foto `16:9` terarah.
3. Pelacak 2FA Zero-PII bersandingan dengan grafik perbandingan Target vs Realisasi SLA + tabel HTML + unduh CSV.

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  --bg-canvas: #FCFBF8;
  --bg-warm: #F2EDE4;
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFFFFF;
  --text-primary: #162328;
  --text-secondary: #374950;
  --text-muted: #4B5D64;
  --border-subtle: #D5CFC4;
  --border-strong: #4B5D64;
  --accent-primary: #0F5E63;
  --accent-primary-hover: #0B474B;
  --accent-on-primary: #FFFFFF;
  --accent-secondary: #9A3F16;
  --accent-data-1: #0F5E63;
  --accent-data-2: #9A3F16;
  --accent-data-3: #4B4F8A;
  --focus-ring: #B45309;
  --status-info-bg: #EFF6FF;
  --status-info-fg: #1E3A5F;
  --status-success-bg: #ECFDF5;
  --status-success-fg: #14532D;
  --status-warning-bg: #FFF7ED;
  --status-warning-fg: #7C2D12;
  --status-danger-bg: #FFF1F2;
  --status-danger-fg: #881337;

  --font-display: 'Figtree', 'Figtree Fallback', system-ui, -apple-system, sans-serif;
  --font-sans: 'Inter', 'Inter Fallback', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

  --radius-control: 6px;
  --radius-container: 10px;
  --duration-fast: 150ms;
  --duration-normal: 220ms;
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
}

[data-theme="dark"] {
  --bg-canvas: #0D1619;
  --bg-warm: #142126;
  --bg-surface: #111C20;
  --bg-elevated: #162429;
  --text-primary: #F4F7F6;
  --text-secondary: #C7D6DA;
  --text-muted: #9BB0B6;
  --border-subtle: #24383F;
  --border-strong: #8CA5AC;
  --accent-primary: #4FD1C5;
  --accent-primary-hover: #7DE0D6;
  --accent-on-primary: #091E20;
  --accent-secondary: #F5A67E;
  --accent-data-1: #4FD1C5;
  --accent-data-2: #F5A67E;
  --accent-data-3: #B4B8F8;
  --focus-ring: #FBBF24;
  --status-info-bg: #172554;
  --status-info-fg: #DBEAFE;
  --status-success-bg: #052E16;
  --status-success-fg: #BBF7D0;
  --status-warning-bg: #431407;
  --status-warning-fg: #FED7AA;
  --status-danger-bg: #4C0519;
  --status-danger-fg: #FECDD3;
}
```

### B. Konfigurasi Tailwind (`tailwind.config.js`)
```javascript
export default {
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)',
        warm: 'var(--bg-warm)',
        surface: 'var(--bg-surface)',
        primary: 'var(--accent-primary)',
        secondary: 'var(--accent-secondary)',
        ink: 'var(--text-primary)',
      },
      fontFamily: {
        display: ['Figtree', 'Figtree Fallback', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Inter Fallback', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        control: 'var(--radius-control)',
        container: 'var(--radius-container)',
      },
    },
  },
};
```

---

## 18. Checklist QA Sebelum Rilis
- [x] Seluruh kontras teks (termasuk `12px–14px`), aksen sekunder, warna seri data, dan fokus memenuhi WCAG 2.2 AA (`4.5:1` / `3:1`).
- [x] Lulus audit dua arah `slop-audit.js`: Slop Budget (`passedAll: true`) DAN Richness Floor (`richnessPassedAll: true`).
- [x] Lulus ke-5 pertanyaan Uji Kaku di Bagian 1 dengan bukti nyata pada antarmuka.
- [x] Font dimuat dari berkas lokal `WOFF2` self-hosted tanpa CDN eksternal dan angka data memakai `tabular-nums lining-nums`.
- [x] Semua komponen lulus uji navigasi keyboard (`Tab`, `Enter`, `Esc`) dan `prefers-reduced-motion`.
- [x] Tidak ada horizontal overflow di `375px`/`1280px`, kata yatim di judul, atau console error.

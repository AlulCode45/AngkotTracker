# DESIGN.md — `gov-data-open` (Data Terbuka, Statistik Publik & Transparansi Anggaran)

- **Arketipe Sumber**: `professional/gov-data-open`
- **Jalur**: `Profesional (GOV V2)`
- **Dial Ekspresivitas**: `5.5 / 10` — *Tegas, jernih secara statistik, bercerita bertahap lewat grafik ONS-grade aman buta warna agar angka publik dipahami warga biasa.*
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 6 | Variance: 5 | Motion: 4`
- **Tingkat Kerumitan**: `Standar Data Publik (Self-Hosted WOFF2, Zero CDN)`
- **Overlay Wajib**: Gabungkan dengan [`../overlays/id-gov.md`](../overlays/id-gov.md) saat diterapkan pada domain pemerintah resmi (`.go.id`).

---

## 1. Identitas, Niat, Dial Ekspresivitas, Big Idea & Uji Kaku

### Identitas & Niat
Portal data terbuka dan transparansi anggaran sering gagal melayani warga karena langsung membuang ribuan baris CSV mentah tanpa konteks cerita, atau memasang dasbor *donut chart* bertumpuk warna pelangi yang gagal dibaca penderita buta warna. `gov-data-open` meniru disiplin **UK Office for National Statistics (ONS)**, **Our World in Data**, dan **SingStat**: setiap grafik berbicara lewat *action title*, label nilai langsung, enkoding ganda (warna + pola garis/hatch + bentuk titik), cerita data bertahap yang dapat dilewati via keyboard, ringkasan **"Apa artinya bagi saya"**, serta tabel semantik dan unduhan CSV di sebelah grafik.

- **Alasan Dial Ekspresivitas (`5.5 / 10`)**: Angka publik tidak memerlukan hiasan maskot atau serif puitis; ekspresivitas datang dari kekuatan narasi visualisasi data (*sparkline* di hero, cerita 3 tahap berpanggung `sticky`, peta koridor berpola hatch, dan hitungan angka yang bergerak tenang saat masuk layar).
- **Big Idea**: *"Angka statistik dan anggaran publik yang langsung dipahami warga biasa lewat cerita data bertahap, label langsung, dan akses tabel mentah sekali klik."*

### Uji Kaku (5 Pertanyaan Wajib Dijawab Tertulis dengan Bukti)
1. **Apa gagasan besarnya dalam satu kalimat?**  
   *Angka yang bisa dipahami warga biasa* — diwujudkan lewat *action title* temuan di Hero, 3 langkah cerita data berpanggung grafik `sticky`, pemilih *"Apa artinya bagi saya"* per kecamatan, dan tombol `Lihat sebagai Tabel` + `Unduh CSV`.
2. **Apa yang membuat halaman ini tidak bisa tertukar dengan template?**  
   Hero tidak menjual fitur abstrak; ia langsung menyajikan angka dampak per rumah tangga bersama 3 *sparkline* tren `2022–2026`, diikuti seksi cerita data bertahap (dengan tombol lewati ke penjelajah tabel) dan peta wilayah berpola hatch + luminansi.
3. **Di mana mata pertama mendarat dan kenapa?**  
   Mata pertama mendarat pada judul temuan `Public Sans` (`48px`, `#111827` dengan kontras `15,75:1` di atas `#EDF2F7`), lalu meluncur ke 3 angka kunci di kanan (`84,2%`, `93,6%`, `Rp248.000/thn`) dan alur tren *sparkline*-nya.
4. **Di mana desain terasa hangat atau manusiawi?**  
   Pada penerjemahan angka makro menjadi kalimat konkret kehidupan sehari-hari di panel **"Apa Artinya bagi Saya"** (*"Rp18,4 Miliar untuk Kec. Pesisir setara 420 sambungan air baru..."*), disertai catatan metodologi jujur yang tidak disembunyikan di catatan kaki kecil.
5. **Di mana ia menolak godaan untuk dihias?**  
   Zero efek kaca, zero *gradient fill* warna-warni neon di batang grafik, zero kartu KPI berbayang di hero, dan zero ikon piala/skor; tabel penjelajah memakai pembatas tipis datar dan penomoran `tabular-nums lining-nums`.

---

## 2. Prinsip Desain
1. **Judul Adalah Temuan (*Action Title*, ONS/OWID)**
   - *Terapkan*: Tulis kesimpulan datanya sebagai judul grafik (misal *"Cakupan Air Bersih Naik 14,2 Poin Sejak Realokasi 2023"*).
   - *Hindari*: Judul pasif seperti *"Grafik Anggaran Tahun 2022–2026"*.
2. **Label Langsung & Enkoding Ganda Aman Buta Warna**
   - *Terapkan*: Tulis nilai langsung pada akhir garis atau ujung batang (`>= 14px` horizontal), dan bedakan seri dengan kombinasi **luminansi + pola (solid vs dashed / hatch diagonal + titik bulat vs kotak)** — tidak pernah mengandalkan warna saja.
   - *Hindari*: Legenda terpisah jauh di sudut atau pasangan merah-hijau tanpa pola pembeda.
3. **Selalu Ada "Apa Artinya bagi Saya" & Metodologi Terlihat**
   - *Terapkan*: Sediakan pemilih dampak lokal berbahasa awam dan cantumkan sumber, metode hitung, serta pembaruan terakhir di dekat grafik.
   - *Hindari*: Menampilkan angka makro triliunan tanpa menjelaskan dampaknya pada rumah tangga warga.
4. **Cerita Bertahap yang Ramah Keyboard & Bisa Dilewati**
   - *Terapkan*: Berikan tombol *"Lewati cerita data ke penjelajah lengkap"* di awal seksi *scrollytelling*, dan pastikan setiap tahap dapat dipilih lewat `Tab` + `Enter`.
   - *Hindari*: Memaksa pengguna melakukan scroll puluhan layar hanya untuk mencapai tabel atau CSV.
5. **Tabel Alternatif Semantik & Unduh Data Sekali Klik**
   - *Terapkan*: Setiap grafik memiliki tombol pengalih ke `<table>` (`<caption>`, `<th scope>`) dan tombol ekspor `.csv` nyata.
   - *Hindari*: Gambar grafik statis tanpa data sumber yang bisa disalin atau diunduh.

---

## 3. Token Warna & Pasangan Kontras

### A. Peran Semantik (Aman Buta Warna)
| Token CSS | Nama Deskriptif | Nilai Terang (Default) | Nilai Gelap (`data-theme="dark"`) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Statistical Paper | `#F9FAFB` | `#0B1117` | Latar kanvas utama penjelajah & form |
| `--bg-warm` | Cool Sandstone Slate | `#EDF2F7` | `#131D27` | Pita hero KPI & seksi dampak wilayah |
| `--bg-surface` | Chart Card Surface | `#FFFFFF` | `#101820` | Permukaan panel grafik, peta, input |
| `--bg-elevated` | Overlay Surface | `#FFFFFF` | `#16202A` | Masthead panel & laci `?dev=1` |
| `--text-primary` | Carbon Ledger Ink | `#111827` | `#F3F6FA` | Judul temuan, angka utama, tabel |
| `--text-secondary` | Graphite Note | `#374151` | `#C9D4E0` | Deskripsi narasi & subjudul |
| `--text-muted` | Slate Metadata | `#4B5563` | `#9AA8B8` | Sumber data, metodologi, label sumbu (`>= 6.7:1`) |
| `--border-subtle` | Table Hairline | `#CBD5E1` | `#243242` | Garis tabel, batas sumbu grafik, pembatas baris |
| `--border-strong` | Axis & Input Rule | `#4B5563` | `#8496AA` | Sumbu dasar grafik, batas input & tombol outline |
| `--accent-primary` | Civic Ocean Blue | `#1B4D7A` | `#6CB4EE` | CTA utama, tab aktif, tombol navigasi data |
| `--accent-primary-hover` | Deep Fjord Blue | `#133A5E` | `#93C8F4` | Hover CTA utama |
| `--accent-on-primary` | Pure Contrast | `#FFFFFF` | `#091726` | Teks di atas `--accent-primary` |
| `--accent-secondary` | Burnt Rust Signal | `#9A3412` | `#FDBA74` | Anotasi lonjakan, seri pembanding kedua |
| `--accent-data-1` | Deep Ocean Blue | `#1B4D7A` | `#6CB4EE` | Seri 1 (solid + lingkaran, luminansi sedang-gelap) |
| `--accent-data-2` | Rust Ochre | `#9A3412` | `#FDBA74` | Seri 2 (dashed / hatch + kotak, luminansi kontras) |
| `--accent-data-3` | Deep Pine Teal | `#115E59` | `#5EEAD4` | Seri 3 (garis titik + segitiga) |
| `--focus-ring` | High-Contrast Amber | `#B45309` | `#FBBF24` | Outline fokus `3px solid` |
| `--status-*` | Info / Sukses / Peringatan / Galat | Konsisten Baseline | Konsisten Baseline | Status validasi form & pemberitahuan |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` di atas `Background`) | Rasio Terang | Rasio Gelap | Target WCAG | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--text-primary` di atas `--bg-canvas` / `--bg-warm` | **`16,98:1`** / **`15,75:1`** | **`17,50:1`** / **`15,72:1`** | `>= 7,0:1` (AAA) | `LULUS` |
| `--text-secondary` di atas `--bg-canvas` / `--bg-warm` | **`9,86:1`** / **`9,15:1`** | **`12,63:1`** / **`11,34:1`** | `>= 4,5:1` (AA) | `LULUS` |
| `--text-muted` (`12px–14px`) di atas `--bg-canvas` / `--bg-warm` / `--bg-surface` | **`7,23:1`** / **`6,71:1`** / **`7,56:1`** | **`7,83:1`** / **`7,03:1`** / **`7,39:1`** | `>= 4,5:1` | `LULUS` |
| `--accent-on-primary` di atas `--accent-primary` | **`8,79:1`** | **`8,09:1`** | `>= 4,5:1` | `LULUS` |
| `--accent-primary` di atas `--bg-canvas` / `--bg-warm` | **`8,41:1`** / **`7,80:1`** | **`8,49:1`** / **`7,63:1`** | `>= 4,5:1` | `LULUS` |
| `--accent-secondary` di atas `--bg-canvas` / `--bg-warm` | **`6,99:1`** / **`6,49:1`** | **`11,25:1`** / **`10,10:1`** | `>= 4,5:1` | `LULUS` |
| `--accent-data-1..3` di atas `--bg-surface` | **`8,79:1`** / **`7,31:1`** / **`7,58:1`** | **`8,01:1`** / **`10,61:1`** / **`12,10:1`** | `>= 3,0:1` | `LULUS` |
| `--status-*` (fg di atas bg) | **`8,65:1` – `10,57:1`** | **`11,08:1` – `12,30:1`** | `>= 4,5:1` | `LULUS` |

---

## 4. Tipografi

### A. Keluarga Font, Self-Hosting & Fallback Terancang
| Peran | Token | Keluarga Font & Berkas Lokal (`WOFF2`) | Lisensi & Sumber Resmi | Fallback Stack & Metric Override |
| :--- | :--- | :--- | :--- | :--- |
| Display & Action Titles | `--font-display` | `'Public Sans'` (`../_fonts/public-sans-latin-wght-normal.woff2`) | `SIL OFL-1.1` (`github.com/uswds/public-sans`) | `'Public Sans Fallback', 'Inter Fallback', system-ui, sans-serif` (`size-adjust: 102%; ascent-override: 92%`) |
| Body, UI & Tabel | `--font-sans` | `'Inter'` (`../_fonts/inter-latin-wght-normal.woff2`) | `SIL OFL-1.1` (`github.com/rsms/inter`) | `'Inter Fallback', system-ui, -apple-system, sans-serif` (`size-adjust: 107%; ascent-override: 90%`) |
| Kode Dataset & CSV | `--font-mono` | `'JetBrains Mono'` (`../_fonts/jetbrains-mono-latin-wght-normal.woff2`) | `SIL OFL-1.1` (`github.com/JetBrains/JetBrainsMono`) | `ui-monospace, SFMono-Regular, Menlo, monospace` |

### B. Skala Responsif, Angka Lining Tabular & Aturan Keterbacaan
| Token | Ukuran (Mobile -> Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(2.125rem, 3.6vw, 3rem)` (`34px -> 48px`) | `1.12` | `-0.02em` | `700` | H1 Hero Action Title (`48/16 = 3.0`) |
| `--text-kpi` | `clamp(1.75rem, 2.5vw, 2.25rem)` (`28px -> 36px`) | `1.1` | `-0.015em` | `700` | Angka kunci hero (`tabular-nums lining-nums`) |
| `--text-h2` | `clamp(1.5rem, 2.2vw, 1.875rem)` (`24px -> 30px`) | `1.22` | `-0.01em` | `700` | Judul temuan seksi |
| `--text-h3` | `1.1875rem` (`19px`) | `1.3` | `0` | `700` | Judul grafik & panel dampak |
| `--text-body` | `1rem` (`16px`) | `1.6` | `0` | `400` | Narasi data (`48ch–65ch`) & input |
| `--text-sm` | `0.875rem` (`14px`) | `1.5` | `0` | `400/500` | Tabel, label grafik, sumber metodologi |

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`.
- **Grid & Container**: `--container-max: 1200px`, padding `16px` mobile / `28px` desktop.
- **Radius (Hanya 2 Nilai)**: `--radius-control: 4px`, `--radius-container: 8px`.
- **Elevasi**: `--shadow-none: none` untuk semua grafik/panel statis; `--shadow-overlay` hanya untuk laci `?dev=1`.

---

## 5.5 Slop Budget (Batas Atas) & Richness Floor (Batas Bawah)

### A. Slop Budget (Batas Atas)
| Metrik per Tampilan | Batas `gov-data-open` | Catatan / Alasan |
| :--- | :--- | :--- |
| Badge/pil dekoratif | **`0`** | Tag dataset tidak memakai pil warna-warni |
| Badge status informatif | Hanya yang berubah | — |
| Tombol terisi (primer) | Maks **`1`** per layar | CTA Hero dan Submit Koreksi Dataset berjarak > 2000px |
| Tombol outline | Maks **`2`** seluruh halaman | `#theme-toggle` dan opsional 1 tombol |
| Border-radius berbeda | Maks **`2`** (`4px`, `8px`) | — |
| Ketebalan border berbeda | Maks **`2`** (`1px`, `2px`) | — |
| Bobot huruf berbeda | Maks **`3`** (`400`, `500`, `700`) | — |
| Wadah bersarang | **`0`** | Grafik/kartu berada di permukaan terbuka tanpa wadah dalam wadah |
| Bayangan elemen statis | **`0`** | — |
| Latar seksi berselang-seling | Maks **`3`** | Hero & Seksi Dampak Wilayah memakai `--bg-warm`, sedangkan Cerita Data Sticky & Form memakai `--bg-canvas` |

### B. Richness Floor (Batas Bawah)
| Syarat Kekayaan Minimum | Target | Bukti Penerapan pada `gov-data-open` |
| :--- | :--- | :--- |
| Sistem visual non-teks bermakna | `>= 1` (aktual `3`) | 3 *Sparkline* SVG di Hero, Grafik Multi-Tahap Cerita Data, & Peta Koridor 5 Wilayah berpola hatch SVG |
| Visualisasi data nyata + tabel alternatif | `>= 1` + `<table>` | Grafik garis/batang multi-seri + peta hatch SVG + tabel interaktif terfilter sektor + pengalih Grafik/Tabel + Unduh CSV |
| Pola komposisi berbeda | `>= 3` (aktual `4`) | Hero KPI+Sparkline (`warm`), Cerita Data 2 kolom dengan Grafik Panggung `sticky` (`canvas`), Kalkulator Pribadi + Peta Koridor (`warm`), Penjelajah Tabel penuh + Form Permintaan Dataset (`canvas`) |
| Rasio display/body & `tabular-nums lining-nums` | `>= 2.0` (`3.0`) | `Public Sans` `48px` vs `Inter` `16px`; aktif `tabular-nums lining-nums` di KPI, label, & seluruh sel tabel |
| Warna fungsional | `>= 4` (aktual `5`) | Ocean Blue `#1B4D7A`, Burnt Rust `#9A3412`, Pine Teal `#115E59`, Cool Sandstone `#EDF2F7`, Status lengkap |
| Interaksi / gerak fungsional + fallback | `>= 1` + fallback | Step cerita data 1→2→3 (`sticky`), hitungan KPI `count-up`, filter tabel sektor, pemilih "Apa artinya bagi saya", tombol Lewati, `prefers-reduced-motion` |
| Microcopy manusiawi & spesifik | Terbukti | Kalimat temuan langsung (*"Naik 14,2 poin"*) dan terjemahan anggaran ke dampak harian rumah tangga |

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
1. **Cerita Data Bertahap (`position: sticky` Panggung Grafik + Tombol Lewati)**: pengguna dapat menelusuri tahap 1–3 lewat klik/`Tab` atau langsung menekan `#skip-story-btn` ke penjelajah tabel lengkap.
2. **Pengalih Grafik / Tabel + Unduh CSV**: `#chart-view-toggle` (`aria-pressed`) menukar SVG dengan `<table>` semantik; `#download-csv-btn` mengekspor file `.csv`.
3. **Pemilih "Apa Artinya bagi Saya" & Filter Tabel**: `<select>` berlabel eksplisit memperbarui ringkasan dampak kecamatan dan menyaring tabel anggaran via keyboard/perubahan nilai.

---

## 7. Pola Layout & Peta Komposisi (4 Pola Berbeda)
| Nama Pola Komposisi | Anatomi Grid & Lebar Kontainer | Kapan Dipakai | Contoh Penggunaan |
| :--- | :--- | :--- | :--- |
| **1. Hero Temuan + KPI Sparkline** | Pita `--bg-warm`, `1.05fr 0.95fr` | Menyajikan temuan paling penting dalam 5 detik pertama | Action Title + 3 KPI Sparkline |
| **2. Scrollytelling Panggung Sticky** | Kanvas `--bg-canvas`, `0.85fr` langkah + `1.15fr sticky` grafik | Memandu pembaca awam memahami perubahan sebelum/sesudah | Cerita 3 tahap + Grafik/Tabel + Metodologi |
| **3. Peta Wilayah & "Apa Artinya bagi Saya"** | Pita `--bg-warm`, `0.9fr` terjemahan dampak + `1.1fr` peta SVG | Menghubungkan angka makro ke wilayah tempat tinggal | Pemilih kecamatan + Peta Koridor Hatch + Tabel terfilter |
| **4. Form Permintaan Dataset Sempit** | Kanvas `--bg-canvas`, 1 kolom `<= 560px` | Permintaan dataset khusus / koreksi data | Form PPID SatuData |

---

## 8. Sistem Motion & Koreografi
- **Token**: `--duration-fast: 150ms`, `--duration-normal: 250ms`, `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)`.
- **Peta Motion**:
  | Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` |
  | :--- | :--- | :--- | :--- | :--- |
  | Seksi Hero tampak | `.count-up-kpi` | `420ms ease-out-quart` (JS `rAF`) | Menunjukkan pergerakan KPI terhadap tahun dasar menuju nilai 2026 | Nilai akhir tampil seketika (HTML awal sudah berisi angka akhir) |
  | `#story-chart-svg` tampak (`IntersectionObserver`) | `#story-line-coverage` & `#story-line-capital` | `450ms ease-out-quart` (`stroke-dashoffset` & `opacity`) | Menggambar garis tren cakupan air vs porsi modal saat grafik masuk layar | Garis grafik tampil penuh seketika tanpa animasi |
  | Pilih tahap 1–3 cerita data | `#chart-focus-band` & judul tahap | `150ms–250ms ease-out-quart` | Mengalihkan sorotan periode & anotasi temuan secara terukur | Perubahan state instan (`0.01ms`) |

---

## 9. Interaksi & Mikro-Interaksi
- Pencarian header menyaring baris di Penjelajah Tabel Anggaran dan melompat ke `#explorer-heading` dengan pengumuman `aria-live`.
- Toggle `ID / EN` mengalihkan seluruh judul temuan, KPI, narasi tahap cerita, dan label tabel.

---

## 10. Gamifikasi
- **Status**: `Tidak Berlaku` — Portal transparansi data menjaga objektivitas statistik tanpa skor atau lencana permainan.

---

## 11. Sistem Visual, Ilustrasi, Arahan Foto & Visualisasi Data

### A. Sistem Visualisasi Data Lengkap (`svg#story-chart-svg` + Peta Koridor + Sparklines)
- **Aturan Aksesibilitas Data**:
  1. Enkoding ganda warna + pola (`solid + circle`, `dashed + rect`, `hatch diagonal SVG`) agar aman bagi seluruh tipe buta warna.
  2. Label nilai langsung horizontal `>= 14px` dengan `tabular-nums lining-nums`.
  3. Setiap grafik disertai ringkasan temuan, keterangan metodologi/sumber terlihat, tabel HTML semantik, dan tombol unduh CSV.

### B. Arahan Foto *(Jika Dipakai pada Laporan Khusus)*
- **Subjek**: Infrastruktur layanan dasar warga (pipa distribusi air bersih, pos pengukur pompa lingkungan, petugas lapangan mencatat meter air desa) dengan komposisi dokumenter jujur tanpa stok foto korporat generik.

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: Terbuka, lugas, bahasa sehari-hari yang menghormati akal sehat pembaca awam.
- **Contoh Benar vs Salah**:
  - *Benar*: `"Dana Rp18,4 Miliar di Kec. Pesisir menyambungkan air perpipaan untuk 420 rumah tangga baru."`
  - *Salah*: `"Inovasi Smart Budget Berbasis Big Data Mengakselerasi Ekosistem Terintegrasi!"`

---

## 13. Aksesibilitas Khusus
- Tombol **"Lewati cerita data ke penjelajah lengkap"** wajib berada tepat sebelum daftar tahap cerita data; tabel penjelajah dan pengalih Grafik/Tabel dapat dijangkau sepenuhnya lewat keyboard; peta koridor SVG memakai pola `<pattern>` hatch selain gradasi luminansi.

---

## 14. Anggaran Performa
- Font self-hosted: `Public Sans` (`26,8 KB`) + `Inter` (`48,3 KB`) + `JetBrains Mono` (`40,4 KB`) = `~115,5 KB` WOFF2 + HTML tunggal ringkas (`LCP <= 1,5 s`, `CLS = 0`).

---

## 15. Signature Moment
- **Deskripsi Konkret**: Cerita Data 3-Tahap berpanggung grafik `sticky` (bisa dilewati) yang berganti seri/anotasi secara hidup, terhubung ke penerjemah dampak rumah tangga *"Apa Artinya bagi Saya"*, Peta Koridor wilayah berpola hatch, Penjelajah Tabel terfilter, dan Unduh CSV.
- **Fallback Reduced Motion**: Semua hitungan KPI dan pergantian tahap terjadi seketika tanpa animasi.

---

## 16. Cek Anti-Template
1. Hero temuan langsung memuat 3 angka KPI + 3 sparkline SVG berlabel awal-akhir.
2. Cerita data bertahap berpanggung `sticky` dengan tombol lewati menuju tabel penjelajah yang dapat disaring.
3. Peta koridor wilayah memakai pola hatch SVG aman buta warna + kalkulator dampak lokal per kecamatan.

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  --bg-canvas: #F9FAFB;
  --bg-warm: #EDF2F7;
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFFFFF;
  --text-primary: #111827;
  --text-secondary: #374151;
  --text-muted: #4B5563;
  --border-subtle: #CBD5E1;
  --border-strong: #4B5563;
  --accent-primary: #1B4D7A;
  --accent-primary-hover: #133A5E;
  --accent-on-primary: #FFFFFF;
  --accent-secondary: #9A3412;
  --accent-data-1: #1B4D7A;
  --accent-data-2: #9A3412;
  --accent-data-3: #115E59;
  --focus-ring: #B45309;
  --status-info-bg: #EFF6FF;
  --status-info-fg: #1E3A5F;
  --status-success-bg: #ECFDF5;
  --status-success-fg: #14532D;
  --status-warning-bg: #FFF7ED;
  --status-warning-fg: #7C2D12;
  --status-danger-bg: #FFF1F2;
  --status-danger-fg: #881337;

  --font-display: 'Public Sans', 'Public Sans Fallback', system-ui, sans-serif;
  --font-sans: 'Inter', 'Inter Fallback', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

  --radius-control: 4px;
  --radius-container: 8px;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
}

[data-theme="dark"] {
  --bg-canvas: #0B1117;
  --bg-warm: #131D27;
  --bg-surface: #101820;
  --bg-elevated: #16202A;
  --text-primary: #F3F6FA;
  --text-secondary: #C9D4E0;
  --text-muted: #9AA8B8;
  --border-subtle: #243242;
  --border-strong: #8496AA;
  --accent-primary: #6CB4EE;
  --accent-primary-hover: #93C8F4;
  --accent-on-primary: #091726;
  --accent-secondary: #FDBA74;
  --accent-data-1: #6CB4EE;
  --accent-data-2: #FDBA74;
  --accent-data-3: #5EEAD4;
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
        display: ['Public Sans', 'Public Sans Fallback', 'system-ui', 'sans-serif'],
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
- [x] Seluruh kontras warna teks, seri data (`>= 3:1`), dan pola hatch aman buta warna memenuhi WCAG 2.2 AA.
- [x] Lulus audit dua arah `slop-audit.js` (`passedAll: true` dan `richnessPassedAll: true`).
- [x] Lulus Uji Kaku Bagian 1 dengan bukti nyata.
- [x] Font `WOFF2` self-hosted tanpa CDN eksternal dan angka data memakai `tabular-nums lining-nums`.
- [x] Cerita data, tombol lewati, pengalih Grafik/Tabel, filter tabel, unduh CSV, bahasa `ID/EN`, dan form koreksi dataset lulus uji keyboard & `prefers-reduced-motion`.
- [x] Nol horizontal overflow di `375px` & `1280px` dan nol console error.

# DESIGN.md — Kinetic Editorial (`creative/kinetic-editorial`)

- **Arketipe Sumber**: `creative/kinetic-editorial`
- **Jalur**: Kreatif
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 3 | Variance: 9 | Motion: 9`
- **Tingkat Kerumitan**: `Full (Default Portofolio / Kampanye)` dan `Lite (Cepat / Mode Kuratorial Statis)`

---

## 1. Identitas, Niat & Big Idea
- **Identitas & Niat**: Arketipe ini dirancang untuk biro arsitektur, agensi kreatif, penerbitan budaya, pameran kuratorial, dan personal brand desainer atau sutradara. Pengunjung langsung disambut tipografi display monumental berkarakter cetak editorial, garis grid presisi 1px, kontras ritme ruang terang-gelap bak ruang pamer (*darkroom chapter*), serta perpindahan panggung karya yang mengalir mulus.
- **Big Idea**: Mengubah monografi studio arsitektur menjadi panggung tipografi kinetik di mana skala huruf, posisi guliran, dan pratinjau denah ruang bergerak sinkron seperti lembaran kurasi pameran.

---

## 2. Prinsip Desain
1. **Tipografi Monumental sebagai Struktur Arsitektural**:
   - *Terapkan*: Berikan skala display ekstrem pada H1 (`clamp(3.25rem, 8.8vw, 7rem)`) dengan `Instrument Serif` reguler dan italic asimetris sehingga halaman berwibawa bahkan sebelum gambar apa pun dimuat.
   - *Hindari*: Mengandalkan kartu fitur 3-kolom atau lencana pil warna-warni untuk menutupi kerangka halaman yang hampa.
2. **Garis Tipis 1px Menggantikan Kotak & Bayangan**:
   - *Terapkan*: Pisahkan daftar arsip, metadata proyek, dan kolom esai menggunakan garis struktural `1px` dan ruang kosong terukur (`<= 1` bayangan statis = `0`).
   - *Hindari*: Membungkus setiap proyek ke dalam kartu berborder tebal atau menambahkan *box-shadow* bertingkat.
3. **Satu Bab Ruang Gelap sebagai Kontrapung Kuratorial**:
   - *Terapkan*: Jalankan seluruh halaman pada kertas arsip hangat `#F4F2EC`, lalu selingi tepat satu bab pameran `#111110` untuk menyorot filosofi material secara dramatis.
   - *Hindari*: Mengganti warna latar setiap seksi secara bergantian tanpa alasan naratif (*zebra striping*).
4. **Koreografi Gulir yang Tidak Mengganggu Bacaan**:
   - *Terapkan*: Sinkronkan pergeseran horizontal tipografi display dan bilah progres membaca dengan guliran layar secara halus (`translate3d`), sembari membiarkan seluruh paragraf bacaan tetap diam terbaca.
   - *Hindari*: Men-stagger *fade-up* di setiap paragraf atau melakukan *scroll-jacking* yang menghilangkan kendali posisi pengguna.
5. **Kendali Penuh Gerakan & Transisi View Native**:
   - *Terapkan*: Bungkus pergantian panggung proyek dengan `document.startViewTransition()`, lengkapi marquee material dengan tombol **Jeda Gerakan** (`aria-pressed`), dan lumpuhkan seluruh gerakan mekanis saat `prefers-reduced-motion: reduce`.
   - *Hindari*: Marquee atau parallax tanpa jalur jeda yang mengunci teks bacaan atau memicu mabuk gerak.

---

## 3. Token Warna & Pasangan Kontras Terukur

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai Terang | Nilai Gelap (Mode Obsidian) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Archival Chalk / Gallery Obsidian | `#F4F2EC` | `#111110` | Latar kanvas utama halaman |
| `--bg-surface` | Raw Linen / Charcoal Slate | `#ECE9E0` | `#1C1B19` | Panggung monografi, drawer dev |
| `--bg-darkroom` | Darkroom Obsidian / Studio Lift | `#111110` | `#1C1B19` | Bab pameran material & teks kontras tinggi |
| `--text-primary` | Charcoal Ink / Chalk Ink | `#111110` | `#F4F2EC` | Judul monumental H1-H3 & teks utama |
| `--text-secondary` | Graphite Ink / Ash Fog | `#3A3834` | `#D6D3CD` | Esai, deskripsi karya, tautan navigasi |
| `--text-muted` | Slate Stone / Warm Pewter | `#57534E` | `#A8A29E` | Indeks arsip, tahun, label form |
| `--border-subtle` | Warm Hairline / Charcoal Rule | `#CFCAC0` | `#2E2D2A` | Pembatas daftar arsip `1px` |
| `--border-strong` | Charcoal Ink / Chalk Rule | `#111110` | `#F4F2EC` | Garis fokus input, tepi tombol, batas editorial |
| `--accent-primary` | Editorial Vermilion / Coral Signal | `#A8261B` | `#F87171` | Aksi primer (CTA terisi), bilah progres baca, fokus |
| `--accent-primary-hover` | Deep Vermilion / Soft Coral | `#841C13` | `#FCA5A5` | Hover CTA primer |
| `--accent-on-primary` | Pure White / Charcoal Ink | `#FFFFFF` | `#111110` | Teks di atas `--accent-primary` |
| `--focus-ring` | Editorial Vermilion / Amber Lamp | `#A8261B` | `#FBBF24` | Cincin `:focus-visible` tegas |
| `--status-success-bg` / `--status-success-fg` | Sukses | `#DCFCE7` / `#14532D` | `#143322` / `#BBF7D0` | Konfirmasi terkirim |
| `--status-danger-bg` / `--status-danger-fg` | Bahaya / Error | `#FEE2E2` / `#991B1B` | `#451212` / `#FECACA` | Ringkasan error & validasi inline |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` / `Background`) | Terang | Gelap / Darkroom | Target WCAG | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--text-primary` / `--bg-canvas` | **`16,88:1`** | **`16,88:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` / `--bg-canvas` | **`10,45:1`** | **`12,65:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` / `--bg-canvas` | **`6,81:1`** | **`7,49:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-on-primary` / `--accent-primary` | **`7,10:1`** | **`6,83:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-primary` / `--bg-canvas` | **`6,34:1`** | **`6,83:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--border-strong` / `--bg-canvas` | **`16,88:1`** | **`16,88:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AAA)` |
| `--focus-ring` / `--bg-canvas` | **`6,34:1`** | **`11,32:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AA)` |
| `--status-danger-fg` / `--status-danger-bg` | **`6,80:1`** | **`10,77:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |

---

## 4. Tipografi

### A. Keluarga Font & Lisensi
| Peran | Token | Keluarga Font | Lisensi & Sumber | Fallback Stack |
| :--- | :--- | :--- | :--- | :--- |
| Display Kinetik | `--font-display` | `'Instrument Serif'` | SIL OFL-1.1 (`fonts.google.com`, reguler & italic `400`) | `Georgia, 'Times New Roman', serif` |
| Body & Navigasi | `--font-sans` | `'Space Grotesk'` | SIL OFL-1.1 (`fonts.google.com`, bobot `400`, `500`, `700`) | `system-ui, -apple-system, sans-serif` |
| Indeks Arsip & Kode | `--font-mono` | System Monospace | Native OS Stack | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

**Aturan Bobot & Angka**: Seluruh halaman hanya memakai **3 bobot huruf** (`400`, `500`, `700`). Judul display `Instrument Serif` selalu memakai `font-weight: 400` agar lekuk tipisnya tetap tajam tanpa sintesis bold browser; aksen ritme dibangun melalui `font-style: italic` pada frasa kunci.

### B. Skala Responsif, Line-Height & Tracking
| Token | Ukuran (Mobile -> Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(3.15rem, 8.2vw, 6.5rem)` | `0.94` | `-0.03em` | `400` | H1 monumental tunggal di Hero |
| `--text-h2` | `clamp(2rem, 4.2vw, 3.25rem)` | `1.04` | `-0.02em` | `400` | Judul seksi & judul karya di panggung |
| `--text-h3` | `1.25rem` (`20px`) | `1.25` | `-0.01em` | `700` | Subjudul daftar arsip & esai |
| `--text-body-lg` | `1.125rem` (`18px`) | `1.6` | `0` | `400` | Teks lead pembuka (`max-width: 58ch`) |
| `--text-body` | `1rem` (`16px`) | `1.6` | `0` | `400` | Esai, deskripsi & input (`>= 16px` mobile) |
| `--text-sm` | `0.875rem` (`14px`) | `1.45` | `0.02em` | `500` | Tab filter, tombol, indeks arsip `01 / 04` |

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `--space-2: 8px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`, `--space-24: 96px`.
- **Grid & Container**: `--container-max: 1240px`, 12 kolom tidak simetris di desktop (`1.2fr 0.8fr` hero, `1fr 1.05fr` panggung arsip), gutter `16px` mobile / `32px` desktop.
- **Radius (`<= 2` nilai)**: `--radius-sharp: 2px` untuk kontrol interaktif dan wadah minimal agar tetap terasa cetak editorial.
- **Elevasi**: `--shadow-none: none`, `--shadow-focus: 0 0 0 3px var(--focus-ring)`.

---

## 5.5 Slop Budget & Aturan Badge
| Metrik per Tampilan | Batas Arketipe Ini | Catatan / Alasan |
| :--- | :--- | :--- |
| Badge/pil dekoratif | **`0`** | Seluruh label indeks (`01 / 04`) dan kategori disajikan sebagai teks tipografi polos tanpa kotak pil. |
| Badge status informatif | Hanya yang berubah | Bila ada status dinamis (`data-status-badge`), wajib membawa informasi status aktif. |
| Tombol terisi (primer) | Maks **`1`** per layar 900px | `#hero-cta` berada di Hero; `#inquiry-submit` terpisah di bagian akhir setelah panggung arsip dan darkroom. |
| Tombol outline | Maks **`2`** seluruh halaman | Khusus `#theme-toggle` dan `#marquee-toggle` (`Jeda Gerakan`). |
| Border-radius unik | Maks **`2`** | Tajam arsitektural `2px`. |
| Ketebalan border unik | Maks **`2`** | `1px` untuk garis pemisah & `2px` untuk garis aktif / tepi tombol. |
| Bobot huruf unik | Maks **`3`** | `400`, `500`, `700`. |
| Wadah bersarang | **`0`** | Grid menggunakan garis `border-top` / `border-bottom` tanpa kartu di dalam kartu. |
| Bayangan elemen statis | **`0`** | Kontras dibangun dari skala huruf, garis, dan ruang negatif, bukan bayangan. |
| Latar seksi berselang-seling | Maks **`2`** | Transisi masuk dan keluar tepat 1 bab pameran *Darkroom* (`#111110`) sebagai dramaturgi kuratorial. |

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
Setiap komponen mendukung `default`, `hover`, `focus-visible` (`3px solid var(--focus-ring)`), `active`, `disabled`, `loading`, `error`, dan `success`:
1. **Tombol Bermagnet Editorial (`.btn-primary`)**: Tinggi `>= 46px`, pergeseran magnetik desktop dibatasi `<= 8px` (`@media (hover: hover) and (pointer: fine)`).
2. **Bilah Arsip Proyek Interaktif (`.archive-row`)**: Menggunakan `<button type="button">` bergaris bawah `1px`, memicu pergantian judul, tahun, material, tantangan iklim, dan gambar teknis SVG melalui `document.startViewTransition()`.
3. **Marquee Material dengan Kontrol Jeda (`#marquee-toggle`)**: Patuh WCAG 2.2 SC 2.2.2 — berhenti pada `:hover`, `:focus-within`, `prefers-reduced-motion: reduce`, dan tombol eksplisit `#marquee-toggle` (`aria-pressed="true"`).
4. **Formulir Diskusi Proyek 1 Kolom**: `<label>` eksplisit, `aria-invalid`, `aria-describedby`, dan `#form-error-summary` (`role="alert"`, fokus otomatis).

---

## 7. Pola Layout Halaman
- **Hero Monumental + Plate Elevasi**: Garis penanda bab di atas, judul 2 baris `Instrument Serif` (baris kedua italic tergeser asimetris), satu tombol terisi + tautan teks di kiri, plat ilustrasi potongan arsitektur SVG di kanan.
- **Arsip Karya & Panggung Monografi (`#arsip-karya`)**: Tab filter kategori (`Semua (4)`, `Publik (2)`, `Budaya (2)`), 4 baris arsip di kiri, panggung monografi sticky di kanan (di atas layar desktop).
- **Bab Pameran Ruang Gelap (`#ruang-gelap`)**: Latar `#111110`, manifesto konstruksi tropis 2 kolom + marquee tipografi material dengan tombol jeda.
- **Formulir Diskusi Proyek (`#diskusi-proyek`)**: Tata letak 1 kolom (`max-width: 600px`), bebas kolom kanan hiasan.

---

## 8. Sistem Motion & Koreografi
- Merujuk `_shared/motion-system.md`: `--ease-out-expo`, `--duration-normal: 250ms`, `--duration-deliberate: 450ms`.

| Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` |
| :--- | :--- | :--- | :--- | :--- |
| Load halaman (Full) | Garis tirai intro tipis (`#editorial-rule`) | `500ms`, `--ease-out-expo` (`scaleX`) | Menandai bukaan halaman cetak tanpa menutup judul | Langsung tampil `scaleX(1)` tanpa gerak |
| Scroll halaman | `#hero-line-1` (`-X`) & `#hero-line-2` (`+X`), `#read-progress` (`scaleX`) | Scrub tersinkron gulir (GPU `translate3d`, `<= 42px`) | Menghubungkan kedalaman baca dengan ritme tipografi | Pergeseran kinetik dimatikan total (`translate3d(0,0,0)`) |
| Klik baris arsip / filter | `#stage-panel` & `#archive-list` | `260ms`, `View Transitions API` (`--ease-out-quart`) | Menjelaskan pergantian monografi karya tanpa lompatan | Pembaruan DOM seketika tanpa transisi view |
| Hover desktop tombol CTA | `.btn-primary` magnetik | `180ms`, `--ease-out-quart` (`<= 8px`) | Umpan balik presisi pointer kursor | Tidak bergeser |
| Kontinu (Darkroom) | `#marquee-track` | `24s linear infinite` (jeda otomatis + tombol `#marquee-toggle`) | Menampilkan katalog material studio secara ritmis | Berhenti statis rapi dalam baris mudah dibaca |

---

## 9. Interaksi & Mikro-Interaksi
1. **Sinkronisasi Kinetik Guliran & Indikator Bab**: Menggulir halaman memajukan rail tipis di puncak viewport serta menggeser dua baris H1 secara halus berlawanan arah (tidak lebih dari `42px` agar bebas overflow horizontal).
2. **Panggung Monografi View Transition**: Mengklik salah satu dari 4 baris proyek di Arsip memicu `document.startViewTransition()` yang memperbarui judul karya, kota, tahun, material, catatan iklim, dan ilustrasi potongan SVG unik pada panggung kanan.
3. **Filter Kategori Tanpa Pergeseran Layout**: Tab `Semua (4)`, `Publik (2)`, dan `Budaya (2)` menyaring baris proyek dengan `aria-selected` yang konsisten dan otomatis mengarahkan panggung ke proyek pertama yang tampil.
4. **Kontrol Marquee Eksplisit**: Tombol `#marquee-toggle` menyetel `aria-pressed="true"` dan kelas `.is-paused` (`animation-play-state: paused`) sesuai WCAG 2.2.2.

---

## 10. Gamifikasi
- **Status**: **Tidak Berlaku**
- **Alasan**: Klien portofolio arsitektur, penerbitan, dan studio desain menjual kurasi ruang, kedalaman riset, dan kejelasan gagasan kepada direktur proyek atau kurator. Menambahkan lencana atau kartu stempel akan merusak kewibawaan monografi editorial; interaksi difokuskan pada eksplorasi karya dan kontrol gerakan.

---

## 11. Imagery, Ilustrasi & Ikonografi
- **Ilustrasi Teknis / Elevasi Arsitektur**: Disajikan menggunakan SVG garis potong arsitektural presisi (`stroke-width: 1.5`) berbingkai tipis, tanpa teks `<text>` tertanam di dalam `<svg>` (penjelasan spesifikasi tetap berada di HTML agar aksesibel dan teraudit penuh).
- **Fotografi Proyek Klien (Saat Produksi)**: Rasio `4:5` potret atau `16:10` lanskap, tanpa filter warna mencolok atau sudut membulat berlebihan, format `AVIF`/`WebP` dengan `width`/`height` eksplisit serta `fetchpriority="high"` pada foto panggung awal.

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: Tenang, berwawasan teknis-budaya, spesifik menyebut kota, iklim tropis, dan material lokal Indonesia.
- **Contoh Benar vs Salah**:
  - *Benar*: `"Balai Baca Cikapundung (Bandung, 2026) — Bata ekspos Jatiwangi dengan rongga angin pasif menahan lembap tepian sungai."`
  - *Salah*: `"✨ Solusi Arsitektur Inovatif & Futuristik yang Mengubah Dunia Ruang Modern Tanpa Batas."`
- **Data Contoh Pratinjau (Ditandai Jujur)**: Studio **Biro Ruang Karsa** (Bandung & Jakarta, surel contoh `studio@ruangkarsa-contoh.id`), 4 proyek fiktif arketipe (`Balai Baca Cikapundung`, `Paviliun Tenun Pahikung`, `Studio Gerabah Kasongan`, `Arsip Maritim Kota Lama`).

---

## 13. Aksesibilitas Khusus Arketipe Ini
- Merujuk `_shared/accessibility-baseline.md`:
  - Seluruh marquee memiliki tombol jeda `#marquee-toggle` (`aria-pressed`), ditambah jeda otomatis saat `:hover` dan `:focus-within`.
  - Seluruh teks hero tidak pernah terpotong ketika tipografi kinetik bergerak; kontainer judul menggunakan `overflow-x: clip` agar tidak pernah memicu scroll horizontal di layar `375px`.
  - Bab `#ruang-gelap` mempertahankan rasio kontras minimum `12,65:1` (`#D6D3CD`) dan `16,88:1` (`#F4F2EC`) di atas `#111110`.
  - Tidak ada `<text>` tersembunyi atau berkontras ambigu di dalam `<svg>`.

---

## 14. Anggaran Performa & Perbedaan Mode `Lite` vs `Full`
- **Target Anggaran (`_shared/performance-budget.md`)**:
  - **Mode `Full` (Default Portofolio / Kampanye)**: `LCP <= 2,5s`, `INP <= 200ms`, `CLS <= 0,05`, JS awal `<= 220 KB`, Font `<= 160 KB` (2 keluarga: Instrument Serif + Space Grotesk). Pada proyek produksi penuh dapat memuat `gsap@3.15.1` + `lenis@1.3.27` secara lazy setelah FCP (`preview.html` demonstrasi menggunakan CSS View Transitions + rAF scroll ringkas agar ringan dan self-contained).
  - **Mode `Lite` (Cepat)**: `LCP <= 1,8s`, `INP <= 150ms`, `CLS <= 0,05`.
- **Yang Dipangkas di Mode `Lite`**: Menonaktifkan scrub gulir pada H1, menghentikan marquee secara default menjadi daftar statis, mematikan gerakan tombol magnetik, dan mengganti animasi intro dengan garis statis.

---

## 15. Signature Moment
- **Deskripsi Konkret**: Judul dua baris *Instrument Serif* raksasa bergerak asimetris merespons guliran pengguna (sinkron dengan rail pembaca merah vermilion di atas viewport), kemudian mengarah ke **Panggung Monografi Arsip** di mana setiap klik proyek menukar potongan denah SVG dan spesifikasi iklim secara halus melalui **View Transitions API**.
- **Langkah Implementasi Teknis**:
  1. Listener `scroll` pasif berbasis `requestAnimationFrame` menghitung progres `(0..1)` dan menyetel `translate3d` berlawanan arah pada `#hero-line-1` dan `#hero-line-2` (berhenti saat Mode Lite / `reduced-motion`).
  2. Tombol `.archive-row` membungkus mutasi DOM `#stage-panel` dengan `document.startViewTransition()`.
- **Biaya Performa & Fallback**: Overhead JS `< 3 KB` pada pratinjau, hanya memakai properti komposit GPU (`transform`, `scaleX`), `CLS = 0`. Saat `prefers-reduced-motion: reduce`, judul terkunci simetris (`0px`) dan panggung berganti seketika.

---

## 16. Cek Anti-Template & Rubrik Awwwards

### A. Tiga Hal yang Mustahil Ada di Template Umum
1. **Panggung Arsip Hidup dengan View Transitions**: Mengklik baris arsip mengganti studi kasus, tahun, tantangan iklim, dan diagram potongan arsitektur secara instan di satu panggung tanpa membuka 4 halaman terpisah atau memakai slider generik.
2. **Satu Bab Ruang Gelap Editorial**: Kontras terang-gelap tidak dipakai sebagai dekorasi acak, melainkan memisahkan katalog proyek publik dari bab pameran material konstruksi tropis.
3. **Kontrol Aksesibilitas Gerak Kelas Produksi**: Tipografi kinetik dan marquee terintegrasi penuh dengan tombol **Jeda Gerakan** (`aria-pressed`), `overflow-x: clip`, dan fallback `Lite`.

### B. Pemetaan Rubrik Awwwards
| Kriteria (Bobot) | Bagaimana Arketipe Ini Memenuhinya | Ketergantungan pada Aset Nyata Klien |
| :--- | :--- | :--- |
| **Design (40%)** | Skala `Instrument Serif` ekstrem yang dipasangkan dengan `Space Grotesk`, grid presisi `1px`, palet Chalk & Obsidian beraksen merah editorial. | Fotografi arsitektur beresolusi tinggi (cahaya alami konsisten) dan gambar kerja CAD/denah asli biro. |
| **Usability (30%)** | Filter kategori instan, panggung karya mudah dipindai, kontrol jeda marquee, dan form diskusi proyek 1 kolom bersih. | Kelengkapan portofolio proyek riil (lokasi, tahun, material, klien). |
| **Creativity (20%)** | Koreografi tipografi terhadap guliran + pergantian View Transition pada monografi panggung + bab darkroom sinematik. | Narasi konsep perancangan dan esai kuratorial asli milik studio klien. |
| **Content (10%)** | Bahasa Indonesia bernas dengan kosakata arsitektur tropis nyata, bebas hiperbola AI. | Penulisan ringkasan studi kasus oleh arsitek/kurator klien. |
| **Developer** | Semantik HTML5, WCAG 2.2 AA (`44px` tap target, kontras `>= 6,3:1`, kontrol jeda SC 2.2.2), `CLS = 0`, transform GPU murni. | Kompresi AVIF/WebP dan caching aset fotografi produksi. |

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  --bg-canvas: #F4F2EC;
  --bg-surface: #ECE9E0;
  --bg-darkroom: #111110;
  --text-primary: #111110;
  --text-secondary: #3A3834;
  --text-muted: #57534E;
  --border-subtle: #CFCAC0;
  --border-strong: #111110;
  --accent-primary: #A8261B;
  --accent-primary-hover: #841C13;
  --accent-on-primary: #FFFFFF;
  --focus-ring: #A8261B;
  --status-success-bg: #DCFCE7;
  --status-success-fg: #14532D;
  --status-danger-bg: #FEE2E2;
  --status-danger-fg: #991B1B;

  --font-display: 'Instrument Serif', Georgia, 'Times New Roman', serif;
  --font-sans: 'Space Grotesk', system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --radius-sharp: 2px;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### B. Konfigurasi Tailwind (`tailwind.config.js`)
```javascript
export default {
  theme: {
    extend: {
      colors: {
        chalk: 'var(--bg-canvas)',
        linen: 'var(--bg-surface)',
        obsidian: 'var(--bg-darkroom)',
        ink: 'var(--text-primary)',
        vermilion: 'var(--accent-primary)',
      },
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        sharp: '2px',
      },
    },
  },
};
```

---

## 18. Checklist QA Sebelum Rilis
- [x] Seluruh pasangan warna lulus kontras WCAG 2.2 AA & verifikasi `axe-core` (`30 passes, 0 violations, 0 incomplete`) pada 4 state (`light-normal`, `dark-mode`, `form-error`, `dev-drawer-open`).
- [x] Lulus `slop-audit.js` 100% sesuai Slop Budget Bagian 5.5 (`decorativeBadges: 0`, `maxFilledPerScreen: 1`, `outlineFullPage: 2`, `uniqueBorderRadii: 1`, `uniqueBorderWidths: 2`, `uniqueFontWeights: 3`, `maxNestedContainers: 0`, `staticShadows: 0`, `alternatingSectionBgs: 2`).
- [x] Uji keyboard `10x Tab` (`tabAllHaveVisibleOutline: true`, `tabAnyInClosedDrawer: false`) & `prefers-reduced-motion: reduce` (`matches: true`, `btnDuration: "1e-05s"`) terverifikasi.
- [x] Interaksi kunci terverifikasi nyata: pergantian panggung proyek (`Balai Baca Cikapundung` -> `Paviliun Tenun Pahikung`), filter kategori (`4` -> `2`), dan kontrol `#marquee-toggle` (`aria-pressed="true"`, `animationPlayState: "paused"`); catatan: uji pointer/scroll real-time tombol magnetik & scrub gulir tidak diotomasi terpisah dalam skrip.
- [x] Lighthouse nyata memenuhi anggaran Mode Full: Mobile `99/100/100/100` (`LCP 1.6 s`, `FCP 1.6 s`, `CLS 0.036`, `TBT 0 ms`, `138 KiB`); Desktop `100/100/100/100` (`LCP 0.5 s`, `FCP 0.5 s`, `CLS 0.002`, `TBT 0 ms`, `138 KiB`).
- [x] Inspeksi visual screenshot `375px` & `1280px` (terang & gelap) tanpa overflow (`scrollWidth === innerWidth`) dan `0` console error.

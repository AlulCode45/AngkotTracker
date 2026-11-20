# DESIGN.md — `gov-institutional-editorial` (Kementerian, Pemda & Publikasi Kebijakan)

- **Arketipe Sumber**: `professional/gov-institutional-editorial`
- **Jalur**: `Profesional (GOV V2)`
- **Dial Ekspresivitas**: `6 / 10` — *Berkarakter editorial kuat dan berwibawa untuk instansi bermisi komunikasi kebijakan, berita, serta laporan publikasi.*
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 4 | Variance: 6 | Motion: 4`
- **Tingkat Kerumitan**: `Standar Editorial (Self-Hosted WOFF2, Zero CDN)`
- **Overlay Wajib**: Gabungkan dengan [`../overlays/id-gov.md`](../overlays/id-gov.md) saat diterapkan pada domain pemerintah resmi (`.go.id`).

---

## 1. Identitas, Niat, Dial Ekspresivitas, Big Idea & Uji Kaku

### Identitas & Niat
Portal kementerian atau pemerintah daerah sering kali terjebak antara dua kutub ekstrem: terlalu kaku penuh daftar tautan kering seperti v1 `corporate-trust`, atau dipenuhi karusel pejabat berwajah datar yang kehilangan fokus substansi kebijakan. `gov-institutional-editorial` meminjam ketenangan tipografi pers dan laporan tahunan berkelas: `Source Serif 4` berkarakter untuk judul dan kutipan kebijakan, `IBM Plex Sans` yang jernih untuk navigasi, tabel, dan label data, arahan fotografi dokumenter yang jujur tentang pekerjaan lapangan nyata, *sticky Table of Contents* yang menyorot bab secara langsung, serta grafik pencapaian kebijakan berlabel langsung.

- **Alasan Dial Ekspresivitas (`6 / 10`)**: Instansi perumus kebijakan perlu mengajak jurnalis, peneliti, dan warga membaca narasi panjang yang tepercaya. Dial `6` membuka ruang bagi kontras serif+sans, ritme kolom majalah kebijakan (`62ch`), *pull quote*, dan kronologi visual tanpa pernah mengorbankan kontras AA/AAA maupun kecepatan muat.
- **Big Idea**: *"Otoritas publik yang dapat didekati melalui jurnalisme kebijakan yang jernih, fotografi dokumenter yang jujur, dan arsip keputusan yang mudah ditelusuri."*

### Uji Kaku (5 Pertanyaan Wajib Dijawab Tertulis dengan Bukti)
1. **Apa gagasan besarnya dalam satu kalimat?**  
   *Otoritas yang bisa didekati melalui jurnalisme kebijakan dan bukti lapangan* — diwujudkan lewat perpaduan laporan kebijakan panjang ber-TOC `sticky`, foto dokumenter kerja nyata (`FOTO-01`/`FOTO-02`), kronologi keputusan, dan grafik capaian pesisir.
2. **Apa yang membuat halaman ini tidak bisa tertukar dengan template?**  
   Struktur empat ritme yang spesifik publikasi kebijakan: Hero Editorial bermuatan arahan foto `16:10`, beranda berlapis (layanan cepat + arsip rilis berfilter + `FOTO-02`), naskah panjang dengan *sticky Table of Contents* + *pull quote* + kronologi + grafik garis berlabel langsung, serta formulir permintaan informasi PPID 1 kolom.
3. **Di mana mata pertama mendarat dan kenapa?**  
   Mata pertama mendarat pada judul `Source Serif 4` (`50px` desktop, `#141C24` di atas pita gading `#EFECE3` dengan kontras `14,56:1`) di kolom kiri Hero, lalu langsung bergeser ke *visual anchor* arahan foto `FOTO-01` di kolom kanan yang menunjukkan pekerjaan lapangan nyata di pesisir.
4. **Di mana desain terasa hangat atau manusiawi?**  
   Pada kanvas kertas gading `#FAF8F4` dan `#EFECE3`, aksen oker hangat `#8F4A12`, arahan foto jujur yang melarang pose kamera kaku, kutipan suara nelayan/tim lapangan (*pull quote* miring `Source Serif 4`), serta bahasa rilis yang menyebut lokasi, angka, dan tanggal pasti.
5. **Di mana ia menolak godaan untuk dihias?**  
   Pada **Tabel Capaian Kinerja**, **Daftar Rilis Pers**, dan **Formulir Permintaan Informasi PPID**: seluruh daftar memakai baris berpembatas garis `1px` tanpa kartu berbayang maupun tag pil warna-warni, tombol primer dibatasi `1` per layar, dan *megamenu* tampil polos berkontras tinggi dengan penutup tombol `Escape`.

---

## 2. Prinsip Desain
1. **Fotografi Dokumenter Jujur sebagai Penjelas Kerja Nyata**
   - *Terapkan*: Gunakan arahan foto berbasis kerja lapangan nyata (cahaya pagi natural, rasio `16:10` dan `4:3`, tanpa menghadap kamera kaku) beserta placeholder vektor bermakna sebelum foto produksi klien tersedia.
   - *Hindari*: Foto studio berlatar polos atau tiga kotak diagram kosong bergaris putus-putus seperti v1.
2. **Tipografi Serif Berwibawa Dipadukan Sans UI Presisi**
   - *Terapkan*: `Source Serif 4` (self-hosted WOFF2 regular + italic) khusus untuk display dan pull quote, dipasangkan dengan `IBM Plex Sans` untuk UI, navigasi, dan data tabel bermetrik `tabular-nums lining-nums`.
   - *Hindari*: Memakai angka *old-style* serif pada laporan kinerja atau tabel anggaran.
3. **Navigasi Mendalam yang Tetap Ringan (Megamenu + Pencarian + ID/EN)**
   - *Terapkan*: Sediakan tombol megamenu aksesibel (`aria-expanded`, tutup via `Escape`), kolom pencarian publikasi langsung, dan toggle bahasa `ID / EN`.
   - *Hindari*: Menu drop-down bertingkat yang menjebak pengguna keyboard.
4. **Jurnalisme Kebijakan yang Terstruktur (*Sticky TOC* + *Pull Quote* + Kronologi)**
   - *Terapkan*: Berikan Daftar Isi `sticky` di sisi kiri naskah (`260px`) yang aktif menyorot bab saat digulir (`IntersectionObserver`), dengan lebar teks bacaan ideal `55ch–64ch`.
   - *Hindari*: Teks panjang selebar `1200px` penuh tanpa daftar isi atau pemecah ritme.
5. **Data Kebijakan dengan Konteks & Tabel Alternatif**
   - *Terapkan*: Sertakan grafik garis/area kumulatif berlabel langsung dan anotasi tahun tonggak, lengkap dengan pengalih ke tabel HTML dan tombol unduh CSV.
   - *Hindari*: Klaim pencapaian tanpa angka pembanding baseline atau tahun dasar.

---

## 3. Token Warna & Pasangan Kontras

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai Terang (Default) | Nilai Gelap (`data-theme="dark"`) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Archival Chalk Cream | `#FAF8F4` | `#0F141A` | Latar utama bacaan & rilis |
| `--bg-warm` | Heritage Limestone | `#EFECE3` | `#171F28` | Pita bidang penuh lebar hero & PPID |
| `--bg-surface` | Folio White | `#FFFFFF` | `#131A22` | Permukaan panel grafik, megamenu, input |
| `--bg-elevated` | Cabinet Elevation | `#FFFFFF` | `#18212B` | Megamenu & laci `?dev=1` |
| `--text-primary` | Diplomatic Ink | `#141C24` | `#F3F5F7` | Judul, naskah kebijakan, tabel |
| `--text-secondary` | Slate Manuscript | `#374350` | `#C7D0DA` | Subjudul, lead, navigasi |
| `--text-muted` | Archive Stone | `#4D5A68` | `#9AA7B6` | Tanggal, metadata, catatan foto (`>= 5.97:1`) |
| `--border-subtle` | Editorial Hairline | `#D4CFC3` | `#26313E` | Garis pemisah daftar, tabel, kronologi |
| `--border-strong` | Charcoal Rule | `#4D5A68` | `#8796A8` | Border input, tombol outline, kolom fokus |
| `--accent-primary` | Prussian State Navy | `#1B3B6F` | `#8AB4F8` | CTA utama, tautan aktif, penanda TOC |
| `--accent-primary-hover` | Deep Admiralty | `#132B52` | `#AECBFA` | Hover CTA utama |
| `--accent-on-primary` | Contrast Paper | `#FFFFFF` | `#0B1829` | Teks di atas `--accent-primary` |
| `--accent-secondary` | Heritage Ochre | `#8F4A12` | `#F0B27A` | Garis pull quote, kicker editorial, anotasi |
| `--accent-data-1` | Prussian Line | `#1B3B6F` | `#8AB4F8` | Garis utama capaian realisasi (solid + titik bulat) |
| `--accent-data-2` | Ochre Target | `#8F4A12` | `#F0B27A` | Garis target RPJMN (putus-putus + kotak) |
| `--accent-data-3` | Coastal Pine | `#18634B` | `#6EE7B7` | Seri pembanding hutan bakau lindung |
| `--focus-ring` | Signal Ochre Gold | `#B45309` | `#FBBF24` | Outline fokus `3px solid` |
| `--status-info-bg` / `--status-info-fg` | Info Arsip | `#EFF6FF` / `#1E3A5F` | `#172554` / `#DBEAFE` | Info publikasi |
| `--status-success-bg` / `--status-success-fg` | Terpenuhi | `#ECFDF5` / `#14532D` | `#052E16` / `#BBF7D0` | Konfirmasi PPID |
| `--status-warning-bg` / `--status-warning-fg` | Perhatian | `#FFF7ED` / `#7C2D12` | `#431407` / `#FED7AA` | Tenggat konsultasi publik |
| `--status-danger-bg` / `--status-danger-fg` | Galat | `#FFF1F2` / `#881337` | `#4C0519` / `#FECDD3` | Error validasi formulir |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` di atas `Background`) | Rasio Terang | Rasio Gelap | Target WCAG | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--text-primary` di atas `--bg-canvas` | **`16,21:1`** | **`16,93:1`** | `>= 7,0:1` (AAA) | `LULUS` |
| `--text-primary` di atas `--bg-warm` | **`14,56:1`** | **`15,21:1`** | `>= 7,0:1` (AAA) | `LULUS` |
| `--text-secondary` di atas `--bg-canvas` / `--bg-warm` | **`9,51:1`** / **`8,54:1`** | **`11,86:1`** / **`10,66:1`** | `>= 4,5:1` (AA) | `LULUS` |
| `--text-muted` (`12px–14px`) di atas `--bg-canvas` / `--bg-warm` / `--bg-surface` | **`6,65:1`** / **`5,97:1`** / **`7,05:1`** | **`7,55:1`** / **`6,79:1`** / **`7,16:1`** | `>= 4,5:1` | `LULUS` |
| `--accent-on-primary` di atas `--accent-primary` | **`11,04:1`** | **`8,47:1`** | `>= 4,5:1` | `LULUS` |
| `--accent-primary` di atas `--bg-canvas` / `--bg-warm` | **`10,41:1`** / **`9,35:1`** | **`8,78:1`** / **`7,89:1`** | `>= 4,5:1` | `LULUS` |
| `--accent-secondary` di atas `--bg-canvas` / `--bg-warm` | **`6,27:1`** / **`5,63:1`** | **`10,00:1`** / **`8,99:1`** | `>= 4,5:1` | `LULUS` |
| `--accent-data-1..3` di atas `--bg-surface` | **`11,04:1`** / **`6,65:1`** / **`7,18:1`** | **`8,31:1`** / **`9,47:1`** / **`11,49:1`** | `>= 3,0:1` | `LULUS` |
| `--status-*` (fg di atas bg) | **`8,65:1` – `10,57:1`** | **`11,08:1` – `12,30:1`** | `>= 4,5:1` | `LULUS` |

---

## 4. Tipografi

### A. Keluarga Font, Self-Hosting & Fallback Terancang
| Peran | Token | Keluarga Font & Berkas Lokal (`WOFF2`) | Lisensi & Sumber Resmi | Fallback Stack & Metric Override |
| :--- | :--- | :--- | :--- | :--- |
| Display & Pull Quote | `--font-display` | `'Source Serif 4'` (`../_fonts/source-serif-4-latin-wght-normal.woff2` & `italic`) | `SIL OFL-1.1` (`github.com/adobe-fonts/source-serif`) | `'Source Serif Fallback', Georgia, 'Times New Roman', serif` (`size-adjust: 102%; ascent-override: 93%`) |
| Body, Navigasi & Data Tabel | `--font-sans` | `'IBM Plex Sans'` (`../_fonts/ibm-plex-sans-latin-{400,500,700}-normal.woff2`) | `SIL OFL-1.1` (`github.com/IBM/plex`) | `'IBM Plex Fallback', system-ui, -apple-system, sans-serif` (`size-adjust: 101%; ascent-override: 96%`) |
| Kode Peraturan | `--font-mono` | `'JetBrains Mono'` (`../_fonts/jetbrains-mono-latin-wght-normal.woff2`) | `SIL OFL-1.1` (`github.com/JetBrains/JetBrainsMono`) | `ui-monospace, SFMono-Regular, Menlo, monospace` |

### B. Skala Responsif, Angka Lining Tabular & Aturan Keterbacaan
| Token | Ukuran (Mobile -> Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(2.25rem, 3.8vw, 3.125rem)` (`36px -> 50px`) | `1.12` | `-0.015em` | `700` | H1 Hero & Judul Naskah Kebijakan (`50/16 = 3.13`) |
| `--text-h2` | `clamp(1.5rem, 2.3vw, 2rem)` (`24px -> 32px`) | `1.22` | `-0.01em` | `700` | Judul seksi & bab TOC |
| `--text-h3` | `1.25rem` (`20px`) | `1.3` | `0` | `700` | Judul sub-seksi, berita, panel |
| `--text-quote` | `1.375rem` (`22px`) | `1.45` | `0` | `400 italic` | Pull quote `Source Serif 4` |
| `--text-body` | `1rem` (`16px`) | `1.65` | `0` | `400` | Naskah bacaan (`55ch–64ch`) & input |
| `--text-sm` | `0.875rem` (`14px`) | `1.5` | `0` | `400/500` | Navigasi, metadata, label grafik, tabel |

- Seluruh angka statistik, tabel, tahun regulasi, dan capaian wajib menerapkan `font-variant-numeric: tabular-nums lining-nums;`.
- Judul (`h1, h2, h3`) memakai `text-wrap: balance;` agar bebas kata yatim.

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`.
- **Grid & Container**: `--container-max: 1200px`, padding `16px` mobile / `28px` desktop.
- **Radius (Hanya 2 Nilai)**: `--radius-control: 4px`, `--radius-container: 8px` (tajam berwibawa khas terbitan editorial resmi).
- **Elevasi**: `--shadow-none: none` elemen statis; `--shadow-overlay: 0 12px 28px rgba(20, 28, 36, 0.14)` hanya untuk megamenu terbuka & laci `?dev=1`.

---

## 5.5 Slop Budget (Batas Atas) & Richness Floor (Batas Bawah)

### A. Slop Budget (Batas Atas)
| Metrik per Tampilan | Batas `gov-institutional-editorial` | Catatan / Alasan |
| :--- | :--- | :--- |
| Badge/pil dekoratif | **`0`** | Kategori rilis ditulis teks datar tanpa kotak pil |
| Badge status informatif | Hanya yang berubah | — |
| Tombol terisi (primer) | Maks **`1`** per layar | CTA Hero dan CTA Kirim PPID berjarak > 2000px |
| Tombol outline | Maks **`2`** seluruh halaman | `#theme-toggle` dan tombol `#megamenu-btn` (atau 1 outline) |
| Border-radius berbeda | Maks **`2`** (`4px`, `8px`) | — |
| Ketebalan border berbeda | Maks **`2`** (`1px`, `2px`) | — |
| Bobot huruf berbeda | Maks **`3`** (`400`, `500`, `700`) | — |
| Wadah bersarang | **`0`** | Zero kotak di dalam kotak |
| Bayangan elemen statis | **`0`** | Hanya overlay megamenu & `?dev=1` |
| Latar seksi berselang-seling | Maks **`2`** | Hero (`--bg-warm`) -> Rilis & Naskah (`--bg-canvas`) -> PPID (`--bg-warm`) |

### B. Richness Floor (Batas Bawah)
| Syarat Kekayaan Minimum | Target | Bukti Penerapan pada `gov-institutional-editorial` |
| :--- | :--- | :--- |
| Sistem visual non-teks bermakna | `>= 1` (aktual `3`) | 2 Placeholder Arahan Foto Dokumenter Terarah (`FOTO-01` 16:10 di Hero, `FOTO-02` 4:3 di Rilis) + Grafik Capaian Pesisir SVG |
| Visualisasi data nyata + tabel alternatif | `>= 1` + `<table>` | Grafik garis + area SVG `2022–2026` berlabel langsung & target RPJMN, toggle Grafik/Tabel HTML semantik, tombol Unduh CSV |
| Pola komposisi berbeda | `>= 3` (aktual `4`) | Hero editorial asimetris (`warm`), Beranda rilis 1.2fr/0.8fr (`canvas`), Naskah dengan *sticky TOC* 260px + kolom `62ch` (`canvas`), Form PPID 1 kolom sempit (`warm`) |
| Rasio display/body & `tabular-nums lining-nums` | `>= 2.0` (`3.13`) | `Source Serif 4` `50px` vs `IBM Plex Sans` `16px`; angka tabel/grafik/kronologi memakai `tabular-nums lining-nums` |
| Warna fungsional | `>= 4` (aktual `5`) | Primer `#1B3B6F`, Sekunder `#8F4A12`, Aksen Data `1..3`, Netral Hangat `#EFECE3`, Status lengkap |
| Interaksi / gerak fungsional + fallback | `>= 1` + fallback | Megamenu keyboard + `Esc`, Filter rilis, Sticky TOC scrollspy (`IntersectionObserver`), toggle Grafik/Tabel + CSV, switch `ID/EN`, fallback `prefers-reduced-motion` |
| Microcopy manusiawi & spesifik | Terbukti | Judul jurnalistik berangka pasti, kutipan perspektif warga lapangan, label PPID lugas tanpa basa-basi |

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
1. **Header Lengkap dengan Megamenu Aksesibel**: tombol `#megamenu-btn` memakai `aria-expanded` & `aria-controls`; membuka overlay 3 kolom yang dapat dilewati via `Tab` dan ditutup dengan tombol `Escape` atau klik ulang; dilengkapi form pencarian rilis & switch bahasa `ID / EN`.
2. **Daftar Rilis Pers Berfilter**: filter kategori memakai tombol `.btn-ghost` bergaris bawah aktif (`aria-pressed`), menyaring daftar berita berbaris tipis tanpa kartu kotak berulang.
3. **Sticky TOC Naskah Kebijakan + Pull Quote + Kronologi**: `aside` daftar isi tetap menempel saat halaman naskah digulir dan menandai bab aktif (`aria-current="true"`).
4. **Formulir PPID 1 Kolom**: validasi inline + Error Summary + persetujuan eksplisit tidak tercentang otomatis.

---

## 7. Pola Layout & Peta Komposisi (4 Pola Berbeda)
| Nama Pola Komposisi | Anatomi Grid & Lebar Kontainer | Kapan Dipakai | Contoh Penggunaan |
| :--- | :--- | :--- | :--- |
| **1. Hero Editorial Berfoto Dokumenter** | Pita `--bg-warm`, grid `1.05fr 0.95fr` | Memperkenalkan isu kebijakan utama beserta konteks lapangan | Judul + lead + arahan foto `FOTO-01` `16:10` |
| **2. Beranda Rilis & Layanan Berlapis** | Kanvas `--bg-canvas`, strip 4 layanan cepat + split `1.2fr 0.8fr` | Menyatukan akses tugas cepat, berita terkini, dan foto tokoh kerja | Rilis berfilter + `FOTO-02` `4:3` |
| **3. Kolom Naskah Panjang + Sticky TOC** | Kanvas `--bg-canvas`, `260px sticky` + `1fr` max `62ch` | Artikel kebijakan, laporan tahunan, kronologi, dan grafik capaian | Pull quote + kronologi + grafik pesisir |
| **4. Form PPID Sempit Penuh Lebar** | Pita `--bg-warm`, kolom tunggal `<= 560px` | Permintaan informasi publik atau langganan buletin | Formulir PPID terstruktur |

---

## 8. Sistem Motion & Koreografi
- **Token**: `--duration-fast: 150ms`, `--duration-normal: 240ms`, `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)`.
- **Peta Motion**:
  | Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` |
  | :--- | :--- | :--- | :--- | :--- |
  | Gulir naskah (`IntersectionObserver`) | `.toc-link[aria-current]` | `150ms–240ms ease-out-quart` | Menyorot posisi pembacaan pada TOC sticky | Sorotan berpindah seketika (`0.01ms`) |
  | Klik Megamenu | `#megamenu-panel` | `150ms ease-out-quart` | Transisi bersih panel navigasi 3 kolom (`Esc` menutup & mengembalikan fokus) | Terbuka/tertutup instan |
  | Filter rilis / Lihat Tabel | `.press-filter` & `#coastal-table-wrap` | Seketika (count-up capaian `412 km` opsional di produksi, wajib hormati `reduced-motion`) | Menyaring siaran pers & menyediakan tabel alternatif data grafik | Nilai & baris tampil instan |

---

## 9. Interaksi & Mikro-Interaksi
- Toggle `ID / EN` memperbarui navigasi, hero, daftar isi, dan footer secara langsung.
- Tombol **Unduh CSV** mengekspor data tahunan capaian sabuk bakau pantura `2022–2026`.

---

## 10. Gamifikasi
- **Status**: `Tidak Berlaku` — Situs kementerian dan publikasi kebijakan tidak memakai unsur gamifikasi.

---

## 11. Sistem Visual, Ilustrasi, Arahan Foto & Visualisasi Data

### A. Arahan Foto (*Photo Direction*) — Bintang Utama Arah Ini
- **FOTO-01 (Hero `16:10`)**:
  - **Subjek & Momen**: Juru ukur tata ruang bersama dua perwakilan kelompok tani mangrove berdiri di pematang tambak Desa Timbulsloko menandai patok bambu batas lindung di pagi hari.
  - **Framing**: *Environmental wide shot* rasio `16:10`, subjek di sepertiga kanan membuka pandangan ke garis pantai berkabut ringan di kiri.
  - **Cahaya & Warna**: Pukul `06.45–07.30 WIB`, cahaya matahari miring hangat tanpa flash buatan; selaras warna alam netral `--bg-warm`.
  - **Dilarang**: Foto barisan pejabat menatap kamera sambil mengacungkan jempol atau pita gunting peresmian.
- **FOTO-02 (Rilis & Profil Lapangan `4:3`)**:
  - **Subjek & Momen**: Tim verifikasi pemetaan membahas cetakan peta garis pantai di ruang kerja lapangan terbuka dengan pena ukur dan buku catatan.
  - **Framing**: Rasio `4:3`, sudut pandang sejajar bahu (*over-the-shoulder* ringan) agar pembaca merasa ikut melihat peta kerja.

### B. Sistem Ilustrasi Vektor Pendukung Placeholder Foto
- Saat foto asli klien belum ditempel, placeholder `[data-photo-direction="true"]` memakai gambar vektor dokumenter (kontur pantai, patok ukur, siluet kerja lapangan dengan `stroke-width: 1.75`) plus label rasio dan keterangan arahan foto — zero kotak abu kosong.

### C. Sistem Visualisasi Data & Aksesibilitas
- **Grafik Garis + Area (`#coastal-chart-svg`)**: Membandingkan `Realisasi Sabuk Bakau (km)` (garis biru Prusia solid + titik bulat terisi) terhadap `Target RPJMN (km)` (garis oker putus-putus `stroke-dasharray="6 4"` + marker kotak) tahun `2022–2026`, dilengkapi anotasi terpasang pada tahun perubahan regulasi `2024`, label langsung di tiap titik (`14px`, `tabular-nums lining-nums`), toggle `Grafik / Tabel HTML`, dan unduh CSV.

### D. Ikonografi
- Ikon navigasi/layanan cepat berukuran `20x20px`, `stroke-width="1.75"`, `aria-hidden="true"`.

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: Jurnalistik kebijakan, lugas, hormat pada fakta lapangan, tanpa klise pujian diri.
- **Contoh Benar vs Salah**:
  - *Benar*: `"Sepanjang 2022–2026, 412 km garis pesisir utara Jawa telah dipetakan bersama pemerintah desa."`
  - *Salah*: `"Kami bangga menghadirkan terobosan ekosistem pesisir terdepan dan revolusioner!"`

---

## 13. Aksesibilitas Khusus
- Seluruh navigasi megamenu dapat dioperasikan keyboard & `Escape`, `Source Serif 4` italic tetap `>= 6,27:1` di atas gading, alternatif `<table>` tersedia setara grafik, zero `aria-label` bentrok teks terlihat.

---

## 14. Anggaran Performa
- Total font WOFF2 self-hosted: `Source Serif 4` normal (`50,9 KB`) + `Source Serif 4` italic (`51,6 KB`) + `IBM Plex Sans` 400/500/700 (`69,6 KB`) = `~172,1 KB` (bila menghemat bobot awal di proyek produksi, `JetBrains Mono` di-fallback atau dimuat selektif, total halaman tetap jauh di bawah batas `350 KB`), target `LCP <= 1,5 s`, `CLS = 0`.

---

## 15. Signature Moment
- **Deskripsi Konkret**: Naskah kebijakan editorial berlapis dengan *Sticky Table of Contents* penyorot bab otomatis, kutipan dokumenter miring `Source Serif 4`, kronologi regulasi `2022–2026`, dan grafik garis/area capaian pesisir berlabel langsung.
- **Fallback Reduced Motion**: Semua highlight TOC, pembukaan megamenu, dan transisi kontrol jatuh ke tampilan instan (`0.01ms`).

---

## 16. Cek Anti-Template
1. Placeholder foto dokumenter `16:10` dan `4:3` lengkap dengan arahan lapangan spesifik waktu, cahaya, dan komposisi (bukan gambar hiasan acak).
2. Kolom naskah kebijakan dengan `sticky` TOC aktif saat scroll + *pull quote* + kronologi + grafik capaian bersumber CSV.
3. Megamenu kementerian + filter rilis + bahasa `ID / EN` + form PPID terintegrasi dalam satu alur berwibawa.

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  --bg-canvas: #FAF8F4;
  --bg-warm: #EFECE3;
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFFFFF;
  --text-primary: #141C24;
  --text-secondary: #374350;
  --text-muted: #4D5A68;
  --border-subtle: #D4CFC3;
  --border-strong: #4D5A68;
  --accent-primary: #1B3B6F;
  --accent-primary-hover: #132B52;
  --accent-on-primary: #FFFFFF;
  --accent-secondary: #8F4A12;
  --accent-data-1: #1B3B6F;
  --accent-data-2: #8F4A12;
  --accent-data-3: #18634B;
  --focus-ring: #B45309;
  --status-info-bg: #EFF6FF;
  --status-info-fg: #1E3A5F;
  --status-success-bg: #ECFDF5;
  --status-success-fg: #14532D;
  --status-warning-bg: #FFF7ED;
  --status-warning-fg: #7C2D12;
  --status-danger-bg: #FFF1F2;
  --status-danger-fg: #881337;

  --font-display: 'Source Serif 4', 'Source Serif Fallback', Georgia, serif;
  --font-sans: 'IBM Plex Sans', 'IBM Plex Fallback', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

  --radius-control: 4px;
  --radius-container: 8px;
  --duration-fast: 150ms;
  --duration-normal: 240ms;
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
}

[data-theme="dark"] {
  --bg-canvas: #0F141A;
  --bg-warm: #171F28;
  --bg-surface: #131A22;
  --bg-elevated: #18212B;
  --text-primary: #F3F5F7;
  --text-secondary: #C7D0DA;
  --text-muted: #9AA7B6;
  --border-subtle: #26313E;
  --border-strong: #8796A8;
  --accent-primary: #8AB4F8;
  --accent-primary-hover: #AECBFA;
  --accent-on-primary: #0B1829;
  --accent-secondary: #F0B27A;
  --accent-data-1: #8AB4F8;
  --accent-data-2: #F0B27A;
  --accent-data-3: #6EE7B7;
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
        display: ['Source Serif 4', 'Source Serif Fallback', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', 'IBM Plex Fallback', 'system-ui', 'sans-serif'],
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
- [x] Seluruh kontras teks (`12px–14px` ikut terukur), serif miring, aksen oker, dan warna data memenuhi WCAG 2.2 AA.
- [x] Lulus audit dua arah `slop-audit.js` (`passedAll: true` dan `richnessPassedAll: true`).
- [x] Lulus Uji Kaku Bagian 1 dengan bukti nyata.
- [x] Font `WOFF2` termuat lokal tanpa CDN eksternal dan data memakai `tabular-nums lining-nums`.
- [x] Megamenu, TOC sticky, toggle tabel/bahasa/gelap, dan formulir PPID lulus keyboard (`Tab`, `Enter`, `Esc`) + `prefers-reduced-motion`.
- [x] Nol horizontal overflow di `375px` & `1280px` dan nol console error.

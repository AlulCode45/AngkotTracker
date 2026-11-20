# DESIGN.md — Immersive Storyworld (`creative/immersive-storyworld`)

- **Arketipe Sumber**: `creative/immersive-storyworld`
- **Jalur**: Kreatif
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 3 | Variance: 9 | Motion: 9`
- **Tingkat Kerumitan**: `Full (Default Pameran / Peluncuran)` dan `Lite (Fallback Statis SVG / Perangkat Lemah)`

---

## 1. Identitas, Niat & Big Idea
- **Identitas & Niat**: Arketipe penceritaan berjenjang untuk ekspedisi konservasi, pameran museum, destinasi wisata alam, dan peluncuran produk unggulan. Dalam tiga detik pertama, pengunjung dibawa masuk ke suasana laut dalam Kepulauan Banda Neira (kanvas gelap biru-palung `#07161B` beraksen emas senja `#F59E0B` dan pendar karang `#5EEAD4`), memandu mereka dari permukaan air menuju terumbu karang hingga arsip palung rempah secara bertahap dan terukur.
- **Big Idea**: Mengubah situs destinasi dan ekspedisi konservasi menjadi perjalanan menyelam berlapis kedalaman yang memadukan peta batimetri interaktif, kanvas partikel terkendali, dan perpindahan antarbab sinematik dengan degradasi statis yang setara.

---

## 2. Prinsip Desain
1. **Kedalaman Atmosfer Tanpa Menutupi Teks**:
   - *Terapkan*: Berikan kanvas partikel hanya di panggung diorama berbingkai jelas di belakang kontur SVG gunung api dan batimetri; judul dan paragraf duduk pada bidang gelap dengan kontras `>= 12:1`.
   - *Hindari*: Menumpuk teks putih tipis langsung di atas animasi video atau partikel bergerak padat.
2. **Satu Bab Observatorium Kontras untuk Penguatan Riset**:
   - *Terapkan*: Gunakan latar palung `#07161B` di seluruh halaman, lalu sisipkan tepat satu bab **Observatorium Spesies & Sejarah** (`#0D252E`) agar pembacaan data biota terasa berpindah ruang riset.
   - *Hindari*: Mengganti warna latar setiap seksi tanpa struktur bab naratif.
3. **Degradasi Anggun yang Tidak Menghukum Perangkat Lemah**:
   - *Terapkan*: Lapisan ilustrasi SVG batimetri selalu tampil lengkap dari CSS/HTML sejak awal (`0ms`), sedangkan kanvas 2D/WebGL otomatis berhenti saat `prefers-reduced-motion: reduce`, `hardwareConcurrency <= 4`, `saveData: true`, di luar viewport, atau tab disembunyikan.
   - *Hindari*: Mengunci layar pada preloader berputar atau kanvas kosong sebelum JS berat selesai dimuat.
4. **Audio Opsional yang Senyap Secara Default**:
   - *Terapkan*: Sediakan tombol **Audio: Nonaktif** (`aria-pressed="false"`) yang baru menginisialisasi sintesis audio alam apabila pengguna secara sadar menekannya.
   - *Hindari*: Memutar audio latar otomatis saat halaman terbuka.
5. **Satu Tindakan Utama per Layar & Zero Kotak Bersarang**:
   - *Terapkan*: Pisahkan tombol terisi primer antara Hero dan Formulir Reservasi; tampilkan tabel fakta, tab kedalaman, dan katalog spesies menggunakan garis struktur `1px`.
   - *Hindari*: Membungkus setiap spesies atau bab cerita dalam kartu berbayang yang identik.

---

## 3. Token Warna & Pasangan Kontras Terukur

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai Utama (*Abyss Default*) | Mode Alternatif (*Peta Siang*) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Abyss Trench / Parchment Chart | `#07161B` | `#F5F2EA` | Latar kanvas utama ekspedisi |
| `--bg-chapter` | Observatory Lagoon / Sand Dune | `#0D252E` | `#EAE5D9` | Bab tunggal Observatorium Spesies & Sejarah |
| `--bg-surface` | Bathymetry Plate / Paper White | `#0E242B` | `#FFFFFF` | Latar diorama, form, drawer dev |
| `--text-primary` | Coral Limestone / Deep Marine | `#F3EFE7` | `#0B1F26` | Judul H1-H3 dan teks utama |
| `--text-secondary` | Sea Mist / Coastal Slate | `#CBDAD8` | `#29454E` | Narasi bab dan keterangan |
| `--text-muted` | Sonar Silver / Harbor Gray | `#92B2B5` | `#3E5E68` | Koordinat, kedalaman `-18 m`, metadata |
| `--border-subtle` | Kelp Line / Sand Border | `#1D3F4A` | `#C7CFD1` | Garis pembatas horizontal `1px` |
| `--border-strong` | Horizon Teal / Ocean Ink | `#7AA2A6` | `#1C3D47` | Bingkai diorama, input, tombol outline |
| `--accent-primary` | Lantern Amber / Spice Terracotta | `#F59E0B` | `#9A3412` | Aksi utama CTA & indikator aktif |
| `--accent-on-primary` | Abyss Ink / Crisp White | `#07161B` | `#FFFFFF` | Teks di atas `--accent-primary` |
| `--accent-secondary` | Biolume Cyan / Pelagic Teal | `#5EEAD4` | `#0F5C6E` | Aksen kontur aktif & status jeda |
| `--focus-ring` | Biolume Cyan / Pelagic Teal | `#5EEAD4` | `#0F5C6E` | Cincin `:focus-visible` tegas |
| `--status-success-bg` / `--status-success-fg` | Sukses | `#123322` / `#BBF7D0` | `#DCFCE7` / `#14532D` | Konfirmasi reservasi slot |
| `--status-danger-bg` / `--status-danger-fg` | Bahaya / Error | `#451212` / `#FECACA` | `#FEE2E2` / `#991B1B` | Error Summary Box & pesan validasi |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` / `Background`) | Abyss Default | Peta Siang | Target WCAG | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--text-primary` / `--bg-canvas` | **`16,07:1`** | **`15,16:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` / `--bg-canvas` | **`12,78:1`** | **`9,13:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` / `--bg-canvas` | **`8,12:1`** | **`6,25:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--text-primary` / `--bg-chapter` | **`13,86:1`** | — | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--accent-on-primary` / `--accent-primary` | **`8,58:1`** | **`7,31:1`** | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `--accent-primary` / `--bg-canvas` | **`8,58:1`** | **`6,53:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--focus-ring` / `--bg-canvas` | **`12,46:1`** | **`6,76:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AAA)` |
| `--border-strong` / `--bg-canvas` | **`6,62:1`** | **`9,13:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AA)` |
| `--status-danger-fg` / `--status-danger-bg` | **`10,77:1`** | **`6,80:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |

---

## 4. Tipografi

### A. Keluarga Font & Lisensi
| Peran | Token | Keluarga Font | Lisensi & Sumber | Fallback Stack |
| :--- | :--- | :--- | :--- | :--- |
| Display Naratif | `--font-display` | `'Fraunces'` | SIL OFL-1.1 (`fonts.google.com`, `500`, `700`, italic `500`) | `'Fraunces Fallback', Georgia, serif` |
| Body, Navigasi & Form | `--font-sans` | `'Manrope'` | SIL OFL-1.1 (`fonts.google.com`, `400`, `500`, `700`) | `'Manrope Fallback', system-ui, sans-serif` |
| Koordinat & Kedalaman | `--font-mono` | System Monospace | Native OS Stack | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

**Aturan Bobot & Angka**: Maksimum **3 bobot huruf** (`400`, `500`, `700`). Angka suhu air, jarak pandang bawah laut, dan tanggal memakai `--font-sans` dengan `font-variant-numeric: tabular-nums`; koordinat maritim (`4°31'S 129°53'E`) dan kedalaman zona (`0 m`, `-18 m`, `-45 m`) memakai `--font-mono`.

### B. Skala Responsif, Line-Height & Tracking
| Token | Ukuran (Mobile -> Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(2.5rem, 6.2vw, 4.75rem)` | `1.02` | `-0.025em` | `700` | Judul utama pembuka ekspedisi |
| `--text-h2` | `clamp(1.75rem, 3.6vw, 2.75rem)` | `1.12` | `-0.02em` | `700` | Judul seksi & tajuk bab kedalaman |
| `--text-h3` | `1.1875rem` (`19px`) | `1.3` | `-0.01em` | `700` | Nama spesies & catatan sejarah |
| `--text-body-lg` | `1.0625rem` (`17px`) | `1.65` | `0` | `400` | Narasi utama ekspedisi (`max-width: 60ch`) |
| `--text-body` | `1rem` (`16px`) | `1.6` | `0` | `400` | Deskripsi zona & input form (`>= 16px` mobile) |
| `--text-sm` | `0.875rem` (`14px`) | `1.45` | `0` | `500` | Tab kedalaman, tombol kontrol, helper text |

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `--space-2: 8px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`.
- **Grid & Container**: `--container-max: 1180px`, hero berpusat naratif + diorama lebar penuh di bawah atau berdampingan, bab 2 kolom asimetris `1fr 1.1fr`.
- **Radius (`<= 3` nilai)**: `--radius-control: 4px`, `--radius-plate: 12px`, `--radius-pill: 999px`.
- **Elevasi**: `--shadow-none: none`, `--shadow-focus: 0 0 0 3px var(--focus-ring)`.

---

## 5.5 Slop Budget & Aturan Badge
| Metrik per Tampilan | Batas Arketipe Ini | Catatan / Alasan |
| :--- | :--- | :--- |
| Badge/pil dekoratif | **`0`** | Koordinat geografis `4°31'S` memakai teks monospace polos, bukan pil berkotak. |
| Badge status informatif | Hanya yang berubah | Indikator kedalaman aktif `#depth-readout` (`0 m` / `-18 m` / `-45 m`) bertanda `data-status-badge="true"`. |
| Tombol terisi (primer) | Maks **`1`** per layar 900px | `#hero-cta` berada di Hero dan `#expedition-submit` di akhir halaman (`> 2.200px` berjarak). |
| Tombol outline | Maks **`4`** seluruh halaman | Khusus `#audio-toggle`, `#theme-toggle`, dan `#canvas-toggle` (`3 <= 4`). |
| Border-radius unik | Maks **`3`** | `4px`, `12px`, `999px`. |
| Ketebalan border unik | Maks **`2`** | `1px` pembatas & `2px` batas interaktif. |
| Bobot huruf unik | Maks **`3`** | `400`, `500`, `700`. |
| Wadah bersarang | **`0`** | Diorama merender `<svg>` + `<canvas>` langsung tanpa kotak berborder berlapis di dalamnya. |
| Bayangan elemen statis | **`0`** | Kedalaman visual dibangun lewat nilai palet gelap berlapis dan kontras cahaya, bukan shadow box. |
| Latar seksi berselang-seling | Maks **`2`** | Transisi masuk dan keluar tepat 1 bab Observatorium (`#0D252E`) di atas `--bg-canvas`. |

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
1. **Kontrol Header (`#audio-toggle` & `#theme-toggle`)**: Tinggi `>= 44px`, `:focus-visible` `3px solid var(--focus-ring)`. Audio selalu berawal `aria-pressed="false"`.
2. **Diorama Batimetri + Kanvas Terkendali (`#diorama-stage` + `#depth-canvas` + `#canvas-toggle`)**: Ukuran tetap `aspect-ratio: 16 / 6` agar `CLS = 0`. `#canvas-toggle` menghentikan animasi `requestAnimationFrame` secara seketika untuk pengguna sensitif gerak.
3. **Navigasi Bab Kedalaman (`.chapter-tab`)**: Tab bergaris bawah dengan `role="tablist"` & `aria-selected`; memicu `document.startViewTransition()` dengan guard aman.
4. **Formulir Reservasi Slot Ekspedisi 1 Kolom**: Validasi inline, `aria-invalid`, `aria-describedby`, dan `#form-error-summary` (`role="alert"`).

---

## 7. Pola Layout Halaman
- **Hero + Diorama Ekspedisi**: Teks naratif dan CTA di bagian atas, disusul langsung panggung diorama batimetri + kanvas partikel + tombol jeda.
- **Narasi Tiga Bab Kedalaman**: Daftar tab kedalaman di atas, panel dua kolom (indeks kedalaman + tabel suhu/visibilitas + deskripsi + diagram lapis kontur SVG).
- **Observatorium Spesies & Sejarah**: Satu bab kontras `#0D252E` berisi tabel 4 catatan lapangan berpembatas `1px`.
- **Formulir Jadwal Ekspedisi**: Formulir 1 kolom bersih di akhir halaman.

---

## 8. Sistem Motion & Pengendalian Canvas/WebGL
- Merujuk `_shared/motion-system.md` & `_shared/performance-budget.md`:
  - **DPR Terkendali**: `Math.min(window.devicePixelRatio || 1, 2)`.
  - **Auto-Pause Wajib**: Berhenti total via `IntersectionObserver` saat `#diorama-stage` keluar layar, via `visibilitychange` saat `document.hidden === true`, atau via tombol `#canvas-toggle`.
  - **Jalur Upgrade Produksi Full**: `three@0.187.0` (MIT) + `gsap@3.15.1` + `lenis@1.3.27` (MIT), wajib lazy-import setelah FCP (`preview.html` memakai Kanvas 2D ringan `< 3 KB` JS).

| Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` & Perangkat Lemah |
| :--- | :--- | :--- | :--- | :--- |
| Load & viewport aktif | `#depth-canvas` (partikel arus laut) | `requestAnimationFrame` terkendali (`<= 60fps`, 28 partikel) | Memberi rasa kedalaman perairan Banda | Tidak dijalankan (`0` loop rAF); diorama SVG batimetri tetap tampil utuh |
| Klik bab kedalaman | `#depth-stage` | `260ms`, `View Transitions API` (`--ease-out-quart`) | Memperjelas transisi menyelam `0 m -> -18 m -> -45 m` | Pergantian isi bab seketika |
| Klik `#audio-toggle` | Sintesis gelombang Web Audio | Nonaktif default (`0 dB`), muncul perlahan `250ms` saat diaktifkan | Atmosfer suara laut opsional | Tidak aktif kecuali diklik langsung oleh pengguna |

---

## 9. Interaksi & Mikro-Interaksi
1. **Perjalanan Tiga Kedalaman (`0 m`, `-18 m`, `-45 m`)**: Mengklik bab memutakhirkan indikator `#depth-readout`, kedalaman, suhu rata-rata, visibilitas, deskripsi ilmiah, dan garis posisi penyelam di dalam diagram SVG batimetri.
2. **Jeda Partikel Eksplisit (`#canvas-toggle`)**: Memungkinkan setiap pengunjung menghentikan gerak kanvas dan mengubah `data-canvas-paused="true"`.
3. **Kontrol Audio Web Audio (`#audio-toggle`)**: Tersedia dalam posisi senyap secara default; mengetuknya menghidupkan lalu mematikan suara arus bawah air sintetis bervolume rendah tanpa memuat MP3 eksternal.
4. **Pergantian Mode Peta Siang (`#theme-toggle`)**: Mengubah palet gelap palung ke palet terang peta laut (*Daylight Chart*) dengan kontras `>= 6,25:1`.

---

## 10. Gamifikasi
- **Status**: **Tidak Berlaku**
- **Alasan**: Pengunjung pameran imersif, konservasi maritim, dan destinasi sejarah membutuhkan rasa tenang dan alur cerita yang kohesif dari permukaan ke palung. Poin atau lencana bertingkat akan mengalihkan perhatian dari kedalaman riset dan pengalaman spasial halaman.

---

## 11. Imagery, Ilustrasi & Ikonografi
- **Peta Batimetri & Gunung Api Banda (SVG)**: Garis kontur topografi dan profil lereng bawah laut digambar langsung dengan SVG (`stroke-width: 1.5`), bebas elemen `<text>` tertanam di dalam `<svg>` agar pembacaan kontras dan aksesibilitas selalu jernih.
- **Media Klien Produksi**: Video dokumenter/foto bawah air wajib dikompresi (`AVIF`/`WebP`, `< 500 KB` above-the-fold), berdimensi eksplisit, dan disertai poster statis berkecepatan tinggi.

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: Kontemplatif, faktual kelautan, memakai istilah navigasi & ekologi yang akurat dalam Bahasa Indonesia tanpa bahasa brosur klise.
- **Contoh Benar vs Salah**:
  - *Benar*: `"Pada kedalaman 18 meter di sisi barat Pulau Hatta, terumbu karang meja masih menahan arus Banda dengan suhu stabil 27,8°C."`
  - *Salah*: `"✨ Rasakan Petualangan Ajaib Bawah Laut yang Tak Terlupakan dan Revolusioner!"`
- **Data Contoh Pratinjau**: Ekspedisi fiktif **Lautan Banda: Arsip Karang & Rempah** (Koordinat Kepulauan Banda, Maluku; catatan suhu & jadwal keberangkatan contoh).

---

## 13. Aksesibilitas Khusus Arketipe Ini
- Diorama menggabungkan `<svg role="img" aria-label="...">` dan blok data HTML semantik di bab kedalaman sehingga pengguna pembaca layar memperoleh seluruh fakta geografis yang sama.
- Audio nonaktif default (WCAG 1.4.2) dan partikel kanvas berhenti melalui tombol `#canvas-toggle` maupun `prefers-reduced-motion` (WCAG 2.2.2 / 2.3.3).

---

## 14. Anggaran Performa & Perbedaan Mode `Lite` vs `Full`
- **Mode `Full`**: `LCP <= 2,5s`, `INP <= 200ms`, `CLS <= 0,05` (target `0`), JS awal `<= 220 KB`, Font `<= 160 KB`.
- **Mode `Lite` (Perangkat Lemah / `saveData` / Panel Dev)**: `LCP <= 1,8s`, `CLS <= 0,05`. Mematikan kanvas partikel 2D/3D dan `startViewTransition` serta mempertahankan seluruh diagram SVG batimetri, navigasi bab, dan formulir tanpa hambatan.

---

## 15. Signature Moment
- **Deskripsi Konkret**: Pengunjung membuka diorama batimetri Kepulauan Banda bertingkat kedalaman dengan partikel plankton halus di kanvas terkendali, lalu menavigasi **Tiga Bab Kedalaman (`0 m`, `-18 m`, `-45 m`)** yang memindahkan penanda profil selam dan data laut melalui View Transitions API.
- **Langkah Implementasi Teknis**:
  1. SVG batimetri tetap sebagai lapisan dasar; `<canvas id="depth-canvas">` digambar di atasnya hanya saat semua guard performa & gerak aman.
  2. Tab bab memicu pembaruan penanda SVG & statistik kelautan lewat `document.startViewTransition()`.
- **Biaya Performa & Fallback**: Kanvas 2D pratinjau `< 2 KB` JS, dihentikan otomatis saat offscreen/hidden/`reduced-motion`/`hardwareConcurrency <= 4`.

---

## 16. Cek Anti-Template & Rubrik Awwwards

### A. Tiga Hal yang Mustahil Ada di Template Umum
1. **Diorama Batimetri Dual-Layer (SVG + Canvas Terkendali)**: Tetap bercerita dan informatif bahkan ketika JS partikel dihentikan atau koneksi lambat mengaktifkan mode `Lite`.
2. **Audio Alam Beretika Tanpa Pemutar Otomatis**: Tombol audio eksplisit di header yang default-nya mati, alih-alih auto-play intrusif.
3. **Struktur Tiga Kedalaman + Satu Bab Observatorium**: Ritme penceritaan berbasis kedalaman maritim menggantikan urutan blok SaaS generik.

### B. Pemetaan Rubrik Awwwards
| Kriteria (Bobot) | Bagaimana Arketipe Ini Memenuhinya | Ketergantungan pada Aset Nyata Klien |
| :--- | :--- | :--- |
| **Design (40%)** | Palet palung biru-gelap beraksen amber & bioluminisens karang, *Fraunces* ekspresif dengan *Manrope*, diorama batimetri berkarakter geografis nyata. | Fotografi/rekaman video bawah laut asli dari tim lapangan klien dan ilustrasi pemetaan asli. |
| **Usability (30%)** | Kontrol jeda partikel & audio terang-terangan, kontras bacaan `> 12:1`, formulir reservasi 1 kolom yang mudah diselesaikan. | Kalender ketersediaan ekspedisi, logistik penyeberangan, dan prosedur keselamatan nyata. |
| **Creativity (20%)** | Perpindahan bab bertingkat kedalaman laut (`0 m -> -18 m -> -45 m`) yang memadukan kontur peta dan partikel kanvas berlisensi ringan. | Data riset spesies, catatan sejarah lokal terverifikasi, dan rekaman suara hydrophone asli. |
| **Content (10%)** | Bahasa Indonesia maritim yang spesifik, angka teknis akurat berformat `tabular-nums`. | Verifikasi fakta ilmiah bersama ahli biologi laut/kurator klien. |
| **Developer** | `IntersectionObserver` + `visibilitychange` loop guard, `dpr <= 2`, `CLS = 0`, WCAG 2.2 AA tanpa komponen bergantung foto berat sebelum FCP. | Kompresi stream video/foto produksi dan CDN regional. |

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  --bg-canvas: #07161B;
  --bg-chapter: #0D252E;
  --bg-surface: #0E242B;
  --text-primary: #F3EFE7;
  --text-secondary: #CBDAD8;
  --text-muted: #92B2B5;
  --border-subtle: #1D3F4A;
  --border-strong: #7AA2A6;
  --accent-primary: #F59E0B;
  --accent-on-primary: #07161B;
  --accent-secondary: #5EEAD4;
  --focus-ring: #5EEAD4;
  --status-success-bg: #123322;
  --status-success-fg: #BBF7D0;
  --status-danger-bg: #451212;
  --status-danger-fg: #FECACA;

  --font-display: 'Fraunces', Georgia, serif;
  --font-sans: 'Manrope', system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --radius-control: 4px;
  --radius-plate: 12px;
  --radius-pill: 999px;
}
```

### B. Konfigurasi Tailwind (`tailwind.config.js`)
```javascript
export default {
  theme: {
    extend: {
      colors: {
        abyss: 'var(--bg-canvas)',
        lagoon: 'var(--bg-chapter)',
        chalk: 'var(--text-primary)',
        amberlamp: 'var(--accent-primary)',
        biolume: 'var(--accent-secondary)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
};
```

---

## 18. Checklist QA Sebelum Rilis
- [x] Seluruh pasangan warna lulus WCAG 2.2 AA & `axe-core` (`31 passes, 0 violations, 0 incomplete`) pada 4 state (`light-normal` default Abyss, `dark-mode`/Peta Siang, `form-error`, `dev-drawer-open`).
- [x] Lulus `slop-audit.js` 100% sesuai Slop Budget Bagian 5.5 (`decorativeBadges: 0`, `statusBadges: 1`, `maxFilledPerScreen: 1`, `outlineFullPage: 3`, `uniqueBorderRadii: 3`, `uniqueBorderWidths: 2`, `uniqueFontWeights: 3`, `maxNestedContainers: 0`, `staticShadows: 0`, `alternatingSectionBgs: 2`).
- [x] Uji keyboard `10x Tab` (`tabAllHaveVisibleOutline: true`, `tabAnyInClosedDrawer: false`) & `prefers-reduced-motion: reduce` (`matches: true`, `btnDuration: "1e-05s"`) terverifikasi.
- [x] Interaksi kunci terverifikasi nyata: perpindahan bab `0 m` -> `-18 m` (`Zona Permukaan...` -> `Zona -18 Meter...`), kontrol jeda kanvas (`aria-pressed="true"`, `data-canvas-paused="true"`), dan `#audio-toggle` senyap default lalu toggle aman tanpa console error; catatan: uji otomatis `IntersectionObserver` offscreen tidak disimulasikan terpisah dalam skrip.
- [x] Lighthouse nyata memenuhi anggaran performa Mode Full: Mobile `99/100/100/100` (`LCP 1.6 s`, `FCP 1.6 s`, `CLS 0`, `TBT 0 ms`, `159 KiB`); Desktop `100/100/100/100` (`LCP 0.5 s`, `FCP 0.5 s`, `CLS 0.004`, `TBT 0 ms`, `159 KiB`).
- [x] Screenshot `375px` & `1280px` (Abyss & Peta Siang) diperiksa visual tanpa overflow (`scrollWidth === innerWidth`) atau console error (`0`).

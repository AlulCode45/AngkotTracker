# DESIGN.md — Neo Brutalist Pop (`creative/neo-brutalist-pop`)

- **Arketipe Sumber**: `creative/neo-brutalist-pop`
- **Jalur**: Kreatif
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 6 | Variance: 9 | Motion: 7`
- **Tingkat Kerumitan**: `Lite (Default Toko Drop)` dan `Full (Kampanye Rilis)`

---

## 1. Identitas, Niat & Big Idea
- **Identitas & Niat**: Antarmuka mentah namun terstruktur ketat untuk merek fashion independen, streetwear lokal, penerbit zine risograph, acara musik muda, dan studio kreator Gen Z. Mengambil disiplin cetak sablon kasar (sudut `0px`, bingkai hitam pekat `3px`, bayangan blok cetak `6px 6px 0`, serta tabrakan terkontrol antara kuning-limau asam `#D4FF33`, biru kobalt `#1D4ED8`, dan magenta `#BE185D`) dengan kontras tinggi agar mudah dipindai seketika.
- **Big Idea**: Mengubah rilis terbatas koleksi streetwear dan zine independen menjadi papan katalog cetak kasar berbingkai hitam 3px dengan penukar warna kain langsung, kalkulator bundel deterministik, dan ticker edisi terkendali.

---

## 2. Prinsip Desain
1. **Mentah pada Tepi, Disiplin pada Grid**:
   - *Terapkan*: Terapkan `border-radius: 0` di seluruh antarmuka, ketebalan garis tegas hanya pada `2px` dan `3px`, dan grid katalog berkolom rapi.
   - *Hindari*: Sudut tumpul serba `16px` yang melembekkan karakter cetak, atau tumpukan kartu miring acak yang tidak terbaca di layar `375px`.
2. **Bayangan Blok Cetak Terbatas (`<= 5` Elemen)**:
   - *Terapkan*: Gunakan *hard offset shadow* (`6px 6px 0 #0A0A0A`) hanya pada panel aksi utama (stiker edisi, plat pratinjau jaket, ringkasan bundel, panel tantangan, form antrean) sehingga hierarki halaman tetap terukur.
   - *Hindari*: Memberi offset shadow ke setiap baris daftar produk atau teks navigasi.
3. **Tabrakan Warna Terkendali dengan Kontras Teruji**:
   - *Terapkan*: Pertahankan kertas kapur `#F7F7F2` sebagai dasar bacaan dengan tinta `#0A0A0A` (`18,42:1`), sisipkan tepat satu pita ticker kuning-limau `#D4FF33` bertinta hitam (`17,11:1`), dan biru kobalt `#1D4ED8` khusus tombol primer (`6,70:1`).
   - *Hindari*: Menaruh teks putih atau warna kuning terang di atas warna limau asam maupun memakai neon kabur.
4. **Tekan Mekanis Tanpa Pantulan Lembek**:
   - *Terapkan*: Gunakan gerak patah cepat (`steps` atau `75ms` transisi tekan fisik `translate(3px, 3px)`) yang terasa seperti tombol stempel mekanik atau mesin tik.
   - *Hindari*: Efek melayang lembut atau *floating glassmorphism*.
5. **Katalog & Bundel Transparan Tanpa Keluhan Pengguna**:
   - *Terapkan*: Hitung diskon bundel secara deterministik (`>= 2 item -> hemat 10%`) seketika di layar dan sertakan tombol jeda pada pita ticker serta tombol lewati pada mini-challenge.
   - *Hindari*: Timer rilis palsu atau gacha undian kode diskon.

---

## 3. Token Warna & Pasangan Kontras Terukur

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai Utama (*Raw Print*) | Mode Alternatif (*Zine Gelap*) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Chalk Newsprint / Carbon Ink | `#F7F7F2` | `#0A0A0A` | Latar kanvas utama |
| `--bg-surface` | Pure Sheet / Zine Matte | `#FFFFFF` | `#171717` | Plat pratinjau, ringkasan bundel, input |
| `--bg-acid` | Acid Lime Ink | `#D4FF33` | `#D4FF33` | Pita bab tunggal ticker & stiker edisi |
| `--text-primary` | Carbon Ink / Chalk Print | `#0A0A0A` | `#F7F7F2` | Judul brutalist, harga, teks utama |
| `--text-secondary` | Charcoal Slate / Light Ash | `#262626` | `#D4D4D4` | Deskripsi produk & pengantar |
| `--text-muted` | Print Press Gray / Zinc Ash | `#404040` | `#A3A3A3` | Kode SKU, jumlah stok, label form |
| `--border-strong` | Heavy Press Ink / Acid Rule | `#0A0A0A` | `#D4FF33` | Bingkai `2px`/`3px` dan hard offset shadow |
| `--accent-primary` | Kobalt Raya / Acid Lime | `#1D4ED8` | `#D4FF33` | Tombol primer terisi (CTA) |
| `--accent-on-primary` | Pure White / Carbon Ink | `#FFFFFF` | `#0A0A0A` | Teks di atas `--accent-primary` |
| `--accent-pop` | Risograph Magenta / Pink Pop | `#BE185D` | `#F472B6` | Aksen warna tinta sablon & fokus |
| `--focus-ring` | Risograph Magenta / Pink Pop | `#BE185D` | `#F472B6` | Cincin `:focus-visible` tegas `3px` |
| `--status-success-bg` / `--status-success-fg` | Sukses | `#DCFCE7` / `#14532D` | `#143322` / `#BBF7D0` | Diskon bundel aktif & konfirmasi |
| `--status-danger-bg` / `--status-danger-fg` | Bahaya / Error | `#FEE2E2` / `#991B1B` | `#451212` / `#FECACA` | Ringkasan error & validasi inline |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` / `Background`) | Raw Print | Zine Gelap | Target WCAG | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--text-primary` / `--bg-canvas` | **`18,42:1`** | **`18,42:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` / `--bg-canvas` | **`14,08:1`** | **`13,36:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` / `--bg-canvas` | **`9,65:1`** | **`7,85:1`** | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `#0A0A0A` / `--bg-acid` (`#D4FF33`) | **`17,11:1`** | **`17,11:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--accent-on-primary` / `--accent-primary` | **`6,70:1`** | **`17,11:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-primary` / `--bg-canvas` | **`6,24:1`** | **`17,11:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--focus-ring` / `--bg-canvas` | **`5,62:1`** | **`7,48:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AA)` |
| `--status-danger-fg` / `--status-danger-bg` | **`6,80:1`** | **`10,77:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |

---

## 4. Tipografi

### A. Keluarga Font & Lisensi
| Peran | Token | Keluarga Font | Lisensi & Sumber | Fallback Stack |
| :--- | :--- | :--- | :--- | :--- |
| Display Brutalist | `--font-display` | `'Syne'` | SIL OFL-1.1 (`fonts.google.com`, bobot `500`, `700`) | `'Syne Fallback', system-ui, sans-serif` |
| Katalog, UI & Form | `--font-sans` | `'Archivo'` | SIL OFL-1.1 (`fonts.google.com`, bobot `400`, `500`, `700`) | `'Archivo Fallback', system-ui, sans-serif` |
| SKU & Kode Potongan | `--font-mono` | System Monospace | Native OS Stack | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

**Aturan Bobot & Angka**: Maksimum **3 bobot huruf** (`400`, `500`, `700`). Harga dan persentase potongan bundel (`Rp380.000`, `10%`) menggunakan `--font-sans` dengan `font-variant-numeric: tabular-nums`.

### B. Skala Responsif, Line-Height & Tracking
| Token | Ukuran (Mobile -> Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(2.25rem, 5.4vw, 4.1rem)` | `0.98` | `-0.03em` | `700` | H1 Hero berenergi cetak |
| `--text-h2` | `clamp(1.6rem, 3.2vw, 2.4rem)` | `1.08` | `-0.02em` | `700` | Judul seksi |
| `--text-h3` | `1.125rem` (`18px`) | `1.25` | `-0.01em` | `700` | Judul item katalog & panel |
| `--text-body-lg` | `1.0625rem` (`17px`) | `1.55` | `0` | `400` | Paragraf pengantar hero |
| `--text-body` | `1rem` (`16px`) | `1.55` | `0` | `400` | Teks bacaan & input form (`>= 16px` mobile) |
| `--text-sm` | `0.875rem` (`14px`) | `1.4` | `0.01em` | `500` | Label warna, tab kategori, metadata |

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `--space-2: 8px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`.
- **Grid & Container**: `--container-max: 1180px`, hero 2 kolom asimetris `1.05fr 0.95fr`, katalog 2 kolom `1.3fr 0.7fr`.
- **Radius (`0px` Tajam)**: `--radius-none: 0px` di seluruh komponen tanpa pengecualian (`uniqueBorderRadii: 0 <= 1`).
- **Elevasi**: `--shadow-brutal: 6px 6px 0 var(--border-strong)` dan `--shadow-sticker: 4px 4px 0 var(--border-strong)`, maksimal `5` elemen statis.

---

## 5.5 Slop Budget & Aturan Badge
| Metrik per Tampilan | Batas Arketipe Ini | Catatan / Alasan |
| :--- | :--- | :--- |
| Badge/pil dekoratif | Maks **`2`** | Khusus 1-2 stiker sudut tajam penanda edisi rilis (`"DROP 07 // TERBATAS 50 UNIT"`). |
| Badge status informatif | Hanya yang berubah | Indikator `#bundle-status` (`0 Item` -> `2 Item · Hemat 10%`) bertanda `data-status-badge="true"`. |
| Tombol terisi (primer) | Maks **`1`** per layar 900px | `#hero-cta` berada di Hero dan `#preorder-submit` di akhir halaman (`> 2.100px` berjarak). |
| Tombol outline | Maks **`4`** seluruh halaman | Khusus `#theme-toggle`, `"Lanjut ke Antrean Pre-Order"`, `#ticker-toggle`, dan `#challenge-skip-btn` (`4 <= 4`). |
| Border-radius unik | Maks **`1`** | Sudut tajam murni `0px` pada seluruh tombol, kartu, dan input. |
| Ketebalan border unik | Maks **`2`** | Ketebalan konsisten `2px` dan `3px`. |
| Bobot huruf unik | Maks **`3`** | `400`, `500`, `700`. |
| Wadah bersarang | **`0`** | Seluruh blok katalog dan tantangan memakai struktur rata satu tingkat tanpa kotak bertumpuk. |
| Bayangan elemen statis | Maks **`5`** | *Hard offset shadow* adalah bahasa utama Neo-Brutalist dan dibatasi ketat hanya untuk `5` blok kunci (`#edition-sticker`, `#print-plate`, `#bundle-summary-panel`, `#challenge-card`, `#preorder-form`). |
| Latar seksi berselang-seling | Maks **`2`** | Transisi masuk dan keluar tepat 1 pita ticker Acid Lime (`#D4FF33`). |

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
1. **Tombol Blok Mekanis (`.btn-primary` / `.btn-outline`)**: Sudut `0px`, tinggi `>= 44px`, `:active` menekan posisi seketika seakan menjejakkan cap (`translate(3px, 3px)`), `:focus-visible` `3px solid var(--focus-ring)`.
2. **Penukar Warna Kain (`input[name="colorway"]`) & Checklist Bundel (`input[name="bundle-item"]`)**: Overlay `<input>` berposisi penuh (`appearance: none; background: transparent; z-index: 0`) di atas label teks (`z-index: 1`) sehingga mendukung tombol Panah/Spasi dan target sentuh `>= 44px`.
3. **Pita Ticker Jeda Penuh (`#ticker-toggle`)**: Berhenti pada `:hover`, `:focus-within`, `prefers-reduced-motion: reduce`, dan klik tombol `#ticker-toggle` (`aria-pressed="true"`).
4. **Formulir Pre-Order 1 Kolom**: Bingkai `3px`, label eksplisit, `aria-invalid`, `#form-error-summary` (`role="alert"`).

---

## 7. Pola Layout Halaman
- **Hero + Plat Sablon Hidup**: Judul `Syne` tajam & CTA kiri, plat pratinjau jaket & pemilih 3 kombinasi kain/tinta di kanan.
- **Katalog Drop 07 + Pembuat Bundel**: Tab filter (`Semua`, `Sandang`, `Cetak & Aksesori`), baris daftar berkotak centang bundel di kiri, ringkasan kalkulasi otomatis potongan `10%` di kanan.
- **Pita Ticker Acid Lime**: Satu pita penuh bergaris tegas `#D4FF33` berisi info jadwal cetak ulang dengan tombol jeda.
- **Tantangan Sablon Cepat & Antrean Pre-Order**: Mini-challenge 1 soal di atas formulir pre-order 1 kolom.

---

## 8. Sistem Motion & Koreografi
- Merujuk `_shared/motion-system.md` (`--duration-instant: 75ms`, kurva mekanis tajam):

| Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` |
| :--- | :--- | :--- | :--- | :--- |
| Load halaman (Full) | Balok geser atas (`#brutal-bar`) | `360ms`, `steps(6)` (`scaleX`) | Menegaskan rasa mesin cetak | Tampil penuh seketika tanpa gerak |
| Klik tombol / hover | `.btn-primary` & `#print-plate` | `75ms`, `linear` (`translate`) | Umpan balik mekanik tegas | Perubahan posisi dimatikan |
| Ubah colorway | `#jacket-svg` | `150ms` (`fill`) | Menunjukkan kombinasi kain & tinta langsung | Warna berganti instan |
| Kontinu (Pita Lime) | `#ticker-track` | `20s linear infinite` (jeda wajib WCAG 2.2.2) | Menampilkan info rilis drop terkini | Berhenti statis dalam baris rata |

---

## 9. Interaksi & Mikro-Interaksi
1. **Penukar Colorway Langsung**: Memilih `Hitam Aspal + Lime`, `Krem Kanvas + Kobalt`, atau `Abu Beton + Magenta` langsung mengganti warna badan jaket, kerah, dan grafis sablon di SVG serta label `#plate-label`.
2. **Kalkulator Bundel Deterministik**: Memilih `>= 2` item dari katalog otomatis mengaktifkan diskon `10%` pada total Rupiah `tabular-nums` dan mengubah status `#bundle-status` (`data-status-badge="true"`).
3. **Kontrol Ticker Eksplisit (`#ticker-toggle`)**: Menghentikan atau melanjutkan gerakan marquee secara seketika (`aria-pressed`).
4. **Mini-Challenge Pengetahuan Sablon (`#tantangan`)**: Menjawab pertanyaan ketebalan tinta plastisol membuka kode bebas ongkir deterministik `KUTUB-ONGKIR10` — dilengkapi tombol `"Lewati ke Form Pre-Order"` (`Escape`).

---

## 10. Gamifikasi
- **Status**: **Berlaku Ringan (Mikro-Tantangan Keterampilan & Bundel Deterministik)** — merujuk `_shared/gamification-playbook.md` §1.7.
- **Mekanik & Etika**: Diskon bundel `10%` dihitung deterministik saat memilih `>= 2` produk tanpa syarat tersembunyi; mini-challenge satu pertanyaan berbasis pengetahuan kerajinan sablon (bukan roda putar acak/judi), tanpa memaksa surel untuk bermain, dan dapat dilewati kapan saja lewat tombol maupun `Escape`.
- **Catatan Hukum RI (`PERLU VERIFIKASI HUKUM KLIEN`)**: Sesuai `SOURCES.md`, undian berhadiah berbasis peluang acak tunduk pada UU No. 22 Tahun 1954; arketipe ini menggunakan kode potongan tetap dan deterministik.

---

## 11. Imagery, Ilustrasi & Ikonografi
- **Plat Jaket & Poster Risograph (SVG)**: Ilustrasi geometris jaket lapangan & saku sablon tanpa `<text>` dalam `<svg>`.
- **Fotografi Lookbook Produksi**: Wajib menggunakan rasio `1:1` atau `4:5` berbingkai `3px solid #0A0A0A`, tanpa sudut bulat, berformat `AVIF`/`WebP` dengan dimensi eksplisit.

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: Lugas, ringkas, bertenaga, tanpa kata klise AI ("revolusioner", "seamless"). Memakai kata sehari-hari kreator/streetwear Bandung dalam Bahasa Indonesia natural.
- **Contoh Benar vs Salah**:
  - *Benar*: `"Kaos Heavyweight 280 gsm · Katun sisir Bandung · Stok contoh tersisa 18 buah"`
  - *Salah*: `"✨ Koleksi Fashion Masa Depan yang Mengubah Gaya Hidup Anda Secara Seamless!"`
- **Data Contoh Pratinjau**: Kolektif **KUTUB RAYA // DROP 07**, Jl. Cihapit No. 19, Bandung, contoh kode `KUTUB-ONGKIR10`.

---

## 13. Aksesibilitas Khusus Arketipe Ini
- Kontras tinggi (`>= 5,62:1` pada seluruh teks, metadata, dan fokus), border tebal `2px`/`3px` memperjelas batas komponen untuk pengguna gangguan penglihatan ringan.
- Ticker Acid Lime tunduk WCAG 2.2.2 (`:hover`, `:focus-within`, `prefers-reduced-motion`, plus `#ticker-toggle`), dan pilihan bundel memakai checkbox/radio native penuh.

---

## 14. Anggaran Performa & Perbedaan Mode `Lite` vs `Full`
- **Mode `Lite` (Default Toko Drop)**: `LCP <= 1,8s`, `INP <= 150ms`, `CLS <= 0,05` (target `0`), JS awal `<= 90 KB`, CSS transisi instan tanpa bundler eksternal.
- **Mode `Full` (Kampanye Rilis)**: `LCP <= 2,5s`, `CLS <= 0,05`. Dapat menambahkan koreografi snap `gsap@3.15.1` per rilis seksi setelah FCP.

---

## 15. Signature Moment
- **Deskripsi Konkret**: Plat pratinjau sablon berbingkai `3px` di Hero yang mengubah kombinasi warna kain & tinta sablon seketika (`#print-plate`), tersambung langsung dengan **Pembuat Bundel Drop 07** berdiskon `10%` deterministik dan **Pita Ticker Acid Lime** berkendali jeda.
- **Langkah Implementasi Teknis**:
  1. Radio `colorway` memodifikasi atribut `fill` pada path SVG jaket dan teks `#plate-label`.
  2. Checkbox `bundle-item` menjumlahkan harga SKU dan menerapkan potongan `10%` saat `jumlah >= 2`.
- **Biaya Performa & Fallback**: Overhead `< 2,5 KB` JS; pada `prefers-reduced-motion` seluruh pergeseran tombol & animasi ticker dimatikan total.

---

## 16. Cek Anti-Template & Rubrik Awwwards

### A. Tiga Hal yang Mustahil Ada di Template Umum
1. **Penukar Colorway Kain/Sablon pada Plat SVG Berbingkai Kasar**: Bukan sekadar galeri foto statis, pengunjung langsung menguji pasangan warna kain dan sablon di Hero.
2. **Aturan Ketat `0px` Radius + Maksimum `5` Shadow Brutalist**: Terkontrol oleh `slop-audit.js` agar terasa brutalist tertata, bukan situs rusak atau penuh kotak bertumpuk.
3. **Kalkulator Bundel & Challenge Sablon Tanpa Gacha**: Menghadirkan ciri interaktif rilis streetwear tanpa pola gelap atau undian manipulatif.

### B. Pemetaan Rubrik Awwwards
| Kriteria (Bobot) | Bagaimana Arketipe Ini Memenuhinya | Ketergantungan pada Aset Nyata Klien |
| :--- | :--- | :--- |
| **Design (40%)** | Kontras `Syne` lebar dengan `Archivo` presisi, `0px` tajam, palet Acid Lime / Kobalt / Magenta di atas kertas kapur. | Lookbook fotografi studio berkarakter editorial/jalanan dan karya grafis asli sablon klien. |
| **Usability (30%)** | Kalkulasi bundel langsung tanpa pindah halaman, filter cepat, antrean pre-order 1 kolom, dan tombol jeda ticker. | Stok SKU real-time, ukuran P x L kain, serta integrasi checkout/ongkir. |
| **Creativity (20%)** | Interaksi plat colorway instan di hero + mini-challenge pengetahuan sablon + ritme pita neon asam. | Cerita rilisan koleksi (*drop*) dan materi zine fisik klien. |
| **Content (10%)** | Copy padat lugas berbahasa Indonesia tanpa pemanis AI, detail gramasi dan bahan kain nyata. | Spesifikasi teknis material dan cerita kolaborator rilisan klien. |
| **Developer** | Zero rounded-corner inconsistency, WCAG 2.2 AA (`>= 5,6:1`), `CLS` rendah lewat `Syne Fallback`, ticker patuh SC 2.2.2. | Optimasi lookbook `AVIF`/`WebP` dan caching aset server produksi. |

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  --bg-canvas: #F7F7F2;
  --bg-surface: #FFFFFF;
  --bg-acid: #D4FF33;
  --text-primary: #0A0A0A;
  --text-secondary: #262626;
  --text-muted: #404040;
  --border-strong: #0A0A0A;
  --accent-primary: #1D4ED8;
  --accent-on-primary: #FFFFFF;
  --accent-pop: #BE185D;
  --focus-ring: #BE185D;
  --status-success-bg: #DCFCE7;
  --status-success-fg: #14532D;
  --status-danger-bg: #FEE2E2;
  --status-danger-fg: #991B1B;

  --font-display: 'Syne', system-ui, -apple-system, sans-serif;
  --font-sans: 'Archivo', system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --radius-none: 0px;
  --shadow-brutal: 6px 6px 0 var(--border-strong);
}
```

### B. Konfigurasi Tailwind (`tailwind.config.js`)
```javascript
export default {
  theme: {
    extend: {
      colors: {
        newsprint: 'var(--bg-canvas)',
        acid: 'var(--bg-acid)',
        kobalt: 'var(--accent-primary)',
        risopink: 'var(--accent-pop)',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        none: '0px',
      },
      boxShadow: {
        brutal: '6px 6px 0 var(--border-strong)',
      },
    },
  },
};
```

---

## 18. Checklist QA Sebelum Rilis
- [x] Seluruh pasangan warna lulus WCAG 2.2 AA & `axe-core` (`30 passes, 0 violations, 0 incomplete`) pada 4 state (`light-normal`, `dark-mode`/Zine Gelap, `form-error`, `dev-drawer-open`).
- [x] Lulus `slop-audit.js` 100% sesuai Slop Budget Bagian 5.5 (`decorativeBadges: 0` <= 2, `maxFilledPerScreen: 1`, `outlineFullPage: 4`, `uniqueBorderRadii: 0` <= 1, `uniqueBorderWidths: 2`, `uniqueFontWeights: 3`, `maxNestedContainers: 0`, `staticShadows: 5`, `alternatingSectionBgs: 2`).
- [x] Uji keyboard `10x Tab` (`tabAllHaveVisibleOutline: true`, `tabAnyInClosedDrawer: false`) & `prefers-reduced-motion: reduce` (`matches: true`, `btnDuration: "1e-05s"`) terverifikasi.
- [x] Interaksi kunci terverifikasi nyata: pergantian colorway SVG (`Jaket Kerja KTR-07 · Krem Kanvas + Kobalt`), kalkulator bundel 2 item (`Rp0` -> `Rp517.500`, `2 Item · Hemat 10%`), kontrol `#ticker-toggle` (`aria-pressed="true"`, `animationPlayState: "paused"`), pembukaan kode `KUTUB-ONGKIR10`, dan tombol `#challenge-skip-btn`.
- [x] Lighthouse nyata memenuhi anggaran performa Mode Lite: Mobile `99/100/100/100` (`LCP 1.6 s`, `FCP 1.6 s`, `CLS 0.023`, `TBT 0 ms`, `147 KiB`); Desktop `100/100/100/100` (`LCP 0.5 s`, `FCP 0.5 s`, `CLS 0.001`, `TBT 0 ms`, `147 KiB`).
- [x] Screenshot `375px` & `1280px` (terang & Zine Gelap) diperiksa visual tanpa overflow (`scrollWidth === innerWidth`) atau console error (`0`).

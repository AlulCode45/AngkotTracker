# DESIGN.md — Warm Craft Nusantara (`creative/warm-craft-nusantara`)

- **Arketipe Sumber**: `creative/warm-craft-nusantara`
- **Jalur**: Kreatif
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 4 | Variance: 8 | Motion: 6`
- **Tingkat Kerumitan**: `Lite (Default UMKM Kriya / WhatsApp)` dan `Full (Pameran Kriya & Cerita Pembuat)`

---

## 1. Identitas, Niat & Big Idea
- **Identitas & Niat**: Antarmuka hangat, tenang, dan berakar budaya untuk UMKM kriya tekstil (batik tulis, tenun), keramik lokal, kopi perkebunan rakyat, kuliner warisan keluarga, serta desa wisata. Pengunjung disambut warna kertas serat alami (`#F8F3E8`), cokelat sogan kulit pohon tingi (`#7C3A1D`), dan biru nila daun tom (`#1E3A5F`), dengan atribusi budaya motif Nusantara yang jujur serta alur pemesanan langsung ke WhatsApp yang tidak berbelit.
- **Big Idea**: Menghadirkan ruang cerita pengrajin lokal yang menghormati filosofi motif Nusantara secara spesifik, memperlihatkan tahapan pembuatan karya dengan gerak organik tenang, dan menyusun format pesanan WhatsApp otomatis dari pilihan pelanggan.

---

## 2. Prinsip Desain
1. **Riset Budaya Spesifik, Bukan Tempelan Etnik Asal-asalan**:
   - *Terapkan*: Pilih tepat **satu** motif tradisional yang berkaitan langsung dengan asal daerah subjek klien, jelaskan asal-usul serta filosofinya di halaman, dan terjemahkan geometrinya secara hormat sebagai pembatas SVG tipis (`1.5px`). Pada arketipe dasar ini digunakan **Motif Batik Kawung Yogyakarta** (empat bulatan lonjong simetris penampang buah aren/*kolang-kaling* mengelilingi pusat *suwung*).
   - *Hindari*: Mencampur motif Kawung Jawa dengan ukiran Asmat, gorga Batak, dan mega mendung Cirebon sekaligus dalam satu halaman sebagai dekorasi generik.
2. **Warna Alam dari Bahan Celup Nyata**:
   - *Terapkan*: Bangun palet dari bahan pewarna alam nyata: kertas mori mentah (`#F8F3E8`), cokelat sogan tingi (`#7C3A1D`), biru nila fermentasi daun tom (`#1E3A5F`), dan arang malam (`#231914`).
   - *Hindari*: Warna neon digital atau krem-terakota kosmetik tanpa kaitan dengan material produk.
3. **Motion Organik yang Mengikuti Tangan Pengrajin**:
   - *Terapkan*: Gunakan transisi lembut (`--ease-out-quart`, `260ms`) pada pergantian tahap proses kriya dan pratinjau celupan kain, tanpa pantulan pegas hiperaktif.
   - *Hindari*: Efek *glitch*, kilatan cepat, atau *scroll-jacking*.
4. **Satu Bab Filosofi Berlatar Serat Hangat**:
   - *Terapkan*: Pertahankan latar `#F8F3E8` di seluruh halaman dan sisipkan tepat satu seksi berlatar `#EFE6D5` untuk **Filosofi & Atribusi Motif Kawung** agar cerita budaya memiliki ruang baca tersendiri.
   - *Hindari*: Zebra-striping di setiap seksi atau menumpuk kotak di dalam kotak.
5. **Jalur Pesan WhatsApp Transparan & Kartu Apresiasi Deterministik**:
   - *Terapkan*: Tampilkan pratinjau teks pesanan WhatsApp secara utuh sebelum pengguna menekan tombol kirim, dan gunakan kartu apresiasi pelanggan yang deterministik (`4 kain = 1 paket perawatan lerak alami`) tanpa undian.
   - *Hindari*: Memaksa pembuatan akun rumit sebelum pelanggan UMKM dapat bertanya atau memesan.

---

## 3. Token Warna & Pasangan Kontras Terukur

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai Utama (*Kertas Mori*) | Mode Alternatif (*Malam Sogan*) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Raw Mori Paper / Deep Malam | `#F8F3E8` | `#1C1511` | Latar kanvas utama halaman |
| `--bg-chapter` | Warm Bast Fiber / Roasted Bark | `#EFE6D5` | `#241B15` | Bab tunggal Filosofi & Atribusi Budaya |
| `--bg-surface` | Bleached Cotton / Dark Loom | `#FFFDF8` | `#261D17` | Permukaan peracik pesanan & form |
| `--text-primary` | Charcoal Malam / Warm Mori | `#231914` | `#F8F3E8` | Judul H1-H3 dan teks bacaan utama |
| `--text-secondary` | Steeped Bark / Secang Cream | `#4B3A2F` | `#DDD0BE` | Narasi proses & keterangan |
| `--text-muted` | Dry Twig / Warm Ash | `#634E40` | `#BBA992` | Kode kain, durasi tahap, petunjuk form |
| `--border-subtle` | Cotton Thread / Loom Line | `#D5C7B2` | `#46362B` | Garis pemisah horizontal `1px` |
| `--border-strong` | Aged Teak / Warm Rattan | `#5E4636` | `#C8B49B` | Tepi kontrol interaktif & bingkai SVG `2px` |
| `--accent-primary` | Sogan Tingi / Warm Terracotta | `#7C3A1D` | `#E29D6B` | Tombol utama CTA & penanda aktif |
| `--accent-on-primary` | Cotton White / Deep Malam | `#FFFDF8` | `#1C1511` | Teks di atas `--accent-primary` |
| `--accent-secondary` | Indigo Nila / Sky Indigo | `#1E3A5F` | `#93C5FD` | Aksen celupan nila & cincin fokus |
| `--focus-ring` | Indigo Nila / Honey Wax | `#1E3A5F` | `#FDE68A` | Cincin `:focus-visible` tegas `3px` |
| `--status-success-bg` / `--status-success-fg` | Sukses | `#DCFCE7` / `#14532D` | `#143322` / `#BBF7D0` | Paket lerak terbuka & pesan siap |
| `--status-danger-bg` / `--status-danger-fg` | Bahaya / Error | `#FEE2E2` / `#991B1B` | `#451212` / `#FECACA` | Error Summary Box & validasi inline |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` / `Background`) | Kertas Mori | Malam Sogan | Target WCAG | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--text-primary` / `--bg-canvas` | **`15,55:1`** | **`16,29:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` / `--bg-canvas` | **`9,75:1`** | **`11,88:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` / `--bg-canvas` | **`7,04:1`** | **`7,90:1`** | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `--text-primary` / `--bg-chapter` | **`13,89:1`** | — | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--accent-on-primary` / `--accent-primary` | **`8,33:1`** | **`7,96:1`** | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `--accent-primary` / `--bg-canvas` | **`7,65:1`** | **`7,96:1`** | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `--accent-secondary` / `--bg-canvas` | **`10,39:1`** | **`10,00:1`** | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `--focus-ring` / `--bg-canvas` | **`10,39:1`** | **`14,48:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AAA)` |
| `--border-strong` / `--bg-canvas` | **`7,89:1`** | **`8,12:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AAA)` |
| `--status-danger-fg` / `--status-danger-bg` | **`6,80:1`** | **`10,77:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |

---

## 4. Tipografi

### A. Keluarga Font & Lisensi
| Peran | Token | Keluarga Font | Lisensi & Sumber | Fallback Stack |
| :--- | :--- | :--- | :--- | :--- |
| Display Sastra & Kriya | `--font-display` | `'Lora'` | SIL OFL-1.1 (`fonts.google.com`, `500`, `700`, italic `500`) | `'Lora Fallback', Georgia, serif` |
| Body, Cerita & UI | `--font-sans` | `'Source Sans 3'` | SIL OFL-1.1 (`fonts.google.com`, `400`, `500`, `700`) | `'Source Sans Fallback', system-ui, sans-serif` |
| Kode Kain & Batch Celup | `--font-mono` | System Monospace | Native OS Stack | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

**Aturan Bobot & Angka**: Maksimum **3 bobot huruf** (`400`, `500`, `700`). Harga Rupiah (`Rp680.000`), ukuran kain (`250 x 105 cm`), dan durasi pengerjaan (`18 hari`) menggunakan `--font-sans` dengan `font-variant-numeric: tabular-nums`.

### B. Skala Responsif, Line-Height & Tracking
| Token | Ukuran (Mobile -> Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(2.25rem, 5vw, 3.85rem)` | `1.08` | `-0.02em` | `700` | H1 pembuka cerita sanggar |
| `--text-h2` | `clamp(1.65rem, 3.2vw, 2.45rem)` | `1.15` | `-0.015em` | `700` | Judul seksi utama |
| `--text-h3` | `1.1875rem` (`19px`) | `1.3` | `-0.01em` | `700` | Nama motif & tahap pembuatan |
| `--text-body-lg` | `1.0625rem` (`17px`) | `1.65` | `0` | `400` | Paragraf pengantar (`max-width: 60ch`) |
| `--text-body` | `1rem` (`16px`) | `1.6` | `0` | `400` | Cerita proses & input (`>= 16px` mobile) |
| `--text-sm` | `0.875rem` (`14px`) | `1.45` | `0` | `500` | Tab tahap, keterangan bahan, atribut budaya |

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `--space-2: 8px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`.
- **Grid & Container**: `--container-max: 1140px`, hero 2 kolom `1.05fr 0.95fr`, peracik kain & pratinjau WhatsApp 2 kolom `1.15fr 0.85fr`.
- **Radius (`<= 3` nilai)**: `--radius-control: 4px`, `--radius-frame: 8px`, `--radius-pill: 999px`.
- **Elevasi**: `--shadow-none: none`, `--shadow-focus: 0 0 0 3px var(--focus-ring)`.

---

## 5.5 Slop Budget & Aturan Badge
| Metrik per Tampilan | Batas Arketipe Ini | Catatan / Alasan |
| :--- | :--- | :--- |
| Badge/pil dekoratif | Maks **`1`** | Diutamakan `0`; penanda asal geografis (`IMOGIRI, BANTUL · YOGYAKARTA`) ditulis sebagai teks polos. |
| Badge status informatif | Hanya yang berubah | Indikator kartu apresiasi `#craft-stamp-status` (`2 / 4 Kain`) bertanda `data-status-badge="true"`. |
| Tombol terisi (primer) | Maks **`1`** per layar 900px | `#hero-cta` di Hero dan `#wa-order-submit` di akhir halaman (`> 2.200px` berjarak). |
| Tombol outline | Maks **`4`** seluruh halaman | Khusus `#theme-toggle` dan `#stamp-add-btn` (`2 <= 4`). |
| Border-radius unik | Maks **`3`** | `4px`, `8px`, `999px`. |
| Ketebalan border unik | Maks **`2`** | `1px` pembatas & `2px` bingkai kriya. |
| Bobot huruf unik | Maks **`3`** | `400`, `500`, `700`. |
| Wadah bersarang | **`0`** | Seluruh pratinjau tenun/batik dan teks WhatsApp memakai garis pembatas tipis tanpa kotak bersarang. |
| Bayangan elemen statis | **`0`** | Kehangatan dibangun lewat warna kertas serat dan garis ornamen Kawung, bukan bayangan buatan. |
| Latar seksi berselang-seling | Maks **`2`** | Masuk dan keluar tepat 1 bab **Filosofi Motif Kawung** (`#EFE6D5`). |

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
1. **Bingkai Ornamen Kawung Geometris (SVG)**: Menggambarkan modul empat elips buah aren mengelilingi titik pusat *suwung* dengan garis bersih `1.5px`, tanpa `<text>` di dalam `<svg>`.
2. **Penjelajah Tahap Pembuatan (`.process-tab`)**: 3 tab tahapan (`01 Nyanting Malam`, `02 Celup Nila Tom`, `03 Sogan Tingi & Lorod`) bertenaga `document.startViewTransition()`.
3. **Konfigurator Kain & Penyusun Pesan WhatsApp**: Radio native full-overlay (`z-index: 0` di bawah label `z-index: 1`) untuk memilih pewarna alam dan ukuran kain; memperbarui warna geometri Kawung SVG, harga `tabular-nums`, dan draf pesan WhatsApp secara langsung.
4. **Kartu Apresiasi Kriya Deterministik**: Menghitung jumlah kain yang dirawat (`4 kain = 1 paket biji lerak & panduan cuci alami`), tanpa gacha/undian.

---

## 7. Pola Layout Halaman
- **Hero + Plat Geometri Kawung Hidup**: Kisah sanggar & CTA di kiri, plat ilustrasi tenun/batik Kawung SVG di kanan.
- **Bab Filosofi & Atribusi Budaya (`#filosofi-kawung`)**: Latar `#EFE6D5` dengan penjelasan etimologi *kolang-kaling*, sejarah Keraton Yogyakarta, dan makna empat penjuru.
- **Tahap Proses Pembuatan (`#proses-kriya`)**: Tab 3 tahap dengan durasi hari, bahan alam, dan skema visual lapisan malam/celup.
- **Peracik Pesanan Kain & Format WhatsApp (`#pesan-kriya`)**: Pilihan pewarna & panjang kain + kartu apresiasi 4-slot + formulir pengiriman draf pesan WhatsApp 1 kolom.

---

## 8. Sistem Motion & Koreografi
- Merujuk `_shared/motion-system.md` (`--duration-normal: 260ms`, `--ease-out-quart`):

| Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` |
| :--- | :--- | :--- | :--- | :--- |
| Load halaman (Full) | Garis tenun pembuka (`.loom-thread`) | `550ms`, `--ease-out-expo` (`scaleX`) | Menandai tarikan benang pakan tanpa menahan konten | Tampil penuh seketika |
| Klik tahap proses | `#process-stage` | `260ms`, `View Transitions API` | Memperlihatkan perubahan lapisan malam ke celup nila & sogan | Pergantian konten instan |
| Pilih warna celup | `#kawung-plate-svg` | `220ms`, `--ease-out-quart` (`fill`, `stroke`) | Menampilkan hasil warna sogan vs nila pada motif Kawung | Perubahan warna seketika |

---

## 9. Interaksi & Mikro-Interaksi
1. **Eksplorasi Tiga Tahap Batik Tulis**: Mengklik tab tahapan mengubah judul `#stage-heading`, durasi `#stage-duration` (`7 Hari` -> `5 Hari` -> `6 Hari`), rincian bahan, dan diagram SVG proses pencelupan.
2. **Peracik Pewarna Alam & Ukuran Kain**: Memilih `Sogan Kulit Tingi`, `Biru Nila Daun Tom`, atau `Merah Kayu Secang` serta ukuran `200 x 105 cm` atau `250 x 105 cm` mengubah warna motif Kawung, harga `#craft-price`, dan teks `#wa-preview-text`.
3. **Simulasi Stempel Apresiasi Pelanggan (`#stamp-add-btn`)**: Menambah hitungan kepemilikan kain menuju paket perawatan biji lerak gratis yang 100% deterministik.

---

## 10. Gamifikasi
- **Status**: **Berlaku Ringan & Deterministik (Kartu Apresiasi Perawatan Kriya)** — merujuk `_shared/gamification-playbook.md` §1.1.
- **Mekanik & Etika**: Setiap pembelian atau pencatatan 4 helai kain batik warna alam memberikan 1 paket biji lerak pencuci batik dan kantong penyimpanan belacu secara pasti. Tanpa undian acak, tanpa batas waktu hangus yang menekan, dan patuh pada prinsip minimisasi data UU PDP.

---

## 11. Imagery, Ilustrasi & Ikonografi
- **Ornamen & Diagram Kawung (SVG)**: Wajib menghormati proporsi geometris empat bulatan lonjong penampang buah aren yang bertemu di satu titik pusat. Bebas dari elemen `<text>` di dalam `<svg>`.
- **Fotografi Pengrajin Produksi**: Wajib menampilkan proses tangan nyata (canting, panci celup nila, penjemuran teduh), rasio `4:3` atau `3:2`, format `AVIF`/`WebP` dengan atribusi nama pengrajin/desa bila disetujui.

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: Santun, jujur, menghargai kerja tangan dan waktu pengerjaan alami, menggunakan Bahasa Indonesia yang hangat tanpa hiperbola marketing AI.
- **Contoh Benar vs Salah**:
  - *Benar*: `"Satu lembar kain Kawung Sogan dicelup 12 kali dalam rendaman kulit kayu tingi dan diangin-anginkan di bawah teduh pohon selama 18 hari."`
  - *Salah*: `"✨ Warisan Budaya Nusantara yang Revolusioner dengan Sentuhan Modern Tanpa Batas!"`
- **Data Contoh Pratinjau**: **Sanggar Sekar Kawung**, Desa Wukirsari, Imogiri, Bantul, DI Yogyakarta (data contoh pratinjau).

---

## 13. Aksesibilitas Khusus Arketipe Ini
- Kontras teks di atas kertas mori `#F8F3E8` mencapai `15,55:1` (`AAA`), sangat nyaman bagi pembaca segala usia.
- Seluruh pemilih warna celup dan ukuran kain menggunakan `<input type="radio">` native full-overlay dengan cincin fokus `3px solid var(--focus-ring)`.

---

## 14. Anggaran Performa & Perbedaan Mode `Lite` vs `Full`
- **Mode `Lite` (Default UMKM Kriya)**: `LCP <= 1,8s`, `CLS <= 0,05` (target `0`), JS awal `<= 90 KB`, langsung memuat cerita, konfigurator WhatsApp, dan SVG motif tanpa pustaka eksternal.
- **Mode `Full` (Pameran Kriya)**: `LCP <= 2,5s`, `CLS <= 0,05`, mengaktifkan `View Transitions API` antar-tahap dan tarikan garis benang pembuka.

---

## 15. Signature Moment
- **Deskripsi Konkret**: Plat SVG **Motif Kawung Yogyakarta** di mana pengunjung dapat membandingkan tiga tahapan pencelupan tradisional (`Malam`, `Nila Tom`, `Sogan Tingi`) sekaligus meracik lembar kain pesanannya dan melihat draf pesan WhatsApp terbentuk otomatis kata demi kata.
- **Langkah Implementasi Teknis**:
  1. SVG Kawung dibangun dari 4 pola elips kuadran simetris yang warnanya dikendalikan oleh variabel/atribut JS dari radio pewarna alam.
  2. Fungsi `updateCraftOrder()` menyusun rincian motif, pewarna, panjang kain, dan harga ke dalam `#wa-preview-text`.
- **Biaya Performa & Fallback**: `< 2,5 KB` JS; seluruh informasi tetap utuh tanpa animasi saat `prefers-reduced-motion: reduce`.

---

## 16. Cek Anti-Template & Rubrik Awwwards

### A. Tiga Hal yang Mustahil Ada di Template Umum
1. **Atribusi Budaya & Filosofi Motif Kawung yang Terverifikasi**: Bukan sekadar gambar latar batik generik, melainkan dilengkapi penjelasan etimologi *kolang-kaling*, sejarah Keraton Yogyakarta, dan filosofi *suwung*.
2. **Simulasi Tahap Pencelupan Warna Alam**: Memperlihatkan proses `Nyanting -> Celup Nila -> Sogan & Lorod` lengkap dengan durasi hari nyata.
3. **Penyusun Pesan WhatsApp Real-Time untuk UMKM**: Menjembatani kebiasaan transaksi nyata pelanggan UMKM Indonesia dengan transparansi harga penuh.

### B. Pemetaan Rubrik Awwwards
| Kriteria (Bobot) | Bagaimana Arketipe Ini Memenuhinya | Ketergantungan pada Aset Nyata Klien |
| :--- | :--- | :--- |
| **Design (40%)** | Palet warna celup alam (mori, sogan, nila), pasangan *Lora* & *Source Sans 3*, geometri Kawung presisi. | Foto makro serat kain, foto pengrajin asli di sanggar, dan dokumentasi motif khas klien. |
| **Usability (30%)** | Konfigurator kain langsung menghasilkan ringkasan harga dan teks WhatsApp siap kirim, kontras AAA `> 15:1`. | Ketersediaan stok kain, waktu pre-order aktual, dan nomor WhatsApp admin sanggar. |
| **Creativity (20%)** | Penceritaan interaktif proses pencelupan warna alam + plat Kawung responsif. | Kisah sejarah keluarga/koperasi pengrajin dan resep bahan warna lokal mereka. |
| **Content (10%)** | Penjelasan budaya yang hormat dan akurat sesuai literatur Yogyakarta/UNESCO. | Verifikasi penamaan motif bersama tetua sanggar atau kurator budaya klien. |
| **Developer** | Semantik HTML5, WCAG 2.2 AA/AAA, `CLS = 0` via `@font-face` metrik selaras, zero dependency berat. | Optimasi gambar katalog `AVIF`/`WebP` di produksi. |

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  --bg-canvas: #F8F3E8;
  --bg-chapter: #EFE6D5;
  --bg-surface: #FFFDF8;
  --text-primary: #231914;
  --text-secondary: #4B3A2F;
  --text-muted: #634E40;
  --border-subtle: #D5C7B2;
  --border-strong: #5E4636;
  --accent-primary: #7C3A1D;
  --accent-on-primary: #FFFDF8;
  --accent-secondary: #1E3A5F;
  --focus-ring: #1E3A5F;
  --status-success-bg: #DCFCE7;
  --status-success-fg: #14532D;
  --status-danger-bg: #FEE2E2;
  --status-danger-fg: #991B1B;

  --font-display: 'Lora', Georgia, serif;
  --font-sans: 'Source Sans 3', system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --radius-control: 4px;
  --radius-frame: 8px;
  --radius-pill: 999px;
}
```

### B. Konfigurasi Tailwind (`tailwind.config.js`)
```javascript
export default {
  theme: {
    extend: {
      colors: {
        mori: 'var(--bg-canvas)',
        serat: 'var(--bg-chapter)',
        malam: 'var(--text-primary)',
        sogan: 'var(--accent-primary)',
        nila: 'var(--accent-secondary)',
      },
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
};
```

---

## 18. Checklist QA Sebelum Rilis
- [x] Seluruh pasangan warna lulus WCAG 2.2 AA/AAA & `axe-core` (`28–30 passes, 0 violations, 0 incomplete`) pada 4 state (`light-normal`, `dark-mode`, `form-error`, `dev-drawer-open`).
- [x] Lulus `slop-audit.js` 100% sesuai Slop Budget Bagian 5.5 (`decorativeBadges: 0` <= 1, `maxFilledPerScreen: 1`, `outlineFullPage: 2` <= 4, `uniqueBorderRadii: 2` <= 3, `uniqueBorderWidths: 2`, `uniqueFontWeights: 3`, `maxNestedContainers: 0`, `staticShadows: 0`, `alternatingSectionBgs: 2`).
- [x] Uji keyboard `10x Tab` (`tabAllHaveVisibleOutline: true`, `tabAnyInClosedDrawer: false`) & `prefers-reduced-motion: reduce` (`matches: true`, `btnDuration: "1e-05s"`) terverifikasi.
- [x] Interaksi kunci terverifikasi nyata: perpindahan tahap proses (`Tahap 01...` -> `Tahap 02...`), konfigurator pewarna alam & ukuran kain memperbarui harga (`Rp640.000` -> `Rp800.000`) serta pratinjau pesan WhatsApp, dan pencatatan kartu apresiasi (`2 / 4 Kain` -> `3 / 4 Kain`).
- [x] Lighthouse nyata memenuhi anggaran performa: Mobile `99/100/100/100` (`LCP 1.6 s`, `FCP 1.6 s`, `CLS 0.017`, `TBT 0 ms`, `174 KiB`); Desktop `100/100/100/100` (`LCP 0.5 s`, `FCP 0.5 s`, `CLS 0`, `TBT 0 ms`, `174 KiB`).
- [x] Screenshot `375px` & `1280px` (Kertas Mori & Malam Sogan) diperiksa visual tanpa overflow (`scrollWidth === innerWidth`) atau console error (`0`).

# DESIGN.md — Playful Gamified (`creative/playful-gamified`)

- **Arketipe Sumber**: `creative/playful-gamified`
- **Jalur**: Kreatif
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 5 | Variance: 8 | Motion: 8`
- **Tingkat Kerumitan**: `Lite (Default UMKM / Cepat)` dan `Full (Kampanye Peluncuran)`

---

## 1. Identitas, Niat & Big Idea
- **Identitas & Niat**: Antarmuka hangat dan berenergi untuk UMKM kuliner, kedai kopi, toko roti, edukasi santai, serta brand komunitas lokal. Dalam tiga detik pertama, pengunjung merasakan kehangatan etalase analog (kertas buttercream hangat, tinta merah jambu bata, stempel karet fisik, maskot ramah) yang ramah di layar sentuh ponsel maupun desktop, tanpa memaksa pengguna mendaftar akun atau mengejar trik peluang acak.
- **Big Idea**: Mengubah kartu stempel kertas dan papan racik kasir kedai kopi lokal menjadi antarmuka taktil bergaya stiker dengan pegas fisik, hadiah deterministik tanpa unsur judi, dan peracik pesanan interaktif langsung di layar.

---

## 2. Prinsip Desain
1. **Kehangatan Taktil di Atas Kertas Mentega**:
   - *Terapkan*: Gunakan kanvas krem hangat (`#FFF8EB`) dengan garis bingkai tinta pekat (`#2B1D14`, `2px`) dan bayangan offset keras (`4px 4px 0 #2B1D14`) hanya pada objek interaktif taktil utama (kartu stempel, papan racik, papan kuis).
   - *Hindari*: Latar gelap generik berbola cahaya ungu-sian, *glassmorphism*, atau bayangan kabur (*soft shadow*) pada seluruh elemen halaman.
2. **Gamifikasi Jujur & Deterministik (Tanpa Judi)**:
   - *Terapkan*: Seluruh aturan poin/stempel tampak utuh sejak awal ("8 stempel = 1 kopi gratis deterministik"), progres tersimpan lokal (`localStorage`), dan setiap alur menyertakan tombol lewati yang jelas.
   - *Hindari*: Roda keberuntungan manipulatif, kotak gacha berbayar, penghitung mundur palsu, atau *confirmshaming*.
3. **Fisika Pegas yang Mengarah ke Aksi**:
   - *Terapkan*: Gunakan kurva pegas CSS `linear()` hanya saat stempel ditekan, lencana terbuka, dan gelas pratinjau berubah lapisan — tidak pada seluruh blok teks yang digulir.
   - *Hindari*: Efek *fade-up* seragam di semua seksi atau animasi berulang di atas 5 detik tanpa kendali.
4. **Satu Primadona Merah Bata per Layar**:
   - *Terapkan*: Batasi tombol terisi (`--accent-primary`) maksimal 1 per layar 900px; gunakan radio bergaris tegas untuk pemilih varian agar tidak membanjiri halaman dengan tombol bersaing.
   - *Hindari*: Menumpuk lencana dekoratif di setiap baris menu atau meletakkan tiga tombol warna penuh berdampingan.
5. **Konteks UMKM Indonesia yang Spesifik**:
   - *Terapkan*: Tulis dalam Bahasa Indonesia akrab namun jernih, cantumkan harga Rupiah berformat `id-ID` (`Rp28.000`) dengan `tabular-nums`, dan sediakan jalur pesan cepat maupun formulir simpan kartu patuh UU PDP.
   - *Hindari*: Emoji dekoratif di dalam tombol/judul atau nama placeholder generik (`John Doe`, `Acme Coffee`).

---

## 3. Token Warna & Pasangan Kontras Terukur

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai Terang | Nilai Gelap (Opsional) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Warm Buttercream / Espresso Charcoal | `#FFF8EB` | `#1A120D` | Latar tunggal halaman & seksi |
| `--bg-surface` | Cream Card / Roasted Bean | `#FFFFFF` | `#261B14` | Kartu stempel, peracik, panel kuis |
| `--bg-elevated` | Soft Cream / Deep Roast | `#FFFDF8` | `#30231B` | Panel voucher, drawer dev |
| `--bg-sticker-honey` | Honey Butter Sticker | `#FDE047` | `#854D0E` | Stiker aksen miring & sorotan stempel aktif |
| `--bg-sticker-mint` | Pandan Mint Tint | `#D1FAE5` | `#143322` | Stiker lencana eksplorasi terbuka |
| `--text-primary` | Espresso Ink / Cream Paper | `#1E140E` | `#FFF8EB` | Judul H1-H3 dan teks utama |
| `--text-secondary` | Roasted Cocoa / Oat Beige | `#4E3524` | `#E5D3C0` | Paragraf pengantar dan deskripsi |
| `--text-muted` | Cinnamon Bark / Latte Tan | `#664833` | `#C4A98E` | Metadata, helper text, keterangan harga |
| `--border-subtle` | Sesame Linen / Bark Line | `#D6C3AC` | `#4D392B` | Garis pemisah daftar menu `1px` |
| `--border-strong` | Charcoal Espresso / Chalk Bean | `#2B1D14` | `#D6C3AC` | Garis tepi wadah taktil `2px` & offset shadow |
| `--accent-primary` | Vermilion Jam / Tangerine Spark | `#B9341E` | `#FB923C` | Aksi primer (CTA terisi) & garis fokus aktif |
| `--accent-primary-hover` | Deep Hibiscus / Citrus Amber | `#962715` | `#FDBA74` | State hover CTA primer |
| `--accent-on-primary` | Crisp White / Deep Roast | `#FFFFFF` | `#1A120D` | Teks di atas `--accent-primary` |
| `--accent-secondary` | Pandan Leaf / Mint Leaf | `#14532D` | `#6EE7B7` | Aksentuasi stempel selesai & target kolektif |
| `--focus-ring` | Signal Cobalt / Honey Spark | `#1D4ED8` | `#FDE047` | Cincin `:focus-visible` kontras tinggi |
| `--status-success-bg` / `--status-success-fg` | Sukses | `#DCFCE7` / `#14532D` | `#143322` / `#BBF7D0` | Voucher siap, lencana terbuka |
| `--status-warning-bg` / `--status-warning-fg` | Peringatan | `#FEF3C7` / `#78350F` | `#422006` / `#FDE68A` | Info jeda atau pengingat opsional |
| `--status-danger-bg` / `--status-danger-fg` | Bahaya / Error | `#FEE2E2` / `#991B1B` | `#451212` / `#FECACA` | Error Summary Box & pesan validasi inline |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` / `Background`) | Terang | Gelap | Target WCAG | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--text-primary` / `--bg-canvas` | **`17,11:1`** | **`17,49:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-primary` / `--bg-surface` | **`18,08:1`** | **`15,96:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` / `--bg-canvas` | **`10,70:1`** | **`12,68:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` / `--bg-canvas` | **`7,83:1`** | **`8,28:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-on-primary` / `--accent-primary` | **`5,88:1`** | **`8,17:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-primary` / `--bg-canvas` | **`5,56:1`** | **`8,17:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-secondary` / `--bg-canvas` | **`8,62:1`** | **`12,13:1`** | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `#1E140E` / `--bg-sticker-honey` | **`13,71:1`** | — | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `#14532D` / `--bg-sticker-mint` | **`8,03:1`** | — | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `--focus-ring` / `--bg-canvas` | **`6,34:1`** | **`14,02:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AA)` |
| `--border-strong` / `--bg-canvas` | **`15,43:1`** | **`10,30:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AAA)` |
| `--status-success-fg` / `--status-success-bg` | **`8,30:1`** | **`11,35:1`** | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `--status-danger-fg` / `--status-danger-bg` | **`6,80:1`** | **`10,77:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |

---

## 4. Tipografi

### A. Keluarga Font & Lisensi
| Peran | Token | Keluarga Font | Lisensi & Sumber | Fallback Stack |
| :--- | :--- | :--- | :--- | :--- |
| Display & Judul | `--font-display` | `'Bricolage Grotesque'` | SIL OFL-1.1 (`fonts.google.com`, bobot `500`, `700`) | `system-ui, -apple-system, sans-serif` |
| Body, Menu & Kontrol | `--font-sans` | `'DM Sans'` | SIL OFL-1.1 (`fonts.google.com`, bobot `400`, `500`, `700`) | `system-ui, -apple-system, sans-serif` |
| Voucher & Kode Pesanan | `--font-mono` | System Monospace | Native OS Stack (tanpa unduh font ketiga) | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

**Aturan Bobot & Angka**: Seluruh halaman dibatasi pada **3 bobot huruf** (`400`, `500`, `700`). Harga Rupiah (`Rp28.000`), penghitung stempel (`5 / 8`), dan target komunitas (`742 / 1.000`) menggunakan `--font-sans` dengan `font-variant-numeric: tabular-nums`. `--font-mono` khusus kode voucher deterministik (`TUGU-8CUP-CONTOH`).

### B. Skala Responsif, Line-Height & Tracking
| Token | Ukuran (Mobile -> Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(2.35rem, 5.2vw, 3.6rem)` | `1.04` | `-0.025em` | `700` | Hanya 1 H1 di Hero |
| `--text-h2` | `clamp(1.55rem, 2.8vw, 2.2rem)` | `1.14` | `-0.015em` | `700` | Judul seksi utama |
| `--text-h3` | `1.125rem` (`18px`) | `1.3` | `-0.01em` | `700` | Subjudul panel & item menu |
| `--text-body-lg` | `1.0625rem` (`17px`) | `1.6` | `0` | `400` | Paragraf pengantar hero (`max-width: 58ch`) |
| `--text-body` | `1rem` (`16px`) | `1.55` | `0` | `400` | Teks bacaan & input form (`>= 16px` mobile) |
| `--text-sm` | `0.875rem` (`14px`) | `1.45` | `0` | `500` | Label metadata, tab, tombol, badge status |

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `--space-1: 4px`, `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`.
- **Grid & Container**: `--container-max: 1120px`, gutter `16px` (mobile) / `24px` (desktop), hero 2 kolom asimetris `1.1fr 0.9fr`.
- **Breakpoint**: `xs: 320px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.
- **Radius (`<= 4` nilai)**: `--radius-control: 8px` (input, tombol, pill racikan), `--radius-card: 16px` (kartu stempel & panel taktil), `--radius-pill: 999px` (stiker identitas & badge status).
- **Elevasi**: `--shadow-none: none`, `--shadow-tactile: 4px 4px 0 var(--border-strong)` (hanya pada panel kartu interaktif utama, maks `4` elemen statis), `--shadow-focus: 0 0 0 3px var(--focus-ring)`.

---

## 5.5 Slop Budget & Aturan Badge
| Metrik per Tampilan | Batas Arketipe Ini | Catatan / Alasan |
| :--- | :--- | :--- |
| Badge/pil dekoratif | Maks **`2`** | Khusus 1-2 stiker identitas kedai (`"SANGRAI SENIN & KAMIS"`) sebagai ciri arketipe stiker; dilarang menempel tag pada baris menu. |
| Badge status informatif | Hanya yang berubah | Misal status kupon/stempel (`5 / 8 Stempel`, `Voucher Aktif`) dan status terbuka pada 3 lencana eksplorasi (`data-status-badge`). |
| Tombol terisi (primer) | Maks **`1`** per layar 900px | CTA primer berada di Hero dan CTA pesan racikan dipisah `>= 950px` ke bawah di seksi Peracik. |
| Tombol outline | Maks **`4`** seluruh halaman | Tombol sekunder penting (misal Salin Voucher, Terapkan Rekomendasi, Toggle Tema, Reset). |
| Border-radius unik | Maks **`4`** | `8px`, `16px`, `999px` (ditambah `50%` pada elemen bulat bila perlu). |
| Ketebalan border unik | Maks **`2`** | `1px` untuk garis pemisah & `2px` untuk tepi taktil utama. |
| Bobot huruf unik | Maks **`3`** | `400`, `500`, `700`. |
| Wadah bersarang | **`0`** | Elemen di dalam kartu tidak memakai border `>= 3` sisi atau blok latar bertingkat (`<div>` di dalam `<div>` berkotak). |
| Bayangan elemen statis | Maks **`4`** | Hard offset shadow `4px 4px 0 var(--border-strong)` khusus untuk kartu stempel, panel peracik, panel kuis, dan stiker hero. |
| Latar seksi berselang-seling | **`0`** | Seluruh seksi memakai satu kanvas `--bg-canvas` agar kartu taktil tetap menjadi fokus. |

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
Seluruh komponen mendefinisikan `default`, `hover`, `focus-visible` (`outline: 3px solid var(--focus-ring); outline-offset: 2px`), `active` (`translate(2px, 2px)` pada kontrol taktil), `disabled`, `loading`, `error`, dan `success`:
1. **Tombol (`btn-primary`, `btn-secondary`, `btn-ghost`)**: minimum tinggi `44px`, `:active` menekan posisi ke bayangan offset tanpa mengubah ukuran font.
2. **Pemilih Radio Taktil (`Peracik` & `Kuis`)**: memakai `<input type="radio">` native berposisi full-overlay (`appearance: none; background: transparent`) di atas `<label class="radio-pill">` sehingga tombol Panah (`ArrowUp/Down/Left/Right`) berfungsi bawaan browser dan cincin `:focus-visible` terlihat di sekeliling pill (`>= 44x44px`).
3. **Kartu Stempel 8-Slot**: menggunakan grid `4x2` berisi `<button type="button">` atau `<span class="stamp-slot">` (tanpa kotak `<div>` bersarang) yang menggambar ilustrasi SVG stempel biji kopi saat terisi dan angka urutan saat kosong. Status diperbarui di wilayah `aria-live="polite"`.
4. **Menu Baris Terstruktur + Tab Filter**: 3 tab garis bawah (`Semua`, `Kopi`, `Roti Sourdough`), daftar menu berpembatas `1px` tanpa kartu tiga kolom kembar.
5. **Formulir Simpan Kartu + Error Summary Box**: 1 kolom (`max-width: 560px`), checkbox persetujuan eksplisit UU PDP, `role="alert"` pada ringkasan galat dengan fokus otomatis ke kotak ringkasan, serta tautan ke input terkait (`aria-invalid="true"`, `aria-describedby`).

---

## 7. Pola Layout Halaman
- **Hero / Header Tugas**: Kolom kiri berisi stiker edisi terbatas, H1 besar, ilustrasi maskot vektor **Mas Biji** yang bereaksi terhadap stempel, tombol utama `#stamp-btn`, dan tautan "Lewati langsung ke daftar menu". Kolom kanan berisi Kartu Stempel 8-Slot interaktif.
- **Peracik Minuman Kustom**: Grid 2 kolom (pilihan radio di kiri, pratinjau gelas SVG hidup & total Rupiah `tabular-nums` di kanan).
- **Kuis Rasa 3-Langkah + Lencana Eksplorasi**: Panel terpadu dengan 3 pertanyaan singkat, hasil rekomendasi instan yang dapat langsung diterapkan ke peracik, tombol **"Lewati ke Menu"** (plus pintasan `Escape`), serta 3 lencana eksplorasi di bawahnya.
- **Menu & Target Komunitas**: Daftar baris berfilter dengan kolom sejajar (`Nama & Catatan Bahan | Ukuran | Harga`) dan bilah target kolektif transparan (`742 / 1.000 cup`).
- **Formulir Opsional Simpan Kartu**: Di bagian paling bawah sebelum footer agar tidak pernah menghalangi coba-coba interaktif di awal halaman.

---

## 8. Sistem Motion & Koreografi
- Merujuk token `_shared/motion-system.md`: `--duration-instant` (`75ms`), `--duration-fast` (`150ms`), `--duration-normal` (`250ms`), `--ease-spring-snappy` (`linear(...)`), `--ease-spring-gentle` (`linear(...)`).

| Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` |
| :--- | :--- | :--- | :--- | :--- |
| Load halaman (Full) | Bilah tinta intro atas (`#intro-rail`) | `550ms`, `--ease-out-expo` (`scaleX`) | Menandai halaman siap tanpa menutup teks hero | Dimatikan total; hero selalu terlihat penuh sejak `0ms` |
| Klik `Cap Stempel` | Ikon stempel baru + reaksi **Mas Biji** | `420ms`, `--ease-spring-snappy` (`scale`, `rotate`) | Memberi sensasi taktil cap stempel ke kertas | Berubah status terisi seketika tanpa pantulan |
| Ubah opsi `Peracik` | Tinggi & warna lapisan SVG gelas kopi | `260ms`, `--ease-spring-gentle` (`transform`, `fill`) | Menunjukkan perubahan isi racikan secara visual | Pergantian lapisan seketika |
| Cap ke-8 (`8/8`) | Panel voucher deterministik (`#voucher-panel`) | `300ms`, `--ease-spring-snappy` | Mengonfirmasi terbukanya hadiah gratis | Muncul seketika tanpa animasi |
| Hover stiker hero | Stiker identitas miring (`-2deg -> 0deg`) | `150ms`, `--ease-out-quart` | Umpan balik taktil halus pada desktop | Diam statis tanpa rotasi |

---

## 9. Interaksi & Mikro-Interaksi
1. **Cap Stempel Real-Time**: Mengisi slot berurutan `1..8`, menyimpan ke `localStorage`, menyalakan suara visual pada maskot (alis & uap cangkir naik saat tercapai), membuka lencana **Pelanggan 8 Cup** dan **Voucher Deterministik `TUGU-8CUP-CONTOH`** pada hitungan `8/8`.
2. **Peracik Minuman Live**: Memilih jenis seduhan (`Kopi Susu`, `Kopi Filter`, `Matcha Lokal`), pilihan susu/suhu (`Susu Segar`, `Oat Milk +Rp5.000`, `Dingin Tanpa Susu`), dan tingkat manis (`Gula Aren Normal`, `Sedikit Manis`, `Tanpa Gula`) memperbarui pratinjau gelas SVG, deskripsi ringkas, serta kalkulasi total harga seketika dan membuka lencana **Peracik Mandiri**.
3. **Kuis Penemuan Rasa + Jeda/Lewati**: Menjawab 3 pertanyaan langsung menyaring profil rasa (contoh: *Seduhan Terang Citrus Arabika Gayo*), memunculkan tombol *"Terapkan ke Peracik"*, dan membuka lencana **Pencicip Pagi**. Menekan tombol *"Lewati ke Menu"* atau tombol keyboard `Escape` saat fokus di dalam area kuis langsung menggulir ke daftar menu dan mengumumkan aksi di `aria-live="polite"`.
4. **Filter Menu Tab**: Filter `Semua (5)`, `Kopi (3)`, `Roti Sourdough (2)` menyaring baris menu tanpa pergeseran lebar layout (`CLS = 0`).

---

## 10. Gamifikasi
- **Status**: **Berlaku Penuh (Beretika & Deterministik)** — merujuk `_shared/gamification-playbook.md`.
- **Mekanik Terpilih**:
  1. **Kartu Stempel Digital 8-Slot**: Syarat pasti (`8` cap = `1` minuman gratis ukuran reguler di bawah `Rp35.000`). Tidak ada probabilitas acak, tidak ada *reset* hangus bulanan mendadak.
  2. **Peracik Minuman Kustom**: Tanpa wajib *drag-and-drop*; seluruh opsi bisa dipilih lewat ketukan atau keyboard.
  3. **Kuis Penemuan Rasa 3-Langkah + 3 Lencana Eksplorasi**: Rekomendasi berbasis preferensi nyata beserta alasannya, dilengkapi tombol **"Lewati ke Menu"** yang selalu tampak + `Escape`.
  4. **Target Kolektif Komunitas**: Progres bersama `742 / 1.000 cup` untuk pembibitan `100` kopi Arabika bersama mitra petani Gayo (ditandai sebagai angka contoh pratinjau; wajib diisi angka teraudit pada proyek nyata).
- **Skema Data & Kepatuhan Hukum (UU PDP No. 27/2022 & UU No. 22/1954)**:
  - **Tanpa pemaksaan akun/NIK**: Coba stempel, racik minuman, dan kuis disimpan sementara di `localStorage` perangkat (`tugu_loyalty_v1`) tanpa meminta nama, NIK, atau surel.
  - **Simpan lintas perangkat opsional**: Formulir di akhir halaman hanya meminta nama panggilan dan nomor WhatsApp aktif disertai kotak centang persetujuan eksplisit berbahasa Indonesia sebelum menyimpan voucher ke perangkat/server.
  - **Catatan Hukum Undian (`PERLU VERIFIKASI HUKUM KLIEN`)**: Sesuai `SOURCES.md`, undian berhadiah acak tunduk pada UU No. 22 Tahun 1954. Arketipe ini memilih hadiah **deterministik** (`8 cap = 1 gelas pasti`); jika klien tetap meminta undian acak pada kampanye tertentu, agent wajib meminta klien memverifikasi perizinan resmi sebelum fitur dibangun.

---

## 11. Imagery, Ilustrasi & Ikonografi
- **Maskot & Ilustrasi Vektor ("Mas Biji" & Gelas Racikan)**: Menggunakan SVG inline murni (tanpa elemen `<text>` di dalam `<svg>` agar pembacaan kontras dan DOM selalu bersih; label teks diletakkan sebagai HTML semantik berdampingan dengan SVG). `aria-hidden="true"` untuk ikon kecil dekoratif, `role="img" aria-label="..."` untuk ilustrasi utama.
- **Fotografi Klien (Saat Produksi)**: Rasio `4:3` atau `1:1` bertepi `2px solid var(--border-strong)` dan radius `16px`, memakai format `AVIF`/`WebP` dengan dimensi eksplisit (`width`/`height`). Dilarang foto stok kafe generik dengan pencahayaan kebiruan dingin.
- **Ikonografi**: Ikon vektor `stroke-width: 2`, `stroke-linecap: round`, `stroke-linejoin: round`, ukuran `18px`/`20px`/`24px`.

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: Akrab, hangat, membumi, bebas jargon korporat maupun terjemahan kaku. Menggunakan ejaan Rupiah Indonesia baku (`Rp28.000`, tanpa `,-` atau `IDR` berlapis).
- **Contoh Benar vs Salah**:
  - *Benar*: `"Delapan Cangkir, Satu Kopi Gratis di Tugu. Kumpulkan 8 stempel tanpa perlu aplikasi tambahan — racik selera kopimu sekarang."`
  - *Salah*: `"✨ Rasakan Pengalaman Ngopi Revolusioner yang Seamless dengan Ekosistem Loyalty Digital Next-Gen!"`
- **Data Contoh Pratinjau (Ditandai Jujur)**: Kedai **Kopi & Roti Tugu**, Jl. Margo Utomo No. 42, Jetis, Yogyakarta, nomor WhatsApp contoh `0812-0000-4210`, kode voucher contoh `TUGU-8CUP-CONTOH`.

---

## 13. Aksesibilitas Khusus Arketipe Ini
- Mengacu `_shared/accessibility-baseline.md`:
  - Tombol/pil racikan dan kuis menggunakan `<input type="radio">` native agar pengguna keyboard bisa menavigasi antar-opsi memakai tombol panah dan tetap mudah ditekan di layar sentuh (`>= 44x44px`).
  - Setiap perubahan stempel, voucher, lencana, dan rekomendasi kuis diumumkan melalui region `aria-live="polite"`.
  - Seluruh ilustrasi SVG diberi teks deskripsi di HTML atau `role="img" aria-label` tanpa menyematkan `<text>` kecil di dalam SVG yang menurunkan ketepatan kontras.
  - Tombol `"Lewati ke Menu"` pada kuis selalu dapat diakses dengan `Tab` atau `Escape` di dalam panel kuis.

---

## 14. Anggaran Performa & Perbedaan Mode `Lite` vs `Full`
- **Target Anggaran (Merujuk `_shared/performance-budget.md`)**:
  - **Mode `Lite` (Default UMKM)**: `LCP <= 1,8s`, `INP <= 150ms`, `CLS <= 0,05` (target `0`), JS awal `<= 90 KB`, Font `<= 110 KB` (2 keluarga Google Fonts: Bricolage Grotesque + DM Sans). Memakai CSS `linear()` spring murni + Vanilla JS tanpa memuat bundler/library scroll tambahan.
  - **Mode `Full` (Kampanye Peluncuran)**: `LCP <= 2,5s`, `INP <= 200ms`, `CLS <= 0,05`, JS awal `<= 220 KB`. Menambahkan `gsap@3.15.1` (MorphSVG/Flip untuk transisi gelas racikan & kartu stempel) + `lenis@1.3.27` (MIT) yang di-lazy-load setelah FCP dan dimatikan saat `prefers-reduced-motion: reduce` atau `navigator.hardwareConcurrency <= 4`.
- **Yang Dipangkas di Mode `Lite`**: Menghilangkan intro garis ink top-bar, menonaktifkan rotasi mikro stiker, dan menggunakan transisi CSS `linear()` saja tanpa GSAP maupun Lenis — seluruh mekanik stempel, peracik, kuis, dan voucher tetap bekerja 100%.

---

## 15. Signature Moment
- **Deskripsi Konkret**: Pengunjung mengetuk **"Cap Stempel Hari Ini"** pada kartu stempel kertas taktil 8-slot — maskot vektor **"Mas Biji"** di sebelah kiri ikut tersenyum dan uap kopinya mengembang seirama, lalu pada cap ke-8 terbuka panel voucher deterministik **`TUGU-8CUP-CONTOH`** bersama lencana **Pelanggan 8 Cup**, sekaligus terhubung langsung dengan **Peracik Minuman Live** di bawahnya.
- **Langkah Implementasi Teknis**:
  1. Grid `4x2` slot stempel SVG + status region `aria-live="polite"`.
  2. Handler Vanilla JS memperbarui state di `localStorage`, memicu animasi pegas CSS (`--ease-spring-snappy`) hanya pada slot terbaru dan kelas `.is-excited` pada SVG maskot.
  3. Saat hitungan `=== 8`, buka panel `#voucher-panel` dengan fokus aman tanpa menghapus konten lama.
- **Biaya Performa & Fallback**: Overhead JS `< 3 KB` (tanpa library eksternal di mode Lite), animasi hanya memakai `transform` + `opacity` (GPU composited, `CLS = 0`). Pada `prefers-reduced-motion: reduce`, stempel terisi dan voucher muncul seketika (`0.01ms`) tanpa pantulan pegas.

---

## 16. Cek Anti-Template & Rubrik Awwwards

### A. Tiga Hal yang Mustahil Ada di Template Umum
1. **Integrasi Mekanik Kedai Lokal dalam Satu Alur**: Kartu stempel 8-slot deterministik, lencana eksplorasi, maskot reaktif, dan peracik kopi SVG terhubung ke satu state lokal (`localStorage`), bukan halaman promo statis dengan 3 kartu fitur generik.
2. **Gamifikasi Tanpa Penjebakan**: Setiap interaksi menawarkan tombol "Lewati ke Menu" plus dukungan `Escape` dan menyimpan progres lokal tanpa memaksa login/email sebelum dicoba.
3. **Hirarki Kaku Tanpa UI Inflation**: Nol kartu fitur 3 kolom identik, nol kotak bersarang di dalam kartu stempel, dan maksimal 1 tombol terisi primer per tinggi viewport `900px`.

### B. Pemetaan Rubrik Awwwards
| Kriteria (Bobot) | Bagaimana Arketipe Ini Memenuhinya | Ketergantungan pada Aset Nyata Klien |
| :--- | :--- | :--- |
| **Design (40%)** | Palet buttercream-vermilion hangat yang kontras, maskot vektor khusus, tipografi *Bricolage Grotesque* bertulang kuat, serta tepi tinta konsisten `2px`. | Foto produk kopi/roti asli hasil pemotretan kedai dan ilustrasi/maskot merek final klien. |
| **Usability (30%)** | Peracik dengan kalkulasi harga instan, menu terstruktur sekali pindai, alur simpan WhatsApp patuh UU PDP, serta target sentuh nyaman di ponsel. | Daftar menu aktual, harga terbaru per outlet, dan integrasi WhatsApp/POS nyata milik UMKM. |
| **Creativity (20%)** | Kartu stempel 8-slot + maskot responsif + gelas racik SVG hidup yang bekerja langsung di browser tanpa perlu unduh aplikasi loyalitas terpisah. | Cerita merek, nama varian khas daerah, dan program komunitas nyata klien. |
| **Content (10%)** | Bahasa Indonesia hangat bebas slogan kosong, harga `tabular-nums`, dan penjelasan gamblang syarat hadiah tanpa tulisan halus tersembunyi. | Angka dampak komunitas riil (bila fitur tantangan kolektif diaktifkan). |
| **Developer** | HTML5 semantik, WCAG 2.2 AA (`<input type="radio">` full-overlay, `aria-live`, `prefers-reduced-motion`), `CLS = 0`, beban awal sangat ringan. | Pengaturan caching/compression dan self-host font di server produksi. |

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  --bg-canvas: #FFF8EB;
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFFDF8;
  --bg-sticker-honey: #FDE047;
  --bg-sticker-mint: #D1FAE5;
  --text-primary: #1E140E;
  --text-secondary: #4E3524;
  --text-muted: #664833;
  --border-subtle: #D6C3AC;
  --border-strong: #2B1D14;
  --accent-primary: #B9341E;
  --accent-primary-hover: #962715;
  --accent-on-primary: #FFFFFF;
  --accent-secondary: #14532D;
  --focus-ring: #1D4ED8;
  --status-success-bg: #DCFCE7;
  --status-success-fg: #14532D;
  --status-warning-bg: #FEF3C7;
  --status-warning-fg: #78350F;
  --status-danger-bg: #FEE2E2;
  --status-danger-fg: #991B1B;

  --font-display: 'Bricolage Grotesque', system-ui, -apple-system, sans-serif;
  --font-sans: 'DM Sans', system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --radius-control: 8px;
  --radius-card: 16px;
  --radius-pill: 999px;
  --shadow-tactile: 4px 4px 0 var(--border-strong);

  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring-snappy: linear(0, 0.453 7.8%, 0.803 16.1%, 1.008 24.9%, 1.084 33.3%, 1.053 44.6%, 1.007 58.2%, 0.996 72.2%, 1);
  --ease-spring-gentle: linear(0, 0.28 8%, 0.68 18%, 0.95 29%, 1.04 41%, 1.02 58%, 1);
}
```

### B. Konfigurasi Tailwind (`tailwind.config.js`)
```javascript
export default {
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)',
        surface: 'var(--bg-surface)',
        ink: 'var(--text-primary)',
        accent: 'var(--accent-primary)',
        pandan: 'var(--accent-secondary)',
        honey: 'var(--bg-sticker-honey)',
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        tactile: '4px 4px 0 var(--border-strong)',
      },
    },
  },
};
```

---

## 18. Checklist QA Sebelum Rilis
- [x] Seluruh pasangan warna lulus kontras WCAG 2.2 AA & verifikasi `axe-core` (`31 passes, 0 violations, 0 incomplete`) pada 4 state (`light-normal`, `dark-mode`, `form-error`, `dev-drawer-open`).
- [x] Lulus `slop-audit.js` 100% sesuai Slop Budget Bagian 5.5 (`decorativeBadges: 1`, `statusBadges: 4`, `maxFilledPerScreen: 1`, `outlineFullPage: 2`, `uniqueBorderRadii: 3`, `uniqueBorderWidths: 2`, `uniqueFontWeights: 3`, `maxNestedContainers: 0`, `staticShadows: 4`, `alternatingSectionBgs: 0`).
- [x] Uji keyboard `10x Tab` (`tabAllHaveVisibleOutline: true`, `tabAnyInClosedDrawer: false`) & `prefers-reduced-motion: reduce` (`matches: true`, `btnDuration: "1e-05s"`) terverifikasi; catatan: navigasi panah antar-radio tidak diotomasi terpisah oleh skrip.
- [x] Interaksi kunci terverifikasi nyata: cap ke `8 / 8 Stempel` membuka voucher `TUGU-8CUP-CONTOH`, racikan mengubah harga (`Rp26.000` -> `Rp33.000`), kuis 3 langkah membuka lencana & rekomendator, serta tombol Lewati ke Menu berjalan.
- [x] Lighthouse nyata memenuhi anggaran Mode Lite: Mobile `99/100/100/100` (`LCP 1.8 s`, `FCP 1.8 s`, `CLS 0`, `TBT 0 ms`, `198 KiB`); Desktop `100/100/100/100` (`LCP 0.6 s`, `FCP 0.6 s`, `CLS 0.007`, `TBT 0 ms`, `198 KiB`).
- [x] Inspeksi visual screenshot `375px` & `1280px` (terang & gelap) tanpa overflow (`scrollWidth === innerWidth`) dan `0` console error.

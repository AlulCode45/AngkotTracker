# Daftar Larangan Visual & Copy (`_shared/antislop-visual.md`)

Dokumen ini adalah filter anti-slop khusus untuk seluruh `DESIGN.md`, `preview.html`, dan antarmuka yang dibangun dari `.agents/design-library/`. Setiap pelanggaran pada daftar ini menyebabkan desain dinyatakan **GAGAL QA** meskipun kode bebas dari syntax error.

---

## 1. Larangan Warna, Cahaya & Permukaan

### A. Gradien Ungu-Biru Default & Bola Cahaya Neon (*Glowing Orbs*)
- **Dilarang**: Latar gelap `#0f172a` / `#050505` yang dipasangi bola blur radial ungu-biru-sian (`#6366f1` → `#a855f7` → `#ec4899`) atau teks judul bergaya `bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500`.
- **Sebelum (Buruk)**:
  ```html
  <h1 class="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Masa Depan Finansial Anda
  </h1>
  ```
- **Sesudah (Benar)**: Gunakan warna tinta solid berkarakter dari token `DESIGN.md` dan bangun hierarki lewat kontras ukuran, bobot font, atau blok bidang warna utuh.
  ```html
  <h1 style="color: var(--text-primary); font-family: var(--font-display);">
    Rekonsiliasi Kas Harian Tanpa Selisih.
  </h1>
  ```

### B. Glassmorphism Tanpa Fungsi Hierarki
- **Dilarang**: Memasang `backdrop-filter: blur()` pada navbar, kartu fitur, sidebar, badge, dan footer secara bersamaan sehingga seluruh halaman tampak mengambang tanpa bidang dasar.
- **Sebelum (Buruk)**: Semua 6 kartu di halaman memakai `bg-white/10 backdrop-blur-lg border-white/20 shadow-xl`.
- **Sesudah (Benar)**: Permukaan kartu utama menggunakan warna solid satu tingkat dari kanvas (`var(--bg-surface)`); efek *translucent blur* dibatasi maksimal pada 1 elemen overlay aktif (misal sticky header atau modal dialog).

### C. Klise Gelombang Ketiga: "Krem-Terakota Kosplay Editorial" Tanpa Alasan
- **Dilarang**: Menggunakan kombinasi krem kekuningan + aksen terakota/karat + garis tipis 1px di semua sisi + label monospace kecil `[01 / FEATURE]` secara otomatis pada proyek yang tidak ada hubungannya dengan kerajinan tanah liat atau majalah cetak.
- **Sebelum (Buruk)**: Situs SaaS logistik memakai latar `#FAF6F0`, tombol `#C85A32`, dan teks `[001 // SYSTEM]` di tiap sudut.
- **Sesudah (Benar)**: Pilih palet yang lahir dari dunia nyata subjeknya (misal: kertas hangat & teal layanan untuk `gov-civic-warm`; batu kapur gading & biru Prussian untuk `gov-institutional-editorial`; hitam instrumen & hijau sinyal presisi untuk `dark-tech-signal`).

---

## 2. Larangan Tata Letak & Struktur Komponen

### A. Deretan Kartu Identik Tiga Kolom dengan Ikon di Kotak Berwarna
- **Dilarang**: Seksi fitur yang terdiri dari 3 kartu kembar (`grid-cols-3`), masing-masing berisi ikon Lucide di dalam kotak bulat berwarna pastel, judul 2 kata ("Cepat & Aman", "Mudah Digunakan", "Dukungan 24/7"), dan paragraf 2 baris yang sama panjangnya.
- **Sebelum (Buruk)**:
  - Kartu 1: `[Ikon Petir]` Cepat & Responsif — Sistem kami memproses data Anda dengan cepat.
  - Kartu 2: `[Ikon Perisai]` Aman & Terpercaya — Keamanan data Anda adalah prioritas kami.
  - Kartu 3: `[Ikon Grafik]` Analitik Mendalam — Pantau perkembangan bisnis secara real-time.
- **Sesudah (Benar)**: Ganti dengan satu artefak fungsional yang membuktikan klaim tersebut (misal: cuplikan tabel interaktif nyata, kalkulator estimasi biaya/waktu, atau tata letak asimetris yang menampilkan 1 alur kerja utama beserta angka faktualnya).

### B. Hero Tanpa Gagasan ("Pill Badge + Judul Tengah 3 Baris + 2 Tombol")
- **Dilarang**: Membuka setiap situs dengan lencana pil kecil di atas (`✨ Memperkenalkan Versi 2.0`), judul rata tengah sepanjang 15 kata, subjudul generik, dan dua tombol ("Mulai Sekarang" / "Pelajari Lebih Lanjut") tanpa elemen bukti atau interaksi.
- **Sebelum (Buruk)**: Hero generik yang jika nama mereknya diganti, bisa dipakai untuk perusahaan apa saja dari klinik gigi sampai bursa kripto.
- **Sesudah (Benar)**:
  - Pada `gov-civic-warm`: langsung buka dengan pencarian layanan, pemilih 4 tugas warga *"Apa yang ingin Anda lakukan hari ini?"*, dan ilustrasi alur loket sebelum formulir.
  - Pada `gov-data-open`: langsung buka dengan temuan angka (*action title*) + sparkline tren yang terhubung ke cerita data bertahap dan tabel CSV.
  - Pada `creative/*`: langsung buka dengan *Signature Moment* arketipe tersebut (misal meja racik kopi/stempel interaktif pada `playful-gamified` atau tipografi kinetik yang merespons guliran pada `kinetic-editorial`).

---

## 3. Larangan Motion & Interaksi

- **Dilarang**:
  1. Animasi *fade-up* (`opacity: 0; translateY(20px)`) yang dipicu secara seragam pada setiap elemen saat di-scroll.
  2. Hover kartu yang hanya bergerak naik `translateY(-4px)` ditambah bayangan tebal tanpa perubahan informasi atau fokus.
  3. Parallax yang menggerakkan teks di atas gambar hingga kontras bacaannya rusak.
- **Sebelum (Buruk)**: Semua `<section>`, `<p>`, dan `<div class="card">` diberi kelas `.animate-fade-up-on-scroll`.
- **Sesudah (Benar)**: Teks bacaan langsung hadir dengan tenang; animasi dikonsentrasikan pada satu koreografi utama per layar sesuai peta motion di `DESIGN.md` dan mematuhi `_shared/motion-system.md`.

---

## 4. Larangan Copywriting & Ikonografi

- **Pola Kalimat Terlarang**:
  - *"Bukan hanya X, tetapi juga Y"* / *"Lebih dari sekadar X"*
  - *"Di era digital yang terus berkembang pesat ini..."*
  - *"Tingkatkan bisnis Anda ke level berikutnya"*
  - Tiga kata sifat otomatis (*"Cepat. Aman. Terpercaya."*)
  - Penggunaan em dash (`—`) berulang-ulang di setiap kalimat sebagai gaya tulisan AI.
- **Kata Klise Terlarang**: *"revolusioner"*, *"seamless"*, *"solusi inovatif"*, *"game-changer"*, *"terdepan"*, *"memberdayakan"*, *"ekosistem holistik"*, *"transformasi tanpa batas"*.
- **Emoji sebagai Ikon UI**: Dilarang memakai emoji (`🚀`, `✨`, `🔥`, `💡`, `✅`, `🔒`) di dalam tombol, judul seksi, kartu fitur, atau navigasi. Gunakan SVG garis/solid yang konsisten atau tipografi murni.

| Kategori | Sebelum (Buruk / AI Slop) | Sesudah (Benar / Spesifik & Jujur) |
| :--- | :--- | :--- |
| **Judul Layanan Publik** | `"✨ Solusi Inovatif Perizinan Digital yang Seamless untuk Warga"` | `"Pengajuan Izin Usaha Mikro dan Pelacakan Berkas"` |
| **Deskripsi UMKM Kuliner** | `"Bukan hanya kedai kopi biasa — kami menghadirkan pengalaman rasa revolusioner di era modern."` | `"Kopi Arabika Gayo sangrai segar setiap Senin dan Kamis. Pesan antar atau kumpulkan 8 stempel untuk 1 cup gratis."` |
| **Tombol CTA** | `"🚀 Mulai Perjalanan Digital Anda Sekarang"` | `"Ajukan Permohonan"` / `"Racik Pesanan"` |

---

## 5. Larangan Data Dummy & Angka Karangan

- **Dilarang**: `John Doe`, `Jane Doe`, `Acme Corp`, `user@example.com`, `Lorem ipsum dolor sit amet`, nomor telepon `123-456-7890`, atau statistik karangan tanpa dasar (`"99,9% Kepuasan Pelanggan"`, `"10.000+ Perusahaan Global"`).
- **Wajib**: Gunakan data contoh realistis berkonteks Indonesia yang masuk akal bagi domain proyeknya, dan beri penanda bahwa data tersebut adalah simulasi/contoh pratinjau.

| Jenis Data | Sebelum (Buruk) | Sesudah (Benar — Contoh Realistis Indonesia) |
| :--- | :--- | :--- |
| **Identitas Pemohon / Pengguna** | `John Doe`, `john@doe.com` | `Rina Wulandari`, `rina.wulandari@contoh.id`, `Kec. Coblong, Kota Bandung` |
| **Instansi / Perusahaan** | `Acme Corporation`, `Globex` | `Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu`, `Koperasi Kopi Gayo Lestari`, `PT Sinar Logistik Nusantara` |
| **Nomor Dokumen & Waktu** | `#12345`, `Yesterday` | `PT-2026-K7M9-4X2P`, `19 November 2026, 14.20 WIB` |
| **Nominal Transaksi** | `$99.99` | `Rp38.000` / `Rp14.500.000` (format `id-ID` konsisten) |

---

## 6. UI Inflation & Slop Budget

Selain warna dan copy, AI sering menghasilkan **UI inflation**: menumpuk pil, kotak berborder, tombol bersaing, bayangan statis, dan latar seksi berselang-seling sehingga halaman tampak sibuk tanpa hierarki.

### Prinsip Pengganti
1. **Hierarki dari Tipografi dan Spasi, Bukan Kotak**: Urutannya adalah ukuran huruf → bobot (`<= 3` bobot) → spasi kelipatan 8px → warna teks → garis pemisah tipis `1px` → wadah (hanya untuk objek diskret).
2. **Satu Tindakan Utama per Layar**: Maksimal 1 tombol terisi (`btn-primary`) dalam satu viewport; tombol outline maksimal 2 di seluruh halaman untuk jalur profesional.
3. **Badge Hanya untuk Status Dinamis**: Dilarang memakai badge/pil untuk kategori statis, slogan di atas H1, label arketipe, atau penghitung dokumen.
4. **Kategori sebagai Judul Grup atau Filter Tab**, bukan tag berulang di tiap item.

### Slop Budget Terukur

| Metrik per Tampilan Satu Halaman | Jalur Profesional | Jalur Kreatif (Default, boleh dilonggarkan di `DESIGN.md` dengan alasan) |
| :--- | :--- | :--- |
| Badge/pil dekoratif | **`0`** | Maks **`3`**, harus bagian dari identitas arketipe (mis. stiker `playful-gamified`) |
| Badge status informatif | Hanya yang berubah | Hanya yang berubah |
| Tombol terisi (primer) | **`1`** per layar | **`1`** per layar |
| Tombol outline | Maks **`2`** seluruh halaman | Bebas jika konsisten |
| Border-radius berbeda | Maks **`3`** (umumnya `2`: kontrol & wadah) | Maks **`4`** |
| Ketebalan border berbeda | Maks **`2`** (`1px`, `2px`) | Maks **`3`** |
| Ukuran font berbeda | Sesuai skala token | Sesuai skala token |
| Bobot huruf berbeda | Maks **`3`** | Maks **`3`** |
| Wadah bersarang (kartu dalam kartu) | **`0`** | **`0`** kecuali disengaja |
| Bayangan pada elemen statis | **`0`** (hanya overlay/dropdown) | Sesuai arketipe (offset shadow di `neo-brutalist-pop` wajib dicatat) |
| Warna latar seksi berselang-seling | **`0`** (satu warna latar halaman) | Sesuai arketipe |

### Tiga Contoh Sebelum / Sesudah (UI Inflation)

1. **Daftar Kartu Menjadi Daftar Baris Terstruktur**:
   - *Sebelum*: 6 kartu identik berborder dan berbayang untuk daftar layanan, masing-masing berisi tag kategori + paragraf + metadata `**Waktu:** 2 Hari • **Biaya:** Rp0` + tombol outline.
   - *Sesudah*: Daftar baris bergrup dengan judul kategori `<h3>`, kolom sejajar (`Layanan | Waktu | Biaya | Tindakan`), `"Gratis"`, dan satu tautan teks `"Lihat syarat"` per baris.
2. **Tag per Item Menjadi Grup atau Tab Filter**:
   - *Sebelum*: Setiap item memakai pil `"Perizinan Usaha"`, ditambah 4 chip pil berkotak di atasnya dengan hitungan hanya di satu chip.
   - *Sesudah*: Tab filter bergaris bawah dengan hitungan seragam di semua tab (`Semua (6)`, `Perizinan Usaha (2)`, dst.) dan kategori menjadi judul grup.
3. **Banjir Tombol Menjadi Satu Primer per Layar**:
   - *Sebelum*: 1 tombol biru di Hero + 6 tombol outline di kartu + 1 tombol biru lebar di Estimator + 1 tombol biru di Formulir.
   - *Sesudah*: 1 tombol terisi per layar (`Cari Layanan` di hero, `Simpan dan Lanjut` di form), 2 tombol outline sekunder (`Periksa Status` dan `Gunakan di Formulir`), sisanya tautan teks atau tombol *ghost*.

---

## 7. Dial Ekspresivitas & Richness Floor (Anti-Steril)

**Prinsip koreksi: ketenangan bukan kekakuan.** *Slop Budget* di Bagian 6 memberi **batas atas** agar antarmuka tidak tenggelam dalam *UI inflation*, sedangkan *Richness Floor* memberi **batas bawah** agar halaman profesional tidak dipangkas habis sampai hampa, kaku, dan menyerupai dokumen teks polos.

### A. Dial Ekspresivitas (0–10)
Setiap `DESIGN.md` wajib menetapkan nilai Dial Ekspresivitas dan alasannya:

| Rentang Dial | Tingkat Karakter | Sasaran Kasus |
| :--- | :--- | :--- |
| **`0–2`** | Murni fungsional | Formulir pajak, pengaduan darurat, otentikasi cepat |
| **`3–5`** | Ramah, jelas, kaya secara fungsional | Portal layanan warga, dasbor data terbuka dasar (**target utama jalur gov**) |
| **`6–7`** | Berkarakter kuat, editorial | Kementerian/pemda bermisi komunikasi kebijakan, laporan tahunan/keberlanjutan |
| **`8–10`** | Ekspresif penuh | Seluruh arketipe **Jalur Kreatif (`creative/*`)** |

**Aturan kenaikan dial**: Ekspresivitas dinaikkan melalui **komposisi, warna fungsional, ilustrasi orisinal, tipografi, dan gerak bermakna** — **tidak pernah** dengan mengorbankan rasio kontras WCAG 2.2 AA, navigasi keyboard, ukuran teks bacaan, atau Core Web Vitals.

### B. Richness Floor (Batas Bawah — Jalur Profesional)
Setiap halaman contoh dan implementasi pada jalur profesional V2 wajib memenuhi minimal ke-7 indikator kekayaan berikut:

| Indikator Kekayaan Minimum | Ambang Bawah (`Richness Floor`) | Cara Pemenuhan yang Sah (Bebas Slop) |
| :--- | :--- | :--- |
| **1. Sistem Visual Non-Teks Bermakna** | `>= 1` per halaman (secara bermakna menjelaskan subjek) | Ilustrasi SVG orisinal bersistem garis jelas, diagram alur layanan, atau arahan foto terarah + placeholder bermakna (dilarang kotak abu kosong atau garis putus-putus) |
| **2. Visualisasi Data Nyata + Alternatif** | `>= 1` grafik data SVG + tabel HTML alternatif | Grafik batang/garis/area dengan label langsung, angka `tabular-nums lining-nums`, anotasi temuan, tabel HTML semantik (`<table>`), serta tombol unduh data bila relevan |
| **3. Pola Komposisi Beragam** | `>= 3` pola tata letak berbeda dalam 1 halaman | Kombinasi misal: pita bidang penuh lebar tertonal, grid asimetris, kolom samping sticky, atau sisipan inset (tidak semua seksi rata kiri satu kolom monoton) |
| **4. Kontras Karakter Tipografi & Data Lining** | `display / body >= 2.0` + `tabular-nums lining-nums` | Pasangan font display vs teks isi berkarakter jelas, self-hosted `WOFF2` dengan metric fallback terancang, serta seluruh angka statistik/uang memakai `lining-nums tabular-nums` |
| **5. Warna Fungsional Multi-Peran** | `>= 4` peran warna aktif | Mencakup primer, sekunder, aksen seri data aman buta warna, netral hangat (`--bg-warm`/`--bg-tint`), dan status terukur kontrasnya |
| **6. Interaksi / Gerak Fungsional + Fallback** | `>= 1` mekanik gerak + `prefers-reduced-motion` | Angka statistik naik saat terlihat, transisi langkah formulir/wizard, bilah progres hidup, atau sorotan TOC sticky — selalu tunduk pada `prefers-reduced-motion: reduce` |
| **7. Microcopy Manusiawi & Spesifik** | Terbukti di judul, label, dan bantuan | Bahasa aktif, sabar, konkret terhadap tugas warga; bebas jargon birokrasi internal maupun slogan pemasaran kosong |

### C. Aturan Pasangan (Richness Floor vs Slop Budget)
1. **Richness floor tidak boleh melanggar Slop budget.** Menambah grafik data atau ilustrasi bukan alasan untuk memasang 10 pil dekoratif, 6 kartu berbayang tebal, atau 4 tombol primer dalam satu layar.
2. **Pita Bidang Penuh Lebar vs Zebra-Striping Mekanis**: Jika jalur profesional memakai `<= 2` pita bidang berwarna hangat/tertonal secara sengaja untuk memisahkan hero dari seksi data/rangkuman, hal itu **wajib didokumentasikan dan beralasan di Bagian 5.5 (`alternatingSectionBgs`) `DESIGN.md`**, bukan dipakai sebagai hiasan mekanis abu-putih berulang pada setiap seksi.

---

## 8. Pemeriksaan Otomatis Dua Arah (`slop-audit.js`)

Jalankan `.agents/design-library/_shared/slop-audit.js` pada setiap `preview.html` dan halaman UI hasil implementasi melalui Chrome DevTools:

```javascript
window.runSlopAudit(ceilingBudget, richnessFloor)
```

Skrip mengembalikan laporan dua arah sekaligus:
- **Batas Atas (*Slop Budget*)**: `checks` & `passedAll` (mencegah badge berlebih, banjir tombol primer, variasi radius/bobot liar, kotak bersarang).
- **Batas Bawah (*Richness Floor*)**: `richnessChecks`, `richnessPassedAll`, & `bidirectionalPassedAll` (memastikan keberadaan visual non-teks bermakna, grafik data + tabel alternatif, `>= 3` pola komposisi, rasio display/body, `tabular-nums lining-nums`, `>= 4` peran warna fungsional, serta deklarasi motion + fallback `prefers-reduced-motion`).


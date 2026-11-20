# Riset GOV V2: Apa yang Membuat Desain Institusional Terasa Hidup Tanpa Kehilangan Wibawa

Ringkasan riset Fase B (`2026-11-19`). Seluruh situs sistem desain, portal layanan publik, dan lisensi font tercatat statusnya di [`../SOURCES.md`](../SOURCES.md).

---

## 1. Pola dari Enam Sistem Desain Pemerintah Resmi

1. **Singapura — GovTech / OGP (`SGDS`, `LifeSG`, `SupportGoWhere`, `GoBusiness`, `Isomer`)**: Menjaga wibawa lewat disiplin token spasi 8px dan orientasi tugas langsung (*task-first*), namun menghadirkan kehangatan melalui ilustrasi humanis yang menjelaskan alur hidup warga (*life stages*), kartu bantuan bergrup, dan bahasa polos aktif (*active voice*) yang menurunkan kecemasan pengguna awam dan lansia.
2. **Inggris — GDS (`GOV.UK Design System`)**: Menolak hiasan kosong, tetapi tidak steril — memakai tipografi khas (*GDS Transport*) dengan skala ukuran lega (`>= 14px` minimum), pertanyaan satu-per-layar yang sabar, dan ilustrasi fungsional hanya ketika terbukti membantu warga mengenali dokumen atau nomor rujukan resmi.
3. **Korea Selatan — MOIS (`KRDS`)**: Memadukan token elevasi/spasi sistematis dengan standar inklusivitas ketat (*KWCAG 2.2* & WCAG 2.2) untuk warga lanjut usia dan penyandang disabilitas, serta memisahkan pola umum antarmuka (*basic patterns*) dari alur layanan warga (*service patterns*).
4. **Australia — DTA & Services (`AgDS`, `my.gov.au`, `Services Australia`)**: Menerapkan prinsip *"Consistent, not uniform"* — kerangka navigasi dan formulir konsisten di seluruh negara, sementara aksen warna, tema instansi, dan ikonografi berlabel teks memberi identitas lembaga yang jelas tanpa foto stok kosmetik.
5. **Selandia Baru — `NZGDS` (`govt.nz`, `digital.govt.nz`)**: Kekuatan berada pada konsistensi pola interaksi antar-lembaga (pencarian terpadu, komponen alamat, formulir multi-langkah) sehingga warga hanya perlu belajar satu kali untuk berurusan dengan kementerian mana pun.
6. **Estonia (`Veera` / Brand Estonia) & AS (`USWDS`)**: `Veera` memberi karakter negara digital lewat warna biru alam yang tegas, netral hangat, dan sistem ilustrasi vektor seragam; `USWDS` membakukan **Public Sans** (`SIL OFL-1.1`), rasio media yang seragam pada koleksi kartu/artikel, dan kesederhanaan grafik data.

---

## 2. Pola Visualisasi Data Publik & Laporan Editorial Aksesibel

Dari analisis **UK ONS Service Manual & Analysis Function**, **Our World in Data (OWID)**, **SingStat**, **ABS (Australia)**, dan **World Bank Open Data**:

- **Judul adalah temuan, bukan label topik**: Memakai *action title* (misal *"Rasio cakupan air bersih naik 14 poin sejak 2022"* bukan *"Grafik Air Bersih 2022–2026"*).
- **Label langsung & teks horizontal `>= 14px`**: Menghapus ketergantungan pada legenda terpisah jauh dari garis/batang; angka nilai dan nama seri ditempel langsung pada ujung batang atau akhir garis, seluruh teks horizontal, memakai `font-variant-numeric: tabular-nums lining-nums`.
- **Aman buta warna & enkoding ganda**: Palet berbasis variasi luminansi (seperti standar ONS), selalu dipasangkan dengan pola garis (*solid vs dashed*), marker bentuk, atau label teks langsung — tidak pernah membedakan arti hanya dengan warna.
- **Tiga sekawan keterbukaan data**: Setiap visualisasi wajib punya **pengalih Grafik / Tabel HTML semantik (`<caption>`, `<th scope>`)** yang setara bagi pembaca layar, **kotak ringkas "Apa artinya bagi saya"** dalam bahasa awam, serta **tombol unduh data mentah (CSV/JSON)** dan catatan metodologi/sumber di dekat grafik.
- **Ritme laporan editorial**: Memakai *sticky Table of Contents* penyorot bab aktif, *pull quote* berisi angka temuan kunci, blok bidang penuh lebar berwarna untuk jeda napas, dan *scrollytelling* yang tetap bisa dilewati serta dikendalikan via keyboard.

---

## 3. Sintesis: Ketenangan Bukan Kekakuan

Hasil audit dua arah [`_shared/slop-audit.js`](../_shared/slop-audit.js) atas karya v1 membuktikan secara terukur mengapa versi lama terasa kaku:
- `corporate-trust` v1 lulus Slop Budget, tetapi **gagal** `tabularLining` (`0/21` angka memakai `lining-nums` sehingga angka serif jatuh ke *old-style*), **gagal** `functionalColors` (`3/4`, palet satu nada tanpa sekunder/aksen data), serta membuka hero dengan diagram tiga kotak tanpa ilustrasi maupun fotografi terarah subjek energinya.
- `gov-portal` v1 lulus Slop Budget, tetapi **gagal** di `5/9` indikator *Richness Floor* (`0` visual bermakna, `0` grafik data, `0` tabel data, hanya `3` peran warna, `0` angka `lining-nums`).

**Desain institusional terasa hidup tanpa kehilangan wibawa ketika memenuhi lima disiplin berikut:**
1. **Kehangatan datang dari netral terkurasi & suara bahasa, bukan dari konfeti UI**: Mengganti putih klinis seragam dengan kanvas hangat atau pita bidang penuh lebar tertonal yang tenang, ditambah kalimat instruksi yang sabar (*"Siapkan dua berkas ini terlebih dahulu"*), menjaga wibawa tanpa terasa dingin.
2. **Satu sistem visual yang menjelaskan dunia nyatanya**: Ilustrasi SVG bersistem garis tunggal atau arahan foto jurnalistik nyata menggantikan kotak placeholder mati — membuktikan subjek layanan sebelum pengguna membaca tiga paragraf.
3. **Data sebagai argumen visual yang jujur**: Grafik SVG berlabel langsung dengan angka *lining tabular* membuat klaim kinerja dan anggaran langsung terbaca mata dan siap diaudit tabel alternatifnya.
4. **Ritme komposisi bervariasi (`>= 3` pola), satu fokus primer per layar**: Memadukan pita hero asimetris, daftar isi/filter sticky, dan blok data penuh lebar memecah kejenuhan guliran tanpa menambah kotak border berlapis (*boxitis*).
5. **Gerak sebagai penunjuk sebab-akibat dengan jalan keluar instan**: Transisi langkah wizard, sorotan bab aktif pada TOC sticky, atau angka statistik naik saat terlihat memandu perhatian secara tenang, sementara `prefers-reduced-motion` langsung melompat ke keadaan akhir.

---

## 4. Pemetaan Awal Menuju Tiga Arah Fase C (Self-Hosted WOFF2 `SIL OFL-1.1`)

| Arah Arketipe (`professional/*`) | Dial | Big Idea | Kandidat Font Display + Body/UI (OFL-1.1) | Bahasa Visual & Komposisi Khas |
| :--- | :--- | :--- | :--- | :--- |
| **`gov-civic-warm`** | `4–5` | Layanan terasa seperti dibantu petugas yang sabar dan jelas | **`Figtree`** / `Plus Jakarta Sans` + **`Public Sans`** / `Inter` | Ilustrasi SVG sistem garis konsisten (alur layanan warga), pemilih *"Apa yang ingin Anda lakukan"*, wizard progres hidup + grafik SLA perizinan |
| **`gov-institutional-editorial`** | `6` | Otoritas publik yang dapat didekati lewat jurnalisme kebijakan | **`Source Serif 4`** / `Newsreader` + **`IBM Plex Sans`** / `Public Sans` | Tata letak editorial berlapis, *photo direction* jurnalistik dengan placeholder terarah, *pull quote* kebijakan, *sticky TOC* dengan penyorot aktif, pilihan `ID/EN` |
| **`gov-data-open`** | `5–6` | Angka publik yang langsung dipahami warga biasa | **`Public Sans`** + **`Inter`** + **`JetBrains Mono`** | Cerita data bertahap ramah keyboard/bisa dilewati, sistem multi-grafik ONS-grade (batang, garis, sparkline, peta ringkas), panel *"Apa artinya bagi saya"*, toggle `Grafik/Tabel` & unduh CSV |

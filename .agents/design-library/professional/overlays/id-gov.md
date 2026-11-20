# Overlay Konteks: Pemerintah Indonesia (`professional/overlays/id-gov.md`)

Lapisan aturan ini **wajib digabungkan** di atas `professional/gov-portal/DESIGN.md` (atau `enterprise-dashboard/DESIGN.md`) setiap kali klien adalah kementerian, lembaga negara, pemerintah provinsi/kabupaten/kota, atau penyelenggara layanan publik resmi Republik Indonesia (`.go.id`).

---

## 1. Bahasa & Tata Tulis Resmi (UU No. 24 Tahun 2009 & EYD V)

- **Kewajiban Bahasa Indonesia**: Sesuai **UU No. 24 Tahun 2009 Pasal 38**, bahasa utama seluruh antarmuka layanan publik wajib menggunakan **Bahasa Indonesia baku** (Ejaan Bahasa Indonesia yang Disempurnakan Edisi V).
- **Padanan Istilah Antarmuka**:
  - Gunakan *Masuk* (bukan *Login*), *Keluar* (bukan *Logout*), *Beranda* (bukan *Home*), *Cari Layanan* (bukan *Search*), *Unduh Bukti* (bukan *Download Receipt*), *Unggah Dokumen* (bukan *Upload*), *Tanya Jawab* (bukan *FAQ*).
- **Format Lokal Resmi**:
  - Tanggal: `19 November 2026` (hindari format `11/19/2026`).
  - Waktu: format 24 jam dengan zona waktu eksplisit (`14.30 WIB` / `WITA` / `WIT`).
  - Mata uang & tarif PNBP/Retribusi: `Rp0 (Gratis)` atau `Rp150.000` (titik sebagai pemisah ribuan, tanpa spasi setelah `Rp`).

---

## 2. Identitas Instansi, Domain `.go.id` & Aturan Lambang Negara

1. **Strip Verifikasi Situs Resmi (*Masthead `.go.id`*)**:
   - Hanya boleh diaktifkan pada domain resmi pemerintah (`.go.id`).
   - Teks standar: *"Situs web resmi milik [Nama Instansi Pemerintah]."* dengan tombol *"Cara mengenali situs resmi"* yang ketika dibuka menjelaskan:
     1. Alamat domain resmi pemerintah Indonesia diakhiri dengan **`.go.id`**.
     2. Sambungan terenkripsi menggunakan **`https://`** untuk melindungi data pemohon.
2. **Aturan Penggunaan Lambang Negara (UU No. 24 Tahun 2009 Pasal 51–57)**:
   - **Dilarang keras** menggunakan Lambang Negara Garuda Pancasila pada situs non-pemerintah, portal komersial, atau prototipe umum yang bukan milik penyelenggara negara yang berhak menurut undang-undang.
   - Pada prototipe atau `preview.html` di perpustakaan ini, gunakan **monogram tipografi atau ikon gedung geometris netral** sebagai penanda tempat (*placeholder* aman), dan baru ganti dengan aset vektor resmi instansi setelah ada mandat tertulis dari instansi terkait.

---

## 3. Kepatuhan Pelindungan Data Pribadi (UU No. 27 Tahun 2022 / UU PDP)

Setiap formulir layanan publik wajib menerapkan empat kontrol UI berikut:

1. **Minimisasi Data pada Formulir**:
   - Hanya minta field yang benar-benar menjadi syarat hukum layanan tersebut. Jangan meminta agama, golongan darah, atau nama ibu kandung jika tidak diwajibkan oleh regulasi layanan.
2. **Penanda Data Pribadi Spesifik vs Umum**:
   - Untuk input NIK (16 digit), dokumen KTP/KK, data kesehatan, atau data keuangan, tampilkan keterangan tepat di bawah label: *"Digunakan semata-mata untuk verifikasi permohonan [Nama Layanan] sesuai ketentuan pelindungan data pribadi."*
3. **Persetujuan Eksplisit (*Explicit Consent*)**:
   - Kotak centang persetujuan pemrosesan data pribadi **dilarang tercentang otomatis (*pre-checked*)**.
   - Teks persetujuan wajib menyebut tujuan pemrosesan, masa retensi arsip, dan tautan ke Pemberitahuan Privasi instansi.
4. **Pelacakan Publik Tanpa Data Pribadi (Zero PII) & Dua Faktor**:
   - Pelacakan status permohonan tanpa login **dilarang keras** menampilkan nama pemohon (sekalipun disamarkan seperti `R***`), NIK, alamat, atau nomor telepon. Tampilkan hanya status, tahap saat ini, waktu pembaruan, dan estimasi selesai.
   - Wajibkan kombinasi **nomor registrasi non-sekuensial** (minimal 8 karakter alfanumerik acak, misal `PT-2026-K7M9-4X2P`) dan **faktor kedua** (misal 4 digit akhir nomor ponsel pemohon), disertai *rate limiting* dan satu pesan galat generik untuk mencegah enumerasi.
   - Di antarmuka pengguna, hindari klaim legalistik ("sesuai UU PDP"); jelaskan secara konkret data apa yang dienkripsi dan tidak ditampilkan di pelacakan publik.

---

## 4. Keselarasan SPBE (Perpres No. 95 Tahun 2018) & Aksesibilitas

- **Keterpaduan Layanan**: Sediakan informasi syarat dokumen, dasar hukum layanan, standar waktu penyelesaian (SLA hari kerja), biaya/tarif resmi, dan kanal pengaduan (misal tautan ke SP4N-LAPOR! atau kontak layanan instansi) secara terbuka sebelum pengguna diminta login.
- **Standar Aksesibilitas**: Wajib memenuhi **WCAG 2.2 Level AA** (`_shared/accessibility-baseline.md`), bekerja tanpa CDN eksternal (*self-hosted fonts & assets*), dan tetap dapat diakses pada jaringan seluler 3G/4G daerah dengan anggaran bobot awal `<= 350 KB`.

---

## 5. Catatan Status Verifikasi Regulasi

- **Terverifikasi**: UU No. 27 Tahun 2022 (UU PDP), Perpres No. 95 Tahun 2018 (SPBE), UU No. 24 Tahun 2009 (Bahasa & Lambang Negara).
- **Tidak Diverifikasi**: Belum terdapat satu paket kode/token CSS desain tunggal nasional pemerintah RI yang diwajibkan secara seragam lintas seluruh kementerian/pemda setara `@govtechsg/sgds`; oleh karena itu token visual mengikuti `gov-portal/DESIGN.md` dan disesuaikan dengan warna identitas resmi instansi klien.

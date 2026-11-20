# Workspace Rule: Anti-Slop Policy (Menyeluruh)

Aturan ini berlaku untuk seluruh keluaran agent: kode, teks UI/copywriting, data contoh, desain visual, dokumen, dan laporan akhir. Plugin `antislop` tetap aktif sebagai referensi tambahan, sedangkan kebijakan ini menjadi standar wajib utama.

---

## 1. Kategori Kode

- Komentar hanya menjelaskan **mengapa** (alasan bisnis, batas sistem eksternal, mitigasi race condition), tidak pernah **apa** yang sudah jelas dari nama fungsi/variabel.
- Dilarang banner komentar dekoratif (`// ========`, `# --------`) dan narasi langkah trivial (`// Step 1: ...`).
- Dilarang abstraksi spekulatif (wrapper/interface satu kali pakai di luar mode `SOLID`).

### Contoh Sebelum / Sesudah (Kode)
1. **Komentar "apa"**:
   - Sebelum: `// Simpan user ke database` lalu `$user->save();`
   - Sesudah: `$user->save();`
2. **Banner dekoratif**:
   - Sebelum: `// ============== VALIDATION ==============`
   - Sesudah: (hapus banner; pisahkan ke FormRequest atau fungsi bernama jelas).
3. **Komentar "mengapa" yang valid**:
   - Sebelum: `// Lock key selama 10 detik`
   - Sesudah: `// Webhook Midtrans dapat mengirim event ganda saat timeout; lock atomik mencegah pemrosesan dua kali.`

---

## 2. Kategori Copy / Teks UI

- **Pola terlarang**: *"bukan hanya X, tetapi juga Y"*, *"di era digital ini"*, *"tingkatkan X ke level berikutnya"*, tiga-serangkai otomatis (*cepat, aman, dan andal* berulang-ulang), dan em dash (`—`) berlebihan.
- **Kata terlarang**: *"revolusioner"*, *"seamless"*, *"solusi inovatif"*, *"game-changer"*, *"memberdayakan"*, *"ekosistem holistik"*.
- **Ikon**: dilarang memakai emoji dekoratif (`🚀`, `✨`, `🔥`) sebagai pengganti ikon UI atau penanda judul.

### Contoh Sebelum / Sesudah (Copy/UI)
1. **Hero copy**:
   - Sebelum: `"Bukan hanya aplikasi arsip, tetapi juga solusi inovatif yang seamless di era digital ini 🚀."`
   - Sesudah: `"Sistem pencatatan surat masuk dan disposisi digital untuk unit tata usaha."`
2. **CTA & Label**:
   - Sebelum: `"✨ Mulai Transformasi Anda Sekarang — Cepat, Mudah, Andal!"`
   - Sesudah: `"Buat Pengajuan"`
3. **Empty state**:
   - Sebelum: `"Ups! Belum ada keajaiban di sini saat ini."`
   - Sesudah: `"Belum ada berkas permohonan. Klik Tambah Berkas untuk membuat data baru."`

---

## 3. Kategori Data Contoh / Dummy

- Dilarang memakai `John Doe`, `Jane Doe`, `Acme Corp`, `Lorem ipsum`, atau angka statistik karangan (`99,9% pengguna puas`).
- Gunakan nama, instansi, dan angka realistis berkonteks Indonesia serta tandai jelas sebagai contoh pada dokumentasi/seeder.

### Contoh Sebelum / Sesudah (Data Dummy)
1. **Nama & email**:
   - Sebelum: `John Doe (john.doe@example.com)`
   - Sesudah: `Siti Rahmawati (siti.rahmawati@contoh.id)` *(contoh seeder)*
2. **Organisasi**:
   - Sebelum: `Acme Corp Inc.`
   - Sesudah: `PT Nusantara Logistik` atau `Dinas Pendidikan Kota Bandung` *(contoh)*
3. **Teks paragraf & metrik**:
   - Sebelum: `Lorem ipsum dolor sit amet...` / `Dipercaya 10.000+ tim global`
   - Sesudah: `Permohonan izin kegiatan lapangan tanggal 24 November 2026.` / gunakan angka terverifikasi atau hapus klaim metrik.

---

## 4. Kategori Desain Visual

- Dilarang gradien ungu-biru default, tiga kartu identik berderet tanpa hierarki, ikon generik dalam kotak berwarna sebagai pengganti konten, dan layout template seragam.
- Setiap desain UI wajib memiliki **satu keputusan desain yang disengaja** dan tercatat di `DESIGN.md` (misal: skala tipografi editorial, batas grid tegas, atau kepadatan tabel tinggi).

### Contoh Sebelum / Sesudah (Visual)
1. **Latar & aksen**:
   - Sebelum: Background `#0f172a` dengan orb blur ungu-biru dan kartu `bg-white/5` seragam.
   - Sesudah: Mengikuti palet `DESIGN.md` (misal `#FBFBFA` + teks `#111111` + 1 warna aksen `#1F6C9F` untuk `gov-enterprise`).
2. **Grid fitur**:
   - Sebelum: 3 kartu sama ukuran berisi ikon Lucide di kotak ungu + judul 2 kata + 2 baris teks generik.
   - Sesudah: Tata letak asimetris atau tabel/daftar terstruktur dengan konten nyata (cuplikan alur kerja atau data contoh realistis).
3. **Penanda status**:
   - Sebelum: Dot berwarna saja atau emoji (`🟢 Aktif`).
   - Sesudah: Badge teks dengan kontras >= 4.5:1 (`Disetujui`, `Menunggu Verifikasi`).

---

## 5. Kategori Dokumen & Laporan Agent

- Tanpa basa-basi pembuka/penutup (*"Tentu! Dengan senang hati saya bantu..."*, *"Semoga bermanfaat!"*).
- Tanpa mengulang isi file yang baru saja ditulis atau mengklaim hasil yang belum dijalankan.

### Contoh Sebelum / Sesudah (Dokumen & Laporan)
1. **Pembuka laporan**:
   - Sebelum: `"Tentu! Berikut adalah hasil pengerjaan lengkap yang sudah saya optimalkan secara menyeluruh untuk Anda:"`
   - Sesudah: `"Perubahan modul invoice selesai pada branch feat/invoice."`
2. **Pelaporan tes**:
   - Sebelum: `"Semua unit test sudah pasti berjalan lancar tanpa masalah."`
   - Sesudah: `"`php artisan test --filter=InvoiceTest` lulus (4 passed, 0 failed). Audit Playwright belum dijalankan."`
3. **Penutup**:
   - Sebelum: `"Silakan beri tahu jika ada hal lain yang ingin Anda diskusikan lebih lanjut!"`
   - Sesudah: `"Langkah berikutnya: tinjau migrasi di database/migrations/ dan konfirmasi jika siap di-merge."`

---

## 6. Checklist Anti-Slop (Wajib Sebelum Selesai)

- [ ] Tidak ada komentar yang menjelaskan "apa" atau banner pemisah dekoratif.
- [ ] Tidak ada kata/pola copy terlarang maupun emoji dekoratif pada UI/dokumen.
- [ ] Tidak ada `John Doe`, `Lorem ipsum`, atau angka statistik tanpa sumber.
- [ ] Desain visual mengikuti satu keputusan di `DESIGN.md`, bukan template gradien ungu-biru default.
- [ ] Laporan akhir ringkas, tanpa basa-basi, dan jujur memisahkan hasil terverifikasi vs tidak terverifikasi.

# Playbook Gamifikasi Beretika (`_shared/gamification-playbook.md`)

Gamifikasi di perpustakaan ini dirancang untuk **memperjelas kemajuan pengguna, merayakan konsistensi, dan membantu usaha nyata (terutama UMKM, edukasi, dan komunitas) membangun loyalitas jujur** — bukan untuk memanipulasi psikologi pengguna atau meniru mesin judi.

---

## 1. Katalog Mekanik & Kecocokan Bisnis

| Mekanik | Cara Kerja Teknis | Cocok Untuk | Dilarang Untuk |
| :--- | :--- | :--- | :--- |
| **1. Kartu Stempel Digital (*Stamp Card*)** | Kumpulkan $N$ stempel pasti (misal 8 transaksi/kunjungan) untuk 1 hadiah deterministik yang diketahui di awal. | UMKM kuliner, kedai kopi, barbershop, cucian mobil, retail harian (`playful-gamified`, `warm-craft-nusantara`). | Layanan pemerintah, kesehatan darurat, perbankan inti. |
| **2. Pelacak Progres & Milestone (*Progress Bar*)** | Menunjukkan persentase/langkah menuju target nyata (misal kelengkapan profil, target belajar, bebas ongkir). | Edukasi, onboarding SaaS, e-commerce, wizard kesiapan berkas layanan (`gov-civic-warm` hanya sebagai pelacak syarat faktual). | Menahan pengguna keluar dari alur pembatalan/penutupan akun. |
| **3. Lencana Eksplorasi (*Discovery Badges*)** | Lencana visual yang terbuka ketika pengguna menyelesaikan aksi bermakna (misal mencoba 3 varian kopi Nusantara atau menamatkan modul). | Komunitas, kursus online, katalog produk lokal, wisata/kuliner. | Dashboard kerja internal yang menuntut kecepatan entri data tinggi. |
| **4. Runtutan Konsistensi (*Humane Streak*)** | Menghitung hari/minggu aktif berturut-turut, **wajib dilengkapi fitur Jeda/Istirahat (*Streak Freeze*) gratis** agar tidak menimbulkan kecemasan. | Aplikasi belajar, olahraga, kebiasaan membaca, komunitas kreator. | Aplikasi belanja/keuangan (mendorong belanja impulsif harian). |
| **5. Kuis Penemuan (*Product Matcher Quiz*)** | 3–4 pertanyaan interaktif singkat yang merekomendasikan produk/layanan paling cocok beserta alasannya. | UMKM kopi/parfum/skincare/kuliner, agensi kreatif, pemilihan paket SaaS. | Formulir pelaporan resmi pemerintah. |
| **6. Peracik / Konfigurator Visual (*Custom Builder*)** | Pengguna merakit sendiri pesanan/paket secara visual (pilih bahan, warna, kemasan) dengan pratinjau langsung dan harga transparan. | Kuliner kustom, kriya/kerajinan tangan, cetak/merchandise, kado. | Layanan dengan tarif/prosedur baku yang tidak boleh diubah. |
| **7. Mini-Game Keterampilan Ringan (*Skill Micro-Game*)** | Permainan singkat 10–20 detik berbasis ketepatan/pengetahuan (misal tebak asal biji kopi atau tangkap bahan segar) untuk membuka kode diskon tetap. | Kampanye musiman UMKM, peluncuran produk, booth event (`playful-gamified`, `neo-brutalist-pop`). | Semua proyek `professional/*`. |
| **8. Tantangan Komunitas (*Collective Goal*)** | Target bersama yang transparan (misal: "1.000 cup bulan ini = donasi 100 bibit pohon kopi di Gayo"). | Merek berdampak sosial, koperasi/UMKM lokal, komunitas. | Klaim donasi/angka palsu yang tidak dapat diaudit. |

---

## 2. Enam Aturan Etika Wajib (Tidak Bisa Ditawar)

1. **Dilarang Mekanik Menyerupai Judi (*Zero Gambling Mechanics*)**:
   - Dilarang keras membuat *loot box* berbayar, *gacha* berbayar, atau roda keberuntungan (*spin-the-wheel*) yang menggunakan probabilitas semu/manipulatif (di mana tampilan visual tampak 50:50 padahal peluang hadiah utama 0,01%).
   - Seluruh hadiah pada sistem loyalitas UMKM wajib bersifat **deterministik** (syarat jelas → hadiah pasti).
2. **Kepatuhan Hukum Promosi & Undian di Indonesia (`PERLU VERIFIKASI HUKUM KLIEN`)**:
   - Di Indonesia, undian berhadiah berbasis peluang acak diatur oleh **UU No. 22 Tahun 1954 tentang Undian** dan ketentuan perizinan Kementerian Sosial.
   - Setiap kali klien meminta fitur hadiah acak/undian, agent **wajib** memberi catatan tertulis bahwa mekanik undian acak memerlukan verifikasi izin resmi oleh klien, dan merekomendasikan mekanik hadiah langsung berbasis pencapaian pasti (*milestone reward*) sebagai alternatif yang aman secara hukum.
3. **Tanpa *Dark Patterns* & Tanpa *Confirmshaming***:
   - Dilarang memakai timer hitung mundur palsu yang me-reset saat halaman dimuat ulang.
   - Dilarang menulis tombol penolakan yang merendahkan pengguna (contoh terlarang: *"Tidak, saya tidak suka hemat uang"*; gunakan: *"Lewati untuk sekarang"*).
4. **Minimisasi Data Pribadi (Kepatuhan UU PDP No. 27 Tahun 2022)**:
   - Jangan memaksa pengguna menyerahkan NIK, alamat rumah lengkap, atau tanggal lahir hanya untuk mencoba kuis, konfigurator, atau simulasi kartu stempel di web.
   - Simpan progres awal secara lokal di browser (`localStorage`) dan hanya minta nomor WhatsApp/email dengan persetujuan eksplisit ketika pengguna benar-benar ingin menukarkan voucher atau menyimpan kartu lintas perangkat.
5. **Selalu Ada Jalan Keluar (*Skip & Opt-Out*)**:
   - Setiap kuis, mini-game, atau animasi perayaan (*confetti/badge unlock*) wajib memiliki tombol **"Lewati langsung ke menu/katalog"** yang terlihat jelas dan dapat diakses lewat tombol `Escape`.
6. **Ramah Aksesibilitas**:
   - Permainan atau interaksi seret-lepas (*drag-and-drop*) pada konfigurator wajib menyediakan tombol klik/keyboard setara (`+ Pilih Bahan`) agar pengguna layar sentuh dengan keterbatasan motorik dan pengguna keyboard tetap mendapatkan manfaat dan diskon yang sama.

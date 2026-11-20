# Signature Design DNA (`SIGNATURE.md`)

Tujuh komitmen ini adalah benang merah yang menyatukan seluruh karya desain di perpustakaan ini — baik saat membangun portal layanan publik yang hening dan presisi (`professional/*`) maupun saat merancang pengalaman web interaktif berkelas penghargaan (`creative/*`). Gaya visual wajib berubah mengikuti konteks klien, tetapi ketujuh prinsip ini tidak pernah ditawar.

---

## 1. Sistem Sebelum Hiasan
Setiap keputusan visual wajib berakar pada alasan fungsional dan terikat pada token semantik. Tidak ada warna hex lepas, margin ganjil tanpa ritme, atau bayangan dekoratif tanpa peran elevasi. Jika sebuah elemen dihapus dan halaman tidak kehilangan makna, hierarki, atau kejelasan status, elemen tersebut tidak seharusnya ada.

- **Indikator Lulus**: Seluruh warna, ukuran teks, jarak, radius, dan durasi animasi di komponen merujuk ke variabel CSS (`var(--*)`) yang terdokumentasi di `DESIGN.md`.

## 2. Tipografi sebagai Tulang Punggung
Tujuh puluh persen karakter dan kejelasan antarmuka ditentukan oleh pemilihan huruf, kontras skala, jarak baris (*leading*), kerapatan huruf (*tracking*), dan lebar kolom baca (`60ch–72ch` untuk teks panjang). Struktur halaman harus tetap terbaca dan berwibawa bahkan ketika seluruh warna dan gambar dimatikan.

- **Indikator Lulus**: Pasangan font memiliki alasan karakter yang tertulis, angka tabel/data selalu memakai `tabular-nums`, dan judul utama tidak pernah pecah menjadi lebih dari tiga baris yang canggung di mobile maupun desktop.

## 3. Satu Signature Moment per Project
Setiap proyek wajib memiliki tepat **satu momen interaksi atau visual khas** yang lahir dari inti produk/merek klien — bukan efek tempelan yang bisa dipindahkan ke situs lain. Pada jalur profesional, momen ini berupa kemudahan fungsional yang cerdas (misal: estimator syarat & waktu layanan interaktif instan); pada jalur kreatif, berupa koreografi visual atau mekanik interaktif yang membuat pengunjung berhenti dan mengingatnya.

- **Indikator Lulus**: Momen tersebut dapat dijelaskan dalam satu kalimat yang mengaitkan bisnis klien dengan mekanik antarmuka, dan mustahil ditemukan di template pasaran.

## 4. Motion Punya Koreografi dan Tujuan
Animasi bukan taburan efek di setiap elemen yang masuk viewport. Setiap gerakan wajib menjawab salah satu dari tiga tujuan: **memandu fokus mata**, **memberi umpan balik aksi**, atau **menjelaskan hubungan spasial antar-state**. Hanya boleh ada satu gerakan utama yang memimpin di satu layar pada satu waktu, dengan urutan (*stagger*), tempo, dan redaman (*easing*) yang konsisten.

- **Indikator Lulus**: Tidak ada efek *fade-up* seragam di semua blok; seluruh animasi tetap menyajikan konten utuh ketika `@media (prefers-reduced-motion: reduce)` aktif.

## 5. Konten Nyata Dulu
Desain dibangun dari kata-kata, angka, dan skenario nyata dari dunia subjeknya — tidak pernah dari `Lorem ipsum`, `John Doe`, atau kartu tiga kolom berisi teks pengisi. Ketebalan kalimat, panjang nama instansi/produk Indonesia, dan variasi data ekstrem menentukan bentuk komponen sejak awal.

- **Indikator Lulus**: Seluruh contoh komponen dan halaman `preview.html` berisi teks dan data realistis berkonteks nyata yang bebas klise AI.

## 6. Aksesibel dan Cepat sebagai Syarat, Bukan Bonus
Keindahan visual yang menghalangi pengguna keyboard, gagal memenuhi kontras WCAG 2.2 Level AA, atau membuat halaman membeku di ponsel kelas menengah adalah kegagalan desain. Eksperimen visual terberat sekalipun wajib memuat secara progresif, menjaga kestabilan tata letak (`CLS = 0`), dan menyediakan jalur baca yang setara.

- **Indikator Lulus**: Lolos audit aksesibilitas (axe/Lighthouse), seluruh kontrol interaktif memiliki `:focus-visible` yang tegas dan dapat dioperasikan penuh via keyboard, serta mematuhi anggaran performa jalur masing-masing.

## 7. Lokal Tanpa Klise
Konteks Indonesia — baik untuk pemerintahan, korporasi, maupun UMKM Nusantara — ditangani dengan riset budaya dan ketepatan bahasa, bukan tempelan ornamen generik atau terjemahan harfiah yang kaku. Jika mengangkat motif tradisional atau narasi lokal, sebutkan asal-usul dan filosofinya secara jujur, lalu terjemahkan ke dalam tata letak modern yang bersih dan menghormati aslinya.

- **Indikator Lulus**: Bahasa Indonesia mengalir alami sesuai profil (baku EYD V untuk pemerintah/institusi; berkarakter hangat dan lugas untuk merek/UMKM), format Rupiah/tanggal akurat, dan ornamen lokal memiliki atribusi budaya yang spesifik.

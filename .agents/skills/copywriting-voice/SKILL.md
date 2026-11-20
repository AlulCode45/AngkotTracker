---
name: copywriting-voice
description: Panduan nada bicara (tone) per profil (gov-enterprise vs startup-creative), daftar kata dan pola kalimat terlarang anti-slop, serta aturan data contoh realistis Indonesia. Aktifkan saat menulis teks UI, landing page, microcopy, pesan error, atau konten seeder/dummy. JANGAN aktifkan untuk kode backend murni tanpa teks pengguna.
---

# Copywriting Voice & Realistic Content

## Langkah Konkret
1. **Sesuaikan Tone dengan `.agents/project.md`**:
   - **`gov-enterprise`**: lugas, baku (EYD V), netral, fokus kejelasan prosedur ("Masukkan NIK 16 digit", "Dokumen berhasil diarsipkan").
   - **`startup-creative`**: ringkas, aktif, punya karakter merek yang spesifik tanpa hiperbola kosong.
2. **Pola & Kata Terlarang (Wajib Dihindari)**:
   - Pola: *"bukan hanya X, tetapi juga Y"*, *"di era digital ini"*, *"tingkatkan produktivitas Anda ke level berikutnya"*, daftar tiga-serangkai otomatis tanpa fakta, dan em dash (`—`) berlebihan.
   - Kata klise: *"revolusioner"*, *"seamless"*, *"solusi inovatif"*, *"game-changer"*, *"terdepan"*, *"memberdayakan"*, *"ekosistem holistik"*.
3. **Aturan Data Contoh / Dummy**:
   - Dilarang: `John Doe`, `Jane Doe`, `Acme Corp`, `Lorem ipsum`, angka statistik karangan (`99.9% kepuasan pengguna` tanpa sumber).
   - Gunakan nama, instansi, alamat, dan nominal realistis berkonteks Indonesia (misal: `Siti Rahmawati`, `Dinas Komunikasi dan Informatika`, `PT Nusantara Logistik`, `Rp245.000`) dan tandai jelas sebagai contoh pada dokumentasi/seeder.

## Contoh Benar vs Salah
- **Salah**: "Bukan hanya platform arsip biasa, tetapi juga solusi inovatif yang seamless untuk memberdayakan transformasi digital instansi Anda di era modern ini."
- **Benar**: "Sistem pencatatan surat masuk dan disposisi digital untuk mempercepat penelusuran dokumen antarbagian."

## Checklist Keluaran
- [ ] Tone teks selaras dengan profil di `.agents/project.md`.
- [ ] Bebas seluruh pola dan kata terlarang di daftar anti-slop.
- [ ] Tidak ada `John Doe`, `Lorem ipsum`, atau angka statistik karangan.

---
name: i18n-id-localization
description: Standar lokalisasi Bahasa Indonesia yang natural (bukan terjemahan kaku), format tanggal/waktu/mata uang/angka Indonesia, serta struktur file bahasa yang rapi. Aktifkan saat menyiapkan multi-bahasa, menerjemahkan UI/pesan validasi, atau memformat tanggal dan Rupiah. JANGAN aktifkan untuk proyek internal berbahasa Inggris penuh tanpa kebutuhan lokalisasi.
---

# Lokalisasi Bahasa Indonesia (`i18n-id-localization`)

## Langkah Konkret
1. **Terjemahan Natural, Bukan Kata-per-Kata**:
   - Gunakan istilah antarmuka yang lazim dipakai pengguna Indonesia (misal: "Simpan Perubahan", "Kata Sandi", "Keluar", "Gagal memuat data"), hindari terjemahan kaku seperti "Kirimkan Formulir Anda Sekarang" atau "Tidak Ditemukan Hasil Apapun".
   - Sesuaikan tingkat formalitas dengan profil di `.agents/project.md` (`gov-enterprise`: baku EYD V; `startup-creative`: natural-profesional).
2. **Format Tanggal, Waktu, Angka, dan Mata Uang**:
   - Tanggal pendek: `19/11/2026`; tanggal panjang: `19 November 2026`.
   - Waktu: format 24 jam (`14.30 WIB` / `WITA` / `WIT` sesuai konteks).
   - Angka: pemisah ribuan titik (`.`), desimal koma (`,`), contoh `1.250.000,50`.
   - Mata uang: `Rp1.500.000` (tanpa spasi setelah `Rp` menurut EYD V, atau gunakan `Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })`).
3. **Struktur File Bahasa**:
   - Laravel: `lang/id/*.php` atau `lang/id.json` (konsisten satu format per project).
   - Next.js / React: `messages/id.json` & `messages/en.json` dengan key terstruktur per domain (`auth.login.title`, `validation.required`).
   - Dilarang mencampur string hardcoded Indonesia dan Inggris di satu halaman yang sama tanpa alasan domain.

## Contoh Benar vs Salah
- **Salah**: `"Submit your application"` diterjemahkan `"Kirimkan aplikasi Anda"`, harga `IDR 1,500,000.00`, tanggal `11/19/2026`.
- **Benar**: `"Kirim Pengajuan"`, harga `Rp1.500.000`, tanggal `19 November 2026`.

## Checklist Keluaran
- [ ] Seluruh label UI, pesan error, dan empty state menggunakan Bahasa Indonesia natural sesuai profil.
- [ ] Format tanggal, angka, dan Rupiah memakai konvensi `id-ID`.
- [ ] Key terjemahan tersimpan di file bahasa terstruktur, tidak hardcoded acak.

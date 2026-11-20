---
name: security-review
description: Menjalankan audit keamanan berbasis OWASP Top 10/ASVS, audit dependensi, pemindaian secret, otorisasi, rate limit, header keamanan, dan privasi data (UU PDP) sebelum fitur dinyatakan selesai. Aktifkan sebelum rilis, setelah menambah endpoint/auth/upload/query, atau pada profil gov-enterprise. JANGAN aktifkan untuk perubahan styling CSS murni tanpa input/API.
---

# Security Review

## Langkah Konkret
1. **Audit Dependensi** (jalankan yang relevan dengan stack):
   - PHP/Laravel: `composer audit`
   - Node.js: `npm audit --omit=dev` (atau `pnpm audit`)
   - Jika gagal dijalankan (misal offline), catat sebagai **tidak diverifikasi** beserta alasannya.
2. **Pemindaian Secret & Env**:
   - Pastikan `.env` tidak di-commit dan `.env.example` hanya berisi placeholder.
   - Cari API key, password, token, atau private key yang tertinggal di kode/test/seeder.
3. **Checklist OWASP Top 10 / ASVS**:
   - **Auth & Access Control**: semua endpoint mutasi/data privat memakai middleware auth + Policy/Gate (cegah IDOR).
   - **Input & Query**: seluruh input divalidasi (FormRequest/Zod/schema); tidak ada konkatenasi SQL mentah.
   - **XSS & CSRF**: tidak ada render HTML mentah tanpa sanitasi; CSRF aktif pada form berbasis sesi/cookie.
   - **Upload File**: validasi MIME/ekstensi di server, batas ukuran, simpan di luar webroot publik atau pakai nama acak.
   - **Rate Limiting**: terapkan batas request pada login, OTP, reset password, dan endpoint publik.
   - **Security Headers**: verifikasi `X-Content-Type-Options: nosniff`, `X-Frame-Options` / `frame-ancestors`, `Referrer-Policy`, HSTS di produksi.
4. **Privasi Data (UU PDP — wajib untuk `gov-enterprise`, dianjurkan untuk `startup-creative`)**:
   - Data pribadi sensitif (NIK, nomor telepon, alamat, dokumen identitas) tidak muncul di log aplikasi, error trace, atau response API yang tidak berhak.
   - Terapkan enkripsi kolom/at-rest untuk data sensitif bila dipersyaratkan.

## Contoh Benar vs Salah
- **Salah**: `Route::delete('/users/{id}', ...)` hanya memakai middleware `auth` tanpa memeriksa apakah user adalah admin atau pemilik akun.
- **Benar**: Memeriksa `$this->authorize('delete', $user)` di controller/policy dan mengembalikan `403 Forbidden` jika tidak berhak.

## Checklist Keluaran
- [ ] Hasil `composer audit` / `npm audit` dilampirkan (atau ditulis tidak diverifikasi + alasannya).
- [ ] Tidak ada secret di diff atau `.env.example`.
- [ ] Authz (anti-IDOR), validasi input, rate limit, dan privasi data (UU PDP) terperiksa.

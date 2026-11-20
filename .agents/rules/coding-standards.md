# Workspace Rule: Coding Standards & Security Guidelines

Aturan standar pengembangan kode pada workspace ini. Gunakan bagian yang sesuai dengan stack project di `.agents/project.md`.

## 1. Prinsip Umum Lintas Stack
- **Type Safety**: Gunakan strict typing sesuai bahasa (`declare(strict_types=1)` / typed properties pada PHP 8.2+; `strict: true` pada TypeScript).
- **Konvensi Repo**: Ikuti konvensi penamaan, linter, dan formatter yang sudah terpasang di project sebelum menambah aturan baru.
- **Hindari Abstraksi Spekulatif**: Jangan membuat wrapper, factory, atau interface tambahan tanpa kebutuhan nyata atau pilihan mode `SOLID`.

## 2. Arsitektur Backend (Laravel)
- Baca mode arsitektur (`SOLID` atau `MVC`) dari `.agents/project.md` (ditetapkan sekali per project).
- **Jika mode `SOLID` aktif**:
  - Pisahkan validasi ke FormRequest, manipulasi payload/file ke Service, dan kueri ke Repository.
  - Controller hanya bergantung pada Domain Interface via constructor promotion.
  - Dilarang menulis kueri Eloquent langsung (`Model::where(...)`) di dalam Controller.
- **Jika mode `MVC` aktif**:
  - Controller boleh memanggil Model/Eloquent langsung untuk CRUD sederhana; validasi input tetap wajib di FormRequest.

## 3. Keamanan, Kredensial & Anti-Exploit
- **Proteksi Password & Kredensial Lokal**:
  - Dilarang menyematkan, menyalin, atau membagikan password lokal pengguna (DB root, admin lokal, SSH key, token pribadi) ke kode, seeder, test, atau `.env.example`.
  - Gunakan placeholder generik pada seeder/factory (`Hash::make('password')` atau Faker).
  - Setiap penambahan atau perubahan key di `.env` wajib diikuti pembaruan `.env.example` dengan nilai kosong atau placeholder aman.
  - Pastikan `.env` ada di `.gitignore` dan tidak pernah di-commit.
- **SQL Injection**: Gunakan query binding, Eloquent builder, atau parameterized query. Dilarang konkatenasi string mentah.
- **IDOR Protection**: Verifikasi kepemilikan atau hak akses resource pada setiap endpoint mutasi dan baca data privat (Policy/Gate/Middleware).
- **XSS & CSRF**: Sanitasi input pengguna; dilarang merender HTML mentah tidak tepercaya; pastikan proteksi CSRF aktif pada mutasi berbasis sesi.
- **Mass Assignment**: Definisikan `$fillable` (Laravel) atau DTO/schema validator eksplisit (Zod/Valibot) pada setiap input mutasi.

## 4. Frontend, Aksesibilitas & SEO
- **Otoritas & Satu `DESIGN.md` per Project**: Wajib memilih satu arketipe aktif dari `.agents/design-library/` lewat `project-intake`, menyalin dan menyesuaikannya ke `./DESIGN.md` sebagai sumber kebenaran visual tunggal, lalu menurunkan token (`design-system-tokens`) sebelum menulis UI (`frontend-modern-web`). `stitch-design-taste` hanya bersifat opt-in eksploratif bila diminta eksplisit.
- **Jalur A — Landing Page / Marketing**:
  - Wajib SEO: satu `<h1>` semantik per halaman, `<title>` deskriptif, meta description, OpenGraph/Twitter card, elemen semantik HTML5, dan atribut `alt` pada gambar.
  - Wajib Core Web Vitals: LCP cepat, INP responsif, CLS = 0.
- **Jalur B — Aplikasi / Dashboard**:
  - Wajib state UI lengkap (`ui-states-and-interaction`): loading/skeleton, empty, error, success, disabled, validasi form inline, serta tabel/filter/pagination responsif.
  - Wajib WCAG 2.2 AA (`accessibility-wcag`): kontras >= 4.5:1 (teks normal), navigasi keyboard, `:focus-visible`, dan `prefers-reduced-motion`.
- **Verifikasi Visual Nyata (Wajib)**: Dilarang menyatakan UI selesai sebelum diperiksa di browser nyata pada viewport `375px`, `768px`, dan `1280px` via `chrome-devtools-plugin` + `_shared/slop-audit.js` (`verification-and-qa`), atau dicatat jujur jika tool browser tidak tersedia.

## 5. Penyelesaian Tuntas & Jalur Jujur
- Selesaikan task hingga tidak ada error sintaks, runtime, atau lint pada cakupan yang dikerjakan.
- Jika terblokir, laporkan status terakhir, hal yang belum diverifikasi, dan langkah berikutnya. Jangan mengklaim selesai.
- Dilarang mengubah file atau arsitektur di luar cakupan tugas tanpa instruksi eksplisit.

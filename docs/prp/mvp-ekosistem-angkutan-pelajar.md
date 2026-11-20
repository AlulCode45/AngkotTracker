# PRP: MVP Ekosistem Angkutan Pelajar Gratis & Pelacakan Armada (`BusTracking`)

- **Status**: `DRAFT` *(Menunggu review pengguna sebelum eksekusi)*
- **Tanggal**: `2026-11-21`

---

## 1. Goal & Cakupan

### Masalah & Tujuan
Membangun ekosistem digital angkutan umum gratis bagi pelajar (**SD, SMP, SMA**) di daerah, yang menghubungkan:
1. **Pelajar / Orang Tua**: Menampilkan Kartu QR Pelajar resmi untuk naik angkutan umum secara gratis, melihat riwayat perjalanan, dan memantau posisi bus secara real-time.
2. **Pengemudi Angkutan Umum**: Memilih armada/rute yang sedang beroperasi, memindai QR Code pelajar di lapangan, dan mengklaim perjalanan gratis secara instan sebagai dasar perhitungan subsidi.
3. **Operator / Admin Dinas Perhubungan**: Mengelola sekolah, pelajar terverifikasi, rute & armada bus, memantau validitas klaim perjalanan, mengekspor rekap subsidi, dan meninjau jejak audit.

### Di Luar Cakupan (Fase MVP)
- Integrasi transfer bank / pencairan dana otomatis ke rekening pengemudi (MVP menghasilkan rekap terverifikasi & ekspor CSV).
- Aplikasi mobile native (Android/iOS terpisah) — antarmuka pengemudi & pelajar dibangun responsif *mobile-first* di Next.js.
- Integrasi perangkat keras GPS OBD2 fisik (disediakan endpoint pembaruan lokasi armada yang siap menerima data GPS dari aplikasi pengemudi maupun perangkat IoT di fase berikutnya).

---

## 2. Konteks Codebase & Desain

- **Profil & Stack** (dari [`.agents/project.md`](../../.agents/project.md)):
  - Profil: `gov-enterprise`
  - Frontend: **Next.js** (App Router, TypeScript, Tailwind CSS) di `frontend/`
  - Backend: **Laravel** REST API berarsitektur **SOLID** (`laravel-solid-architecture`) di `backend/`
  - Bahasa: `id` (Bahasa Indonesia baku EYD V)
- **Otoritas Visual** (dari [`./DESIGN.md`](../../DESIGN.md)):
  - Arketipe: `professional/gov-civic-warm` (kanvas `#FCFBF8`, pita `#F2EDE4`, aksen `#0F5E63` & `#9A3F16`, font self-hosted `Figtree`, `Inter`, `JetBrains Mono` dari `.agents/design-library/professional/_fonts/` tanpa CDN eksternal).
  - Wajib memenuhi **WCAG 2.2 AA**, **Zero Boxitis**, dan 6 state UI (`normal`, `loading`, `empty`, `error`, `success`, `disabled`).

---

## 3. User Story & Acceptance Criteria (AC)

### US-1: Kartu QR Pelajar Dinamis (Pelajar / Orang Tua)
> *Sebagai pelajar SD–SMA (atau orang tua), saya ingin menampilkan Kartu QR milik saya yang sah dan aman agar dapat naik angkutan umum gratis.*

- **AC-1.1**: Given pelajar berstatus `active`, When membuka halaman Kartu QR, Then sistem menampilkan kode QR dari token bertanda tangan (`HMAC-SHA256`) ber-TTL pendek (mis. 120 detik, dapat di-refresh otomatis/manual) beserta nama inisial/panggilan, jenjang (`SD`/`SMP`/`SMA`), dan status aktif.
- **AC-1.2**: QR Code dan payload API kartu **tidak boleh** memuat NIK, NISN mentah, atau alamat rumah pelajar.
- **AC-1.3**: Given pelajar berstatus `inactive` atau `suspended`, When membuka halaman Kartu QR, Then QR tidak diterbitkan dan tampil pesan status yang jelas.

### US-2: Pemindaian QR & Klaim Perjalanan (Pengemudi)
> *Sebagai pengemudi angkutan umum, saya ingin memindai QR Code pelajar melalui kamera HP agar sistem memvalidasi hak gratis pelajar dan mencatat klaim perjalanan saya.*

- **AC-2.1**: Given pengemudi sudah login dan memilih armada (`bus_id`) yang aktif, When memindai QR pelajar yang valid, Then sistem memverifikasi tanda tangan token, masa berlaku TTL, status aktif pelajar, dan aturan anti-duplikasi (*cooldown* mis. 15 menit pada armada yang sama), lalu mencatat `ride_claims` secara atomik.
- **AC-2.2**: Setelah klaim berhasil, layar pengemudi menampilkan umpan balik besar kontras tinggi (`KLAIM BERHASIL`, waktu WIB, jenjang pelajar `SD/SMP/SMA`, kode klaim) dengan target sentuh `>= 44px` untuk tombol `Scan Berikutnya`.
- **AC-2.3**: Given QR sudah kedaluwarsa, tidak valid, atau pelajar baru saja di-scan pada armada yang sama dalam masa *cooldown*, When pengemudi memindai, Then sistem menolak dengan HTTP `422` dan menampilkan banner `KLAIM DITOLAK` beserta alasan yang lugas.
- **AC-2.4**: Tersedia fallback input kode token manual jika kamera tidak dapat membaca QR di kondisi minim cahaya.

### US-3: Pelacak Armada Publik (Zero-PII)
> *Sebagai pelajar atau orang tua, saya ingin memantau posisi dan status bus sekolah/angkutan gratis pada rute tertentu agar tidak menunggu tanpa kepastian.*

- **AC-3.1**: Given pengguna membuka halaman `/pantau-bus` (tanpa wajib login), When memilih rute, Then sistem menampilkan daftar bus aktif pada rute tersebut, titik lokasi terakhir, arah rute, dan waktu pembaruan terakhir.
- **AC-3.2**: Endpoint publik `/api/v1/public/buses` **dilarang** mengembalikan data pengemudi sensitif maupun daftar nama/identitas pelajar di dalam bus.

### US-4: Dashboard Operator & Rekap Subsidi (Operator / Dishub)
> *Sebagai operator Dinas Perhubungan, saya ingin memantau total klaim harian per jenjang/rute dan mengekspor rekapnya agar penyaluran subsidi ke pengemudi dapat diaudit.*

- **AC-4.1**: Given user login dengan peran `operator`, When membuka `/operator`, Then tampil ringkasan metrik harian (`Total Klaim`, `Pelajar Aktif`, `Armada Beroperasi`), filter berdasarkan tanggal/rute/jenjang, tabel klaim dengan paginasi, dan tombol `Ekspor CSV`.
- **AC-4.2**: Aksi sensitif (aktivasi/nonaktif pelajar, perubahan rute) tercatat otomatis di `audit_logs` beserta aktor, timestamp WIB, dan ringkasan perubahan.

---

## 4. Gotchas, Keamanan & Kepatuhan (UU PDP & OWASP)

1. **UU PDP No. 27/2022 (Data Anak di Bawah Umur)**:
   - Data identitas pelajar (`nisn`, `nik_hash`, `parent_phone`) disimpan terpisah dan tidak pernah diekspos ke API publik maupun API scanner pengemudi.
   - Pelacakan bus publik (`Zero-PII`) hanya mengembalikan `bus_code`, `route_name`, `lat`, `lng`, `heading`, `updated_at`.
2. **Anti-Replay & Anti-Fraud QR**:
   - Payload QR menggunakan token bertanda tangan (`student_uuid` + `jti` nonce + `exp`) sehingga tangkapan layar (*screenshot*) lama otomatis ditolak setelah TTL habis.
   - Pengecekan *cooldown* atomik (database lock/transaction) mencegah pengemudi atau sistem menggandakan klaim dari satu pelajar yang sama dalam rentang waktu singkat.
3. **RBAC & Anti-IDOR**:
   - Laravel Sanctum token dengan peran eksplisit (`student`, `driver`, `operator`) + Laravel Policy.
   - `student` hanya bisa mengambil token QR dan riwayat klaim miliknya sendiri; `driver` hanya bisa mengirim lokasi dan klaim untuk armada yang ditugaskan kepadanya.
4. **Rate Limiting & Validasi**:
   - Endpoint `/api/v1/claims/scan` dan `/api/v1/auth/login` dibatasi `throttle` untuk mencegah brute-force token.
   - Seluruh input divalidasi melalui Laravel `FormRequest` dan dikembalikan via `JsonResource` yang konsisten.
5. **Self-Hosted Fonts & Aksesibilitas**:
   - Salin file `.woff2` dari `.agents/design-library/professional/_fonts/` ke `frontend/public/fonts/` (0 CDN eksternal).

---

## 5. ADR Singkat (Keputusan Arsitektural)

### ADR-01: Struktur Monorepo (`frontend/` + `backend/`)
- **Keputusan**: Memisahkan aplikasi menjadi `frontend/` (Next.js App Router) dan `backend/` (Laravel API SOLID) dalam satu repositori `BusTracking`.
- **Alasan**: Next.js memberikan UI mobile-first yang cepat untuk scanner kamera & pelacakan, sementara Laravel SOLID menjaga aturan bisnis klaim, RBAC, dan skema relasional tetap bersih serta mudah diuji.

### ADR-02: Token QR Dinamis Bertanda Tangan + Cooldown Klaim
- **Keputusan**: QR berisi token ringkas bertanda tangan HMAC dengan TTL 120 detik + verifikasi *cooldown* 15 menit per `(student_id, bus_id)` di Service layer.
- **Alasan**: Menghindari ketergantungan pada ID statis yang mudah dipalsukan/difoto ulang sekaligus tetap bekerja cepat pada jaringan seluler standar.

---

## 6. Blueprint Implementasi (Urutan Task)

1. **[Skema DB & Kontrak]** — `backend/database/migrations/*`
   - Tabel: `users` (role: `student|driver|operator`), `schools`, `students`, `routes`, `buses`, `bus_locations`, `ride_claims`, `audit_logs`.
   - Indeks komposit pada `ride_claims(student_id, bus_id, claimed_at)` untuk pengecekan *cooldown* cepat dan `bus_locations(bus_id, recorded_at)`.
2. **[Backend Laravel SOLID]** — `backend/app/*`
   - **Enums**: `UserRole`, `SchoolLevel` (`SD`, `SMP`, `SMA`), `StudentStatus`, `ClaimStatus`.
   - **Contracts & Repositories**: `StudentRepositoryInterface`, `BusRepositoryInterface`, `RideClaimRepositoryInterface`, `AuditLogRepositoryInterface` beserta implementasi Eloquent dan binding di `RepositoryServiceProvider`.
   - **Services**: `QrTokenService` (generate & verify HMAC token), `RideClaimService` (validasi token, cek status aktif, cek cooldown, simpan klaim atomik + audit), `BusTrackingService`.
   - **HTTP Layer**: `FormRequest`, `JsonResource`, `AuthController`, `StudentQrController`, `DriverClaimController`, `PublicBusController`, `OperatorDashboardController`.
3. **[Frontend Next.js & Design System]** — `frontend/src/*`
   - Salin font WOFF2 ke `frontend/public/fonts/` dan turunkan CSS variables dari `./DESIGN.md` ke `frontend/src/app/globals.css`.
   - Halaman utama `/` (Pemilih 3 tugas utama + alur 3 langkah sesuai `gov-civic-warm`).
   - `/pelajar/kartu` (Kartu QR dinamis + timer rotasi + riwayat perjalanan).
   - `/pengemudi/scan` (Pilih bus/rute, scanner QR kamera + fallback manual, layar hasil kontras tinggi).
   - `/pantau-bus` (Daftar & peta rute armada aktif Zero-PII).
   - `/operator` (KPI ringkas, filter tabel klaim, ekspor CSV, jejak audit).
4. **[Test & Seeder]**
   - Seeder data contoh realistis Indonesia (sekolah SD–SMA, rute angkutan, armada, akun demo pelajar/pengemudi/operator tanpa kredensial produksi).
   - Unit & Feature Test Laravel (PHPUnit/Pest): validasi QR valid, QR kedaluwarsa, QR rusak, cooldown double-scan, RBAC anti-IDOR.

---

## 7. Validation Gates

- [ ] Backend Lint: `./vendor/bin/pint --test` (di `backend/`)
- [ ] Backend Test Suite: `php artisan test` (di `backend/`)
- [ ] Frontend Lint & Typecheck: `npm run lint && npx tsc --noEmit` (di `frontend/`)
- [ ] Frontend Production Build: `npm run build` (di `frontend/`)
- [ ] Visual & Anti-Slop QA: `slop-audit.js` + inspeksi `375px`, `768px`, `1280px` via `chrome-devtools-plugin`

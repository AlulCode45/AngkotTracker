# PRP: MVP Pelacakan Angkot Real-Time & Cluster Penumpang Menunggu (`BusTracking`)

- **Status**: `DRAFT` *(Menunggu review pengguna sebelum eksekusi)*
- **Tanggal**: `2026-11-21`

---

## 1. Goal & Cakupan

### Masalah & Tujuan
Membangun sistem pelacakan kendaraan umum (angkot) bagi ekosistem angkutan pelajar (SD–SMA) yang berfokus pada **visibilitas lokasi armada dan titik tunggu penumpang**:
1. **Supir Angkot (Driver Mode)**:
   - Mengaktifkan sesi berkendara dan mengirimkan lokasi GPS angkot secara berkala ke server.
   - Melihat **cluster lokasi penumpang menunggu** (peta/daftar zona keramaian dengan estimasi jumlah penumpang yang sedang menunggu) agar supir tahu ke arah mana armada perlu menuju.
2. **Pelajar / Penumpang (Student Mode)**:
   - Melihat **semua daftar angkot** yang sedang beroperasi (kode angkot, trayek/rute, status).
   - Melihat **angkot terdekat** dari posisi pelajar saat ini, diurutkan berdasarkan jarak terdekat.
   - Mengirimkan sinyal tunggu (*"Saya menunggu di sekitar sini"*) yang diagregasi secara anonim ke dalam cluster penumpang menunggu.
3. **Operator / Admin Dinas (Opsional / Ringan)**:
   - Mengelola daftar trayek/rute dan armada angkot terdaftar, serta memantau status armada aktif.

### Di Luar Cakupan (MVP)
- Pemindaian QR Code klaim subsidi / transaksi pembayaran / pencairan dana pengemudi.
- Aplikasi mobile native terpisah (antarmuka dibangun responsif *mobile-first* di Next.js agar langsung dapat dijalankan di browser HP supir dan pelajar dengan Geolocation API).
- Perangkat keras GPS OBD2 fisik (endpoint backend siap menerima telemetry lokasi dari browser HP supir maupun perangkat IoT nantinya).

---

## 2. Konteks Codebase & Desain

- **Profil & Stack** (dari [`.agents/project.md`](../../.agents/project.md)):
  - Profil: `gov-enterprise`
  - Frontend: **Next.js** (App Router, TypeScript, Tailwind CSS) di `frontend/`
  - Backend: **Laravel** REST API berarsitektur **SOLID** (`laravel-solid-architecture`) di `backend/`
  - Bahasa: `id` (Bahasa Indonesia baku EYD V)
- **Otoritas Visual** (dari [`./DESIGN.md`](../../DESIGN.md)):
  - Arketipe: `professional/gov-civic-warm` (kanvas `#FCFBF8`, pita `#F2EDE4`, aksen `#0F5E63` & `#9A3F16`, font self-hosted `Figtree`, `Inter`, `JetBrains Mono` tanpa CDN eksternal).
  - Wajib memenuhi **WCAG 2.2 AA**, **Zero Boxitis**, dan 6 state UI (`normal`, `loading`, `empty`, `error`, `success`, `disabled`).

---

## 3. User Story & Acceptance Criteria (AC)

### US-1: Siaran Lokasi Angkot oleh Supir (`/supir`)
> *Sebagai supir angkot, saya ingin menyalakan pelacakan GPS dari aplikasi saya agar posisi angkot saya selalu terpantau oleh pelajar.*

- **AC-1.1**: Given supir login dan memilih armada + trayeknya, When supir menekan tombol `Mulai Beroperasi` dan mengizinkan akses lokasi browser, Then aplikasi mengirim koordinat (`lat`, `lng`, `heading`, `speed`, `recorded_at`) secara berkala (mis. setiap 5–10 detik) ke backend.
- **AC-1.2**: Tersedia tombol jeda/selesai (`Berhenti Beroperasi`) yang langsung mengubah status armada menjadi `offline` sehingga tidak lagi muncul sebagai angkot aktif di radar pelajar.
- **AC-1.3**: Jika izin GPS ditolak atau sinyal terputus, UI menampilkan banner status yang jelas + tombol `Coba Lagi` (bukan gagal diam-diam).

### US-2: Daftar Semua Angkot & Angkot Terdekat (`/pelajar` / `/`)
> *Sebagai pelajar, saya ingin melihat semua daftar angkot yang beroperasi atau mencari angkot yang paling dekat dengan lokasi saya agar saya tahu kapan dan di mana bisa naik.*

- **AC-2.1**: Given pelajar membuka halaman utama/radar angkot, When mode `Semua Angkot` dipilih, Then sistem menampilkan daftar seluruh angkot berstatus `online` beserta kode trayek, nama rute, dan waktu pembaruan terakhir (`"Baru saja"` / `"1 menit lalu"`).
- **AC-2.2**: Given pelajar mengizinkan lokasi browser (atau memilih titik halte/area), When mode `Terdekat` dipilih, Then sistem menghitung jarak (formula Haversine) dan mengurutkan angkot aktif dari jarak terdekat (`meter` / `km`), dilengkapi visualisasi peta interaktif.
- **AC-2.3**: Data yang ditampilkan kepada pelajar hanya informasi armada (`bus_code`, `route_name`, `lat`, `lng`, `distance_meters`, `updated_at`) tanpa PII supir.

### US-3: Sinyal Tunggu Pelajar & Cluster Lokasi Penumpang (`/supir/cluster`)
> *Sebagai supir angkot, saya ingin melihat cluster lokasi mana saja yang banyak penumpangnya menunggu agar saya bisa mengarahkan angkot ke titik ramai tersebut.*

- **AC-3.1**: Given pelajar menekan tombol `Saya Sedang Menunggu Angkot` (dengan izin lokasi), Then backend menyimpan sinyal tunggu ber-TTL singkat (mis. 15 menit, otomatis kedaluwarsa jika tidak diperbarui atau saat pelajar membatalkan).
- **AC-3.2**: Given supir membuka peta/daftar **Cluster Penumpang Menunggu**, Then backend mengelompokkan titik tunggu aktif ke dalam **cluster spasial** (mis. radius/grid `~150–250 meter`) dan hanya mengembalikan **pusat cluster (`cluster_lat`, `cluster_lng`), label area/rute terdekat, dan jumlah penumpang menunggu** (mis. `14 penumpang menunggu`).
- **AC-3.3**: Supir dapat mengurutkan cluster berdasarkan jumlah penumpang terbanyak atau jarak terdekat dari posisi angkot saat ini.

---

## 4. Gotchas, Keamanan & Kepatuhan (UU PDP & OWASP)

1. **Privasi Lokasi Pelajar (UU PDP No. 27/2022 — Perlindungan Data Anak)**:
   - **Dilarang keras** menampilkan titik koordinat individu pelajar atau identitas pelajar (`nama`, `NISN`, `user_id`) di halaman/API supir.
   - API cluster supir **hanya** mengembalikan data agregat (`cluster_id`, `center_lat`, `center_lng`, `radius_meters`, `waiting_count`, `dominant_route`).
   - Sinyal tunggu pelajar memiliki TTL otomatis (mis. 15 menit) dan dapat dibatalkan kapan saja dengan satu ketukan.
2. **RBAC & Anti-Spoofing Lokasi**:
   - Laravel Sanctum memisahkan peran `driver`, `student`, dan `operator`.
   - `driver` hanya dapat mengirim pembaruan lokasi untuk `bus_id` yang ditugaskan kepadanya (anti-IDOR).
   - Validasi rentang koordinat (`lat` `-90..90`, `lng` `-180..180`) dan rate limiting pada endpoint telemetry & sinyal tunggu.
3. **Peta Tanpa Ketergantungan Tersembunyi & Aksesibilitas**:
   - Setiap tampilan peta wajib memiliki daftar tabel/kartu alternatif yang setara untuk aksesibilitas keyboard & pembaca layar (`WCAG 2.2 AA`).
   - Font `WOFF2` self-hosted dari `.agents/design-library/professional/_fonts/` ke `frontend/public/fonts/` (0 CDN eksternal).

---

## 5. ADR Singkat (Keputusan Arsitektural)

### ADR-01: Struktur Monorepo (`frontend/` + `backend/`)
- **Keputusan**: Memisahkan aplikasi menjadi `frontend/` (Next.js App Router) dan `backend/` (Laravel API SOLID).
- **Alasan**: Next.js memudahkan antarmuka *mobile-first* dengan Geolocation API + peta interaktif, sementara Laravel SOLID menjaga kalkulasi jarak/clustering, telemetry, dan RBAC tetap terstruktur serta mudah diuji.

### ADR-02: Agregasi Cluster Spasial Server-Side (Grid / Radius Clustering)
- **Keputusan**: Pengelompokan titik tunggu pelajar dilakukan di `PassengerClusterService` (backend) menggunakan grid/radius clustering (~200m) atas sinyal tunggu aktif (`expires_at > now()`), bukan di frontend.
- **Alasan**: Menjamin koordinat mentah individu pelajar tidak pernah meninggalkan server (patuh UU PDP) sekaligus meringankan beban browser HP supir.

---

## 6. Blueprint Implementasi (Urutan Task)

1. **[Skema DB & Kontrak]** — `backend/database/migrations/*`
   - Tabel: `users` (`role`: `student|driver|operator`), `routes`, `buses` (`driver_id`, `route_id`, `plate_number`, `code`, `status`), `bus_locations` (`bus_id`, `lat`, `lng`, `heading`, `speed`, `recorded_at`), `waiting_signals` (`student_hash`/`user_id`, `route_id`, `lat`, `lng`, `expires_at`), `audit_logs`.
   - Indeks pada `buses(status, route_id)`, `bus_locations(bus_id, recorded_at)`, dan `waiting_signals(expires_at, lat, lng)`.
2. **[Backend Laravel SOLID]** — `backend/app/*`
   - **Enums**: `UserRole`, `BusStatus` (`online|offline|break`).
   - **Contracts & Repositories**: `BusRepositoryInterface`, `RouteRepositoryInterface`, `WaitingSignalRepositoryInterface` + implementasi Eloquent + binding di `RepositoryServiceProvider`.
   - **Services**:
     - `BusTrackingService`: update lokasi angkot oleh supir, ambil semua angkot aktif, hitung & urutkan angkot terdekat (Haversine).
     - `PassengerClusterService`: catat/batalkan sinyal tunggu pelajar, hitung agregasi cluster spasial (`waiting_count`, `center_lat`, `center_lng`) untuk supir.
   - **HTTP Layer**: `FormRequest`, `JsonResource`, `AuthController`, `DriverLocationController`, `DriverClusterController`, `StudentBusController`, `StudentWaitingController`, `OperatorFleetController`.
3. **[Frontend Next.js & Design System]** — `frontend/src/*`
   - Salin font WOFF2 ke `frontend/public/fonts/` dan turunkan CSS variables dari `./DESIGN.md` ke `frontend/src/app/globals.css`.
   - `/` (Beranda pemilih peran: `Cari Angkot Terdekat` untuk Pelajar & `Mode Supir Angkot`).
   - `/pelajar` (Daftar semua angkot aktif, toggle `Semua` vs `Terdekat`, peta + daftar berjarak, dan tombol `Saya Sedang Menunggu` + status TTL).
   - `/supir` (Panel kontrol GPS angkot `Mulai/Berhenti Beroperasi`, status telemetry, dan peta/daftar **Cluster Penumpang Menunggu**).
   - `/operator` (Manajemen armada & trayek, ringkasan armada aktif & cluster kota).
4. **[Test & Seeder]**
   - Seeder data contoh realistis Indonesia (beberapa trayek angkot kota, armada aktif dengan koordinat simulasi, dan beberapa cluster penumpang menunggu untuk demo).
   - Unit & Feature Test Laravel: update lokasi supir, query angkot terdekat (Haversine), agregasi cluster penumpang tanpa bocor PII, anti-IDOR supir.

---

## 7. Validation Gates

- [ ] Backend Lint: `./vendor/bin/pint --test` (di `backend/`)
- [ ] Backend Test Suite: `php artisan test` (di `backend/`)
- [ ] Frontend Lint & Typecheck: `npm run lint && npx tsc --noEmit` (di `frontend/`)
- [ ] Frontend Production Build: `npm run build` (di `frontend/`)
- [ ] Visual & Anti-Slop QA: `slop-audit.js` + inspeksi `375px`, `768px`, `1280px` via `chrome-devtools-plugin`

# BusTracking (`AngkotPelajar`)

Sistem informasi pelacakan angkutan umum daerah untuk ekosistem pelajar (**SD–SMA**) yang menghubungkan posisi angkot secara real-time dengan kebutuhan penjemputan di lapangan.

## Tujuan Utama

1. **Supir Angkot**: Mengirimkan lokasi GPS kendaraan secara berkala selama jam beroperasi dan melihat **cluster lokasi** titik keramaian penumpang yang sedang menunggu.
2. **Pelajar (SD–SMA) & Orang Tua**: Melihat **semua daftar angkot** yang sedang beroperasi maupun **angkot terdekat** berdasarkan jarak, serta mengirimkan sinyal tunggu anonim.
3. **Privasi Pelajar (Zero-PII Cluster)**: Titik tunggu pelajar diagregasi oleh server menjadi cluster radius `200 m` sehingga supir hanya melihat estimasi jumlah penumpang menunggu tanpa titik GPS atau identitas individu pelajar (patuh **UU PDP No. 27/2022**).

---

## Arsitektur & Stack

- **Frontend (`frontend/`)**: Next.js (App Router), TypeScript, Tailwind CSS v4, font `WOFF2` self-hosted (`Figtree`, `Inter`, `JetBrains Mono`) tanpa CDN eksternal.
- **Backend (`backend/`)** *(direncanakan)*: Laravel REST API berarsitektur **SOLID** (`laravel-solid-architecture`) dengan Laravel Sanctum RBAC.
- **Otoritas Desain**: [`DESIGN.md`](DESIGN.md) (arketipe `professional/gov-civic-warm`, target **WCAG 2.2 AA**).

---

## Status Implementasi Saat Ini

### Sudah Tersedia (`frontend/`)
- **`/`** — Landing page penjelasan ekosistem, fitur pelajar & supir, alur kerja, cakupan trayek, dan FAQ.
- **`/login`** — Halaman masuk dengan pemilih peran (`Pelajar` / `Supir Angkot`), validasi inline, *Error Summary Box*, dan *redirect* ke dashboard pelajar.
- **`/dashboard/pelajar`** — Radar angkot pelajar dengan dukungan GPS browser (+ fallback titik halte), kalkulasi jarak **Haversine**, filter trayek (`T01`–`T05`), urutan `Terdekat` vs `Semua Angkot`, dan tombol sinyal tunggu anonim (`15 menit`).

### Tahap Berikutnya (Sesuai PRP)
- Scaffolding API **Laravel SOLID** di `backend/` (migrasi database, `BusTrackingService`, `PassengerClusterService`, Sanctum auth & RBAC).
- Halaman **Dashboard Supir** (`/dashboard/supir`) untuk siaran GPS & peta cluster penumpang menunggu.

---

## Menjalankan Frontend Secara Lokal

```bash
cd frontend
npm install
npm run dev
```

Buka `http://localhost:3000` di peramban Anda.

### Perintah Verifikasi Frontend

```bash
cd frontend
npm run lint
npx tsc --noEmit
npm run build
```

---

## Dokumen Terkait

- Konfigurasi Project: [`.agents/project.md`](.agents/project.md)
- Spesifikasi Desain Visual: [`DESIGN.md`](DESIGN.md)
- Rencana Produk & Arsitektur (PRP): [`docs/prp/mvp-ekosistem-angkutan-pelajar.md`](docs/prp/mvp-ekosistem-angkutan-pelajar.md)
- Catatan Progres: [`docs/WORKLOG.md`](docs/WORKLOG.md)

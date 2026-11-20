# Project Configuration (`.agents/project.md`)

- **Nama Project**: `BusTracking — Pelacakan Angkot Real-Time & Cluster Penumpang Pelajar`
- **Profil Konteks**: `gov-enterprise`
- **Stack Utama**: `Next.js (App Router + TypeScript + Tailwind CSS) + Laravel (SOLID REST API)`
- **Mode Arsitektur Backend**: `SOLID`
- **Target Audiens**: `Pelajar (SD–SMA) yang mencari angkot terdekat, supir angkot (siaran lokasi GPS & pantau cluster penumpang menunggu), serta operator/admin transportasi`
- **Bahasa Utama UI & Dokumen**: `id`
- **Arketipe Desain Terpilih**: `professional/gov-civic-warm`
- **Sumber Desain**: `.agents/design-library/professional/gov-civic-warm/DESIGN.md -> ./DESIGN.md`
- **Regulasi Relevan**: `UU PDP No. 27/2022 (agregasi cluster anonim untuk lokasi tunggu pelajar), WCAG 2.2 AA, OWASP Baseline`
- **Suara Merek (*Brand Voice*)**: `Ramah, lugas, jelas, Bahasa Indonesia baku (EYD V) tanpa jargon teknis — mudah dipahami pelajar SD–SMA dan supir angkot di lapangan`
- **Catatan Klien / Batasan Hosting**:
  - `Font WOFF2 self-hosted wajib tanpa CDN eksternal (Figtree, Inter, JetBrains Mono)`
  - `Lokasi pelajar menunggu wajib diagregasi menjadi cluster spasial (dilarang menampilkan titik GPS individu atau PII pelajar ke supir/publik)`
  - `Antarmuka supir wajib kontras tinggi, tombol tap besar (>= 44px), dan mendukung kondisi lapangan`
- **Perintah Verifikasi (Lint / Test / Build)**:
  - Lint / Static Analysis: `[akan diisi setelah setup Next.js & Laravel, mis. npm run lint && ./vendor/bin/pint --test]`
  - Test Suite: `[akan diisi setelah setup Next.js & Laravel, mis. npm test && php artisan test]`
  - Build: `[akan diisi setelah setup Next.js, mis. npm run build]`

# Project Configuration (`.agents/project.md`)

- **Nama Project**: `BusTracking — Ekosistem Angkutan Pelajar Gratis & Pelacakan Armada`
- **Profil Konteks**: `gov-enterprise`
- **Stack Utama**: `Next.js (App Router + TypeScript + Tailwind CSS) + Laravel (SOLID REST API)`
- **Mode Arsitektur Backend**: `SOLID`
- **Target Audiens**: `Pelajar (SD–SMA) & orang tua, pengemudi angkutan umum (scanner QR klaim), serta operator/admin Dinas Perhubungan daerah`
- **Bahasa Utama UI & Dokumen**: `id`
- **Arketipe Desain Terpilih**: `professional/gov-civic-warm`
- **Sumber Desain**: `.agents/design-library/professional/gov-civic-warm/DESIGN.md -> ./DESIGN.md`
- **Regulasi Relevan**: `UU PDP No. 27/2022 (perlindungan data pelajar/anak), WCAG 2.2 AA, OWASP Baseline, Zero-PII pada pelacakan armada publik`
- **Suara Merek (*Brand Voice*)**: `Ramah, lugas, jelas, Bahasa Indonesia baku (EYD V) tanpa jargon teknis — mudah dipahami pelajar SD–SMA, pengemudi di lapangan, dan operator dinas`
- **Catatan Klien / Batasan Hosting**:
  - `Font WOFF2 self-hosted wajib tanpa CDN eksternal (Figtree, Inter, JetBrains Mono)`
  - `QR Code pelajar wajib menggunakan token bertanda tangan / dinamis anti-replay (dilarang mengekspos NIK/NISN mentah di QR atau URL publik)`
  - `Antarmuka pemindai QR pengemudi wajib kontras tinggi, tombol tap besar (>= 44px), dan mendukung mode gelap/terang untuk kondisi lapangan`
- **Perintah Verifikasi (Lint / Test / Build)**:
  - Lint / Static Analysis: `[akan diisi setelah setup Next.js & Laravel, mis. npm run lint && ./vendor/bin/pint --test]`
  - Test Suite: `[akan diisi setelah setup Next.js & Laravel, mis. npm test && php artisan test]`
  - Build: `[akan diisi setelah setup Next.js, mis. npm run build]`

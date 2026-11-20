# Profil Konteks: `gov-enterprise`

Digunakan untuk sistem instansi pemerintah, BUMN, perbankan, layanan publik, dan aplikasi enterprise yang membutuhkan kepatuhan regulasi, keterbukaan audit, dan stabilitas jangka panjang.

---

## 1. Gaya Visual yang Diizinkan
- **Otoritas Desain**: Pilih tepat satu arketipe aktif dari [`.agents/design-library/professional/`](../design-library/professional/README.md) dan kunci di `./DESIGN.md` (Level 2):
  - `professional/gov-civic-warm` — layanan warga, perizinan, dan kanal bantuan publik.
  - `professional/gov-institutional-editorial` — kementerian, pemda, regulasi, berita, dan publikasi kebijakan.
  - `professional/gov-data-open` — portal data terbuka, statistik publik, dan transparansi anggaran.
  - `professional/enterprise-dashboard` — sistem back-office internal, ERP, RBAC, dan analitik operasional padat.
- **Overlay Wajib (.go.id)**: Gabungkan dengan [`.agents/design-library/professional/overlays/id-gov.md`](../design-library/professional/overlays/id-gov.md) saat membangun portal resmi pemerintah Indonesia.
- **Arketipe Deprecated & Referensi Lama**: Arketipe v1 (`_archive/v1/gov-portal` dan `_archive/v1/corporate-trust`) berstatus **deprecated** — dilarang direkomendasikan atau dijadikan default proyek baru. Skill referensi lama (`minimalist-ui`, dll.) tidak boleh menggantikan `./DESIGN.md`.
- **Dilarang**: efek glassmorphism berat, neon, gradien mencolok, CDN font eksternal, atau layout eksperimental yang mengorbankan keterbacaan tabel dan formulir.
- **Hierarki**: prioritaskan kejelasan informasi, status badge informatif dengan label teks (bukan warna saja), kepadatan data yang terbaca, serta kelengkapan *Richness Floor* dari `DESIGN.md` yang dipilih.

## 2. Motion & Interaksi
- Tingkat motion: **rendah–konservatif dan fungsional** (transisi state `150–250ms` dengan `--ease-out-quart`, atau hitungan data singkat `<= 450ms` sesuai peta motion di `DESIGN.md`).
- Wajib mematuhi `@media (prefers-reduced-motion: reduce)` dengan mematikan animasi non-esensial.
- Dilarang animasi scroll-jacking, parallax, atau efek dekoratif yang menunda interaksi pengguna.

## 3. Kebijakan Dependensi
- **Minim dependensi**: gunakan fitur bawaan framework atau pustaka standar sebelum menambah paket baru.
- **Versi terkunci**: wajib memakai lockfile (`composer.lock`, `package-lock.json`, `pnpm-lock.yaml`).
- **Tanpa CDN eksternal**: seluruh aset (font, ikon, CSS, JS) harus di-bundle atau di-self-host; dilarang memuat script/font dari CDN publik saat runtime.
- **Audit lisensi**: hanya izinkan lisensi permisif/standar enterprise (MIT, Apache-2.0, BSD) dan lolos audit kerentanan (`composer audit` / `npm audit`).

## 4. Keamanan & Kepatuhan
- **WCAG 2.2 Level AA**: wajib lolos kontras minimal 4.5:1 (teks normal) dan 3:1 (teks besar/komponen UI), navigasi keyboard penuh, dan focus indicator jelas.
- **RBAC & Otorisasi**: setiap aksi dan endpoint wajib memeriksa role/permission lewat Policy/Gate/Middleware; tolak akses secara eksplisit (403).
- **Audit Log**: catat setiap mutasi data penting, login, ekspor data, dan perubahan hak akses (siapa, kapan, aksi, target, IP/konteks).
- **Enkripsi & Privasi (UU PDP)**: enkripsi data pribadi sensitif saat disimpan (at-rest) dan saat dikirim (TLS in-transit); terapkan prinsip minimisasi data dan masking pada log/API response.

## 5. Tone Teks & Bahasa
- Bahasa antarmuka dan pesan sistem: **Bahasa Indonesia baku formal** (EYD V), jelas, netral, tanpa bahasa gaul atau jargon pemasaran.
- Pesan error wajib informatif dan sopan tanpa membocorkan stack trace internal.

## 6. Standar Dokumentasi & Deliverable
- Gunakan skill `formal-documents` untuk dokumen serah terima (SRS/BRD, manual pengguna, berita acara/laporan pengujian) bila diminta.
- Wajib menyertakan hasil `security-review` dan bukti verifikasi (`verification-and-qa`) pada laporan akhir.

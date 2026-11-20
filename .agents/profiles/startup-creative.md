# Profil Konteks: `startup-creative`

Digunakan untuk produk startup, landing page merek, SaaS komersial, aplikasi kreatif, dan MVP yang mengutamakan karakter visual kuat, kecepatan iterasi, dan diferensiasi pasar.

---

## 1. Gaya Visual yang Diizinkan
- **Otoritas Desain**: Pilih tepat satu arketipe aktif dari [`.agents/design-library/creative/`](../design-library/README.md) dan kunci di `./DESIGN.md` (Level 2):
  - `creative/playful-gamified` — UMKM harian, komunitas, loyalitas deterministik.
  - `creative/kinetic-editorial` — studio arsitektur, agensi, media, portofolio studi kasus.
  - `creative/immersive-storyworld` — destinasi wisata, pameran budaya/museum, *scrollytelling* produk flagship.
  - `creative/neo-brutalist-pop` — streetwear, zine, kolektif musik, rilis terbatas.
  - `creative/warm-craft-nusantara` — kriya Nusantara, perkebunan/kopi lokal, pemesanan langsung.
  - `creative/dark-tech-signal` — developer tools, infrastruktur AI, API fintech, keamanan siber.
  - *(Pengecualian SaaS Back-Office)*: Apabila startup membangun dashboard operasional B2B berdensitas tabel tinggi, diperbolehkan memilih `professional/enterprise-dashboard` saat `project-intake`.
- **Referensi Sekunder**: Skill taste lama (`design-taste-frontend`, `high-end-visual-design`, `industrial-brutalist-ui`, `minimalist-ui`) maupun `stitch-design-taste` hanya bersifat referensi sekunder / eksplorasi opt-in dan **dilarang menggantikan** pilihan arketipe dari Design Library atau menimpa `./DESIGN.md`.
- **Kebebasan terarah**: diperbolehkan tata letak asimetris, tipografi kreatif, dan palet merek yang khas, selama tetap patuh pada aturan `./DESIGN.md` dan bebas pola generik AI.

## 2. Motion & Interaksi
- Tingkat motion: **menengah–ekspresif dan bertujuan** (mikro-interaksi, transisi komponen bermakna, koreografi signature interaction terukur sesuai peta motion `./DESIGN.md`).
- Wajib mematuhi `@media (prefers-reduced-motion: reduce)` untuk menonaktifkan gerakan besar/parallax.
- Motion tidak boleh memblokir input pengguna atau merusak Core Web Vitals (`CLS = 0` target).

## 3. Kebijakan Dependensi
- Bebas memilih pustaka modern yang mempercepat pengiriman fitur, namun setiap dependensi baru tetap memerlukan konfirmasi dan alasan teknis yang jelas.
- Hindari duplikasi pustaka dengan fungsi sama dan pastikan tidak ada paket dengan kerentanan kritis.

## 4. Keamanan & Kepatuhan
- **Baseline OWASP**: validasi input ketat, proteksi SQL Injection, XSS, CSRF, IDOR, rate limiting pada endpoint auth/publik, dan keamanan header HTTP.
- **Aksesibilitas**: target minimal WCAG 2.2 AA untuk alur inti (auth, navigasi, checkout/form utama, kontras teks).
- **Privasi**: jangan simpan rahasia di client-side dan hindari kebocoran PII pada API response.

## 5. Tone Teks & Bahasa
- Mengikuti suara merek (*brand voice*) yang ditetapkan pada saat `project-intake` (santai-profesional, tegas, atau editorial), dalam Bahasa Indonesia natural atau Inggris sesuai audiens.
- Tetap patuh pada larangan klise dan pola copywriting AI di `.agents/rules/antislop-policy.md`.

## 6. Standar Dokumentasi & Deliverable
- Dokumentasi ramping: cukup `README.md` (setup & env), kontrak API/skema jika berubah, dan `DESIGN.md`.
- Perubahan UI wajib diverifikasi visual pada viewport mobile (`375px`) dan desktop (`1280px`).

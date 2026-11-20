# Design Library Arsenal (`.agents/design-library/`)

Perpustakaan `DESIGN.md` ini adalah **Level 1 Design Authority** — sumber arketipe desain resmi untuk seluruh proyek UI yang dikerjakan di workspace ini:

1. **Level 1 — Design Library (`.agents/design-library/`)**: Katalog arketipe dasar (5 aktif di `professional/*`, 6 aktif di `creative/*`, serta 84 referensi merek di [`references/awesome-design-md/`](references/README.md)).
2. **Level 2 — `./DESIGN.md`**: Sumber kebenaran visual final per proyek yang disalin dari satu arketipe Design Library dan disesuaikan untuk proyek tersebut.
3. **Level 3 — `.agents/project.md`**: Konfigurasi proyek (profil, stack, audiens, bahasa, arketipe terpilih, sumber desain, regulasi, suara merek).
4. **Level 4 — `.agents/profiles/`**: Batasan konteks, keamanan, privasi, regulasi, dan gerak tanpa mendikte pemilihan arketipe sendiri.
5. **Level 5 — Skills & Plugins**: Mengimplementasikan engineering (`frontend-modern-web`), token (`design-system-tokens`), interaksi, aksesibilitas, dan QA sesuai `./DESIGN.md` tanpa menimpa keputusan visualnya.

- **Jalur Profesional (`professional/*`)**: Terinspirasi dari disiplin Singapore Government Design System (SGDS) — mengutamakan kejelasan tugas, kontras WCAG 2.2 AA/AAA, pengurangan beban kognitif, pelacakan publik bebas PII, dan ketahanan struktur tanpa dekorasi berlebih.
- **Jalur Kreatif (`creative/*`)**: Dirancang untuk standar kurasi Awwwards (*Site of the Day* & *Developer Award*) — setiap arketipe memiliki satu *Big Idea*, satu *Signature Moment* interaktif nyata, koreografi motion bertujuan dengan fallback `prefers-reduced-motion`, serta gamifikasi deterministik yang jujur bila sesuai dengan model bisnisnya.

---

## 1. Tabel Selektor Arketipe (`DESIGN.md`)

Gunakan tabel ini pada tahap `project-intake` untuk merekomendasikan tepat satu arketipe dasar (lihat perbandingan visual arah pemerintah terbaru di [`professional/_compare/index.html`](professional/_compare/index.html)):

| Jenis Klien / Produk | Cakupan UI | Skala & Audiens | Tujuan Utama | Profil Konteks | Arketipe `DESIGN.md` yang Direkomendasikan | Overlay Tambahan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Layanan Warga, Perizinan, Dukcapil, Kanal Bantuan Publik** | `Landing + Portal Layanan` | Nasional / Daerah, warga umum segala usia & literasi | Pengajuan izin via pemilih tugas & wizard 3 langkah, checklist syarat, pelacakan 2FA tanpa PII, transparansi SLA | `gov-enterprise` | [`professional/gov-civic-warm/DESIGN.md`](professional/gov-civic-warm/DESIGN.md) | Wajib aktifkan [`professional/overlays/id-gov.md`](professional/overlays/id-gov.md) |
| **Kementerian, Pemda, JDIH/Regulasi, Publikasi Kebijakan & Korporat Publik** | `Landing / Publikasi` | Publik luas, jurnalis, peneliti, pemangku kebijakan | Rilis pers berfilter, naskah kebijakan panjang ber-TOC `sticky`, kronologi peraturan, permintaan informasi PPID | `gov-enterprise` | [`professional/gov-institutional-editorial/DESIGN.md`](professional/gov-institutional-editorial/DESIGN.md) | Wajib aktifkan `id-gov.md` bila domain `.go.id` |
| **Portal SatuData, Statistik Publik & Transparansi Anggaran (APBD/APBN/Dana Desa)** | `Landing / Portal Data` | Warga awam, pengamat anggaran, jurnalis data | Cerita data bertahap (*action title*), grafik aman buta warna dengan tabel alternatif & CSV, terjemahan *"Apa artinya bagi saya"* | `gov-enterprise` | [`professional/gov-data-open/DESIGN.md`](professional/gov-data-open/DESIGN.md) | Wajib aktifkan `id-gov.md` bila domain `.go.id` |
| **Aplikasi Internal Enterprise, ERP, Back-Office, B2B SaaS Operasional** | `Dashboard / Aplikasi` | Tim operasional, staf vs manajer (RBAC), volume data tinggi | Pemantauan KPI, persetujuan pengadaan, tabel data padat, filter/sortir, jejak audit (*audit log*) | `gov-enterprise` | [`professional/enterprise-dashboard/DESIGN.md`](professional/enterprise-dashboard/DESIGN.md) | Opsional `id-gov.md` bila milik instansi negara |
| **Platform Hukum, Keuangan Institusional, Lelang/Kepailitan & Portal Multi-Peran** | `Landing + Dashboard` *(preview: Landing)* | Profesional hukum/keuangan, kurator, kreditur, investor, admin | Halaman publik perkara & lelang + shell dashboard seragam lintas peran, fakta tanpa skor/vonis, jejak audit | `gov-enterprise` | [`professional/kuratorku-institutional/DESIGN.md`](professional/kuratorku-institutional/DESIGN.md) | — |
| **UMKM Kuliner, Kedai Kopi, Toko Roti, Retail Harian, Edukasi & Komunitas** | `Landing / Marketing` | Konsumen harian mobile-first, pelanggan berulang lokal | Loyalitas pelanggan (kartu stempel deterministik tanpa judi), peracik pesanan kustom, kuis penemuan produk | `startup-creative` | [`creative/playful-gamified/DESIGN.md`](creative/playful-gamified/DESIGN.md) | — |
| **Studio Arsitektur, Agensi Desain, Penerbitan, Media, Portofolio Personal** | `Landing / Portofolio` | Direktur kreatif, kurator, klien komisaris proyek | Pameran monografi karya, tipografi skala besar tersinkron guliran, panggung studi kasus editorial | `startup-creative` | [`creative/kinetic-editorial/DESIGN.md`](creative/kinetic-editorial/DESIGN.md) | — |
| **Destinasi Wisata, Pameran Museum/Konservasi, Event Budaya, Peluncuran Produk Flagship** | `Landing / Storyworld` | Pengunjung pameran, wisatawan, audiens kampanye | Penceritaan berlapis (*scrollytelling* antarbab), diorama SVG/Canvas terkendali, audio latar opsional (default mati) | `startup-creative` | [`creative/immersive-storyworld/DESIGN.md`](creative/immersive-storyworld/DESIGN.md) | — |
| **Brand Streetwear, Kolektif Zine/Musik, Kreator Gen Z, Rilis Produk Terbatas (*Drop*)** | `Landing / Storefront` | Komunitas muda, kolektor edisi terbatas | Katalog rilis terbatas, penukar warna (*colorway*) langsung, kalkulator diskon bundel deterministik | `startup-creative` | [`creative/neo-brutalist-pop/DESIGN.md`](creative/neo-brutalist-pop/DESIGN.md) | — |
| **UMKM Kriya Nusantara (Batik, Tenun, Keramik), Kopi Perkebunan, Produk Rumahan** | `Landing / Showcase` | Pembeli produk kriya lokal, wisatawan budaya, pemesan WhatsApp | Cerita pembuatan tangan, atribusi motif tradisional yang terverifikasi & hormat, konfigurator pesanan langsung ke WhatsApp | `startup-creative` | [`creative/warm-craft-nusantara/DESIGN.md`](creative/warm-craft-nusantara/DESIGN.md) | — |
| **Developer Tools, Infrastruktur AI, API Fintech/Pembayaran, Keamanan Siber** | `Landing / Developer` | Software engineer, CTO, tim SRE/DevOps | Pembuktian produk lewat konsol telemetri/payload JSON hidup, simulator latensi `p99`, kalkulator kapasitas RPS | `startup-creative` | [`creative/dark-tech-signal/DESIGN.md`](creative/dark-tech-signal/DESIGN.md) | — |

### Pemisahan Jalur: Landing / Publik vs Dashboard / Aplikasi
- **Khusus Landing Page / Publik**: `creative/*` (seluruh 6 arketipe kreatif), `professional/gov-institutional-editorial`, `professional/gov-data-open`, serta `professional/gov-civic-warm` (alur layanan publik).
- **Khusus Dashboard / Aplikasi Internal**: `professional/enterprise-dashboard` (tabel padat, RBAC, audit log).
- **Keduanya (Landing + Dashboard dalam satu bahasa visual)**: `professional/kuratorku-institutional` (`preview.html` menampilkan **Landing Page** publiknya; spesifikasi `<DashboardShell>` berada di Bagian 7 `DESIGN.md`).

### Aturan Resolusi Bila Ragu
1. **Jangan pernah menebak diam-diam** jika proyek klien berada di irisan dua arketipe (misal: UMKM kopi yang ingin bergaya kartu stempel stiker `playful-gamified` vs bergaya cerita kriya kebun `warm-craft-nusantara`, portal pemda yang bimbang antara fokus layanan warga `gov-civic-warm` vs publikasi kebijakan `gov-institutional-editorial`, atau fintech yang butuh berita kebijakan vs dokumentasi API developer `dark-tech-signal`).
2. **Tanyakan tepat satu kali** kepada pengguna saat `project-intake` dengan menyodorkan **2 kandidat arketipe terdekat** beserta konsekuensi visual dan interaksi utamanya dalam 2-3 kalimat.
3. Setelah pengguna memilih, kunci pilihan tersebut di `.agents/project.md` dan `DESIGN.md` root project.

---

## 2. Alur Terpadu "Mulai Project Baru" (9 Langkah Wajib)

Setiap kali memulai proyek baru yang memiliki antarmuka pengguna (tanpa jalur ganda):

1. **Jalankan `project-intake`**: Deteksi framework/stack yang ada (`composer.json`, `package.json`, `pyproject.toml`).
2. **Tentukan Profil Konteks**: Pilih `gov-enterprise` atau `startup-creative` sesuai domain dan regulasi proyek.
3. **Pilih 1 Arketipe Aktif dari Tabel Selektor**: Rujuk **10 arketipe aktif** pada tabel di atas (dilarang memilih arketipe *deprecated* di `_archive/v1/`). Bila klien adalah instansi pemerintah RI (`.go.id`), sertakan [`professional/overlays/id-gov.md`](professional/overlays/id-gov.md).
4. **Salin ke Root Project sebagai `./DESIGN.md`**:
   - Salin file `.agents/design-library/<jalur>/<arketipe>/DESIGN.md` ke `./DESIGN.md` di root proyek.
   - `./DESIGN.md` menjadi **sumber kebenaran visual final (Level 2)**; `frontend-modern-web` berfokus pada frontend engineering, sedangkan skill taste lama (`design-taste-frontend`, `minimalist-ui`, `high-end-visual-design`, `industrial-brutalist-ui`) dan `stitch-design-taste` hanya bersifat referensi sekunder / eksplorasi opt-in.
5. **Sesuaikan Identitas Merek & Kontras**:
   - Ubah nama, palet merek di Bagian 3, dan suara merek sesuai proyek lalu hitung ulang rasio kontras WCAG 2.2 AA (`>= 4.5:1` teks normal, `>= 3.0:1` komponen UI/fokus).
   - Periksa [`REGISTRY.md`](REGISTRY.md) agar tidak mengulang kombinasi `(Font Display + Palet Aksen + Signature Moment)` dari proyek sebelumnya.
   - Ganti data contoh arketipe dengan konten realistis domain klien (bebas `Lorem ipsum` dan kata terlarang di [`_shared/antislop-visual.md`](_shared/antislop-visual.md)).
6. **Turunkan Token Desain (`design-system-tokens`)**: Konversikan `./DESIGN.md` menjadi variabel semantik CSS / konfigurasi Tailwind yang konsisten.
7. **Implementasikan Frontend (`frontend-modern-web`)**: Bangun komponen responsif, semantik HTML, SEO, performa, state UI (`ui-states-and-interaction`), dan aksesibilitas (`accessibility-wcag`) di atas token `./DESIGN.md`.
8. **Catat di `.agents/project.md` & [`REGISTRY.md`](REGISTRY.md)**: Simpan `Arketipe Desain Terpilih` + `Sumber Desain` di `.agents/project.md` dan tambahkan baris baru pada *Log Proyek Klien* di `REGISTRY.md`.
9. **Verifikasi di Browser Nyata**:
   - Buka halaman pada lebar **`375px`**, **`768px`**, dan **`1280px`** lewat `chrome-devtools-plugin`.
   - Jalankan [`_shared/slop-audit.js`](_shared/slop-audit.js) (`window.runSlopAudit(budget, floor)`), `axe-core`, uji navigasi keyboard (`Tab`, `:focus-visible`, `Escape`), uji `prefers-reduced-motion: reduce`, dan Lighthouse.

---

## 3. Prosedur "Tambah Arketipe Baru"

Agar perpustakaan ini dapat berkembang tanpa menurunkan standar kualitas:

1. **Gunakan Kerangka Baku**: Salin [`_template/DESIGN.template.md`](_template/DESIGN.template.md) ke `.agents/design-library/<professional|creative>/<nama-slug>/DESIGN.md` dan isi ke-18 bagiannya tanpa ada placeholder `[...]` yang tersisa.
2. **Cek Diferensiasi & Lisensi**:
   - Pastikan pasangan font, palet warna, kepribadian motion, dan *Signature Moment* belum dipakai di [`REGISTRY.md`](REGISTRY.md).
   - Verifikasi lisensi komersial/terbuka setiap font dan pustaka baru, lalu catat sumber resminya di [`SOURCES.md`](SOURCES.md).
3. **Bangun `preview.html` Mandiri**:
   - Buat `.agents/design-library/<jalur>/<nama-slug>/preview.html` satu file yang mendemonstrasikan seluruh token, tipografi, komponen, *Signature Moment* yang benar-benar berfungsi, minimal 3 interaksi kunci, mode tema alternatif, panel `?dev=1`, dan fallback `prefers-reduced-motion`.
4. **Jalankan Audit Nyata**:
   - Verifikasi dengan `slop-audit.js` (simpan output ke `_audit/<nama-slug>-after.json`), `axe-core` pada 4 state (`light-normal`, `dark-mode`, `form-error`, `dev-drawer-open`), dan Lighthouse mobile & desktop.
   - Ambil dan periksa secara visual screenshot `375px` dan `1280px` untuk memastikan `overflow: false` dan `0` console error.
5. **Daftarkan**: Tambahkan arketipe baru ke Tabel Selektor di file ini dan ke tabel Arketipe Dasar di [`REGISTRY.md`](REGISTRY.md).

---

## 4. Matriks Diferensiasi 10 Arketipe Aktif (+ Arsip v1)

Tabel berikut membuktikan bahwa ke-10 arketipe aktif memiliki identitas visual, tipografi, Dial Ekspresivitas, gerak, dan mekanik utama yang saling terpisah (arsip v1 yang berstatus **DEPRECATED** — dilarang direkomendasikan untuk proyek baru — tetap dipertahankan untuk riwayat di [`professional/_archive/v1/`](professional/_archive/v1/)):

| Arketipe | Dial & Kanvas/Aksen Utama | Pasangan Font (`Display` + `Sans` + `Mono`) | Kepribadian Motion | Gamifikasi / Floor | Slop Budget (`Badges / Radii / Shadows / Alt-BG`) | Signature Moment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`professional/gov-civic-warm`** | Dial `4.5` · Wheat `#F2EDE4` / Teal `#0F5E63` + Terakota `#9A3F16` | `Figtree` + `Inter` + `JetBrains Mono` *(self-hosted)* | Tenang terarah (`150ms–220ms`, `--ease-out-quart`) | Tidak Berlaku · Floor 2 arah LULUS | `0 / <=2 / 0 / 3` | Pemilih 4 tugas warga + ilustrasi loket SVG `2px` + wizard 3 langkah & pelacak Zero-PII + grafik SLA |
| **`professional/gov-institutional-editorial`** | Dial `6.0` · Limestone `#EFECE3` / Prussian `#1B3B6F` + Oker `#8F4A12` | `Source Serif 4` + `IBM Plex Sans` + `JetBrains Mono` *(self-hosted)* | Halus editorial (`150ms–240ms`, scrollspy `IntersectionObserver`) | Tidak Berlaku · Floor 2 arah LULUS | `0 / <=2 / 0 / 2` | Naskah kebijakan ber-TOC `sticky` + arahan foto dokumenter (`16:10` & `4:3`) + pull quote + grafik pesisir |
| **`professional/gov-data-open`** | Dial `5.5` · Slate `#EDF2F7` / Ocean Blue `#1B4D7A` + Rust `#9A3412` + Pine `#115E59` | `Public Sans` + `Inter` + `JetBrains Mono` *(self-hosted)* | Data bertahap (`420ms` KPI count-up & `450ms` chart draw, aman reduced-motion) | Tidak Berlaku · Floor 2 arah LULUS | `0 / <=2 / 0 / 3` | Cerita data 3 tahap berpanggung `sticky` (bisa dilewati) + terjemahan *"Apa artinya bagi saya"* + peta hatch & CSV |
| **`professional/enterprise-dashboard`** | `#FFFFFF` + Operational Teal `#0F766E` | `Inter` (`tabular-nums`) + `JetBrains Mono` | Instan & presisi kerja (`75ms–150ms`, tanpa overshoot) | Tidak Berlaku | `0 / <=3 / 0 / 0` | Tabel pengadaan berdensitas ganda + grafik SVG berpola hatch dengan toggle tabel data & simulasi RBAC |
| **`professional/kuratorku-institutional`** | Canvas `#F8FAFC` / Navy `#001840` + Institutional Amber `#F59E0B` | `Source Serif 4` + `Inter` (`tabular-nums`, tanpa monospace) | Tenang institusional (`150ms–320ms`, `transform`/`opacity` saja) | Tidak Berlaku | `0 / 2 / modal-only / 0` | `<DashboardShell>` 5 peran seragam + `<StatStrip>` 1px divider + form mengikat ber-consent & resi + aturan *facts-not-verdicts* |
| **`creative/playful-gamified`** | Warm Buttercream `#FFF8EB` + Vermilion Jam `#B9341E` + Pandan `#14532D` | `Bricolage Grotesque` + `DM Sans` + System Mono | Taktil membal (`--ease-spring-snappy` & `--ease-spring-gentle` via CSS `linear()`) | Penuh & Deterministik (8 stempel, peracik, kuis, lencana) | `<=2 / <=4 / <=4 offset / 0` | Kartu stempel 8-slot deterministik + maskot vektor reaktif "Mas Biji" & meja racik kopi live |
| **`creative/kinetic-editorial`** | Archival Chalk `#F4F2EC` + Obsidian `#111110` + Vermilion `#A8261B` | `Instrument Serif` (reguler & italic) + `Space Grotesk` + System Mono | Koreografi gulir & panggung (`translate3d` scrub + `View Transitions API`) | Tidak Berlaku | `0 / <=2 / 0 / 2` | Judul monumental dua baris tersinkron guliran + panggung monografi arsip View Transitions |
| **`creative/immersive-storyworld`** | Abyss Trench `#07161B` + Lagoon `#0D252E` + Lantern Amber `#F59E0B` | `Fraunces` + `Manrope` + System Mono | Atmosferik berlapis (kanvas partikel ber-guard `IntersectionObserver` + View Transitions) | Tidak Berlaku | `0 / <=3 / 0 / 2` | Diorama batimetri dual-layer (SVG statis + kanvas partikel terkendali) & narasi selam 3 zona kedalaman |
| **`creative/neo-brutalist-pop`** | Chalk Newsprint `#F7F7F2` + Acid Lime `#D4FF33` + Kobalt `#1D4ED8` | `Syne` + `Archivo` + System Mono | Patah mekanis (`75ms linear`, `steps(6)`, tekan fisik `translate(3px,3px)`) | Ringan Deterministik (diskon bundel 10% & mini-challenge sablon) | `<=2 / 0px (<=1) / <=5 offset / 2` | Plat sablon jaket SVG berbingkai `3px` dengan penukar colorway kain/tinta & kalkulator bundel instan |
| **`creative/warm-craft-nusantara`** | Raw Mori `#F8F3E8` + Bast Fiber `#EFE6D5` + Sogan `#7C3A1D` + Nila `#1E3A5F` | `Lora` + `Source Sans 3` + System Mono | Organik tenang mengikuti tangan pengrajin (`260ms`, View Transitions tahap celup) | Ringan Deterministik (kartu apresiasi 4 kain -> kit perawatan lerak) | `<=1 / <=3 / 0 / 2` | Plat SVG Motif Batik Kawung Yogyakarta ber-atribusi budaya + konfigurator kain & penyusun pesan WhatsApp |
| **`creative/dark-tech-signal`** | Instrument Graphite `#090C0B` + Console `#111715` + Signal Green `#22C55E` | `Sora` + `IBM Plex Sans` + `JetBrains Mono` | Sinyal osiloskop presisi (`150ms`, denyut sinyal dapat dijeda) | Tidak Berlaku | `0 / 4px (<=2) / 0 / 2` | Simulator lonjakan latensi `p99` & anomali API langsung dengan gelombang SVG + inspektor trace JSON |

# Sumber Fakta, Standar, dan Lisensi (`SOURCES.md`)

Seluruh klaim eksternal, bobot evaluasi, regulasi, serta versi dan lisensi pustaka yang digunakan di `.agents/design-library/` dicatat di dokumen ini. Setiap butir diberi label status **`TERVERIFIKASI`** atau **`TIDAK DIVERIFIKASI`**.

---

## 1. Standar Pemerintah Singapura (SGDS & Digital Service Standards)

| Topik | Fakta & Prinsip yang Diekstrak | Sumber | Status |
| :--- | :--- | :--- | :--- |
| **Arsitektur Token** | Dua lapis token: *primitive tokens* (skala mentah) dan *semantic/component tokens* (`--sgds-primary`, `--sgds-body-color`, `--sgds-gap-*`, `--sgds-padding-*`, `--sgds-margin-*`). Nilai token responsif beradaptasi otomatis lewat `themes/responsive.css` pada breakpoint desktop (`lg`). | `designsystem.tech.gov.sg`, `@govtechsg/sgds` (GovTech Singapore) | `TERVERIFIKASI` |
| **Skala Spasi (8px Grid)** | Berbasis grid 8px dengan sub-unit 2px/4px untuk komponen rapat: `sgds-spacer-1` (`2px` / `0.125rem`), `spacer-2` (`4px` / `0.25rem`), `spacer-3` (`8px` / `0.5rem`), `spacer-4` (`12px` / `0.75rem`), `spacer-5` (`16px` / `1rem`), lalu naik bertahap (`24px`, `32px`, `48px`, `64px`). | Dokumentasi Spacing `@govtechsg/sgds` (`designsystem.tech.gov.sg`) | `TERVERIFIKASI` |
| **Breakpoint Responsif** | `xs`: `320px–511px`, `sm`: `512px–767px`, `md`: `768px–1023px`, `lg`: `1024px–1279px` (titik adaptasi token), `xl`: `1280px–1439px`, `2-xl`: `>=1440px`. | Dokumentasi Breakpoints `@govtechsg/sgds` (`designsystem.tech.gov.sg`) | `TERVERIFIKASI` |
| **Tipografi** | Font utama **Inter** dengan fallback `system-ui, -apple-system, sans-serif`; bobot 300, 400, 600, 700; skala token dari `--sgds-font-size-heading-xl` (H1–H3) hingga `body-lg`, `body-md`, `body-sm`. | `@govtechsg/sgds` Typography Foundation | `TERVERIFIKASI` |
| **Komponen & Pola Layanan** | Masthead (`<sgds-masthead>`), breadcrumbs, stepper/pelacak progres form multi-langkah, validasi inline + error summary, alert/status banner, accordion FAQ, kartu akses cepat berbasis tugas (*task-first*). | `@govtechsg/sgds` Components & Patterns | `TERVERIFIKASI` |
| **Pola Kepercayaan (Masthead)** | Banner paling atas yang menjelaskan bahwa situs adalah layanan pemerintah resmi beserta cara memeriksa domain dan kunci HTTPS. **Aturan ketat kami**: pola ini hanya boleh diaktifkan pada situs instansi resmi yang sah; dilarang memakai lambang negara Singapura, Merlion, atau identitas `.gov.sg`. | `designsystem.tech.gov.sg` Masthead Usage Guidelines | `TERVERIFIKASI` |
| **Detail Kuantitatif Sub-klausul DSS Terbaru** | Portal DSS (`tech.gov.sg`) mengalami pembaruan berkala; detail angka SLA spesifik internal di balik login WOG (Whole-of-Government) tidak dapat diakses publik. | `tech.gov.sg` | `TIDAK DIVERIFIKASI` (hanya prinsip publik SGDS yang dipakai) |

---

## 2. Standar Evaluasi Awwwards

| Kategori / Penghargaan | Bobot & Kriteria Resmi | Sumber | Status |
| :--- | :--- | :--- | :--- |
| **Site of the Day (SOTD) — Bobot Juri** | **Design: 40%**, **Usability: 30%**, **Creativity: 20%**, **Content: 10%**. Dinilai skala 1–10 oleh panel juri internasional (minimal 18 juri). | `awwwards.com/about-evaluation/` | `TERVERIFIKASI` |
| **Developer Award — 5 Pilar Teknis** | 1. **Semantics / Markup / Meta-data** (W3C HTML5, landmark semantik, OpenGraph/schema)<br>2. **WPO / Performance** (Core Web Vitals LCP/INP/CLS, kompresi AVIF/WebP, manajemen memori loop animasi)<br>3. **Accessibility (a11y)** (navigasi keyboard, ARIA, fokus terlihat, teks alternatif Canvas/WebGL)<br>4. **Animations / Transitions** (60fps, progressive enhancement)<br>5. **Responsive Design / Mobile Adaptability** | `awwwards.com/about-evaluation/` (Developer Award) | `TERVERIFIKASI` |
| **Studi Empiris 247 Situs Kurasi** | Analisis pola arah seni, komposisi hero, sistem tipografi, dan daftar *tells* gelombang 1–3 (2023–2026) dari 247 situs Awwwards SOTD & One Page Love. | `.agents/skills/design-taste-frontend/references/research.md` & `tells.md` (lokal) | `TERVERIFIKASI` |

---

## 3. Regulasi & Konteks Indonesia (`overlays/id-gov.md` & Etika)

| Instrumen / Topik | Ketentuan Utama yang Relevan untuk UI & Sistem | Sumber | Status |
| :--- | :--- | :--- | :--- |
| **UU No. 27 Tahun 2022 (UU PDP)** | Disahkan 17 Oktober 2022. Mengatur pemisahan data pribadi umum vs spesifik, kewajiban persetujuan eksplisit (*explicit consent*) dalam Bahasa Indonesia, hak subjek data (akses, koreksi, hapus), dan minimisasi pengumpulan data pada formulir. | `peraturan.bpk.go.id` / `jdihn.go.id` | `TERVERIFIKASI` |
| **Perpres No. 95 Tahun 2018 (SPBE)** | Kerangka Sistem Pemerintahan Berbasis Elektronik untuk keterpaduan layanan publik digital nasional, interoperabilitas, dan keamanan informasi. | `peraturan.bpk.go.id` | `TERVERIFIKASI` |
| **UU No. 24 Tahun 2009** | Mengatur kewajiban penggunaan Bahasa Indonesia pada informasi/layanan publik serta pembatasan ketat penggunaan Lambang Negara (Garuda Pancasila) hanya untuk penyelenggara negara/dokumen resmi yang berwenang. | `peraturan.bpk.go.id` | `TERVERIFIKASI` |
| **Design System Tunggal Nasional RI (setara paket kode SGDS)** | Belum ditemukan satu paket komponen web/token CSS tunggal yang diwajibkan secara seragam di seluruh kementerian/lembaga dan pemda yang dapat diverifikasi publik seperti `@govtechsg/sgds`. | Penelusuran publik `.go.id` | `TIDAK DIVERIFIKASI` |
| **Aturan Undian / Promosi Berhadiah** | Undian berhadiah berbasis peluang acak diatur ketat di Indonesia (UU No. 22 Tahun 1954 tentang Undian & perizinan Kemensos). Oleh karena itu, playbook gamifikasi melarang mekanik peluang berbayar/mirip judi dan mewajibkan verifikasi hukum klien untuk hadiah promosi. | Kerangka hukum undian RI | `PERLU VERIFIKASI HUKUM KLIEN` |
| **Motif Batik Kawung Yogyakarta** | Pola geometris empat bulatan lonjong simetris mengelilingi satu titik pusat, terinspirasi penampang buah aren (*kolang-kaling*) dan tradisi Keraton Yogyakarta (pasca Perjanjian Giyanti 1755; Batik Indonesia ditetapkan sebagai Warisan Budaya Takbenda UNESCO 2 Oktober 2009). Melambangkan pengendalian empat penjuru hawa nafsu menuju pusat kesadaran (*suwung*), kemurnian hati, keseimbangan, dan kebermanfaatan menyeluruh pohon aren. | `jogjaprov.go.id` (Pemda DIY) / Literatur Warisan Budaya Kemdikbud | `TERVERIFIKASI` |

---

## 3.5 Standar Sistem Desain Pemerintah Internasional & Data Publik (Riset GOV V2)

| Negara / Lembaga | Sistem & Portal Resmi yang Dianalisis | Pola Utama yang Diekstrak (Ramah, Ilustrasi, Tipografi, Data) | Status |
| :--- | :--- | :--- | :--- |
| **Singapura (GovTech / OGP)** | `designsystem.tech.gov.sg`, `life.gov.sg`, `supportgowhere.life.gov.sg`, `gobusiness.gov.sg`, `isomer.gov.sg` | Orientasi tugas (*task-first*), token dual-layer, bahasa polos aktif (*active voice*), ilustrasi humanis terkendali di portal warga (`LifeSG`/`Isomer`) untuk mengurangi kecemasan birokrasi lansia dan pelaku usaha | `TERVERIFIKASI` |
| **Inggris (GDS)** | `design-system.service.gov.uk`, `homeoffice.gov.uk` | *GDS Transport* berketerbacaan tinggi (>= 14px minimum umum), ilustrasi hanya bila teruji membantu pemahaman konsep/nomor rujukan dokumen (*no decorative fluff*), prinsip *"This is for everyone"* | `TERVERIFIKASI` |
| **Inggris (ONS & Analysis Function)** | `service-manual.ons.gov.uk`, `ons.gov.uk`, `analysisfunction.civilservice.gov.uk` | Palet data aman buta warna berbasis luminansi (*Ocean Blue* `#206095`), label langsung (*direct labeling* tanpa legenda terpisah), teks grafik horizontal `>= 14px`, judul bertemuan (*action title*), wajib alternatif `<table>` & scrollytelling berbasis narasi | `TERVERIFIKASI` |
| **Korea Selatan (MOIS)** | `krds.go.kr`, `mois.go.kr` | **KRDS (Korean Government Design System)**: token tipografi & elevasi terstruktur, inklusivitas bagi lansia dan disabilitas (*KWCAG 2.2* + WCAG 2.2), pemisahan pola dasar (*basic*) dan pola layanan (*service patterns*) | `TERVERIFIKASI` |
| **Australia (DTA & ABS)** | `digital.gov.au`, `agriculture.gov.au` (AgDS), `servicesaustralia.gov.au`, `my.gov.au`, `abs.gov.au` | Prinsip *"Consistent, not uniform"* (struktur navigasi konsisten dengan sub-tema warna instansi), hierarki skimming tegas di `ABS`, tanpa foto stok kosmetik pada alur transaksi | `TERVERIFIKASI` |
| **Selandia Baru (NZGDS)** | `digital.govt.nz`, `govt.nz` | Pola interaksi baku lintas lembaga (*address*, *search*, multi-step application forms), kepatuhan penuh Web Standards / WCAG agar warga mengenali alur antar-kementerian | `TERVERIFIKASI` |
| **Estonia (RIA / Veera)** | `eesti.ee`, `estonia.ee` | **Veera** & Brand Estonia: palet terinspirasi alam & laut (`#0030DE` + netral hangat), ilustrasi vektor bersistem konsisten untuk layanan negara digital | `TERVERIFIKASI` |
| **Amerika Serikat (USWDS)** | `designsystem.digital.gov`, `digital.gov` | *Public Sans*, konsistensi rasio media di Collection/Card, data viz sederhana satu gagasan utama per grafik dengan alternatif tabel semantik | `TERVERIFIKASI` |
| **SingStat, OWID & World Bank** | `singstat.gov.sg`, `data.gov.sg`, `ourworldindata.org`, `data.worldbank.org` | *Headline-first narrative* (angka kunci besar + panah/arah perubahan), tab pengalih **Chart / Map / Table** + tombol unduh CSV/JSON langsung, TOC sticky dengan *scrollspy*, *pull quotes* temuan data | `TERVERIFIKASI` |

---

## 4. Lisensi & Versi Pustaka / Font

| Komponen | Versi Terverifikasi | Lisensi | Ketentuan Pemakaian Komersial | Status |
| :--- | :--- | :--- | :--- | :--- |
| **GSAP (`gsap`)** | `3.15.1` | Standard "No Charge" GSAP License (pasca akuisisi Webflow) | Gratis 100% untuk proyek komersial & klien (termasuk ScrollTrigger, SplitText, MorphSVG, DrawSVG). Dilarang dipakai membuat produk *no-code visual animation builder* pesaing. | `TERVERIFIKASI` (`gsap.com`, `npmjs.com`) |
| **Lenis (`lenis`)** | `1.3.27` | MIT License | Gratis untuk penggunaan pribadi & komersial (paket npm resmi: `lenis`, menggantikan `@studio-freight/lenis`). | `TERVERIFIKASI` (`github.com/darkroomengineering/lenis`, `npmjs.com`) |
| **Three.js (`three`)** | `0.187.0` | MIT License | Gratis untuk penggunaan pribadi & komersial dengan mempertahankan pemberitahuan hak cipta MIT. | `TERVERIFIKASI` (`threejs.org`, `npmjs.com`) |
| **Google Fonts** (`Inter`, `Plus Jakarta Sans`, `Space Grotesk`, `Fraunces`, `Instrument Serif`, `JetBrains Mono`, `Syne`, `Bricolage Grotesque`, `DM Sans`, `Manrope`, `Archivo`, `Lora`, `Source Sans 3`, `Sora`, `IBM Plex Sans`) | Variabel / Statis WOFF2 | SIL Open Font License 1.1 (`OFL-1.1`) | Bebas digunakan, dibundel (*self-hosted*), dan dimodifikasi untuk proyek komersial maupun pemerintah. | `TERVERIFIKASI` (`fonts.google.com`) |
| **Font Self-Hosted Jalur GOV V2** (`Public Sans`, `Figtree`, `Source Serif 4`, `Literata`, `Newsreader`) | Variabel / Statis WOFF2 | SIL Open Font License 1.1 (`OFL-1.1`) | Sumber resmi terverifikasi: `github.com/uswds/public-sans`, `github.com/erikdkennedy/figtree`, `github.com/adobe-fonts/source-serif`, `fonts.google.com/specimen/Literata`, `github.com/productiontype/NewsReader`. Bebas self-host di server instansi/proyek tanpa CDN eksternal. | `TERVERIFIKASI` (GitHub resmi & `fonts.google.com`) |
| **Fontshare** (`Clash Display`, `Satoshi`, `Cabinet Grotesk`, `General Sans`, `Zodiak`) | WOFF2 (ITF) | Indian Type Foundry Free Font License (FFL) / `OFL-1.1` | 100% gratis untuk penggunaan pribadi dan komersial (cetak, web, aplikasi). | `TERVERIFIKASI` (`fontshare.com`) |

---

## 5. Audit Cakupan Skill Desain yang Sudah Ada di Workspace

Agar `.agents/design-library/` **melengkapi** (bukan menggandakan) skill yang sudah terpasang:

| Skill / Plugin Existing | Apa yang Sudah Dicakup | Peran `.agents/design-library/` (Pelengkap) |
| :--- | :--- | :--- |
| `design-taste-frontend` (TasteSkill v2) | Mesin undian 20 arah seni (`draw.mjs`), inspektor DOM/screenshot (`inspect.mjs`), linter frase/pola terlarang (`lint.mjs`), daftar *tells* 2023–2026. | Menyediakan **9 arketipe `DESIGN.md` siap pakai** (3 profesional + 6 kreatif) dengan token lengkap, rubrik Awwwards, playbook gamifikasi, dan konteks Indonesia. |
| `stitch-design-taste` | Format semantik `DESIGN.md` yang mudah dibaca agent & Google Stitch. | `_template/DESIGN.template.md` mempertahankan kompatibilitas dengan struktur semantik Stitch sambil memperluasnya ke 18 bagian teknis terukur. |
| `minimalist-ui`, `high-end-visual-design`, `industrial-brutalist-ui` | Prompt gaya klasik satu arah (monokrom hangat, mewah lembut, Swiss/CRT). | Diposisikan sebagai rujukan gaya sekunder; sumber kebenaran utama setiap proyek adalah `DESIGN.md` yang disalin dari perpustakaan ini. |
| `frontend-modern-web` | Pola komponen Blade/Tailwind/Livewire/Inertia & form a11y. | Mengonsumsi token CSS/Tailwind yang didefinisikan oleh `DESIGN.md` terpilih. |
| `antislop` (v3.2.23) & `antislop-policy.md` | Filter larangan umum kode, copy, UI, dan mobile. | `_shared/antislop-visual.md` menerjemahkan larangan tersebut menjadi aturan inspeksi visual spesifik per arketipe desain. |
| `modern-web-guidance-plugin` (v1.0.4) | Pencarian API web modern (View Transitions, Scroll-driven animations, `:has()`, Fetch Priority). | Dipakai saat mengimplementasikan teknik motion dan optimasi LCP dari `DESIGN.md`. |
| **Kuratorku.com Institutional Design System (v2)** | Standar perusahaan internal untuk platform hukum & keuangan institusional (`/Users/macbookair/Project/Kuratorku.com/DESIGN.md`). | Diintegrasikan sebagai arketipe aktif `professional/kuratorku-institutional/` dengan `preview.html` dan terdaftar di `REGISTRY.md`. |
| **`VoltAgent/awesome-design-md`** *(MIT License)* | 84 sistem desain referensi merek/industri (`linear.app`, `stripe`, `claude`, `notion`, `vercel`, `framer`, dll.). | Disimpan sebagai katalog referensi di `.agents/design-library/references/awesome-design-md/` (lihat `references/README.md`). |

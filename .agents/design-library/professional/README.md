# Jalur Profesional (`professional/`)

Jalur ini dirancang untuk instansi pemerintah, BUMN, lembaga keuangan, rumah sakit, dan sistem enterprise yang mengutamakan **kejelasan tugas (*task-first*), keterpercayaan, aksesibilitas WCAG 2.2 AA, kecepatan muat, dan konsistensi lintas perangkat**.

---

## 1. Adaptasi Prinsip Singapore Government Design System (SGDS)

Kami mengekstrak prinsip rekayasa dan arsitektur informasi dari **Singapore Government Design System (`@govtechsg/sgds`)** tanpa menyalin tampilan mentah, logo, Merlion, atau identitas `.gov.sg`:

| Prinsip yang Diambil (SGDS / DSS) | Cara Kami Menerapkannya di Jalur Profesional |
| :--- | :--- |
| **Arsitektur Token Dua Lapis & Responsif** (primitive → semantic token yang beradaptasi di breakpoint `lg: 1024px`) | Setiap `DESIGN.md` profesional mendefinisikan CSS custom properties primitif dan semantik (`--bg-canvas`, `--text-primary`, `--accent-primary`, `--space-*`) yang otomatis menyesuaikan ukuran huruf dan spasi container pada `>=1024px`. |
| **Grid Spasi 8px dengan Sub-unit 4px/2px** (`2px`, `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`) | Seluruh padding, gap, dan margin komponen mengikat pada kelipatan `8px` (`4px` hanya untuk elemen rapat seperti badge dan jarak ikon-ke-teks). |
| **Breakpoint Terstandar** (`xs: 320`, `sm: 512`, `md: 768`, `lg: 1024`, `xl: 1280`, `2xl: 1440`) | Semua layout diuji dari lebar minimum `320px/375px` hingga container maksimum `1280px/1440px`, dengan lebar baris baca (*measure*) dikunci pada `60ch–72ch`. |
| **Tipografi Fungsional Berkontras Tinggi** (`Figtree`, `Source Serif 4`, `Public Sans`, `IBM Plex Sans`, `Inter` + fallback metrik terancang) | Menggunakan font berlisensi terbuka (`SIL OFL-1.1`) yang **di-self-host penuh di `professional/_fonts/`** (zero CDN eksternal), angka tabular + lining (`font-variant-numeric: tabular-nums lining-nums`) untuk seluruh tabel/nominal/kode registrasi, dan rasio kontras teks utama `>= 7:1` (AAA) atau minimal `>= 4,5:1` (AA) terukur. |
| **Pola Kepercayaan (*Official Site Masthead*)** | Diterapkan sebagai komponen **Strip Identitas Resmi** yang dapat diperluas (*expandable*) untuk menjelaskan pemilik domain resmi dan enkripsi HTTPS. **Aturan keras**: komponen ini hanya dipasang pada situs instansi resmi yang berhak (misal `.go.id` dengan overlay `id-gov.md`); dilarang dipasang pada situs swasta/non-instansi. |
| **Desain Berorientasi Tugas (*Task-First*)** | Halaman utama layanan publik langsung menampilkan pencarian layanan, tugas terpopuler, dan pelacak status permohonan — bukan karusel foto seremonial atau sambutan pejabat. |
| **Formulir Multi-Langkah & Ringkasan Error** (stepper, validasi inline, *error summary box* di atas form) | Setiap form panjang dipecah menjadi langkah bernomor jelas dengan kemampuan simpan draf, pesan error spesifik di bawah field (`aria-describedby`), dan kotak ringkasan error yang memindahkan fokus keyboard langsung ke field bermasalah. |
| **Bahasa Sederhana & Bermartabat** | Kalimat aktif, pendek, bebas jargon birokrasi atau klise pemasaran, menjelaskan syarat dokumen dan estimasi waktu penyelesaian secara eksplisit di awal sebelum pengguna mengisi form. |

---

## 2. Empat Arketipe Aktif Jalur Profesional (GOV V2 + Dashboard) & Sumber Terkait

1. **`gov-civic-warm/`** *(GOV V2 · Dial `4.5 / 10`)*: Layanan warga, portal perizinan, dan kanal bantuan (*"terasa seperti dibantu petugas yang sabar"*). Menggunakan ilustrasi SVG bersistem garis `2px`, pemilih *"Apa yang ingin Anda lakukan hari ini?"*, wizard 3 langkah + bantuan `sticky`, pelacak berkas 2FA Zero-PII, grafik SLA bertabel, serta arahan foto pendampingan loket.
2. **`gov-institutional-editorial/`** *(GOV V2 · Dial `6.0 / 10`)*: Kementerian, pemda, regulasi, dan publikasi kebijakan (*"otoritas yang bisa didekati"*). Memadukan serif `Source Serif 4` dengan `IBM Plex Sans`, arahan foto dokumenter lapangan (`16:10` & `4:3`), megamenu 3 kolom + pencarian + toggle `ID/EN`, *sticky Table of Contents* penyorot bab aktif, *pull quote*, kronologi regulasi, dan formulir PPID.
3. **`gov-data-open/`** *(GOV V2 · Dial `5.5 / 10`)*: Portal data terbuka, statistik publik, dan transparansi anggaran (*"angka yang bisa dipahami warga biasa"*). Menyajikan *action title*, 3 *sparkline* KPI, cerita data 3 tahap berpanggung grafik `sticky` (bisa dilewati via keyboard), peta koridor berpola hatch aman buta warna, pemilih *"Apa artinya bagi saya"*, penjelajah tabel terfilter, serta ekspor CSV.
4. **`enterprise-dashboard/`**: Sistem back-office internal ASN, ERP, dan analitik operasional. Fokus pada kepadatan data terstruktur, tabel sort/filter/bulk-action/sticky-column, simulasi RBAC, log audit, dan toggle kepadatan (*comfortable* vs *compact*).

### Pendukung & Arsip
- **Perbandingan Berdampingan GOV V2**: [`_compare/index.html`](_compare/index.html) + [`GOV-V2-RESEARCH.md`](GOV-V2-RESEARCH.md).
- **Font Self-Hosted (`SIL OFL-1.1`)**: [`_fonts/`](_fonts/README.md) (`Figtree`, `Inter`, `Public Sans`, `Source Serif 4`, `IBM Plex Sans`, `JetBrains Mono`).
- **Arsip v1 (`[DEPRECATED — Jangan Gunakan untuk Proyek Baru]`)**: [`_archive/v1/gov-portal/`](_archive/v1/gov-portal/DESIGN.md) dan [`_archive/v1/corporate-trust/`](_archive/v1/corporate-trust/DESIGN.md) tetap disimpan untuk catatan historis dan perbandingan perubahan tanpa penghapusan.
- **Overlay Wajib Pemerintah RI**: [`overlays/id-gov.md`](overlays/id-gov.md) (EYD V, UU No. 24 Tahun 2009, UU PDP No. 27 Tahun 2022, dan keselarasan SPBE).

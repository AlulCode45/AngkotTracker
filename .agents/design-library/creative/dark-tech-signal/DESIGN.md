# DESIGN.md — Dark Tech Signal (`creative/dark-tech-signal`)

- **Arketipe Sumber**: `creative/dark-tech-signal`
- **Jalur**: Kreatif
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 6 | Variance: 8 | Motion: 7`
- **Tingkat Kerumitan**: `Full (Default Demo Produk & Telemetri)` dan `Lite (Dokumentasi & Kalkulator Cepat)`

---

## 1. Identitas, Niat & Big Idea
- **Identitas & Niat**: Antarmuka presisi tinggi untuk produk SaaS teknis, infrastruktur AI, API pembayaran/fintech, keamanan siber, dan perkakas pengembang (*developer tools*). Terinspirasi dari layar osiloskop dan instrumen avionik (hitam grafit `#090C0B`, hijau sinyal fosfor `#22C55E`, dan kuning peringatan `#F59E0B`), halaman ini menolak gradien ungu-biru klise dan langsung membuktikan nilai produk lewat simulasi payload JSON hidup, grafik latensi `p99`, dan kalkulator biaya yang jujur.
- **Big Idea**: Membuktikan keandalan produk teknis secara langsung di halaman pembuka melalui konsol telemetri interaktif yang memadukan grafik sinyal SVG hidup, inspektor payload JSON, dan kalkulator kapasitas tanpa jargon kosong.

---

## 2. Prinsip Desain
1. **Bukti Interaktif Menggantikan Klaim Marketing**:
   - *Terapkan*: Buka halaman langsung dengan simulasi trafik nyata (skenario normal vs lonjakan anomali) di mana pengunjung dapat menekan tombol skenario dan melihat perubahan metrik `p99`, *throughput*, serta jejak JSON.
   - *Hindari*: Hero berisi bola neon ungu-sian dengan slogan kabur seperti *"Masa Depan AI Tanpa Batas"*.
2. **Cahaya Instrumen yang Terkendali, Tanpa Neon Kabur**:
   - *Terapkan*: Gunakan latar grafit `#090C0B` dengan garis grid `1px solid #1E2925` dan sinyal hijau tajam `#22C55E` (`8,62:1`) hanya pada jalur sinyal aktif, status sehat, dan tombol utama.
   - *Hindari*: `box-shadow` berpendar kabur (*glowing orbs*) atau `backdrop-filter` berlapis-lapis.
3. **Disiplin Monospace & Tabular Figures**:
   - *Terapkan*: Gunakan `JetBrains Mono` untuk payload JSON, ID span (`tr_9f82a10c`), dan endpoint API; gunakan `tabular-nums` pada setiap angka latensi (`18,4 ms`), RPS (`50.000 req/dtk`), dan estimasi Rupiah.
   - *Hindari*: Angka metrik yang bergeser lebar saat nilainya berubah.
4. **Kontrol Penuh atas Aliran Telemetri Hidup**:
   - *Terapkan*: Sediakan tombol **Jeda Telemetri** (`#stream-toggle`, `aria-pressed`) dan hentikan seluruh pergeseran grafik secara otomatis saat `prefers-reduced-motion: reduce`.
   - *Hindari*: Grafik bergerak tanpa henti yang tidak bisa dijeda oleh engineer yang sedang membaca log.
5. **Satu Bab Arsitektur Berlatar Permukaan Instrumen**:
   - *Terapkan*: Pertahankan `#090C0B` sebagai kanvas utama dan gunakan tepat satu seksi `#111715` untuk **Pipa Ingesti & Retensi Jejak** agar struktur teknis terpisah jelas.
   - *Hindari*: Kotak di dalam kotak (`maxNestedContainers: 0`) atau tumpukan badge dekoratif.

---

## 3. Token Warna & Pasangan Kontras Terukur

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai Utama (*Instrument Graphite*) | Mode Alternatif (*Daylight Lab*) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Instrument Graphite / Clean Lab | `#090C0B` | `#F4F7F5` | Latar kanvas utama |
| `--bg-chapter` | Rack Surface / Pale Sage | `#111715` | `#E8F0EC` | Bab tunggal Arsitektur Pipa & Permukaan Konsol |
| `--bg-surface` | Console Slate / Pure White | `#111715` | `#FFFFFF` | Panel payload JSON & input form |
| `--text-primary` | Phosphor White / Deep Carbon | `#EEF2F0` | `#0D1311` | Judul H1-H3, angka KPI, teks utama |
| `--text-secondary` | Alloy Mist / Slate Ink | `#B8C4BE` | `#32423C` | Penjelasan teknis & dokumentasi |
| `--text-muted` | Terminal Gray / Muted Sage | `#8B9A93` | `#485B54` | Label sumbu, timestamp, satuan (`>= 6,6:1`) |
| `--border-subtle` | Grid Hairline / Lab Rule | `#1E2925` | `#CBD6D0` | Garis pemisah struktural `1px` |
| `--border-strong` | Bezel Steel / Dark Alloy | `#6A8077` | `#32423C` | Bingkai input, tombol outline, konsol |
| `--accent-primary` | Signal Green / Forest Signal | `#22C55E` | `#15703E` | CTA primer & garis sinyal sehat |
| `--accent-on-primary` | Graphite Ink / Pure White | `#090C0B` | `#FFFFFF` | Teks di atas `--accent-primary` |
| `--accent-amber` | Anomaly Amber / Rust Alert | `#F59E0B` | `#B45309` | Sinyal lonjakan latensi / anomali |
| `--focus-ring` | Bright Phosphor / Forest Ring | `#4ADE80` | `#15703E` | Cincin `:focus-visible` tegas `3px` |
| `--status-success-bg` / `--status-success-fg` | Sehat / OK | `#102B1C` / `#BBF7D0` | `#DCFCE7` / `#14532D` | Status klaster sehat & validasi berhasil |
| `--status-danger-bg` / `--status-danger-fg` | Anomali / Error | `#451212` / `#FECACA` | `#FEE2E2` / `#991B1B` | Status anomali & Error Summary Box |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` / `Background`) | Instrument Graphite | Daylight Lab | Target WCAG | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--text-primary` / `--bg-canvas` | **`17,39:1`** | **`17,41:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` / `--bg-canvas` | **`10,92:1`** | **`9,83:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` / `--bg-canvas` | **`6,68:1`** | **`6,71:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--text-muted` / `--bg-surface` (`#93A39B` / `#111715`) | **`6,87:1`** | — | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-on-primary` / `--accent-primary` | **`8,62:1`** | **`6,14:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-primary` / `--bg-canvas` | **`8,62:1`** | **`5,69:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-amber` / `--bg-canvas` | **`9,15:1`** | — | `>= 4,5:1` (AA) | `LULUS (AAA)` |
| `--focus-ring` / `--bg-canvas` | **`11,27:1`** | **`5,69:1`** | `>= 3,0:1` (SC 1.4.11) | `LULUS (AA)` |
| `--status-danger-fg` / `--status-danger-bg` | **`10,77:1`** | **`6,80:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |

---

## 4. Tipografi

### A. Keluarga Font & Lisensi
| Peran | Token | Keluarga Font | Lisensi & Sumber | Fallback Stack |
| :--- | :--- | :--- | :--- | :--- |
| Display Teknis | `--font-display` | `'Sora'` | SIL OFL-1.1 (`fonts.google.com`, bobot `500`, `700`) | `'Sora Fallback', system-ui, sans-serif` |
| Body & Kontrol UI | `--font-sans` | `'IBM Plex Sans'` | SIL OFL-1.1 (`fonts.google.com`, bobot `400`, `500`, `700`) | `'Plex Fallback', system-ui, sans-serif` |
| Payload, Trace & Kode | `--font-mono` | `'JetBrains Mono'` | SIL OFL-1.1 (`fonts.google.com`, bobot `400`, `500`, `700`) | `ui-monospace, SFMono-Regular, Menlo, monospace` |

**Aturan Bobot & Angka**: Maksimum **3 bobot huruf** (`400`, `500`, `700`). Seluruh angka latensi, kuota request per detik, dan tarif bulanan memakai `font-variant-numeric: tabular-nums`.

### B. Skala Responsif, Line-Height & Tracking
| Token | Ukuran (Mobile -> Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(2.2rem, 4.8vw, 3.75rem)` | `1.06` | `-0.025em` | `700` | H1 proposisi teknis utama |
| `--text-h2` | `clamp(1.6rem, 3vw, 2.3rem)` | `1.14` | `-0.02em` | `700` | Judul seksi utama |
| `--text-h3` | `1.125rem` (`18px`) | `1.3` | `-0.01em` | `700` | Subjudul modul & metrik |
| `--text-body-lg` | `1.0625rem` (`17px`) | `1.6` | `0` | `400` | Ringkasan nilai produk (`max-width: 60ch`) |
| `--text-body` | `1rem` (`16px`) | `1.55` | `0` | `400` | Dokumentasi & input (`>= 16px` mobile) |
| `--text-sm` | `0.875rem` (`14px`) | `1.45` | `0.01em` | `500` | Payload JSON, tab skenario, sumbu metrik |

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `--space-2: 8px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`.
- **Grid & Container**: `--container-max: 1200px`, konsol hero 2 kolom `1fr 1.05fr`, kalkulator 2 kolom `1.15fr 0.85fr`.
- **Radius (`<= 2` nilai)**: `--radius-tech: 4px` seragam di seluruh tombol, konsol, input, dan indikator status (`uniqueBorderRadii: 1 <= 2`).
- **Elevasi**: `--shadow-none: none`, `--shadow-focus: 0 0 0 3px var(--focus-ring)`.

---

## 5.5 Slop Budget & Aturan Badge
| Metrik per Tampilan | Batas Arketipe Ini | Catatan / Alasan |
| :--- | :--- | :--- |
| Badge/pil dekoratif | **`0`** | Versi rilis dan protokol ditulis sebagai teks monospace polos, bukan pil hiasan. |
| Badge status informatif | Hanya yang berubah | Indikator status klaster `#signal-status` (`NORMAL` vs `ANOMALI`) bertanda `data-status-badge="true"`. |
| Tombol terisi (primer) | Maks **`1`** per layar 900px | `#hero-cta` berada di Hero dan `#sandbox-submit` di akhir halaman (`> 2.200px` berjarak). |
| Tombol outline | Maks **`4`** seluruh halaman | Khusus `#theme-toggle` dan `#stream-toggle` (`2 <= 4`). |
| Border-radius unik | Maks **`2`** | Seragam `4px` (`uniqueBorderRadii: 1`). |
| Ketebalan border unik | Maks **`2`** | `1px` grid struktural & `2px` kontrol/fokus. |
| Bobot huruf unik | Maks **`3`** | `400`, `500`, `700`. |
| Wadah bersarang | **`0`** | Panel konsol merender `<svg>` dan `<pre>` langsung tanpa membungkus `<div>` berborder berlapis. |
| Bayangan elemen statis | **`0`** | Kejernihan teknis dibangun lewat garis hairlines `1px`, bukan bayangan. |
| Latar seksi berselang-seling | Maks **`2`** | Masuk dan keluar tepat 1 seksi **Arsitektur Pipa Ingesti** (`#111715`). |

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
1. **Konsol Telemetri Hidup (`#telemetry-svg` + `#live-json-output` + `#stream-toggle`)**: Tab skenario (`Trafik Normal`, `Lonjakan QRIS`, `Timeout Mitra`) memperbarui kurva SVG, angka `p99`, dan blok `<pre>` JSON. `#stream-toggle` menjeda denyut sinyal sesuai WCAG 2.2.2.
2. **Kalkulator Volume RPS (`input[name="rps-tier"]`)**: Radio native full-overlay (`z-index: 0` di bawah label `z-index: 1`) yang memperbarui kuota peristiwa bulanan, harga Rupiah transparan, dan estimasi penghematan egress.
3. **Formulir Kunci Sandbox & Uji Webhook 1 Kolom**: Validasi inline, `aria-invalid`, `aria-describedby`, dan `#form-error-summary` (`role="alert"`).

---

## 7. Pola Layout Halaman
- **Hero + Konsol Sinyal Hidup**: Proposisi nilai & CTA di kiri, konsol osiloskop SVG + payload JSON di kanan.
- **Bab Arsitektur Pipa Ingesti (`#arsitektur-jejak`)**: Latar `#111715` berisi 3 tahap pemrosesan span dalam baris tabel struktural `1px`.
- **Kalkulator Kapasitas & Biaya (`#kalkulator-rps`)**: Pemilih skala RPS di kiri, rincian biaya bulanan di kanan.
- **Formulir Uji Webhook Sandbox (`#uji-sandbox`)**: Formulir 1 kolom bersih di bagian bawah halaman.

---

## 8. Sistem Motion & Koreografi
- Merujuk `_shared/motion-system.md` (`--duration-fast: 150ms`, `--ease-out-quart`):

| Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` |
| :--- | :--- | :--- | :--- | :--- |
| Load halaman (Full) | Garis pindai sinyal (`.signal-sweep`) | `480ms`, `--ease-out-expo` (`scaleX`) | Menandai inisialisasi konsol | Tampil statis seketika |
| Klik tab skenario | `#telemetry-path` & `#live-json-output` | `180ms`, `--ease-out-quart` | Memperlihatkan lonjakan latensi `p99` & kode error | Pergantian kurva & teks seketika |
| Denyut sinyal aktif | `#pulse-dot` pada grafik SVG | `2.4s ease-in-out infinite` (jeda via `#stream-toggle`) | Menunjukkan aliran telemetri aktif | Diam statis tanpa animasi |

---

## 9. Interaksi & Mikro-Interaksi
1. **Simulasi Skenario Anomali API**: Mengklik `.scenario-tab` (`Normal`, `Anomali QRIS`, `Failover Bank`) mengubah kurva SVG, metrik `#metric-p99` (`18,4 ms` -> `142,0 ms`), `#metric-throughput`, warna status `#signal-status`, dan blok `<pre id="live-json-output">`.
2. **Jeda Aliran Telemetri (`#stream-toggle`)**: Menghentikan animasi denyut sinyal SVG dan menyetel `aria-pressed="true"` serta `data-stream-paused="true"`.
3. **Kalkulator Skala RPS**: Memilih `10.000 req/dtk`, `50.000 req/dtk`, atau `200.000 req/dtk` menghitung biaya bulanan `#calc-cost` dan penghematan `#calc-savings` secara instan.

---

## 10. Gamifikasi
- **Status**: **Tidak Berlaku**
- **Alasan**: Engineer infrastruktur, CTO, dan tim DevOps mengevaluasi developer tools berdasarkan ketepatan data latensi, kejelasan dokumentasi payload, dan transparansi harga. Elemen permainan atau lencana akan menurunkan kredibilitas teknis produk.

---

## 11. Imagery, Ilustrasi & Ikonografi
- **Visualisasi Gelombang & Topologi (SVG)**: Menggunakan kurva poligon/path SVG berketebalan `2px` di atas grid `1px`, bebas dari elemen `<text>` di dalam `<svg>` (label sumbu dan angka metrik disajikan di HTML dengan `tabular-nums`).

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: Lugas, terukur, berbicara dalam satuan engineering nyata (`p99 latency`, `RPS`, `trace_id`, `HTTP 504`, `region ap-southeast-3 Jakarta`) tanpa hiperbola AI.
- **Contoh Benar vs Salah**:
  - *Benar*: `"Deteksi pelambatan kueri PostgreSQL dan timeout mitra pembayaran QRIS dalam 180 milidetik dari node Jakarta."`
  - *Salah*: `"✨ Platform AI Generasi Baru yang Memberdayakan Transformasi Cloud Anda Tanpa Batas!"`
- **Data Contoh Pratinjau**: Platform **GarudaTrace** (Node Jakarta `ap-southeast-3`, data contoh pratinjau).

---

## 13. Aksesibilitas Khusus Arketipe Ini
- Blok `<pre id="live-json-output">` dan pembacaan metrik memiliki `aria-live="polite"` serta rasio kontras `>= 10,9:1` untuk teks kode dan `>= 6,68:1` untuk komentar/metadata.
- Tombol `#stream-toggle` menjamin kepatuhan penuh pada WCAG 2.2 SC 2.2.2 (Pause, Stop, Hide).

---

## 14. Anggaran Performa & Perbedaan Mode `Lite` vs `Full`
- **Mode `Full` (Default Demo Produk)**: `LCP <= 2,5s`, `INP <= 150ms`, `CLS <= 0,05` (target `0`), JS awal `<= 90 KB`.
- **Mode `Lite`**: Mematikan denyut sinyal kontinu dan menampilkan grafik osiloskop statis beserta kalkulator RPS penuh.

---

## 15. Signature Moment
- **Deskripsi Konkret**: Konsol **Live Trace & Anomaly Simulator** di Hero di mana pengunjung dapat memicu skenario *Anomali QRIS* atau *Failover* dan melihat kurva `p99` SVG melonjak bersamaan dengan pembaruan trace JSON `JetBrains Mono` secara sinkron.
- **Langkah Implementasi Teknis**:
  1. Tiga preset skenario menyimpan koordinat path SVG, angka `p99`, throughput, dan objek JSON terformat.
  2. Klik `.scenario-tab` memutakhirkan DOM dan atribut `d` pada `<path id="telemetry-path">`.
- **Biaya Performa & Fallback**: `< 2,5 KB` JS murni tanpa library grafik eksternal; `CLS = 0`.

---

## 16. Cek Anti-Template & Rubrik Awwwards

### A. Tiga Hal yang Mustahil Ada di Template Umum
1. **Simulator Anomali API & Payload JSON Hidup di Hero**: Menggantikan ilustrasi 3D abstrak dengan konsol interaktif yang bisa diuji langsung.
2. **Palet Instrumen Hijau-Grafit Bebas Ungu-Biru**: Menghindari klise gradien indigo/ungu yang membanjiri 90% template AI/SaaS.
3. **Kalkulator RPS & Egress Transparan dalam Rupiah**: Menyajikan angka biaya infrastruktur yang terukur dengan `tabular-nums`.

### B. Pemetaan Rubrik Awwwards
| Kriteria (Bobot) | Bagaimana Arketipe Ini Memenuhinya | Ketergantungan pada Aset Nyata Klien |
| :--- | :--- | :--- |
| **Design (40%)** | Ketajaman *Sora*, *IBM Plex Sans*, dan *JetBrains Mono* di atas grafit instrumen `#090C0B` dengan sinyal `#22C55E`. | Skema arsitektur nyata, tangkapan layar CLI/dashboard produksi, dan dokumentasi SDK klien. |
| **Usability (30%)** | Skenario demo sekali klik, tombol jeda telemetri, kalkulator harga instan, dan form sandbox ringkas. | Endpoint sandbox publik nyata dan rumus tarif produksi klien. |
| **Creativity (20%)** | Mengubah halaman pemasaran SaaS menjadi instrumen uji latensi dan inspektor trace langsung. | Studi kasus insiden nyata dan metrik benchmark terverifikasi milik klien. |
| **Content (10%)** | Bahasa Indonesia teknis yang presisi dengan payload JSON realistis berkonteks pembayaran Indonesia. | Spesifikasi API OpenAPI/gRPC asli milik klien. |
| **Developer** | Zero layout shift (`CLS = 0`), WCAG 2.2 AA (`0 violations, 0 incomplete`), ringan tanpa library chart berat. | Integrasi WebSocket/SSE telemetri nyata saat dihubungkan ke backend produksi. |

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  --bg-canvas: #090C0B;
  --bg-chapter: #111715;
  --bg-surface: #111715;
  --text-primary: #EEF2F0;
  --text-secondary: #B8C4BE;
  --text-muted: #8B9A93;
  --border-subtle: #1E2925;
  --border-strong: #6A8077;
  --accent-primary: #22C55E;
  --accent-on-primary: #090C0B;
  --accent-amber: #F59E0B;
  --focus-ring: #4ADE80;
  --status-success-bg: #102B1C;
  --status-success-fg: #BBF7D0;
  --status-danger-bg: #451212;
  --status-danger-fg: #FECACA;

  --font-display: 'Sora', system-ui, -apple-system, sans-serif;
  --font-sans: 'IBM Plex Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

  --radius-tech: 4px;
}
```

### B. Konfigurasi Tailwind (`tailwind.config.js`)
```javascript
export default {
  theme: {
    extend: {
      colors: {
        graphite: 'var(--bg-canvas)',
        console: 'var(--bg-surface)',
        phosphor: 'var(--text-primary)',
        signal: 'var(--accent-primary)',
        amber: 'var(--accent-amber)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        tech: '4px',
      },
    },
  },
};
```

---

## 18. Checklist QA Sebelum Rilis
- [x] Seluruh pasangan warna lulus WCAG 2.2 AA & `axe-core` (`30 passes, 0 violations, 0 incomplete`) pada 4 state (`light-normal` default Graphite, `dark-mode`/Daylight Lab, `form-error`, `dev-drawer-open`).
- [x] Lulus `slop-audit.js` 100% sesuai Slop Budget Bagian 5.5 (`decorativeBadges: 0`, `maxFilledPerScreen: 1`, `outlineFullPage: 2` <= 4, `uniqueBorderRadii: 1` <= 2, `uniqueBorderWidths: 2`, `uniqueFontWeights: 3`, `maxNestedContainers: 0`, `staticShadows: 0`, `alternatingSectionBgs: 2`).
- [x] Uji keyboard `10x Tab` (`tabAllHaveVisibleOutline: true`, `tabAnyInClosedDrawer: false`) & `prefers-reduced-motion: reduce` (`matches: true`, `btnDuration: "1e-05s"`) terverifikasi.
- [x] Interaksi kunci terverifikasi nyata: pergantian skenario anomali (`18,4 ms` -> `142,0 ms` & payload JSON `504`), kalkulator RPS (`Rp4.800.000 / bln` -> `Rp16.500.000 / bln`), dan kontrol jeda `#stream-toggle` (`aria-pressed="true"`, `data-stream-paused="true"`).
- [x] Lighthouse nyata memenuhi anggaran performa: Mobile `99/100/100/100` (`LCP 1.6 s`, `FCP 1.6 s`, `CLS 0`, `TBT 0 ms`, `168 KiB`); Desktop `100/100/100/100` (`LCP 0.5 s`, `FCP 0.5 s`, `CLS 0`, `TBT 0 ms`, `168 KiB`).
- [x] Screenshot `375px` & `1280px` (Instrument Graphite & Daylight Lab) diperiksa visual tanpa overflow (`scrollWidth === innerWidth === 375/1280`) atau console error (`0`).

# DESIGN.md — `enterprise-dashboard` (Operasional Back-Office, ERP & Analitik)

- **Arketipe Sumber**: `professional/enterprise-dashboard`
- **Jalur**: `Profesional` (Adaptasi prinsip SGDS untuk alat kerja berdensitas tinggi)
- **Parameter Stitch (`stitch-design-taste`)**: `Density: 8 | Variance: 2 | Motion: 1`
- **Tingkat Kerumitan**: `Standar (High-Density Enterprise Workspace)`

---

## 1. Identitas, Niat & Big Idea
- **Identitas & Niat**: Dirancang untuk staf operasional, auditor internal, dan manajer keuangan yang menghabiskan berjam-jam setiap hari memindai daftar pengadaan, memeriksa riwayat persetujuan, dan mengambil keputusan berbasis angka. Dalam 3 detik pertama, operator melihat navigasi ringkas, 4 metrik ringkas tanpa dekorasi, grafik tren bulanan yang bisa ditukar menjadi tabel mentah, serta tabel kerja penuh dengan kontrol kepadatan, sortir, dan hak akses yang eksplisit.
- **Big Idea**: **"Meja Kerja Kepadatan Terkendali"** — menyajikan data bervolume tinggi lewat perataan angka `tabular-nums`, garis tabel 1px, dan mode kepadatan `Nyaman` / `Ringkas` tanpa membanjiri layar dengan kartu berbayang.

---

## 2. Prinsip Desain (5 Prinsip)
1. **Kepadatan Tanpa Kebisingan (*Density Without Boxitis*)**
   - *Terapkan*: Pisahkan ringkasan metrik dan baris tabel menggunakan garis `1px`, perataan kolom konsisten, dan dua mode kepadatan (`Nyaman` vs `Ringkas`).
   - *Hindari*: Membungkus setiap KPI atau item log ke dalam kartu berbayang.
2. **Aksesibilitas Grafik Wajib Setara Tabel**
   - *Terapkan*: Sediakan tombol pengalih `Lihat Tabel Data` di setiap visualisasi grafik dan tampilkan angka/label langsung di atas batang grafik agar tidak bergantung pada warna saja.
   - *Hindari*: Grafik `<canvas>` atau SVG tanpa label nilai atau alternatif tabel bagi pengguna pembaca layar.
3. **RBAC Jujur dan Terjelaskan di UI**
   - *Terapkan*: Sembunyikan aksi yang tidak relevan dengan lingkup tugas peran (mis. *Hapus Arsip* bagi Staf), dan tampilkan dalam keadaan `disabled` disertai alasan teks bagi aksi yang butuh eskalasi wewenang (mis. *Setujui > Rp50 Juta — Memerlukan peran Manajer Keuangan*).
   - *Hindari*: Membiarkan tombol aktif lalu melempar error 403 mendadak setelah diklik, atau menonaktifkan tombol tanpa penjelasan.
4. **Satu Tindakan Utama per Layar**
   - *Terapkan*: Hanya satu tombol terisi (`+ Buat Pengajuan`) di kepala ruang kerja; kontrol penyaringan, kepadatan, dan log menggunakan tab garis bawah atau tombol *ghost*.
   - *Hindari*: Memasang banyak tombol berwarna menyala di setiap baris tabel.
5. **Jejak Audit Tidak Tersembunyi**
   - *Terapkan*: Setiap mutasi status menampilkan waktu WIB, aktor, aksi, ID objek `.code-mono`, dan status hasil di bagian Jejak Audit dengan kolom sejajar.
   - *Hindari*: Menyembunyikan riwayat perubahan di modal bertingkat yang sulit ditelusuri.

---

## 3. Token Warna & Pasangan Kontras

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai (Terang) | Nilai (Gelap) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | Workspace White | `#FFFFFF` | `#090D16` | Latar utama ruang kerja & tabel |
| `--bg-subtle` | Rail Tint | `#F8FAFC` | `#111827` | Latar sidebar navigasi & skeleton |
| `--bg-selected` | Row Selection Tint | `#F0FDFA` | `#042F2E` | Baris tabel/bulk bar terpilih |
| `--bg-elevated` | Drawer Sheet | `#FFFFFF` | `#111827` | Drawer pengembang & drawer mobile |
| `--text-primary` | Ink Slate | `#0F172A` | `#F8FAFC` | Angka KPI, isi tabel, heading |
| `--text-secondary` | Reading Slate | `#334155` | `#CBD5E1` | Subjudul, deskripsi log |
| `--text-muted` | Column Meta | `#475569` | `#94A3B8` | Header kolom, label kepadatan, timestamp |
| `--border-subtle` | Hairline Divider | `#CBD5E1` | `#334155` | Garis pemisah baris tabel & seksi (`1px`) |
| `--border-strong` | Control Border | `#475569` | `#94A3B8` | Border input, select, tombol outline (`1px`) |
| `--accent-primary` | Deep Operational Teal | `#0F766E` | `#2DD4BF` | Aksi utama, garis tab aktif, batang grafik |
| `--accent-primary-hover` | Darker Teal | `#115E59` | `#5EEAD4` | Hover aksi utama |
| `--accent-on-primary` | Crisp White / Deep Teal | `#FFFFFF` | `#042F2E` | Teks di atas `--accent-primary` |
| `--focus-ring` | High-Vis Amber | `#B45309` | `#FBBF24` | Cincin `:focus-visible` (`3px solid`) |
| `--status-info-bg` / `--status-info-fg` | Pending Info | `#EFF6FF` / `#1E3A8A` | `#172554` / `#DBEAFE` | Status `Menunggu` |
| `--status-success-bg` / `--status-success-fg` | Approved Green | `#F0FDF4` / `#14532D` | `#052E16` / `#DCFCE7` | Status `Disetujui` |
| `--status-warning-bg` / `--status-warning-fg` | Revision Amber | `#FFFBEB` / `#78350F` | `#451A03` / `#FEF3C7` | Status `Perlu Revisi` |
| `--status-danger-bg` / `--status-danger-fg` | Alert Crimson | `#FEF2F2` / `#7F1D1D` | `#450A0A` / `#FEE2E2` | Status gagal / error |

### B. Pasangan Kontras Terukur (WCAG 2.2)
| Pasangan (`Foreground` di atas `Background`) | Kode Hex (Terang / Gelap) | Rasio Terukur | Target | Status |
| :--- | :--- | ---: | :--- | :--- |
| `--text-primary` / `--bg-canvas` | `#0F172A` / `#FFFFFF` (`#F8FAFC` / `#090D16`) | **`17,85:1`** / **`18,57:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-secondary` / `--bg-canvas` | `#334155` / `#FFFFFF` (`#CBD5E1` / `#090D16`) | **`10,35:1`** / **`13,09:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |
| `--text-muted` / `--bg-subtle` | `#475569` / `#F8FAFC` (`#94A3B8` / `#111827`) | **`7,24:1`** / **`6,92:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-on-primary` / `--accent-primary` | `#FFFFFF` / `#0F766E` (`#042F2E` / `#2DD4BF`) | **`5,47:1`** / **`7,77:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--accent-primary` (tautan) / `--bg-canvas` | `#0F766E` / `#FFFFFF` (`#2DD4BF` / `#090D16`) | **`5,47:1`** / **`10,44:1`** | `>= 4,5:1` (AA) | `LULUS (AA)` |
| `--focus-ring` / `--bg-canvas` | `#B45309` / `#FFFFFF` (`#FBBF24` / `#090D16`) | **`5,02:1`** / **`12,15:1`** | `>= 3,0:1` (UI) | `LULUS (AA)` |
| `--border-strong` / `--bg-canvas` | `#475569` / `#FFFFFF` | **`7,58:1`** | `>= 3,0:1` (UI) | `LULUS (AA)` |
| `--status-warning-fg` / `--status-warning-bg` | `#78350F` / `#FFFBEB` | **`8,75:1`** | `>= 7,0:1` (AAA) | `LULUS (AAA)` |

---

## 4. Tipografi
- **Font UI & Tabel**: `'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif` (`OFL-1.1`, self-hosted WOFF2).
- **Font Monospace (Hanya Kode PO, Audit ID & SKU)**: `'JetBrains Mono', ui-monospace, SFMono-Regular, monospace` (`OFL-1.1`). Nominal Rupiah wajib memakai `--font-sans` dengan `font-variant-numeric: tabular-nums` dan rata kanan.
- **Skala (6 Token, 3 Bobot: `400`, `500`, `700`)**:
  - `--text-display`: `clamp(1.35rem, 2vw, 1.75rem)` (`1.25` line-height, `-0.01em` tracking, `700`)
  - `--text-h2`: `clamp(1.125rem, 1.5vw, 1.35rem)` (`1.3` line-height, `0`, `700`)
  - `--text-h3`: `1rem` (`1.35` line-height, `700`)
  - `--text-body`: `0.9375rem` (`15px` untuk tabel & form kerja; `1rem` minimum input mobile via media query)
  - `--text-sm`: `0.875rem` (`14px`)
  - `--text-xs`: `0.75rem` (`12px`)

---

## 5. Spasi, Grid, Radius, Elevasi & Slop Budget
- **Spasi (Basis 8px)**: `--space-1: 4px`, `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`.
- **Layout**: Sidebar `240px` tetap di `>= 1024px` (drawer toggle pada `< 1024px`) + konten utama fleksibel (`min-width: 0`). Wrapper tabel mendukung gulir horizontal (`overflow-x: auto`) dengan kolom pertama `position: sticky; left: 0`.
- **Radius (`2` nilai)**: `--radius-control: 4px`, `--radius-container: 6px`.
- **Ketebalan Border (`2` nilai)**: `1px` dan `2px`.
- **Elevasi Statis**: `0` bayangan pada elemen statis.

### Slop Budget (`enterprise-dashboard`)
| Metrik | Batas |
| :--- | :--- |
| Badge dekoratif | `0` |
| Badge status | Hanya status baris dinamis (`Menunggu`, `Disetujui`, `Perlu Revisi`) |
| Tombol terisi / layar | Maks `1` (`+ Buat Pengajuan`) |
| Tombol outline / halaman | Maks `2` (`Ekspor CSV`, `Lihat Tabel Data`) |
| Border radius unik / Border width / Font weights | Maks `2` radius / Maks `2` border / Maks `3` bobot |
| Wadah bersarang / Bayangan statis / Latar seksi berselang-seling | `0` / `0` / `0` |

---

## 6. Komponen Kunci
1. **Sidebar Navigasi Responsif**: daftar tautan tunggal dengan penanda kiri `2px solid var(--accent-primary)` pada item aktif; di mobile (`< 1024px`) berubah menjadi tombol toggle drawer dengan pengembalian fokus saat `Escape`.
2. **Tabel Data Pengadaan**:
   - Mode Kepadatan (`Nyaman` vs `Ringkas`), pencarian real-time, tab status (`Semua`, `Menunggu`, `Disetujui`, `Revisi`), sortir kolom (`aria-sort`), pilih baris + *Bulk Action Bar*, pagination, dan kolom pertama `sticky`.
   - 4 State Tabel penuh: `Normal`, `Empty` (dengan tombol reset filter), `Loading Skeleton`, `Error` (dengan tombol coba lagi).
3. **RBAC di UI**: Peran *Staf Pengadaan* menyembunyikan *Hapus Arsip* dan menonaktifkan *Setujui > Rp50 Juta* dengan catatan alasan; *Manajer Keuangan* mengaktifkan keduanya.
4. **Grafik SVG + Toggle Tabel Data**: Batang SVG berpola dan berlabel angka di atas batang; tombol `Lihat Tabel Data` menukar grafik dengan `<table>` HTML lengkap.
5. **Audit Log View**: Tabel/daftar kronologis aktivitas mutasi tidak terhapus.

---

## 7. Motion, Copy & Performa
- **Motion**: Sangat minimal (`120ms`, `--ease-out-quart`) hanya untuk buka/tutup drawer mobile & hover baris. Mematuhi `prefers-reduced-motion: reduce`.
- **Copy**: Ringkas, bahasa operasional Indonesia baku (`PT Sinar Logistik Nusantara` *(contoh)*, kode `PO-2026-8K4M`, `AUD-9912`, nominal `Rp48.500.000`).
- **Anggaran Performa**: LCP `<= 1,2s`, INP `<= 80ms`, CLS `0`, bobot awal `<= 200 KB`.

---

## 8. Signature Moment & Cek Anti-Template
- **Signature Moment**: **Ruang Kerja Pengadaan Terpadu** — pengalih kepadatan (`Nyaman` / `Ringkas`) + simulasi RBAC langsung di baris tabel (`disembunyikan` vs `disabled dengan alasan`) + pengalih grafik SVG menjadi tabel data aksesibel dalam satu layar tanpa kotak bersarang.
- **3 Hal yang Mustahil Ada di Template Umum**:
  1. Perbedaan eksplisit RBAC UI (*hidden* vs *disabled with reason*) pada aksi bernilai di atas batas wewenang (`> Rp50 Juta`).
  2. Tabel dengan kolom pertama *sticky*, sortir `aria-sort`, pilihan massal, dan kepadatan dinamis bebas horizontal overflow di `375px`.
  3. Grafik SVG dengan label nilai langsung dan tombol alih ke tabel HTML semantik.

---

## 9. Implementasi CSS Variables (`:root`)
```css
:root {
  --bg-canvas: #FFFFFF;
  --bg-subtle: #F8FAFC;
  --bg-selected: #F0FDFA;
  --text-primary: #0F172A;
  --text-secondary: #334155;
  --text-muted: #475569;
  --border-subtle: #CBD5E1;
  --border-strong: #475569;
  --accent-primary: #0F766E;
  --accent-on-primary: #FFFFFF;
  --focus-ring: #B45309;
  --radius-control: 4px;
  --radius-container: 6px;
}
```

---

## 10. Checklist QA
- [x] `slop-audit.js` lulus 100% seluruh metrik budget profesional (`decorativeBadges: 0`, `statusBadges: 4`, `maxFilledPerScreen: 1`, `outlineFullPage: 2`, `uniqueBorderRadii: 1`, `uniqueBorderWidths: 2`, `uniqueFontSizes: 5`, `uniqueFontWeights: 3`, `staticShadows: 0`, `maxNestedContainers: 0`, `alternatingSectionBgs: 0`).
- [x] `axe-core` WCAG 2.2 AA: `30 passes, 0 violations, 1 incomplete` (`color-contrast` pada 12 elemen `<text>` SVG) untuk terang, gelap, dan `?dev=1` (catatan: state empty/error tabel tidak diaudit terpisah lewat skrip).
- [x] Lighthouse nyata: Mobile `99/100/100/100` (`LCP 1.0 s`, `FCP 1.0 s`, `CLS 0`, `TBT 110 ms`, `108 KiB`); Desktop `95/100/100/100` (`LCP 0.4 s`, `FCP 0.4 s`, `CLS 0`, `TBT 180 ms`, `108 KiB`).
- [x] Uji keyboard `Tab` `:focus-visible` (`tabAllHaveVisibleOutline: true`, `tabAnyInClosedDrawer: false`) & `prefers-reduced-motion: reduce` (`matches: true`, `btnDuration: "1e-05s"`) terverifikasi; skrip tidak mengotomasi klik sort, checkbox massal, RBAC, atau `Escape` drawer.
- [x] Screenshot `375px` & `1280px` (terang & gelap) tanpa horizontal overflow halaman (`scrollWidth === innerWidth`), `0` console error, dan telah diperiksa secara visual.

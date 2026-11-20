# Design Registry (`REGISTRY.md`)

Dokumen ini mencatat seluruh kombinasi **Font**, **Palet Warna**, dan **Signature Moment** yang sudah digunakan — baik pada ke-10 arketipe aktif dasar (dan arsip v1) di `.agents/design-library/` maupun pada proyek klien nyata yang dibangun darinya.

---

## 1. Aturan Anti-Pengulangan Kombinasi

1. **Dilarang Mengulang Kombinasi Tiga Serangkai**: Dua proyek berbeda dilarang menggunakan kombinasi `(Keluarga Font Display + Warna Aksen Utama + Mekanik Signature Moment)` yang sama kecuali ada alasan bisnis/klien tertulis yang disetujui pengguna (misal: dua sub-portal di bawah satu instansi induk yang sama).
2. **Wajib Cek Sebelum Menyesuaikan `DESIGN.md` Proyek**: Saat menjalankan langkah ke-4 pada prosedur *Mulai Project Baru*, periksa Tabel 2 dan Tabel 3 di bawah ini, lalu sesuaikan minimal palet merek atau variasi pasangan tipografi dan mekanik *Signature Moment* agar spesifik terhadap domain klien.
3. **Wajib Catat Setiap Proyek Baru**: Setiap kali `./DESIGN.md` dibuat di root sebuah proyek, tambahkan satu baris ke **Tabel 3 (Log Proyek Klien)** sebelum tugas dinyatakan selesai.

---

## 2. Katalog Kombinasi Arketipe Dasar (Baseline Library)

| ID Arketipe | Jalur | Font Display | Font Body / UI | Font Monospace | Kanvas Utama -> Alternatif | Aksen Primer & Sekunder | Signature Moment Dasar |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `professional/gov-civic-warm` *(GOV V2 · Dial 4.5)* | Profesional | `Figtree` *(self-hosted)* | `Inter` *(self-hosted)* | `JetBrains Mono` | `#FCFBF8` -> `#0D1619` *(Warm `#F2EDE4`)* | `#0F5E63` (Sea Teal) & `#9A3F16` (Terracotta) | Pemilih 4 tugas warga + ilustrasi SVG `2px` adegan loket + wizard 3 langkah & pelacak Zero-PII + grafik SLA |
| `professional/gov-institutional-editorial` *(GOV V2 · Dial 6.0)* | Profesional | `Source Serif 4` *(self-hosted)* | `IBM Plex Sans` *(self-hosted)* | `JetBrains Mono` | `#FAF8F4` -> `#0F141A` *(Warm `#EFECE3`)* | `#1B3B6F` (Prussian Navy) & `#8F4A12` (Ochre) | Beranda berita/kebijakan + arahan foto dokumenter (`16:10`/`4:3`) + naskah TOC `sticky` & pull quote + grafik pesisir |
| `professional/gov-data-open` *(GOV V2 · Dial 5.5)* | Profesional | `Public Sans` *(self-hosted)* | `Inter` *(self-hosted)* | `JetBrains Mono` | `#F9FAFB` -> `#0B1117` *(Warm `#EDF2F7`)* | `#1B4D7A` (Ocean Blue) & `#9A3412` (Rust) + `#115E59` (Pine) | Cerita data 3 tahap berpanggung `sticky` (bisa dilewati) + pemilih *"Apa artinya bagi saya"* + peta hatch & CSV |
| `professional/enterprise-dashboard` | Profesional | `Inter` | `Inter` (`tabular-nums`) | `JetBrains Mono` | `#FFFFFF` -> `#090D16` | `#0F766E` (Deep Operational Teal) | Tabel pengadaan multi-densitas + grafik SVG berpola hatch & toggle RBAC Staf/Manajer |
| `professional/kuratorku-institutional` | Profesional | `Source Serif 4` | `Inter` (`tabular-nums`) | *(Tanpa Monospace)* | `#F8FAFC` -> `#061123` *(Navy `#001840`)* | `#F59E0B` (Institutional Amber + teks `#001840`) | `<DashboardShell>` 5 peran seragam + `<StatStrip>` + form mengikat ber-consent & jejak audit |
| `creative/playful-gamified` | Kreatif | `Bricolage Grotesque` | `DM Sans` | System Mono | `#FFF8EB` -> `#1A120D` | `#B9341E` (Vermilion Jam) & `#14532D` (Pandan) | Kartu stempel 8-slot deterministik + maskot reaktif "Mas Biji" & meja racik minuman live |
| `creative/kinetic-editorial` | Kreatif | `Instrument Serif` | `Space Grotesk` | System Mono | `#F4F2EC` -> `#111110` | `#A8261B` (Editorial Vermilion) | Judul display dua baris tersinkron guliran + panggung monografi arsip View Transitions |
| `creative/immersive-storyworld` | Kreatif | `Fraunces` | `Manrope` | System Mono | `#07161B` -> `#F5F2EA` | `#F59E0B` (Lantern Amber) & `#5EEAD4` (Biolume Cyan) | Diorama batimetri dual-layer (SVG + kanvas partikel ber-guard) & selam 3 zona kedalaman |
| `creative/neo-brutalist-pop` | Kreatif | `Syne` | `Archivo` | System Mono | `#F7F7F2` -> `#0A0A0A` | `#1D4ED8` (Kobalt), `#D4FF33` (Acid Lime), `#BE185D` (Magenta) | Plat sablon jaket SVG `0px` berbingkai `3px` + penukar colorway & kalkulator bundel 10% |
| `creative/warm-craft-nusantara` | Kreatif | `Lora` | `Source Sans 3` | System Mono | `#F8F3E8` -> `#1C1511` | `#7C3A1D` (Sogan Tingi) & `#1E3A5F` (Indigo Nila) | Plat SVG Motif Batik Kawung Yogyakarta + penjelajah tahap celup & penyusun pesan WhatsApp |
| `creative/dark-tech-signal` | Kreatif | `Sora` | `IBM Plex Sans` | `JetBrains Mono` | `#090C0B` -> `#F4F7F5` | `#22C55E` (Signal Green) & `#F59E0B` (Anomaly Amber) | Konsol simulator anomali latensi `p99` API langsung dengan osiloskop SVG & trace JSON |

### Arsip Kombinasi v1 (`[DEPRECATED — Jangan Pilih untuk Proyek Baru]`)
> Kedua arketipe v1 di bawah ini dipertahankan secara historis di `professional/_archive/v1/`. Jangan direkomendasikan sebagai pilihan atau default baru.

| ID Arsip v1 | Font Display + UI | Kanvas & Aksen | Status |
| :--- | :--- | :--- | :--- |
| `professional/_archive/v1/gov-portal` | `Plus Jakarta Sans` + `Inter` + `JetBrains Mono` | `#FFFFFF` -> `#0B1120` / `#1D4ED8` | Deprecated / Arsip v1 (digantikan 3 arah GOV V2 di atas) |
| `professional/_archive/v1/corporate-trust` | `Newsreader` + `Plus Jakarta Sans` + `JetBrains Mono` | `#FAF9F6` -> `#0C1210` / `#0F5132` | Deprecated / Arsip v1 (digantikan `gov-institutional-editorial`) |

---

## 3. Log Proyek Klien & Simulasi Validasi

| Tanggal | Nama Proyek / Klien | Arketipe Sumber | Font yang Dipakai | Palet (`Kanvas` / `Aksen`) | Signature Moment Spesifik Proyek | Status Verifikasi |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `2026-11-19` | **Simulasi Uji Kemandirian Fase 5 — NusantaraPay Webhook Inspector** (`_audit/independence-simulation.html`) | `creative/dark-tech-signal` | `Sora` + `IBM Plex Sans` + `JetBrains Mono` | `#090C0B` / `#22C55E` & `#F59E0B` | Inspektor verifikasi tanda tangan HMAC webhook & simulator retry latensi dibangun murni dari `dark-tech-signal/DESIGN.md` | Terverifikasi (`slop-audit`, `axe-core`, `375px`/`1280px`) |
| `2026-11-19` | **Simulasi Uji Kemandirian GOV V2 — DanaDesa Terbuka Lembah Sari** (`_audit/gov-v2-independence-simulation.html`) | `professional/gov-data-open` | `Public Sans` + `Inter` + `JetBrains Mono` *(self-hosted)* | `#F9FAFB` / `#EDF2F7` / `#1B4D7A` & `#9A3412` | Grafik batang Pagu vs Realisasi berpola hatch + terjemahan dampak per desa + filter bidang & ekspor CSV dibangun murni dari `gov-data-open/DESIGN.md` | Terverifikasi (`slop-audit` 2 arah, `axe-core` 0 pelanggaran, LH 100, 0 CDN) |
| `2026-11-21` | **BusTracking — Pelacakan Angkot & Cluster Penumpang** (`./DESIGN.md`) | `professional/gov-civic-warm` | `Figtree` + `Inter` + `JetBrains Mono` *(self-hosted)* | `#FCFBF8` / `#F2EDE4` / `#0F5E63` & `#9A3F16` | Radar angkot terdekat (Haversine) untuk pelajar + siaran lokasi GPS supir angkot & peta cluster agregat penumpang menunggu (Zero-PII) | Diinisialisasi (`project-intake`) |

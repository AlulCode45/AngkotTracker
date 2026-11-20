# DESIGN.md — [Nama Arketipe / Nama Proyek Klien]

- **Arketipe Sumber**: `[professional/<nama> | creative/<nama>]`
- **Jalur**: `[Profesional | Kreatif]`
- **Dial Ekspresivitas**: `[0-10]` — `[0-2: Murni fungsional | 3-5: Ramah & kaya fungsional (target gov) | 6-7: Berkarakter editorial (korporat/instansi misi komunikasi) | 8-10: Ekspresif penuh (jalur kreatif)]`
- **Parameter Kepadatan / Variansi / Gerak *(opsional bila memakai Stitch)***: `Density: [1-10] | Variance: [1-10] | Motion: [1-10]`
- **Tingkat Kerumitan**: `[Standar | Lite (UMKM/Cepat) | Full (Kampanye/Portofolio)]`

---

## 1. Identitas, Niat, Dial Ekspresivitas, Big Idea & Uji Kaku

### Skala Dial Ekspresivitas (0–10)
| Rentang | Karakter | Contoh Penerapan |
| :--- | :--- | :--- |
| **`0–2`** | Murni fungsional | Formulir pajak, antarmuka darurat |
| **`3–5`** | Ramah, jelas, kaya secara fungsional | Portal layanan warga, data terbuka dasar (**target jalur gov**) |
| **`6–7`** | Berkarakter kuat, editorial | Publikasi kebijakan kementerian, laporan tahunan/keberlanjutan |
| **`8–10`** | Ekspresif penuh | Jalur kreatif (`creative/*`) |

Ekspresivitas naik melalui **komposisi, warna, ilustrasi, tipografi, dan gerak** — **bukan** lewat mengorbankan aksesibilitas, keterbacaan, atau performa.

- **Identitas & Niat** *(1 paragraf)*: [Jelaskan suasana/perasaan yang dibangun, siapa audiens utamanya, masalah nyata apa yang diselesaikan, dan impresi pertama dalam 3 detik.]
- **Alasan Dial Ekspresivitas**: `[Angka 0-10]` — [Jelaskan mengapa angka ini dipilih sesuai misi komunikasi dan tugas pengguna.]
- **Big Idea** *(1 kalimat — wajib untuk semua arketipe V2 & Jalur Kreatif)*: [Satu kalimat yang menghubungkan subjek/misi instansi dengan mekanik visual dan interaksi utamanya.]

### Uji Kaku (5 Pertanyaan Wajib Dijawab Tertulis dengan Bukti)
1. **Apa gagasan besarnya dalam satu kalimat?** [Jawaban + bukti bagian mana di halaman yang mewujudkannya]
2. **Apa yang membuat halaman ini tidak bisa tertukar dengan template?** [Bukti elemen komposisi, ilustrasi, atau data spesifik subjek]
3. **Di mana mata pertama mendarat dan kenapa?** [Elemen jangkar visual pertama, skala/kontrasnya, dan alasan hierarki]
4. **Di mana desain terasa hangat atau manusiawi?** [Bukti copy, warna netral hangat, ilustrasi, atau arahan foto manusia nyata]
5. **Di mana ia menolak godaan untuk dihias?** [Bukti bagian transaksi/form/data yang dijaga tetap hening tanpa dekorasi kosong]

---

## 2. Prinsip Desain (Maksimal 5)
1. **[Nama Prinsip 1]**
   - *Terapkan*: [Tindakan konkret dan terukur]
   - *Hindari*: [Anti-pattern spesifik]
2. **[Nama Prinsip 2]**
   - *Terapkan*: [...]
   - *Hindari*: [...]
3. **[Nama Prinsip 3]**
   - *Terapkan*: [...]
   - *Hindari*: [...]
4. **[Nama Prinsip 4]**
   - *Terapkan*: [...]
   - *Hindari*: [...]
5. **[Nama Prinsip 5]**
   - *Terapkan*: [...]
   - *Hindari*: [...]

---

## 3. Token Warna & Pasangan Kontras

### A. Peran Semantik
| Token CSS | Nama Deskriptif | Nilai (Terang) | Nilai (Gelap / Opsional) | Peran Fungsional |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-canvas` | [Nama] | `#______` | `#______` | Latar utama halaman |
| `--bg-warm` / `--bg-tint` | [Nama] | `#______` | `#______` | Latar netral hangat / pita bidang penuh lebar tertonal |
| `--bg-surface` | [Nama] | `#______` | `#______` | Permukaan kartu, panel, form |
| `--bg-elevated` | [Nama] | `#______` | `#______` | Modal, dropdown, sticky bar |
| `--text-primary` | [Nama] | `#______` | `#______` | Judul dan teks bacaan utama |
| `--text-secondary` | [Nama] | `#______` | `#______` | Subjudul, label pendukung |
| `--text-muted` | [Nama] | `#______` | `#______` | Caption, metadata (wajib >= 4.5:1) |
| `--border-subtle` | [Nama] | `#______` | `#______` | Pembatas struktural |
| `--border-strong` | [Nama] | `#______` | `#______` | Border input aktif / fokus / tabel |
| `--accent-primary` | [Nama] | `#______` | `#______` | Aksi utama (CTA) |
| `--accent-on-primary` | [Nama] | `#______` | `#______` | Teks di atas `--accent-primary` |
| `--accent-secondary` | [Nama] | `#______` | `#______` | Aksen pendukung / sorotan hangat |
| `--accent-data-1` | [Nama] | `#______` | `#______` | Seri data utama grafik (aman buta warna) |
| `--accent-data-2` | [Nama] | `#______` | `#______` | Seri data pembanding 1 (aman buta warna) |
| `--accent-data-3` | [Nama] | `#______` | `#______` | Seri data pembanding 2 / target (aman buta warna) |
| `--status-info-bg` / `--status-info-fg` | Info | `#______` / `#______` | `#______` / `#______` | Pemberitahuan netral |
| `--status-success-bg` / `--status-success-fg` | Sukses | `#______` / `#______` | `#______` / `#______` | Konfirmasi berhasil |
| `--status-warning-bg` / `--status-warning-fg` | Peringatan | `#______` / `#______` | `#______` / `#______` | Perhatian / tenggat |
| `--status-danger-bg` / `--status-danger-fg` | Bahaya/Error | `#______` / `#______` | `#______` / `#______` | Validasi gagal / aksi destruktif |

### B. Pasangan Kontras Terukur (WCAG 2.2)
Seluruh pasangan warna — **termasuk teks kecil (`12px–14px`), label aksen sekunder, dan warna seri data grafik** — wajib diukur rasio kontrasnya sebelum dirilis:

| Pasangan (`Foreground` di atas `Background`) | Rasio Kontras | Target WCAG | Status |
| :--- | :--- | :--- | :--- |
| `--text-primary` di atas `--bg-canvas` & `--bg-warm` | `__:1` | `>= 4.5:1` (AA) / `>= 7:1` (AAA) | `[LULUS]` |
| `--text-secondary` di atas `--bg-surface` & `--bg-warm` | `__:1` | `>= 4.5:1` (AA) | `[LULUS]` |
| `--text-muted` (`12px–14px`) di atas `--bg-canvas` & `--bg-surface` | `__:1` | `>= 4.5:1` (AA teks kecil) | `[LULUS]` |
| `--accent-on-primary` di atas `--accent-primary` | `__:1` | `>= 4.5:1` (AA) | `[LULUS]` |
| `--accent-secondary` di atas `--bg-canvas` / elemen non-teks | `__:1` | `>= 4.5:1` (teks) / `>= 3:1` (ikon/UI) | `[LULUS]` |
| `--accent-data-1..3` di atas `--bg-surface` & antar seri grafik | `__:1` | `>= 3:1` (grafis UI) + perbedaan luminansi/pola | `[LULUS]` |
| `--status-danger-fg` di atas `--status-danger-bg` | `__:1` | `>= 4.5:1` (AA) | `[LULUS]` |

---

## 4. Tipografi

### A. Keluarga Font, Self-Hosting & Fallback Terancang
Untuk jalur pemerintah/profesional (`gov-*`), font wajib tersedia sebagai **paket `WOFF2` self-hosted berlisensi terbuka (`SIL OFL-1.1` atau setara)** tanpa ketergantungan pada CDN eksternal saat runtime. Fallback stack wajib dirancang disertai `@font-face` metric overrides (`size-adjust`, `ascent-override`, `descent-override`) agar pergantian font tidak jatuh ke serif/sans generik yang merusak tata letak (`CLS = 0`).

| Peran | Token | Keluarga Font | Lisensi & Sumber Resmi | Fallback Stack & Metric Override |
| :--- | :--- | :--- | :--- | :--- |
| Display / Heading | `--font-display` | `'[Nama Font]'` | `[SIL OFL-1.1 — repo/sumber terverifikasi di SOURCES.md]` | `'[Nama Fallback]', [system stack yang selaras karakter & x-height]` |
| Body / UI | `--font-sans` | `'[Nama Font]'` | `[SIL OFL-1.1 — repo/sumber terverifikasi di SOURCES.md]` | `'[Nama Fallback]', 'Inter Fallback', system-ui, -apple-system, sans-serif` |
| Data / Kode / Angka | `--font-mono` | `'[Nama Font]'` | `[SIL OFL-1.1]` | `ui-monospace, SFMono-Regular, Menlo, monospace` |

### B. Skala Responsif, Angka Lining Tabular & Aturan Keterbacaan
| Token | Ukuran (Mobile → Desktop) | Line-Height | Tracking | Bobot | Aturan Pemakaian |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(__rem, __vw, __rem)` | `__` | `__em` | `__` | Hanya 1 per halaman (Hero); `display / body >= 2.0` |
| `--text-h1` | `clamp(__rem, __vw, __rem)` | `__` | `__em` | `__` | Judul halaman utama |
| `--text-h2` | `clamp(__rem, __vw, __rem)` | `__` | `__em` | `__` | Judul seksi |
| `--text-h3` | `clamp(__rem, __vw, __rem)` | `__` | `__em` | `__` | Judul kartu / sub-seksi |
| `--text-body-lg` | `__rem` (`__px`) | `1.6` | `0` | `400` | Paragraf pembuka / lead (`45ch–75ch`) |
| `--text-body` | `1rem` (`16px`) | `1.6` | `0` | `400` | Teks bacaan (`45ch–75ch`) & input form (dilarang <16px pada input mobile) |
| `--text-sm` | `0.875rem` (`14px`) | `1.5` | `0` | `400/500` | Tabel, helper text, metadata (minimal `14px` untuk label grafik) |

- **Angka Data (`tabular-nums lining-nums`)**: Seluruh angka statistik, anggaran, KPI, tabel keuangan, persentase, dan nomor registrasi wajib menerapkan `font-variant-numeric: tabular-nums lining-nums`. Dilarang memakai angka *old-style* pada data atau tabel.
- **Aturan Anti Kata Yatim & Lebar Baris**: Judul (`h1`–`h3`) wajib memakai `text-wrap: balance;` (maksimal `2–3` baris, tanpa satu kata yatim menggantung di baris terakhir). Kolom bacaan panjang dibatasi pada `45ch–75ch` (target optimal `55ch–68ch`).

---

## 5. Spasi, Grid, Breakpoint, Radius & Elevasi
- **Skala Spasi (Basis 8px)**: `--space-1: 4px`, `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`, `--space-24: 96px`.
- **Grid & Container**: Maksimum lebar container `--container-max: [1280px | 1440px]`, kolom `[12 kolom di desktop, 8 di tablet, 4 di mobile]`, gutter `[16px mobile / 24px desktop]`.
- **Breakpoint**: `xs: 320px`, `sm: 512px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1440px`.
- **Radius**: `--radius-control: __px`, `--radius-container: __px`.
- **Elevasi**: `--shadow-none: none`, `--shadow-overlay: __`, `--shadow-focus: 0 0 0 3px __`.

---

## 5.5 Slop Budget (Batas Atas) & Richness Floor (Batas Bawah) *(Wajib Diisi)*

### A. Slop Budget (Batas Atas — Mencegah UI Inflation)
| Metrik per Tampilan | Batas Arketipe Ini | Catatan / Alasan jika Dilonggarkan dari Baseline |
| :--- | :--- | :--- |
| Badge/pil dekoratif | `[0 | maks 3]` | `[Hanya untuk identitas arketipe jika berlaku]` |
| Badge status informatif | Hanya yang berubah | — |
| Tombol terisi (primer) | Maks `1` per layar | — |
| Tombol outline | `[Maks 2 | sesuai arketipe]` | — |
| Border-radius unik | `[Maks 3 | Maks 4]` | — |
| Ketebalan border unik | `[Maks 2 | Maks 3]` | — |
| Bobot huruf unik | Maks `3` | — |
| Wadah bersarang | `0` | — |
| Bayangan elemen statis | `[0 | sesuai arketipe]` | — |
| Latar seksi berselang-seling | `[0 | sesuai arketipe]` | `[Untuk blok komposisi penuh lebar yang disengaja pada V2/Kreatif, tulis alasan hierarkinya]` |

- **Aturan Badge**: Badge hanya sah apabila membawa status yang berubah secara dinamis (`Tahap Verifikasi`, `Tersedia/Habis`). Dilarang untuk kategori statis, slogan, atau label fitur unggulan.

### B. Richness Floor (Batas Bawah — Mencegah Desain Kaku/Steril)
| Syarat Kekayaan Minimum (Jalur Profesional V2) | Target Minimum | Nilai / Penerapan pada Arketipe Ini |
| :--- | :--- | :--- |
| Sistem visual non-teks bermakna (ilustrasi SVG orisinal / diagram / arahan foto terarah; dilarang kotak kosong garis putus-putus) | `>= 1` | `[Sebutkan jumlah & lokasinya]` |
| Visualisasi data nyata (SVG + label langsung + anotasi + tabel HTML alternatif) | `>= 1` | `[Sebutkan jenis grafik & posisi tabel alternatifnya]` |
| Pola komposisi berbeda dalam 1 halaman (blok penuh lebar, grid asimetris, kolom sticky, sisipan inset, dll.) | `>= 3` | `[Sebutkan ke-3 polanya]` |
| Rasio display terhadap teks isi & angka `tabular-nums lining-nums` | `display/body >= 2.0` + aktif di angka data | `[Rasio terukur & selektor CSS]` |
| Warna fungsional (primer, sekunder, aksen data, netral hangat, status) | `>= 4` peran terisi | `[Sebutkan perannya]` |
| Interaksi / gerak fungsional + fallback `prefers-reduced-motion` | `>= 1` + fallback aktif | `[Sebutkan pemicu & tujuan]` |
| Microcopy manusiawi, spesifik, hangat tanpa slop | Terbukti di UI utama | `[Contoh kalimat utama]` |

- **Aturan Pasangan**: *Richness floor* tidak boleh melanggar *Slop budget*. Jika bertabrakan, selesaikan dengan desain yang lebih cerdas (misal tata letak terbuka bertonal atau pembagian grid asimetris), bukan dengan menghapus salah satunya.

---

## 6. Komponen Kunci, State Lengkap & Perilaku Keyboard
Setiap komponen wajib mendefinisikan anatomi, 8 state (`default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`, `error`, `success`), dan interaksi keyboard (`Tab`, `Enter`, `Space`, `Escape`, Arrow):
1. **Tombol (Primary, Secondary, Destructive)**
2. **Input Form, Select & Validasi Inline (+ Error Summary Box)**
3. **Kartu / Panel / Tabel Data**
4. **Banner Status / Toast / Modal**

---

## 7. Pola Layout & Peta Komposisi (Minimal 3 Pola Berbeda)
| Nama Pola Komposisi | Anatomi Grid & Lebar Kontainer | Kapan Dipakai | Contoh Penggunaan pada Arketipe |
| :--- | :--- | :--- | :--- |
| **1. [Pola 1, mis. Hero Asimetris + Panggung Visual]** | `[Contoh: 1.15fr 0.85fr, full-bleed warm/tint]` | `[Pembuka halaman / orientasi tugas atau cerita utama]` | `[Hero + ilustrasi / diorama / arahan foto]` |
| **2. [Pola 2, mis. Dua Kolom dengan Daftar Isi Sticky]** | `[Contoh: 260px sticky aside + 65ch teks]` | `[Artikel kebijakan, daftar syarat, atau panduan bertahap]` | `[Sticky TOC / stepper / filter]` |
| **3. [Pola 3, mis. Pita Penuh Lebar Berwarna / Grid Data]** | `[Contoh: 100vw band + grid 1.3fr 0.7fr atau sisipan inset]` | `[Pemecah ritme vertikal, visualisasi data, rangkuman dampak]` | `[Grafik + ringkasan "apa artinya" + tabel alternatif]` |

- **Formulir / Alur Transaksi**: [Satu kolom untuk form vertikal (`<= 580px`), stepper multi-langkah, validasi inline, error summary]

---

## 8. Sistem Motion & Koreografi
- **Token Durasi & Easing**: merujuk ke `_shared/motion-system.md` (`--duration-fast`, `--duration-normal`, `--ease-out`, `--ease-spring`).
- **Peta Motion**:
  | Pemicu | Elemen | Durasi & Easing | Tujuan Fungsional | Fallback `prefers-reduced-motion` |
  | :--- | :--- | :--- | :--- | :--- |
  | `[Load / Scroll / Klik]` | `[Elemen]` | `[__ms, __]` | `[Fokus / Umpan balik / Hubungan]` | `[Tampil instan / transisi opacity 100ms]` |

---

## 9. Interaksi & Mikro-Interaksi
- [Daftar interaksi spesifik pada tombol, input, kartu, navigasi, dan umpan balik status.]

---

## 10. Gamifikasi
- **Status**: `[Tidak Berlaku | Berlaku — sebutkan mekanik dari _shared/gamification-playbook.md]`
- **Alasan & Tujuan Bisnis**: [Mengapa mekanik ini membantu pengguna & bisnis]
- **Alur, Penyimpanan Data & Etika**: [Skema penyimpanan minimal, tanpa dark pattern/judi, tombol lewati/nonaktifkan]

---

## 11. Sistem Visual, Ilustrasi, Arahan Foto & Visualisasi Data

### A. Sistem Ilustrasi SVG Orisinal
- **Aturan Garis, Bentuk & Palet**: [Ketebalan garis konsisten, sudut `round/miter`, proporsi manusia/objek, maksimal 3–4 warna token]
- **Contoh Kode SVG**:
  ```svg
  <!-- Sertakan potongan SVG orisinal representatif sesuai aturan arketipe (zero placeholder kotak abu kosong) -->
  ```

### B. Arahan Foto (*Photo Direction*)
- **Subjek & Momen**: [Subjek nyata yang bekerja/menggunakan layanan — hindari pose kaku menghadap kamera atau foto stok generik]
- **Framing & Komposisi**: [Rasio aspek mis. `4:3` / `16:10`, ruang bernapas, orientasi mata]
- **Cahaya & Palet Warna**: [Cahaya natural siang hari / indoor hangat, harmonisasi dengan kanvas desain]
- **Hal yang Dilarang**: [Foto studio berlatar putih datar, jabat tangan seremonial, efek filter berlebih]
- **Contoh Placeholder Terarah** *(saat fotografi klien belum tersedia)*: [Desain placeholder yang menampilkan rasio tepat, SVG komposisi/framing hint, serta keterangan lengkap subjek & arahan pengambilan gambar — **dilarang kotak abu-abu atau garis putus-putus kosong**.]

### C. Sistem Visualisasi Data & Aksesibilitas *(Jika Berlaku)*
- **Jenis Grafik yang Didukung**: [Batang horizontal/vertikal, garis waktu, area, sparkline, peta ringkas]
- **Aturan Warna & Redundansi**: [Palet aman buta warna (`--accent-data-1..3`), wajib enkoding ganda lewat label langsung, pola garis/hatch, atau penanda bentuk — tidak mengandalkan warna saja]
- **Label Langsung & Anotasi**: [Judul bersifat temuan/kalimat aksi, nilai ditulis langsung di ujung baris/batang (`tabular-nums lining-nums`), teks grafik minimal `14px` horizontal]
- **Tabel Alternatif & Unduhan**: [Setiap grafik wajib disertai tabel HTML semantik (`<table>`, `<caption>`, `<th scope>`) yang selalu terlihat atau dapat dibuka lewat tab/toggle keyboard, serta tombol unduh data mentah (CSV/JSON) bila relevan]

### D. Ikonografi
- **Spesifikasi**: [Ketebalan garis (`stroke-width: 1.75px` atau `2px`), ukuran (`16px`/`20px`/`24px`), aturan `aria-hidden="true"` untuk ikon dekoratif]

---

## 12. Suara, Copywriting & Data Contoh
- **Tone**: [Sesuai profil: baku EYD V atau berkarakter merek]
- **Contoh Benar vs Salah**:
  - *Benar*: `"..."`
  - *Salah*: `"..."`
- **Kata Terlarang**: Mengacu penuh pada `_shared/antislop-visual.md`.

---

## 13. Aksesibilitas Khusus Desain Ini
- Mengacu pada `_shared/accessibility-baseline.md` ditambah aturan khusus arketipe ini (misal: alternatif tabel untuk grafik, kontrol jeda animasi, fokus kontras tinggi).

---

## 14. Anggaran Performa Khusus Desain Ini
- Mengacu pada `_shared/performance-budget.md`:
  - Target LCP: `<= __s`, INP: `<= __ms`, CLS: `<= __`
  - Batas JS: `<= __ KB`, Font: `<= __ KB`, Gambar awal: `<= __ KB`
- **Perbedaan Mode `Lite` vs `Full`** *(khusus Jalur Kreatif)*: [Jelaskan apa yang dipangkas di mode Lite untuk UMKM/koneksi lambat.]

---

## 15. Signature Moment
- **Deskripsi Konkret**: [Apa yang dilihat dan dilakukan pengguna]
- **Langkah Implementasi Teknis**: [HTML/CSS/JS yang digunakan]
- **Biaya Performa & Fallback**: [Estimasi KB/ms dan perilaku saat `prefers-reduced-motion: reduce`]

---

## 16. Cek Anti-Template & Rubrik Awwwards
### A. Tiga Hal yang Mustahil Ada di Template Umum
1. [...]
2. [...]
3. [...]

### B. Pemetaan Rubrik Awwwards *(Khusus Jalur Kreatif)*
| Kriteria (Bobot) | Bagaimana Arketipe Ini Memenuhinya | Ketergantungan pada Aset Nyata Klien |
| :--- | :--- | :--- |
| **Design (40%)** | [...] | [Foto produk/lokasi asli, logo vektor] |
| **Usability (30%)** | [...] | [Struktur layanan/harga nyata] |
| **Creativity (20%)** | [...] | [Cerita unik merek klien] |
| **Content (10%)** | [...] | [Copywriting & data faktual klien] |
| **Developer** | [Semantik HTML5, CWV, a11y, 60fps, reduced-motion] | [Konfigurasi hosting/caching produksi] |

---

## 17. Implementasi Siap Tempel (CSS Variables & Tailwind Config)

### A. CSS Custom Properties (`:root`)
```css
:root {
  /* Tempel seluruh token warna, font, spasi, radius, elevasi, dan motion di sini */
}
```

### B. Konfigurasi Tailwind (`@theme` / `tailwind.config.js`)
```javascript
// Mapping token ke utility Tailwind
```

---

## 18. Checklist QA Sebelum Rilis
- [ ] Seluruh kontras teks (termasuk `12px–14px`), aksen sekunder, warna seri data, dan fokus memenuhi WCAG 2.2 AA (`4.5:1` / `3:1`).
- [ ] Lulus **audit dua arah `slop-audit.js`**: mematuhi batas atas (*Slop Budget*) DAN memenuhi batas bawah (*Richness Floor*) di Bagian 5.5 (hasil aktual dilampirkan).
- [ ] Lulus ke-5 pertanyaan **Uji Kaku** di Bagian 1 dengan bukti nyata pada antarmuka.
- [ ] Khusus jalur pemerintah/profesional: font tersedia sebagai paket `WOFF2` self-hosted berlisensi terbuka + fallback stack dirancang tanpa CDN eksternal, angka data memakai `tabular-nums lining-nums`.
- [ ] Semua komponen memiliki state lengkap dan lulus uji navigasi keyboard (`Tab`, `Enter`, `Esc`).
- [ ] Interaksi kunci / *Signature Moment* berjalan mulus di `1280px` dan `375px` serta memiliki fallback `prefers-reduced-motion`.
- [ ] Tidak ada horizontal overflow, teks terpotong, kata yatim di judul, atau console error di DevTools.
- [ ] Lolos pemeriksaan `_shared/antislop-visual.md` dan anggaran `_shared/performance-budget.md`.

# Anggaran Performa & Core Web Vitals (`_shared/performance-budget.md`)

Keindahan visual tidak boleh dibayar dengan halaman yang membeku atau lambat dimuat. Dokumen ini menetapkan batas terukur Core Web Vitals dan bobot aset untuk **Jalur Profesional** serta **Jalur Kreatif (Mode Lite & Mode Full)**.

---

## 1. Tabel Anggaran Core Web Vitals & Bobot Aset Awal

| Metrik / Aset (Initial Load) | Jalur Profesional (`professional/*`) | Jalur Kreatif — Mode `Lite` (UMKM / Cepat) | Jalur Kreatif — Mode `Full` (Kampanye / Awwwards) |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `<= 1,5 detik` | `<= 1,8 detik` | `<= 2,5 detik` |
| **INP (Interaction to Next Paint)** | `<= 100 ms` | `<= 150 ms` | `<= 200 ms` |
| **CLS (Cumulative Layout Shift)** | `<= 0,02` (Target `0`) | `<= 0,05` (Target `0`) | `<= 0,05` (Target `0`) |
| **Frame Rate Animasi** | `60 fps` (transisi CSS) | `60 fps` | `60 fps` (auto-throttle di perangkat lemah) |
| **HTML + CSS Kritis (Gzip/Brotli)** | `<= 35 KB` | `<= 45 KB` | `<= 60 KB` |
| **JavaScript Awal (Gzip/Brotli)** | `<= 50 KB` | `<= 90 KB` | `<= 220 KB` (3D/WebGL wajib lazy-chunk) |
| **Font Web (WOFF2 Subset)** | `<= 80 KB` (maks 2 file/variabel) | `<= 110 KB` (maks 2 keluarga) | `<= 160 KB` (maks 3 keluarga) |
| **Gambar / Media Above-the-Fold** | `<= 150 KB` | `<= 250 KB` | `<= 500 KB` (AVIF/WebP + poster statis) |
| **Total Bobot Halaman Awal** | `<= 350 KB` | `<= 550 KB` | `<= 1.000 KB` (sebelum lazy-load scroll) |

---

## 2. Aturan Wajib Optimasi Font & Pencegahan CLS

1. **Format & Subset**: Gunakan hanya format **`WOFF2`** (subset Latin). Untuk jalur pemerintah (`gov-civic-warm`, `gov-institutional-editorial`, `gov-data-open`) pada profil `gov-enterprise`, font **wajib di-self-host** di `professional/_fonts/` (tanpa request ke CDN eksternal saat runtime).
2. **Strategi Muat**: Gunakan `font-display: swap` (atau `optional` untuk dashboard berkecepatan tinggi) dan sertakan `size-adjust` / fallback metrik sistem yang selaras agar pergantian font tidak menggeser tata letak (`CLS = 0`).
3. **Dimensi Eksplisit Media**: Setiap `<img>`, `<video>`, `<svg>`, dan `<canvas>` wajib memiliki atribut `width` dan `height` atau `aspect-ratio` CSS yang eksplisit sebelum aset selesai diunduh.

---

## 3. Aturan Wajib Optimasi Gambar & Video

- **Prioritas LCP**: Elemen gambar hero utama wajib memakai `fetchpriority="high"` dan `loading="eager"`; seluruh gambar di bawah lipatan layar (*below-the-fold*) wajib memakai `loading="lazy"` dan `decoding="async"`.
- **Format Modern**: Gunakan `AVIF` atau `WebP` untuk foto/ilustrasi raster, dan `SVG` inline/terkompresi untuk ikon, diagram, serta ornamen vektor.

---

## 4. Pengendalian Animasi Berat, Canvas & WebGL (Khusus Jalur Kreatif)

1. **Jangan Memblokir Render Pertama (*First Contentful Paint*)**:
   - Teks judul hero, navigasi, dan CTA utama harus dirender dengan HTML+CSS murni terlebih dahulu.
   - Pustaka animasi (`gsap@3.15.1`, `lenis@1.3.27`) atau 3D (`three@0.187.0`) dimuat secara `defer` atau melalui `import()` dinamis setelah konten utama terlihat.
2. **Auto-Pause Loop `requestAnimationFrame`**:
   - Setiap kanvas 2D/WebGL wajib memantau `IntersectionObserver` dan `visibilitychange`. Ketika kanvas keluar dari viewport atau pengguna berpindah tab (`document.hidden === true`), loop render **wajib dihentikan seketika** untuk mencegah kebocoran memori dan pengurasan baterai.
3. **Batas Resolusi Render (`devicePixelRatio`)**:
   - Batasi pixel ratio renderer WebGL/Canvas maksimal pada `Math.min(window.devicePixelRatio, 2)` agar layar ponsel beresolusi 3x/4x tidak mengalami penurunan FPS drastis.
4. **Degradasi Anggun untuk Perangkat Lemah & Reduced Motion**:
   - Jika `window.matchMedia('(prefers-reduced-motion: reduce)').matches`, `navigator.hardwareConcurrency <= 4`, atau `navigator.connection?.saveData === true`, lewati inisialisasi WebGL/partikel dan tampilkan komposisi visual statis (SVG/CSS/gambar poster) yang tetap mempertahankan estetika arketipe.

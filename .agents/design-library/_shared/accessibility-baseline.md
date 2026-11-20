# Baseline Aksesibilitas WCAG 2.2 Level AA (`_shared/accessibility-baseline.md`)

Seluruh arketipe di `.agents/design-library/` — baik Jalur Profesional maupun Jalur Kreatif — wajib memenuhi kriteria **WCAG 2.2 Level AA** berikut sebelum dinyatakan selesai.

---

## 1. Kontras Warna Terukur (SC 1.4.3 & SC 1.4.11)

- **Teks Normal (`< 18pt` / `< 24px`, atau `< 14pt` / `< 18.66px` bold)**: rasio kontras minimum **`4.5:1`** terhadap latar belakangnya (Jalur Profesional menargetkan **`>= 7:1` AAA** untuk teks bacaan utama).
- **Teks Besar (`>= 24px` regular atau `>= 18.66px` bold)**: rasio kontras minimum **`3.0:1`**.
- **Komponen UI Non-Teks & Indikator Fokus (SC 1.4.11)**: border input, batas kartu yang menandai area klik, ikon bermakna, dan cincin `:focus-visible` wajib memiliki kontras minimal **`3.0:1`** terhadap warna di sebelahnya.
- **Jangan Mengandalkan Warna Saja (SC 1.4.1)**: status sukses, peringatan, atau error pada form, badge, dan grafik wajib disertai **label teks eksplisit atau ikon pembeda** (misal: `[!] Nomor induk harus 16 digit`, bukan sekadar border merah).

---

## 2. Indikator Fokus & Navigasi Keyboard (SC 2.1.1, SC 2.4.7, SC 2.4.11)

1. **Cincin Fokus Terlihat Jelas (`:focus-visible`)**:
   - Dilarang menulis `outline: none` tanpa menyediakan indikator `:focus-visible` pengganti yang tegas.
   - Standar minimum cincin fokus:
     ```css
     :focus-visible {
       outline: 2px solid var(--accent-primary);
       outline-offset: 2px;
     }
     ```
2. **Fokus Tidak Tertutup (*Focus Not Obscured* — WCAG 2.2 SC 2.4.11)**:
   - Saat pengguna menekan `Tab`, elemen yang sedang fokus tidak boleh tertutup oleh sticky header, floating navbar, atau banner cookie. Gunakan `scroll-padding-top: 5rem;` pada `html`.
3. **Urutan Fokus & Operasi Keyboard Penuh**:
   - Urutan `Tab` wajib mengikuti urutan visual kiri-ke-kanan, atas-ke-bawah.
   - Sediakan tautan **"Lewati ke konten utama" (*Skip to main content*)** sebagai elemen fokus pertama di setiap halaman.
   - Modal/Dialog wajib mengunci fokus (*focus trap*) selama terbuka, menutup saat tombol `Escape` ditekan, dan mengembalikan fokus ke tombol pemicu saat tertutup.

---

## 3. Ukuran Target Sentuh & Jarak (WCAG 2.2 SC 2.5.8)

- **Minimum Mutlak WCAG 2.2**: setiap target interaktif (tombol, ikon tutup, pagination, titik kuis) wajib berukuran minimal **`24x24 CSS px`** (atau memiliki jarak bebas sekeliling sehingga lingkaran berdiameter 24px tidak beririsan dengan target lain).
- **Target Rekomendasi Mobile Kami**: **`44x44 CSS px`** untuk seluruh tombol utama, input form, dan navigasi mobile.

---

## 4. Struktur Semantik, Label Formulir & ARIA

- Gunakan elemen HTML5 asli terlebih dahulu (`<button>`, `<a href>`, `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dialog>`).
- Setiap `<input>`, `<select>`, dan `<textarea>` wajib memiliki `<label for="...">` yang terhubung secara eksplisit. Placeholder **bukan** pengganti label.
- Pesan error validasi wajib dihubungkan ke input melalui `aria-describedby="id-error"` dan `aria-invalid="true"`.
- Gunakan `aria-live="polite"` pada notifikasi status, hasil filter, perubahan poin/stempel gamifikasi, dan ringkasan error agar pembaca layar (*screen reader*) membacakannya tanpa memotong ucapan.
- Untuk elemen `<canvas>`, SVG kompleks, atau adegan WebGL/3D di Jalur Kreatif, wajib sediakan atribut `role="img"` + `aria-label` yang mendeskripsikan isi visualnya, atau blok teks pendamping yang setara di DOM.

---

## 5. Keamanan Animasi & Gerakan (SC 2.2.2 & SC 2.3.1)

- **Tanpa Kedipan Berbahaya (SC 2.3.1)**: dilarang keras membuat efek strobo atau kilatan cahaya lebih dari **3 kali per detik** (mencegah risiko fotosensitif/kejang).
- **Kontrol Jeda/Henti (SC 2.2.2)**: setiap marquee, carousel otomatis, atau animasi latar yang bergerak terus-menerus selama lebih dari 5 detik wajib menghormati `prefers-reduced-motion: reduce` dan berhenti saat kursor berada di atasnya (`:hover`) atau saat menerima fokus keyboard (`:focus-within`).

---

## 6. Prosedur Verifikasi Nyata (axe & Lighthouse via DevTools)

Sebelum sebuah `DESIGN.md` atau `preview.html` dinyatakan lolos:
1. Buka halaman di browser nyata pada lebar **`375px`** dan **`1280px`** menggunakan `chrome-devtools-plugin`.
2. Jalankan pemeriksaan **Accessibility tree / Lighthouse / axe-core** dan pastikan skor aksesibilitas **>= 95** (target **100** pada `preview.html`) dengan **0 pelanggaran kritikal/serius**.
3. Lakukan uji tekan tombol `Tab` dari awal hingga akhir halaman untuk memverifikasi *Skip Link*, urutan fokus, dan operasi komponen interaktif.

# Sistem Motion & Koreografi (`_shared/motion-system.md`)

Panduan ini mengatur seluruh gerakan antarmuka di `.agents/design-library/`. Setiap animasi wajib memiliki tujuan fungsional (memandu perhatian, memberi umpan balik aksi, atau menjelaskan hubungan spasial antar-state) dan tunduk pada preferensi aksesibilitas pengguna.

---

## 1. Skala Durasi Token

| Token CSS | Nilai | Kapan Digunakan |
| :--- | :--- | :--- |
| `--duration-instant` | `75ms` | Umpan balik tekan tombol (`:active`), toggle checkbox/radio, hover warna mikro. |
| `--duration-fast` | `150ms` | Muncul/hilangnya tooltip, dropdown, focus ring, validasi inline. |
| `--duration-normal` | `250ms` | Transisi tab, accordion, drawer, modal, hover kartu di jalur profesional. |
| `--duration-deliberate` | `450ms` | Transisi antar-langkah form wizard, reveal elemen utama, View Transitions halaman. |
| `--duration-cinematic` | `800ms` | *Signature moment* jalur kreatif, koreografi hero pembuka (maksimal 1 kali per muat halaman). |

Aturan keras: dilarang menggunakan durasi `> 300ms` pada interaksi berulang yang menghalangi input pengguna (seperti menutup modal atau berpindah field form).

---

## 2. Kurva Easing & Spring

```css
:root {
  /* Keluar cepat, mendarat lembut — untuk elemen yang masuk ke layar */
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);

  /* Masuk-keluar simetris — untuk elemen yang berpindah posisi di dalam layar */
  --ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);

  /* Spring alami menggunakan CSS linear() (Baseline modern, tanpa JS) */
  --ease-spring-snappy: linear(
    0, 0.453 7.8%, 0.803 16.1%, 1.008 24.9%, 1.084 33.3%,
    1.053 44.6%, 1.007 58.2%, 0.996 72.2%, 1
  );
  --ease-spring-gentle: linear(
    0, 0.28 8%, 0.68 18%, 0.95 29%, 1.04 41%, 1.02 58%, 1
  );
}
```

- **Jalur Profesional (`professional/*`)**: Gunakan hanya `--ease-out-quart` dan `--ease-in-out-cubic`. Dilarang memakai pantulan (*overshoot/spring*) pada aplikasi pemerintah dan dashboard enterprise.
- **Jalur Kreatif (`creative/*`)**: Gunakan `--ease-out-expo`, `--ease-spring-snappy`, atau `--ease-spring-gentle` sesuai kepribadian arketipe.

---

## 3. Aturan Koreografi & Stagger

1. **Aturan Satu Animasi Utama per Layar (*One Primary Motion Rule*)**:
   - Pada satu viewport di satu waktu, hanya boleh ada **satu** koreografi utama yang memimpin mata pengguna. Elemen pendukung harus diam atau masuk secara hening.
2. **Batas Stagger**:
   - Jeda antar-item dalam daftar/grid (`stagger`) adalah **`35ms–55ms`**.
   - **Total penundaan maksimum (`max total delay`) tidak boleh melebihi `280ms`**. Jika sebuah tabel/katalog memiliki 20 item, jangan men-stagger ke-20 item hingga 1 detik; stagger 5 item pertama, lalu tampilkan sisanya bersamaan.
3. **Properti yang Diizinkan untuk Dianimasikan**:
   - Utamakan properti komposit GPU: `transform` (`translate3d`, `scale`, `rotate`) dan `opacity`.
   - Hindari menganimasikan `top`, `left`, `width`, `height`, atau `box-shadow` berat secara kontinu pada elemen besar karena memicu *layout thrashing* dan menurunkan frame rate di bawah 60fps.

---

## 4. Scroll-Driven Animations & Smooth Scroll

1. **CSS Scroll-Driven Animations (Utamakan Sebelum JS)**:
   - Gunakan `animation-timeline: view()` atau `scroll()` dengan `@supports (animation-timeline: view())` untuk indikator progres baca dan parallax ringan tanpa membebani main thread.
2. **GSAP + ScrollTrigger & Lenis (Khusus Jalur Kreatif Full)**:
   - Versi terverifikasi: `gsap@3.15.1` (Standard "No Charge" License) dan `lenis@1.3.27` (MIT).
   - Aturan penggunaan:
     - Jangan pernah membajak kecepatan scroll alami (*scroll-jacking* yang membuat pengguna kehilangan kendali posisi halaman).
     - Batasi bagian yang di-*pin* (`pin: true`) maksimal `150vh` jarak gulir dan sediakan tombol/jalur lewati jika mengunci layar.
     - Hentikan ticker/RAF ketika tab tidak aktif (`document.hidden`).

---

## 5. View Transitions API

Gunakan transisi halaman native yang terdegradasi anggun di browser lama:

```css
@view-transition {
  navigation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: var(--duration-normal, 250ms);
  animation-timing-function: var(--ease-out-quart);
}
```

Untuk mutasi DOM dalam satu halaman (misal filter kategori atau buka detail kartu), bungkus dengan:
```javascript
if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.startViewTransition(() => updateDOM());
} else {
  updateDOM();
}
```

---

## 6. Fallback Wajib: `prefers-reduced-motion` & Perangkat Lemah

Setiap `DESIGN.md` dan `preview.html` **wajib** menyertakan blok berikut:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- **Konten Tidak Boleh Terkunci di Balik Animasi**: Jangan pernah menyetel elemen ke `opacity: 0` di CSS statis tanpa memastikan elemen tersebut langsung menjadi `opacity: 1` ketika JS gagal dimuat atau ketika `prefers-reduced-motion: reduce` aktif.
- **Deteksi Perangkat Lemah (untuk WebGL/Canvas di Jalur Kreatif)**:
  - Jika `navigator.hardwareConcurrency <= 4` atau `navigator.connection?.saveData === true`, nonaktifkan shader/partikel berat dan tampilkan fallback komposisi SVG/CSS statis berkualitas tinggi.

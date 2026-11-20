---
name: ui-states-and-interaction
description: Menjamin kelengkapan state UI (loading, skeleton, empty, error, success, disabled), validasi form inline, tabel/filter/pagination, dashboard, feedback aksi, fokus keyboard, dan motion yang menghormati prefers-reduced-motion. Aktifkan saat membangun halaman aplikasi, dashboard, form, atau tabel interaktif. JANGAN aktifkan untuk landing page statis tanpa form/data dinamis.
---

# UI States and Interaction

## Langkah Konkret
1. **Enam State Wajib pada Setiap Komponen Data/Aksi**:
   - **Loading / Skeleton**: tampilkan skeleton sesuai bentuk konten (bukan spinner kosong di tengah layar) untuk muat awal, atau indikator loading pada tombol saat submit.
   - **Empty State**: jelaskan mengapa data kosong dan sediakan aksi berikutnya (misal "Belum ada pengajuan. Buat pengajuan baru").
   - **Error State**: tampilkan pesan jelas penyebab gagal + tombol "Coba lagi".
   - **Success Feedback**: berikan toast/banner/inline confirmation setelah mutasi berhasil.
   - **Disabled**: nonaktifkan tombol submit selama request berlangsung untuk mencegah double-submit.
2. **Form & Validasi Inline**:
   - Hubungkan label dengan input (`for`/`id`), tampilkan error validasi tepat di bawah field terkait dengan `aria-invalid="true"` dan `aria-describedby`.
3. **Tabel, Filter & Pagination**:
   - Sediakan pencarian/filter yang jelas, indikator jumlah data, sorting kolom penting, pagination, dan tampilan responsif di mobile (ringkasan kartu atau scroll horizontal terkontrol).
4. **Fokus, Keyboard & Motion**:
   - Seluruh aksi bisa dicapai lewat `Tab`/`Enter`/`Space`/`Esc` (modal & dropdown menutup dengan `Esc` dan mengembalikan fokus ke pemicu).
   - Bungkus animasi non-esensial dengan `@media (prefers-reduced-motion: reduce)`.

## Contoh Benar vs Salah
- **Salah**: Tombol "Simpan" bisa diklik berkali-kali saat request lambat, dan jika gagal hanya menulis `console.error`.
- **Benar**: Tombol berubah `disabled` + teks "Menyimpan...", menampilkan pesan error inline di bawah field dari HTTP 422, atau banner error dengan tombol ulangi jika 500.

## Checklist Keluaran
- [ ] State loading/skeleton, empty, error, success, dan disabled terimplementasi.
- [ ] Form memiliki validasi inline dan pencegahan double-submit.
- [ ] Modal/dropdown/tabel dapat dioperasikan dengan keyboard dan menghormati `prefers-reduced-motion`.

# External Brand Reference Catalog (`awesome-design-md`)

Direktori `.agents/design-library/references/awesome-design-md/` berisi **84 sistem desain referensi (`DESIGN.md`)** yang diambil dari [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (Lisensi MIT — lihat [LICENSE](awesome-design-md/LICENSE)).

## Cara Pakai yang Benar (Hierarki Otoritas)
1. **Jangan jadikan mentah-mentah tanpa penyesuaian**: Koleksi ini adalah **katalog referensi industri/merek** (mis. `linear.app`, `stripe`, `claude`, `notion`, `vercel`, `framer`, `supabase`, `revolut`, `airbnb`, `figma`).
2. **Alur Adaptasi ke `./DESIGN.md` (Hemat Token)**:
   - Baca [`INDEX.md`](INDEX.md) terlebih dahulu (~2k token untuk 84 merek) guna menyaring 1–2 kandidat terdekat, lalu buka **hanya 1** file `awesome-design-md/<brand>/DESIGN.md` yang terpilih. Dilarang membaca folder `awesome-design-md/` secara massal.
   - Salin ke `./DESIGN.md` di root proyek target, lalu sesuaikan nama merek, palet, bahasa (EYD V bila `id`), dan pastikan kepatuhan WCAG 2.2 AA serta kebijakan anti-slop di `.agents/rules/antislop-policy.md`.
   - Jika profil proyek adalah `gov-enterprise`, pastikan font tetap self-hosted `WOFF2` tanpa CDN eksternal.
3. **Catat di `REGISTRY.md`**: Tetap catat proyek baru ke Log Proyek Klien di [../REGISTRY.md](../REGISTRY.md).

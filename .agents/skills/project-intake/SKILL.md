---
name: project-intake
description: Mengumpulkan konteks awal project secara ringkas (maksimal 5 pertanyaan) untuk menulis .agents/project.md dan menginisialisasi ./DESIGN.md dari Design Library. Aktifkan di awal sesi jika .agents/project.md belum ada atau masih berupa template. JANGAN aktifkan jika .agents/project.md sudah terisi lengkap.
---

# Project Intake & Unified DESIGN.md Initialization

## Alur Default Terpadu (Proyek UI Baru)
1. Deteksi framework dan teknologi dari `composer.json`, `package.json`, `pyproject.toml`, `README.md`, dan `./DESIGN.md`.
2. Tentukan profil konteks (`gov-enterprise` atau `startup-creative`).
3. Pilih tepat **satu arketipe aktif** dari [`.agents/design-library/README.md`](../../design-library/README.md) (atau bila butuh referensi merek/industri spesifik, cek ringkasannya di [`.agents/design-library/references/INDEX.md`](../../design-library/references/INDEX.md) lalu buka **hanya 1** `<brand>/DESIGN.md` terpilih).
4. Salin `.agents/design-library/<jalur>/<arketipe>/DESIGN.md` ke `./DESIGN.md` di root proyek.
5. Sesuaikan identitas merek, audiens, suara merek, dan pasangan kontras pada `./DESIGN.md`.
6. Turunkan token desain melalui `design-system-tokens`.
7. Implementasikan frontend melalui `frontend-modern-web` (tunduk sepenuhnya pada `./DESIGN.md`).
8. Simpan hasil konfigurasi ke `.agents/project.md` dan catat proyek pada [`.agents/design-library/REGISTRY.md`](../../design-library/REGISTRY.md).

> **Aturan `stitch-design-taste`**: `stitch-design-taste` **bukan** mekanisme default pembuatan `DESIGN.md`. Gunakan hanya bila pengguna secara eksplisit meminta integrasi/eksplorasi Google Stitch, lalu selaraskan hasilnya dengan `./DESIGN.md`.

## Langkah Konkret (Maksimal 5 Pertanyaan Sekaligus)
Ajukan **maksimal 5 pertanyaan ringkas** dalam satu giliran bila nilai berikut belum terbaca dari repo:
1. **Profil Konteks & Regulasi**: `gov-enterprise` atau `startup-creative`, serta regulasi relevan (`UU PDP`, `WCAG 2.2 AA`, `UU No. 24/2009`, `OWASP`, atau tidak ada)?
2. **Target Audiens & Suara Merek**: siapa pengguna utama dan nada komunikasi yang diharapkan?
3. **Mode Arsitektur Backend** *(jika ada backend)*: `SOLID` penuh atau `MVC` standar?
4. **Arketipe Visual (`.agents/design-library/`)** *(jika ada UI)* — pilih 1 dari **11 arketipe aktif** (atau tanyakan sekali dengan 2 kandidat terdekat bila ragu):
   - **Jalur Profesional (`professional/*`)**: `gov-civic-warm`, `gov-institutional-editorial`, `gov-data-open`, `enterprise-dashboard`, `kuratorku-institutional` *(wajib tambah overlay `overlays/id-gov.md` untuk `.go.id`)*.
   - **Jalur Kreatif (`creative/*`)**: `playful-gamified`, `kinetic-editorial`, `immersive-storyworld`, `neo-brutalist-pop`, `warm-craft-nusantara`, `dark-tech-signal`.
   - **Referensi Merek (`references/INDEX.md`)**: opsional untuk mencari inspirasi merek/industri; tetap patuhi WCAG 2.2 AA & anti-slop saat disalin ke `./DESIGN.md`.
   - **Larangan Deprecated**: jangan pernah memilih atau merekomendasikan arketipe lama `_archive/v1/` (`gov-portal`, `corporate-trust`) untuk proyek baru.
5. **Bahasa Utama UI & Dokumen**: `id`, `en`, atau `id+en`?

Setelah dijawab:
- Tulis seluruh field `.agents/project.md` (`Profil Konteks`, `Stack Utama`, `Mode Arsitektur Backend`, `Target Audiens`, `Bahasa Utama`, `Arketipe Desain Terpilih`, `Sumber Desain`, `Regulasi Relevan`, `Suara Merek`, `Catatan Klien`).
- Salin & sesuaikan `./DESIGN.md` dari arketipe terpilih dan catat di `.agents/design-library/REGISTRY.md`.

## Contoh Benar vs Salah
- **Salah**: Memakai `stitch-design-taste` otomatis tanpa mengecek `.agents/design-library/`, atau merekomendasikan `gov-portal` / `corporate-trust` dari arsip lama.
- **Benar**: "Terdeteksi Next.js 15 + Tailwind di `package.json`. Untuk melengkapi `.agents/project.md` dan memilih `DESIGN.md`: (1) Profil `startup-creative` atau `gov-enterprise`, dan adakah regulasi khusus? (2) Audiens & suara merek? (3) Pilih kandidat arketipe: `creative/kinetic-editorial` atau `creative/dark-tech-signal`? (4) Backend `MVC`/`SOLID`/`N/A`? (5) Bahasa utama `id` atau `en`?"

## Checklist Keluaran
- [ ] Framework/stack terdeteksi otomatis sebelum bertanya.
- [ ] Maksimal 5 pertanyaan diajukan dalam satu giliran.
- [ ] `.agents/project.md` terisi lengkap termasuk `Target Audiens`, `Arketipe Desain Terpilih`, `Sumber Desain`, `Regulasi Relevan`, dan `Suara Merek`.
- [ ] `./DESIGN.md` disalin dari 1 arketipe aktif Design Library, disesuaikan, dan dicatat di `.agents/design-library/REGISTRY.md`.

---
name: spec-and-planning
description: Mengubah permintaan fitur menjadi PRP (Product Requirements Prompt), user story, acceptance criteria yang dapat diuji, pemecahan task teknis, dan ADR singkat untuk keputusan arsitektural penting. Aktifkan sebelum implementasi fitur non-trivial atau multi-file. JANGAN aktifkan untuk perbaikan typo, bug satu baris, atau perubahan konfigurasi trivial.
---

# Spec, Planning & PRP (*Product Requirements Prompt*)

## Langkah Konkret
1. **User Story**: Rumuskan siapa pengguna, aksi yang dilakukan, dan hasil yang diharapkan.
2. **Acceptance Criteria (AC)**: Tulis kriteria terukur (`Given/When/Then` atau poin kondisi lolos/gagal) termasuk edge case dan error state.
3. **Susun & Simpan PRP ke File (`docs/prp/<slug-fitur>.md`) untuk Fitur Non-Trivial / Multi-File**:
   Kumpulkan konteks nyata dari codebase sebelum menulis kode agar implementasi tetap konsisten, lalu **simpan** ke `docs/prp/<slug-fitur>.md` (dengan status awal `DRAFT` agar mudah direview sebelum dieksekusi):
   - **Goal & Why**: Masalah yang diselesaikan dan cakupan (termasuk apa yang *tidak* diubah).
   - **Konteks Codebase & Desain**: Rujuk `.agents/project.md` (stack, mode `SOLID`/`MVC`), `./DESIGN.md` (jika ada UI), serta path file & pola eksisting yang wajib diikuti (hasil pembacaan nyata, bukan tebakan).
   - **Gotchas & Batasan**: Aturan keamanan (otorisasi/anti-IDOR, validasi, UU PDP), dependensi, dan edge case.
   - **Blueprint Implementasi**: Urutan langkah per layer (Skema/Kontrak → Backend/API → UI/Token/6 State → Test) beserta daftar file terdampak.
   - **Validation Gates**: Perintah verifikasi nyata dari `.agents/project.md` (`lint`, `typecheck`, `test`, `build`, plus cek `375px/768px/1280px` & `slop-audit.js` jika UI).
4. **Catat di Log Konteks (`docs/WORKLOG.md`)**:
   - Buat/perbarui `docs/WORKLOG.md` setiap kali PRP dibuat (`DRAFT`), mulai dikerjakan (`IN_PROGRESS`), atau selesai (`DONE`).
   - Tujuannya agar di sesi baru agent cukup membaca 1 file ringkas ini untuk tahu apa yang **sudah dikerjakan**, **sedang dikerjakan**, dan **antrean berikutnya** tanpa boros token.
5. **ADR Singkat** (hanya jika ada keputusan berdampak jangka panjang: pilih library, ubah skema besar, pilih pola auth/queue):
   - Konteks masalah, keputusan yang diambil, alternatif yang ditolak beserta alasannya, dan konsekuensi/risiko.

## Template Ringkas PRP (`docs/prp/<slug-fitur>.md`)
```markdown
# PRP: <Nama Fitur>
- **Status**: `DRAFT` | `APPROVED` | `IN_PROGRESS` | `DONE`
- **Tanggal**: YYYY-MM-DD

## 1. Goal & Cakupan
- **Masalah & Tujuan**: ...
- **Di luar cakupan**: ...

## 2. Konteks Codebase & Desain
- **Profil & Stack**: (dari `.agents/project.md`)
- **Otoritas Visual**: (`./DESIGN.md` atau `N/A`)
- **File & Pola Rujukan**: `<path/file>` (pola yang harus diikuti)

## 3. Acceptance Criteria
- Given ..., When ..., Then ...

## 4. Gotchas & Batasan Keamanan
- ...

## 5. Blueprint Implementasi (Urutan Task)
1. [Skema/Kontrak] ...
2. [Backend/API] ...
3. [UI & State] ...
4. [Test] ...

## 6. Validation Gates
- [ ] Lint & static analysis: `<perintah>`
- [ ] Test suite: `<perintah>`
- [ ] Build & visual QA (jika UI): `<perintah>`
```

## Template Log Konteks (`docs/WORKLOG.md`)
```markdown
# Project Worklog (`docs/WORKLOG.md`)

| Tanggal | Fitur / PRP | Status | Ringkasan & Catatan Konteks |
| :--- | :--- | :--- | :--- |
| YYYY-MM-DD | `[Nama Fitur](prp/<slug>.md)` | `IN_PROGRESS` | Tahap saat ini, blocker, atau keputusan penting |
```

## Contoh Benar vs Salah
- **Salah**: "Membuat fitur manajemen surat masuk agar user bisa mengelola surat dengan mudah dan cepat."
- **Benar**:
  - Story: "Sebagai operator TU, saya dapat mengunggah surat masuk PDF maksimal 5 MB agar tercatat dengan nomor agenda unik."
  - AC: "Jika file > 5 MB atau bukan PDF, sistem menolak dengan HTTP 422 dan pesan error inline; jika sukses, nomor agenda `SM/YYYY/NNNN` terbentuk atomik."

## Checklist Keluaran
- [ ] Setiap fitur punya minimal 1 user story dan acceptance criteria yang bisa diuji.
- [ ] Fitur non-trivial memiliki PRP dengan path file rujukan nyata dari codebase (tanpa asumsi).
- [ ] Task dipecah berurutan dan menyebut file/komponen terdampak.
- [ ] Validation gates mencantumkan perintah verifikasi nyata yang wajib dijalankan setelah edit terakhir.

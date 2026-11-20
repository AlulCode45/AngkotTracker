# Workspace Rule: Git Workflow & Commit Guidelines

## 1. Pemeriksaan Sebelum Commit
1. Jalankan `git status` dan `git diff --staged` sebelum melakukan commit.
2. Pastikan tidak sedang berada di branch `main` atau `master` (gunakan branch fitur/perbaikan).
3. Jangan mencampur perubahan pengguna yang sudah ada dan belum di-commit ke dalam commit task agent.
4. Pastikan file `.env`, sertifikat, kunci privat, atau secret tidak masuk staging.

## 2. Konvensi & Format Commit
- Hormati konvensi commit yang sudah berlaku di repository target (`git log -n 5 --oneline`).
- Jika belum ada konvensi khusus, gunakan Conventional Commits:
  `<type>(<scope>): <pesan>`
  Tipe: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `ci`.
- Setiap commit harus atomik (satu fokus perubahan tuntas per commit).

## 3. Kebijakan Dokumentasi pada Commit
- Perbarui dokumentasi (`README.md`, schema docs, API docs, `CHANGELOG.md`) **hanya jika** perubahan memengaruhi perilaku sistem, kontrak API, skema database, atau cara setup.
- Hindari pembaruan dokumentasi kosmetik untuk refactor internal yang tidak mengubah kontrak.

---
name: stack-python
description: Panduan arsitektur backend & CLI Python modern (FastAPI, Django, Flask, Pydantic, SQLAlchemy/ORM, pytest, ruff, mypy). Aktifkan saat project terdeteksi memakai pyproject.toml atau requirements.txt sebagai layanan Python. JANGAN aktifkan untuk project Laravel, Node.js, atau frontend murni.
---

# Stack Guide: Python Backend / API

> Kerangka pendamping lintas-stack. Ikuti framework HTTP, ORM, dan package manager (`uv`, `poetry`, `pip`) yang sudah ada di `pyproject.toml` project target.

## Langkah Konkret
1. **Struktur & Type Safety**:
   - Pisahkan `routers/endpoints` → `schemas` (Pydantic) → `services` → `repositories/models`; aktifkan type hints eksplisit di seluruh fungsi publik dan schema.
   - Jangan campur query database mentah atau logika bisnis langsung di route handler.
2. **Validasi & Error Handling**:
   - Validasi seluruh input request (`body`, `query`, `path`) di boundary menggunakan Pydantic v2 atau serializer framework.
   - Tangani error dengan exception handler terpusat yang mengembalikan format JSON konsisten tanpa membocorkan traceback di produksi.
3. **Keamanan & Async Hygiene**:
   - Gunakan parameterized query melalui ORM/driver; dilarang f-string atau konkatenasi pada SQL.
   - Terapkan autentikasi, otorisasi per resource (anti-IDOR), CORS whitelist, serta rate limiting pada endpoint sensitif.
   - Pada kode `async` (FastAPI/Starlette), jangan panggil operasi blocking sinkron di dalam event loop tanpa `run_in_executor` atau driver async.
4. **Verifikasi**:
   - Jalankan linter/formatter (`ruff check`), typecheck (`mypy` / `pyright`), test suite (`pytest`), dan audit dependensi (`pip-audit` jika tersedia).

## Contoh Benar vs Salah
- **Salah**: `cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")` di dalam route handler.
- **Benar**: Validasi `user_id` via path/Pydantic schema, cek kepemilikan/izin akses di dependency atau service, dan jalankan query terparameterisasi.

## TODO / Penyesuaian Per Project
- [ ] TODO: Konfirmasi framework (`FastAPI` / `Django` / `Flask`) dan ORM (`SQLAlchemy` / `Django ORM` / `Tortoise`) dari `pyproject.toml`.
- [ ] TODO: Konfirmasi runner & tooling (`uv run` / `poetry run`, `ruff`, `mypy`, `pytest`).

## Checklist Keluaran
- [ ] Input divalidasi dengan Pydantic / serializer di boundary API.
- [ ] Tidak ada SQL string interpolation dan tidak ada blocking I/O di async handler.
- [ ] `ruff`, typecheck, dan `pytest` dijalankan setelah edit terakhir.

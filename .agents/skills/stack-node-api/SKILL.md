---
name: stack-node-api
description: Panduan arsitektur REST/HTTP API untuk Node.js dengan TypeScript (validasi schema, struktur layer, error handling, auth, rate limit, dan testing). Aktifkan saat project terdeteksi sebagai layanan API Node.js/TypeScript (Express, Fastify, Hono, NestJS). JANGAN aktifkan untuk project Laravel atau frontend murni.
---

# Stack Guide: Node.js / TypeScript API

> Kerangka pendamping lintas-stack. Ikuti framework HTTP dan ORM yang sudah ada di `package.json` project target.

## Langkah Konkret
1. **Struktur & Pemisahan Tanggung Jawab**:
   - Pisahkan `routes` → `controllers/handlers` → `services` → `repositories/db` sesuai konvensi repo; gunakan `strict: true` di `tsconfig.json`.
   - Jangan campur logika bisnis langsung di route definition.
2. **Validasi & Format Response Konsisten**:
   - Validasi `body`, `query`, dan `params` di boundary request menggunakan schema validator (Zod/Valibot/class-validator).
   - Gunakan global error handler yang mengembalikan format JSON terstruktur tanpa membocorkan stack trace di produksi.
3. **Keamanan API**:
   - Terapkan autentikasi, otorisasi per resource (anti-IDOR), rate limiting pada endpoint auth/publik, CORS ketat (whitelist origin), dan `helmet` / security headers.
   - Gunakan parameterized query / ORM; dilarang konkatenasi string SQL.
4. **Verifikasi**:
   - Jalankan lint, `npx tsc --noEmit`, unit/integration test, dan `npm audit --omit=dev`.

## Contoh Benar vs Salah
- **Salah**: `app.get('/orders/:id', async (req, res) => res.json(await db.query('SELECT * FROM orders WHERE id=' + req.params.id)))`.
- **Benar**: Validasi `params.id`, cek `order.userId === req.user.id` (atau role admin), gunakan parameterized query, dan kembalikan DTO yang membuang field internal.

## TODO / Penyesuaian Per Project
- [ ] TODO: Konfirmasi framework HTTP (`Fastify` / `Hono` / `Express` / `NestJS`) dan ORM (`Prisma` / `Drizzle` / `Knex`) dari `package.json`.
- [ ] TODO: Sesuaikan konfigurasi test runner (`vitest` / `node --test` / `jest`) + `supertest`.

## Checklist Keluaran
- [ ] Validasi schema aktif di seluruh endpoint input.
- [ ] Authz (anti-IDOR), rate limit, dan global error handler terpasang.
- [ ] Typecheck, lint, test, dan `npm audit` dijalankan.

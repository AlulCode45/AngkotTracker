---
name: stack-nextjs
description: Panduan arsitektur dan konvensi Next.js (App Router, TypeScript, Server/Client Components, validasi input, keamanan, dan testing). Aktifkan saat project terdeteksi memakai Next.js di package.json. JANGAN aktifkan untuk project Laravel/Blade atau API backend tanpa Next.js.
---

# Stack Guide: Next.js (App Router + TypeScript)

> Kerangka pendamping lintas-stack. Selaraskan dengan struktur folder yang sudah ada di repo target (`src/app` vs `app`).

## Langkah Konkret
1. **Server vs Client Components**:
   - Default gunakan Server Component; tambahkan `'use client'` hanya pada komponen yang membutuhkan state, event handler, atau browser API.
   - Jangan pernah meneruskan secret/env non-publik atau objek database sensitif ke Client Component props.
2. **Validasi & Mutasi Data (Route Handlers / Server Actions)**:
   - Validasi seluruh input dengan skema eksplisit (misal Zod) di boundary server sebelum menulis ke DB.
   - Periksa sesi autentikasi dan kepemilikan resource (anti-IDOR) di setiap Server Action dan Route Handler.
3. **Token UI, Aksesibilitas & SEO**:
   - Muat `design-system-tokens`, `ui-states-and-interaction`, dan `accessibility-wcag`.
   - Untuk halaman publik/landing page, gunakan Metadata API (`generateMetadata` / `metadata`) untuk `<title>`, `description`, dan OpenGraph.
4. **Verifikasi**:
   - Jalankan `npm run lint`, `npx tsc --noEmit`, `npm run build`, serta cek visual `375px` & `1280px` lewat `verification-and-qa`.

## Contoh Benar vs Salah
- **Salah**: Menaruh `'use client'` di root layout dan mengambil data rahasia lewat `NEXT_PUBLIC_*` atau fetch client tanpa authz di API.
- **Benar**: Fetch data di Server Component dengan pemeriksaan sesi di server, dan isolasi bagian interaktif ke komponen client kecil.

## TODO / Penyesuaian Per Project
- [ ] TODO: Sesuaikan ORM/query layer sesuai `package.json` project (Prisma, Drizzle, atau fetch ke API eksternal).
- [ ] TODO: Sesuaikan test runner project (`vitest` / `jest` / `playwright`).

## Checklist Keluaran
- [ ] Boundary Server/Client aman tanpa kebocoran env/secret.
- [ ] Validasi input dan otorisasi diterapkan di setiap mutasi.
- [ ] Lint, typecheck, test (jika ada), dan build lolos.

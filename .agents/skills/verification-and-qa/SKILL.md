---
name: verification-and-qa
description: Menjalankan verifikasi nyata sebelum tugas dinyatakan selesai: lint, static analysis, test suite, build produksi, slop-audit, dan inspeksi visual browser pada lebar 375px, 768px, dan 1280px melalui chrome-devtools-plugin. Aktifkan di akhir setiap task implementasi. JANGAN klaim lolos jika perintah atau inspeksi tidak benar-benar dijalankan.
---

# Verification and QA

## Langkah Konkret
1. **Lint & Static Analysis** (sesuai stack yang terdeteksi):
   - Laravel/PHP: `./vendor/bin/pint --test` (jika ada), `./vendor/bin/phpstan analyse` (jika ada), `php -l` pada file berubah.
   - JS/TS/Next.js: `npm run lint`, `npx tsc --noEmit`.
2. **Test Suite**:
   - Laravel: `php artisan test` atau `./vendor/bin/pest` (minimal test file relevan).
   - Node/Next.js: `npm test` atau `npx vitest run` / `npx playwright test`.
3. **Build**:
   - Frontend/Next.js: `npm run build`.
4. **Inspeksi Visual Browser (Wajib untuk Perubahan UI)** via `chrome-devtools-plugin`:
   - Buka halaman target pada viewport **375px** (mobile), **768px** (tablet), dan **1280px** (desktop).
   - Periksa console errors, network errors, horizontal overflow (`scrollWidth <= innerWidth`), kontras, dan keterbacaan komponen.
   - Jalankan `.agents/design-library/_shared/slop-audit.js` (`window.runSlopAudit(...)`) beserta pemeriksaan keyboard (`Tab`, `Esc`, `:focus-visible`) dan `prefers-reduced-motion`.
   - Simpan atau amati hasil tangkapan layar sebelum menyatakan UI selesai.
5. **Jalur Jujur**: Jika salah satu tool (Chrome, `chrome-devtools-mcp`, Lighthouse, atau `modern-web-guidance`) tidak terpasang atau server tidak bisa dijalankan, tulis status **tidak diverifikasi** beserta alasan teknisnya; jangan pernah mengklaim lolos dari pembacaan konfigurasi saja.

## Contoh Benar vs Salah
- **Salah**: "Semua test dan tampilan mobile sudah dipastikan aman" (tanpa menjalankan command atau membuka browser).
- **Benar**: "`php artisan test --filter=InvoiceTest` lolos (6 passed, 0 failed); `npm run build` sukses; inspeksi visual 375px & 1280px via Chrome DevTools menunjukkan tidak ada console error atau overflow horizontal. `phpstan` tidak diverifikasi karena belum terpasang di `composer.json`."

## Checklist Keluaran
- [ ] Perintah lint, static analysis, test, dan build dijalankan setelah edit terakhir.
- [ ] Perubahan UI diperiksa di `375px`, `768px`, dan `1280px` + `slop-audit.js`.
- [ ] Output aktual dan bagian yang tidak diverifikasi dilaporkan jujur.

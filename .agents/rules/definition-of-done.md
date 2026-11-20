# Workspace Rule: Definition of Done (DoD)

Sebuah task hanya boleh dinyatakan selesai apabila seluruh poin relevan berikut terpenuhi dan terverifikasi:

1. **Lint & Static Analysis**: Linter dan static analyzer yang terpasang di project lolos tanpa error.
2. **Test Suite**: Test relevan (unit/feature/integration) dijalankan **setelah edit terakhir** dan hasil aktualnya dilampirkan (jumlah lulus/gagal).
3. **Build**: Build produksi (jika ada proses build) berjalan sukses tanpa error.
4. **Verifikasi Visual UI & Slop Audit** (khusus perubahan frontend/UI): Halaman diperiksa lewat browser (`chrome-devtools-plugin`) pada viewport **375px** (mobile), **768px** (tablet), dan **1280px** (desktop), bebas console error dan overflow horizontal. Jalankan `.agents/design-library/_shared/slop-audit.js` pada hasil UI dan laporkan hasil aktualnya, bukan klaim. Bila browser/MCP belum tersedia di runtime, laporkan status **tidak diverifikasi**.
5. **Audit Anti-Slop**: Memenuhi seluruh poin checklist di `.agents/rules/antislop-policy.md` dan `.agents/design-library/_shared/antislop-visual.md`.
6. **Laporan Akhir Jujur & Ringkas**:
   - Daftar perubahan file.
   - Asumsi yang diambil selama pengerjaan.
   - Risiko yang tersisa.
   - Daftar hal yang **tidak diverifikasi** beserta alasan teknisnya (jika ada).

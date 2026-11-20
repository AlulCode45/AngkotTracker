---
name: accessibility-wcag
description: Memastikan kepatuhan aksesibilitas WCAG 2.2 Level AA: kontras warna, focus indicator, navigasi keyboard, semantik HTML, ARIA seperlunya, dan audit otomatis dengan axe/Lighthouse melalui chrome-devtools-plugin. Aktifkan pada semua pekerjaan UI aplikasi/dashboard dan profil gov-enterprise. JANGAN aktifkan untuk tugas backend murni.
---

# Accessibility WCAG 2.2 AA

## Langkah Konkret
1. **Semantik HTML Terlebih Dahulu**:
   - Gunakan `<button>` untuk aksi, `<a href>` untuk navigasi, `<main>`, `<nav>`, `<header>`, `<footer>`, dan hierarki heading berurutan (`<h1>` → `<h2>` → `<h3>`).
   - Pakai ARIA hanya jika semantik HTML bawaan tidak mencukupi (misal `aria-expanded`, `aria-controls`, `aria-live="polite"` untuk toast/notifikasi).
2. **Kontras & Target Sentuh (WCAG 2.2 AA)**:
   - Kontras teks normal minimal **4.5:1**, teks besar (>=18pt atau >=14pt bold) dan elemen UI/border fokus minimal **3:1**.
   - Target sentuh minimum `24x24px` (WCAG 2.2) dan dianjurkan `44x44px` pada mobile.
3. **Fokus & Keyboard**:
   - Dilarang `outline: none` tanpa pengganti `:focus-visible` yang kontras.
   - Pastikan elemen fokus tidak tertutup header sticky (`scroll-margin-top`).
4. **Verifikasi via `chrome-devtools-plugin`**:
   - Jalankan audit aksesibilitas (a11y snapshot / Lighthouse / axe) pada halaman hasil render dan perbaiki seluruh temuan kritikal/serius.

## Contoh Benar vs Salah
- **Salah**: `<div onclick="submitForm()" class="cursor-pointer text-gray-400">Kirim</div>` (tidak bisa di-Tab, kontras rendah).
- **Benar**: `<button type="submit" class="focus-visible:ring-2 focus-visible:ring-offset-2 ...">Kirim</button>`.

## Checklist Keluaran
- [ ] Semua elemen interaktif dapat diakses lewat keyboard dan punya `:focus-visible` jelas.
- [ ] Kontras warna memenuhi WCAG 2.2 AA (4.5:1 teks normal, 3:1 teks besar/komponen).
- [ ] Hasil audit a11y via browser/DevTools dilampirkan (atau dicatat tidak diverifikasi beserta alasannya).

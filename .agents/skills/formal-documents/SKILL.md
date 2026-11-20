---
name: formal-documents
description: Menyusun dokumen formal proyek (SRS/BRD, proposal teknis, manual pengguna, laporan pengujian/audit) dengan struktur bernomor dan Bahasa Indonesia baku (EYD V). Aktifkan saat diminta membuat deliverable dokumentasi formal atau pada project gov-enterprise. JANGAN aktifkan untuk catatan singkat internal atau project startup-creative yang tidak memintanya.
---

# Formal Documents

## Langkah Konkret
1. **Pilih Template Dokumen yang Sesuai**:
   - **SRS/BRD**: 1. Pendahuluan (Tujuan, Ruang Lingkup, Definisi) → 2. Deskripsi Umum Sistem → 3. Kebutuhan Fungsional (`FR-01`, `FR-02`, ...) → 4. Kebutuhan Non-Fungsional (`NFR-01`: Keamanan, Aksesibilitas, Kinerja) → 5. Lampiran / Matriks Keterlacakan.
   - **Proposal Teknis**: 1. Latar Belakang & Masalah → 2. Tujuan & Sasaran → 3. Metodologi & Arsitektur → 4. Jadwal & Deliverable → 5. Risiko & Mitigasi.
   - **Manual Pengguna**: 1. Gambaran Umum & Hak Akses → 2. Panduan Awal (Masuk/Keluar) → 3. Prosedur Operasional per Fitur (Langkah bernomor + hasil yang diharapkan) → 4. Penanganan Kendala Umum.
   - **Laporan Pengujian / Audit**: 1. Ringkasan Eksekutif → 2. Cakupan & Lingkungan Uji → 3. Hasil Pengujian (Lulus/Gagal/Tidak Diverifikasi) → 4. Temuan & Rekomendasi.
2. **Penomoran & Bahasa**:
   - Gunakan penomoran hierarkis konsisten (`1.`, `1.1.`, `1.1.1.`).
   - Gunakan Bahasa Indonesia baku formal (EYD V), kalimat aktif/pasif yang jelas, tanpa kata klise AI (`antislop-policy.md`).
3. **Kejujuran Bukti**:
   - Cantumkan hanya fitur, metrik, dan hasil uji yang benar-benar ada/dijalankan; tandai bagian yang belum diuji sebagai `Belum Diverifikasi`.

## Contoh Benar vs Salah
- **Salah**: "Sistem ini revolusioner dan mampu meningkatkan efisiensi 10x lipat dengan teknologi mutakhir."
- **Benar**: "FR-03: Sistem wajib mencatat waktu, identitas pengguna, dan alamat IP setiap kali operator mengubah status berkas permohonan."

## Checklist Keluaran
- [ ] Struktur bab dan penomoran konsisten.
- [ ] Bahasa Indonesia baku formal bebas klise AI.
- [ ] Semua klaim teknis dan hasil uji berbasis fakta terverifikasi.

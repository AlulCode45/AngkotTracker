import {
  RolePreviewWorkspace,
  ThemeToggle,
} from "@/components/LandingInteractive";

const CORRIDORS = [
  {
    code: "T01",
    name: "Terminal Induk – SMAN 1",
    schools: "SMAN 1, SMKN 2, SMPN 1",
    hours: "05.30 – 17.30 WIB",
    fleet: "6 armada",
  },
  {
    code: "T02",
    name: "Perumnas – SDN 01",
    schools: "SDN 01, SDN 04, SMPN 5",
    hours: "05.30 – 16.30 WIB",
    fleet: "4 armada",
  },
  {
    code: "T03",
    name: "Pasar Baru – SMPN 3",
    schools: "SMPN 3, MTsN 1, SDN 08",
    hours: "05.45 – 17.00 WIB",
    fleet: "5 armada",
  },
  {
    code: "T05",
    name: "Stasiun – SMAN 2",
    schools: "SMAN 2, MAN 1, SMPN 2",
    hours: "05.30 – 17.30 WIB",
    fleet: "3 armada",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      {/* Masthead */}
      <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] sticky top-0 z-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-7 py-3 flex items-center justify-between gap-4">
          <a
            href="#beranda"
            className="flex items-center gap-3 text-[var(--text-primary)] no-underline"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
              className="shrink-0 text-[var(--accent-primary)]"
            >
              <rect
                x="3"
                y="6"
                width="26"
                height="16"
                rx="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M3 13h26M11 6v7M21 6v7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="9.5" cy="23.5" r="2.5" stroke="currentColor" strokeWidth="2" />
              <circle cx="22.5" cy="23.5" r="2.5" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div>
              <div
                className="font-bold text-base leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                AngkotPelajar
              </div>
              <div className="text-xs text-[var(--text-muted)]">
                Radar Angkot &amp; Titik Tunggu Pelajar
              </div>
            </div>
          </a>

          <nav aria-label="Navigasi utama" className="flex items-center gap-4 sm:gap-6">
            <a
              href="#radar"
              className="hidden md:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
            >
              Radar Live
            </a>
            <a
              href="#trayek"
              className="hidden md:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
            >
              Trayek Sekolah
            </a>
            <a
              href="#cara-kerja"
              className="hidden md:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
            >
              Cara Kerja
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="beranda" className="flex-1">
        {/* Hero Band (Sunlit Wheat #F2EDE4) */}
        <section className="bg-[var(--bg-warm)] border-b border-[var(--border-subtle)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h1 className="text-[clamp(2.125rem,3.6vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em] text-[var(--text-primary)]">
                  Tahu Posisi Angkot Terdekat, Tepat Waktu ke Sekolah
                </h1>
                <p className="text-[17px] leading-[1.6] text-[var(--text-secondary)] max-w-[58ch]">
                  Pelajar SD–SMA dapat memantau seluruh angkot aktif maupun yang paling dekat dari lokasi mereka. Supir angkot pun melihat cluster titik tunggu penumpang agar penjemputan lebih efisien.
                </p>
              </div>

              {/* Aksi Utama & Sekunder */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#radar"
                  className="min-h-[44px] px-5 py-2.5 inline-flex items-center justify-center rounded-[6px] font-medium text-sm bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-on-primary)] transition-colors no-underline"
                >
                  Lihat Simulasi Radar
                </a>
                <a
                  href="#trayek"
                  className="min-h-[44px] px-5 py-2.5 inline-flex items-center justify-center rounded-[6px] font-medium text-sm border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-canvas)] transition-colors no-underline"
                >
                  Daftar Trayek Sekolah
                </a>
              </div>

              {/* Ringkasan Metrik Operasional */}
              <div className="pt-5 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4 max-w-[540px]">
                <div>
                  <div
                    className="text-2xl font-bold text-[var(--accent-primary)] tabular-nums-data"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    18
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Armada siap pantau
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl font-bold text-[var(--text-primary)] tabular-nums-data"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    5–10 dtk
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Pembaruan GPS supir
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl font-bold text-[var(--accent-secondary)] tabular-nums-data"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Zero-PII
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Cluster radius 200 m
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu Ringkasan Dua Peran (Pelajar & Supir) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold text-[var(--accent-primary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    UNTUK PELAJAR SD–SMA
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    Gratis &amp; Tanpa Login Rumit
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[var(--text-primary)]">
                  Tidak Perlu Menebak Kapan Angkot Lewat
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  Urutkan angkot berdasarkan jarak terdekat, lihat estimasi tiba, dan kirim sinyal tunggu anonim saat berdiri di halte.
                </p>
              </div>

              <div className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold text-[var(--accent-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    UNTUK SUPIR ANGKOT
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    Hemat BBM &amp; Tepat Sasaran
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[var(--text-primary)]">
                  Lihat Titik Ramai Penumpang Menunggu
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  Nyalakan GPS sekali ketuk dan pantau cluster kepadatan pelajar yang sedang menunggu di sekitar rute Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Radar & Cluster Preview */}
        <section id="radar" className="py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 space-y-6">
            <div className="max-w-[68ch] space-y-1.5">
              <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.22] tracking-[-0.015em] text-[var(--text-primary)]">
                Simulasi Peta Radar &amp; Cluster Penumpang
              </h2>
              <p className="text-base text-[var(--text-secondary)]">
                Uji langsung perbedaan tampilan antara <strong>Mode Pelajar</strong> (cari angkot terdekat) dan <strong>Mode Supir</strong> (siar GPS &amp; lihat cluster menunggu).
              </p>
            </div>

            <RolePreviewWorkspace />
          </div>
        </section>

        {/* Daftar Trayek Sekolah */}
        <section
          id="trayek"
          className="bg-[var(--bg-warm)] border-y border-[var(--border-subtle)] py-12 sm:py-16"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 space-y-6">
            <div className="max-w-[64ch] space-y-1.5">
              <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.22] tracking-[-0.015em] text-[var(--text-primary)]">
                Trayek Angkutan Pelajar Terdaftar
              </h2>
              <p className="text-base text-[var(--text-secondary)]">
                Jalur utama yang menghubungkan kawasan permukiman dengan sekolah SD, SMP, dan SMA.
              </p>
            </div>

            <div className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                    <th className="py-3.5 px-5 font-medium">Kode</th>
                    <th className="py-3.5 px-5 font-medium">Koridor Trayek</th>
                    <th className="py-3.5 px-5 font-medium">Sekolah Terlewati</th>
                    <th className="py-3.5 px-5 font-medium">Jam Layanan</th>
                    <th className="py-3.5 px-5 font-medium text-right">Armada</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)] text-sm">
                  {CORRIDORS.map((c) => (
                    <tr key={c.code}>
                      <td
                        className="py-3.5 px-5 font-bold text-[var(--accent-primary)] tabular-nums-data"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {c.code}
                      </td>
                      <td className="py-3.5 px-5 font-bold text-[var(--text-primary)]">
                        {c.name}
                      </td>
                      <td className="py-3.5 px-5 text-[var(--text-secondary)]">
                        {c.schools}
                      </td>
                      <td className="py-3.5 px-5 text-[var(--text-secondary)] tabular-nums-data">
                        {c.hours}
                      </td>
                      <td className="py-3.5 px-5 text-right font-medium text-[var(--text-primary)] tabular-nums-data">
                        {c.fleet}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3-Step Cara Kerja & Privasi */}
        <section id="cara-kerja" className="py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 space-y-8">
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.22] tracking-[-0.015em] text-[var(--text-primary)]">
              Alur Kerja &amp; Jaminan Privasi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[var(--border-subtle)] pt-8">
              <div className="space-y-2">
                <div
                  className="text-sm font-bold text-[var(--accent-primary)] tabular-nums-data"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  01 · SUPIR ANGKOT
                </div>
                <h3 className="text-[19px] font-bold text-[var(--text-primary)]">
                  Siaran Lokasi Real-Time
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Supir cukup menekan tombol Mulai Beroperasi dari ponsel. Posisi kendaraan dikirim berkala dan berhenti otomatis saat supir selesai menarik.
                </p>
              </div>

              <div className="space-y-2">
                <div
                  className="text-sm font-bold text-[var(--accent-primary)] tabular-nums-data"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  02 · PELAJAR SD–SMA
                </div>
                <h3 className="text-[19px] font-bold text-[var(--text-primary)]">
                  Daftar Lengkap &amp; Terdekat
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Pelajar melihat semua angkot yang aktif atau mengurutkan berdasarkan jarak terdekat agar dapat bersiap sebelum angkot tiba di halte.
                </p>
              </div>

              <div className="space-y-2">
                <div
                  className="text-sm font-bold text-[var(--accent-secondary)] tabular-nums-data"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  03 · CLUSTER ZERO-PII
                </div>
                <h3 className="text-[19px] font-bold text-[var(--text-primary)]">
                  Agregasi Penumpang Menunggu
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Titik tunggu pelajar hanya diolah menjadi angka jumlah per radius 200 m untuk supir, melindungi privasi anak sesuai UU PDP No. 27/2022.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-warm)] py-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[var(--text-muted)]">
          <div>
            AngkotPelajar · Layanan Pelacakan Angkutan Pelajar Daerah (Next.js + Laravel SOLID)
          </div>
          <div>
            Patuh UU PDP (Zero-PII Cluster) · WCAG 2.2 AA · Font Self-Hosted
          </div>
        </div>
      </footer>
    </div>
  );
}

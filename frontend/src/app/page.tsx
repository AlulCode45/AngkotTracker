import {
  RolePreviewWorkspace,
  ThemeToggle,
} from "@/components/LandingInteractive";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      {/* Masthead */}
      <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-7 py-3.5 flex items-center justify-between gap-4">
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
                Pelacakan Armada &amp; Titik Tunggu
              </div>
            </div>
          </a>

          <nav aria-label="Navigasi utama" className="flex items-center gap-4 sm:gap-6">
            <a
              href="#pratinjau"
              className="hidden sm:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
            >
              Pratinjau Radar
            </a>
            <a
              href="#cara-kerja"
              className="hidden sm:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
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
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-[clamp(2.125rem,3.6vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em] text-[var(--text-primary)]">
                Pantau Angkot Terdekat &amp; Titik Tunggu Pelajar
              </h1>
              <p className="text-[17px] leading-[1.6] text-[var(--text-secondary)] max-w-[58ch]">
                Layanan pelacakan angkutan umum daerah agar pelajar SD–SMA langsung mengetahui posisi angkot terdekat, dan supir angkot dapat melihat cluster lokasi penumpang yang sedang menunggu.
              </p>

              {/* Ringkasan Angka (Zero Boxitis - hanya garis pembatas tipis) */}
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4 max-w-[520px]">
                <div>
                  <div
                    className="text-2xl font-bold text-[var(--accent-primary)] tabular-nums-data"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    18
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Armada aktif (simulasi)
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl font-bold text-[var(--text-primary)] tabular-nums-data"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    6
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Trayek sekolah
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl font-bold text-[var(--accent-secondary)] tabular-nums-data"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    200 m
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Radius cluster anonim
                  </div>
                </div>
              </div>
            </div>

            {/* Ilustrasi Sistem Garis 2px (Orisinal SVG) */}
            <div className="lg:col-span-5">
              <div className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
                <svg
                  viewBox="0 0 360 220"
                  fill="none"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Ilustrasi alur pelacakan angkot oleh supir, pencarian angkot terdekat oleh pelajar, dan cluster titik tunggu"
                >
                  {/* Jalur Rute */}
                  <path
                    d="M36 156 C 100 156, 120 68, 185 68 C 250 68, 260 144, 324 144"
                    stroke="var(--border-strong)"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                  />
                  {/* Titik Angkot (Teal) */}
                  <rect
                    x="22"
                    y="128"
                    width="54"
                    height="36"
                    rx="6"
                    fill="var(--bg-warm)"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 142h54"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                  />
                  <circle cx="34" cy="166" r="5" fill="var(--bg-surface)" stroke="var(--accent-primary)" strokeWidth="2" />
                  <circle cx="64" cy="166" r="5" fill="var(--bg-surface)" stroke="var(--accent-primary)" strokeWidth="2" />
                  <text
                    x="49"
                    y="192"
                    textAnchor="middle"
                    fill="var(--text-primary)"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                  >
                    GPS Supir
                  </text>

                  {/* Titik Cluster Penumpang (Terracotta) */}
                  <circle
                    cx="185"
                    cy="68"
                    r="28"
                    fill="var(--status-warning-bg)"
                    stroke="var(--accent-secondary)"
                    strokeWidth="2"
                  />
                  <circle cx="177" cy="64" r="4" stroke="var(--accent-secondary)" strokeWidth="2" />
                  <circle cx="193" cy="64" r="4" stroke="var(--accent-secondary)" strokeWidth="2" />
                  <path
                    d="M170 78c0-4 3-6 7-6s7 2 7 6M186 78c0-4 3-6 7-6s7 2 7 6"
                    stroke="var(--accent-secondary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <text
                    x="185"
                    y="114"
                    textAnchor="middle"
                    fill="var(--text-primary)"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                  >
                    Cluster Penumpang
                  </text>

                  {/* Titik Pelajar (Teal) */}
                  <circle
                    cx="320"
                    cy="144"
                    r="20"
                    fill="var(--bg-warm)"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                  />
                  <path
                    d="M320 134a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 10v10"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <text
                    x="320"
                    y="184"
                    textAnchor="middle"
                    fill="var(--text-primary)"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                  >
                    Pelajar Terdekat
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Role & Preview Section */}
        <section id="pratinjau" className="py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 space-y-6">
            <div className="max-w-[64ch] space-y-1.5">
              <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.22] tracking-[-0.015em] text-[var(--text-primary)]">
                Pilih Peran untuk Melihat Alur Kerja
              </h2>
              <p className="text-base text-[var(--text-secondary)]">
                Coba simulasi antarmuka Pelajar dan Supir Angkot di bawah ini sebelum kita sambungkan ke API Laravel.
              </p>
            </div>

            <RolePreviewWorkspace />
          </div>
        </section>

        {/* 3-Step Cara Kerja */}
        <section
          id="cara-kerja"
          className="bg-[var(--bg-warm)] border-t border-[var(--border-subtle)] py-12 sm:py-16"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 space-y-8">
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.22] tracking-[-0.015em] text-[var(--text-primary)]">
              Bagaimana Ekosistem Pelacakan Bekerja
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
                  Aplikasi Membaca Lokasi Angkot
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Supir menekan satu tombol untuk mulai beroperasi. Aplikasi membaca GPS kendaraan secara berkala dan memperbarui posisi trayek.
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
                  Cek Semua Angkot atau Terdekat
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Pelajar melihat seluruh angkot yang aktif maupun yang paling dekat dengan posisinya, lengkap dengan jarak dan waktu pembaruan terakhir.
                </p>
              </div>

              <div className="space-y-2">
                <div
                  className="text-sm font-bold text-[var(--accent-secondary)] tabular-nums-data"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  03 · CLUSTER ANONIM
                </div>
                <h3 className="text-[19px] font-bold text-[var(--text-primary)]">
                  Supir Melihat Titik Ramai Penumpang
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Sinyal tunggu pelajar digabungkan menjadi cluster radius 200 m sehingga supir tahu titik ramai tanpa melihat lokasi individu atau identitas pelajar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[var(--text-muted)]">
          <div>
            AngkotPelajar · Pratinjau Landing Page (Next.js + Laravel SOLID)
          </div>
          <div>
            Patuh UU PDP (Zero-PII Cluster) · WCAG 2.2 AA · Font Self-Hosted
          </div>
        </div>
      </footer>
    </div>
  );
}

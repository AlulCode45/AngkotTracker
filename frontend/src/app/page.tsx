import Link from "next/link";
import { ThemeToggle } from "@/components/LandingInteractive";

const CORRIDORS = [
  {
    code: "T01",
    name: "Terminal Induk – SMAN 1",
    schools: "SMAN 1, SMKN 2, SMPN 1",
    hours: "05.30 – 17.30 WIB",
  },
  {
    code: "T02",
    name: "Perumnas – SDN 01",
    schools: "SDN 01, SDN 04, SMPN 5",
    hours: "05.30 – 16.30 WIB",
  },
  {
    code: "T03",
    name: "Pasar Baru – SMPN 3",
    schools: "SMPN 3, MTsN 1, SDN 08",
    hours: "05.45 – 17.00 WIB",
  },
  {
    code: "T05",
    name: "Stasiun – SMAN 2",
    schools: "SMAN 2, MAN 1, SMPN 2",
    hours: "05.30 – 17.30 WIB",
  },
];

const FAQS = [
  {
    q: "Apakah titik lokasi individu pelajar terlihat oleh supir angkot?",
    a: "Tidak. Sistem hanya menggabungkan sinyal tunggu menjadi cluster radius 200 meter (misalnya jumlah estimasi penumpang per titik halte/simpang), sehingga identitas dan koordinat individu pelajar tetap terlindungi sesuai UU PDP.",
  },
  {
    q: "Bagaimana cara supir angkot membagikan lokasi kendaraannya?",
    a: "Supir cukup masuk ke Dashboard Supir melalui ponsel, memilih armada dan trayeknya, lalu menekan tombol Mulai Beroperasi. GPS hanya aktif selama sesi beroperasi berlangsung.",
  },
  {
    q: "Di mana pelajar dan supir melakukan pelacakan secara langsung?",
    a: "Seluruh fungsi pelacakan angkot terdekat, sinyal tunggu, siaran GPS supir, dan peta cluster tersedia terpusat di halaman Dashboard sesuai peran masing-masing.",
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
                Sistem Informasi Pelacakan Angkutan Pelajar
              </div>
            </div>
          </a>

          <nav aria-label="Navigasi utama" className="flex items-center gap-4 sm:gap-6">
            <a
              href="#fitur"
              className="hidden md:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
            >
              Fitur Utama
            </a>
            <a
              href="#cara-kerja"
              className="hidden md:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
            >
              Cara Kerja
            </a>
            <a
              href="#trayek"
              className="hidden md:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
            >
              Trayek
            </a>
            <a
              href="#faq"
              className="hidden md:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
            >
              FAQ
            </a>
            <Link
              href="/login"
              className="min-h-[44px] px-4 py-2 inline-flex items-center justify-center rounded-[6px] text-sm font-medium bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-on-primary)] transition-colors no-underline"
            >
              Masuk
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="beranda" className="flex-1">
        {/* Hero Band (Sunlit Wheat #F2EDE4) */}
        <section className="bg-[var(--bg-warm)] border-b border-[var(--border-subtle)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h1 className="text-[clamp(2.25rem,3.6vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em] text-[var(--text-primary)]">
                  Angkutan Pelajar Lebih Terpantau, Lebih Tepat Waktu
                </h1>
                <p className="text-[17px] leading-[1.6] text-[var(--text-secondary)] max-w-[56ch]">
                  Platform pelacakan angkutan umum daerah yang menghubungkan pelajar SD–SMA dengan posisi angkot terdekat, sekaligus membantu supir melihat cluster lokasi penumpang yang sedang menunggu.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/login"
                  className="min-h-[44px] px-5 py-2.5 inline-flex items-center justify-center rounded-[6px] font-medium text-sm bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-on-primary)] transition-colors no-underline"
                >
                  Masuk ke Dashboard
                </Link>
                <a
                  href="#cara-kerja"
                  className="min-h-[44px] px-5 py-2.5 inline-flex items-center justify-center rounded-[6px] font-medium text-sm border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-canvas)] transition-colors no-underline"
                >
                  Pelajari Cara Kerja
                </a>
              </div>

              <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-6 max-w-[520px]">
                <div>
                  <div
                    className="text-xl font-bold text-[var(--accent-primary)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    SD – SMA
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Cakupan pelajar terlayani
                  </div>
                </div>
                <div>
                  <div
                    className="text-xl font-bold text-[var(--text-primary)] tabular-nums-data"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Real-Time
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Siaran GPS armada aktif
                  </div>
                </div>
                <div>
                  <div
                    className="text-xl font-bold text-[var(--accent-secondary)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Zero-PII
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Cluster tunggu anonim
                  </div>
                </div>
              </div>
            </div>

            {/* Ilustrasi Arsitektur Layanan (Editorial 2px Line-Art) */}
            <div className="lg:col-span-5">
              <div className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 space-y-4">
                <svg
                  viewBox="0 0 360 220"
                  fill="none"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Diagram alur AngkotPelajar antara aplikasi supir, radar pelajar, dan cluster titik tunggu"
                >
                  <path
                    d="M42 152 C 110 152, 125 68, 180 68 C 235 68, 250 152, 318 152"
                    stroke="var(--border-strong)"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                  />

                  {/* Node Supir */}
                  <rect
                    x="22"
                    y="124"
                    width="56"
                    height="36"
                    rx="6"
                    fill="var(--bg-warm)"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                  />
                  <path d="M22 138h56" stroke="var(--accent-primary)" strokeWidth="2" />
                  <circle cx="35" cy="162" r="5" fill="var(--bg-surface)" stroke="var(--accent-primary)" strokeWidth="2" />
                  <circle cx="65" cy="162" r="5" fill="var(--bg-surface)" stroke="var(--accent-primary)" strokeWidth="2" />
                  <text
                    x="50"
                    y="188"
                    textAnchor="middle"
                    fill="var(--text-primary)"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                  >
                    Aplikasi Supir
                  </text>

                  {/* Node Cluster */}
                  <circle
                    cx="180"
                    cy="68"
                    r="28"
                    fill="var(--status-warning-bg)"
                    stroke="var(--accent-secondary)"
                    strokeWidth="2"
                  />
                  <circle cx="172" cy="64" r="4" stroke="var(--accent-secondary)" strokeWidth="2" />
                  <circle cx="188" cy="64" r="4" stroke="var(--accent-secondary)" strokeWidth="2" />
                  <path
                    d="M165 78c0-4 3-6 7-6s7 2 7 6M181 78c0-4 3-6 7-6s7 2 7 6"
                    stroke="var(--accent-secondary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <text
                    x="180"
                    y="114"
                    textAnchor="middle"
                    fill="var(--text-primary)"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                  >
                    Cluster Penumpang
                  </text>

                  {/* Node Pelajar */}
                  <circle
                    cx="312"
                    cy="144"
                    r="22"
                    fill="var(--bg-warm)"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                  />
                  <path
                    d="M312 134a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 10v10"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <text
                    x="312"
                    y="188"
                    textAnchor="middle"
                    fill="var(--text-primary)"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                  >
                    Pelajar SD–SMA
                  </text>
                </svg>

                <p className="text-xs text-[var(--text-muted)] border-t border-[var(--border-subtle)] pt-3">
                  Seluruh fitur pelacakan langsung dan peta cluster beroperasi di dalam Dashboard setelah pengguna masuk sesuai perannya.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fitur Utama: Dua Peran */}
        <section id="fitur" className="py-14 sm:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 space-y-8">
            <div className="max-w-[64ch] space-y-2">
              <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.22] tracking-[-0.015em] text-[var(--text-primary)]">
                Dirancang untuk Kebutuhan Pelajar dan Supir Angkot
              </h2>
              <p className="text-base text-[var(--text-secondary)]">
                Setiap peran mendapatkan tampilan yang ringkas, mudah dibaca di layar ponsel, dan fokus pada informasi yang dibutuhkan di jalan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pelajar */}
              <article className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 space-y-4">
                <div
                  className="text-xs font-bold text-[var(--accent-primary)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  PERAN 01 · PELAJAR &amp; ORANG TUA
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Pantau Posisi &amp; Cari Angkot Terdekat
                </h3>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-4">
                  <li>
                    <strong className="text-[var(--text-primary)]">Daftar Angkot Beroperasi:</strong>{" "}
                    Lihat seluruh armada aktif lengkap dengan kode trayek, koridor, dan waktu pembaruan terakhir.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Urutan Jarak Terdekat:</strong>{" "}
                    Temukan angkot yang paling dekat dari lokasi Anda saat ini sehingga tidak perlu menunggu terlalu lama.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Sinyal Tunggu Anonim:</strong>{" "}
                    Tandai bahwa Anda sedang menunggu agar supir mengetahui adanya penumpang di sekitar titik tersebut.
                  </li>
                </ul>
              </article>

              {/* Supir */}
              <article className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 space-y-4">
                <div
                  className="text-xs font-bold text-[var(--accent-secondary)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  PERAN 02 · SUPIR ANGKOT
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Siar Lokasi &amp; Pantau Cluster Penumpang
                </h3>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-4">
                  <li>
                    <strong className="text-[var(--text-primary)]">Kontrol GPS Satu Ketuk:</strong>{" "}
                    Aplikasi membaca dan menyiarkan posisi kendaraan secara berkala selama supir menekan tombol Mulai Beroperasi.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Peta Cluster Keramaian:</strong>{" "}
                    Lihat titik-titik mana saja yang memiliki banyak pelajar menunggu agar rute penjemputan lebih efisien.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Bebas Data Pribadi Pelajar:</strong>{" "}
                    Supir hanya melihat jumlah estimasi penumpang per zona radius 200 m, menjaga privasi anak di bawah umur.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Cara Kerja 3 Langkah */}
        <section
          id="cara-kerja"
          className="bg-[var(--bg-warm)] border-y border-[var(--border-subtle)] py-14 sm:py-16"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 space-y-8">
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.22] tracking-[-0.015em] text-[var(--text-primary)]">
              Bagaimana Sistem Bekerja
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[var(--border-subtle)] pt-8">
              <div className="space-y-2">
                <div
                  className="text-sm font-bold text-[var(--accent-primary)] tabular-nums-data"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  01 · SIARAN LOKASI SUPIR
                </div>
                <h3 className="text-[19px] font-bold text-[var(--text-primary)]">
                  Armada Terbaca Otomatis
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Saat supir memulai perjalanan melalui Dashboard Supir, sistem membaca koordinat GPS kendaraan dan memperbaruinya secara berkala.
                </p>
              </div>

              <div className="space-y-2">
                <div
                  className="text-sm font-bold text-[var(--accent-primary)] tabular-nums-data"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  02 · RADAR PELAJAR
                </div>
                <h3 className="text-[19px] font-bold text-[var(--text-primary)]">
                  Cek Semua atau Terdekat
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Melalui Dashboard Pelajar, siswa dapat melihat daftar lengkap angkot yang beroperasi atau mengurutkan berdasarkan jarak terdekat.
                </p>
              </div>

              <div className="space-y-2">
                <div
                  className="text-sm font-bold text-[var(--accent-secondary)] tabular-nums-data"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  03 · CLUSTER PENUMPANG
                </div>
                <h3 className="text-[19px] font-bold text-[var(--text-primary)]">
                  Titik Ramai Terlihat Jelas
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Sinyal tunggu dari pelajar diolah di server menjadi cluster kepadatan radius 200 m agar supir tahu ke mana harus mengarahkan armada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trayek Sekolah */}
        <section id="trayek" className="py-14 sm:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 space-y-6">
            <div className="max-w-[64ch] space-y-2">
              <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.22] tracking-[-0.015em] text-[var(--text-primary)]">
                Cakupan Koridor &amp; Trayek Sekolah
              </h2>
              <p className="text-base text-[var(--text-secondary)]">
                Contoh daftar koridor angkutan umum daerah yang menghubungkan kawasan permukiman dengan sekolah SD, SMP, dan SMA.
              </p>
            </div>

            <div className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                    <th className="py-3.5 px-5 font-medium">Kode</th>
                    <th className="py-3.5 px-5 font-medium">Koridor Trayek</th>
                    <th className="py-3.5 px-5 font-medium">Sekolah Terlewati</th>
                    <th className="py-3.5 px-5 font-medium text-right">Jam Layanan</th>
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
                      <td className="py-3.5 px-5 text-right text-[var(--text-secondary)] tabular-nums-data">
                        {c.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="bg-[var(--bg-warm)] border-t border-[var(--border-subtle)] py-14 sm:py-16"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-7 space-y-8">
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.22] tracking-[-0.015em] text-[var(--text-primary)]">
              Pertanyaan Umum
            </h2>

            <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
              {FAQS.map((item) => (
                <div
                  key={item.q}
                  className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8"
                >
                  <h3 className="md:col-span-5 text-base font-bold text-[var(--text-primary)]">
                    {item.q}
                  </h3>
                  <p className="md:col-span-7 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[var(--text-muted)]">
          <div>
            AngkotPelajar · Sistem Pelacakan Angkutan Pelajar Daerah
          </div>
          <div>
            Patuh UU PDP (Zero-PII Cluster) · WCAG 2.2 AA · Font Self-Hosted
          </div>
        </div>
      </footer>
    </div>
  );
}

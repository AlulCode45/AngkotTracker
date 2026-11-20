"use client";

import { useState } from "react";

type RoleMode = "pelajar" | "supir";
type StudentFilter = "terdekat" | "semua";

interface AngkotItem {
  code: string;
  route: string;
  area: string;
  distanceMeters: number;
  updatedAgo: string;
  status: "Beroperasi" | "Menuju Halte";
}

interface ClusterItem {
  id: string;
  area: string;
  routeHint: string;
  waitingCount: number;
  distanceMeters: number;
}

const SAMPLE_ANGKOT: AngkotItem[] = [
  {
    code: "ANG-01A",
    route: "Trayek 01 · Terminal Induk – SMAN 1",
    area: "Simpang Jl. Ahmad Yani",
    distanceMeters: 280,
    updatedAgo: "8 dtk lalu",
    status: "Menuju Halte",
  },
  {
    code: "ANG-03B",
    route: "Trayek 03 · Pasar Baru – SMPN 3",
    area: "Depan Taman Kota",
    distanceMeters: 640,
    updatedAgo: "14 dtk lalu",
    status: "Beroperasi",
  },
  {
    code: "ANG-02C",
    route: "Trayek 02 · Perumnas – SDN 01",
    area: "Bundaran Balai Kota",
    distanceMeters: 1250,
    updatedAgo: "22 dtk lalu",
    status: "Beroperasi",
  },
  {
    code: "ANG-05A",
    route: "Trayek 05 · Stasiun – SMAN 2",
    area: "Jl. Diponegoro",
    distanceMeters: 1890,
    updatedAgo: "35 dtk lalu",
    status: "Beroperasi",
  },
];

const SAMPLE_CLUSTERS: ClusterItem[] = [
  {
    id: "CL-01",
    area: "Simpang SMAN 1 (Radius 200 m)",
    routeHint: "Trayek 01 & 05",
    waitingCount: 14,
    distanceMeters: 420,
  },
  {
    id: "CL-02",
    area: "Gerbang SMPN 3 (Radius 200 m)",
    routeHint: "Trayek 03",
    waitingCount: 9,
    distanceMeters: 950,
  },
  {
    id: "CL-03",
    area: "Halte SDN 01 Perumnas (Radius 200 m)",
    routeHint: "Trayek 02",
    waitingCount: 6,
    distanceMeters: 1520,
  },
];

function formatDistance(meters: number): string {
  if (meters < 1000) return `${meters} m`;
  return `${(meters / 1000).toFixed(1).replace(".", ",")} km`;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      className="min-h-[44px] px-3.5 py-2 text-sm font-medium rounded-[6px] border border-[var(--border-strong)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-warm)] transition-colors cursor-pointer"
    >
      {dark ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}

export function RolePreviewWorkspace() {
  const [role, setRole] = useState<RoleMode>("pelajar");
  const [studentFilter, setStudentFilter] = useState<StudentFilter>("terdekat");
  const [waitingActive, setWaitingActive] = useState(false);
  const [driverBroadcasting, setDriverBroadcasting] = useState(false);

  const displayedAngkot =
    studentFilter === "terdekat"
      ? [...SAMPLE_ANGKOT].sort((a, b) => a.distanceMeters - b.distanceMeters)
      : SAMPLE_ANGKOT;

  return (
    <div className="space-y-8">
      {/* Pemilih Peran Utama (Task-First Selector) */}
      <div
        role="tablist"
        aria-label="Pilih peran pengguna"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <button
          type="button"
          role="tab"
          aria-selected={role === "pelajar"}
          onClick={() => setRole("pelajar")}
          className={`min-h-[64px] text-left px-5 py-4 rounded-[10px] border transition-colors cursor-pointer flex items-start gap-3.5 ${
            role === "pelajar"
              ? "border-2 border-[var(--accent-primary)] bg-[var(--bg-surface)]"
              : "border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)]"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 mt-0.5 text-[var(--accent-primary)]"
            aria-hidden="true"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8Z" />
          </svg>
          <div>
            <div className="font-bold text-base text-[var(--text-primary)]">
              Saya Pelajar (Cari Angkot)
            </div>
            <div className="text-sm text-[var(--text-secondary)]">
              Lihat daftar semua angkot aktif &amp; jarak terdekat dari lokasi Anda
            </div>
          </div>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={role === "supir"}
          onClick={() => setRole("supir")}
          className={`min-h-[64px] text-left px-5 py-4 rounded-[10px] border transition-colors cursor-pointer flex items-start gap-3.5 ${
            role === "supir"
              ? "border-2 border-[var(--accent-primary)] bg-[var(--bg-surface)]"
              : "border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)]"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 mt-0.5 text-[var(--accent-secondary)]"
            aria-hidden="true"
          >
            <rect x="3" y="6" width="18" height="11" rx="2" />
            <path d="M3 11h18" />
            <circle cx="7.5" cy="17" r="2" />
            <circle cx="16.5" cy="17" r="2" />
          </svg>
          <div>
            <div className="font-bold text-base text-[var(--text-primary)]">
              Saya Supir Angkot
            </div>
            <div className="text-sm text-[var(--text-secondary)]">
              Siarkan GPS kendaraan &amp; pantau cluster penumpang menunggu
            </div>
          </div>
        </button>
      </div>

      {/* Panel Pratinjau Interaktif */}
      {role === "pelajar" ? (
        <section
          aria-label="Pratinjau radar angkot pelajar"
          className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                Radar Angkot Beroperasi
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                Simulasi pratinjau tampilan pelajar · diurutkan dari titik terdekat
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div
                role="group"
                aria-label="Filter tampilan angkot"
                className="inline-flex rounded-[6px] border border-[var(--border-subtle)] p-0.5 bg-[var(--bg-canvas)]"
              >
                <button
                  type="button"
                  onClick={() => setStudentFilter("terdekat")}
                  className={`min-h-[40px] px-3.5 text-sm font-medium rounded-[6px] cursor-pointer transition-colors ${
                    studentFilter === "terdekat"
                      ? "bg-[var(--accent-primary)] text-[var(--accent-on-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Terdekat
                </button>
                <button
                  type="button"
                  onClick={() => setStudentFilter("semua")}
                  className={`min-h-[40px] px-3.5 text-sm font-medium rounded-[6px] cursor-pointer transition-colors ${
                    studentFilter === "semua"
                      ? "bg-[var(--accent-primary)] text-[var(--accent-on-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Semua (4)
                </button>
              </div>
            </div>
          </div>

          <div className="divide-y divide-[var(--border-subtle)]">
            {displayedAngkot.map((item) => (
              <div
                key={item.code}
                className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-[6px] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.code}
                    </span>
                    <span className="font-bold text-[var(--text-primary)]">
                      {item.route}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Posisi terakhir: {item.area} · Diperbarui {item.updatedAgo}
                  </p>
                </div>

                <div className="flex items-center gap-4 sm:text-right">
                  <div>
                    <div className="text-base font-bold text-[var(--accent-primary)] tabular-nums-data">
                      {formatDistance(item.distanceMeters)}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {item.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-5 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-warm)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-sm text-[var(--text-secondary)]">
              {waitingActive ? (
                <span className="font-medium text-[var(--status-success-fg)] bg-[var(--status-success-bg)] px-2.5 py-1 rounded-[6px] inline-block">
                  Sinyal tunggu aktif (anonim · berlaku 15 menit)
                </span>
              ) : (
                <span>
                  Sedang menunggu di halte/pinggir jalan? Kirim sinyal anonim agar supir melihat keramaian.
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => setWaitingActive((v) => !v)}
              className="min-h-[44px] px-5 py-2.5 rounded-[6px] font-medium text-sm bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-on-primary)] transition-colors cursor-pointer shrink-0"
            >
              {waitingActive ? "Batalkan Sinyal Tunggu" : "Saya Sedang Menunggu Angkot"}
            </button>
          </div>
        </section>
      ) : (
        <section
          aria-label="Pratinjau panel supir angkot"
          className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                Panel Supir: Siaran GPS &amp; Cluster Penumpang
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                {driverBroadcasting
                  ? "GPS aktif menyiarkan posisi ANG-01A tiap 5 detik"
                  : "Siapkan GPS perangkat sebelum memulai trayek"}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setDriverBroadcasting((v) => !v)}
              className="min-h-[44px] px-5 py-2.5 rounded-[6px] font-medium text-sm bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-on-primary)] transition-colors cursor-pointer shrink-0"
            >
              {driverBroadcasting ? "Berhenti Beroperasi" : "Mulai Beroperasi"}
            </button>
          </div>

          <div className="divide-y divide-[var(--border-subtle)]">
            {SAMPLE_CLUSTERS.map((cluster) => (
              <div
                key={cluster.id}
                className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-[var(--text-primary)]">
                    {cluster.area}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Rute dominan: {cluster.routeHint} · Jarak dari angkot:{" "}
                    <span className="tabular-nums-data font-medium">
                      {formatDistance(cluster.distanceMeters)}
                    </span>
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-block px-3 py-1 rounded-[6px] text-sm font-bold bg-[var(--status-warning-bg)] text-[var(--status-warning-fg)] tabular-nums-data">
                    ~{cluster.waitingCount} penumpang menunggu
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-5 py-3.5 border-t border-[var(--border-subtle)] bg-[var(--bg-warm)] text-xs text-[var(--text-muted)]">
            Privasi UU PDP: Supir hanya melihat agregat jumlah penumpang per cluster radius 200 m, tanpa titik GPS atau identitas individu pelajar.
          </div>
        </section>
      )}
    </div>
  );
}

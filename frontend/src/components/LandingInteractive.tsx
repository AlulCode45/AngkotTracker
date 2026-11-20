"use client";

import { useState } from "react";

type RoleMode = "pelajar" | "supir";
type StudentFilter = "terdekat" | "semua";

interface AngkotItem {
  code: string;
  routeCode: string;
  routeName: string;
  area: string;
  distanceMeters: number;
  etaMinutes: number;
  updatedAgo: string;
  status: "Menuju Halte" | "Beroperasi";
  mapX: number;
  mapY: number;
}

interface ClusterItem {
  id: string;
  area: string;
  schoolLandmark: string;
  routeHint: string;
  waitingCount: number;
  distanceMeters: number;
  mapX: number;
  mapY: number;
  radiusPx: number;
}

const SAMPLE_ANGKOT: AngkotItem[] = [
  {
    code: "ANG-01A",
    routeCode: "T01",
    routeName: "Terminal Induk – SMAN 1",
    area: "Simpang Jl. Ahmad Yani",
    distanceMeters: 280,
    etaMinutes: 2,
    updatedAgo: "8 dtk lalu",
    status: "Menuju Halte",
    mapX: 165,
    mapY: 132,
  },
  {
    code: "ANG-03B",
    routeCode: "T03",
    routeName: "Pasar Baru – SMPN 3",
    area: "Depan Taman Kota",
    distanceMeters: 640,
    etaMinutes: 4,
    updatedAgo: "14 dtk lalu",
    status: "Beroperasi",
    mapX: 285,
    mapY: 168,
  },
  {
    code: "ANG-02C",
    routeCode: "T02",
    routeName: "Perumnas – SDN 01",
    area: "Bundaran Balai Kota",
    distanceMeters: 1250,
    etaMinutes: 7,
    updatedAgo: "22 dtk lalu",
    status: "Beroperasi",
    mapX: 112,
    mapY: 224,
  },
  {
    code: "ANG-05A",
    routeCode: "T05",
    routeName: "Stasiun – SMAN 2",
    area: "Jl. Diponegoro",
    distanceMeters: 1890,
    etaMinutes: 11,
    updatedAgo: "35 dtk lalu",
    status: "Beroperasi",
    mapX: 356,
    mapY: 96,
  },
];

const SAMPLE_CLUSTERS: ClusterItem[] = [
  {
    id: "CL-01",
    area: "Simpang SMAN 1",
    schoolLandmark: "SMAN 1 & SMK Negeri 2",
    routeHint: "Trayek 01 & 05",
    waitingCount: 14,
    distanceMeters: 420,
    mapX: 255,
    mapY: 92,
    radiusPx: 30,
  },
  {
    id: "CL-02",
    area: "Gerbang SMPN 3",
    schoolLandmark: "SMPN 3 Kota",
    routeHint: "Trayek 03",
    waitingCount: 9,
    distanceMeters: 950,
    mapX: 332,
    mapY: 192,
    radiusPx: 24,
  },
  {
    id: "CL-03",
    area: "Halte SDN 01 Perumnas",
    schoolLandmark: "SDN 01 & SDN 04",
    routeHint: "Trayek 02",
    waitingCount: 6,
    distanceMeters: 1520,
    mapX: 98,
    mapY: 188,
    radiusPx: 20,
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
  const [selectedAngkot, setSelectedAngkot] = useState<string>("ANG-01A");
  const [selectedCluster, setSelectedCluster] = useState<string>("CL-01");
  const [waitingActive, setWaitingActive] = useState(false);
  const [driverBroadcasting, setDriverBroadcasting] = useState(true);

  const displayedAngkot =
    studentFilter === "terdekat"
      ? [...SAMPLE_ANGKOT].sort((a, b) => a.distanceMeters - b.distanceMeters)
      : SAMPLE_ANGKOT;

  const activeAngkotObj =
    SAMPLE_ANGKOT.find((a) => a.code === selectedAngkot) ?? SAMPLE_ANGKOT[0];
  const activeClusterObj =
    SAMPLE_CLUSTERS.find((c) => c.id === selectedCluster) ?? SAMPLE_CLUSTERS[0];

  return (
    <div className="space-y-6">
      {/* Tab Pemilih Peran */}
      <div
        role="tablist"
        aria-label="Pilih mode pratinjau"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <button
          type="button"
          role="tab"
          aria-selected={role === "pelajar"}
          onClick={() => setRole("pelajar")}
          className={`min-h-[68px] text-left px-5 py-4 rounded-[10px] border transition-colors cursor-pointer flex items-start gap-3.5 ${
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
              Mode Pelajar — Radar Angkot Terdekat
            </div>
            <div className="text-sm text-[var(--text-secondary)]">
              Lihat posisi semua angkot aktif, jarak terdekat, &amp; kirim sinyal tunggu
            </div>
          </div>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={role === "supir"}
          onClick={() => setRole("supir")}
          className={`min-h-[68px] text-left px-5 py-4 rounded-[10px] border transition-colors cursor-pointer flex items-start gap-3.5 ${
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
              Mode Supir — Siar GPS &amp; Cluster Penumpang
            </div>
            <div className="text-sm text-[var(--text-secondary)]">
              Bagikan posisi angkot &amp; pantau zona keramaian penumpang menunggu
            </div>
          </div>
        </button>
      </div>

      {/* Workspace Split: Peta Koridor Interaktif + Daftar Operasional */}
      <div className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden">
        {/* Top Control Bar */}
        <div className="px-5 py-4 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {role === "pelajar" ? (
            <>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Peta &amp; Daftar Angkot Beroperasi
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Klik titik angkot di peta atau pilih dari daftar · data simulasi
                </p>
              </div>
              <div
                role="group"
                aria-label="Filter urutan angkot"
                className="inline-flex rounded-[6px] border border-[var(--border-subtle)] p-0.5 bg-[var(--bg-canvas)] self-start sm:self-auto"
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
                  Semua ({SAMPLE_ANGKOT.length})
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Panel Supir · ANG-01A (Trayek 01)
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {driverBroadcasting
                    ? "GPS aktif · menyiarkan koordinat setiap 5 detik (akurasi ±8 m)"
                    : "GPS dijeda · tekan Mulai Beroperasi untuk tampil di radar pelajar"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDriverBroadcasting((v) => !v)}
                className="min-h-[44px] px-5 py-2.5 rounded-[6px] font-medium text-sm bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-on-primary)] transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
              >
                {driverBroadcasting ? "Berhenti Beroperasi" : "Mulai Beroperasi"}
              </button>
            </>
          )}
        </div>

        {/* Grid 2 Kolom: Peta Koridor + Daftar */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Peta SVG Interaktif */}
          <div className="lg:col-span-6 p-5 border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)] bg-[var(--bg-canvas)] flex flex-col justify-between gap-4">
            <svg
              viewBox="0 0 440 270"
              className="w-full h-auto rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-warm)]"
              role="img"
              aria-label={
                role === "pelajar"
                  ? "Peta koridor angkot menampilkan lokasi pelajar dan armada aktif"
                  : "Peta cluster penumpang menunggu untuk supir angkot"
              }
            >
              {/* Grid Jalan Kota */}
              <path
                d="M0 92H440 M0 175H440 M120 0V270 M265 0V270 M365 0V270"
                stroke="var(--border-subtle)"
                strokeWidth="1.5"
              />
              {/* Koridor Trayek Utama */}
              <path
                d="M40 224 L120 224 L165 132 L255 92 L356 96"
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.45"
              />
              <path
                d="M98 188 L195 156 L285 168 L332 192"
                fill="none"
                stroke="var(--accent-secondary)"
                strokeWidth="2.5"
                strokeDasharray="6 5"
                strokeLinecap="round"
                strokeOpacity="0.55"
              />

              {/* Landmark Sekolah */}
              <g fontSize="10" fontFamily="Inter, sans-serif" fill="var(--text-muted)">
                <text x="255" y="54" textAnchor="middle" fontWeight="600">
                  SMAN 1
                </text>
                <text x="332" y="232" textAnchor="middle" fontWeight="600">
                  SMPN 3
                </text>
                <text x="98" y="246" textAnchor="middle" fontWeight="600">
                  SDN 01
                </text>
                <text x="48" y="84" textAnchor="start" fontWeight="600">
                  Terminal Induk
                </text>
              </g>

              {role === "pelajar" ? (
                <>
                  {/* Titik Lokasi Pelajar ("Anda") */}
                  <circle
                    cx="195"
                    cy="156"
                    r="16"
                    fill="var(--accent-secondary)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx="195"
                    cy="156"
                    r="6"
                    fill="var(--accent-secondary)"
                    stroke="var(--bg-surface)"
                    strokeWidth="2"
                  />
                  <text
                    x="195"
                    y="182"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="var(--accent-secondary)"
                    fontFamily="Inter, sans-serif"
                  >
                    Lokasi Anda
                  </text>

                  {/* Marker Angkot Aktif */}
                  {SAMPLE_ANGKOT.map((bus) => {
                    const isSelected = bus.code === activeAngkotObj.code;
                    return (
                      <g
                        key={bus.code}
                        onClick={() => setSelectedAngkot(bus.code)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={bus.mapX}
                          cy={bus.mapY}
                          r={isSelected ? 18 : 13}
                          fill={
                            isSelected
                              ? "var(--accent-primary)"
                              : "var(--bg-surface)"
                          }
                          stroke="var(--accent-primary)"
                          strokeWidth="2"
                        />
                        <text
                          x={bus.mapX}
                          y={bus.mapY + 3.5}
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight="700"
                          fontFamily="JetBrains Mono, monospace"
                          fill={
                            isSelected
                              ? "var(--accent-on-primary)"
                              : "var(--text-primary)"
                          }
                        >
                          {bus.routeCode}
                        </text>
                      </g>
                    );
                  })}
                </>
              ) : (
                <>
                  {/* Posisi Angkot Supir */}
                  {driverBroadcasting && (
                    <g>
                      <circle
                        cx="165"
                        cy="132"
                        r="14"
                        fill="var(--accent-primary)"
                        stroke="var(--bg-surface)"
                        strokeWidth="2"
                      />
                      <text
                        x="165"
                        y="135.5"
                        textAnchor="middle"
                        fontSize="8.5"
                        fontWeight="700"
                        fontFamily="JetBrains Mono, monospace"
                        fill="var(--accent-on-primary)"
                      >
                        ANDA
                      </text>
                    </g>
                  )}

                  {/* Cluster Penumpang Menunggu */}
                  {SAMPLE_CLUSTERS.map((cl) => {
                    const isSelected = cl.id === activeClusterObj.id;
                    return (
                      <g
                        key={cl.id}
                        onClick={() => setSelectedCluster(cl.id)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={cl.mapX}
                          cy={cl.mapY}
                          r={cl.radiusPx}
                          fill="var(--accent-secondary)"
                          fillOpacity={isSelected ? 0.28 : 0.16}
                          stroke="var(--accent-secondary)"
                          strokeWidth={isSelected ? 2.5 : 1.5}
                        />
                        <text
                          x={cl.mapX}
                          y={cl.mapY + 4}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="700"
                          fontFamily="JetBrains Mono, monospace"
                          fill="var(--text-primary)"
                        >
                          {cl.waitingCount}
                        </text>
                      </g>
                    );
                  })}
                </>
              )}
            </svg>

            {/* Caption Peta Aktif */}
            <div className="flex items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
              {role === "pelajar" ? (
                <span>
                  Terpilih:{" "}
                  <strong className="text-[var(--text-primary)]">
                    {activeAngkotObj.code} ({activeAngkotObj.routeName})
                  </strong>{" "}
                  · estimasi {activeAngkotObj.etaMinutes} menit
                </span>
              ) : (
                <span>
                  Cluster terpilih:{" "}
                  <strong className="text-[var(--text-primary)]">
                    {activeClusterObj.area}
                  </strong>{" "}
                  · ~{activeClusterObj.waitingCount} penumpang menunggu
                </span>
              )}
              <span className="text-[var(--text-muted)] shrink-0">
                Peta simulasi koridor
              </span>
            </div>
          </div>

          {/* Daftar Angkot / Cluster */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {role === "pelajar" ? (
              <>
                <div className="divide-y divide-[var(--border-subtle)]">
                  {displayedAngkot.map((item) => {
                    const isSelected = item.code === activeAngkotObj.code;
                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => setSelectedAngkot(item.code)}
                        className={`w-full text-left px-5 py-3.5 flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[var(--bg-warm)]"
                            : "hover:bg-[var(--bg-canvas)]"
                        }`}
                      >
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className="text-xs font-medium px-2 py-0.5 rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] shrink-0"
                              style={{ fontFamily: "var(--font-mono)" }}
                            >
                              {item.code}
                            </span>
                            <span className="font-bold text-sm text-[var(--text-primary)] truncate">
                              {item.routeName}
                            </span>
                          </div>
                          <div className="text-xs text-[var(--text-secondary)] truncate">
                            {item.area} · {item.updatedAgo}
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-sm font-bold text-[var(--accent-primary)] tabular-nums-data">
                            {formatDistance(item.distanceMeters)}
                          </div>
                          <div className="text-xs text-[var(--text-muted)] tabular-nums-data">
                            ~{item.etaMinutes} mnt · {item.status}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="px-5 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-warm)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="text-xs text-[var(--text-secondary)]">
                    {waitingActive ? (
                      <span className="font-medium text-[var(--status-success-fg)] bg-[var(--status-success-bg)] px-2.5 py-1 rounded-[6px] inline-block">
                        Sinyal tunggu aktif (anonim · berlaku 15 menit)
                      </span>
                    ) : (
                      <span>
                        Tandai Anda sedang menunggu agar masuk ke cluster supir.
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setWaitingActive((v) => !v)}
                    className="min-h-[44px] px-4 py-2 rounded-[6px] font-medium text-sm bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-on-primary)] transition-colors cursor-pointer shrink-0"
                  >
                    {waitingActive
                      ? "Batalkan Sinyal Tunggu"
                      : "Saya Sedang Menunggu"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="divide-y divide-[var(--border-subtle)]">
                  {SAMPLE_CLUSTERS.map((cluster) => {
                    const isSelected = cluster.id === activeClusterObj.id;
                    return (
                      <button
                        key={cluster.id}
                        type="button"
                        onClick={() => setSelectedCluster(cluster.id)}
                        className={`w-full text-left px-5 py-4 flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[var(--bg-warm)]"
                            : "hover:bg-[var(--bg-canvas)]"
                        }`}
                      >
                        <div className="space-y-0.5 min-w-0">
                          <div className="font-bold text-sm text-[var(--text-primary)]">
                            {cluster.area}
                          </div>
                          <div className="text-xs text-[var(--text-secondary)]">
                            {cluster.schoolLandmark} · {cluster.routeHint}
                          </div>
                          <div className="text-xs text-[var(--text-muted)] tabular-nums-data">
                            Jarak dari angkot: {formatDistance(cluster.distanceMeters)}
                          </div>
                        </div>

                        <div className="shrink-0">
                          <span className="inline-block px-3 py-1 rounded-[6px] text-xs font-bold bg-[var(--status-warning-bg)] text-[var(--status-warning-fg)] tabular-nums-data">
                            ~{cluster.waitingCount} menunggu
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="px-5 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-warm)] text-xs text-[var(--text-muted)]">
                  Privasi UU PDP: Cluster hanya menampilkan jumlah agregat per radius 200 m. Titik GPS &amp; identitas individu pelajar tidak pernah dibagikan.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

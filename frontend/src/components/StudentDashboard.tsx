"use client";

import { useEffect, useMemo, useState } from "react";

type ViewMode = "terdekat" | "semua";
type RouteFilter = "ALL" | "T01" | "T02" | "T03" | "T05";

interface Coordinate {
  lat: number;
  lng: number;
}

interface AngkotUnit {
  code: string;
  routeCode: "T01" | "T02" | "T03" | "T05";
  routeName: string;
  area: string;
  lat: number;
  lng: number;
  mapX: number;
  mapY: number;
  updatedSecondsAgo: number;
  status: "Menuju Halte" | "Beroperasi";
}

interface PresetPoint {
  id: string;
  label: string;
  lat: number;
  lng: number;
  mapX: number;
  mapY: number;
}

const PRESET_POINTS: PresetPoint[] = [
  {
    id: "sman1",
    label: "Simpang SMAN 1",
    lat: -6.9147,
    lng: 107.6098,
    mapX: 195,
    mapY: 156,
  },
  {
    id: "smpn3",
    label: "Gerbang SMPN 3",
    lat: -6.9212,
    lng: 107.6185,
    mapX: 320,
    mapY: 190,
  },
  {
    id: "sdn01",
    label: "Halte SDN 01 Perumnas",
    lat: -6.9085,
    lng: 107.5992,
    mapX: 102,
    mapY: 186,
  },
];

const INITIAL_ANGKOT: AngkotUnit[] = [
  {
    code: "ANG-01A",
    routeCode: "T01",
    routeName: "Terminal Induk – SMAN 1",
    area: "Simpang Jl. Ahmad Yani",
    lat: -6.9125,
    lng: 107.6085,
    mapX: 165,
    mapY: 132,
    updatedSecondsAgo: 8,
    status: "Menuju Halte",
  },
  {
    code: "ANG-03B",
    routeCode: "T03",
    routeName: "Pasar Baru – SMPN 3",
    area: "Depan Taman Kota",
    lat: -6.9188,
    lng: 107.6145,
    mapX: 285,
    mapY: 168,
    updatedSecondsAgo: 14,
    status: "Beroperasi",
  },
  {
    code: "ANG-02C",
    routeCode: "T02",
    routeName: "Perumnas – SDN 01",
    area: "Bundaran Balai Kota",
    lat: -6.9098,
    lng: 107.6015,
    mapX: 112,
    mapY: 224,
    updatedSecondsAgo: 22,
    status: "Beroperasi",
  },
  {
    code: "ANG-05A",
    routeCode: "T05",
    routeName: "Stasiun – SMAN 2",
    area: "Jl. Diponegoro",
    lat: -6.9042,
    lng: 107.6198,
    mapX: 356,
    mapY: 96,
    updatedSecondsAgo: 35,
    status: "Beroperasi",
  },
  {
    code: "ANG-01D",
    routeCode: "T01",
    routeName: "Terminal Induk – SMAN 1",
    area: "Halte Pasar Pagi",
    lat: -6.9245,
    lng: 107.6052,
    mapX: 232,
    mapY: 104,
    updatedSecondsAgo: 19,
    status: "Beroperasi",
  },
];

function haversineMeters(a: Coordinate, b: Coordinate): number {
  const R = 6371000;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const h =
    sinLat * sinLat +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinLng * sinLng;
  return Math.round(2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
}

function formatDistance(meters: number): string {
  if (meters < 1000) return `${meters} m`;
  return `${(meters / 1000).toFixed(1).replace(".", ",")} km`;
}

function formatCountdown(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function StudentDashboard() {
  const [presetId, setPresetId] = useState<string>("sman1");
  const [gpsCoord, setGpsCoord] = useState<Coordinate | null>(null);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  const [viewMode, setViewMode] = useState<ViewMode>("terdekat");
  const [routeFilter, setRouteFilter] = useState<RouteFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCode, setSelectedCode] = useState<string>("ANG-01A");

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [waitingSecondsLeft, setWaitingSecondsLeft] = useState<number>(0);

  const activePreset =
    PRESET_POINTS.find((p) => p.id === presetId) ?? PRESET_POINTS[0];
  const studentCoord: Coordinate = gpsCoord ?? {
    lat: activePreset.lat,
    lng: activePreset.lng,
  };

  useEffect(() => {
    if (waitingSecondsLeft <= 0) return;
    const timer = setInterval(() => {
      setWaitingSecondsLeft((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [waitingSecondsLeft]);

  const handleUseGps = () => {
    setGpsError(null);
    if (!("geolocation" in navigator)) {
      setGpsError(
        "Peramban Anda tidak mendukung GPS. Gunakan pilihan titik lokasi di bawah."
      );
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsCoord({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLocating(false);
      },
      () => {
        setGpsError(
          "Izin lokasi ditolak atau GPS tidak tersedia. Menampilkan jarak dari titik area terpilih."
        );
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const handleRefreshRadar = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 400);
  };

  const computedList = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const withDistance = INITIAL_ANGKOT.map((unit) => {
      const distanceMeters = haversineMeters(studentCoord, {
        lat: unit.lat,
        lng: unit.lng,
      });
      const etaMinutes = Math.max(1, Math.round(distanceMeters / 250));
      return {
        ...unit,
        distanceMeters,
        etaMinutes,
      };
    }).filter((unit) => {
      if (routeFilter !== "ALL" && unit.routeCode !== routeFilter) {
        return false;
      }
      if (
        query &&
        !unit.code.toLowerCase().includes(query) &&
        !unit.routeName.toLowerCase().includes(query) &&
        !unit.area.toLowerCase().includes(query)
      ) {
        return false;
      }
      return true;
    });

    if (viewMode === "terdekat") {
      return [...withDistance].sort(
        (a, b) => a.distanceMeters - b.distanceMeters
      );
    }
    return withDistance;
  }, [studentCoord, routeFilter, searchQuery, viewMode]);

  const activeUnit =
    computedList.find((u) => u.code === selectedCode) ?? computedList[0] ?? null;

  const isWaiting = waitingSecondsLeft > 0;

  return (
    <div className="space-y-6">
      {/* Bar Kontrol Lokasi & Sinyal Tunggu */}
      <section
        aria-label="Kontrol lokasi dan sinyal tunggu pelajar"
        className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 space-y-4"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">
              Radar Angkot Pelajar
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              {gpsCoord
                ? `Menggunakan GPS perangkat (${gpsCoord.lat.toFixed(4)}, ${gpsCoord.lng.toFixed(4)})`
                : `Titik acuan aktif: ${activePreset.label}`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleUseGps}
              disabled={isLocating}
              className="min-h-[44px] px-4 py-2 text-sm font-medium rounded-[6px] border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-warm)] disabled:opacity-60 cursor-pointer"
            >
              {isLocating ? "Mendeteksi GPS..." : "Gunakan GPS Saya"}
            </button>

            <button
              type="button"
              onClick={() => setWaitingSecondsLeft(isWaiting ? 0 : 15 * 60)}
              className={`min-h-[44px] px-5 py-2 text-sm font-medium rounded-[6px] transition-colors cursor-pointer ${
                isWaiting
                  ? "border border-[var(--status-success-fg)] bg-[var(--status-success-bg)] text-[var(--status-success-fg)]"
                  : "bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-on-primary)]"
              }`}
            >
              {isWaiting
                ? `Menunggu Aktif (${formatCountdown(waitingSecondsLeft)}) · Batalkan`
                : "Saya Sedang Menunggu Angkot"}
            </button>
          </div>
        </div>

        {/* Pilih Titik Acuan Manual / Fallback */}
        <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <label
              htmlFor="preset-location"
              className="text-xs font-medium text-[var(--text-muted)]"
            >
              Atau pilih titik halte:
            </label>
            <select
              id="preset-location"
              value={presetId}
              onChange={(e) => {
                setPresetId(e.target.value);
                setGpsCoord(null);
                setGpsError(null);
              }}
              className="min-h-[40px] px-3 py-1.5 text-sm rounded-[6px] border border-[var(--border-strong)] bg-[var(--bg-canvas)] text-[var(--text-primary)]"
            >
              {PRESET_POINTS.map((pt) => (
                <option key={pt.id} value={pt.id}>
                  {pt.label}
                </option>
              ))}
            </select>
          </div>

          {isWaiting && (
            <div
              role="status"
              className="text-xs font-medium text-[var(--status-success-fg)] bg-[var(--status-success-bg)] px-3 py-1.5 rounded-[6px]"
            >
              Sinyal tunggu anonim dikirim ke cluster 200 m (tanpa identitas pribadi).
            </div>
          )}
        </div>

        {gpsError && (
          <div
            role="alert"
            className="rounded-[6px] border border-[var(--status-warning-fg)] bg-[var(--status-warning-bg)] text-[var(--status-warning-fg)] px-4 py-3 text-sm"
          >
            {gpsError}
          </div>
        )}
      </section>

      {/* Filter & Pencarian */}
      <section
        aria-label="Filter dan daftar angkot"
        className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden"
      >
        <div className="px-5 py-4 border-b border-[var(--border-subtle)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {/* Toggle Terdekat / Semua */}
            <div
              role="group"
              aria-label="Urutan tampilan"
              className="inline-flex rounded-[6px] border border-[var(--border-subtle)] p-0.5 bg-[var(--bg-canvas)]"
            >
              <button
                type="button"
                onClick={() => setViewMode("terdekat")}
                className={`min-h-[40px] px-3.5 text-sm font-medium rounded-[6px] cursor-pointer ${
                  viewMode === "terdekat"
                    ? "bg-[var(--accent-primary)] text-[var(--accent-on-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Terdekat
              </button>
              <button
                type="button"
                onClick={() => setViewMode("semua")}
                className={`min-h-[40px] px-3.5 text-sm font-medium rounded-[6px] cursor-pointer ${
                  viewMode === "semua"
                    ? "bg-[var(--accent-primary)] text-[var(--accent-on-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Semua Angkot
              </button>
            </div>

            {/* Filter Trayek */}
            <select
              aria-label="Filter trayek"
              value={routeFilter}
              onChange={(e) => setRouteFilter(e.target.value as RouteFilter)}
              className="min-h-[40px] px-3 py-1.5 text-sm rounded-[6px] border border-[var(--border-strong)] bg-[var(--bg-canvas)] text-[var(--text-primary)]"
            >
              <option value="ALL">Semua Trayek</option>
              <option value="T01">Trayek 01 · SMAN 1</option>
              <option value="T02">Trayek 02 · SDN 01</option>
              <option value="T03">Trayek 03 · SMPN 3</option>
              <option value="T05">Trayek 05 · SMAN 2</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <input
              type="search"
              aria-label="Cari kode angkot atau lokasi"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari trayek atau jalan..."
              className="min-h-[40px] w-full sm:w-60 px-3 py-1.5 text-sm rounded-[6px] border border-[var(--border-strong)] bg-[var(--bg-canvas)] text-[var(--text-primary)]"
            />
            <button
              type="button"
              onClick={handleRefreshRadar}
              disabled={isRefreshing}
              className="min-h-[40px] px-3.5 py-1.5 text-sm font-medium rounded-[6px] border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-warm)] disabled:opacity-60 cursor-pointer"
            >
              {isRefreshing ? "Memuat..." : "Perbarui"}
            </button>
          </div>
        </div>

        {/* Workspace Peta + Daftar */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Peta Koridor */}
          <div className="lg:col-span-6 p-5 border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)] bg-[var(--bg-canvas)] space-y-3">
            <svg
              viewBox="0 0 440 270"
              className="w-full h-auto rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-warm)]"
              role="img"
              aria-label="Peta posisi angkot aktif dan lokasi Anda"
            >
              <path
                d="M0 92H440 M0 175H440 M120 0V270 M265 0V270 M365 0V270"
                stroke="var(--border-subtle)"
                strokeWidth="1.5"
              />
              <path
                d="M40 224 L120 224 L165 132 L255 92 L356 96"
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.4"
              />
              <path
                d="M98 188 L195 156 L285 168 L332 192"
                fill="none"
                stroke="var(--accent-secondary)"
                strokeWidth="2.5"
                strokeDasharray="6 5"
                strokeLinecap="round"
                strokeOpacity="0.5"
              />

              {/* Titik Pelajar */}
              <circle
                cx={activePreset.mapX}
                cy={activePreset.mapY}
                r="16"
                fill="var(--accent-secondary)"
                fillOpacity="0.18"
              />
              <circle
                cx={activePreset.mapX}
                cy={activePreset.mapY}
                r="6"
                fill="var(--accent-secondary)"
                stroke="var(--bg-surface)"
                strokeWidth="2"
              />
              <text
                x={activePreset.mapX}
                y={activePreset.mapY + 24}
                textAnchor="middle"
                fontSize="10"
                fontWeight="700"
                fill="var(--accent-secondary)"
                fontFamily="Inter, sans-serif"
              >
                Anda
              </text>

              {computedList.map((bus) => {
                const isSelected = activeUnit?.code === bus.code;
                return (
                  <g
                    key={bus.code}
                    onClick={() => setSelectedCode(bus.code)}
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
            </svg>

            <div className="text-xs text-[var(--text-secondary)] flex items-center justify-between gap-2">
              {activeUnit ? (
                <span>
                  Terpilih:{" "}
                  <strong className="text-[var(--text-primary)]">
                    {activeUnit.code} ({activeUnit.routeName})
                  </strong>{" "}
                  · {formatDistance(activeUnit.distanceMeters)} (~
                  {activeUnit.etaMinutes} mnt)
                </span>
              ) : (
                <span>Tidak ada armada terpilih</span>
              )}
              <span className="text-[var(--text-muted)] shrink-0">
                {computedList.length} armada tampil
              </span>
            </div>
          </div>

          {/* Daftar Angkot */}
          <div className="lg:col-span-6">
            {isRefreshing ? (
              <div className="p-5 space-y-3" aria-busy="true">
                {[1, 2, 3].map((row) => (
                  <div
                    key={row}
                    className="h-14 rounded-[6px] bg-[var(--bg-warm)] animate-pulse"
                  />
                ))}
              </div>
            ) : computedList.length === 0 ? (
              <div className="p-8 text-center space-y-3">
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  Tidak ada angkot yang cocok dengan filter saat ini.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setRouteFilter("ALL");
                    setSearchQuery("");
                  }}
                  className="min-h-[40px] px-4 py-2 text-sm font-medium rounded-[6px] border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-warm)] cursor-pointer"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="divide-y divide-[var(--border-subtle)]">
                {computedList.map((item) => {
                  const isSelected = activeUnit?.code === item.code;
                  return (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => setSelectedCode(item.code)}
                      className={`w-full text-left px-5 py-4 flex items-center justify-between gap-3 transition-colors cursor-pointer ${
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
                          {item.area} · Diperbarui {item.updatedSecondsAgo} dtk lalu
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
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/LandingInteractive";
import { StudentDashboard } from "@/components/StudentDashboard";

export const metadata: Metadata = {
  title: "Dashboard Pelajar — AngkotPelajar",
  description:
    "Pantau semua angkot aktif, cari angkot terdekat, dan kirim sinyal tunggu anonim.",
};

export default function StudentDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-warm)] text-[var(--text-primary)]">
      {/* App Header */}
      <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] sticky top-0 z-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-7 py-3 flex items-center justify-between gap-4">
          <Link
            href="/"
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
                Dashboard Pelajar (SD–SMA)
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="min-h-[44px] px-3.5 py-2 inline-flex items-center text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] no-underline"
            >
              Keluar
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-7">
          <StudentDashboard />
        </div>
      </main>
    </div>
  );
}

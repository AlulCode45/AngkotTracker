import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/LandingInteractive";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Masuk — AngkotPelajar",
  description:
    "Masuk ke Dashboard AngkotPelajar sebagai Pelajar SD–SMA atau Supir Angkot.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-warm)] text-[var(--text-primary)]">
      {/* Masthead Minimal */}
      <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
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
                Kembali ke Beranda
              </div>
            </div>
          </Link>

          <ThemeToggle />
        </div>
      </header>

      {/* Main Centered Login */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-7 py-12">
        <div className="w-full max-w-[480px] space-y-6">
          <div className="space-y-2">
            <h1 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)]">
              Masuk ke Dashboard
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              Akses pelacakan angkot terdekat untuk pelajar atau siaran GPS &amp; cluster penumpang untuk supir angkot.
            </p>
          </div>

          <LoginForm />

          <p className="text-xs text-[var(--text-muted)] text-center">
            Data akun dan lokasi dilindungi sesuai UU PDP No. 27/2022. Tidak ada identitas individu pelajar yang dibagikan ke publik.
          </p>
        </div>
      </main>
    </div>
  );
}

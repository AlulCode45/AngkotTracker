"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type LoginRole = "pelajar" | "supir";

interface FieldErrors {
  identifier?: string;
  password?: string;
}

export function LoginForm() {
  const router = useRouter();
  const [role, setRole] = useState<LoginRole>("pelajar");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    const trimmedId = identifier.trim();

    if (!trimmedId) {
      next.identifier =
        role === "pelajar"
          ? "Masukkan email atau nomor kartu pelajar Anda."
          : "Masukkan nomor HP atau ID armada Anda.";
    } else if (trimmedId.length < 4) {
      next.identifier = "Identitas akun minimal 4 karakter.";
    }

    if (!password) {
      next.password = "Kata sandi wajib diisi.";
    } else if (password.length < 6) {
      next.password = "Kata sandi minimal 6 karakter.";
    }

    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL;
      if (!apiBase) {
        await new Promise((resolve) => setTimeout(resolve, 450));
        if (role === "pelajar") {
          setFormSuccess("Berhasil masuk. Mengalihkan ke Dashboard Pelajar...");
          router.push("/dashboard/pelajar");
          return;
        }
        setFormSuccess(
          "Validasi formulir Supir Angkot berhasil. Dashboard Supir akan segera disambungkan."
        );
        return;
      }

      const res = await fetch(`${apiBase}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          role,
          identifier: identifier.trim(),
          password,
          remember,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setFormError(
          body?.message ??
            "Kredensial tidak cocok atau akun belum aktif. Silakan periksa kembali."
        );
        return;
      }

      setFormSuccess("Berhasil masuk. Mengalihkan ke Dashboard...");
    } catch {
      setFormError(
        "Tidak dapat terhubung ke server saat ini. Silakan coba beberapa saat lagi."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorList = Object.values(errors).filter(Boolean) as string[];

  return (
    <div className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-6">
      {/* Pemilih Peran */}
      <div className="space-y-2">
        <span className="block text-sm font-medium text-[var(--text-primary)]">
          Masuk sebagai
        </span>
        <div
          role="tablist"
          aria-label="Pilih peran akun"
          className="grid grid-cols-2 gap-2 p-1 rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-canvas)]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={role === "pelajar"}
            onClick={() => {
              setRole("pelajar");
              setErrors({});
              setFormError(null);
              setFormSuccess(null);
            }}
            className={`min-h-[44px] px-3 text-sm font-medium rounded-[6px] cursor-pointer transition-colors ${
              role === "pelajar"
                ? "bg-[var(--accent-primary)] text-[var(--accent-on-primary)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            Pelajar
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={role === "supir"}
            onClick={() => {
              setRole("supir");
              setErrors({});
              setFormError(null);
              setFormSuccess(null);
            }}
            className={`min-h-[44px] px-3 text-sm font-medium rounded-[6px] cursor-pointer transition-colors ${
              role === "supir"
                ? "bg-[var(--accent-primary)] text-[var(--accent-on-primary)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            Supir Angkot
          </button>
        </div>
      </div>

      {/* Error Summary Box */}
      {(errorList.length > 0 || formError) && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-[6px] border border-[var(--status-danger-fg)] bg-[var(--status-danger-bg)] text-[var(--status-danger-fg)] p-4 text-sm space-y-1"
        >
          <div className="font-bold">Periksa kembali data Anda:</div>
          {formError && <p>{formError}</p>}
          {errorList.length > 0 && (
            <ul className="list-disc pl-5 space-y-0.5">
              {errorList.map((msg) => (
                <li key={msg}>{msg}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Success Banner */}
      {formSuccess && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-[6px] border border-[var(--status-success-fg)] bg-[var(--status-success-bg)] text-[var(--status-success-fg)] p-4 text-sm font-medium"
        >
          {formSuccess}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Field Identitas */}
        <div className="space-y-1.5">
          <label
            htmlFor="login-identifier"
            className="block text-sm font-medium text-[var(--text-primary)]"
          >
            {role === "pelajar"
              ? "Email atau Nomor Kartu Pelajar"
              : "Nomor HP atau ID Armada"}
          </label>
          <input
            id="login-identifier"
            name="identifier"
            type="text"
            autoComplete={role === "pelajar" ? "username" : "tel"}
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              if (errors.identifier) {
                setErrors((prev) => ({ ...prev, identifier: undefined }));
              }
            }}
            aria-invalid={Boolean(errors.identifier)}
            aria-describedby={
              errors.identifier ? "identifier-error" : "identifier-help"
            }
            placeholder={
              role === "pelajar"
                ? "Contoh: pelajar@sekolah.sch.id"
                : "Contoh: 081234567890 atau ANG-01A"
            }
            className={`w-full min-h-[44px] px-3.5 py-2 text-base rounded-[6px] bg-[var(--bg-surface)] text-[var(--text-primary)] border ${
              errors.identifier
                ? "border-2 border-[var(--status-danger-fg)]"
                : "border-[var(--border-strong)]"
            }`}
          />
          {errors.identifier ? (
            <p
              id="identifier-error"
              className="text-xs font-medium text-[var(--status-danger-fg)]"
            >
              {errors.identifier}
            </p>
          ) : (
            <p id="identifier-help" className="text-xs text-[var(--text-muted)]">
              {role === "pelajar"
                ? "Gunakan akun pelajar terdaftar untuk mengakses radar angkot."
                : "Gunakan nomor HP atau kode armada yang terdaftar di dinas."}
            </p>
          )}
        </div>

        {/* Field Kata Sandi */}
        <div className="space-y-1.5">
          <label
            htmlFor="login-password"
            className="block text-sm font-medium text-[var(--text-primary)]"
          >
            Kata Sandi
          </label>
          <div className="relative flex items-center">
            <input
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors((prev) => ({ ...prev, password: undefined }));
                }
              }}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              placeholder="Masukkan kata sandi"
              className={`w-full min-h-[44px] pl-3.5 pr-24 py-2 text-base rounded-[6px] bg-[var(--bg-surface)] text-[var(--text-primary)] border ${
                errors.password
                  ? "border-2 border-[var(--status-danger-fg)]"
                  : "border-[var(--border-strong)]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={
                showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
              }
              className="absolute right-1.5 min-h-[36px] px-2.5 text-xs font-medium rounded-[6px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-warm)] cursor-pointer"
            >
              {showPassword ? "Sembunyikan" : "Tampilkan"}
            </button>
          </div>
          {errors.password && (
            <p
              id="password-error"
              className="text-xs font-medium text-[var(--status-danger-fg)]"
            >
              {errors.password}
            </p>
          )}
        </div>

        {/* Ingat Sesi */}
        <div className="flex items-center justify-between gap-4">
          <label className="inline-flex items-center gap-2.5 text-sm text-[var(--text-secondary)] cursor-pointer min-h-[44px]">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 accent-[var(--accent-primary)] rounded-[4px]"
            />
            <span>Ingat saya di perangkat ini</span>
          </label>
        </div>

        {/* Tombol Submit (Satu Aksi Primer) */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full min-h-[44px] px-5 py-2.5 rounded-[6px] font-medium text-base bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-[var(--accent-on-primary)] transition-colors cursor-pointer"
        >
          {isSubmitting
            ? "Sedang memproses..."
            : `Masuk sebagai ${role === "pelajar" ? "Pelajar" : "Supir Angkot"}`}
        </button>
      </form>
    </div>
  );
}

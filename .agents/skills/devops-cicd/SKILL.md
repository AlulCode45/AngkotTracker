---
name: devops-cicd
description: Standar Dockerfile/Docker Compose, pipeline GitHub Actions (lint, test, build), manajemen environment, strategi deploy & rollback, logging terstruktur, dan error tracking. Aktifkan saat menyiapkan container, CI/CD, atau konfigurasi deployment. JANGAN aktifkan untuk pengembangan fitur CRUD biasa tanpa perubahan infra.
---

# DevOps & CI/CD

## Langkah Konkret
1. **Container (`Dockerfile` & `compose.yaml`)**:
   - Gunakan multi-stage build, pin versi base image spesifik (hindari `:latest`), jalankan container sebagai non-root user.
   - Jangan salin `.env` ke dalam image (gunakan `.dockerignore`); baca konfigurasi dari runtime environment.
2. **GitHub Actions CI (`.github/workflows/ci.yml`)**:
   - Jalankan berurutan/paralel: lint & static analysis → unit/feature test → build produksi → audit dependensi (`composer audit` / `npm audit`).
   - Cache dependensi (`actions/cache` atau built-in `cache: npm` / `composer`).
3. **Environment & Secret**:
   - Seluruh secret produksi disimpan di secret manager / GitHub Actions Secrets; `.env.example` hanya berisi placeholder aman.
4. **Deploy, Rollback, Logging & Error Tracking**:
   - Sediakan healthcheck endpoint (`/health` atau `/up`), strategi rollback (tag release / image digest), dan migrasi database yang aman (zero-downtime / backup sebelum migrasi).
   - Gunakan structured JSON logging (tanpa mencatat password, token, atau PII penuh) dan hubungkan error tracking (misal Sentry) via DSN env var.

## Contoh Benar vs Salah
- **Salah**: `FROM node:latest` dengan `COPY . .` (menyertakan `.env` dan `node_modules`) lalu menjalankan container sebagai `root`.
- **Benar**: Multi-stage `FROM node:22-alpine`, `.dockerignore` mengecualikan `.env*` dan `node_modules`, `USER node`, ditambah `HEALTHCHECK`.

## Checklist Keluaran
- [ ] Base image ter-pin, non-root user, dan `.env` dikecualikan via `.dockerignore`.
- [ ] Workflow CI mencakup lint, test, dan build.
- [ ] Healthcheck, rollback plan, dan structured logging terdokumentasi.

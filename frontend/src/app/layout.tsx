import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AngkotPelajar — Pelacakan Angkot Terdekat & Cluster Penumpang",
  description:
    "Layanan pelacakan angkutan umum daerah untuk pelajar SD–SMA dan pemantauan cluster titik tunggu penumpang bagi supir angkot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

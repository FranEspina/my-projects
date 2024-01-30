import type { Metadata } from "next";
import "./ui/globals.css";
import { primaryFont } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Mis proyectos",
  description: "Mis proyectos como desarrollador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} antialiased bg-slate-950 text-slate-50`}>{children}</body>
    </html>
  );
}

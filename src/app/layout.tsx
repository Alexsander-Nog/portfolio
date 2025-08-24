// src/app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Alexsander Nogueira De Jesus – Desenvolvedor de Software",
  description:
    "Desenvolvedor de Software com experiência em Python, Flask, HTML, Power Apps, C, Java, e MySQL. Construo aplicações web e soluções de automação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Douglas Figueirôa – iOS & Full‑Stack Developer",
  description:
    "iOS & Full‑Stack Developer crafting fast, clean apps and web experiences. Swift, SwiftUI, UIKit, Next.js, React, Firebase.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

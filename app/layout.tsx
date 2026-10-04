import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ImpoNexpo | Cinematic Commerce Intelligence",
  description: "Interactive cinematic landing page for an AI-powered global trade platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

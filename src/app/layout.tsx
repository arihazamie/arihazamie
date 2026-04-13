import type { Metadata } from "next";
// Import font Plus Jakarta Sans dari Google Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Konfigurasi font
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans", // Nama variabel CSS yang akan digunakan
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ari Hazamie | Backend & Cloud",
  description: "Portfolio of Ari Hazamie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Terapkan variabel font ke tag body */}
      <body className={`${jakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
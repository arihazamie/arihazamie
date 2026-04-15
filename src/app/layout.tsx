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
  description: "Backend developer & cloud architect from Indonesia. Specialized in Node.js, Python, PostgreSQL, and Google Cloud Platform.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Ari Hazamie | Backend & Cloud",
    description: "Backend developer & cloud architect from Indonesia",
    type: "website",
  },
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

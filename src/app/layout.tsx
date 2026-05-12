import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://arihazamie.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────
  title: {
    default: "Ari Hazamie | Finance & Accounting Specialist",
    template: "%s | Ari Hazamie",
  },

  // ── Description ────────────────────────────────────────────────────
  description:
    "Ari Hazamie – Finance & Accounting Specialist dan Information Systems graduate. Berpengalaman dalam pengelolaan keuangan desa menggunakan Siskeudes (SPP/SPM, BKU, LRA, APBDes, SPJ), pelaporan keuangan, rekonsiliasi transaksi, dan analisis data dengan Python & SQL.",

  // ── Keywords ───────────────────────────────────────────────────────
  keywords: [
    "Ari Hazamie",
    "arihazamie",
    "Finance Specialist",
    "Accounting Specialist",
    "Siskeudes",
    "Keuangan Desa",
    "SPJ",
    "APBDes",
    "BKU",
    "LRA",
    "SPP SPM",
    "Financial Reporting",
    "Data Analyst",
    "Information Systems",
    "Merangin Jambi",
    "Portfolio Ari Hazamie",
  ],

  // ── Authors & Creator ──────────────────────────────────────────────
  authors: [{ name: "Ari Hazamie", url: BASE_URL }],
  creator: "Ari Hazamie",
  publisher: "Ari Hazamie",

  // ── Canonical ──────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph (untuk preview di Google, WhatsApp, dll) ────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Ari Hazamie Portfolio",
    title: "Ari Hazamie | Finance & Accounting Specialist",
    description:
      "Portfolio resmi Ari Hazamie – Finance & Accounting Specialist dengan keahlian Siskeudes, pelaporan keuangan desa, dan analisis data.",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ari Hazamie – Finance & Accounting Specialist",
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Ari Hazamie | Finance & Accounting Specialist",
    description:
      "Portfolio resmi Ari Hazamie – Finance & Accounting Specialist dengan keahlian Siskeudes, pelaporan keuangan desa, dan analisis data.",
    images: ["/og-image.png"],
  },

  // ── Robots ─────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ── Verification (isi nanti setelah daftar Google Search Console) ──
  // verification: {
  //   google: "PASTE_KODE_VERIFIKASI_GOOGLE_DISINI",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth">
      <head>
        {/* ── JSON-LD Structured Data (Google Knowledge Panel) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ari Hazamie",
              alternateName: "arihazamie",
              url: BASE_URL,
              email: "arihzmiutama@gmail.com",
              jobTitle: "Finance & Accounting Specialist",
              description:
                "Finance & Accounting Specialist dan Information Systems graduate berpengalaman dalam pengelolaan keuangan desa menggunakan Siskeudes.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Merangin",
                addressRegion: "Jambi",
                addressCountry: "ID",
              },
              sameAs: [
                "https://linkedin.com/in/arihazamie",
                "https://github.com/arihazamie",
                BASE_URL,
              ],
              knowsAbout: [
                "Siskeudes",
                "Keuangan Desa",
                "Financial Reporting",
                "APBDes",
                "SPJ",
                "Data Analysis",
                "Python",
                "SQL",
              ],
            }),
          }}
        />
      </head>
      <body className={`${jakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

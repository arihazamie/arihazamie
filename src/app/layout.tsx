import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WelcomeIntro from "@/components/welcome-intro";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap", // ← prevent FOIT: text stays visible while font loads
});

const BASE_URL = "https://arihazamie.online";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────
  title: {
    default: "Ari Hazamie | Portfolio",
    template: "%s | Ari Hazamie",
  },

  // ── Description ────────────────────────────────────────────────────
  description:
    "Ari Hazamie – Finance & Accounting Specialist dan Information Systems graduate. Berpengalaman dalam pengelolaan keuangan desa menggunakan Siskeudes (SPP/SPM, BKU, LRA, APBDes, SPJ), pelaporan keuangan, rekonsiliasi transaksi, serta membangun aplikasi web full-stack dengan Next.js, TypeScript, dan PostgreSQL.",

  // ── Keywords ───────────────────────────────────────────────────────
  keywords: [
    "Ari Hazamie",
    "arihazamie",
    "Finance & Accounting Specialist",
    "Siskeudes",
    "Keuangan Desa",
    "SPP SPM",
    "BKU",
    "LRA",
    "APBDes",
    "SPJ",
    "Financial Reporting",
    "Information Systems",
    "Full Stack Developer",
    "Next.js Developer",
    "Data Analyst",
    "Python",
    "SQL",
    "PostgreSQL",
    "TypeScript",
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
    title: "Ari Hazamie | Portfolio",
    description:
      "Finance & Accounting Specialist dan Information Systems graduate. Berpengalaman dalam pengelolaan keuangan desa menggunakan Siskeudes (SPP/SPM, BKU, LRA, APBDes, SPJ) serta membangun web app full-stack dengan Next.js & PostgreSQL.",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ari Hazamie – Portfolio",
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Ari Hazamie | Portfolio",
    description:
      "Finance & Accounting Specialist dan Information Systems graduate. Berpengalaman dalam pengelolaan keuangan desa menggunakan Siskeudes (SPP/SPM, BKU, LRA, APBDes, SPJ) serta membangun web app full-stack dengan Next.js & PostgreSQL.",
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

  // ── Google Site Verification ──
  verification: {
    google:
      "google-site-verification=C_8pI9mZFb3Yr1fxbrIInHK8HCnv-ToYm8fjzI55ExAda",
  },
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
        {/* ── DNS prefetch for Excel iframe domain ── */}
        <link
          rel="preconnect"
          href="https://view.officeapps.live.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://view.officeapps.live.com"
        />

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
                "Finance & Accounting Specialist and Information Systems graduate. Experienced in village financial management using Siskeudes (SPP/SPM, BKU, LRA, APBDes, SPJ), financial reporting, transaction reconciliation, and full-stack web development with Next.js and PostgreSQL.",
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
                "Finance & Accounting",
                "Siskeudes",
                "Village Financial Management",
                "SPP/SPM",
                "Financial Reporting",
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Cloud Computing",
                "Python",
                "SQL",
                "Data Analysis",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className={`${jakartaSans.variable} font-sans antialiased`}>
        <WelcomeIntro>{children}</WelcomeIntro>
      </body>
    </html>
  );
}

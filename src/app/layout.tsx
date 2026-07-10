import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WelcomeIntro from "@/components/welcome-intro";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap", // ← prevent FOIT: text stays visible while font loads
});

const BASE_URL = "https://www.arihazamie.online";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────
  title: {
    default: "Ari Hazamie | Portfolio",
    template: "%s | Ari Hazamie",
  },

  // ── Description ────────────────────────────────────────────────────
  description:
    "Ari Hazamie – Data Analyst & Full Stack Developer, Information Systems graduate. Terpilih 1 dari 4.636 peserta (top ~10%) Bangkit Academy by Google, GoTo & Traveloka dari 45.000+ pendaftar se-Indonesia. Skill: Python, SQL, Next.js.",

  // ── Keywords ───────────────────────────────────────────────────────
  keywords: [
    "Ari Hazamie",
    "arihazamie",
    "Data Analyst",
    "Data Analysis",
    "Business Intelligence",
    "Python",
    "SQL",
    "Google Cloud Platform",
    "Excel VLOOKUP Pivot Table",
    "Bangkit Academy",
    "Bangkit Academy by Google",
    "Cloud Computing",
    "Associate Cloud Engineer",
    "Information Systems",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "PostgreSQL",
    "Financial Data Analysis",
    "Siskeudes",
    "Keuangan Desa",
    "Merangin Jambi",
    "Portfolio Ari Hazamie",
  ],

  // ── Authors & Creator ──────────────────────────────────────────────
  authors: [{ name: "Ari Hazamie", url: BASE_URL }],
  creator: "Ari Hazamie",
  publisher: "Ari Hazamie",

  // ── Icons (favicon & app icons) ─────────────────────────────────────
  icons: {
    icon: [
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.gif", type: "image/gif" },
    ],
    apple: "/apple-touch-icon.png",
  },

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
      "Data Analyst & Full Stack Developer. Terpilih 1 dari 4.636 peserta (top ~10%) Bangkit Academy by Google, GoTo & Traveloka dari 45.000+ pendaftar se-Indonesia.",
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
      "Data Analyst & Full Stack Developer. Terpilih 1 dari 4.636 peserta (top ~10%) Bangkit Academy by Google, GoTo & Traveloka dari 45.000+ pendaftar se-Indonesia.",
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
              jobTitle: "Data Analyst & Full Stack Developer",
              description:
                "Information Systems graduate, Data Analyst & Full Stack Developer. Selected as 1 of 4,636 participants (top ~10%) out of 45,000+ applicants nationwide for Bangkit Academy by Google, GoTo & Traveloka. Experienced in financial data management using Siskeudes and building web applications with Next.js, Python, and SQL.",
              award:
                "Bangkit Academy 2024 Graduate — selected as 1 of 4,636 participants (top ~10%) out of 45,000+ applicants from 400 universities nationwide, Cloud Computing learning path (Google, GoTo, Traveloka)",
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
                "Data Analysis",
                "Python",
                "SQL",
                "Google Cloud Platform",
                "Business Intelligence",
                "Bangkit Academy",
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Web Development",
                "Cloud Computing",
                "Financial Data Management",
                "Siskeudes",
                "Village Financial Management",
                "SPP/SPM",
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

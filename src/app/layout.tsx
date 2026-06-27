import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap", // ← prevent FOIT: text stays visible while font loads
});

const BASE_URL = "https://arihazamie.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────
  title: {
    default: "Ari Hazamie | Portfolio",
    template: "%s | Ari Hazamie",
  },

  // ── Description ────────────────────────────────────────────────────
  description:
    "Ari Hazamie – Information Systems graduate dan Cloud Computing certified (Bangkit Academy by Google, GoTo, Traveloka). Membangun aplikasi web full-stack dengan Next.js, TypeScript, dan PostgreSQL. Berpengalaman dalam analisis data menggunakan Python dan SQL, serta pengelolaan sistem keuangan nyata.",

  // ── Keywords ───────────────────────────────────────────────────────
  keywords: [
    "Ari Hazamie",
    "arihazamie",
    "Information Systems",
    "Full Stack Developer",
    "Next.js Developer",
    "Cloud Computing",
    "Bangkit Academy",
    "Data Analyst",
    "Python",
    "SQL",
    "PostgreSQL",
    "TypeScript",
    "Web Developer",
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
      "Portfolio resmi Ari Hazamie – IS graduate dan Cloud Computing certified. Membangun web app full-stack, analisis data dengan Python & SQL, dan berpengalaman dalam sistem keuangan nyata.",
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
      "Portfolio resmi Ari Hazamie – IS graduate dan Cloud Computing certified. Membangun web app full-stack, analisis data dengan Python & SQL, dan berpengalaman dalam sistem keuangan nyata.",
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
              jobTitle: "Information Systems Graduate",
              description:
                "Information Systems graduate certified in Cloud Computing by Bangkit Academy (Google, GoTo, Traveloka). Builds full-stack web applications and applies data analysis skills using Python, SQL, and Excel.",
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
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Cloud Computing",
                "Google Cloud Platform",
                "Python",
                "SQL",
                "Data Analysis",
                "RESTful API",
                "Web Development",
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

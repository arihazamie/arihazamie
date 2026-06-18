// FILE: src/app/website/page.tsx

import type { Metadata } from "next";
import { WebsitePortfolioClient } from "@/components/website-portfolio-client";

export const metadata: Metadata = {
  title: "Website Portfolio",
  description:
    "Full-stack web systems built by Ari Hazamie — from institutional research data management and geospatial information systems to cloud-powered environmental apps using Next.js, PostgreSQL, and TypeScript.",
  alternates: {
    canonical: "/website",
  },
  openGraph: {
    title: "Website Portfolio | Ari Hazamie",
    description:
      "Full-stack web systems built with Next.js, PostgreSQL, and modern tooling — institutional data management, geospatial information systems, and cloud-powered apps.",
    url: "/website",
  },
};

export default function WebsitePortfolioPage() {
  return <WebsitePortfolioClient />;
}

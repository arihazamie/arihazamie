import type { Metadata } from "next";
import { ExcelPortfolioClient } from "@/components/excel-portfolio-client";

export const metadata: Metadata = {
  title: "Excel Portfolio",
  description:
    "Koleksi proyek Microsoft Excel oleh Ari Hazamie — pengolahan data mentah, pivot table, dashboard KPI, dan laporan eksekutif menggunakan formula tingkat lanjut (SUMIFS, INDEX-MATCH, SUMPRODUCT).",
  alternates: {
    canonical: "/excel",
  },
  openGraph: {
    title: "Excel Portfolio | Ari Hazamie",
    description:
      "Koleksi proyek Microsoft Excel — pengolahan data mentah, pivot table, dashboard KPI, dan laporan eksekutif.",
    url: "/excel",
  },
};

export default function ExcelPortfolioPage() {
  return <ExcelPortfolioClient />;
}

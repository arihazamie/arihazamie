"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileSpreadsheet,
  Download,
  Layers,
  Table2,
  BarChart3,
  TrendingUp,
  Sigma,
  AlertTriangle,
  Crown,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Database,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  excelWorkbooks,
  type ExcelWorkbook,
  type RankedRow,
} from "@/data/excel-portfolio";

// ==========================================
// HELPERS
// ==========================================
function fmtNum(n: number) {
  return n.toLocaleString("id-ID", { maximumFractionDigits: 0 });
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

type TabKey =
  | "preview"
  | "overview"
  | "raw"
  | "pivot"
  | "rankings"
  | "formulas"
  | "insights";

const TABS: { key: TabKey; label: string; icon: typeof Layers }[] = [
  { key: "preview", label: "File Preview", icon: FileSpreadsheet },
  { key: "overview", label: "Overview", icon: Layers },
  { key: "raw", label: "Raw Data", icon: Table2 },
  { key: "pivot", label: "Pivot Analysis", icon: BarChart3 },
  { key: "rankings", label: "Rankings", icon: TrendingUp },
  { key: "formulas", label: "Formulas", icon: Sigma },
  { key: "insights", label: "Insights", icon: AlertTriangle },
];

const severityStyle: Record<string, string> = {
  high: "border-red-500/30 bg-red-500/10 text-red-400",
  medium: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  opportunity: "border-[#ccff00]/30 bg-[#ccff00]/10 text-[#ccff00]",
};

const severityLabel: Record<string, string> = {
  high: "High priority",
  medium: "Medium priority",
  opportunity: "Opportunity",
};

// ==========================================
// PAGE
// ==========================================
export function ExcelPortfolioClient() {
  const totalRows = excelWorkbooks.reduce(
    (sum, wb) => sum + wb.sheets.reduce((s, sh) => s + sh.rows, 0),
    0
  );
  const totalFormulas = new Set(
    excelWorkbooks.flatMap((wb) => wb.formulas.map((f) => f.formula))
  ).size;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-[#ccff00] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>

        {/* ===== HERO ===== */}
        <motion.section
          className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-12 relative overflow-hidden mb-6 md:mb-8"
          initial="initial"
          animate="animate"
          variants={fadeUp}>
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#ccff00]/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />

          <Badge className="w-fit mb-6 px-4 py-1.5 bg-[#1a1a1a] border-[#333] text-zinc-300 rounded-full text-sm">
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#ccff00] mr-2" />
            Excel Portfolio
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Spreadsheets that <span className="text-[#ccff00]">think.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 text-justify">
            Every workbook here goes through the same pipeline I use for real
            financial reporting: raw data in, cleaning and formulas in the
            middle, an executive-ready report out. No screenshots — every number
            on this page is computed straight from the actual{" "}
            <span className="text-zinc-200 font-medium">.xlsx</span> files,
            which you can also download below.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {excelWorkbooks.length}
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                Workbook{excelWorkbooks.length !== 1 ? "s" : ""}
              </div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {fmtNum(totalRows)}
              </div>
              <div className="text-xs text-zinc-500 mt-1">Rows analyzed</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {totalFormulas}+
              </div>
              <div className="text-xs text-zinc-500 mt-1">Formula types</div>
            </div>
          </div>
        </motion.section>

        {/* ===== WORKBOOKS ===== */}
        <div className="space-y-8">
          {excelWorkbooks.map((wb) => (
            <WorkbookCard
              key={wb.id}
              wb={wb}
            />
          ))}
        </div>

        {/* ===== FOOTER NOTE ===== */}
        <div className="mt-10 border border-dashed border-[#262626] rounded-2xl p-6 flex items-center gap-4 text-zinc-500 text-sm">
          <Sparkles className="w-5 h-5 text-[#ccff00] shrink-0" />
          More Excel case studies get added here over time — village fund
          reports, reconciliation sheets, and budgeting models join this same
          page as they&apos;re finished.
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="mt-12 py-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} Ari Hazamie. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a
              href="https://linkedin.com/in/arihazamie"
              className="text-zinc-500 hover:text-[#ccff00] transition-colors">
              LinkedIn
            </a>
            <a
              href="https://github.com/arihazamie"
              className="text-zinc-500 hover:text-[#ccff00] transition-colors">
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

// ==========================================
// WORKBOOK CARD
// ==========================================
function WorkbookCard({ wb }: { wb: ExcelWorkbook }) {
  const [activeTab, setActiveTab] = useState<TabKey>("preview");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    if (activeTab !== "preview") {
      setIframeLoaded(false);
      setIframeError(false);
    }
  }, [activeTab]);

  return (
    <motion.div
      className="bg-[#121212] border border-[#262626] rounded-[2rem] overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}>
      {/* formula-bar strip */}
      <div className="border-b border-[#262626] bg-[#0d0d0d] px-6 md:px-10 py-3 flex items-center gap-3 font-mono text-[11px] md:text-xs text-zinc-500 overflow-x-auto">
        <Sigma className="w-3.5 h-3.5 text-[#ccff00] shrink-0" />
        <span className="whitespace-nowrap">
          {wb.formulas[0]?.example.trim()}
        </span>
      </div>

      <div className="p-6 md:p-10">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-[#1a1a1a] border border-[#262626] rounded-xl text-[#ccff00]">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {wb.title}
              </h2>
            </div>
            <p className="text-zinc-400 max-w-xl">{wb.subtitle}</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
              <span className="px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-md font-medium text-zinc-400">
                {wb.period}
              </span>
              <span className="px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-md font-medium text-zinc-400">
                {wb.sheets.length} sheets
              </span>
              <span className="px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-md font-medium text-zinc-400">
                {wb.fileSizeLabel}
              </span>
            </div>
          </div>

          <a
            href={`/excel-files/${wb.fileName}`}
            download
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#ccff00] text-black font-bold rounded-xl hover:bg-[#b3e600] transition-colors shrink-0 self-start">
            <Download className="w-4 h-4" /> Download .xlsx
          </a>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-8 text-justify max-w-3xl">
          {wb.description}
        </p>

        {/* KPI grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {wb.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4">
              <div className="text-lg md:text-xl font-bold text-white truncate">
                {kpi.value}
              </div>
              <div className="text-xs text-zinc-500 mt-1">{kpi.label}</div>
              {kpi.sub && (
                <div className="text-[10px] text-zinc-600 mt-0.5">
                  {kpi.sub}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* sheet tabs */}
        <div
          className="flex gap-1.5 overflow-x-auto pb-px border-b border-[#262626] mb-6 -mx-1 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-lg border border-b-0 whitespace-nowrap transition-colors ${
                  active
                    ? "bg-[#1a1a1a] border-[#262626] text-[#ccff00]"
                    : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300"
                }`}>
                <Icon className="w-3.5 h-3.5" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* tab content */}
        <div className="bg-[#0d0d0d] border border-[#262626] rounded-2xl p-5 md:p-7">
          {activeTab === "preview" && (
            <div className="space-y-3">
              {/* Header bar */}
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="w-5 h-5 text-[#ccff00] shrink-0" />
                  <span className="text-sm font-medium text-zinc-300">
                    {wb.fileName}
                  </span>
                  <span className="px-2 py-0.5 bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-xs font-semibold rounded-md">
                    Live Preview
                  </span>
                </div>
                <a
                  href={`/excel-files/${wb.fileName}`}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#ccff00] text-black font-bold rounded-lg text-sm hover:bg-[#b3e600] transition-colors shrink-0 self-start sm:self-auto">
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>

              {/* Iframe wrapper with skeleton overlay */}
              <div className="relative rounded-xl overflow-hidden">
                {/* Loading skeleton — shown until iframe loads or errors */}
                {!iframeLoaded && !iframeError && (
                  <div
                    className="w-full rounded-xl border border-[#262626] bg-[#1a1a1a] animate-pulse flex flex-col items-center justify-center gap-4 text-zinc-600"
                    style={{
                      height: "calc(100vh - 280px)",
                      minHeight: "500px",
                    }}>
                    <FileSpreadsheet className="w-12 h-12 animate-bounce" />
                    <p className="text-sm">Loading Excel file...</p>
                    <p className="text-xs">
                      Powered by Microsoft Office Online
                    </p>
                  </div>
                )}

                {/* Error state */}
                {iframeError && (
                  <div
                    className="w-full rounded-xl border border-[#262626] bg-[#1a1a1a] flex flex-col items-center justify-center gap-4 text-zinc-500"
                    style={{
                      height: "calc(100vh - 280px)",
                      minHeight: "500px",
                    }}>
                    <AlertTriangle className="w-12 h-12 text-amber-400" />
                    <p className="text-sm font-medium text-white">
                      Preview tidak tersedia
                    </p>
                    <p className="text-xs text-center max-w-xs">
                      Microsoft Office Online tidak dapat memuat file. Klik
                      tombol Download di atas untuk membuka file secara lokal.
                    </p>
                  </div>
                )}

                {/* Iframe — always in DOM, opacity-driven visibility */}
                <iframe
                  src={`https://view.officeapps.live.com/op/embed.aspx?src=https://arihazamie.online/excel-files/${wb.fileName}`}
                  style={{
                    width: "100%",
                    height: "calc(100vh - 280px)",
                    minHeight: "500px",
                    opacity: iframeLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    border: "none",
                    display: iframeError ? "none" : "block",
                  }}
                  className="rounded-xl border border-[#262626]"
                  allow="fullscreen"
                  onLoad={() => setIframeLoaded(true)}
                  onError={() => setIframeError(true)}
                />
              </div>

              {/* Footer caption */}
              <p className="text-zinc-600 text-xs text-center mt-2">
                Viewing actual .xlsx file via Microsoft Office Online •{" "}
                <a
                  href={`/excel-files/${wb.fileName}`}
                  download
                  className="text-zinc-400 hover:text-[#ccff00] transition-colors">
                  Download file
                </a>
              </p>
            </div>
          )}
          {activeTab === "overview" && <OverviewTab wb={wb} />}
          {activeTab === "raw" && <RawDataTab wb={wb} />}
          {activeTab === "pivot" && <PivotTab wb={wb} />}
          {activeTab === "rankings" && <RankingsTab wb={wb} />}
          {activeTab === "formulas" && <FormulasTab wb={wb} />}
          {activeTab === "insights" && <InsightsTab wb={wb} />}
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// TABS
// ==========================================
function OverviewTab({ wb }: { wb: ExcelWorkbook }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
        <Database className="w-4 h-4 text-[#ccff00]" /> Sheet structure
      </h3>
      <div className="space-y-2 mb-8">
        {wb.sheets.map((sh) => (
          <div
            key={sh.name}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 bg-[#121212] border border-[#262626] rounded-lg">
            <span className="font-mono text-xs text-[#ccff00] sm:w-36 shrink-0">
              {sh.name}
            </span>
            <span className="text-xs text-zinc-500 sm:w-28 shrink-0">
              {fmtNum(sh.rows)} × {sh.cols}
            </span>
            <span className="text-sm text-zinc-400">{sh.purpose}</span>
          </div>
        ))}
      </div>

      <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
        <Crown className="w-4 h-4 text-[#ccff00]" /> Top performers
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {wb.topPerformers.map((tp) => (
          <div
            key={tp.category}
            className="p-4 bg-[#121212] border border-[#262626] rounded-xl">
            <div className="text-xs text-zinc-500 mb-1">{tp.category}</div>
            <div className="text-white font-bold mb-1">{tp.winner}</div>
            <div className="text-xs text-zinc-500">{tp.metric}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RawDataTab({ wb }: { wb: ExcelWorkbook }) {
  return (
    <div>
      <p className="text-xs text-zinc-500 mb-4">
        Sample rows from{" "}
        <span className="font-mono text-zinc-400">RAW_DATA</span> — showing 6 of{" "}
        {fmtNum(wb.sheets[0]?.rows ?? 0)} transactions.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#262626]">
              {wb.previewColumns.map((c) => (
                <th
                  key={c}
                  className="text-left font-mono font-medium text-[#ccff00] py-2 pr-4 whitespace-nowrap">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {wb.previewRows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-[#1a1a1a] hover:bg-[#121212] transition-colors">
                {wb.previewColumns.map((c) => (
                  <td
                    key={c}
                    className="py-2 pr-4 text-zinc-400 whitespace-nowrap">
                    {row[c]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PivotTab({ wb }: { wb: ExcelWorkbook }) {
  const max = Math.max(...wb.pivot.rows.flatMap((r) => r.values));
  const cellBg = (v: number) => {
    const intensity = 0.06 + (v / max) * 0.34;
    return `rgba(204, 255, 0, ${intensity.toFixed(3)})`;
  };

  return (
    <div>
      <p className="text-xs text-zinc-500 mb-4">
        Revenue cross-tabulated by Region × Product — colour scale mirrors
        Excel&apos;s conditional formatting; darker means higher revenue.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse min-w-[640px]">
          <thead>
            <tr>
              <th className="text-left font-mono text-zinc-500 py-2 pr-4 border-b border-[#262626]">
                {wb.pivot.rowHeader}
              </th>
              {wb.pivot.columns.map((c) => (
                <th
                  key={c}
                  className="text-right font-mono text-zinc-400 py-2 px-3 border-b border-[#262626]">
                  {c}
                </th>
              ))}
              <th className="text-right font-mono text-[#ccff00] py-2 pl-3 border-b border-[#262626]">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {wb.pivot.rows.map((row) => (
              <tr key={row.label}>
                <td className="py-2 pr-4 font-medium text-zinc-300 whitespace-nowrap">
                  {row.label}
                </td>
                {row.values.map((v, i) => (
                  <td
                    key={i}
                    className="text-right py-2 px-3 text-zinc-300 font-mono"
                    style={{ backgroundColor: cellBg(v) }}>
                    {fmtNum(v)}
                  </td>
                ))}
                <td className="text-right py-2 pl-3 font-mono font-bold text-white">
                  {fmtNum(row.total)}
                </td>
              </tr>
            ))}
            <tr className="border-t border-[#262626]">
              <td className="py-2 pr-4 font-bold text-[#ccff00]">
                Grand Total
              </td>
              {wb.pivot.grandTotals.map((v, i) => (
                <td
                  key={i}
                  className="text-right py-2 px-3 font-mono text-zinc-400">
                  {fmtNum(v)}
                </td>
              ))}
              <td className="text-right py-2 pl-3 font-mono font-bold text-[#ccff00]">
                {fmtNum(wb.pivot.grandTotalSum)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RankingsTab({ wb }: { wb: ExcelWorkbook }) {
  const Table = ({ title, rows }: { title: string; rows: RankedRow[] }) => (
    <div className="mb-8 last:mb-0">
      <h3 className="text-sm font-bold text-white mb-3">{title}</h3>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 bg-[#121212] border border-[#262626] rounded-lg text-sm">
            <span className="font-mono text-[#ccff00] w-8 shrink-0">
              {r.rank}
            </span>
            <span className="font-medium text-white w-32 shrink-0">
              {r.name}
            </span>
            <span className="text-zinc-400 w-28 shrink-0">{r.revenue}</span>
            <span className="text-zinc-500 w-20 shrink-0">
              {r.orders} orders
            </span>
            <span className="text-zinc-500 w-16 shrink-0">
              {r.returnRate} ret.
            </span>
            <span className="text-zinc-500 text-xs">{r.note}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Table
        title="Product performance"
        rows={wb.productRanking}
      />
      <Table
        title="Region performance"
        rows={wb.regionRanking}
      />
    </div>
  );
}

function FormulasTab({ wb }: { wb: ExcelWorkbook }) {
  return (
    <div className="space-y-2">
      {wb.formulas.map((f) => (
        <div
          key={f.formula}
          className="p-4 bg-[#121212] border border-[#262626] rounded-lg">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="px-2.5 py-1 bg-[#1a1a1a] border border-[#ccff00]/30 text-[#ccff00] font-mono text-xs rounded-md">
              {f.formula}
            </span>
            <span className="text-xs text-zinc-600">in {f.sheet}</span>
          </div>
          <p className="text-sm text-zinc-400 mb-2">{f.purpose}</p>
          <code className="block text-xs font-mono text-zinc-500 bg-[#0a0a0a] rounded-md px-3 py-2 overflow-x-auto">
            {f.example.trim()}
          </code>
        </div>
      ))}
    </div>
  );
}

function InsightsTab({ wb }: { wb: ExcelWorkbook }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-[#ccff00]" /> Red flags &amp;
        recommendations
      </h3>
      <div className="space-y-2 mb-8">
        {wb.redFlags.map((flag) => (
          <div
            key={flag.issue}
            className={`p-4 rounded-lg border ${severityStyle[flag.severity]}`}>
            <div className="flex items-center gap-2 mb-1.5">
              {flag.severity === "opportunity" ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : (
                <AlertTriangle className="w-3.5 h-3.5" />
              )}
              <span className="text-xs font-bold uppercase tracking-wide">
                {severityLabel[flag.severity]}
              </span>
            </div>
            <p className="text-sm font-medium text-zinc-200 mb-1">
              {flag.issue} —{" "}
              <span className="font-normal text-zinc-400">{flag.data}</span>
            </p>
            <p className="text-xs text-zinc-500 flex items-start gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              {flag.recommendation}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-sm font-bold text-white mb-3">Executive summary</h3>
      <p className="text-sm text-zinc-400 leading-relaxed text-justify bg-[#121212] border border-[#262626] rounded-lg p-4">
        {wb.executiveSummary}
      </p>
    </div>
  );
}
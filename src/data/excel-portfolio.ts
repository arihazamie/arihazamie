// ============================================================================
// EXCEL PORTFOLIO — DATA CATALOG
// ============================================================================
// This file powers /excel. Every workbook on that page comes from the
// `excelWorkbooks` array below — there is no hardcoded markup per file.
//
// HOW TO ADD A NEW EXCEL FILE LATER:
//   1. Drop the .xlsx into  public/excel-files/your-file.xlsx
//   2. Copy one entry below, change the values to match your workbook
//      (open the file, fill in real numbers — don't guess).
//   3. Push the new object into the `excelWorkbooks` array.
// That's it — the page picks it up automatically, including the download
// button, KPI cards, sheet tabs, and table previews.
// ============================================================================

export type ExcelKpi = {
  label: string;
  value: string;
  sub?: string;
};

export type TopPerformer = {
  category: string;
  winner: string;
  metric: string;
};

export type SheetMeta = {
  name: string;
  rows: number;
  cols: number;
  purpose: string;
};

export type PreviewRow = Record<string, string | number>;

export type PivotTable = {
  rowHeader: string;
  columns: string[];
  rows: { label: string; values: number[]; total: number }[];
  grandTotals: number[];
  grandTotalSum: number;
};

export type FormulaEntry = {
  formula: string;
  sheet: string;
  purpose: string;
  example: string;
};

export type RankedRow = {
  rank: string;
  name: string;
  revenue: string;
  orders: number;
  returnRate: string;
  note: string;
};

export type RedFlag = {
  severity: "high" | "medium" | "opportunity";
  issue: string;
  data: string;
  recommendation: string;
};

export type ExcelWorkbook = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  fileName: string; // lives under /public/excel-files/
  fileSizeLabel: string;
  description: string;
  sheets: SheetMeta[];
  kpis: ExcelKpi[];
  topPerformers: TopPerformer[];
  previewColumns: string[];
  previewRows: PreviewRow[];
  pivot: PivotTable;
  productRanking: RankedRow[];
  regionRanking: RankedRow[];
  formulas: FormulaEntry[];
  redFlags: RedFlag[];
  executiveSummary: string;
};

export const excelWorkbooks: ExcelWorkbook[] = [
  {
    id: "product-sales-region",
    title: "Product Sales Region",
    subtitle: "End-to-end sales analysis workbook — raw data to executive report",
    period: "Jan 2023 – Jun 2025",
    fileName: "Product-Sales-Region.xlsx",
    fileSizeLabel: "664 KB",
    description:
      "A 7-sheet sales analysis workbook built from 1,500 raw transactions: cleaning and feature engineering, a reference lookup table, a pivot analysis, a KPI dashboard, and a written executive report with prioritized business recommendations.",
    sheets: [
      { name: "RAW_DATA", rows: 1500, cols: 19, purpose: "Untouched transaction export — the source of truth" },
      { name: "CLEAN_DATA", rows: 1500, cols: 29, purpose: "Cleaned + 8 engineered columns (Year, Quarter, Revenue_Net, Delivery_Days, Discount_Tier...)" },
      { name: "REF_TABLE", rows: 22, cols: 15, purpose: "Live lookup table driven by SUMIF / COUNTIF / INDEX-MATCH" },
      { name: "PIVOT_ANALYSIS", rows: 87, cols: 13, purpose: "Revenue cross-tabulated by Region × Product" },
      { name: "KPI_SUMMARY", rows: 18, cols: 12, purpose: "SUMPRODUCT / SUMIFS / AVERAGEIF KPI block + yearly comparison" },
      { name: "DASHBOARD", rows: 31, cols: 16, purpose: "Visual scorecard layout for the headline metrics" },
      { name: "SUMMARY", rows: 102, cols: 10, purpose: "Formula dictionary + written executive insight report" },
    ],
    kpis: [
      { label: "Total Revenue", value: "Rp4.379.992", sub: "Jan 2023 – Jun 2025" },
      { label: "Total Orders", value: "1.500", sub: "transactions" },
      { label: "Avg Order Value", value: "Rp2.920", sub: "per transaction" },
      { label: "Total Qty Sold", value: "15.616", sub: "units" },
      { label: "Return Rate", value: "24.8%", sub: "372 of 1,500 orders" },
      { label: "Avg Delivery", value: "6.0 days", sub: "order to delivery" },
    ],
    topPerformers: [
      { category: "Top Product", winner: "Tablet", metric: "Rp684.539 revenue, 240 orders" },
      { category: "Top Region", winner: "North", metric: "Rp967.958 revenue, lowest return rate (23%)" },
      { category: "Top Salesperson", winner: "Bob", metric: "Rp796.781 revenue, 243 orders" },
      { category: "Top Payment Method", winner: "Online", metric: "Rp971.115 revenue, 323 orders" },
      { category: "Best Store", winner: "Store D", metric: "Rp1.205.526 revenue, 400 orders" },
      { category: "Highest Return Product", winner: "Chair", metric: "28.2% return rate" },
    ],
    previewColumns: ["Date", "Region", "Product", "Qty", "Unit Price", "Store", "Customer", "Salesperson", "Total", "Payment"],
    previewRows: [
      { Date: "2023-02-23", Region: "East", Product: "Laptop", Qty: 14, "Unit Price": "163.60", Store: "Store B", Customer: "Wholesale", Salesperson: "Eva", Total: "2,290.40", Payment: "Online" },
      { Date: "2024-12-19", Region: "South", Product: "Phone", Qty: 1, "Unit Price": "544.01", Store: "Store A", Customer: "Retail", Salesperson: "Alice", Total: "544.01", Payment: "Gift Card" },
      { Date: "2023-05-10", Region: "North", Product: "Desk", Qty: 14, "Unit Price": "346.18", Store: "Store B", Customer: "Wholesale", Salesperson: "Alice", Total: "4,361.87", Payment: "Online" },
      { Date: "2025-02-26", Region: "Central", Product: "Chair", Qty: 18, "Unit Price": "384.82", Store: "Store A", Customer: "Wholesale", Salesperson: "Frank", Total: "5,887.75", Payment: "Gift Card" },
      { Date: "2023-06-24", Region: "East", Product: "Desk", Qty: 18, "Unit Price": "237.76", Store: "Store C", Customer: "Retail", Salesperson: "Carlos", Total: "4,279.68", Payment: "Online" },
      { Date: "2024-02-20", Region: "Central", Product: "Monitor", Qty: 2, "Unit Price": "385.09", Store: "Store D", Customer: "Wholesale", Salesperson: "Diana", Total: "654.65", Payment: "Credit Card" },
    ],
    pivot: {
      rowHeader: "Region \\ Product",
      columns: ["Chair", "Desk", "Laptop", "Monitor", "Phone", "Printer", "Tablet"],
      rows: [
        { label: "Central", values: [113029.44, 110743.93, 139219.58, 107231.90, 72442.83, 139174.87, 165311.14], total: 847153.68 },
        { label: "East", values: [107210.19, 118254.66, 135461.41, 121548.13, 145231.20, 149017.84, 106910.27], total: 883633.72 },
        { label: "North", values: [136982.53, 170637.98, 122643.57, 172222.04, 79577.45, 128877.23, 157017.18], total: 967957.98 },
        { label: "South", values: [150978.04, 68565.67, 157696.02, 101689.45, 121325.70, 122090.87, 105422.45], total: 827768.19 },
        { label: "West", values: [114389.27, 87064.42, 129396.67, 148937.88, 78585.67, 145226.61, 149878.34], total: 853478.86 },
      ],
      grandTotals: [622589.48, 555266.66, 684417.24, 651629.39, 497162.85, 684387.42, 684539.39],
      grandTotalSum: 4379992.43,
    },
    productRanking: [
      { rank: "#1", name: "Tablet", revenue: "Rp684.539", orders: 240, returnRate: "24%", note: "Highest revenue — narrow lead over Laptop" },
      { rank: "#2", name: "Laptop", revenue: "Rp684.417", orders: 226, returnRate: "27%", note: "Only Rp122 behind Tablet — extremely close" },
      { rank: "#3", name: "Printer", revenue: "Rp684.387", orders: 211, returnRate: "22%", note: "Top 3 in a near-tie, lowest return rate of the three" },
      { rank: "#4", name: "Monitor", revenue: "Rp651.629", orders: 212, returnRate: "26%", note: "Solid mid-table revenue" },
      { rank: "#5", name: "Chair", revenue: "Rp622.589", orders: 209, returnRate: "28%", note: "Highest return rate — most frequently sent back" },
      { rank: "#6", name: "Desk", revenue: "Rp555.267", orders: 207, returnRate: "22%", note: "Tied for lowest return rate — satisfied buyers" },
      { rank: "#7", name: "Phone", revenue: "Rp497.163", orders: 195, returnRate: "23%", note: "Lowest revenue — needs a dedicated promo push" },
    ],
    regionRanking: [
      { rank: "#1", name: "North (Ryan)", revenue: "Rp967.958", orders: 309, returnRate: "23%", note: "Highest revenue and lowest return rate — the benchmark" },
      { rank: "#2", name: "East (Eric)", revenue: "Rp883.634", orders: 311, returnRate: "26%", note: "Most orders of any region, 311 transactions" },
      { rank: "#3", name: "West (Wendy)", revenue: "Rp853.479", orders: 284, returnRate: "26%", note: "Solid third place" },
      { rank: "#4", name: "Central (Cameron)", revenue: "Rp847.154", orders: 301, returnRate: "23%", note: "Low return rate — consistent performance" },
      { rank: "#5", name: "South (Sophie)", revenue: "Rp827.768", orders: 295, returnRate: "26%", note: "Lowest revenue — needs a growth strategy" },
    ],
    formulas: [
      { formula: "SUMPRODUCT", sheet: "KPI_SUMMARY", purpose: "Total a column without an array formula", example: "=SUMPRODUCT(CLEAN_DATA!J4:J1503)" },
      { formula: "SUMIFS", sheet: "KPI_SUMMARY", purpose: "Sum with 2+ conditions", example: "=SUMIFS(CLEAN_DATA!J:J;CLEAN_DATA!S:S;2023)" },
      { formula: "COUNTIFS", sheet: "REF_TABLE", purpose: "Count rows matching 2+ conditions", example: "=COUNTIFS(CLEAN_DATA!B:B;A17;CLEAN_DATA!M:M;1)" },
      { formula: "AVERAGEIF", sheet: "KPI_SUMMARY", purpose: "Average filtered by one condition", example: "=AVERAGEIF(CLEAN_DATA!X:X;\">\"&0)" },
      { formula: "INDEX / MATCH", sheet: "REF_TABLE", purpose: "Look up a value by position instead of VLOOKUP", example: "=INDEX(CLEAN_DATA!R:R;MATCH(A17;CLEAN_DATA!B:B;0))" },
      { formula: "IFERROR", sheet: "KPI_SUMMARY", purpose: "Catch errors and substitute a fallback value", example: "=IFERROR(I5/H5;0)" },
      { formula: "IFS", sheet: "CLEAN_DATA", purpose: "Test multiple conditions in one formula", example: "=IFS(H4=0;\"No Discount\";H4=0.05;\"Low\")" },
      { formula: "CHOOSE + ROUNDUP", sheet: "CLEAN_DATA", purpose: "Derive the fiscal quarter from a date", example: "=CHOOSE(ROUNDUP(MONTH(A4)/3;0);\"Q1\";\"Q2\";\"Q3\";\"Q4\")" },
    ],
    redFlags: [
      { severity: "high", issue: "Return rate is high", data: "24.8% — 372 of 1,500 orders", recommendation: "Run a mandatory post-return survey to identify root causes" },
      { severity: "high", issue: "October 2023 revenue crash", data: "Rp78.446 vs a Rp208.549 high in March 2023", recommendation: "Investigate: competitor activity, stockouts, or seasonality" },
      { severity: "medium", issue: "Chair has the highest return rate", data: "28.2% of Chair orders", recommendation: "Review the Chair supplier and product quality" },
      { severity: "medium", issue: "Carlos has the highest return rate among salespeople", data: "28% of Carlos's orders", recommendation: "Coaching on closing technique and setting expectations" },
      { severity: "opportunity", issue: "Store D significantly outperforms", data: "#1 by a wide margin, 400 orders", recommendation: "Document and replicate Store D's playbook across other stores" },
      { severity: "opportunity", issue: "North region is the benchmark", data: "Highest revenue + lowest return rate (23%)", recommendation: "Study Ryan's regional process and roll it out elsewhere" },
    ],
    executiveSummary:
      "Dalam periode Jan 2023 – Jun 2025, bisnis menghasilkan total revenue Rp4.379.992 dari 1.500 transaksi dengan rata-rata order value Rp2.920. Region North menjadi kontributor terbesar dengan return rate terendah (23%), diikuti East dan West. Produk Tablet, Laptop, dan Printer bersaing sangat ketat di tiga besar dengan selisih revenue kurang dari Rp200. Concern utama adalah return rate 24,8% — hampir 1 dari 4 transaksi dikembalikan, dengan Chair (28%) dan salesperson Carlos (28%) paling perlu perhatian. Oktober 2023 mencatat anomali penurunan revenue drastis yang perlu diinvestigasi lebih lanjut.",
  },
];

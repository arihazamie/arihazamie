import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance & Accounting | Ari Hazamie",
  description:
    "Pemahaman mendalam Finance & Accounting, Perpajakan Indonesia, Excel, dan Accurate Desktop — Ari Hazamie.",
  alternates: {
    canonical: "/finance",
  },
  openGraph: {
    title: "Finance & Accounting | Ari Hazamie",
    description:
      "Pemahaman mendalam Finance & Accounting, Perpajakan Indonesia, Excel, dan Accurate Desktop — didukung pengalaman nyata mengelola keuangan desa Rp100–250jt/triwulan menggunakan Siskeudes.",
    url: "/finance",
  },
};

// ─── Tiny helpers ─────────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs bg-[#1a1a1a] border border-[#2a2a2a] text-neutral-400 px-2.5 py-1 rounded-md mr-1.5 mb-1.5">
      {children}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs text-emerald-500 border border-emerald-500/25 bg-emerald-500/5 px-2.5 py-1 rounded-md mr-1.5 mb-1.5">
      {children}
    </span>
  );
}

function Rule() {
  return <hr className="border-0 border-t border-[#1f1f1f] my-12" />;
}

function Formula({ children }: { children: string }) {
  return (
    <div className="mt-3 font-mono text-xs text-emerald-400 bg-[#0f1a0f] border border-emerald-900/40 rounded-lg px-4 py-3 whitespace-pre-wrap leading-relaxed">
      {children}
    </div>
  );
}

function Row({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#1a1a1a] last:border-0 text-sm">
      <span className="text-neutral-500">{label}</span>
      <span
        className={
          accent ? "text-emerald-400 font-medium" : "text-neutral-300"
        }>
        {value}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-100">
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-28">
        {/* ── Back ── */}
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-12 inline-block">
          ← Back
        </Link>

        {/* ── Hero ── */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-neutral-500">
              Finance & Accounting Expertise
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-4 leading-snug">
            Paham konsepnya,
            <br />
            tahu cara kerjanya.
          </h1>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Penjelasan Finance & Accounting, perpajakan Indonesia, Excel, dan
            Accurate Desktop — lengkap dengan contoh nyata penggunaan di
            industri.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
            FINANCE & ACCOUNTING
        ══════════════════════════════════════════════════ */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-1">
            Finance & Accounting
          </h2>
          <p className="text-neutral-500 text-sm mb-8">
            Siklus akuntansi penuh — dari pencatatan transaksi hingga laporan
            keuangan.
          </p>

          {/* Debit & Kredit */}
          <div className="mb-10">
            <h3 className="text-base font-semibold text-white mb-1">
              Debit & Kredit
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Setiap transaksi dicatat di dua sisi:{" "}
              <span className="text-white">Debit</span> dan{" "}
              <span className="text-white">Kredit</span> dengan jumlah yang
              selalu sama. Artinya bukan "masuk" atau "keluar" — tapi bergantung
              pada jenis akun.
            </p>

            <div className="border border-[#1f1f1f] rounded-xl overflow-hidden mb-5">
              <div className="grid grid-cols-4 bg-[#111] text-xs text-neutral-500 px-4 py-2.5 border-b border-[#1f1f1f]">
                <span>Tipe Akun</span>
                <span className="text-center text-sky-400">Debit</span>
                <span className="text-center text-emerald-400">Kredit</span>
                <span className="text-right">Contoh</span>
              </div>
              {(
                [
                  ["Aset", "↑ Naik", "↓ Turun", "Kas, Bank, Piutang"],
                  ["Beban", "↑ Naik", "↓ Turun", "Gaji, Sewa, HPP"],
                  ["Liabilitas", "↓ Turun", "↑ Naik", "Hutang Usaha"],
                  ["Ekuitas", "↓ Turun", "↑ Naik", "Modal, Laba Ditahan"],
                  ["Pendapatan", "↓ Turun", "↑ Naik", "Penjualan, Jasa"],
                ] as [string, string, string, string][]
              ).map(([type, dr, cr, ex], i) => (
                <div
                  key={type}
                  className={`grid grid-cols-4 px-4 py-3 text-sm border-b border-[#1a1a1a] last:border-0 ${
                    i % 2 === 0 ? "bg-[#0d0d0d]" : ""
                  }`}>
                  <span className="text-neutral-300 font-medium">{type}</span>
                  <span
                    className={`text-center font-mono text-xs ${
                      dr.includes("Naik") ? "text-sky-400" : "text-neutral-600"
                    }`}>
                    {dr}
                  </span>
                  <span
                    className={`text-center font-mono text-xs ${
                      cr.includes("Naik")
                        ? "text-emerald-400"
                        : "text-neutral-600"
                    }`}>
                    {cr}
                  </span>
                  <span className="text-right text-neutral-500 text-xs">
                    {ex}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-neutral-500 text-xs mb-3">
              Contoh pencatatan nyata:
            </p>
            <div className="space-y-3">
              {(
                [
                  {
                    tx: "Terima pembayaran klien Rp 5.000.000",
                    dr: "Bank",
                    drAmt: "5.000.000",
                    cr: "Pendapatan Jasa",
                    crAmt: "5.000.000",
                    note: "Bank (aset) naik → Debit. Pendapatan naik → Kredit.",
                  },
                  {
                    tx: "Bayar gaji karyawan Rp 3.500.000",
                    dr: "Beban Gaji",
                    drAmt: "3.500.000",
                    cr: "Bank",
                    crAmt: "3.500.000",
                    note: "Beban naik → Debit. Bank (aset) turun → Kredit.",
                  },
                  {
                    tx: "Beli perlengkapan tunai Rp 800.000",
                    dr: "Beban Operasional",
                    drAmt: "800.000",
                    cr: "Kas",
                    crAmt: "800.000",
                    note: "Beban naik → Debit. Kas (aset) turun → Kredit.",
                  },
                ] as {
                  tx: string;
                  dr: string;
                  drAmt: string;
                  cr: string;
                  crAmt: string;
                  note: string;
                }[]
              ).map((j) => (
                <div
                  key={j.tx}
                  className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl px-5 py-4">
                  <p className="text-neutral-500 text-xs mb-3">{j.tx}</p>
                  <div className="font-mono text-xs space-y-1.5 mb-3">
                    <div className="flex justify-between">
                      <span>
                        <span className="text-sky-400 mr-3">Dr</span>
                        <span className="text-neutral-200">{j.dr}</span>
                      </span>
                      <span className="text-neutral-200">Rp {j.drAmt}</span>
                    </div>
                    <div className="flex justify-between pl-5">
                      <span>
                        <span className="text-emerald-400 mr-3">Cr</span>
                        <span className="text-neutral-400">{j.cr}</span>
                      </span>
                      <span className="text-neutral-400">Rp {j.crAmt}</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-xs pt-3 border-t border-[#1a1a1a]">
                    {j.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Laporan Keuangan */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-white mb-1">
              3 Laporan Keuangan Utama
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Output akhir dari seluruh proses akuntansi. Wajib dipahami di
              setiap perusahaan.
            </p>
            <div className="space-y-4">
              {(
                [
                  {
                    name: "Neraca",
                    en: "Balance Sheet",
                    desc: "Snapshot kondisi keuangan di satu titik waktu. Menjawab: apa yang dimiliki perusahaan (Aset) vs. apa yang dihutang + modal pemilik.",
                    formula: "Aset = Liabilitas + Ekuitas",
                  },
                  {
                    name: "Laba Rugi",
                    en: "Income Statement",
                    desc: "Rekap pendapatan & beban selama satu periode. Hasilnya: apakah perusahaan untung atau rugi dalam periode tersebut.",
                    formula: "Laba Bersih = Total Pendapatan − Total Beban",
                  },
                  {
                    name: "Arus Kas",
                    en: "Cash Flow Statement",
                    desc: "Lacak pergerakan kas nyata. Penting karena perusahaan bisa terlihat laba di L/R tapi kehabisan kas di rekening.",
                    formula: "Arus Kas = Operasional + Investasi + Pendanaan",
                  },
                ] as {
                  name: string;
                  en: string;
                  desc: string;
                  formula: string;
                }[]
              ).map((r) => (
                <div
                  key={r.name}
                  className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl px-5 py-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-semibold text-white text-sm">
                      {r.name}
                    </span>
                    <span className="text-neutral-600 text-xs">{r.en}</span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-1">
                    {r.desc}
                  </p>
                  <Formula>{r.formula}</Formula>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ══════════════════════════════════════════════════
            PERPAJAKAN INDONESIA
        ══════════════════════════════════════════════════ */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-1">
            Perpajakan Indonesia
          </h2>
          <p className="text-neutral-500 text-sm mb-8">
            Tiga pajak paling umum di perusahaan Indonesia — kapan muncul, siapa
            menanggung, cara hitungnya.
          </p>

          <div className="space-y-8">
            {(
              [
                {
                  code: "PPh 21",
                  full: "Pajak Penghasilan Pasal 21",
                  when: "Setiap kali perusahaan membayar gaji, upah, honorarium, atau tunjangan kepada karyawan maupun bukan karyawan (konsultan, freelancer).",
                  who: "Dipotong dari penghasilan penerima oleh perusahaan sebagai pemotong pajak. Karyawan yang menanggung, perusahaan yang setor ke negara.",
                  example:
                    "Gaji Rp 8 jt/bulan → hitung PKP → potong PPh 21 → karyawan terima take-home pay.",
                  formula:
                    "PKP = Gaji Setahun − Biaya Jabatan (maks Rp6 jt) − PTKP\nPPh 21 = PKP × tarif progresif (5% – 35%)",
                  deadline: ["Setor: tgl 10", "Lapor SPT Masa: tgl 20"],
                },
                {
                  code: "PPh 23",
                  full: "Pajak Penghasilan Pasal 23",
                  when: "Saat perusahaan membayar jasa teknik, konsultan, sewa peralatan (non-tanah/bangunan), dividen, bunga, atau royalti kepada pihak lain.",
                  who: "Dipotong oleh pihak pembayar. Vendor/penerima jasa yang menanggung, perusahaan yang setor dan buat Bukti Potong PPh 23.",
                  example:
                    "Bayar desainer Rp 5 jt → potong PPh 23 2% (Rp 100rb) → transfer ke desainer Rp 4,9 jt → setor Rp 100rb ke DJP.",
                  formula:
                    "PPh 23 = Bruto × 2%   (jasa/sewa)\nPPh 23 = Bruto × 15%  (dividen / bunga / royalti)",
                  deadline: ["Setor: tgl 10", "Lapor SPT Masa: tgl 20"],
                },
                {
                  code: "PPN 11%",
                  full: "Pajak Pertambahan Nilai",
                  when: "Setiap transaksi jual-beli Barang Kena Pajak (BKP) atau Jasa Kena Pajak (JKP) oleh PKP. Berlaku saat menjual maupun saat membeli.",
                  who: "Konsumen akhir yang menanggung. Perusahaan memungut (PPN Keluaran), mengkreditkan saat beli (PPN Masukan), lalu setor selisihnya.",
                  example:
                    "Jual produk DPP Rp 10 jt → tagih klien Rp 11,1 jt (inc. PPN) → terbitkan Faktur Pajak → setor PPN ke DJP.",
                  formula:
                    "PPN = DPP × 11%\nKurang/Lebih Bayar = PPN Keluaran − PPN Masukan",
                  deadline: [
                    "Faktur Pajak: akhir bulan",
                    "Lapor SPT Masa PPN: akhir bulan +1",
                  ],
                },
              ] as {
                code: string;
                full: string;
                when: string;
                who: string;
                example: string;
                formula: string;
                deadline: string[];
              }[]
            ).map((tax) => (
              <div key={tax.code}>
                <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                  <h3 className="text-base font-semibold text-white">
                    {tax.code}
                  </h3>
                  <span className="text-neutral-500 text-xs">— {tax.full}</span>
                </div>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {tax.deadline.map((d) => (
                    <Chip key={d}>{d}</Chip>
                  ))}
                </div>
                <div className="space-y-2 text-sm text-neutral-400 leading-relaxed mb-3">
                  <p>
                    <span className="text-neutral-300 font-medium">
                      Kapan muncul?{" "}
                    </span>
                    {tax.when}
                  </p>
                  <p>
                    <span className="text-neutral-300 font-medium">
                      Siapa menanggung?{" "}
                    </span>
                    {tax.who}
                  </p>
                  <p>
                    <span className="text-neutral-300 font-medium">
                      Contoh:{" "}
                    </span>
                    {tax.example}
                  </p>
                </div>
                <Formula>{tax.formula}</Formula>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        {/* ══════════════════════════════════════════════════
            MICROSOFT EXCEL
        ══════════════════════════════════════════════════ */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-1">
            Microsoft Excel
          </h2>
          <p className="text-neutral-500 text-sm mb-8">
            Fungsi esensial yang dipakai sehari-hari di Finance & Accounting
            industri Indonesia.
          </p>

          <div className="space-y-8">
            {(
              [
                {
                  fn: "VLOOKUP",
                  syntax: "=VLOOKUP(nilai_cari, tabel, kolom_ke, 0)",
                  what: "Mencari nilai di kolom paling kiri sebuah tabel, lalu mengembalikan nilai dari kolom lain di baris yang sama.",
                  when: "Tarik harga dari master price list ke invoice, ambil nama vendor dari database ke laporan AP, cocokkan kode akun ke jurnal.",
                  example:
                    "=VLOOKUP(A2, MasterHarga!A:C, 3, 0)\n→ Cari kode barang (A2) di sheet MasterHarga, ambil kolom ke-3 yaitu Harga.",
                },
                {
                  fn: "Pivot Table",
                  syntax: "Insert → Pivot Table → pilih range data",
                  what: "Merangkum ribuan baris transaksi menjadi laporan ringkas dengan drag-and-drop — tanpa satu pun formula.",
                  when: "Rekapitulasi pengeluaran per departemen dari 5.000+ baris, laporan penjualan per produk per bulan, ringkasan AR/AP per customer.",
                  example:
                    "Row: Departemen | Column: Bulan | Value: Sum(Jumlah)\n→ 5.000 baris transaksi → laporan rekapitulasi siap dalam 30 detik.",
                },
                {
                  fn: "SUMIF / SUMIFS",
                  syntax:
                    "=SUMIFS(range_jumlah, range_kriteria1, kriteria1, ...)",
                  what: "Menjumlahkan nilai hanya jika memenuhi satu syarat (SUMIF) atau beberapa syarat sekaligus (SUMIFS).",
                  when: "Total pengeluaran divisi Marketing bulan Januari saja, jumlah piutang dari satu customer tertentu, total beban per kode akun.",
                  example:
                    '=SUMIFS(C:C, A:A, "Marketing", B:B, "Jan-2026")\n→ Total kolom C hanya jika A = "Marketing" DAN B = "Jan-2026".',
                },
                {
                  fn: "IF / IFS",
                  syntax: "=IF(kondisi, nilai_jika_benar, nilai_jika_salah)",
                  what: "Logika kondisional otomatis — jika syarat terpenuhi tampilkan A, jika tidak tampilkan B.",
                  when: "Flag transaksi melebihi batas anggaran, klasifikasi piutang (Lunas/Jatuh Tempo), tentukan tarif pajak berdasarkan jenis penghasilan.",
                  example:
                    '=IF(D2 > BatasAnggaran, "⚠ OVER BUDGET", "OK")\n→ Monitoring budget bulanan otomatis per baris transaksi.',
                },
                {
                  fn: "INDEX + MATCH",
                  syntax:
                    "=INDEX(kolom_hasil, MATCH(nilai_cari, kolom_cari, 0))",
                  what: "Lebih fleksibel dari VLOOKUP — bisa mencari ke kiri, tidak bergantung posisi kolom, lebih andal di tabel besar.",
                  when: "Rekonsiliasi data ERP vs. laporan bank, lookup data di tabel besar tanpa batasan arah pencarian VLOOKUP.",
                  example:
                    "=INDEX(B:B, MATCH(E2, A:A, 0))\n→ Ambil nama vendor (kolom B) berdasarkan kode (E2) meski kolom nama ada di kiri.",
                },
              ] as {
                fn: string;
                syntax: string;
                what: string;
                when: string;
                example: string;
              }[]
            ).map((fn) => (
              <div key={fn.fn}>
                <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                  <h3 className="text-base font-semibold text-white">
                    {fn.fn}
                  </h3>
                  <code className="font-mono text-xs text-neutral-500">
                    {fn.syntax}
                  </code>
                </div>
                <div className="space-y-2 text-sm text-neutral-400 leading-relaxed mb-2">
                  <p>
                    <span className="text-neutral-300 font-medium">
                      Fungsi:{" "}
                    </span>
                    {fn.what}
                  </p>
                  <p>
                    <span className="text-neutral-300 font-medium">
                      Dipakai saat:{" "}
                    </span>
                    {fn.when}
                  </p>
                </div>
                <Formula>{fn.example}</Formula>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        {/* ══════════════════════════════════════════════════
            ACCURATE DESKTOP
        ══════════════════════════════════════════════════ */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-1">
            Accurate Desktop
          </h2>
          <p className="text-neutral-500 text-sm mb-2">
            ERP akuntansi terpopuler di Indonesia — dipakai lebih dari 300.000
            perusahaan, dari UMKM hingga menengah.
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed mb-8">
            Accurate mengintegrasikan seluruh siklus keuangan dalam satu sistem:
            pembelian, penjualan, kas, pajak, hingga laporan keuangan — semua
            terhubung dan otomatis membuat jurnal.
          </p>

          <div className="space-y-7">
            {(
              [
                {
                  step: "01",
                  title: "Setup Perusahaan & Chart of Accounts (COA)",
                  desc: "Langkah pertama sebelum mencatat transaksi apapun. Input profil perusahaan, buat daftar akun (COA) sesuai kebutuhan bisnis, dan set periode fiskal.",
                  why: "COA yang rapi menentukan bagaimana setiap transaksi dikelompokkan dan dilaporkan. Struktur yang salah sejak awal = laporan yang tidak bisa dipercaya.",
                  tags: [
                    "Company Setup",
                    "Chart of Accounts",
                    "Opening Balance",
                    "Periode Fiskal",
                  ],
                },
                {
                  step: "02",
                  title: "Siklus Pembelian — Purchase Order → AP",
                  desc: "Alur lengkap: buat PO → catat Penerimaan Barang (GR) → input Invoice Vendor → bayar Hutang (AP). Setiap langkah otomatis membuat jurnal di belakang layar.",
                  why: "Tidak ada barang masuk tanpa dokumen, setiap hutang ke vendor terlacak sampai lunas, audit trail tercatat lengkap.",
                  tags: [
                    "Purchase Order",
                    "Goods Receipt",
                    "Invoice Vendor",
                    "Hutang AP",
                  ],
                },
                {
                  step: "03",
                  title: "Siklus Penjualan — Sales Order → AR",
                  desc: "Alur lengkap: buat SO → terbitkan Invoice & Faktur Pajak → catat Penerimaan Pembayaran. Saldo piutang otomatis berkurang saat pelunasan masuk.",
                  why: "Rekap AR real-time — kapan saja bisa lihat siapa yang belum bayar, sudah berapa hari outstanding, dan total piutang keseluruhan.",
                  tags: [
                    "Sales Order",
                    "Invoice Penjualan",
                    "Faktur Pajak",
                    "Piutang AR",
                  ],
                },
                {
                  step: "04",
                  title: "Jurnal, Buku Besar & Rekonsiliasi Bank",
                  desc: "Input jurnal manual untuk transaksi non-rutin. Lihat buku besar per akun. Rekonsiliasi bank: cocokkan saldo Accurate dengan mutasi rekening koran.",
                  why: "Rekonsiliasi adalah kontrol kritis — memastikan tidak ada transaksi hilang, ganda, atau salah posting antara catatan internal dan rekening bank.",
                  tags: [
                    "Jurnal Umum",
                    "Buku Besar",
                    "Rekonsiliasi Bank",
                    "Petty Cash",
                  ],
                },
                {
                  step: "05",
                  title: "Modul Pajak Terintegrasi",
                  desc: "Hitung PPh 21 dari modul payroll, potong PPh 23 saat bayar vendor jasa, terbitkan Faktur Pajak PPN yang langsung terkoneksi ke e-Faktur DJP Online.",
                  why: "Pajak terintegrasi artinya tidak ada hitung ulang manual — meminimalkan risiko salah hitung, lupa setor, atau lupa lapor.",
                  tags: [
                    "PPh 21 Payroll",
                    "PPh 23 Pemotongan",
                    "PPN e-Faktur",
                    "e-SPT DJP",
                  ],
                },
                {
                  step: "06",
                  title: "Laporan Keuangan & Tutup Periode",
                  desc: "Satu klik: generate Neraca, Laba Rugi, Arus Kas, laporan umur piutang. Setelah diverifikasi, tutup periode untuk mengunci transaksi bulan tersebut.",
                  why: "Laporan siap dalam detik, bukan proses manual Excel berjam-jam. Periode tertutup melindungi data historis dari perubahan tidak sengaja.",
                  tags: ["Neraca", "Laba Rugi", "Arus Kas", "Tutup Periode"],
                },
              ] as {
                step: string;
                title: string;
                desc: string;
                why: string;
                tags: string[];
              }[]
            ).map((m) => (
              <div
                key={m.step}
                className="flex gap-5">
                <span className="text-emerald-500/50 font-mono text-xs font-bold mt-0.5 w-6 flex-shrink-0">
                  {m.step}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {m.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-2">
                    {m.desc}
                  </p>
                  <p className="text-neutral-600 text-xs leading-relaxed mb-3">
                    <span className="text-neutral-500">Mengapa penting: </span>
                    {m.why}
                  </p>
                  <div>
                    {m.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        {/* ── Experience note ── */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            Pengalaman Lapangan
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Seluruh pemahaman di atas didukung pengalaman nyata sebagai{" "}
            <span className="text-white font-medium">
              Kepala Urusan Keuangan, Pemerintah Desa Sungai Jering
            </span>{" "}
            — mengelola dana Rp 100–250 juta/triwulan menggunakan{" "}
            <span className="text-white font-medium">Siskeudes</span>: input
            APBDes, pencatatan BKU (setara buku kas/bank), pengelolaan SPP/SPM,
            hingga penyusunan LRA & SPJ sebagai pertanggungjawaban ke pemerintah
            daerah.
          </p>
          <div className="mt-4">
            <Tag>Siskeudes</Tag>
            <Tag>APBDes</Tag>
            <Tag>BKU</Tag>
            <Tag>LRA</Tag>
            <Tag>SPP/SPM</Tag>
            <Tag>SPJ</Tag>
            <Tag>Rp 100–250 jt/triwulan</Tag>
          </div>
        </section>
      </div>
    </main>
  );
}

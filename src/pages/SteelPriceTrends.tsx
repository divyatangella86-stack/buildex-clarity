import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, TrendingDown, ArrowRight, BarChart3, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
} from "recharts";

const monthlyData = [
  { month: "Oct", tmt: 57500, hr: 50200, cr: 56800, gi: 60100 },
  { month: "Nov", tmt: 58200, hr: 51000, cr: 57200, gi: 60800 },
  { month: "Dec", tmt: 57800, hr: 50800, cr: 56500, gi: 61200 },
  { month: "Jan", tmt: 59000, hr: 51500, cr: 57800, gi: 61900 },
  { month: "Feb", tmt: 59500, hr: 52000, cr: 58000, gi: 62500 },
  { month: "Mar", tmt: 59900, hr: 52300, cr: 58100, gi: 62800 },
  { month: "Apr", tmt: 60000, hr: 52400, cr: 58200, gi: 63100 },
];

const products = [
  { key: "tmt", label: "TMT Bar", color: "hsl(139, 69%, 35%)" },
  { key: "hr", label: "HR Coil", color: "hsl(220, 60%, 50%)" },
  { key: "cr", label: "CR Coil", color: "hsl(35, 90%, 50%)" },
  { key: "gi", label: "GI Coil", color: "hsl(280, 60%, 50%)" },
];

const insights = [
  { title: "TMT Bars rallied 4.3% in 6 months", desc: "Driven by strong infrastructure demand and government capex push. Rebar prices remain elevated across all major cities.", trend: "up" },
  { title: "HR Coil sees mild recovery", desc: "After Q3 correction, hot-rolled coil prices are stabilizing. Auto sector demand uptick providing support.", trend: "up" },
  { title: "GI Coil premium widens", desc: "Galvanized coil premium over HR base has expanded to ₹10,700/MT due to zinc price increases on LME.", trend: "up" },
  { title: "CR Coil range-bound", desc: "Cold-rolled prices trading in a narrow band. Weak white goods demand offset by export opportunities.", trend: "flat" },
];

const forecasts = [
  { product: "TMT Bar", q2: "₹59,500 – ₹61,500", outlook: "Bullish", reason: "Infra spending + monsoon slowdown balance" },
  { product: "HR Coil", q2: "₹51,800 – ₹53,500", outlook: "Neutral", reason: "Flat auto demand, steady exports" },
  { product: "CR Coil", q2: "₹57,500 – ₹59,000", outlook: "Neutral", reason: "Seasonal demand pick-up expected" },
  { product: "GI Coil", q2: "₹62,000 – ₹64,500", outlook: "Bullish", reason: "Zinc prices + rural construction demand" },
];

const SteelPriceTrends = () => {
  const [activeLines, setActiveLines] = useState<string[]>(["tmt", "hr"]);

  const toggleLine = (key: string) => {
    setActiveLines((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <BarChart3 className="h-4 w-4" /> Market Analysis
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-3">Steel Price Trends</h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            6-month price trajectory for key steel products. Data sourced from mills, distributors and spot markets.
          </p>
        </div>
      </section>

      {/* Chart Section */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl border border-border shadow-card p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <h2 className="font-heading font-bold text-xl text-foreground">Price Movement (₹/MT)</h2>
              <div className="flex flex-wrap gap-2">
                {products.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => toggleLine(p.key)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                      activeLines.includes(p.key)
                        ? "border-border bg-card shadow-sm"
                        : "border-transparent bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color, opacity: activeLines.includes(p.key) ? 1 : 0.3 }} />
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    {products.map((p) => (
                      <linearGradient key={p.key} id={`grad-${p.key}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={p.color} stopOpacity={0.15} />
                        <stop offset="95%" stopColor={p.color} stopOpacity={0} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "hsl(0, 0%, 100%)", border: "1px solid hsl(220, 15%, 88%)", borderRadius: "8px", fontSize: "13px" }}
                    formatter={(value: number) => [`₹${value.toLocaleString("en-IN")}`, ""]}
                  />
                  {products.map((p) =>
                    activeLines.includes(p.key) ? (
                      <Area key={p.key} type="monotone" dataKey={p.key} stroke={p.color} strokeWidth={2.5} fill={`url(#grad-${p.key})`} dot={{ r: 4, fill: p.color }} />
                    ) : null
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mt-10">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Key Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {insights.map((item) => (
                <div key={item.title} className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      item.trend === "up" ? "bg-accent/10" : "bg-muted"
                    }`}>
                      {item.trend === "up" ? <TrendingUp className="h-4 w-4 text-accent" /> : <TrendingDown className="h-4 w-4 text-muted-foreground" />}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Forecast Table */}
          <div className="mt-10">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Q2 2026 Price Forecast</h2>
            <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30 text-muted-foreground">
                    <th className="text-left px-6 py-3 font-medium">Product</th>
                    <th className="text-left px-6 py-3 font-medium">Expected Range</th>
                    <th className="text-left px-6 py-3 font-medium">Outlook</th>
                    <th className="text-left px-6 py-3 font-medium hidden md:table-cell">Key Driver</th>
                  </tr>
                </thead>
                <tbody>
                  {forecasts.map((f) => (
                    <tr key={f.product} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{f.product}</td>
                      <td className="px-6 py-4 font-mono text-foreground">{f.q2}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          f.outlook === "Bullish" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
                        }`}>
                          {f.outlook}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{f.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">Want Weekly Price Reports?</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our market intelligence newsletter for weekly trend analysis and forecasts.</p>
            <Button variant="accent">Subscribe Free</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SteelPriceTrends;

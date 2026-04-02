import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, Calendar, Clock, ArrowRight, Lock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    title: "India Steel Market Outlook 2026",
    category: "Annual Report",
    date: "Mar 2026",
    pages: 48,
    desc: "Comprehensive analysis of India's steel sector — production capacity, demand drivers, pricing forecasts and policy impact for FY2026-27.",
    tags: ["Steel", "Forecast", "Policy"],
    premium: false,
  },
  {
    title: "Metals Demand Forecast: Infrastructure Push",
    category: "Sector Report",
    date: "Feb 2026",
    pages: 32,
    desc: "How India's ₹11 lakh crore infrastructure pipeline will shape metals demand across steel, cement, copper and aluminium.",
    tags: ["Infrastructure", "Demand", "Multi-Metal"],
    premium: false,
  },
  {
    title: "Copper & Aluminium: Global Supply Dynamics",
    category: "Commodity Deep Dive",
    date: "Jan 2026",
    pages: 28,
    desc: "LME trends, mine output data, recycling volumes and India's import dependency analysis for base metals.",
    tags: ["Copper", "Aluminium", "Global"],
    premium: true,
  },
  {
    title: "TMT Bar Regional Price Disparity Report",
    category: "Price Analysis",
    date: "Mar 2026",
    pages: 18,
    desc: "City-wise TMT bar price comparison with logistics cost breakdown, regional demand patterns and procurement optimization tips.",
    tags: ["TMT", "Pricing", "Regional"],
    premium: false,
  },
  {
    title: "Green Steel Transition: Cost & Timeline",
    category: "Special Report",
    date: "Dec 2025",
    pages: 36,
    desc: "Assessment of hydrogen-based steelmaking, carbon border adjustments and ESG implications for Indian manufacturers.",
    tags: ["Green Steel", "ESG", "Technology"],
    premium: true,
  },
  {
    title: "Raw Material Cost Index: Q1 2026",
    category: "Quarterly Index",
    date: "Apr 2026",
    pages: 22,
    desc: "Iron ore, coking coal, zinc, nickel and ferroalloy price index tracking with quarter-on-quarter variance.",
    tags: ["Raw Material", "Index", "Quarterly"],
    premium: false,
  },
];

const CommodityReports = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
          <FileText className="h-4 w-4" /> Research & Reports
        </div>
        <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-3">Commodity Reports</h1>
        <p className="text-primary-foreground/80 max-w-2xl text-lg">
          In-depth market research, price forecasts and sector analysis by HeyBuildex's commodity intelligence team.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b border-border bg-card">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Reports Published", value: "120+" },
          { label: "Industries Covered", value: "8" },
          { label: "Data Points Tracked", value: "5,000+" },
          { label: "Monthly Readers", value: "15K+" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-heading text-2xl font-extrabold text-accent">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Reports Grid */}
    <section className="section-padding">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((r) => (
            <div key={r.title} className="bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col group">
              {/* Colored top strip */}
              <div className="h-1.5 rounded-t-xl bg-accent" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">{r.category}</span>
                  {r.premium && (
                    <span className="flex items-center gap-1 text-xs font-medium text-foreground bg-muted px-2 py-1 rounded-full">
                      <Star className="h-3 w-3" /> Premium
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{r.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {r.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{r.date}</span>
                    <span>{r.pages} pages</span>
                  </div>
                  <Button variant={r.premium ? "outline" : "accent"} size="sm" className="text-xs gap-1">
                    {r.premium ? <><Lock className="h-3 w-3" /> Unlock</> : <><Download className="h-3 w-3" /> Download</>}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">Get All Premium Reports</h3>
          <p className="text-muted-foreground mb-4">Unlock full access to 120+ research reports, quarterly forecasts and custom commodity briefs.</p>
          <Button variant="accent" className="gap-2">Start Free Trial <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CommodityReports;

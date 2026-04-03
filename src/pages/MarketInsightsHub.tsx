import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, FileText, Newspaper, BookOpen, ArrowRight } from "lucide-react";

const sections = [
  {
    icon: TrendingUp,
    title: "Daily Metal Prices",
    description: "Real-time price updates for steel, aluminium, copper, and other metals across major Indian cities. Updated every morning with market-opening prices.",
    link: "/daily-metal-prices",
    color: "bg-blue-500/10 text-blue-600",
    highlights: ["TMT Bar prices", "HR Coil rates", "Copper cathode prices", "City-wise comparison"],
  },
  {
    icon: BarChart3,
    title: "Steel Price Trends",
    description: "Historical price charts, trend analysis, and forecasts for all steel products. Understand market cycles and time your procurement for maximum savings.",
    link: "/steel-price-trends",
    color: "bg-emerald-500/10 text-emerald-600",
    highlights: ["30/60/90 day trends", "YoY comparison", "Expert forecasts", "Grade-wise analysis"],
  },
  {
    icon: FileText,
    title: "Commodity Reports",
    description: "In-depth research reports on metal and mineral markets. Demand-supply analysis, import/export data, government policy impact, and sector outlook.",
    link: "/commodity-reports",
    color: "bg-amber-500/10 text-amber-600",
    highlights: ["Monthly market review", "Sector demand outlook", "Policy impact analysis", "Import/export data"],
  },
  {
    icon: Newspaper,
    title: "Industry News",
    description: "Breaking news and updates from the metals and mining industry. Steel plant announcements, policy changes, global market movements, and trade updates.",
    link: "/industry-news",
    color: "bg-purple-500/10 text-purple-600",
    highlights: ["Breaking industry news", "Policy updates", "Global market moves", "Company announcements"],
  },
  {
    icon: BookOpen,
    title: "Procurement Guides",
    description: "Expert guides to help you optimize your material procurement. Best practices, negotiation strategies, quality checklists, and vendor evaluation frameworks.",
    link: "#",
    color: "bg-rose-500/10 text-rose-600",
    highlights: ["Buying best practices", "Quality checklists", "Negotiation tips", "Vendor evaluation"],
  },
];

const MarketInsightsHub = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%"><defs><pattern id="mi-lines" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M0 30h60M30 0v60" stroke="currentColor" strokeWidth="0.3" className="text-primary-foreground" /></pattern></defs><rect width="100%" height="100%" fill="url(#mi-lines)" /></svg>
      </div>
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">Market Intelligence</span>
        <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground mb-5">
          Market Insights &<br className="hidden sm:block" /> Procurement Intelligence
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Stay ahead with real-time prices, expert analysis, and actionable intelligence for smarter procurement decisions.
        </p>
      </div>
    </section>

    {/* Sections Grid */}
    <section className="section-padding">
      <div className="container-max px-4 sm:px-6 lg:px-8 space-y-8">
        {sections.map((sec, i) => {
          const Icon = sec.icon;
          return (
            <div key={sec.title} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 p-6 lg:p-10`}>
              <div className="w-full lg:w-2/5 flex justify-center">
                <div className={`w-32 h-32 lg:w-48 lg:h-48 rounded-3xl ${sec.color} flex items-center justify-center`}>
                  <Icon className="h-16 w-16 lg:h-24 lg:w-24" />
                </div>
              </div>
              <div className="w-full lg:w-3/5 space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-foreground">{sec.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{sec.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {sec.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
                <Link to={sec.link}>
                  <Button variant="accent" className="group mt-2">
                    Explore {sec.title} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-primary-foreground mb-4">Get Daily Price Alerts</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Subscribe to our free daily newsletter and never miss a price movement or market update.</p>
        <Button variant="accent" size="lg">Subscribe Free</Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default MarketInsightsHub;

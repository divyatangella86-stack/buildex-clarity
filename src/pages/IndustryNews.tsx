import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, ArrowRight, Tag, Newspaper, TrendingUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["All", "Steel", "Non-Ferrous", "Policy", "Infrastructure", "Global"];

const featuredNews = {
  title: "India's Steel Production Hits Record 145 MT in FY26, Targets 200 MT by 2030",
  category: "Steel",
  date: "Apr 1, 2026",
  readTime: "5 min",
  excerpt: "Fuelled by government infrastructure spending and housing demand, India's crude steel output crossed 145 million tonnes in FY2025-26 — a 7.2% year-on-year increase. The National Steel Policy roadmap targets 200 MT by 2030, with major greenfield expansions planned by SAIL, Tata Steel and JSW.",
  image: null,
};

const news = [
  {
    title: "SAIL Announces ₹35,000 Cr Capex for FY27 Expansion",
    category: "Steel",
    date: "Mar 30, 2026",
    readTime: "3 min",
    excerpt: "Steel Authority of India plans capacity additions at Bhilai, Rourkela and Bokaro plants, targeting 35 MTPA by FY28.",
  },
  {
    title: "LME Copper Crosses $9,800/MT on Supply Deficit Fears",
    category: "Non-Ferrous",
    date: "Mar 29, 2026",
    readTime: "3 min",
    excerpt: "Global copper prices surge as Chilean mine disruptions and EV demand create a projected 500KT supply deficit in 2026.",
  },
  {
    title: "Government Extends Anti-Dumping Duty on Chinese Steel",
    category: "Policy",
    date: "Mar 28, 2026",
    readTime: "4 min",
    excerpt: "The Directorate General of Trade Remedies extends provisional duties on hot-rolled flat products from China for another 5 years.",
  },
  {
    title: "Delhi-Mumbai Expressway Drives 2.5 MT Steel Demand",
    category: "Infrastructure",
    date: "Mar 27, 2026",
    readTime: "3 min",
    excerpt: "The 1,350-km expressway project consumes massive TMT bar and structural steel volumes, benefiting western India mills.",
  },
  {
    title: "ArcelorMittal-Nippon to Set Up ₹1 Lakh Cr Green Steel Plant",
    category: "Global",
    date: "Mar 26, 2026",
    readTime: "4 min",
    excerpt: "AM/NS India announces hydrogen-based steelmaking facility in Odisha, aiming for 10 MTPA carbon-neutral output by 2032.",
  },
  {
    title: "Aluminium Prices Under Pressure as China Boosts Exports",
    category: "Non-Ferrous",
    date: "Mar 25, 2026",
    readTime: "3 min",
    excerpt: "Chinese aluminium exports up 18% YoY, pushing LME aluminium below $2,400/MT. Indian smelters seek safeguard duties.",
  },
  {
    title: "Railway Freight Rationalization to Cut Metal Logistics Costs 12%",
    category: "Policy",
    date: "Mar 24, 2026",
    readTime: "3 min",
    excerpt: "New freight policy offers concessional rail rates for steel, cement and minerals — reducing landed cost for bulk buyers.",
  },
  {
    title: "Smart Cities Mission Phase 2: ₹8 Lakh Cr Construction Pipeline",
    category: "Infrastructure",
    date: "Mar 23, 2026",
    readTime: "4 min",
    excerpt: "Phase 2 covers 200 cities with massive demand for structural steel, copper wiring, GI pipes and aluminium cladding.",
  },
];

const IndustryNews = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? news : news.filter((n) => n.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Newspaper className="h-4 w-4" /> Latest Updates
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-3">Industry News</h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Stay updated with the latest developments in metals, mining, infrastructure and trade policy.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="border-b border-border bg-card sticky top-16 z-30">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                active === c
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden mb-10">
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">{featuredNews.category}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{featuredNews.readTime} read</span>
                <span className="text-xs text-muted-foreground">{featuredNews.date}</span>
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-foreground mb-4 leading-tight">{featuredNews.title}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">{featuredNews.excerpt}</p>
              <Button variant="accent" className="gap-2">Read Full Article <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item) => (
              <article key={item.title} className="bg-card rounded-xl border border-border shadow-card p-6 hover:shadow-card-hover transition-all group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">{item.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{item.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                  <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No news found in this category.</p>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">Never Miss a Market Update</h3>
            <p className="text-muted-foreground mb-4">Get daily industry news, price alerts and procurement insights delivered to your inbox.</p>
            <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2.5 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/30" />
              <Button variant="accent">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryNews;

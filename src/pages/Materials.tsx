import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import catSteel from "@/assets/cat-steel.jpg";
import catAluminium from "@/assets/cat-aluminium.jpg";
import catCopper from "@/assets/cat-copper.jpg";
import catMinerals from "@/assets/cat-minerals.jpg";

const categories = [
  {
    image: catSteel,
    title: "Steel",
    slug: "tmt-bars",
    description: "India's most consumed industrial metal — from TMT bars for construction to HR/CR sheets for manufacturing. We source from SAIL, JSW, Tata, and 200+ verified mills.",
    products: ["TMT Bars", "Structural Steel", "HR Sheets & Plates", "CR Sheets", "GI Products", "Steel Pipes & Tubes"],
    stat: "₹300 Cr+",
    statLabel: "Steel traded annually",
  },
  {
    image: catAluminium,
    title: "Aluminium",
    slug: "hr-coils",
    description: "Lightweight, corrosion-resistant aluminium for automotive, aerospace, packaging, and electrical applications. Available in ingots, sheets, coils, and custom extrusions.",
    products: ["Aluminium Ingots", "Aluminium Sheets", "Aluminium Coils", "Aluminium Extrusions"],
    stat: "50,000+ MT",
    statLabel: "Supplied last year",
  },
  {
    image: catCopper,
    title: "Copper",
    slug: "copper-cathodes",
    description: "High-purity copper cathodes, rods, wires, and tubes for electrical, electronics, and plumbing industries. LME Grade A quality with full traceability.",
    products: ["Copper Cathodes", "Copper Rods", "Copper Wires", "Copper Tubes"],
    stat: "99.99%",
    statLabel: "Purity guaranteed",
  },
  {
    image: catMinerals,
    title: "Minerals",
    slug: "tmt-bars",
    description: "Essential raw minerals for steel plants, cement factories, and chemical industries. Sourced directly from mines across Odisha, Chhattisgarh, and Jharkhand.",
    products: ["Iron Ore", "Manganese Ore", "Limestone", "Bauxite"],
    stat: "15+",
    statLabel: "Mining partners",
  },
];

const Materials = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%"><defs><pattern id="mat-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" /></pattern></defs><rect width="100%" height="100%" fill="url(#mat-grid)" /></svg>
      </div>
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">Our Materials Portfolio</span>
        <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground mb-5">
          Industrial Raw Materials,<br className="hidden sm:block" /> Sourced & Delivered
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
          From steel to minerals — procure verified, quality-tested materials at transparent prices with pan-India delivery.
        </p>
        <Button variant="accent" size="lg" className="text-base px-8">Request Bulk Quote</Button>
      </div>
    </section>

    {/* Categories */}
    <section className="section-padding">
      <div className="container-max px-4 sm:px-6 lg:px-8 space-y-16">
        {categories.map((cat, i) => (
          <div key={cat.title} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}>
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img src={cat.image} alt={cat.title} width={768} height={512} loading="lazy" className="w-full h-72 lg:h-96 object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="flex items-center gap-3">
                <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground">{cat.title}</h2>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">{cat.stat} {cat.statLabel}</span>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">{cat.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {cat.products.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
              <Link to={`/product/${cat.slug}`}>
                <Button variant="accent" className="mt-2 group">
                  Explore {cat.title} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-primary-foreground mb-4">Need a Custom Material?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">We source specialty metals and alloys on demand. Tell us what you need and our procurement team will get back within 24 hours.</p>
        <Button variant="accent" size="lg">Talk to Procurement Expert</Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Materials;

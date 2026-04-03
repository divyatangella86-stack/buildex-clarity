import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import solProcurement from "@/assets/sol-procurement.jpg";
import solSupplyChain from "@/assets/sol-supply-chain.jpg";
import solQuality from "@/assets/sol-quality.jpg";
import solLogistics from "@/assets/sol-logistics.jpg";
import solPriceDiscovery from "@/assets/sol-price-discovery.jpg";
import solVendor from "@/assets/sol-vendor.jpg";

const solutions = [
  {
    image: solProcurement,
    title: "Bulk Procurement",
    description: "Consolidate your material purchases through a single platform. Get access to 1,200+ verified suppliers, volume-based pricing, and dedicated procurement managers.",
    benefits: ["Volume discounts up to 15%", "Single invoice for multi-material orders", "Dedicated account manager", "Credit terms available"],
  },
  {
    image: solVendor,
    title: "Vendor Management",
    description: "Eliminate supplier risk with our pre-vetted vendor network. We handle vendor evaluation, performance tracking, and compliance — so you focus on building.",
    benefits: ["Pre-verified supplier database", "Performance scorecards", "Compliance documentation", "Backup supplier network"],
  },
  {
    image: solSupplyChain,
    title: "Supply Chain Optimization",
    description: "Reduce lead times and inventory costs with our data-driven supply chain solutions. Real-time tracking, demand forecasting, and just-in-time delivery.",
    benefits: ["30% reduction in lead times", "Inventory optimization", "Demand forecasting", "Multi-site coordination"],
  },
  {
    image: solLogistics,
    title: "Logistics & Delivery",
    description: "Pan-India delivery network covering 500+ cities. Full truckload, part-load, and containerized shipping with real-time GPS tracking and insurance.",
    benefits: ["500+ city coverage", "Real-time GPS tracking", "Transit insurance included", "Flexible delivery schedules"],
  },
  {
    image: solPriceDiscovery,
    title: "Price Discovery",
    description: "Access real-time market prices, historical trends, and expert analysis. Make informed procurement decisions with our comprehensive price intelligence platform.",
    benefits: ["Daily updated prices", "Historical trend analysis", "Regional price comparison", "Expert market commentary"],
  },
  {
    image: solQuality,
    title: "Quality Inspection",
    description: "Third-party quality checks at source, in-transit, and at delivery. Mill test certificates, dimensional checks, and chemical composition verification included.",
    benefits: ["Pre-dispatch inspection", "Mill test certificates", "Chemical composition reports", "Dimensional accuracy checks"],
  },
];

const Solutions = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%"><defs><pattern id="sol-hex" width="56" height="100" patternUnits="userSpaceOnUse"><path d="M28 66L0 50V16L28 0l28 16v34L28 66zm0 0l28 16v34L28 100l-28-16V50l28 16z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" /></pattern></defs><rect width="100%" height="100%" fill="url(#sol-hex)" /></svg>
      </div>
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">End-to-End Solutions</span>
        <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground mb-5">
          Procurement Solutions<br className="hidden sm:block" /> That Scale With You
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
          From sourcing to delivery — comprehensive solutions to simplify your industrial material procurement.
        </p>
        <Button variant="accent" size="lg" className="text-base px-8">Talk to an Expert</Button>
      </div>
    </section>

    {/* Solutions List */}
    <section className="section-padding">
      <div className="container-max px-4 sm:px-6 lg:px-8 space-y-20">
        {solutions.map((sol, i) => (
          <div key={sol.title} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-14 items-center`}>
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border">
                <img src={sol.image} alt={sol.title} width={768} height={512} loading="lazy" className="w-full h-64 lg:h-80 object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-5">
              <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-foreground">{sol.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{sol.description}</p>
              <div className="space-y-2.5">
                {sol.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
              <Button variant="accent" className="group">
                Get Started <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-primary-foreground mb-4">Ready to Transform Your Procurement?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Schedule a free consultation with our procurement experts and discover how HeyBuildex can save you time and money.</p>
        <Button variant="accent" size="lg">Schedule Free Consultation</Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Solutions;

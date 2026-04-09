import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, BarChart3 } from "lucide-react";
import indConstruction from "@/assets/ind-construction.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indEnergy from "@/assets/ind-energy.jpg";
import indInfrastructure from "@/assets/ind-infrastructure.jpg";
import indAutomobile from "@/assets/ind-automobile.jpg";
import indEngineering from "@/assets/ind-engineering.jpg";

const industries = [
  {
    image: indConstruction,
    title: "Construction",
    slug: "/industries/construction",
    description: "TMT bars, structural steel, cement-grade minerals — everything builders need. We serve residential, commercial, and mega-project developers with guaranteed quality and on-time delivery.",
    materials: ["TMT Bars", "Structural Steel", "HR Plates", "Iron Ore"],
  },
  {
    image: indManufacturing,
    title: "Manufacturing",
    slug: "/industries/manufacturing",
    description: "Flat steel products, aluminium sheets, and copper components for OEMs and contract manufacturers. Mill-direct sourcing ensures competitive pricing at scale.",
    materials: ["HR/CR Coils", "Aluminium Sheets", "Copper Strips", "GI Products"],
  },
  {
    image: indEnergy,
    title: "Energy & Power",
    slug: "/industries/energy-power",
    description: "Copper conductors, aluminium cables, steel structures for transmission towers, and specialty alloys for power generation equipment.",
    materials: ["Copper Rods", "Aluminium Extrusions", "Structural Steel", "GI Pipes"],
  },
  {
    image: indInfrastructure,
    title: "Infrastructure",
    slug: "/industries/infrastructure",
    description: "Bulk steel and mineral supply for highways, bridges, metros, and ports. We handle large-volume orders with multi-site delivery coordination.",
    materials: ["TMT Bars", "HR Plates", "Iron Ore", "Limestone"],
  },
  {
    image: indAutomobile,
    title: "Automobile",
    slug: "/industries/automobile",
    description: "Precision-grade flat steel, aluminium alloys, and copper components for automotive OEMs, tier-1 suppliers, and EV manufacturers.",
    materials: ["CR Coils", "Aluminium Coils", "Copper Wires", "HR Sheets"],
  },
  {
    image: indEngineering,
    title: "Engineering & Fabrication",
    slug: "/industries/engineering-fabrication",
    description: "Versatile steel sections, pipes, plates, and non-ferrous metals for custom fabrication, structural engineering, and heavy equipment manufacturing.",
    materials: ["Steel Pipes & Tubes", "HR/CR Sheets", "Copper Tubes", "Aluminium Ingots"],
  },
];

const highlights = [
  { icon: Shield, title: "Quality Assured", desc: "Every material is mill-tested and BIS certified before dispatch." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Logistics network covering 500+ cities with real-time tracking." },
  { icon: BarChart3, title: "Transparent Pricing", desc: "Live market-linked prices with no hidden charges or middlemen." },
];

const Industries = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%"><defs><pattern id="ind-dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-primary-foreground" /></pattern></defs><rect width="100%" height="100%" fill="url(#ind-dots)" /></svg>
      </div>
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">Industry Solutions</span>
        <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground mb-5">
          Powering Every Industry<br className="hidden sm:block" /> with Right Materials
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          From construction sites to assembly lines — we understand your industry's material needs and deliver accordingly.
        </p>
      </div>
    </section>

    {/* Industries Grid */}
    <section className="section-padding">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div key={ind.title} className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img src={ind.image} alt={ind.title} width={768} height={512} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-heading text-xl font-bold text-foreground">{ind.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {ind.materials.map((m) => (
                    <span key={m} className="px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">{m}</span>
                  ))}
                </div>
                <Button variant="ghost" className="text-accent p-0 h-auto font-semibold group/btn">
                  Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="bg-muted py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-foreground text-center mb-10">Why Industries Trust HeyBuildex</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-primary-foreground mb-4">Don't See Your Industry?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">We serve 50+ industry verticals. Talk to our team about your specific material needs.</p>
        <Button variant="accent" size="lg">Contact Our Team</Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Industries;

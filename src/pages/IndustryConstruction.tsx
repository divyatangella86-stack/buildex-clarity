import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const materials = [
  { name: "TMT Bars", desc: "Fe 500D & Fe 550D grade, BIS certified, ideal for RCC structures." },
  { name: "Structural Steel", desc: "MS Beams, Channels, Angles for load-bearing frameworks." },
  { name: "HR Plates", desc: "Hot-rolled plates for base plates, gusset plates, and heavy fabrication." },
  { name: "Round Bars", desc: "Bright and black round bars for dowels and reinforcement." },
  { name: "GI Products", desc: "Galvanized sheets, pipes, and roofing for corrosion-resistant structures." },
  { name: "Binding Wire", desc: "Annealed binding wire for tying rebar at construction sites." },
];

const useCases = [
  "Residential & commercial buildings",
  "High-rise towers & complexes",
  "Industrial sheds & warehouses",
  "Bridges & flyovers",
  "Pre-engineered buildings (PEB)",
  "Foundation & piling work",
];

const IndustryConstruction = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <img src={heroImg} alt="Construction site with steel structures" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">Industry</span>
        <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-3">Construction</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">TMT bars, structural steel, cement-grade minerals — everything builders need for residential, commercial, and mega-project developments.</p>
      </div>
    </section>

    {/* Materials */}
    <section className="section-padding">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-foreground mb-2">Materials We Supply</h2>
        <p className="text-muted-foreground mb-8 max-w-xl">Mill-tested, BIS-certified materials sourced directly from leading producers.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((m) => (
            <div key={m.name} className="bg-card border border-border rounded-xl p-6 hover:shadow-card-hover transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-1">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Use Cases */}
    <section className="bg-muted py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-foreground mb-8">Applications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((uc) => (
            <div key={uc} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
              <CheckCircle className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm font-medium text-foreground">{uc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-primary-foreground mb-4">Need Materials for Your Construction Project?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Get competitive quotes with guaranteed quality and on-time delivery across India.</p>
        <Button variant="accent" size="lg">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default IndustryConstruction;

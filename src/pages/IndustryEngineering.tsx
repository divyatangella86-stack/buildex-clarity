import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-engineering.jpg";

const materials = [
  { name: "Steel Pipes & Tubes", desc: "ERW, seamless, and structural tubes for frameworks and fluid handling." },
  { name: "HR/CR Sheets", desc: "Versatile sheets for cutting, bending, and custom fabrication." },
  { name: "Copper Tubes", desc: "Seamless copper tubes for heat exchangers and hydraulic systems." },
  { name: "Aluminium Ingots", desc: "Primary aluminium for casting and die-casting operations." },
  { name: "MS Angles & Flats", desc: "Structural sections for jigs, fixtures, and machine frames." },
  { name: "Chequered Plates", desc: "Anti-skid plates for platforms, stairs, and industrial flooring." },
];

const useCases = [
  "Heavy equipment manufacturing",
  "Custom metal fabrication",
  "Pressure vessel construction",
  "Structural steel fabrication",
  "Machine building & tooling",
  "Tank & silo manufacturing",
];

const IndustryEngineering = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <img src={heroImg} alt="Engineering workshop with welding sparks" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">Industry</span>
        <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-3">Engineering & Fabrication</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">Versatile steel sections, pipes, plates, and non-ferrous metals for custom fabrication and heavy equipment manufacturing.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-foreground mb-2">Materials We Supply</h2>
        <p className="text-muted-foreground mb-8 max-w-xl">Wide range of metals and sections for diverse engineering needs.</p>
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

    <section className="bg-primary py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-primary-foreground mb-4">Your Fabrication Partner</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">From single pieces to bulk orders — we supply the right materials for every project.</p>
        <Button variant="accent" size="lg">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default IndustryEngineering;

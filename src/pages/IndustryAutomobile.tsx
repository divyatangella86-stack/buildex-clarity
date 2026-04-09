import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-automobile.jpg";

const materials = [
  { name: "CR Coils", desc: "Cold-rolled coils with precise thickness for body panels and structural parts." },
  { name: "Aluminium Coils", desc: "Lightweight alloy coils for EV battery enclosures and body panels." },
  { name: "Copper Wires", desc: "High-conductivity wiring for harnesses, motors, and EV charging systems." },
  { name: "HR Sheets", desc: "Hot-rolled sheets for chassis, frames, and underbody components." },
  { name: "Aluminium Extrusions", desc: "Custom profiles for bumper beams, side rails, and heat sinks." },
  { name: "Copper Strips", desc: "Precision strips for connectors, terminals, and busbar applications." },
];

const useCases = [
  "Passenger vehicle manufacturing",
  "Commercial vehicle production",
  "EV & hybrid vehicle assembly",
  "Tier-1 auto component supply",
  "Two-wheeler manufacturing",
  "Aftermarket parts fabrication",
];

const IndustryAutomobile = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <img src={heroImg} alt="Automobile assembly line with robotic arms" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">Industry</span>
        <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-3">Automobile</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">Precision-grade flat steel, aluminium alloys, and copper components for automotive OEMs, tier-1 suppliers, and EV manufacturers.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-foreground mb-2">Materials We Supply</h2>
        <p className="text-muted-foreground mb-8 max-w-xl">Automotive-grade materials with strict dimensional tolerances.</p>
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
        <h2 className="font-heading text-3xl font-extrabold text-primary-foreground mb-4">Driving the Future of Mobility</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">From ICE to EV — reliable material supply for the automotive industry.</p>
        <Button variant="accent" size="lg">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default IndustryAutomobile;

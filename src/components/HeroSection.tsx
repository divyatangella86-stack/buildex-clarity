import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => (
  <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
    <img
      src={heroImage}
      alt="Industrial steel warehouse with metal coils"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          Procure Metals & Industrial Raw Materials{" "}
          <span className="text-accent">With Confidence</span>
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl">
          Connecting businesses with verified suppliers for steel, aluminium, copper and minerals.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg">Get Quote</Button>
          <Button variant="hero-outline" size="lg">Explore Materials</Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

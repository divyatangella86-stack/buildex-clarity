import { Building2, Factory, Zap, Landmark, Car, Wrench } from "lucide-react";

const industries = [
  { icon: Building2, title: "Construction" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Zap, title: "Energy & Power" },
  { icon: Landmark, title: "Infrastructure" },
  { icon: Car, title: "Automobile" },
  { icon: Wrench, title: "Engineering & Fabrication" },
];

const IndustriesSection = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground mb-3">Industries We Serve</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Trusted by leading enterprises across key industrial verticals.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {industries.map(({ icon: Icon, title }) => (
          <div key={title} className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-accent/50 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/15 transition-colors">
              <Icon className="h-7 w-7 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <span className="font-heading font-semibold text-sm text-foreground text-center">{title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;

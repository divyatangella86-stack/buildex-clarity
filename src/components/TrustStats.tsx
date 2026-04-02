import { Building2, Users, MapPin, Weight } from "lucide-react";

const stats = [
  { value: "1000+", label: "Businesses Served", icon: Building2, suffix: "" },
  { value: "500+", label: "Verified Suppliers", icon: Users, suffix: "" },
  { value: "20+", label: "Cities Delivered", icon: MapPin, suffix: "" },
  { value: "50,000+", label: "Tons Supplied", icon: Weight, suffix: "MT" },
];

const TrustStats = () => (
  <section className="relative py-20 overflow-hidden" style={{ background: "var(--gradient-dark)" }}>
    {/* Decorative grid */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />

    <div className="container-max px-4 sm:px-6 lg:px-8 relative">
      <p className="text-center text-sm font-semibold tracking-widest uppercase text-accent mb-10">
        Trusted Across India
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-primary-foreground/10">
        {stats.map(({ value, label, icon: Icon }) => (
          <div key={label} className="text-center px-4 py-4 group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <div className="font-heading text-3xl lg:text-5xl font-extrabold text-primary-foreground mb-2 tracking-tight">
              {value}
            </div>
            <div className="text-sm text-primary-foreground/50 font-medium">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStats;

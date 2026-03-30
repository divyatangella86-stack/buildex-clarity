import { ShieldCheck, TrendingDown, Package, Truck, BadgeCheck } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Verified Suppliers", desc: "Every supplier is vetted for quality and reliability." },
  { icon: TrendingDown, title: "Competitive Pricing", desc: "Best market rates with transparent price discovery." },
  { icon: Package, title: "Bulk Procurement", desc: "Seamless procurement for large-scale industrial needs." },
  { icon: Truck, title: "Nationwide Logistics", desc: "Delivery across 20+ cities with real-time tracking." },
  { icon: BadgeCheck, title: "Quality Assurance", desc: "Rigorous quality checks at every procurement stage." },
];

const WhyChoose = () => (
  <section className="section-padding" style={{ background: "var(--gradient-dark)" }}>
    <div className="container-max">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-3">Why Choose HeyBuildex</h2>
        <p className="text-primary-foreground/60 max-w-lg mx-auto">Built for businesses that need reliable, scalable metal procurement.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {values.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center p-6 rounded-xl border border-primary-foreground/10 hover:border-accent/40 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/15 mb-4">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-sm text-primary-foreground mb-2">{title}</h3>
            <p className="text-xs text-primary-foreground/50">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;

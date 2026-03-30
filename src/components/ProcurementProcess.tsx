import { ClipboardList, MessageSquareQuote, CheckCircle2, PackageCheck, MapPin } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Submit Requirement", desc: "Tell us what you need" },
  { icon: MessageSquareQuote, title: "Get Supplier Quotes", desc: "Receive competitive bids" },
  { icon: CheckCircle2, title: "Confirm Order", desc: "Choose the best offer" },
  { icon: PackageCheck, title: "Material Dispatch", desc: "Quality-checked dispatch" },
  { icon: MapPin, title: "Delivery at Site", desc: "On-time site delivery" },
];

const ProcurementProcess = () => (
  <section className="section-padding bg-muted">
    <div className="container-max">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground mb-3">How It Works</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">A seamless procurement journey from requirement to delivery.</p>
      </div>
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-border -translate-y-1/2 z-0" />
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="relative z-10 flex flex-col items-center text-center flex-1">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-accent flex items-center justify-center mb-4 shadow-card">
              <Icon className="h-7 w-7 text-accent" />
            </div>
            <div className="font-heading font-bold text-xs text-accent mb-1">Step {i + 1}</div>
            <h3 className="font-heading font-bold text-sm text-foreground mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground max-w-[140px]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcurementProcess;

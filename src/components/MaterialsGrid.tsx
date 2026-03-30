import { Layers, CircleDot, Zap, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const materials = [
  { icon: Layers, title: "Steel", desc: "TMT, Structural Steel, HR Sheets", color: "from-slate-600 to-slate-800" },
  { icon: CircleDot, title: "Aluminium", desc: "Ingots, Sheets, Coils, Extrusions", color: "from-zinc-400 to-zinc-600" },
  { icon: Zap, title: "Copper", desc: "Cathodes, Rods, Wires, Tubes", color: "from-orange-600 to-orange-800" },
  { icon: Mountain, title: "Minerals", desc: "Iron Ore, Manganese, Limestone", color: "from-amber-700 to-amber-900" },
];

const MaterialsGrid = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground mb-3">Our Materials</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Sourcing the finest industrial raw materials from verified suppliers across India.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {materials.map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className="group bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
            <div className={`h-32 bg-gradient-to-br ${color} flex items-center justify-center`}>
              <Icon className="h-12 w-12 text-primary-foreground/90" strokeWidth={1.5} />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-lg text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 p-0 h-auto font-semibold">
                Explore →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MaterialsGrid;

import { Button } from "@/components/ui/button";
import steelImg from "@/assets/material-steel.jpg";
import aluminiumImg from "@/assets/material-aluminium.jpg";
import copperImg from "@/assets/material-copper.jpg";
import mineralsImg from "@/assets/material-minerals.jpg";

const materials = [
  { image: steelImg, title: "Steel", desc: "TMT, Structural Steel, HR Sheets", alt: "Steel TMT bars and structural beams in warehouse" },
  { image: aluminiumImg, title: "Aluminium", desc: "Ingots, Sheets, Coils, Extrusions", alt: "Aluminium coils in industrial facility" },
  { image: copperImg, title: "Copper", desc: "Cathodes, Rods, Wires, Tubes", alt: "Copper cathodes and rods" },
  { image: mineralsImg, title: "Minerals", desc: "Iron Ore, Manganese, Limestone", alt: "Iron ore at mining site" },
];

const MaterialsGrid = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground mb-3">Our Materials</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Sourcing the finest industrial raw materials from verified suppliers across India.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {materials.map(({ image, title, desc, alt }) => (
          <div key={title} className="group bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
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

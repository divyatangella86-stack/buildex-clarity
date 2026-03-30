import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="section-padding bg-accent">
    <div className="container-max text-center">
      <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-accent-foreground mb-4">
        Streamline Your Industrial Procurement
      </h2>
      <p className="text-accent-foreground/70 mb-8 max-w-lg mx-auto">
        Get competitive quotes, verified suppliers, and reliable delivery — all in one platform.
      </p>
      <Button variant="default" size="lg" className="font-bold text-base">
        Get Bulk Quote
      </Button>
    </div>
  </section>
);

export default CTABanner;

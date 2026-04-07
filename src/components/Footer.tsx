import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Materials",
    items: [
      { label: "Steel", href: "/product/tmt-bars" },
      { label: "Aluminium", href: "#" },
      { label: "Copper", href: "/product/copper-cathodes" },
      { label: "Minerals", href: "#" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Construction", href: "#" },
      { label: "Manufacturing", href: "#" },
      { label: "Energy", href: "#" },
      { label: "Infrastructure", href: "#" },
    ],
  },
  {
    title: "Market Insights",
    items: [
      { label: "Daily Metal Prices", href: "/daily-metal-prices" },
      { label: "Steel Price Trends", href: "/steel-price-trends" },
      { label: "Commodity Reports", href: "/commodity-reports" },
      { label: "Industry News", href: "/industry-news" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partner With Us", href: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Newsletter strip */}
    <div className="border-b border-primary-foreground/10">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold mb-1">
            Stay ahead of the <span className="text-accent">market</span>
          </h3>
          <p className="text-sm text-primary-foreground/50">
            Get daily metal prices, procurement tips & industry updates straight to your inbox.
          </p>
        </div>
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-11 px-4 rounded-l-lg bg-primary-foreground/10 border border-primary-foreground/15 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
          />
          <Button variant="accent" className="rounded-l-none h-11 px-6">
            Subscribe <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="container-max px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-14">
        {/* Brand column */}
        <div className="col-span-2">
          <a href="/" className="font-heading text-2xl font-extrabold tracking-tight inline-block mb-4">
            Hey<span className="text-accent">Buildex</span>
          </a>
          <p className="text-sm text-primary-foreground/50 max-w-xs mb-6 leading-relaxed">
            India's trusted B2B marketplace for raw materials. Connecting businesses with verified suppliers for steel, aluminium, copper & minerals.
          </p>
          <ul className="space-y-3 text-sm text-primary-foreground/50">
            <li className="flex items-center gap-2.5 hover:text-accent transition-colors cursor-pointer">
              <Mail className="h-4 w-4 text-accent shrink-0" /> info@heybuildex.com
            </li>
            <li className="flex items-center gap-2.5 hover:text-accent transition-colors cursor-pointer">
              <Phone className="h-4 w-4 text-accent shrink-0" /> +91 98765 43210
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" /> Mumbai, India
            </li>
          </ul>
        </div>

        {/* Link columns */}
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="font-heading font-bold text-sm mb-4 text-accent tracking-wide uppercase text-[0.7rem]">
              {group.title}
            </h4>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary-foreground/30">
          © 2026 HeyBuildex. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs text-primary-foreground/30">
          <a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</a>
          <a href="/refund-policy" className="hover:text-accent transition-colors">Refund Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

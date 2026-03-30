import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-16 pb-8">
    <div className="container-max px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 text-accent">Materials</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Steel", "Aluminium", "Copper", "Minerals"].map((m) => (
              <li key={m}><a href="#" className="hover:text-accent transition-colors">{m}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 text-accent">Industries</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Construction", "Manufacturing", "Energy", "Infrastructure"].map((i) => (
              <li key={i}><a href="#" className="hover:text-accent transition-colors">{i}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 text-accent">Solutions</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Bulk Procurement", "Supply Chain", "Logistics"].map((s) => (
              <li key={s}><a href="#" className="hover:text-accent transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 text-accent">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["About", "Contact", "Careers", "Partner With Us"].map((c) => (
              <li key={c}><a href="#" className="hover:text-accent transition-colors">{c}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@heybuildex.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 98765 43210</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent mt-0.5" /> Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-heading font-extrabold text-lg">Hey<span className="text-accent">Buildex</span></span>
        <p className="text-xs text-primary-foreground/40">© 2026 HeyBuildex. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

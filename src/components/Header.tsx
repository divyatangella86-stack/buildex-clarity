import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const materialsMenu = {
  categories: [
    { title: "Steel", items: ["TMT Bars", "Structural Steel", "HR Sheets & Plates", "CR Sheets", "GI Products", "Steel Pipes & Tubes"] },
    { title: "Aluminium", items: ["Aluminium Ingots", "Aluminium Sheets", "Aluminium Coils", "Aluminium Extrusions"] },
    { title: "Copper", items: ["Copper Cathodes", "Copper Rods", "Copper Wires", "Copper Tubes"] },
    { title: "Minerals", items: ["Iron Ore", "Manganese Ore", "Limestone", "Bauxite"] },
  ],
  featured: ["Bulk Steel Procurement", "Industrial Metal Supply", "Nationwide Logistics"],
  cta: "Request Bulk Quote",
};

const industriesMenu = {
  items: ["Construction", "Infrastructure", "Manufacturing", "Energy & Power", "Automobile", "Engineering & Fabrication"],
  highlights: ["Reliable Raw Material Supply", "Transparent Pricing", "On-time Delivery"],
  cta: "Explore Industry Solutions",
};

const solutionsMenu = {
  items: ["Bulk Procurement", "Vendor Management", "Supply Chain Optimization", "Logistics & Delivery", "Price Discovery", "Quality Inspection"],
  forBusiness: ["Manufacturers", "EPC Contractors", "Infrastructure Companies", "Fabricators"],
  cta: "Talk to Procurement Expert",
};

const insightsMenu = {
  items: ["Daily Metal Prices", "Steel Price Trends", "Commodity Reports", "Industry News", "Procurement Guides"],
  reports: ["Steel Market Outlook", "Metals Demand Forecast"],
  cta: "View Market Reports",
};

const navItems = ["Materials", "Industries", "Solutions", "Market Insights", "About"] as const;

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(item);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="/" className="font-heading text-xl font-extrabold tracking-tight text-foreground">
          Hey<span className="text-accent">Buildex</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => handleEnter(item)}
              onMouseLeave={handleLeave}
            >
              {item === "About" ? (
                <a href="/about" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md">
                  {item}
                </a>
              ) : (
                <a href={item === "Materials" ? "/materials" : item === "Industries" ? "/industries" : item === "Solutions" ? "/solutions" : item === "Market Insights" ? "/market-insights" : "#"} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md">
                  {item}
                  <ChevronDown className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="accent" size="default">Get Quote</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      {activeMenu && activeMenu !== "About" && (
        <div
          className="hidden lg:block absolute left-0 right-0 bg-card border-b border-border shadow-card-hover z-40"
          onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
          onMouseLeave={handleLeave}
        >
          <div className="container-max px-8 py-8">
            {activeMenu === "Materials" && (
              <div className="grid grid-cols-5 gap-8">
                {materialsMenu.categories.map((cat) => (
                  <div key={cat.title}>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-3">{cat.title}</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item}>
                          <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="bg-muted rounded-lg p-5">
                  <h4 className="font-heading font-bold text-sm text-foreground mb-3">Featured</h4>
                  <ul className="space-y-2 mb-4">
                    {materialsMenu.featured.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground">• {f}</li>
                    ))}
                  </ul>
                  <Button variant="accent" size="sm" className="w-full">{materialsMenu.cta}</Button>
                </div>
              </div>
            )}
            {activeMenu === "Industries" && (
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-2">
                  <h4 className="font-heading font-bold text-sm text-foreground mb-3">Industries</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industriesMenu.items.map((item) => (
                      <a key={item} href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors py-1">{item}</a>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 bg-muted rounded-lg p-5">
                  <h4 className="font-heading font-bold text-sm text-foreground mb-3">How HeyBuildex Helps</h4>
                  <ul className="space-y-2 mb-4">
                    {industriesMenu.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground">• {h}</li>
                    ))}
                  </ul>
                  <Button variant="accent" size="sm">{industriesMenu.cta}</Button>
                </div>
              </div>
            )}
            {activeMenu === "Solutions" && (
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-2">
                  <h4 className="font-heading font-bold text-sm text-foreground mb-3">Solutions</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solutionsMenu.items.map((item) => (
                      <a key={item} href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors py-1">{item}</a>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 bg-muted rounded-lg p-5">
                  <h4 className="font-heading font-bold text-sm text-foreground mb-3">For Businesses</h4>
                  <ul className="space-y-2 mb-4">
                    {solutionsMenu.forBusiness.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground">• {b}</li>
                    ))}
                  </ul>
                  <Button variant="accent" size="sm">{solutionsMenu.cta}</Button>
                </div>
              </div>
            )}
            {activeMenu === "Market Insights" && (
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-2">
                  <h4 className="font-heading font-bold text-sm text-foreground mb-3">Market Insights</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {insightsMenu.items.map((item) => {
                      const linkMap: Record<string, string> = {
                        "Daily Metal Prices": "/daily-metal-prices",
                        "Steel Price Trends": "/steel-price-trends",
                        "Commodity Reports": "/commodity-reports",
                        "Industry News": "/industry-news",
                      };
                      return (
                        <a key={item} href={linkMap[item] || "#"} className="text-sm text-muted-foreground hover:text-accent transition-colors py-1">{item}</a>
                      );
                    })}
                  </div>
                </div>
                <div className="col-span-2 bg-muted rounded-lg p-5">
                  <h4 className="font-heading font-bold text-sm text-foreground mb-3">Latest Reports</h4>
                  <ul className="space-y-2 mb-4">
                    {insightsMenu.reports.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground">• {r}</li>
                    ))}
                  </ul>
                  <Button variant="accent" size="sm">{insightsMenu.cta}</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-b border-border px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a key={item} href="#" className="block text-sm font-medium text-foreground/80 py-2">{item}</a>
          ))}
          <Button variant="accent" className="w-full">Get Quote</Button>
        </div>
      )}
    </header>
  );
};

export default Header;

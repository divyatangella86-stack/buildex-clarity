import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import menuSteel from "@/assets/menu-steel.jpg";
import menuAluminium from "@/assets/menu-aluminium.jpg";
import menuCopper from "@/assets/menu-copper.jpg";

type MaterialKey = "Steel" | "Aluminium" | "Copper";

const materialsMenu: Record<MaterialKey, { image: string; subcategories: { title: string; items: { name: string; link: string }[] }[] }> = {
  Steel: {
    image: menuSteel,
    subcategories: [
      { title: "Long Products", items: [{ name: "TMT Bars", link: "/product/tmt-bars" }, { name: "Round Bars", link: "/product/round-bars" }, { name: "Binding Wire", link: "/product/binding-wire" }] },
      { title: "Flat Products", items: [{ name: "HR Coils", link: "/product/hr-coils" }, { name: "HR Sheets & Plates", link: "/product/hr-sheets-plates" }, { name: "CR Sheets", link: "/product/cr-sheets" }, { name: "Chequered Plates", link: "/product/chequered-plates" }] },
      { title: "Structural Sections", items: [{ name: "MS Beam", link: "/product/ms-beam" }, { name: "MS Channel", link: "/product/ms-channel" }, { name: "MS Angle", link: "/product/ms-angle" }, { name: "MS Flat", link: "/product/ms-flat" }] },
      { title: "Pipes & Tubes", items: [{ name: "Round Pipe", link: "/product/round-pipe" }, { name: "Square Pipe", link: "/product/square-pipe" }, { name: "Rectangular Pipe", link: "/product/rectangular-pipe" }] },
      { title: "Coated Steel", items: [{ name: "GI Products", link: "/product/gi-products" }, { name: "Roofing Sheets", link: "/product/roofing-sheets" }] },
    ],
  },
  Aluminium: {
    image: menuAluminium,
    subcategories: [
      { title: "Primary Products", items: [{ name: "Aluminium Ingots", link: "/product/aluminium-ingots" }] },
      { title: "Flat Rolled Products", items: [{ name: "Aluminium Coils", link: "/product/aluminium-coils" }, { name: "Aluminium Sheets", link: "/product/aluminium-sheets" }] },
      { title: "Extruded Products", items: [{ name: "Aluminium Extrusions", link: "/product/aluminium-extrusions" }] },
    ],
  },
  Copper: {
    image: menuCopper,
    subcategories: [
      { title: "Primary Products", items: [{ name: "Copper Cathodes", link: "/product/copper-cathodes" }] },
      { title: "Semi-Finished", items: [{ name: "Copper Rods", link: "/product/copper-cathodes" }, { name: "Copper Wires", link: "/product/copper-cathodes" }, { name: "Copper Tubes", link: "/product/copper-cathodes" }] },
      { title: "Finished Products", items: [{ name: "Copper Strips", link: "/product/copper-cathodes" }, { name: "Copper Busbars", link: "/product/copper-cathodes" }] },
    ],
  },
};

const materialKeys: MaterialKey[] = ["Steel", "Aluminium", "Copper"];

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
  const [activeMaterial, setActiveMaterial] = useState<MaterialKey>("Steel");
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(item);
    if (item === "Materials") setActiveMaterial("Steel");
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const currentMaterial = materialsMenu[activeMaterial];

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
          <Button variant="accent" size="default" asChild>
            <a href="/get-quote">Get Quote</a>
          </Button>
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

            {/* ── Materials Mega Menu ── */}
            {activeMenu === "Materials" && (
              <div className="flex gap-0">
                {/* Left: Material tabs with images */}
                <div className="w-52 border-r border-border pr-4 space-y-1 shrink-0">
                  {materialKeys.map((key) => (
                    <button
                      key={key}
                      onMouseEnter={() => setActiveMaterial(key)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm font-semibold transition-all ${
                        activeMaterial === key
                          ? "bg-accent/10 text-accent"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <img
                        src={materialsMenu[key].image}
                        alt={key}
                        className="w-9 h-9 rounded-md object-cover"
                        width={36}
                        height={36}
                      />
                      {key}
                    </button>
                  ))}
                </div>

                {/* Right: Subcategories grid */}
                <div className="flex-1 pl-8">
                  <h4 className="font-heading font-bold text-base text-foreground mb-4 flex items-center gap-2">
                    🔩 {activeMaterial} Products
                  </h4>
                  <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                    {currentMaterial.subcategories.map((sub) => (
                      <div key={sub.title}>
                        <h5 className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">{sub.title}</h5>
                        <ul className="space-y-1.5">
                          {sub.items.map((item) => (
                            <li key={item.name}>
                              <a href={item.link} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Industries ── */}
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

            {/* ── Solutions ── */}
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

            {/* ── Market Insights ── */}
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
            <a key={item} href={item === "Materials" ? "/materials" : item === "Industries" ? "/industries" : item === "Solutions" ? "/solutions" : item === "Market Insights" ? "/market-insights" : item === "About" ? "/about" : "#"} className="block text-sm font-medium text-foreground/80 py-2">{item}</a>
          ))}
          <Button variant="accent" className="w-full" asChild>
            <a href="/get-quote">Get Quote</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

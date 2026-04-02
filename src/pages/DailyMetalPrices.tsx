import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, TrendingDown, Minus, Search, MapPin, Calendar, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const metals = [
  {
    name: "TMT Bar (Fe 500D)",
    grade: "IS 1786",
    locations: [
      { city: "Mumbai", price: 58500, change: 1.2, trend: "up" },
      { city: "Delhi", price: 59200, change: -0.5, trend: "down" },
      { city: "Chennai", price: 57800, change: 0, trend: "flat" },
      { city: "Kolkata", price: 58900, change: 0.8, trend: "up" },
      { city: "Nagpur", price: 60000, change: 1.5, trend: "up" },
      { city: "Hyderabad", price: 58200, change: -0.3, trend: "down" },
    ],
  },
  {
    name: "HR Coil",
    grade: "IS 2062 E250",
    locations: [
      { city: "Mumbai", price: 52400, change: -0.8, trend: "down" },
      { city: "Delhi", price: 53100, change: 0.4, trend: "up" },
      { city: "Chennai", price: 51900, change: -1.1, trend: "down" },
      { city: "Kolkata", price: 52700, change: 0.2, trend: "up" },
      { city: "Nagpur", price: 53500, change: 0.6, trend: "up" },
      { city: "Hyderabad", price: 52100, change: -0.5, trend: "down" },
    ],
  },
  {
    name: "CR Coil",
    grade: "IS 513",
    locations: [
      { city: "Mumbai", price: 58200, change: 0.5, trend: "up" },
      { city: "Delhi", price: 58900, change: 0.3, trend: "up" },
      { city: "Chennai", price: 57600, change: -0.2, trend: "down" },
      { city: "Kolkata", price: 58400, change: 0.7, trend: "up" },
      { city: "Nagpur", price: 59100, change: 1.0, trend: "up" },
      { city: "Hyderabad", price: 57900, change: 0, trend: "flat" },
    ],
  },
  {
    name: "GI Coil",
    grade: "IS 277",
    locations: [
      { city: "Mumbai", price: 62300, change: 1.8, trend: "up" },
      { city: "Delhi", price: 63100, change: 1.2, trend: "up" },
      { city: "Chennai", price: 61800, change: 0.5, trend: "up" },
      { city: "Kolkata", price: 62600, change: -0.4, trend: "down" },
      { city: "Nagpur", price: 63500, change: 2.1, trend: "up" },
      { city: "Hyderabad", price: 62000, change: 0.3, trend: "up" },
    ],
  },
  {
    name: "Copper Cathode",
    grade: "LME Grade A",
    locations: [
      { city: "Mumbai", price: 745000, change: 0.9, trend: "up" },
      { city: "Delhi", price: 748000, change: 1.1, trend: "up" },
      { city: "Chennai", price: 742000, change: -0.3, trend: "down" },
      { city: "Kolkata", price: 746000, change: 0.6, trend: "up" },
      { city: "Nagpur", price: 749000, change: 1.4, trend: "up" },
      { city: "Hyderabad", price: 743500, change: 0, trend: "flat" },
    ],
  },
  {
    name: "Aluminium Ingot",
    grade: "P1020",
    locations: [
      { city: "Mumbai", price: 218000, change: -1.2, trend: "down" },
      { city: "Delhi", price: 220000, change: -0.8, trend: "down" },
      { city: "Chennai", price: 217000, change: -1.5, trend: "down" },
      { city: "Kolkata", price: 219000, change: -0.5, trend: "down" },
      { city: "Nagpur", price: 221000, change: 0.2, trend: "up" },
      { city: "Hyderabad", price: 218500, change: -0.9, trend: "down" },
    ],
  },
];

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === "up") return <TrendingUp className="h-4 w-4 text-accent" />;
  if (trend === "down") return <TrendingDown className="h-4 w-4 text-destructive" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
};

const DailyMetalPrices = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [search, setSearch] = useState("");
  const cities = ["All", "Mumbai", "Delhi", "Chennai", "Kolkata", "Nagpur", "Hyderabad"];
  const today = new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const filtered = metals.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-3">
            <Calendar className="h-4 w-4" /> {today}
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-3">Daily Metal Prices</h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Real-time prices across 6 cities. Updated every morning from mill and dealer sources.
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-primary-foreground/60">
            <RefreshCw className="h-3.5 w-3.5" /> Last updated: Today, 9:30 AM IST
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card sticky top-16 z-30">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search metal..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCity(c)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  selectedCity === c
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filtered.map((metal) => {
              const locs = selectedCity === "All" ? metal.locations : metal.locations.filter((l) => l.city === selectedCity);
              return (
                <div key={metal.name} className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
                  <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-lg">{metal.name}</h3>
                      <span className="text-xs text-muted-foreground">Grade: {metal.grade}</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">Get Quote</Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border text-muted-foreground">
                          <th className="text-left px-6 py-3 font-medium">Location</th>
                          <th className="text-right px-6 py-3 font-medium">Price (₹/MT)</th>
                          <th className="text-right px-6 py-3 font-medium">Change</th>
                          <th className="text-center px-6 py-3 font-medium">Trend</th>
                        </tr>
                      </thead>
                      <tbody>
                        {locs.map((loc) => (
                          <tr key={loc.city} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                            <td className="px-6 py-3 font-medium text-foreground">{loc.city}</td>
                            <td className="px-6 py-3 text-right font-mono font-bold text-foreground">
                              ₹{loc.price.toLocaleString("en-IN")}
                            </td>
                            <td className={`px-6 py-3 text-right font-semibold ${
                              loc.change > 0 ? "text-accent" : loc.change < 0 ? "text-destructive" : "text-muted-foreground"
                            }`}>
                              {loc.change > 0 ? "+" : ""}{loc.change}%
                            </td>
                            <td className="px-6 py-3 text-center flex justify-center">
                              <TrendIcon trend={loc.trend} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">Need Custom Price Alerts?</h3>
            <p className="text-muted-foreground mb-4">Get notified when prices hit your target. Set up alerts for any metal, grade or location.</p>
            <Button variant="accent">Set Price Alert</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DailyMetalPrices;

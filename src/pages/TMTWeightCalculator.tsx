import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Plus, X, ArrowLeft, Ruler } from "lucide-react";

const DIAMETERS = [6, 8, 10, 12, 16, 20, 25, 32];
const unitWeight = (d: number) => (d * d) / 162;
const crossSection = (d: number) => Math.round((Math.PI * d * d) / 4);

interface Item { dia: number; len: number; qty: number }

const TMTWeightCalculator = () => {
  const [selectedDia, setSelectedDia] = useState(12);
  const [length, setLength] = useState(12);
  const [qty, setQty] = useState(1);
  const [items, setItems] = useState<Item[]>([]);

  const uw = unitWeight(selectedDia);
  const barWt = uw * (length || 0);
  const total = barWt * (qty || 0);

  const grandTotal = useMemo(
    () => items.reduce((s, it) => s + unitWeight(it.dia) * it.len * it.qty, 0),
    [items]
  );

  const addToList = () => {
    if (!length || !qty) return;
    setItems([...items, { dia: selectedDia, len: length, qty }]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-primary py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="tmt-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30h60M30 0v60" stroke="currentColor" strokeWidth="0.3" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tmt-grid)" />
          </svg>
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/market-insights" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent text-sm mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Market Insights
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
              <Ruler className="h-3.5 w-3.5" /> Construction Tool
            </span>
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold text-primary-foreground mb-3">
            TMT Weight Calculator
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl">
            Calculate the weight of TMT steel bars instantly as per IS 1786 standard. Plan procurement, estimate logistics, and avoid material wastage.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {/* Calculator */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl border border-border shadow-card p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-5">
                <Calculator className="h-5 w-5 text-accent" />
                <h2 className="font-heading text-lg font-bold text-foreground">Select diameter (mm)</h2>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
                {DIAMETERS.map((d) => {
                  const active = d === selectedDia;
                  return (
                    <button
                      key={d}
                      onClick={() => setSelectedDia(d)}
                      aria-pressed={active}
                      className={`flex flex-col items-center justify-center py-3 rounded-lg border transition-all ${
                        active
                          ? "bg-accent text-accent-foreground border-accent shadow-md"
                          : "bg-background border-border text-foreground hover:border-accent hover:text-accent"
                      }`}
                    >
                      <span className="font-heading font-extrabold text-lg leading-none">{d}</span>
                      <span className={`text-[10px] mt-1 ${active ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                        {unitWeight(d).toFixed(3)} kg/m
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="length">Length per bar (m)</Label>
                  <Input
                    id="length"
                    type="number"
                    min={0.1}
                    step={0.5}
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qty">Number of bars</Label>
                  <Input
                    id="qty"
                    type="number"
                    min={1}
                    step={1}
                    value={qty}
                    onChange={(e) => setQty(parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4 bg-primary rounded-xl p-4 lg:p-5">
                {[
                  { v: uw.toFixed(3), l: "Unit weight (kg/m)" },
                  { v: barWt.toFixed(2), l: "Weight per bar (kg)" },
                  { v: total.toFixed(2), l: "Total weight (kg)" },
                ].map((m) => (
                  <div key={m.l} className="text-center">
                    <div className="font-heading text-xl lg:text-2xl font-extrabold text-accent">{m.v}</div>
                    <div className="text-[11px] lg:text-xs text-primary-foreground/70 mt-1">{m.l}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mb-5">
                Formula: D² ÷ 162 &nbsp;|&nbsp; Steel density: 7850 kg/m³ &nbsp;|&nbsp; IS 1786
              </p>

              <Button variant="accent" onClick={addToList} className="w-full sm:w-auto">
                <Plus className="h-4 w-4" /> Add to material list
              </Button>
            </div>

            {/* Material list */}
            {items.length > 0 && (
              <div className="bg-card rounded-2xl border border-border shadow-card p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-lg font-bold text-foreground">Material list</h2>
                  <button
                    onClick={() => setItems([])}
                    className="text-sm text-destructive hover:underline inline-flex items-center gap-1"
                  >
                    <X className="h-4 w-4" /> Clear all
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-muted-foreground border-b border-border">
                        <th className="py-2 pr-3">Dia</th>
                        <th className="py-2 pr-3">Length</th>
                        <th className="py-2 pr-3">Qty</th>
                        <th className="py-2 pr-3">Unit wt</th>
                        <th className="py-2 pr-3">Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((it, i) => {
                        const u = unitWeight(it.dia);
                        const t = u * it.len * it.qty;
                        return (
                          <tr key={i} className="border-b border-border/60">
                            <td className="py-2 pr-3 font-medium">{it.dia} mm</td>
                            <td className="py-2 pr-3">{it.len} m</td>
                            <td className="py-2 pr-3">{it.qty}</td>
                            <td className="py-2 pr-3">{u.toFixed(3)}</td>
                            <td className="py-2 pr-3 font-semibold text-accent">{t.toFixed(2)} kg</td>
                            <td className="py-2">
                              <button
                                onClick={() => setItems(items.filter((_, idx) => idx !== i))}
                                className="text-muted-foreground hover:text-destructive"
                                aria-label="Remove row"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={4} className="py-3 pr-3 text-right font-semibold">Grand total</td>
                        <td colSpan={2} className="py-3 font-heading font-extrabold text-primary">
                          {grandTotal.toFixed(2)} kg · {(grandTotal / 1000).toFixed(3)} tonnes
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Reference chart */}
          <aside className="space-y-6">
            <div className="bg-card rounded-2xl border border-border shadow-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-foreground">Reference chart</h3>
                <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-accent/10 text-accent">IS 1786</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground border-b border-border text-xs">
                      <th className="py-2 pr-2">Dia</th>
                      <th className="py-2 pr-2">kg/m</th>
                      <th className="py-2 pr-2">12 m</th>
                      <th className="py-2">mm²</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DIAMETERS.map((d) => {
                      const u = unitWeight(d);
                      const active = d === selectedDia;
                      return (
                        <tr
                          key={d}
                          className={`border-b border-border/60 ${active ? "bg-accent/10 text-foreground font-semibold" : ""}`}
                        >
                          <td className="py-2 pr-2">{d} mm</td>
                          <td className="py-2 pr-2">{u.toFixed(3)}</td>
                          <td className="py-2 pr-2">{(u * 12).toFixed(2)}</td>
                          <td className="py-2">{crossSection(d)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <h3 className="font-heading font-bold mb-2">Need a bulk quote?</h3>
              <p className="text-sm text-primary-foreground/70 mb-4">
                Get the best mill-direct pricing on TMT bars across all major Indian cities.
              </p>
              <Link to="/get-quote">
                <Button variant="accent" className="w-full">Get Quote</Button>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TMTWeightCalculator;

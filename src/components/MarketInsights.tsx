import { TrendingUp, BarChart3, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  { icon: TrendingUp, title: "Steel Price Today", desc: "Daily updated steel prices across all grades and categories." },
  { icon: BarChart3, title: "Metal Market Trends", desc: "Analysis of global and domestic metal market movements." },
  { icon: BookOpen, title: "Procurement Strategy", desc: "Expert guides to optimize your procurement workflow." },
  { icon: FileText, title: "Industry Reports", desc: "In-depth reports on sectors, demand and supply forecasts." },
];

const MarketInsights = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground mb-3">Market Insights</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Stay ahead with real-time prices, trends and procurement intelligence.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{desc}</p>
            <span className="text-sm font-semibold text-accent">Read More →</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketInsights;

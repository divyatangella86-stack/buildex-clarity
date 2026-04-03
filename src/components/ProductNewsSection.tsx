import { ExternalLink, Share2, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
  title: string;
  description: string;
  image: string;
  source: string;
  date: string;
  url: string;
}

const getNewsForProduct = (productName: string): NewsItem[] => [
  {
    title: `${productName} prices surge amid rising demand in Q2 2026`,
    description: `Industry analysts report a significant uptick in ${productName.toLowerCase()} prices driven by infrastructure projects and supply chain constraints across major markets.`,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop",
    source: "Steel Insights India",
    date: "2 Apr 2026",
    url: "https://www.steelinsights.in",
  },
  {
    title: `Government infrastructure push boosts ${productName.toLowerCase()} demand nationwide`,
    description: `The latest government capex allocation for highways and urban development is expected to drive sustained demand for ${productName.toLowerCase()} over the next fiscal year.`,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
    source: "Metal Junction",
    date: "31 Mar 2026",
    url: "https://www.metaljunction.com",
  },
  {
    title: `Global raw material costs impact ${productName.toLowerCase()} pricing`,
    description: `Rising iron ore and coking coal prices on international markets are putting upward pressure on domestic ${productName.toLowerCase()} manufacturing costs.`,
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=250&fit=crop",
    source: "Commodity Online",
    date: "28 Mar 2026",
    url: "https://www.commodityonline.com",
  },
  {
    title: `Quality standards update for ${productName.toLowerCase()} in construction`,
    description: `BIS has announced revised quality benchmarks for ${productName.toLowerCase()} used in commercial and residential construction projects effective next quarter.`,
    image: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=400&h=250&fit=crop",
    source: "Construction World",
    date: "25 Mar 2026",
    url: "https://www.constructionworld.in",
  },
];

const handleWhatsAppShare = (item: NewsItem) => {
  const text = `📰 ${item.title}\n\n${item.description}\n\n🔗 Read more: ${item.url}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
};

const ProductNewsSection = ({ productName }: { productName: string }) => {
  const news = getNewsForProduct(productName);

  return (
    <div className="bg-card rounded-xl border border-border shadow-card p-6">
      <h3 className="font-heading font-bold text-foreground mb-5 flex items-center gap-2">
        <Newspaper className="h-5 w-5 text-accent" />
        Latest {productName} News & Insights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {news.map((item, i) => (
          <article
            key={i}
            className="group rounded-lg border border-border overflow-hidden hover:shadow-md transition-all duration-300 bg-background"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-accent">{item.source}</span>
                <span>{item.date}</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm leading-snug line-clamp-2">
                {item.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  Read More <ExternalLink className="h-3 w-3" />
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto h-7 w-7 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                  onClick={() => handleWhatsAppShare(item)}
                  aria-label="Share on WhatsApp"
                >
                  <Share2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductNewsSection;

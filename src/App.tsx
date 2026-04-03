import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Product from "./pages/Product.tsx";
import DailyMetalPrices from "./pages/DailyMetalPrices.tsx";
import SteelPriceTrends from "./pages/SteelPriceTrends.tsx";
import CommodityReports from "./pages/CommodityReports.tsx";
import IndustryNews from "./pages/IndustryNews.tsx";
import About from "./pages/About.tsx";
import Materials from "./pages/Materials.tsx";
import Industries from "./pages/Industries.tsx";
import Solutions from "./pages/Solutions.tsx";
import MarketInsightsHub from "./pages/MarketInsightsHub.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/daily-metal-prices" element={<DailyMetalPrices />} />
          <Route path="/steel-price-trends" element={<SteelPriceTrends />} />
          <Route path="/commodity-reports" element={<CommodityReports />} />
          <Route path="/industry-news" element={<IndustryNews />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

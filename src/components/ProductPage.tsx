import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, TrendingDown, Minus, Clock, ChevronRight, Shield, Truck, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ProductData } from "@/data/products";
import ProductNewsSection from "@/components/ProductNewsSection";

interface ProductPageProps {
  product: ProductData;
}

const ProductPage = ({ product }: ProductPageProps) => {
  const [selectedLocation, setSelectedLocation] = useState(product.locations[0]);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const [selectedQty, setSelectedQty] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const displayLocations = showAllLocations ? product.locations : product.locations.slice(0, 4);

  const ChangeIcon = selectedLocation.changeType === "up" ? TrendingUp : selectedLocation.changeType === "down" ? TrendingDown : Minus;
  const changeColor = selectedLocation.changeType === "up" ? "text-green-600" : selectedLocation.changeType === "down" ? "text-red-500" : "text-muted-foreground";

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>{product.category}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column — Product Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{product.category}</span>
                <span className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full">Pan India Delivery</span>
              </div>
              <h1 className="font-heading text-2xl lg:text-3xl font-extrabold text-foreground mb-3">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {expanded ? product.fullDescription : product.description}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-accent font-semibold ml-1 hover:underline"
                >
                  {expanded ? "View Less" : "View More"}
                </button>
              </p>
            </div>

            {/* Sub Categories Tabs */}
            <div>
              <div className="flex flex-wrap gap-2">
                {product.subCategories.map((sub, i) => (
                  <button
                    key={sub.slug}
                    className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                      i === 0
                        ? "bg-accent text-accent-foreground border-accent shadow-sm"
                        : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {product.subCategories[0]?.name} Price ({product.grade}) {product.dimension} in {selectedLocation.name}
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground">
                      {selectedLocation.price}
                    </span>
                    <span className={`flex items-center gap-1 text-sm font-semibold ${changeColor}`}>
                      <ChangeIcon className="h-4 w-4" />
                      {selectedLocation.change}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {selectedLocation.updatedAgo}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                  <Truck className="h-3.5 w-3.5" /> Pan India Delivery
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                  <Shield className="h-3.5 w-3.5" /> Get Credit
                </span>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 mb-5">
                <p className="text-sm text-foreground">
                  💡 The average price last month was <span className="font-bold">{product.avgLastMonth}</span>! Get price drop insights!
                </p>
              </div>

              <Button variant="accent" className="w-full sm:w-auto" size="lg">
                Get Latest Prices
              </Button>
            </div>

            {/* Location Selector */}
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-4.5 w-4.5 text-accent" />
                Location
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {displayLocations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => setSelectedLocation(loc)}
                    className={`text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                      selectedLocation.name === loc.name
                        ? "bg-accent/10 border-accent text-accent font-semibold"
                        : "bg-background border-border text-foreground hover:border-accent/50"
                    }`}
                  >
                    <span className="block font-medium">{loc.name}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{loc.price}</span>
                  </button>
                ))}
              </div>
              {product.locations.length > 4 && (
                <button
                  onClick={() => setShowAllLocations(!showAllLocations)}
                  className="text-accent text-sm font-semibold mt-3 hover:underline"
                >
                  {showAllLocations ? "Show Less" : "More"}
                </button>
              )}
            </div>

            {/* Specs */}
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <h3 className="font-heading font-bold text-foreground mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <span className="text-xs text-muted-foreground block mb-1">Grade</span>
                  <span className="font-semibold text-foreground text-sm">{product.grade}</span>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <span className="text-xs text-muted-foreground block mb-1">Dimension</span>
                  <span className="font-semibold text-foreground text-sm">{product.dimension}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <h3 className="font-heading font-bold text-foreground mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest News */}
            <ProductNewsSection productName={product.name} />

            {/* Can't find */}
            <div className="bg-muted rounded-xl p-5 text-center">
              <p className="text-sm text-muted-foreground mb-2">Can't find what you are looking for?</p>
              <Button variant="outline" size="sm" className="text-accent border-accent hover:bg-accent/10">
                Click Here
              </Button>
            </div>
          </div>

          {/* Right Column — Enquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-card rounded-xl border border-border shadow-card p-6">
                <div className="bg-accent/10 rounded-lg p-4 mb-6 text-center">
                  <h3 className="font-heading font-bold text-foreground text-lg">Get Prices for Bulk Deals!</h3>
                  <p className="text-xs text-muted-foreground mt-1">Fill in your requirements and get the best quotes</p>
                </div>

                <div className="space-y-4">
                  {/* Quantity */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Required Quantity</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["20-30 MT", "40-50 MT", "50 MT+"].map((qty) => (
                        <button
                          key={qty}
                          onClick={() => setSelectedQty(qty)}
                          className={`px-3 py-2.5 text-xs font-medium rounded-lg border transition-all ${
                            selectedQty === qty
                              ? "bg-accent text-accent-foreground border-accent"
                              : "bg-background border-border text-foreground hover:border-accent"
                          }`}
                        >
                          {qty}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Your Company Name</label>
                    <Input placeholder="Enter company name" />
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Delivery Pincode</label>
                    <Input placeholder="Enter pincode" type="number" />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Mobile Number</label>
                    <div className="flex gap-2">
                      <Input placeholder="Enter mobile number" type="tel" className="flex-1" />
                      <Button variant="outline" size="default" className="shrink-0 text-accent border-accent hover:bg-accent/10 text-xs">
                        Get OTP
                      </Button>
                    </div>
                  </div>

                  {/* OTP */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">OTP</label>
                    <Input placeholder="Enter OTP" type="number" />
                  </div>

                  {/* Submit */}
                  <Button variant="accent" className="w-full" size="lg">
                    Send Enquiry!
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-4 w-4 text-accent" />
                      Verified Suppliers
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Truck className="h-4 w-4 text-accent" />
                      Pan India Delivery
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Quality Assured
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      Best Market Price
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

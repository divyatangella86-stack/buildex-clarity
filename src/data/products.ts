export interface ProductSubCategory {
  name: string;
  slug: string;
}

export interface ProductLocation {
  name: string;
  price: string;
  change: string;
  changeType: "up" | "down" | "neutral";
  updatedAgo: string;
}

export interface ProductData {
  slug: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  heroImage: string;
  grade: string;
  dimension: string;
  subCategories: ProductSubCategory[];
  locations: ProductLocation[];
  avgLastMonth: string;
  features: string[];
}

export const products: ProductData[] = [
  {
    slug: "tmt-bars",
    name: "TMT Bars",
    category: "Steel",
    description:
      "TMT Bar (rebar) is produced from MS billets through the blast furnace (BF) process, resulting in a pure and strong form of steel with no to fewer impurities. TMT bars are thermo-mechanically treated to enhance strength, ductility, and weldability — making them ideal for construction and infrastructure projects across India.",
    fullDescription:
      "TMT (Thermo-Mechanically Treated) Bars are high-strength reinforcement bars with a tough outer core and a soft inner core. The manufacturing process involves quenching the hot rolled bars through a series of water cooling systems, which hardens the outer surface while keeping the core warm and soft. This unique combination gives TMT bars superior properties including high yield strength, better ductility, excellent bendability, and superior corrosion resistance. They conform to IS 1786:2008 standards and are available in grades Fe 415, Fe 500, Fe 500D, Fe 550D, and Fe 600.",
    heroImage: "",
    grade: "Fe 500D",
    dimension: "12 to 32mm",
    subCategories: [
      { name: "Primary TMT", slug: "primary-tmt" },
      { name: "Secondary TMT", slug: "secondary-tmt" },
      { name: "MS Hot Rolled Coils", slug: "ms-hrc" },
      { name: "Cold Rolled Coils", slug: "crc" },
      { name: "Hot Rolled Plates", slug: "hr-plates" },
      { name: "GI Coil", slug: "gi-coil" },
    ],
    locations: [
      { name: "Nagpur", price: "₹60,000/MT", change: "0%", changeType: "neutral", updatedAgo: "1 day ago" },
      { name: "Bhilai", price: "₹59,500/MT", change: "-0.8%", changeType: "down", updatedAgo: "2 days ago" },
      { name: "Raigarh", price: "₹59,800/MT", change: "+0.2%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Kanpur", price: "₹61,200/MT", change: "+1.5%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Mumbai", price: "₹62,000/MT", change: "+0.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹61,800/MT", change: "-0.3%", changeType: "down", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹59,900",
    features: [
      "High tensile strength (Fe 500D grade)",
      "Superior corrosion resistance",
      "Excellent weldability & bendability",
      "Earthquake resistant properties",
      "BIS certified (IS 1786:2008)",
      "Pan India delivery within 3-5 days",
    ],
  },
  {
    slug: "hr-coils",
    name: "HR Coils",
    category: "Steel",
    description:
      "Hot Rolled Coils (HRC) are manufactured by rolling steel slabs at temperatures above 1700°F. The process makes the steel easier to form, resulting in large coils used across automotive, construction, pipe manufacturing, and general fabrication industries.",
    fullDescription:
      "Hot Rolled Coils (HRC) are one of the most versatile steel products in the market. Produced by rolling heated steel slabs through a series of rollers at extremely high temperatures, these coils are characterized by their slightly rough surface, rounded edges, and slight distortions. HRC is the go-to material for applications where precise shapes and tolerances are not critical. It is widely used in structural components, railway tracks, automotive frames, agricultural equipment, and general fabrication. Available in thicknesses ranging from 1.6mm to 25mm and widths from 900mm to 2100mm, conforming to IS 2062:2011 standards.",
    heroImage: "",
    grade: "E250 / E350",
    dimension: "1.6mm to 12mm",
    subCategories: [
      { name: "HR Coils", slug: "hr-coils" },
      { name: "HR Sheets", slug: "hr-sheets" },
      { name: "HR Plates", slug: "hr-plates" },
      { name: "CR Coils", slug: "cr-coils" },
      { name: "GP Coils", slug: "gp-coils" },
      { name: "PPGI Coils", slug: "ppgi-coils" },
    ],
    locations: [
      { name: "Mumbai", price: "₹52,500/MT", change: "+1.2%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Pune", price: "₹52,800/MT", change: "+0.8%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹53,200/MT", change: "+1.5%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Jamshedpur", price: "₹51,000/MT", change: "-0.5%", changeType: "down", updatedAgo: "1 day ago" },
      { name: "Hyderabad", price: "₹53,500/MT", change: "+0.3%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Ahmedabad", price: "₹52,200/MT", change: "0%", changeType: "neutral", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹51,800",
    features: [
      "IS 2062:2011 certified quality",
      "Multiple thickness options (1.6–25mm)",
      "Suitable for structural & fabrication use",
      "High formability and weldability",
      "Mill-direct sourcing from SAIL, JSW, Tata",
      "Competitive bulk pricing",
    ],
  },
  {
    slug: "copper-cathodes",
    name: "Copper Cathodes",
    category: "Copper",
    description:
      "Copper Cathodes are 99.99% pure electrolytic copper sheets produced through electro-refining. They serve as the primary raw material for manufacturing copper rods, wires, tubes, and various alloys used in electrical, electronics, and construction industries.",
    fullDescription:
      "Copper Cathodes are refined copper sheets with 99.99% purity (Grade A as per LME standards). Produced through the electrolytic refining process, these cathodes are the starting point for virtually all copper products. They are melted and cast into various semi-finished forms including rods, wires, strips, tubes, and bus bars. Copper cathodes conform to IS 191:2009 and BS EN 1978:1998 standards. The exceptional electrical conductivity, thermal conductivity, and corrosion resistance of copper make cathodes indispensable for electrical wiring, electronics, plumbing, roofing, and industrial machinery. India imports a significant portion of its copper cathode requirements, making reliable sourcing and competitive pricing crucial for businesses.",
    heroImage: "",
    grade: "Grade A (99.99%)",
    dimension: "Standard LME size",
    subCategories: [
      { name: "Copper Cathodes", slug: "copper-cathodes" },
      { name: "Copper Rods", slug: "copper-rods" },
      { name: "Copper Wires", slug: "copper-wires" },
      { name: "Copper Tubes", slug: "copper-tubes" },
      { name: "Copper Strips", slug: "copper-strips" },
      { name: "Copper Bus Bars", slug: "copper-bus-bars" },
    ],
    locations: [
      { name: "Mumbai", price: "₹7,85,000/MT", change: "+2.1%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹7,88,000/MT", change: "+1.8%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹7,82,000/MT", change: "+1.5%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Kolkata", price: "₹7,80,000/MT", change: "+0.9%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Jamnagar", price: "₹7,83,500/MT", change: "+1.2%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Silvassa", price: "₹7,81,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "3 days ago" },
    ],
    avgLastMonth: "₹7,70,000",
    features: [
      "99.99% purity (LME Grade A)",
      "IS 191:2009 certified",
      "Sourced from Hindalco, Vedanta, and imports",
      "Excellent electrical conductivity",
      "Corrosion resistant",
      "Competitive pricing for bulk orders",
    ],
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

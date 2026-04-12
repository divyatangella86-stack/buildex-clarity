import productTmtBars from "@/assets/product-tmt-bars.jpg";
import productHrCoils from "@/assets/product-hr-coils.jpg";
import productCopperCathodes from "@/assets/product-copper-cathodes.jpg";
import productRoundBars from "@/assets/product-round-bars.jpg";
import productBindingWire from "@/assets/product-binding-wire.jpg";
import productHrSheets from "@/assets/product-hr-sheets.jpg";
import productCrSheets from "@/assets/product-cr-sheets.jpg";
import productChequeredPlates from "@/assets/product-chequered-plates.jpg";
import productMsBeam from "@/assets/product-ms-beam.jpg";
import productMsChannel from "@/assets/product-ms-channel.jpg";
import productMsAngle from "@/assets/product-ms-angle.jpg";
import productMsFlat from "@/assets/product-ms-flat.jpg";
import productRoundPipe from "@/assets/product-round-pipe.jpg";
import productSquarePipe from "@/assets/product-square-pipe.jpg";
import productRectangularPipe from "@/assets/product-rectangular-pipe.jpg";
import productGiProducts from "@/assets/product-gi-products.jpg";
import productRoofingSheets from "@/assets/product-roofing-sheets.jpg";
import productAluminiumIngots from "@/assets/product-aluminium-ingots.jpg";
import productAluminiumCoils from "@/assets/product-aluminium-coils.jpg";
import productAluminiumSheets from "@/assets/product-aluminium-sheets.jpg";
import productAluminiumExtrusions from "@/assets/product-aluminium-extrusions.jpg";

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
  subcategory: string;
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
  // ─── LONG PRODUCTS ────────────────────────────────────
  {
    slug: "tmt-bars",
    name: "TMT Bars",
    category: "Steel",
    subcategory: "Long Products",
    description:
      "TMT Bar (rebar) is produced from MS billets through the blast furnace (BF) process, resulting in a pure and strong form of steel with no to fewer impurities. TMT bars are thermo-mechanically treated to enhance strength, ductility, and weldability — making them ideal for construction and infrastructure projects across India.",
    fullDescription:
      "TMT (Thermo-Mechanically Treated) Bars are high-strength reinforcement bars with a tough outer core and a soft inner core. The manufacturing process involves quenching the hot rolled bars through a series of water cooling systems, which hardens the outer surface while keeping the core warm and soft. This unique combination gives TMT bars superior properties including high yield strength, better ductility, excellent bendability, and superior corrosion resistance. They conform to IS 1786:2008 standards and are available in grades Fe 415, Fe 500, Fe 500D, Fe 550D, and Fe 600.",
    heroImage: productTmtBars,
    grade: "Fe 500D",
    dimension: "8mm to 32mm",
    subCategories: [
      { name: "Primary TMT", slug: "primary-tmt" },
      { name: "Secondary TMT", slug: "secondary-tmt" },
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
    slug: "round-bars",
    name: "Round Bars",
    category: "Steel",
    subcategory: "Long Products",
    description:
      "MS Round Bars are solid cylindrical steel bars used extensively in fabrication, manufacturing, and construction. They are produced by hot rolling mild steel billets and are available in various diameters to suit diverse industrial applications.",
    fullDescription:
      "Mild Steel (MS) Round Bars are versatile long products with a circular cross-section. Manufactured through hot rolling of steel billets, these bars are known for their excellent machinability, weldability, and formability. They are widely used in manufacturing shafts, axles, bolts, studs, anchor rods, and various machine components. Available in diameters from 6mm to 125mm, MS Round Bars conform to IS 2062:2011 standards. They serve as essential raw material in engineering workshops, automotive parts manufacturing, construction projects, and agricultural equipment fabrication.",
    heroImage: productRoundBars,
    grade: "IS 2062 E250",
    dimension: "6mm to 125mm",
    subCategories: [
      { name: "Bright Bars", slug: "bright-bars" },
      { name: "Black Bars", slug: "black-bars" },
    ],
    locations: [
      { name: "Mumbai", price: "₹52,000/MT", change: "+0.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹52,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Pune", price: "₹51,800/MT", change: "0%", changeType: "neutral", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹53,000/MT", change: "+1.2%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Ahmedabad", price: "₹52,200/MT", change: "-0.3%", changeType: "down", updatedAgo: "2 days ago" },
      { name: "Kolkata", price: "₹52,800/MT", change: "+0.6%", changeType: "up", updatedAgo: "1 day ago" },
    ],
    avgLastMonth: "₹51,500",
    features: [
      "Excellent machinability",
      "High weldability & formability",
      "IS 2062:2011 certified",
      "Multiple diameter options (6–125mm)",
      "Suitable for fabrication & machining",
      "Available in bright & black finish",
    ],
  },
  {
    slug: "binding-wire",
    name: "Binding Wire",
    category: "Steel",
    subcategory: "Long Products",
    description:
      "Binding Wire is a thin, flexible steel wire used primarily for tying reinforcement bars (rebars) together at construction sites. Made from mild steel, it ensures the structural integrity of reinforced concrete frameworks.",
    fullDescription:
      "MS Binding Wire is an essential construction material produced by drawing mild steel wire rods through progressively smaller dies. Available in gauges from 18 to 22 (0.7mm to 1.2mm diameter), binding wire is soft, pliable, and easy to work with. It is primarily used for tying TMT bars and rebars at construction sites to maintain the reinforcement cage structure during concrete pouring. The wire is available in both black annealed and galvanized finishes. Black annealed wire offers better flexibility while galvanized wire provides corrosion resistance for exposed applications. Conforms to IS 280:2006 standards.",
    heroImage: productBindingWire,
    grade: "MS (Mild Steel)",
    dimension: "18 to 22 Gauge",
    subCategories: [
      { name: "Black Annealed Wire", slug: "black-annealed-wire" },
      { name: "GI Binding Wire", slug: "gi-binding-wire" },
    ],
    locations: [
      { name: "Mumbai", price: "₹55,000/MT", change: "+0.3%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹55,500/MT", change: "+0.5%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Nagpur", price: "₹54,800/MT", change: "0%", changeType: "neutral", updatedAgo: "1 day ago" },
      { name: "Kolkata", price: "₹55,200/MT", change: "-0.2%", changeType: "down", updatedAgo: "3 days ago" },
      { name: "Hyderabad", price: "₹55,000/MT", change: "+0.4%", changeType: "up", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹54,500",
    features: [
      "High flexibility & pliability",
      "Available in 18–22 gauge",
      "Black annealed & GI finishes",
      "IS 280:2006 certified",
      "Essential for rebar tying",
      "Bulk supply for large projects",
    ],
  },

  // ─── FLAT PRODUCTS ────────────────────────────────────
  {
    slug: "hr-coils",
    name: "HR Coils",
    category: "Steel",
    subcategory: "Flat Products",
    description:
      "Hot Rolled Coils (HRC) are manufactured by rolling steel slabs at temperatures above 1700°F. The process makes the steel easier to form, resulting in large coils used across automotive, construction, pipe manufacturing, and general fabrication industries.",
    fullDescription:
      "Hot Rolled Coils (HRC) are one of the most versatile steel products in the market. Produced by rolling heated steel slabs through a series of rollers at extremely high temperatures, these coils are characterized by their slightly rough surface, rounded edges, and slight distortions. HRC is the go-to material for applications where precise shapes and tolerances are not critical. It is widely used in structural components, railway tracks, automotive frames, agricultural equipment, and general fabrication. Available in thicknesses ranging from 1.6mm to 25mm and widths from 900mm to 2100mm, conforming to IS 2062:2011 standards.",
    heroImage: productHrCoils,
    grade: "E250 / E350",
    dimension: "1.6mm to 12mm",
    subCategories: [
      { name: "HR Coils", slug: "hr-coils" },
      { name: "HR Sheets", slug: "hr-sheets" },
      { name: "HR Plates", slug: "hr-plates" },
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
    slug: "hr-sheets-plates",
    name: "HR Sheets & Plates",
    category: "Steel",
    subcategory: "Flat Products",
    description:
      "Hot Rolled Sheets and Plates are flat steel products cut from HR coils or produced directly from slabs. They are used in heavy structural applications, ship building, pressure vessels, and industrial machinery manufacturing.",
    fullDescription:
      "Hot Rolled Sheets and Plates are essential flat steel products available in a wide range of thicknesses. Sheets typically range from 1.6mm to 6mm, while plates start from 6mm and go up to 120mm thickness. They are produced by rolling steel slabs at high temperatures and are characterized by their scale-free surface after pickling. Used extensively in structural fabrication, boiler manufacturing, shipbuilding, bridge construction, and heavy machinery. Available in grades E250, E350, and SA516 Gr.70, conforming to IS 2062:2011 and ASTM A36 standards.",
    heroImage: productHrSheets,
    grade: "E250 / E350",
    dimension: "1.6mm to 120mm",
    subCategories: [
      { name: "HR Sheets", slug: "hr-sheets" },
      { name: "HR Plates", slug: "hr-plates" },
      { name: "Boiler Plates", slug: "boiler-plates" },
    ],
    locations: [
      { name: "Mumbai", price: "₹54,000/MT", change: "+0.8%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹54,500/MT", change: "+1.0%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Pune", price: "₹53,800/MT", change: "+0.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Jamshedpur", price: "₹52,500/MT", change: "-0.3%", changeType: "down", updatedAgo: "3 days ago" },
      { name: "Delhi", price: "₹54,200/MT", change: "+0.6%", changeType: "up", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹53,200",
    features: [
      "Wide thickness range (1.6–120mm)",
      "IS 2062 & ASTM A36 certified",
      "Suitable for heavy structural work",
      "Mill test certificates provided",
      "Custom cutting available",
      "Sourced from SAIL, JSW, ESSAR",
    ],
  },
  {
    slug: "cr-sheets",
    name: "CR Sheets",
    category: "Steel",
    subcategory: "Flat Products",
    description:
      "Cold Rolled Sheets are produced by further processing hot rolled coils at room temperature, resulting in thinner gauges with superior surface finish, tighter tolerances, and improved mechanical properties.",
    fullDescription:
      "Cold Rolled (CR) Sheets are premium flat steel products manufactured by passing hot rolled coils through cold reduction mills at room temperature. This process yields sheets with excellent surface finish, precise dimensional tolerances, and enhanced mechanical properties. CR sheets are widely used in automobile body panels, white goods (refrigerators, washing machines), furniture, electrical panels, and precision engineering components. Available in thicknesses from 0.3mm to 3.15mm with various surface finishes including bright, matte, and skin-pass. Conforms to IS 513:2008 and JIS G3141 standards.",
    heroImage: productCrSheets,
    grade: "CR1 / CR2 / CR3",
    dimension: "0.3mm to 3.15mm",
    subCategories: [
      { name: "CR Sheets", slug: "cr-sheets" },
      { name: "CR Coils", slug: "cr-coils" },
      { name: "CRCA Sheets", slug: "crca-sheets" },
    ],
    locations: [
      { name: "Mumbai", price: "₹58,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Pune", price: "₹58,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Delhi", price: "₹59,000/MT", change: "+1.2%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹58,200/MT", change: "+0.5%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Ahmedabad", price: "₹57,800/MT", change: "-0.2%", changeType: "down", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹57,200",
    features: [
      "Superior surface finish",
      "Tight dimensional tolerances",
      "IS 513:2008 certified",
      "Ideal for auto & white goods",
      "Multiple finish options available",
      "Thickness 0.3mm to 3.15mm",
    ],
  },
  {
    slug: "chequered-plates",
    name: "Chequered Plates",
    category: "Steel",
    subcategory: "Flat Products",
    description:
      "Chequered Plates (also called checker plates or tread plates) are steel plates with a raised diamond or tear-drop pattern on one side, providing excellent anti-slip properties for flooring and platform applications.",
    fullDescription:
      "MS Chequered Plates are flat steel products with a distinctive raised pattern on one surface that provides superior grip and anti-slip properties. The pattern can be diamond, tear-drop, or 5-bar design. These plates are manufactured by hot rolling steel slabs with patterned rollers. Widely used for industrial flooring, staircase treads, platform decking, truck beds, ramps, and walkways. Available in thicknesses from 2mm to 12mm (base thickness) with widths up to 2500mm. Conforms to IS 3502:2009 standards and available in E250 grade.",
    heroImage: productChequeredPlates,
    grade: "E250 (IS 3502)",
    dimension: "2mm to 12mm",
    subCategories: [
      { name: "Diamond Pattern", slug: "diamond-pattern" },
      { name: "Tear Drop Pattern", slug: "tear-drop-pattern" },
    ],
    locations: [
      { name: "Mumbai", price: "₹56,500/MT", change: "+0.7%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹57,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Kolkata", price: "₹56,000/MT", change: "0%", changeType: "neutral", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹56,800/MT", change: "+0.5%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Hyderabad", price: "₹56,200/MT", change: "-0.3%", changeType: "down", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹55,800",
    features: [
      "Anti-slip raised pattern surface",
      "IS 3502:2009 certified",
      "Ideal for industrial flooring",
      "Available in diamond & tear-drop",
      "Custom sizes available",
      "Durable & weather resistant",
    ],
  },

  // ─── STRUCTURAL SECTIONS ──────────────────────────────
  {
    slug: "ms-beam",
    name: "MS Beam",
    category: "Steel",
    subcategory: "Structural Sections",
    description:
      "MS Beams (I-Beams or H-Beams) are structural steel sections with an I or H-shaped cross-section, primarily used as main load-bearing members in construction, bridges, and industrial buildings.",
    fullDescription:
      "Mild Steel Beams are essential structural sections with I-shaped or H-shaped cross-sections designed to carry heavy loads. They are manufactured by hot rolling steel billets through a series of forming passes. MS Beams provide excellent structural support and are the backbone of modern construction — used in building frames, bridge supports, industrial sheds, columns, and heavy machinery foundations. Available in sizes from ISMB 100 to ISMB 600 and ISHB 150 to ISHB 450, conforming to IS 2062:2011 and IS 808:1989 standards. Sourced from SAIL, Jindal, and other major mills.",
    heroImage: productMsBeam,
    grade: "E250 (IS 2062)",
    dimension: "ISMB 100 to ISMB 600",
    subCategories: [
      { name: "ISMB", slug: "ismb" },
      { name: "ISHB", slug: "ishb" },
      { name: "NPB / WPB", slug: "npb-wpb" },
    ],
    locations: [
      { name: "Mumbai", price: "₹58,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹58,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Kolkata", price: "₹57,500/MT", change: "+0.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹58,200/MT", change: "+1.2%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Pune", price: "₹57,800/MT", change: "0%", changeType: "neutral", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹57,000",
    features: [
      "High load-bearing capacity",
      "IS 2062 & IS 808 certified",
      "ISMB & ISHB sections available",
      "Sourced from SAIL & Jindal",
      "Custom length cutting",
      "Ideal for construction & bridges",
    ],
  },
  {
    slug: "ms-channel",
    name: "MS Channel",
    category: "Steel",
    subcategory: "Structural Sections",
    description:
      "MS Channels are C-shaped structural steel sections used for framing, support structures, brackets, and general construction. They offer excellent structural rigidity and are easy to fabricate.",
    fullDescription:
      "Mild Steel Channels (also known as C-channels or U-channels) are structural sections with a C-shaped cross-section consisting of a web and two flanges. Manufactured through hot rolling, MS channels provide excellent structural support for framing, bracing, and support applications. They are widely used in building frames, vehicle chassis, machinery supports, shelving systems, and industrial structures. Available in sizes from ISMC 75 to ISMC 400 and ISLC 75 to ISLC 400, conforming to IS 2062:2011 and IS 808:1989 standards.",
    heroImage: productMsChannel,
    grade: "E250 (IS 2062)",
    dimension: "ISMC 75 to ISMC 400",
    subCategories: [
      { name: "ISMC", slug: "ismc" },
      { name: "ISLC", slug: "islc" },
      { name: "MC Channel", slug: "mc-channel" },
    ],
    locations: [
      { name: "Mumbai", price: "₹57,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹58,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Pune", price: "₹57,200/MT", change: "+0.3%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Kolkata", price: "₹57,000/MT", change: "-0.2%", changeType: "down", updatedAgo: "3 days ago" },
      { name: "Ahmedabad", price: "₹57,500/MT", change: "+0.5%", changeType: "up", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹56,800",
    features: [
      "C-shaped structural section",
      "IS 2062 & IS 808 certified",
      "ISMC & ISLC available",
      "Easy to fabricate & weld",
      "Ideal for framing & support",
      "Multiple sizes in stock",
    ],
  },
  {
    slug: "ms-angle",
    name: "MS Angle",
    category: "Steel",
    subcategory: "Structural Sections",
    description:
      "MS Angles are L-shaped structural steel sections used for frames, brackets, supports, and various construction applications. They provide structural rigidity at joints and corners.",
    fullDescription:
      "Mild Steel Angles are L-shaped structural sections formed by hot rolling steel billets. Available in equal and unequal leg configurations, MS angles are among the most versatile structural sections. They are extensively used in transmission towers, structural frameworks, machinery frames, racks & shelving, grating supports, and architectural elements. Equal angles range from 20x20mm to 200x200mm while unequal angles offer different leg lengths for specialized applications. Conforms to IS 2062:2011 and IS 808:1989 standards with standard lengths of 6m, 9m, and 12m.",
    heroImage: productMsAngle,
    grade: "E250 (IS 2062)",
    dimension: "20x20mm to 200x200mm",
    subCategories: [
      { name: "Equal Angle", slug: "equal-angle" },
      { name: "Unequal Angle", slug: "unequal-angle" },
    ],
    locations: [
      { name: "Mumbai", price: "₹55,000/MT", change: "+0.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹55,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Kolkata", price: "₹54,800/MT", change: "0%", changeType: "neutral", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹55,200/MT", change: "+0.6%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Ahmedabad", price: "₹54,500/MT", change: "-0.5%", changeType: "down", updatedAgo: "2 days ago" },
      { name: "Hyderabad", price: "₹55,000/MT", change: "+0.3%", changeType: "up", updatedAgo: "1 day ago" },
    ],
    avgLastMonth: "₹54,200",
    features: [
      "L-shaped structural section",
      "Equal & unequal leg options",
      "IS 2062 & IS 808 certified",
      "Ideal for towers & frameworks",
      "Standard 6m/9m/12m lengths",
      "High structural rigidity",
    ],
  },
  {
    slug: "ms-flat",
    name: "MS Flat",
    category: "Steel",
    subcategory: "Structural Sections",
    description:
      "MS Flat Bars are rectangular cross-section steel bars used in fabrication, grills, gates, machinery parts, and various structural applications. They offer good strength and easy workability.",
    fullDescription:
      "Mild Steel Flat Bars are versatile products with a rectangular cross-section, manufactured by hot rolling steel billets. They are used across diverse applications including window grills, gates & railings, automotive leaf springs, agricultural implements, clamps, brackets, and general fabrication work. Available in widths from 12mm to 200mm and thicknesses from 3mm to 40mm, with standard lengths of 6m. MS Flats are known for their excellent weldability, machinability, and surface finish. Conforms to IS 2062:2011 standards and sourced from leading mills.",
    heroImage: productMsFlat,
    grade: "E250 (IS 2062)",
    dimension: "12mm to 200mm width",
    subCategories: [
      { name: "MS Flat Bar", slug: "ms-flat-bar" },
      { name: "Spring Steel Flat", slug: "spring-steel-flat" },
    ],
    locations: [
      { name: "Mumbai", price: "₹54,000/MT", change: "+0.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹54,500/MT", change: "+0.7%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Pune", price: "₹53,800/MT", change: "0%", changeType: "neutral", updatedAgo: "1 day ago" },
      { name: "Kolkata", price: "₹54,200/MT", change: "+0.4%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Hyderabad", price: "₹53,500/MT", change: "-0.3%", changeType: "down", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹53,500",
    features: [
      "Rectangular cross-section",
      "Width 12mm to 200mm",
      "IS 2062:2011 certified",
      "Excellent weldability",
      "Ideal for grills & fabrication",
      "Smooth surface finish",
    ],
  },

  // ─── PIPES & TUBES ────────────────────────────────────
  {
    slug: "round-pipe",
    name: "Round Pipe",
    category: "Steel",
    subcategory: "Pipes & Tubes",
    description:
      "MS Round Pipes are hollow circular-section steel tubes used in plumbing, structural support, scaffolding, fencing, and fluid transportation across construction and industrial applications.",
    fullDescription:
      "Mild Steel Round Pipes are hollow tubular products with circular cross-sections manufactured through ERW (Electric Resistance Welding) or seamless processes. They are one of the most widely used steel products serving applications from structural support columns and scaffolding to water supply, gas distribution, and mechanical engineering. Available in sizes from 15mm NB (½ inch) to 300mm NB (12 inch) with various wall thicknesses. MS Round Pipes conform to IS 1239:2004, IS 3589:2001, and IS 4923:1997 standards. Available in light, medium, and heavy grades.",
    heroImage: productRoundPipe,
    grade: "IS 1239 / IS 4923",
    dimension: "15mm to 300mm NB",
    subCategories: [
      { name: "ERW Pipes", slug: "erw-pipes" },
      { name: "Seamless Pipes", slug: "seamless-pipes" },
      { name: "GI Round Pipes", slug: "gi-round-pipes" },
    ],
    locations: [
      { name: "Mumbai", price: "₹56,000/MT", change: "+0.8%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹56,500/MT", change: "+1.0%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Pune", price: "₹55,800/MT", change: "+0.3%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹56,200/MT", change: "+0.5%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Ahmedabad", price: "₹55,500/MT", change: "-0.2%", changeType: "down", updatedAgo: "2 days ago" },
      { name: "Kolkata", price: "₹56,000/MT", change: "+0.6%", changeType: "up", updatedAgo: "1 day ago" },
    ],
    avgLastMonth: "₹55,200",
    features: [
      "Circular hollow section",
      "IS 1239 & IS 4923 certified",
      "ERW & seamless options",
      "Light, medium & heavy grades",
      "Suitable for structural & plumbing",
      "GI coating available",
    ],
  },
  {
    slug: "square-pipe",
    name: "Square Pipe",
    category: "Steel",
    subcategory: "Pipes & Tubes",
    description:
      "MS Square Pipes are hollow square-section steel tubes used for structural frameworks, furniture manufacturing, railings, gates, and architectural applications requiring clean aesthetic lines.",
    fullDescription:
      "Mild Steel Square Pipes (also known as Square Hollow Sections - SHS) are manufactured through ERW process from HR coils. They feature equal-sided square cross-sections with rounded corners and provide excellent structural strength with uniform load distribution. Square pipes are preferred for applications requiring aesthetic appeal combined with structural integrity — including modern furniture, handrails, window frames, gates, commercial shelving, and architectural structures. Available in sizes from 12x12mm to 200x200mm with wall thicknesses from 0.8mm to 6mm. Conforms to IS 4923:1997 standards.",
    heroImage: productSquarePipe,
    grade: "IS 4923 YSt 210",
    dimension: "12x12mm to 200x200mm",
    subCategories: [
      { name: "MS Square Pipe", slug: "ms-square-pipe" },
      { name: "GI Square Pipe", slug: "gi-square-pipe" },
    ],
    locations: [
      { name: "Mumbai", price: "₹57,500/MT", change: "+0.6%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹58,000/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Pune", price: "₹57,200/MT", change: "+0.3%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹57,800/MT", change: "+0.5%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Kolkata", price: "₹57,000/MT", change: "-0.3%", changeType: "down", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹56,500",
    features: [
      "Square hollow section (SHS)",
      "IS 4923:1997 certified",
      "Uniform load distribution",
      "Clean aesthetic finish",
      "Sizes 12x12 to 200x200mm",
      "Ideal for furniture & structures",
    ],
  },
  {
    slug: "rectangular-pipe",
    name: "Rectangular Pipe",
    category: "Steel",
    subcategory: "Pipes & Tubes",
    description:
      "MS Rectangular Pipes are hollow rectangular-section steel tubes widely used in structural construction, vehicle chassis, mechanical engineering, and industrial frameworks where directional load bearing is needed.",
    fullDescription:
      "Mild Steel Rectangular Pipes (Rectangular Hollow Sections - RHS) are manufactured through ERW process and offer different dimensions on each side, allowing optimized material usage based on load direction. They are ideal for applications where loads are primarily in one direction — such as trailer frames, purlins, trusses, and mezzanine floors. The rectangular profile provides higher bending resistance in the direction of the longer side. Available in sizes from 20x10mm to 250x150mm with wall thicknesses from 0.8mm to 6mm. Conforms to IS 4923:1997 and EN 10219 standards.",
    heroImage: productRectangularPipe,
    grade: "IS 4923 YSt 210",
    dimension: "20x10mm to 250x150mm",
    subCategories: [
      { name: "MS Rectangular Pipe", slug: "ms-rectangular-pipe" },
      { name: "GI Rectangular Pipe", slug: "gi-rectangular-pipe" },
    ],
    locations: [
      { name: "Mumbai", price: "₹57,000/MT", change: "+0.7%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹57,500/MT", change: "+0.9%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Pune", price: "₹56,800/MT", change: "+0.4%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹57,200/MT", change: "+0.6%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Ahmedabad", price: "₹56,500/MT", change: "-0.2%", changeType: "down", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹56,200",
    features: [
      "Rectangular hollow section (RHS)",
      "IS 4923 & EN 10219 certified",
      "Directional load optimization",
      "Multiple size combinations",
      "Ideal for chassis & trusses",
      "MS & GI finish available",
    ],
  },

  // ─── COATED STEEL ─────────────────────────────────────
  {
    slug: "gi-products",
    name: "GI Products",
    category: "Steel",
    subcategory: "Coated Steel",
    description:
      "Galvanized Iron (GI) Products include coils, sheets, pipes, and wires coated with zinc through hot-dip galvanization, providing superior corrosion resistance for outdoor and industrial applications.",
    fullDescription:
      "Galvanized Iron (GI) Products are steel products coated with a layer of zinc through the hot-dip galvanization process. The zinc coating creates a barrier that protects the base steel from corrosion, making GI products ideal for outdoor and harsh environment applications. The product range includes GI Coils, GI Sheets (plain and corrugated), GI Pipes, GI Wires, and GP/GC Sheets. Available in various zinc coating weights from 80 GSM to 450 GSM. GI products are extensively used in roofing, ducting, cable trays, water tanks, fencing, and agricultural structures. Conforms to IS 277:2003 and IS 1387:1993 standards.",
    heroImage: productGiProducts,
    grade: "Z80 to Z450 GSM",
    dimension: "0.3mm to 3.0mm",
    subCategories: [
      { name: "GI Coils", slug: "gi-coils" },
      { name: "GI Sheets", slug: "gi-sheets" },
      { name: "GI Pipes", slug: "gi-pipes" },
      { name: "GP Sheets", slug: "gp-sheets" },
    ],
    locations: [
      { name: "Mumbai", price: "₹62,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹62,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Ahmedabad", price: "₹61,500/MT", change: "+0.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹62,200/MT", change: "+0.7%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Pune", price: "₹61,800/MT", change: "0%", changeType: "neutral", updatedAgo: "2 days ago" },
      { name: "Kolkata", price: "₹61,000/MT", change: "-0.3%", changeType: "down", updatedAgo: "1 day ago" },
    ],
    avgLastMonth: "₹60,800",
    features: [
      "Hot-dip zinc coating (80–450 GSM)",
      "Superior corrosion resistance",
      "IS 277 & IS 1387 certified",
      "Coils, sheets, pipes & wires",
      "Ideal for roofing & outdoor use",
      "Long lifespan in harsh environments",
    ],
  },
  {
    slug: "roofing-sheets",
    name: "Roofing Sheets",
    category: "Steel",
    subcategory: "Coated Steel",
    description:
      "Metal Roofing Sheets include corrugated GI sheets, color-coated (PPGI/PPGL) sheets, and profile sheets used for industrial, commercial, and residential roofing and cladding applications.",
    fullDescription:
      "Metal Roofing Sheets are steel-based roofing products available in various profiles and finishes. They include Corrugated GI Sheets (traditional wave pattern), Color-Coated Sheets (PPGI - Pre-Painted Galvanized Iron), and Profile Sheets (trapezoidal and standing seam). PPGI sheets come in RAL color options with polyester, PVDF, or SMP coating for UV resistance and aesthetics. Roofing sheets are used for industrial sheds, commercial buildings, residential roofing, wall cladding, and temporary structures. Available in thicknesses from 0.35mm to 1.0mm with effective covering widths of 800mm to 1050mm. Conforms to IS 277:2003 for GI base and IS 14246:1995 for color coating.",
    heroImage: productRoofingSheets,
    grade: "PPGI / GI Corrugated",
    dimension: "0.35mm to 1.0mm",
    subCategories: [
      { name: "Corrugated Sheets", slug: "corrugated-sheets" },
      { name: "PPGI Sheets", slug: "ppgi-sheets" },
      { name: "Profile Sheets", slug: "profile-sheets" },
    ],
    locations: [
      { name: "Mumbai", price: "₹65,000/MT", change: "+1.2%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹65,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Ahmedabad", price: "₹64,500/MT", change: "+0.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹65,200/MT", change: "+1.0%", changeType: "up", updatedAgo: "3 days ago" },
      { name: "Pune", price: "₹64,800/MT", change: "0%", changeType: "neutral", updatedAgo: "2 days ago" },
    ],
    avgLastMonth: "₹63,800",
    features: [
      "Multiple profiles available",
      "RAL color options (PPGI)",
      "UV & weather resistant coating",
      "IS 277 & IS 14246 certified",
      "Lightweight & easy installation",
      "Custom length cutting available",
    ],
  },

  // ─── COPPER ───────────────────────────────────────────
  {
    slug: "copper-cathodes",
    name: "Copper Cathodes",
    category: "Copper",
    subcategory: "Copper Products",
    description:
      "Copper Cathodes are 99.99% pure electrolytic copper sheets produced through electro-refining. They serve as the primary raw material for manufacturing copper rods, wires, tubes, and various alloys used in electrical, electronics, and construction industries.",
    fullDescription:
      "Copper Cathodes are refined copper sheets with 99.99% purity (Grade A as per LME standards). Produced through the electrolytic refining process, these cathodes are the starting point for virtually all copper products. They are melted and cast into various semi-finished forms including rods, wires, strips, tubes, and bus bars. Copper cathodes conform to IS 191:2009 and BS EN 1978:1998 standards. The exceptional electrical conductivity, thermal conductivity, and corrosion resistance of copper make cathodes indispensable for electrical wiring, electronics, plumbing, roofing, and industrial machinery. India imports a significant portion of its copper cathode requirements, making reliable sourcing and competitive pricing crucial for businesses.",
    heroImage: productCopperCathodes,
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

  // ─── ALUMINIUM ────────────────────────────────────────
  {
    slug: "aluminium-ingots",
    name: "Aluminium Ingots",
    category: "Aluminium",
    subcategory: "Primary Aluminium",
    description:
      "Aluminium Ingots are primary aluminium products with 99.7% purity, produced through the smelting of alumina. They serve as the base raw material for casting, extrusion, and rolling industries across automotive, construction, and packaging sectors.",
    fullDescription:
      "Aluminium Ingots are foundational metal products manufactured through the Hall-Héroult electrolytic smelting process. Available in standard P1020A grade (99.7% purity) and high-purity grades up to 99.97%, these ingots are the starting point for virtually all aluminium semi-finished and finished products. They are remelted and cast into billets, slabs, wire rods, and alloy ingots for downstream manufacturing. Key applications include automotive components (engine blocks, wheels), construction materials (window frames, curtain walls), electrical conductors, and packaging (foil, cans). Sourced from Hindalco, Vedanta (BALCO), Nalco, and international smelters. Conform to IS 617:1994 and LME specifications.",
    heroImage: productAluminiumIngots,
    grade: "P1020A (99.7%)",
    dimension: "Standard 22.5 kg / 7 kg",
    subCategories: [
      { name: "Primary Ingots", slug: "primary-ingots" },
      { name: "Alloy Ingots", slug: "alloy-ingots" },
      { name: "T-Bars", slug: "t-bars" },
      { name: "Sows", slug: "sows" },
    ],
    locations: [
      { name: "Mumbai", price: "₹2,18,000/MT", change: "+1.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹2,20,000/MT", change: "+1.2%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹2,17,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Kolkata", price: "₹2,16,000/MT", change: "+0.5%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Ahmedabad", price: "₹2,19,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Silvassa", price: "₹2,17,000/MT", change: "+0.6%", changeType: "up", updatedAgo: "3 days ago" },
    ],
    avgLastMonth: "₹2,14,500",
    features: [
      "99.7% purity (P1020A grade)",
      "IS 617:1994 & LME certified",
      "Sourced from Hindalco, Nalco, BALCO",
      "Available in 7 kg and 22.5 kg ingots",
      "Ideal for casting & remelting",
      "Competitive bulk pricing with credit options",
    ],
  },
  {
    slug: "aluminium-coils",
    name: "Aluminium Coils",
    category: "Aluminium",
    subcategory: "Flat Rolled Products",
    description:
      "Aluminium Coils are flat-rolled aluminium products available in various alloys and tempers. Used extensively in roofing, cladding, automotive body panels, heat exchangers, and packaging industries for their lightweight and corrosion-resistant properties.",
    fullDescription:
      "Aluminium Coils are manufactured by hot rolling and cold rolling aluminium slabs into thin, continuous strips wound into coils. Available in a wide range of alloys (1xxx, 3xxx, 5xxx, 8xxx series) and tempers (O, H14, H24, H32), they offer excellent formability, corrosion resistance, and surface finish. Thickness ranges from 0.2mm to 6mm with widths up to 2000mm. Widely used in building cladding and roofing, automotive panels, heat exchanger fins, insulation jacketing, lithographic printing, and flexible packaging. Available in mill finish, coated (PE/PVDF), and embossed finishes. Sourced from Hindalco, Jindal Aluminium, and imports conforming to IS 737:2008 and ASTM B209.",
    heroImage: productAluminiumCoils,
    grade: "1100 / 3003 / 5052",
    dimension: "0.2mm to 6mm",
    subCategories: [
      { name: "Plain Coils", slug: "plain-coils" },
      { name: "Colour Coated Coils", slug: "colour-coated-coils" },
      { name: "Embossed Coils", slug: "embossed-coils" },
      { name: "Insulation Coils", slug: "insulation-coils" },
    ],
    locations: [
      { name: "Mumbai", price: "₹2,35,000/MT", change: "+1.8%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹2,37,000/MT", change: "+1.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Ahmedabad", price: "₹2,34,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Bangalore", price: "₹2,36,500/MT", change: "+1.3%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Pune", price: "₹2,35,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Hyderabad", price: "₹2,34,500/MT", change: "+0.6%", changeType: "up", updatedAgo: "3 days ago" },
    ],
    avgLastMonth: "₹2,30,000",
    features: [
      "Multiple alloy options (1xxx–8xxx series)",
      "IS 737:2008 & ASTM B209 certified",
      "Thickness range 0.2mm to 6mm",
      "Mill finish, coated & embossed options",
      "Lightweight with excellent corrosion resistance",
      "Sourced from Hindalco & Jindal Aluminium",
    ],
  },
  {
    slug: "aluminium-sheets",
    name: "Aluminium Sheets",
    category: "Aluminium",
    subcategory: "Flat Rolled Products",
    description:
      "Aluminium Sheets are flat-cut products from aluminium coils, offering excellent strength-to-weight ratio, corrosion resistance, and workability. Widely used in construction facades, signage, automotive panels, marine applications, and general fabrication.",
    fullDescription:
      "Aluminium Sheets are precision-cut flat products derived from aluminium coils through shearing or levelling operations. Available in alloys 1100, 1050, 3003, 5052, 5083, and 6061, each offering specific properties suited to different applications. The 1xxx series provides excellent formability and conductivity, 3xxx offers good corrosion resistance, 5xxx delivers high strength for marine and structural use, and 6xxx provides heat-treatable properties for structural applications. Thickness ranges from 0.3mm to 25mm in standard sizes of 1220×2440mm, 1250×2500mm, and 1500×3000mm. Applications span construction cladding, signage, vehicle bodies, marine vessels, food processing equipment, and decorative panels. Conforms to IS 737:2008, ASTM B209, and EN 573-3.",
    heroImage: productAluminiumSheets,
    grade: "1050 / 5052 / 6061",
    dimension: "0.3mm to 25mm",
    subCategories: [
      { name: "Plain Sheets", slug: "plain-sheets" },
      { name: "Chequered Sheets", slug: "chequered-sheets" },
      { name: "Perforated Sheets", slug: "perforated-sheets" },
      { name: "Anodized Sheets", slug: "anodized-sheets" },
    ],
    locations: [
      { name: "Mumbai", price: "₹2,42,000/MT", change: "+1.2%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹2,44,000/MT", change: "+1.5%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Bangalore", price: "₹2,43,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Chennai", price: "₹2,41,500/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Pune", price: "₹2,42,500/MT", change: "+0.6%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Ahmedabad", price: "₹2,41,000/MT", change: "+0.5%", changeType: "up", updatedAgo: "3 days ago" },
    ],
    avgLastMonth: "₹2,38,000",
    features: [
      "Multiple alloy & temper options",
      "IS 737 & ASTM B209 certified",
      "Excellent strength-to-weight ratio",
      "Available in plain, chequered & perforated",
      "Custom cutting available",
      "Sourced from Hindalco, Jindal & imports",
    ],
  },
  {
    slug: "aluminium-extrusions",
    name: "Aluminium Extrusions",
    category: "Aluminium",
    subcategory: "Extruded Products",
    description:
      "Aluminium Extrusions are profiles created by pushing heated aluminium billets through shaped dies, producing complex cross-sections. Used extensively in construction (windows, doors, curtain walls), automotive, solar frames, and industrial applications.",
    fullDescription:
      "Aluminium Extrusions are manufactured by heating aluminium billets to approximately 450°C and forcing them through precision-engineered steel dies under high pressure. This process creates profiles with complex cross-sectional shapes that would be impossible or uneconomical to achieve through other manufacturing methods. Available in alloys 6063 (architectural), 6061 (structural), and 6082 (heavy-duty), extrusions are produced in mill finish, anodized, and powder-coated finishes. Standard profiles include angles, channels, T-sections, H-sections, round tubes, square tubes, and rectangular tubes. Custom profiles can be designed for specific applications. Widely used in building facades, window and door systems, solar panel mounting structures, industrial automation frames, heat sinks, and transportation. Conforms to IS 733:1983, IS 1285:2002, and ASTM B221.",
    heroImage: productAluminiumExtrusions,
    grade: "6063 T5/T6 / 6061 T6",
    dimension: "Custom profiles",
    subCategories: [
      { name: "Standard Sections", slug: "standard-sections" },
      { name: "Architectural Profiles", slug: "architectural-profiles" },
      { name: "Industrial Profiles", slug: "industrial-profiles" },
      { name: "Solar Frames", slug: "solar-frames" },
    ],
    locations: [
      { name: "Mumbai", price: "₹2,55,000/MT", change: "+1.0%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Delhi", price: "₹2,57,000/MT", change: "+1.2%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Bangalore", price: "₹2,56,000/MT", change: "+0.8%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Hyderabad", price: "₹2,54,500/MT", change: "+0.5%", changeType: "up", updatedAgo: "2 days ago" },
      { name: "Ahmedabad", price: "₹2,55,500/MT", change: "+0.7%", changeType: "up", updatedAgo: "1 day ago" },
      { name: "Chennai", price: "₹2,54,000/MT", change: "+0.4%", changeType: "up", updatedAgo: "3 days ago" },
    ],
    avgLastMonth: "₹2,50,000",
    features: [
      "Custom & standard profile options",
      "6063, 6061 & 6082 alloy grades",
      "Mill finish, anodized & powder coated",
      "IS 733 & ASTM B221 certified",
      "Ideal for construction & solar frames",
      "Sourced from Hindalco, Jindal & premium extruders",
    ],
  },

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

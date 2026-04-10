import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Factory,
  Zap,
  Landmark,
  Car,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Shield,
  TrendingUp,
  Truck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImg from "@/assets/about-hero.jpg";
import growthImg from "@/assets/about-growth.jpg";
import networkImg from "@/assets/about-network.jpg";
import steelImg from "@/assets/about-steel.jpg";
import aluminiumImg from "@/assets/about-aluminium.jpg";
import copperImg from "@/assets/about-copper.jpg";

const materials = [
  {
    title: "Steel",
    desc: "Structural steel, sheets, plates, and piping materials.",
    image: steelImg,
  },
  {
    title: "Aluminium",
    desc: "Ingots, coils, sheets, and extrusions.",
    image: aluminiumImg,
  },
  {
    title: "Copper",
    desc: "Cathodes, rods, wires, and tubes.",
    image: copperImg,
  },
];

const steps = [
  { num: "01", title: "Requirement Understanding", desc: "We analyse your material needs, specifications, and delivery timelines." },
  { num: "02", title: "Supply Coordination", desc: "Matching you with verified suppliers from our extensive network." },
  { num: "03", title: "Logistics Management", desc: "End-to-end tracking and coordination for timely delivery." },
  { num: "04", title: "Delivery Execution", desc: "Quality-checked materials delivered to your doorstep." },
];

const industries = [
  { icon: Landmark, title: "Infrastructure" },
  { icon: Building2, title: "Construction" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Wrench, title: "Fabrication" },
  { icon: Zap, title: "Energy" },
  { icon: Car, title: "Automobile" },
];

const approach = [
  { icon: Shield, title: "Reliability", desc: "Consistent supply backed by deep coordination and verified partners." },
  { icon: Target, title: "Simplicity", desc: "Reducing procurement complexity with a single-window solution." },
  { icon: TrendingUp, title: "Scalability", desc: "Supporting domestic and global supply with flexible capacity." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* HERO */}
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="container-max grid lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div>
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">About HeyBuildex</span>
          <h1 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Supplying industrial <span className="text-accent">metals</span> across global markets
          </h1>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-xl">
            Steel, aluminium, and copper for infrastructure, manufacturing, and global supply requirements — delivered with transparency and trust.
          </p>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="Industrial Materials Warehouse"
            className="rounded-xl shadow-lg w-full object-cover aspect-video"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/30 to-transparent" />
        </div>
      </div>
    </section>

    {/* OUR STORY */}
    <section className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-3xl">
        <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Story</span>
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3 mb-6">
          From a focused operation to a <span className="text-accent">global network</span>
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            HeyBuildex began with a clear understanding of a common industry challenge — accessing the right materials at the right time without delays.
          </p>
          <p>
            What started as a focused supply operation has grown into a multi-material sourcing and distribution network serving diverse industries across India and beyond.
          </p>
          <p>
            We function as a direct supply partner, simplifying procurement for projects, manufacturers, and infrastructure developments — cutting out middlemen and bringing transparency to every transaction.
          </p>
        </div>
      </div>
    </section>

    {/* GROWTH JOURNEY */}
    <section className="bg-muted/50">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <span className="text-accent font-semibold text-sm tracking-wider uppercase">Growth Journey</span>
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3 mb-4">
          Building trust through <span className="text-accent">consistent growth</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Each milestone reflects growing trust, expanded reach, and stronger supply capabilities.
        </p>
        <img
          src={growthImg}
          alt="Growth Journey Chart"
          className="mx-auto rounded-xl shadow-lg max-w-3xl w-full"
          loading="lazy"
          width={1024}
          height={576}
        />
        <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
          Growth at HeyBuildex is measured through long-term partnerships and consistent delivery performance across 18+ states.
        </p>
      </div>
    </section>

    {/* SUPPLY NETWORK */}
    <section className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Supply Network</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3 mb-6">
            Pan-India &amp; <span className="text-accent">global reach</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            HeyBuildex operates across India and international markets, ensuring consistent material availability through a strong sourcing and logistics network.
          </p>
          <ul className="space-y-3">
            {["18+ states covered across India", "1,200+ verified suppliers", "International sourcing capabilities", "Real-time logistics tracking"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={networkImg}
          alt="Global Supply Network Map"
          className="rounded-xl shadow-lg w-full"
          loading="lazy"
          width={1024}
          height={640}
        />
      </div>
    </section>

    {/* MATERIALS */}
    <section className="bg-muted/50">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Materials</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3">
            Core <span className="text-accent">metals</span> we supply
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((m) => (
            <Card key={m.title} className="overflow-hidden border-border/60 hover:shadow-card-hover transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={640}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* HOW WE OPERATE */}
    <section className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-12">
        <span className="text-accent font-semibold text-sm tracking-wider uppercase">Process</span>
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3">
          How we <span className="text-accent">operate</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s) => (
          <Card key={s.num} className="border-border/60 hover:shadow-card-hover transition-shadow group">
            <CardContent className="p-6">
              <span className="font-heading text-3xl font-extrabold text-accent/20 group-hover:text-accent/40 transition-colors">{s.num}</span>
              <h3 className="font-heading font-bold text-foreground mt-3 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* INDUSTRIES */}
    <section className="bg-muted/50">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Industries</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3">
            Industries we <span className="text-accent">support</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map(({ icon: Icon, title }) => (
            <div key={title} className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-accent/50 shadow-sm hover:shadow-card-hover transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                <Icon className="h-7 w-7 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <span className="font-heading font-semibold text-sm text-foreground text-center">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* APPROACH */}
    <section className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-12">
        <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Approach</span>
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3">
          What sets us <span className="text-accent">apart</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {approach.map((a) => (
          <Card key={a.title} className="border-border/60 hover:shadow-card-hover transition-shadow group">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <a.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* FUTURE DIRECTION */}
    <section className="bg-muted/50">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <span className="text-accent font-semibold text-sm tracking-wider uppercase">Looking Ahead</span>
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3 mb-6">
          Our <span className="text-accent">direction</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          HeyBuildex continues to expand its sourcing and logistics capabilities to support material movement across global markets — investing in technology, partnerships, and operational excellence.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
          Connect with <span className="text-accent">HeyBuildex</span>
        </h2>
        <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
          Discuss your material requirements with our team and get competitive quotes today.
        </p>
        <Button variant="accent" size="lg" asChild>
          <Link to="/get-quote">
            Discuss Your Requirement <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;

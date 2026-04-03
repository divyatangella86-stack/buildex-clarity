import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  TrendingUp,
  Users,
  Truck,
  Target,
  Award,
  ArrowRight,
  CheckCircle2,
  Building2,
  Factory,
  Handshake,
} from "lucide-react";

const stats = [
  { value: "₹500 Cr+", label: "Materials Traded" },
  { value: "1,200+", label: "Verified Suppliers" },
  { value: "18", label: "States Served" },
  { value: "10,000+", label: "Orders Fulfilled" },
];

const values = [
  {
    icon: Shield,
    title: "Transparency First",
    desc: "Real-time pricing, no hidden costs. Every quote is backed by verifiable market data so you always know you're getting fair value.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    desc: "Our proprietary pricing engine tracks 50+ commodities across 100+ cities daily, giving you an information edge over competitors.",
  },
  {
    icon: Users,
    title: "Verified Network",
    desc: "Every supplier on HeyBuildex passes a rigorous 7-point verification including GST, PAN, trade references, and facility audits.",
  },
  {
    icon: Truck,
    title: "Logistics Guarantee",
    desc: "Pan-India delivery network with real-time tracking. 95% of orders delivered within the committed timeline.",
  },
];

const milestones = [
  { year: "2021", event: "Founded in Mumbai with a vision to digitize India's raw materials supply chain." },
  { year: "2022", event: "Onboarded 500+ suppliers across Steel, Aluminium, and Copper verticals." },
  { year: "2023", event: "Expanded to 12 states. Launched real-time price discovery for 30+ commodities." },
  { year: "2024", event: "Crossed ₹200 Cr in GMV. Introduced supply chain financing for SME buyers." },
  { year: "2025", event: "Reached 1,200+ verified suppliers. Launched logistics guarantee program." },
];

const team = [
  { name: "Arjun Mehta", role: "Co-Founder & CEO", bio: "Ex-Tata Steel. 12+ years in metals trading and supply chain.", icon: Building2 },
  { name: "Priya Sharma", role: "Co-Founder & CTO", bio: "Ex-Flipkart. Built marketplace platforms serving 10M+ users.", icon: Factory },
  { name: "Vikram Desai", role: "VP, Supply Chain", bio: "Ex-JSW. Deep expertise in steel procurement and logistics.", icon: Handshake },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container-max px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-3xl">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">About HeyBuildex</span>
          <h1 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Building India's most trusted{" "}
            <span className="text-accent">raw materials</span> marketplace
          </h1>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">
            We're on a mission to make industrial procurement transparent, efficient, and accessible for every business in India — from local fabricators to large infrastructure companies.
          </p>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="border-b border-border bg-card">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-border">
          {stats.map((s, i) => (
            <div key={i} className="text-center lg:px-6">
              <p className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Story</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3 mb-6">
            From frustration to <span className="text-accent">innovation</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              India's raw materials industry — worth over $300 billion — has long been plagued by opaque pricing, fragmented supply chains, and unreliable delivery. Buyers spend weeks calling multiple brokers just to get a competitive quote.
            </p>
            <p>
              HeyBuildex was born from first-hand experience with these pain points. Our founders, with decades of combined experience in metals trading and technology, set out to build a platform that brings transparency, trust, and technology to industrial procurement.
            </p>
            <p>
              Today, we connect thousands of businesses with verified suppliers across 18 states, offering real-time pricing, quality assurance, and guaranteed logistics — all on a single platform.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-accent/30 space-y-8">
          {milestones.map((m, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <span className="text-accent font-heading font-bold text-sm">{m.year}</span>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-muted/50">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Values</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3">
            What drives <span className="text-accent">everything</span> we do
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Card key={i} className="border-border/60 hover:shadow-card-hover transition-shadow group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-12">
        <span className="text-accent font-semibold text-sm tracking-wider uppercase">Leadership</span>
        <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mt-3">
          Meet the <span className="text-accent">team</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {team.map((t, i) => (
          <Card key={i} className="border-border/60 text-center hover:shadow-card-hover transition-shadow">
            <CardContent className="p-8">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <t.icon className="h-9 w-9 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">{t.name}</h3>
              <p className="text-accent text-sm font-medium mt-1">{t.role}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Why Partner */}
    <section className="bg-primary text-primary-foreground">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Partner With Us</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 mb-6">
              Why businesses <span className="text-accent">choose</span> HeyBuildex
            </h2>
            <ul className="space-y-4">
              {[
                "No middlemen — deal directly with verified manufacturers & distributors",
                "Real-time market prices updated daily across 100+ cities",
                "Quality inspection at source with detailed test certificates",
                "Flexible payment terms including credit facility for repeat buyers",
                "Dedicated relationship manager for bulk procurement needs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-primary-foreground/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8 text-center max-w-sm w-full">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Trusted by 3,000+ businesses</h3>
              <p className="text-sm text-primary-foreground/50 mb-6">
                From local fabricators to Fortune 500 companies, businesses rely on HeyBuildex for their raw material needs.
              </p>
              <Button variant="accent" size="lg" className="w-full">
                Get Started <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;

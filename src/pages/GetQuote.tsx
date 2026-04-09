import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import {
  CheckCircle2,
  Globe,
  ShieldCheck,
  Truck,
  Clock,
  Package,
  Users,
  BadgeIndianRupee,
  FileText,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Building2,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-get-quote.jpg";

const quoteSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  companyName: z.string().trim().min(2, "Company name is required").max(150),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  material: z.string().min(1, "Select a material"),
  product: z.string().trim().min(2, "Specify the product").max(200),
  quantity: z.string().trim().min(1, "Enter quantity").max(50),
  unit: z.string().min(1, "Select unit"),
  deliveryLocation: z.string().trim().min(2, "Enter delivery location").max(200),
  additionalRequirements: z.string().max(1000).optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const materials = [
  { value: "steel", label: "Steel" },
  { value: "aluminium", label: "Aluminium" },
  { value: "copper", label: "Copper" },
];

const units = [
  { value: "mt", label: "Metric Tons (MT)" },
  { value: "kg", label: "Kilograms (KG)" },
  { value: "pieces", label: "Pieces" },
  { value: "bundles", label: "Bundles" },
];

const benefits = [
  { icon: Globe, title: "Pan-India & Global Supply", desc: "Sourcing from 500+ verified mills across India and international markets" },
  { icon: BadgeIndianRupee, title: "Best Price Guarantee", desc: "Competitive pricing through direct mill partnerships and bulk negotiation" },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Every order undergoes strict quality inspection with mill test certificates" },
  { icon: Truck, title: "Reliable Logistics", desc: "Timely delivery to your doorstep with real-time tracking across India" },
  { icon: Clock, title: "Quick Turnaround", desc: "Get quotes within 2 hours and order confirmation within 24 hours" },
  { icon: Users, title: "Dedicated Account Manager", desc: "Personal procurement expert assigned to handle your requirements end-to-end" },
];

const stats = [
  { value: "500+", label: "Mill Partners" },
  { value: "10,000+", label: "Orders Delivered" },
  { value: "₹2,000 Cr+", label: "Materials Supplied" },
  { value: "98%", label: "On-Time Delivery" },
];

const steps = [
  { num: "01", title: "Submit Your Requirements", desc: "Fill in the form with your material, quantity, and delivery details." },
  { num: "02", title: "Receive Best Quotes", desc: "Our team sources competitive quotes from verified mills within 2 hours." },
  { num: "03", title: "Confirm & Pay Securely", desc: "Review quotes, confirm your order, and make payment through secure channels." },
  { num: "04", title: "Track & Receive Delivery", desc: "Get real-time tracking and receive quality-inspected materials on time." },
];

const GetQuote = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      material: "",
      product: "",
      quantity: "",
      unit: "",
      deliveryLocation: "",
      additionalRequirements: "",
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    console.log("Quote submitted");
    setSubmitted(true);
    toast.success("Quote request submitted! Our team will contact you within 2 hours.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Industrial metals procurement" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-accent/30">
              <Globe className="h-4 w-4" /> Global Procurement Platform
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
              Get Your Custom Quote <br />
              <span className="text-accent">in 2 Hours</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl">
              From TMT Bars to Copper Cathodes — source industrial metals at the best prices with quality assurance and reliable delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-2xl md:text-3xl font-extrabold text-accent">{s.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Benefits */}
      <section className="container-max px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Quote Form */}
          <div className="lg:col-span-3 bg-card rounded-2xl border border-border p-6 md:p-10 shadow-[var(--shadow-card)]" id="quote-form">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10 text-accent" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Quote Request Received!</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Our procurement team is working on your quote. You'll receive competitive pricing within 2 hours on your email and phone.
                </p>
                <Button variant="accent" size="lg" onClick={() => { setSubmitted(false); form.reset(); }}>
                  Submit Another Quote
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Request a Quote</h2>
                  <p className="text-muted-foreground mt-2">Fill in your requirements and get the best price from verified mills.</p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="fullName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="companyName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl><Input placeholder="ABC Industries Pvt. Ltd." {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl><Input type="email" placeholder="john@company.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl><Input type="tel" placeholder="+91 98765 43210" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="h-px bg-border" />

                    {/* Material Info */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="material" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Material Category *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Select material" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {materials.map((m) => (
                                <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="product" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product / Grade *</FormLabel>
                          <FormControl><Input placeholder="e.g. TMT Bars Fe500D, 12mm" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="quantity" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity *</FormLabel>
                          <FormControl><Input placeholder="e.g. 50" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="unit" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Select unit" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {units.map((u) => (
                                <SelectItem key={u.value} value={u.value}>{u.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="deliveryLocation" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Delivery Location *</FormLabel>
                        <FormControl><Input placeholder="City, State or Pincode" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="additionalRequirements" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Requirements</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any specific grade, brand preference, delivery timeline, or special instructions..." className="min-h-[100px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" variant="accent" size="lg" className="w-full text-base">
                      <FileText className="h-5 w-5 mr-2" />
                      Submit Quote Request
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our{" "}
                      <a href="/terms-of-service" className="underline hover:text-foreground">Terms of Service</a>{" "}
                      and{" "}
                      <a href="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</a>.
                    </p>
                  </form>
                </Form>
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Why Choose Card */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-heading text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" /> Why HeyBuildex?
              </h3>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <b.icon className="h-4.5 w-4.5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{b.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold mb-4">Need Immediate Help?</h3>
              <div className="space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="h-4 w-4" /> +91 98765 43210
                </a>
                <a href="mailto:procurement@heybuildex.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="h-4 w-4" /> procurement@heybuildex.com
                </a>
                <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                  <MapPin className="h-4 w-4" /> Mumbai, Maharashtra, India
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <p className="text-xs text-primary-foreground/60">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
              </div>
            </div>

            {/* Trusted Brands */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-heading text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-accent" /> Trusted Mill Partners
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Tata Steel", "JSW Steel", "SAIL", "Jindal Steel", "AMNS", "Hindalco", "NALCO", "Vedanta"].map((brand) => (
                  <span key={brand} className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full font-medium">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">How It Works</h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">From quote to delivery — a seamless procurement experience in 4 simple steps.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative bg-card rounded-xl border border-border p-6 shadow-[var(--shadow-card)] group hover:shadow-[var(--shadow-card-hover)] transition-shadow">
                <div className="text-4xl font-heading font-extrabold text-accent/15 mb-3">{step.num}</div>
                <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-6 w-6 text-accent/40 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Ready to Optimize Your Procurement?</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-6">
            Join 10,000+ businesses that trust HeyBuildex for their industrial metal sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="accent" size="lg" onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}>
              <Package className="h-5 w-5 mr-2" /> Get Your Free Quote
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="tel:+919876543210">
                <Phone className="h-5 w-5 mr-2" /> Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;

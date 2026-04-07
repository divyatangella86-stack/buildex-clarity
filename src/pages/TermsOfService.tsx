import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className="flex-1">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl">Last updated: April 7, 2026</p>
        </div>
      </section>
      <section className="container-max px-4 sm:px-6 lg:px-8 py-14 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">By accessing or using the HeyBuildex platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our services. These terms apply to all users, including buyers, suppliers, and visitors.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">2. Platform Services</h2>
            <p className="text-muted-foreground leading-relaxed">HeyBuildex is a B2B marketplace connecting buyers with verified suppliers of raw materials including steel, aluminium, copper, and minerals. We facilitate procurement, provide market insights, and offer logistics support. We act as an intermediary and do not manufacture or directly sell materials.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">You must provide accurate, complete registration information and maintain the security of your account credentials. You are responsible for all activities under your account. Business accounts must be registered by authorized representatives of the company.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">4. Orders & Transactions</h2>
            <p className="text-muted-foreground leading-relaxed">All orders placed through our platform are subject to supplier confirmation, material availability, and price validation. Quoted prices may vary based on market conditions, quantity, delivery location, and payment terms. Final pricing is confirmed at the time of order acceptance.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">5. Quality Assurance</h2>
            <p className="text-muted-foreground leading-relaxed">All materials supplied through HeyBuildex meet relevant BIS/ISO standards. We facilitate quality inspection and provide mill test certificates where applicable. Buyers must inspect materials upon delivery and report discrepancies within 48 hours.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">HeyBuildex's liability is limited to the transaction value of the specific order in question. We are not liable for indirect, consequential, or incidental damages arising from platform use, supplier defaults, or market fluctuations.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">7. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;

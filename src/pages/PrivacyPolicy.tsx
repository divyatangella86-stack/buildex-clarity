import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className="flex-1">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl">Last updated: April 7, 2026</p>
        </div>
      </section>
      <section className="container-max px-4 sm:px-6 lg:px-8 py-14 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">We collect information you provide directly, such as your name, email address, phone number, company details, and procurement requirements when you register, request quotes, or contact us. We also automatically collect usage data including IP address, browser type, pages visited, and interaction patterns.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">Your information is used to facilitate material procurement, connect you with verified suppliers, process quote requests, improve our platform, send market insights and price alerts, and comply with legal obligations. We never sell your personal data to third parties.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">3. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">We share your information only with verified suppliers relevant to your procurement needs, logistics partners for order fulfillment, payment processors for transaction completion, and legal authorities when required by law.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">We implement industry-standard security measures including SSL encryption, secure data storage, access controls, and regular security audits to protect your information from unauthorized access or disclosure.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">5. Cookies & Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">We use cookies and similar technologies to enhance your browsing experience, remember preferences, analyze platform usage, and deliver relevant content. You can manage cookie preferences through your browser settings.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">You have the right to access, correct, or delete your personal data, withdraw consent for marketing communications, request data portability, and lodge complaints with relevant data protection authorities.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">For privacy-related inquiries, contact us at <span className="text-accent font-medium">privacy@heybuildex.com</span> or write to our registered office in Mumbai, India.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;

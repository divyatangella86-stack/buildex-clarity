import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className="flex-1">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">Refund Policy</h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl">Last updated: April 7, 2026</p>
        </div>
      </section>
      <section className="container-max px-4 sm:px-6 lg:px-8 py-14 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">1. Refund Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">Refunds are applicable when materials delivered do not match the specifications agreed upon at the time of order, are damaged during transit, or fail quality inspection against BIS/ISO standards. Refund requests must be raised within 48 hours of delivery.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">2. Non-Refundable Scenarios</h2>
            <p className="text-muted-foreground leading-relaxed">Refunds are not applicable for buyer's change of mind after order confirmation, market price fluctuations post-order, materials already used or processed, custom-cut or specially fabricated items, or delays caused by force majeure events.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">3. Refund Process</h2>
            <p className="text-muted-foreground leading-relaxed">To initiate a refund, submit a request through your HeyBuildex account dashboard or contact our support team with your order ID, photographic evidence of the issue, and a description of the discrepancy. Our quality team will review and respond within 3 business days.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">4. Inspection & Verification</h2>
            <p className="text-muted-foreground leading-relaxed">HeyBuildex may arrange a third-party inspection to verify claims. The inspection cost is borne by HeyBuildex if the claim is valid, or by the buyer if the claim is found to be unsubstantiated. Inspection reports are final and binding.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">5. Refund Timeline</h2>
            <p className="text-muted-foreground leading-relaxed">Approved refunds are processed within 7–10 business days. Refunds are credited to the original payment method. For bank transfers, allow an additional 2–3 business days for the amount to reflect in your account.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">6. Replacements</h2>
            <p className="text-muted-foreground leading-relaxed">In lieu of a refund, buyers may opt for a replacement of materials at no additional cost. Replacement deliveries are prioritized and typically dispatched within 5 business days of approval, subject to material availability.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">7. Contact for Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">For refund-related queries, contact our support team at <span className="text-accent font-medium">support@heybuildex.com</span> or call <span className="text-accent font-medium">+91 98765 43210</span> during business hours (Mon–Sat, 9 AM – 6 PM IST).</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default RefundPolicy;

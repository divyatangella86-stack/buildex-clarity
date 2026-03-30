const stats = [
  { value: "1000+", label: "Businesses Served" },
  { value: "500+", label: "Verified Suppliers" },
  { value: "20+", label: "Cities Delivered" },
  { value: "50,000+", label: "Tons Supplied" },
];

const TrustStats = () => (
  <section className="py-16" style={{ background: "var(--gradient-dark)" }}>
    <div className="container-max px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="font-heading text-3xl lg:text-4xl font-extrabold text-accent mb-1">{value}</div>
            <div className="text-sm text-primary-foreground/60 font-medium">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStats;

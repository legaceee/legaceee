export function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="shell metrics">
        <div>
          <p className="eyebrow">Proof over promises</p>
          <h2>Outcome-first pricing that scales with you.</h2>
          <p className="muted">
            Transparent usage tiers, generous seats, and priority support for
            teams that move fast.
          </p>
          <div className="pill accent">From $89 / month</div>
        </div>
        <div className="metric-grid">
          <div className="metric">
            <div className="stat">42%</div>
            <p className="muted">Reduction in manual ops</p>
          </div>
          <div className="metric">
            <div className="stat">18m</div>
            <p className="muted">Average time to first launch</p>
          </div>
          <div className="metric">
            <div className="stat">4.9</div>
            <p className="muted">Customer satisfaction score</p>
          </div>
        </div>
      </div>
    </section>
  );
}

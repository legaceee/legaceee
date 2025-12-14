export function TestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="shell">
        <div className="section-header">
          <p className="eyebrow">Trusted teams</p>
          <h2>Teams that obsess over experience choose Aether.</h2>
        </div>
        <div className="testimonial-grid">
          <article className="card testimonial">
            <p>
              “We re-launched our onboarding in a weekend. The polish is unreal
              and the speed is unmatched.”
            </p>
            <div className="signature">
              <span className="name">Mara Chen</span>
              <span className="muted">VP Product, Lumen</span>
            </div>
          </article>
          <article className="card testimonial">
            <p>
              “Our team iterates weekly without ticket backlogs. The live canvas
              is the future of experience design.”
            </p>
            <div className="signature">
              <span className="name">Diego Ruiz</span>
              <span className="muted">Head of CX, Northwind</span>
            </div>
          </article>
          <article className="card testimonial">
            <p>
              “Aether keeps our brand consistent while letting every squad ship
              experiments with confidence.”
            </p>
            <div className="signature">
              <span className="name">Priya Patel</span>
              <span className="muted">Design Lead, Solstice</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

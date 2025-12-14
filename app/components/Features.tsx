export function FeaturesSection() {
  return (
    <section className="section" id="features">
      <div className="shell">
        <div className="section-header">
          <p className="eyebrow">Modern craft</p>
          <h2>Built to move quickly and feel premium.</h2>
          <p className="muted">
            Clean defaults, purposeful motion, and opinionated structure so your
            team can focus on what matters.
          </p>
        </div>
        <div className="feature-grid">
          <article className="card">
            <div className="icon" aria-hidden>
              ✦
            </div>
            <h3>Realtime orchestration</h3>
            <p>
              Update flows instantly with stateful sync across web, mobile, and
              support surfaces.
            </p>
          </article>
          <article className="card">
            <div className="icon" aria-hidden>
              ☄
            </div>
            <h3>Insightful by default</h3>
            <p>
              Every interaction is measurable with built-in cohorts, funnels,
              and experiments.
            </p>
          </article>
          <article className="card">
            <div className="icon" aria-hidden>
              ↺
            </div>
            <h3>No-code, no compromise</h3>
            <p>
              Design confidently with guardrails that keep brand, speed, and
              accessibility intact.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

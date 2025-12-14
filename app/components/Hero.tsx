import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" id="product">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Experience-first platform</p>
          <h1>Build journeys that feel human, not robotic.</h1>
          <p className="lede">
            Aether blends live insights, adaptive workflows, and tasteful
            automation so every interaction feels intentional. Launch in days,
            evolve in minutes.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="#get-started">
              Start a free workspace
            </Link>
            <Link className="btn ghost" href="#features">
              See how it works
            </Link>
          </div>
          <div className="hero-meta">
            <div>
              <span className="pill">Uptime 99.99%</span>
              <span className="pill">SOC 2 Type II</span>
            </div>
            <div className="stat-row">
              <span className="stat">2.4x</span>
              <span className="muted">Faster go-live</span>
            </div>
          </div>
        </div>

        <div className="hero-panel" aria-label="Product preview">
          <div className="panel-header">
            <div className="signal" />
            <span>Live Canvas</span>
            <span className="badge">Realtime</span>
          </div>
          <div className="panel-body">
            <div className="flow-card">
              <div className="flow-meta">
                <span className="dot" />
                <span className="muted">Adaptive path</span>
              </div>
              <h3>Route intent in one view</h3>
              <p>
                Drag, drop, and deploy multi-channel journeys with smart
                guardrails. Ship updates without waiting on releases.
              </p>
            </div>
            <div className="flow-grid">
              <div className="flow-pill">
                <span className="dot success" />
                Auto-sync audiences
              </div>
              <div className="flow-pill">
                <span className="dot warning" />
                Predictive routing
              </div>
              <div className="flow-pill">
                <span className="dot" />
                Human-in-the-loop
              </div>
              <div className="flow-pill">
                <span className="dot" />
                A/B without code
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

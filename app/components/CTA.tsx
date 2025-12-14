"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "creating" | "done";

export function CTASection() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState(
    "Create a workspace, invite your team, and ship a live flow in under an hour. No credit card required."
  );

  const handleCreate = () => {
    if (status === "creating") return;
    setStatus("creating");
    setMessage("Spinning up your workspace...");
    setTimeout(() => {
      setStatus("done");
      setMessage("Workspace created! Check your email to finish setup.");
    }, 800);
  };

  return (
    <section className="section cta" id="get-started">
      <div className="shell cta-shell">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Launch a crafted journey today.</h2>
          <p className={`muted cta-status ${status}`}>{message}</p>
        </div>
        <div className="cta-actions">
          <button
            className="btn primary"
            type="button"
            onClick={handleCreate}
            disabled={status === "creating"}
          >
            {status === "creating" ? "Creating..." : "Create workspace"}
          </button>
          <Link className="btn ghost" href="mailto:hello@aether.studio">
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function LoginPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("Sign in to continue");
  const [form, setForm] = useState({ email: "", password: "" });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      setStatus("error");
      setMessage("Please fill in both email and password.");
      return;
    }
    setStatus("submitting");
    setMessage("Checking your credentials...");

    // Mock async login
    setTimeout(() => {
      setStatus("success");
      setMessage("Logged in! Redirecting to your workspace...");
    }, 700);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand">
            <span className="brand-mark" aria-hidden>
              ●
            </span>
            <span className="brand-name">Aether</span>
          </div>
          <h1>Welcome back</h1>
          <p className="muted">Sign in to access your workspace.</p>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="input"
              placeholder="••••••••"
            />
          </div>

          <button
            className="btn primary full"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Signing in..." : "Sign in"}
          </button>

          <p className={`auth-message ${status}`} role="status">
            {message}
          </p>
        </form>

        <div className="auth-footer">
          <Link href="#">Forgot password?</Link>
          <span className="muted">·</span>
          <Link href="#get-started">Create workspace</Link>
        </div>
      </div>
    </div>
  );
}

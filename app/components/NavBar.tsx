import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

export function NavBar({ navigation }: { navigation: NavItem[] }) {
  return (
    <header className="navbar">
      <div className="shell nav-shell">
        <div className="brand">
          <span className="brand-mark" aria-hidden>
            ●
          </span>
          <span className="brand-name">Aether</span>
        </div>
        <nav aria-label="Primary" className="nav-links">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="btn ghost" href="/login">
            Log in
          </Link>
          <Link className="btn primary" href="#get-started">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

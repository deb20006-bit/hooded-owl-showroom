import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Fleet" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 text-xs uppercase tracking-widest font-semibold bg-gradient-red text-primary-foreground rounded-sm shadow-red hover:opacity-90 transition"
        >
          Book a Test Drive
        </Link>
      </div>
    </header>
  );
}

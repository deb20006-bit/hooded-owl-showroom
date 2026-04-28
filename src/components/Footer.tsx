import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Apex of automotive curation. Hand-picked machines for those who hunt the night.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Showroom</h4>
          <p className="text-sm text-muted-foreground">88 Talon Avenue<br/>Midnight District, NV 90210</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Contact</h4>
          <p className="text-sm text-muted-foreground">+1 (555) HOOT-911<br/>concierge@hood.cars</p>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
        © {new Date().getFullYear()} HOOD Motors — Silent. Predatory. Precise.
      </div>
    </footer>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — HOOD" },
      { name: "description", content: "Concierge sourcing, certified service, secure storage, financing, and bespoke detailing from HOOD Motors." },
      { property: "og:title", content: "Services — HOOD" },
      { property: "og:description", content: "White-glove ownership services from the HOOD atelier." },
    ],
  }),
});

const services = [
  { n: "01", t: "Bespoke Sourcing", d: "Tell us what you hunt. Our scouts work 27 countries to surface vehicles that never reach public listings." },
  { n: "02", t: "Certified Service", d: "Master technicians, OEM-spec parts, and full digital service ledgers signed at every interval." },
  { n: "03", t: "Climate Vault Storage", d: "Private vault facilities with 18°C climate, nitrogen tires, and 24/7 armed monitoring." },
  { n: "04", t: "Tailored Financing", d: "Flexible structures, asset-backed terms, and discretion guaranteed through our private banking partners." },
  { n: "05", t: "Atelier Detailing", d: "Hand-applied ceramic, paint correction, and full leather restoration in our shielded studio." },
  { n: "06", t: "Track Concierge", d: "Trailer transport, helmet fitting, and instructor pairing for your day at Laguna, Spa, or the Ring." },
];

function Services() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">What we do</p>
        <h1 className="font-display text-6xl md:text-8xl font-bold leading-none">
          Beyond the<br/><span className="text-primary">handover.</span>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          A car is the beginning. HOOD's atelier services keep your machine — and your privacy — sharper than the day you took the keys.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <article key={s.n} className="group relative bg-card p-10 hover:bg-gradient-hero transition-colors duration-500">
              <div className="font-display text-7xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-2xl uppercase tracking-widest">{s.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
              <div className="mt-8 h-px w-12 bg-primary group-hover:w-24 transition-all duration-500" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-hero border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Membership</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            One concierge. Every service. <span className="text-primary">Forever.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Every HOOD owner is enrolled into the Owl Circle — lifetime access to our full service stack with a single point of contact.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex px-8 py-4 bg-gradient-red text-primary-foreground text-sm uppercase tracking-widest font-semibold rounded-sm shadow-red hover:opacity-90 transition"
          >
            Speak to Concierge
          </Link>
        </div>
      </section>
    </Layout>
  );
}

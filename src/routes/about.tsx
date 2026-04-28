import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — HOOD" },
      { name: "description", content: "HOOD Motors — predatory curation of the world's finest performance vehicles since 2014." },
    ],
  }),
});

function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-32">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">About HOOD</p>
        <h1 className="font-display text-6xl md:text-8xl font-bold leading-none">
          Born of the<br/><span className="text-primary">night shift.</span>
        </h1>
        <div className="mt-16 grid md:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
          <p>
            HOOD was founded in 2014 by a small circle of restoration engineers and racing veterans who refused to accept the dilution of automotive craftsmanship. We built the showroom we wanted to walk into.
          </p>
          <p>
            The owl is our patron — silent, precise, lethal in low light. Every vehicle we deliver shares that DNA. We hunt across continents to source machines worthy of our crest.
          </p>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-10">
          {[
            ["Curate", "We reject 19 of every 20 vehicles considered. Provenance is non-negotiable."],
            ["Certify", "312-point inspection. Master-technician sign-off. Documented to the bolt."],
            ["Deliver", "White-glove transport, private handover, and lifetime concierge access."],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-primary pl-6">
              <h3 className="font-display text-2xl text-primary uppercase tracking-widest">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

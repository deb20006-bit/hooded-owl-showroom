import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroCar from "@/assets/hero-car.jpg";
import coupe from "@/assets/car-coupe.jpg";
import roadster from "@/assets/car-roadster.jpg";
import suv from "@/assets/car-suv.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const featured = [
  { img: coupe, name: "Nocturne GT", tag: "Coupe", price: "$248,000" },
  { img: roadster, name: "Talon Spider", tag: "Roadster", price: "$312,500" },
  { img: suv, name: "Strix XR", tag: "SUV", price: "$184,900" },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative -mt-20 h-screen min-h-[700px] overflow-hidden">
        <img
          src={heroCar}
          alt="HOOD signature matte black supercar with red rim lighting"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-fade-bottom" />

        <div className="relative mx-auto max-w-7xl px-6 h-full flex flex-col justify-center">
          <p className="animate-slide-up text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Est. 2014 — Hunter's Collection
          </p>
          <h1 className="animate-slide-up delay-100 font-display text-7xl md:text-9xl font-bold leading-[0.9] max-w-4xl">
            HUNT THE<br/>
            <span className="text-primary">HORIZON.</span>
          </h1>
          <p className="animate-slide-up delay-200 mt-8 max-w-xl text-lg text-muted-foreground">
            HOOD curates the rarest performance machines on Earth. Each vehicle inspected, certified, and prepared by master technicians.
          </p>
          <div className="animate-slide-up delay-300 mt-10 flex flex-wrap gap-4">
            <Link to="/fleet" className="px-8 py-4 bg-gradient-red text-primary-foreground text-sm uppercase tracking-widest font-semibold rounded-sm shadow-red hover:opacity-90 transition">
              Explore Fleet
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-border text-foreground text-sm uppercase tracking-widest font-semibold rounded-sm hover:border-primary hover:text-primary transition">
              Private Viewing
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-fade-in">
          Scroll ↓
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["12+", "Years curating"],
            ["480", "Cars delivered"],
            ["27", "Countries served"],
            ["100%", "Pedigree certified"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-5xl font-bold text-primary">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">The Collection</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold">Featured Predators</h2>
          </div>
          <Link to="/fleet" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition">
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((c) => (
            <article key={c.name} className="group relative overflow-hidden bg-card border border-border rounded-sm hover:border-primary transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={1024}
                  height={704}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{c.tag}</p>
                <h3 className="font-display text-2xl mt-2">{c.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">From {c.price}</span>
                  <span className="text-primary text-sm uppercase tracking-widest">Inquire →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-gradient-hero border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">The HOOD Code</p>
          <p className="font-display text-3xl md:text-5xl leading-tight">
            "We don't sell cars. We deliver instruments of motion to those who can hear the engine before it starts."
          </p>
        </div>
      </section>
    </Layout>
  );
}

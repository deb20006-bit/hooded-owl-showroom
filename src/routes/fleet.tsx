import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import coupe from "@/assets/car-coupe.jpg";
import roadster from "@/assets/car-roadster.jpg";
import suv from "@/assets/car-suv.jpg";
import hero from "@/assets/hero-car.jpg";

export const Route = createFileRoute("/fleet")({
  component: Fleet,
  head: () => ({
    meta: [
      { title: "Fleet — HOOD" },
      { name: "description", content: "Browse the HOOD collection of curated performance and luxury vehicles." },
    ],
  }),
});

const cars = [
  { img: hero, name: "Obsidian R8", tag: "Hypercar", hp: "780 HP", top: "228 mph", price: "$498,000" },
  { img: coupe, name: "Nocturne GT", tag: "Coupe", hp: "612 HP", top: "211 mph", price: "$248,000" },
  { img: roadster, name: "Talon Spider", tag: "Roadster", hp: "650 HP", top: "204 mph", price: "$312,500" },
  { img: suv, name: "Strix XR", tag: "SUV", hp: "550 HP", top: "186 mph", price: "$184,900" },
  { img: coupe, name: "Raven SE", tag: "Grand Tourer", hp: "495 HP", top: "195 mph", price: "$162,000" },
  { img: roadster, name: "Crimson Vyper", tag: "Track", hp: "720 HP", top: "218 mph", price: "$386,000" },
];

function Fleet() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">The Fleet</p>
        <h1 className="font-display text-6xl md:text-8xl font-bold leading-none">
          Six wings.<br/><span className="text-primary">One hunt.</span>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          Each machine in the HOOD inventory undergoes a 312-point inspection by our master technicians before earning its place.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((c) => (
            <article key={c.name} className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-black">
                <img src={c.img} alt={c.name} loading="lazy" width={1024} height={704}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{c.tag}</p>
                <h3 className="font-display text-2xl mt-2">{c.name}</h3>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm border-t border-border pt-4">
                  <div>
                    <div className="text-muted-foreground text-[10px] uppercase tracking-widest">Power</div>
                    <div className="font-display text-lg">{c.hp}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-[10px] uppercase tracking-widest">Top</div>
                    <div className="font-display text-lg">{c.top}</div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">From {c.price}</span>
                  <span className="text-primary text-xs uppercase tracking-widest">Inquire →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

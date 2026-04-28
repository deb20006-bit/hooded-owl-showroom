import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — HOOD" },
      { name: "description", content: "Book a private viewing or test drive at the HOOD showroom." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-32">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Get in touch</p>
        <h1 className="font-display text-6xl md:text-8xl font-bold leading-none">
          Begin the<br/><span className="text-primary">hunt.</span>
        </h1>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary mb-2">Showroom</h3>
              <p className="text-lg">88 Talon Avenue<br/>Midnight District, NV 90210</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary mb-2">Concierge</h3>
              <p className="text-lg">+1 (555) HOOT-911<br/>concierge@hood.cars</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary mb-2">Hours</h3>
              <p className="text-lg text-muted-foreground">By appointment only<br/>Dusk till dawn</p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border p-8 rounded-sm space-y-5"
          >
            {sent ? (
              <div className="text-center py-12">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Received</p>
                <h3 className="font-display text-3xl mt-3">The owl has heard you.</h3>
                <p className="text-muted-foreground mt-3">A concierge will reach you within 12 hours.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input required className="mt-2 w-full bg-input border border-border px-4 py-3 rounded-sm focus:border-primary focus:outline-none transition" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input required type="email" className="mt-2 w-full bg-input border border-border px-4 py-3 rounded-sm focus:border-primary focus:outline-none transition" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Vehicle of Interest</label>
                  <input className="mt-2 w-full bg-input border border-border px-4 py-3 rounded-sm focus:border-primary focus:outline-none transition" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea rows={4} className="mt-2 w-full bg-input border border-border px-4 py-3 rounded-sm focus:border-primary focus:outline-none transition" />
                </div>
                <button className="w-full px-6 py-4 bg-gradient-red text-primary-foreground text-sm uppercase tracking-widest font-semibold rounded-sm shadow-red hover:opacity-90 transition">
                  Send Inquiry
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}

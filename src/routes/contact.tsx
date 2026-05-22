import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const Schema = z.object({
  name: z.string().trim().min(1).max(80),
  phone: z.string().trim().min(8).max(15).regex(/^[0-9+\-\s]+$/),
  goal: z.string().trim().min(1).max(80),
  message: z.string().trim().max(500).optional(),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ABSolute Fitness Gym — Kasba, Kolkata" },
      { name: "description", content: "Visit ABSolute Fitness at 205 1A, Bosepukur, Kasba, Kolkata. Call +91 87770 80798. Book a free trial today." },
      { property: "og:title", content: "Contact ABSolute Fitness Gym" },
      { property: "og:description", content: "Visit us in Kasba, Kolkata. Call or WhatsApp to book a free trial." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = Schema.safeParse(data);
    if (!parsed.success) {
      setStatus("Please check your details and try again.");
      return;
    }
    const msg = `Hi ABSolute Fitness! I'm ${parsed.data.name} (${parsed.data.phone}). Goal: ${parsed.data.goal}. ${parsed.data.message ?? ""}`;
    window.open(`https://wa.me/918777080798?text=${encodeURIComponent(msg)}`, "_blank");
    setStatus("Opening WhatsApp…");
  };

  return (
    <SiteLayout>
      <section className="section bg-[var(--gradient-hero)]">
        <div className="container-x text-center">
          <div className="eyebrow justify-center"><span className="h-px w-8 bg-primary" /> Get In Touch</div>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">Let's get you <span className="text-gradient-red">started</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Book a free trial, ask anything about plans or just drop by. We're here Mon–Sat, 5 AM to 10 PM.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {[
              { icon: MapPin, t: "Visit", d: "205 1A, Bosepukur, Kasba, Kolkata, West Bengal 700107" },
              { icon: Phone, t: "Call", d: "+91 87770 80798" },
              { icon: Clock, t: "Hours", d: "Mon–Sat: 5 AM – 10 PM · Sunday: Closed" },
              { icon: Mail, t: "WhatsApp", d: "Fastest response — usually within minutes" },
            ].map((c) => (
              <div key={c.t} className="glass flex gap-4 rounded-xl p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><c.icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{c.t}</div>
                  <div className="mt-1">{c.d}</div>
                </div>
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="ABSolute Fitness location"
                src="https://www.google.com/maps?q=Bosepukur,+Kasba,+Kolkata+700107&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-black">Book a free trial</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll WhatsApp you to confirm your slot.</p>
            <div className="mt-6 space-y-4">
              <input name="name" placeholder="Your name" required maxLength={80} className="w-full rounded-md border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary" />
              <input name="phone" placeholder="Phone number" required maxLength={15} className="w-full rounded-md border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary" />
              <select name="goal" required className="w-full rounded-md border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary">
                <option value="">Your goal</option>
                <option>Fat Loss</option><option>Muscle Gain</option><option>Strength</option>
                <option>General Fitness</option><option>Personal Training</option>
              </select>
              <textarea name="message" rows={4} maxLength={500} placeholder="Tell us a bit more (optional)" className="w-full rounded-md border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary" />
              <button type="submit" className="btn-hero w-full">Send via WhatsApp</button>
              {status && <p className="text-sm text-muted-foreground">{status}</p>}
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

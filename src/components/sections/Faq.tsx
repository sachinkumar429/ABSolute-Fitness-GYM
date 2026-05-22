import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "Can complete beginners join ABSolute Fitness?", a: "Absolutely. We specialise in beginner-friendly onboarding — your first session is a guided walkthrough, fitness assessment and a simple starter plan. No prior experience needed." },
  { q: "Is personal training available?", a: "Yes. We offer 1-on-1 personal training with certified coaches, with fully personalised workout and nutrition plans, weekly check-ins and progress tracking." },
  { q: "What are the membership charges?", a: "Plans start at ₹1,499/month with quarterly and half-yearly options that work out to less per month. Personal training packages start at ₹8,999/month." },
  { q: "Is the gym air-conditioned?", a: "Yes — all our workout floors are fully air-conditioned, spacious and hygienically maintained." },
  { q: "Do you have CrossFit and functional training?", a: "Yes. We have a dedicated CrossFit zone with rigs, ropes, rings, plyo boxes and full functional training equipment." },
  { q: "Are female trainers available for women?", a: "Yes. We have certified female trainers and a women-focused training program in a safe, respectful environment." },
  { q: "What are the timings?", a: "Monday to Saturday, 5 AM – 10 PM. Closed on Sundays." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> FAQ</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Questions, <span className="text-gradient-red">answered</span></h2>
          <p className="mt-4 text-muted-foreground">Still curious? Drop us a WhatsApp — we reply in minutes.</p>
        </div>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                <span className="font-semibold">{f.q}</span>
                {open === i ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-primary" />}
              </button>
              {open === i && <div className="px-6 pb-6 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

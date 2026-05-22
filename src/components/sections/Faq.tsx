import { useState } from "react";

const faqs = [
  { q: "Can beginners join ABSolute Fitness GYM?", a: "Absolutely! ABSolute Fitness GYM is beginner-friendly by design. Our certified trainers provide complete onboarding, explain every machine, and build a personalized beginner plan for you. Many of our biggest success stories were beginners who had zero gym experience." },
  { q: "Is personal training available at ABSolute Fitness?", a: "Yes! We offer dedicated 1-on-1 personal training with certified coaches. Your trainer will create a fully customized workout and nutrition plan, track your progress weekly, and provide WhatsApp support between sessions." },
  { q: "What are the membership charges?", a: "We offer flexible plans — Monthly, Quarterly, Half-Yearly, and Personal Training packages. Pricing is designed to be affordable for Kasba residents. We regularly run special offers including our FREE 3-day trial for new members. WhatsApp us for current pricing." },
  { q: "Is ABSolute Fitness GYM air-conditioned?", a: "Yes! Our entire gym floor is fully air-conditioned — especially important during Kolkata's hot and humid summers. Your comfort is our priority throughout your workout." },
  { q: "Is CrossFit training available?", a: "Yes! We have a dedicated CrossFit and functional training area with full equipment — battle ropes, pull-up rigs, kettlebells, plyo boxes, and more. Classes are available for all levels from beginner to advanced." },
  { q: "Are female trainers available for women members?", a: "Yes! We have certified female fitness trainers who specialize in women's health, fat loss, body toning, and strength building. Our gym also maintains strict policies to ensure all women feel safe and comfortable at all times." },
  { q: "What are the gym timings?", a: "ABSolute Fitness GYM is open Monday to Saturday from 5:00 AM to 10:00 PM. We are closed on Sundays. The early 5 AM opening is perfect for working professionals and early risers." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section" style={{ background: "#080808" }}>
      <div className="container-x">
        <div className="mb-14 text-center">
          <div className="eyebrow mb-4">Quick Answers</div>
          <h2 className="font-display text-5xl md:text-6xl">
            Frequently Asked <span className="text-gradient-red">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Everything you need to know before joining ABSolute Fitness GYM.
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-5 py-6 text-left transition-colors hover:text-primary"
                aria-expanded={open === i}
              >
                <span className="text-base font-semibold leading-snug">{faq.q}</span>
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-lg transition-all duration-300"
                  style={
                    open === i
                      ? { background: "var(--primary)", borderColor: "var(--primary)", color: "#fff", transform: "rotate(45deg)" }
                      : { color: "var(--primary)" }
                  }
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p className="pb-6 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

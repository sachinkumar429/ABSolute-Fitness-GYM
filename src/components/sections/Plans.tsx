import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Monthly",
    price: "₹1,499",
    period: "/month",
    features: ["Full gym access", "Cardio + Strength zones", "Locker facility", "Diet guidance"],
  },
  {
    name: "Quarterly",
    price: "₹3,999",
    period: "/3 months",
    badge: "Most Popular",
    highlighted: true,
    features: ["Everything in Monthly", "2 personal sessions free", "Body composition test", "Custom workout plan"],
  },
  {
    name: "Half-Yearly",
    price: "₹6,999",
    period: "/6 months",
    features: ["Everything in Quarterly", "Monthly progress reviews", "Nutrition consult", "Free supplements sample"],
  },
  {
    name: "Personal Training",
    price: "₹8,999",
    period: "/month",
    features: ["1-on-1 coaching", "Personalized plan", "Weekly check-ins", "Diet + recovery"],
  },
];

export function Plans() {
  return (
    <section id="join" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> Membership</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Plans built around <span className="text-gradient-red">your goals</span></h2>
          <p className="mt-3 text-muted-foreground">Transparent pricing. No hidden fees. Cancel anytime.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-7 transition-all ${
                p.highlighted
                  ? "border-primary bg-gradient-to-b from-primary/15 to-transparent shadow-[var(--shadow-glow)]"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gradient-red)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {p.badge}
                </div>
              )}
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-black">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/918777080798?text=Hi%2C%20I%27m%20interested%20in%20the%20{plan}%20plan"
                target="_blank"
                rel="noreferrer"
                className={`mt-7 block w-full rounded-md py-3 text-center text-sm font-bold uppercase tracking-wider transition-all ${
                  p.highlighted ? "btn-hero" : "btn-outline"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

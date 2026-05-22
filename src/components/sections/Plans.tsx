const plans = [
  {
    name: "Monthly",
    duration: "30 Days",
    tag: null,
    highlight: "Contact",
    sub: "for current pricing",
    features: ["Full Gym Access", "All Equipment", "Trainer Assistance", "AC Facility", "Locker Room"],
    cta: "Get Quote",
    ctaMsg: "Monthly",
    popular: false,
  },
  {
    name: "Quarterly",
    duration: "3 Months",
    tag: "⭐ MOST POPULAR",
    highlight: "Best Value",
    sub: "for new members",
    features: ["Full Gym Access", "All Equipment", "Fitness Assessment", "Diet Guidance", "Progress Tracking", "AC + Locker Room"],
    cta: "Get Quote",
    ctaMsg: "Quarterly",
    popular: true,
  },
  {
    name: "Half-Yearly",
    duration: "6 Months",
    tag: null,
    highlight: "Max Savings",
    sub: "on longer plans",
    features: ["Full Gym Access", "All Equipment", "Detailed Fitness Plan", "Nutrition Guidance", "Monthly Check-Ins", "Priority Scheduling"],
    cta: "Get Quote",
    ctaMsg: "Half-Yearly",
    popular: false,
  },
  {
    name: "Personal Training",
    duration: "1-on-1 Sessions",
    tag: null,
    highlight: "Elite",
    sub: "fully customized",
    features: ["Dedicated Trainer", "Custom Workout Plan", "Custom Nutrition Plan", "Daily Progress Tracking", "Body Composition Analysis", "WhatsApp Support"],
    cta: "Book PT Session",
    ctaMsg: "Personal Training",
    popular: false,
  },
];

export function Plans() {
  return (
    <section id="membership" className="section bg-background overflow-hidden">
      <div className="container-x">
        <div className="mb-14 text-center">
          <div className="eyebrow mb-4">Flexible Pricing</div>
          <h2 className="font-display text-5xl md:text-6xl">
            Membership <span className="text-gradient-red">Plans</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Premium fitness at prices that make sense. No hidden charges, no lock-in traps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className="relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                borderColor: p.popular ? "var(--primary)" : "var(--border)",
                background: p.popular
                  ? "linear-gradient(160deg, rgba(232,0,13,0.08) 0%, var(--surface) 100%)"
                  : "var(--surface)",
                boxShadow: p.popular ? "0 20px 60px rgba(232,0,13,0.2), var(--shadow-card)" : "none",
                transform: p.popular ? "scale(1.02)" : "scale(1)",
              }}
            >
              {p.tag && (
                <div
                  className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-xl px-5 py-1.5 text-[10px] font-black uppercase tracking-widest text-white"
                  style={{ background: "var(--primary)" }}
                >
                  {p.tag}
                </div>
              )}
              <div className={p.tag ? "mt-4" : ""}>
                <h3 className="font-display text-2xl mb-1">{p.name}</h3>
                <p className="text-xs uppercase tracking-[2px] text-muted-foreground mb-5">{p.duration}</p>
                <div className="mb-6">
                  <span className="font-display text-4xl leading-none text-gradient-red block">{p.highlight}</span>
                  <span className="text-xs text-muted-foreground mt-1 block">{p.sub}</span>
                </div>

                <ul className="mb-6 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground border-b border-border pb-2 last:border-0">
                      <span className="text-green-500 text-base flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/918777080798?text=I%20want%20${encodeURIComponent(p.ctaMsg)}%20membership%20pricing%20for%20ABSolute%20Fitness%20GYM`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center rounded-md px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                  style={
                    p.popular
                      ? { background: "var(--gradient-red)", color: "#fff", boxShadow: "var(--shadow-glow)" }
                      : { border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }
                  }
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">🎁 Not sure yet? Try us FREE for 3 days — no commitment!</p>
          <a
            href="https://wa.me/918777080798?text=I%20want%20to%20claim%20my%20FREE%203-day%20trial%20at%20ABSolute%20Fitness%20GYM!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5"
            style={{ background: "#25D366", boxShadow: "0 0 30px rgba(37,211,102,0.3)" }}
          >
            💬 Claim Free 3-Day Trial
          </a>
        </div>
      </div>
    </section>
  );
}

const cards = [
  { icon: "🎓", title: "Certified Trainers", text: "Nationally certified professionals with expertise in strength, cardio & specialized programs." },
  { icon: "⚙️", title: "Modern Equipment", text: "Premium imported machines and free weights for every muscle group and training style." },
  { icon: "🏆", title: "CrossFit Zone", text: "Dedicated functional training area — battle ropes, kettlebells, rig setups and more." },
  { icon: "💰", title: "Affordable Plans", text: "Premium fitness at prices that work for Kolkata. Flexible monthly, quarterly & yearly plans." },
  { icon: "👁️", title: "Personal Attention", text: "Trainers who know your name, your goals, and track your progress individually." },
  { icon: "🏟️", title: "Spacious Floors", text: "Smart layout design prevents overcrowding. Comfortable at any time of day." },
  { icon: "❤️", title: "Cardio Zone", text: "Full cardio floor — treadmills, ellipticals, cycles and rowing machines, all premium grade." },
  { icon: "🔄", title: "Transformation Support", text: "End-to-end support from Day 1 onboarding to milestone celebrations. We're with you." },
];

export function WhyChoose() {
  return (
    <section id="why-us" className="section" style={{ background: "#080808" }}>
      <div className="container-x">
        <div className="mb-14 text-center">
          <div className="eyebrow mb-4">Why ABSolute Fitness</div>
          <h2 className="font-display text-5xl md:text-6xl">
            8 Reasons To <span className="text-gradient-red">Choose Us</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We've built everything around your transformation. Every single detail matters.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-xl border border-border p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_0_40px_rgba(232,0,13,0.2)]"
              style={{ background: "var(--surface)" }}
            >
              {/* Red gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(232,0,13,0.08) 0%, transparent 100%)" }} />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{c.icon}</div>
                <h3 className="font-display text-xl mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

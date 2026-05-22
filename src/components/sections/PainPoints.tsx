const painPoints = [
  {
    icon: "😟",
    title: "Start Your Fitness Journey Without Fear",
    text: '"People will judge me." "I\'m too out of shape." — We hear this every day. At ABSolute Fitness, everyone starts somewhere. Zero judgment. 100% support.',
    solution: "✅ Beginner-Friendly Environment",
  },
  {
    icon: "📉",
    title: "Real Results. Real Transformations.",
    text: '"I joined gyms before but saw no results." Our scientifically planned workouts, personalized programs, and certified trainers guarantee progress you can see and feel.',
    solution: "✅ Proven Transformation Programs",
  },
  {
    icon: "🏟️",
    title: "Train In A Professional Environment",
    text: "No overcrowding. No outdated equipment. No uncertified trainers. Experience a clean, spacious, AC gym with premium imported equipment that truly motivates you.",
    solution: "✅ Premium Imported Equipment",
  },
  {
    icon: "🛡️",
    title: "Safe & Comfortable Fitness For Women",
    text: "Our gym maintains a respectful, inclusive atmosphere. With trained female staff and a zero-tolerance culture, women feel empowered here — not uncomfortable.",
    solution: "✅ Women-Friendly Safe Zone",
  },
  {
    icon: "🔥",
    title: "We Push You Beyond Your Limits",
    text: "Quitting after 2 weeks is the past. Our community, trainer support, daily motivation and progress tracking keeps you accountable and driven every single day.",
    solution: "✅ 24/7 Trainer Support & Community",
  },
];

export function PainPoints() {
  return (
    <section id="pain-points" className="section bg-background">
      <div className="container-x">
        <div className="mb-14 text-center">
          <div className="eyebrow mb-4">We Understand Your Struggles</div>
          <h2 className="font-display text-5xl md:text-6xl">
            We've Got <span className="text-gradient-red">Solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every barrier you face in your fitness journey — we've solved it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(232,0,13,0.15)]"
              style={{ background: "var(--surface)" }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                style={{ background: "var(--primary)" }}
              />
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className="font-display text-2xl leading-tight mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.text}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">{p.solution}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

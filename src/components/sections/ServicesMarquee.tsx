const services = [
  { icon: "🧑‍💼", name: "Personal Training" },
  { icon: "⚖️", name: "Weight Loss" },
  { icon: "💪", name: "Muscle Gain" },
  { icon: "🏋️", name: "CrossFit" },
  { icon: "🦾", name: "Strength Training" },
  { icon: "🏃", name: "Cardio Training" },
  { icon: "⚡", name: "Functional Training" },
  { icon: "🔥", name: "Fat Loss Programs" },
  { icon: "🌱", name: "Beginner Programs" },
  { icon: "👩", name: "Women's Fitness" },
];

// Duplicate for seamless loop
const marqueeItems = [...services, ...services];

export function ServicesMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-border py-4"
      style={{ background: "var(--surface)" }}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24" style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24" style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

      <div className="animate-marquee flex w-max gap-0">
        {marqueeItems.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="flex items-center gap-2.5 whitespace-nowrap px-6 text-sm font-bold uppercase tracking-widest text-muted-foreground"
          >
            <span className="text-base">{s.icon}</span>
            <span>{s.name}</span>
            <span className="ml-4 text-primary text-xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SERVICES = [
  "Personal Training", "Weight Loss", "Muscle Gain", "CrossFit",
  "Strength Training", "Cardio Training", "Functional Training",
  "Fat Loss Programs", "Beginner Programs", "Women Fitness",
];

export function ServicesMarquee() {
  return (
    <section className="border-y border-border bg-[var(--surface)] py-6">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <span key={i} className="font-display text-2xl font-bold uppercase tracking-wider text-muted-foreground">
              {s} <span className="ml-12 text-primary">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

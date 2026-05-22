import aboutImg from "@/assets/gallery-1.jpg";

const features = [
  { icon: "🏋️", text: "Premium Imported Equipment" },
  { icon: "❄️", text: "Fully Air-Conditioned Floors" },
  { icon: "🎓", text: "Nationally Certified Trainers" },
  { icon: "📱", text: "Progress Tracking & Plans" },
  { icon: "🤝", text: "Supportive Fitness Community" },
  { icon: "🕐", text: "Open 5 AM – 10 PM (Mon–Sat)" },
];

export function About() {
  return (
    <section id="about" className="section bg-background">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image side */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={aboutImg}
                alt="ABSolute Fitness GYM interior — Kasba Kolkata"
                className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-5 -right-4 rounded-xl px-7 py-5 text-center text-white shadow-2xl"
              style={{ background: "var(--gradient-red)", boxShadow: "0 20px 50px rgba(232,0,13,0.4)" }}
            >
              <span className="font-display text-5xl leading-none block">8+</span>
              <span className="text-[11px] uppercase tracking-wider opacity-90 mt-1 block">Years of Excellence</span>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="eyebrow mb-4">About ABSolute Fitness</div>
            <h2 className="font-display text-5xl md:text-6xl mb-4">
              Kasba's Most <span className="text-gradient-red">Trusted</span> Gym
            </h2>
            <div className="h-0.5 w-16 mb-6" style={{ background: "linear-gradient(90deg, var(--primary), transparent)" }} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              ABSolute Fitness GYM has been transforming bodies and minds in Kasba, Kolkata for over 8 years.
              We combine cutting-edge imported equipment, certified expert trainers, and a motivating
              community to deliver real, lasting fitness results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Located in the heart of Bosepukur, Kasba — we are more than a gym. Our 4.7★ Google rating
              and 425+ reviews speak for themselves. Whether you're a complete beginner or seasoned athlete,
              we adapt entirely to your needs.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-start gap-3 rounded-lg border border-border p-3.5 transition-all duration-300 hover:border-primary/40 hover:bg-surface"
                >
                  <span className="text-xl mt-0.5 flex-shrink-0">{f.icon}</span>
                  <span className="text-sm text-muted-foreground font-medium leading-snug">{f.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#membership" className="btn-hero">Start Your Journey</a>
              <a
                href="https://wa.me/918777080798?text=I%20want%20to%20know%20more%20about%20ABSolute%20Fitness%20GYM"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                💬 Ask a Question
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import womenImg from "@/assets/women-fitness.jpg";

const features = [
  { icon: "🛡️", title: "Safe Environment", text: "Zero-tolerance for disrespect. CCTV monitored facility at all times." },
  { icon: "👩‍💼", title: "Female Trainers", text: "Certified female fitness trainers available for personalized guidance." },
  { icon: "💪", title: "Strength Building", text: "Build real strength and confidence. Lifting isn't just for men." },
  { icon: "⚖️", title: "Fat Loss Programs", text: "Science-based programs for sustainable weight loss and body toning." },
];

const badges = [
  { icon: "🔒", label: "CCTV Secured" },
  { icon: "👩", label: "Female Staff" },
  { icon: "❤️", label: "Inclusive Culture" },
];

export function WomenFitness() {
  return (
    <section id="women" className="section relative overflow-hidden" style={{ background: "#080808" }}>
      {/* Faint bg image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${womenImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-4 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[3px]"
              style={{ background: "rgba(232,0,122,0.15)", border: "1px solid rgba(232,0,122,0.3)", color: "#e8007a" }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#e8007a" }} />
              Women's Fitness
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-4">
              Safe &amp; Comfortable
              <br />
              Fitness For <span className="text-gradient-red">Women</span>
            </h2>
            <div className="h-0.5 w-16 mb-6" style={{ background: "linear-gradient(90deg, var(--primary), transparent)" }} />
            <p className="text-muted-foreground leading-relaxed mb-8">
              At ABSolute Fitness GYM, every woman deserves to feel powerful, confident, and safe. We've
              created an environment where you can focus 100% on your fitness — nothing else.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border p-5 transition-all duration-300"
                  style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#e8007a";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(232,0,122,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/918777080798?text=I%20am%20a%20woman%20interested%20in%20joining%20ABSolute%20Fitness%20GYM"
              target="_blank"
              rel="noreferrer"
              className="btn-hero"
            >
              Join Women's Program
            </a>
          </div>

          {/* Image */}
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <img
                src={womenImg}
                alt="Women training confidently at ABSolute Fitness GYM — safe empowering environment"
                className="h-[420px] w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex gap-3">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex-1 rounded-xl border border-border p-4 text-center"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="text-2xl mb-1.5">{b.icon}</div>
                  <div className="text-xs font-semibold text-muted-foreground">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

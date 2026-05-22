import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    img: trainer1,
    name: "Rajesh Kumar",
    title: "Head Strength Coach",
    exp: "8+ years | NSCA Certified | Former National Level Athlete",
    tags: ["Strength", "PowerLifting", "Body Building"],
  },
  {
    img: trainer2,
    name: "Sanjay Mukherjee",
    title: "CrossFit & Functional Coach",
    exp: "6+ years | CrossFit Level 2 | Nutrition Certified",
    tags: ["CrossFit", "HIIT", "Nutrition"],
  },
  {
    img: trainer3,
    name: "Debasmita Roy",
    title: "Women's Fitness Specialist",
    exp: "5+ years | ACE Certified | Fat Loss Expert",
    tags: ["Women's Health", "Fat Loss", "Cardio"],
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="section" style={{ background: "#080808" }}>
      <div className="container-x">
        <div className="mb-14 text-center">
          <div className="eyebrow mb-4">Meet Our Experts</div>
          <h2 className="font-display text-5xl md:text-6xl">
            Our <span className="text-gradient-red">Certified</span> Trainers
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            World-class fitness professionals dedicated to your transformation. Your goals are their mission.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {trainers.map((t) => (
            <article
              key={t.name}
              className="group overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_50px_rgba(232,0,13,0.2)]"
              style={{ background: "var(--surface)" }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={t.img}
                  alt={`${t.name} — certified trainer at ABSolute Fitness GYM`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,1) 0%, transparent 55%)" }} />
                {/* WhatsApp quick book */}
                <a
                  href="https://wa.me/918777080798?text=I%20want%20to%20book%20a%20personal%20training%20session"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-sm opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{ background: "#25D366" }}
                  aria-label="Book session on WhatsApp"
                >
                  💬
                </a>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-1">{t.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--primary)" }}>
                  {t.title}
                </p>
                <p className="text-xs text-muted-foreground mb-4">{t.exp}</p>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/918777080798?text=I%20want%20to%20book%20a%20personal%20training%20session%20at%20ABSolute%20Fitness"
            target="_blank"
            rel="noreferrer"
            className="btn-hero"
          >
            Book a Personal Training Session
          </a>
        </div>
      </div>
    </section>
  );
}

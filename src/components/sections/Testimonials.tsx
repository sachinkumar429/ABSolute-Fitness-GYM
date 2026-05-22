import { useState } from "react";

const reviews = [
  { initials: "SD", name: "Sourav Das", date: "2 months ago", stars: 5, text: "Absolutely the best gym in Kasba! The trainers are incredibly knowledgeable and always push you to do better. Lost 12kg in 4 months with their fat loss program!" },
  { initials: "AC", name: "Ananya Chakraborty", date: "3 months ago", stars: 5, text: "As a woman, I was nervous about joining. The environment at ABSolute Fitness is so respectful and supportive. Female trainer Debasmita didi is amazing!" },
  { initials: "RS", name: "Ravi Shankar", date: "1 month ago", stars: 5, text: "The imported equipment quality is genuinely world-class. I've been to many gyms in Kolkata — ABSolute Fitness has the best gear hands down. Plus the AC is amazing!" },
  { initials: "PS", name: "Priya Sen", date: "5 months ago", stars: 5, text: "Personal training with Rajesh sir changed my entire approach to fitness. The personalized workout and nutrition plan delivered results in just 3 months!" },
  { initials: "AG", name: "Aditya Ghosh", date: "4 months ago", stars: 5, text: "Started CrossFit here as a complete beginner. The coaches are patient, the programming is excellent, and the community motivates you every single day!" },
  { initials: "MR", name: "Meenakshi Roy", date: "6 months ago", stars: 5, text: "Clean, spacious, professional. The pricing is very reasonable for the quality offered. Best decision I made this year was joining ABSolute Fitness GYM!" },
];

const avatarColors = [
  "from-red-600 to-red-800",
  "from-purple-600 to-purple-800",
  "from-blue-600 to-blue-800",
  "from-emerald-600 to-emerald-800",
  "from-orange-600 to-orange-800",
  "from-pink-600 to-pink-800",
];

export function Testimonials() {
  const [offset, setOffset] = useState(0);
  const visible = 3;
  const max = reviews.length - visible;

  const prev = () => setOffset((o) => Math.max(o - 1, 0));
  const next = () => setOffset((o) => Math.min(o + 1, max));

  return (
    <section id="testimonials" className="section" style={{ background: "#080808" }}>
      <div className="container-x">
        <div className="mb-14 text-center">
          <div className="eyebrow mb-4">Google Verified Reviews</div>
          <h2 className="font-display text-5xl md:text-6xl">
            What Our <span className="text-gradient-red">Members</span> Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            4.7★ rating with 425+ verified Google reviews. Real people. Real transformations. Real love.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(calc(-${offset} * (100% / ${visible} + 8px)))` }}
          >
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className="relative flex-none w-[calc(33.333%-10.67px)] rounded-xl border border-border p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(232,0,13,0.1)]"
                style={{ background: "var(--surface)" }}
              >
                {/* Google G */}
                <div className="absolute top-5 right-5 text-xl font-black" style={{ color: "#4285F4" }}>G</div>

                <div className="text-yellow-400 tracking-widest text-sm mb-4">{"★".repeat(r.stars)}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                  <span className="text-4xl font-serif leading-none align-bottom mr-1" style={{ color: "var(--primary)" }}>"</span>
                  {r.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[i]} text-sm font-bold text-white`}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground">Google Review · {r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={prev}
            disabled={offset === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-lg transition-all hover:border-primary hover:bg-primary/10 disabled:opacity-30"
            aria-label="Previous reviews"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={offset >= max}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-lg transition-all hover:border-primary hover:bg-primary/10 disabled:opacity-30"
            aria-label="Next reviews"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

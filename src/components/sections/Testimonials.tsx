import { Star } from "lucide-react";

const REVIEWS = [
  { n: "Anirban Ghosh", t: "Best gym in Kasba hands down. Imported equipment, AC floors and trainers who actually know what they're doing. Lost 12kg in 4 months." },
  { n: "Sneha Roy", t: "As a woman, I never felt comfortable in gyms before. ABSolute changed that — respectful trainers and a safe environment. Highly recommended." },
  { n: "Souvik Das", t: "Affordable pricing, world-class equipment. Personal training is genuinely personal. My deadlift went from 60 to 130 kg." },
  { n: "Megha Kapoor", t: "Spacious, clean and motivating. The CrossFit area is fantastic. Trainers push you but never make you feel judged." },
  { n: "Rahul Bose", t: "Joined as a complete beginner. The onboarding made me feel welcomed. Six months in, I'm in the best shape of my life." },
  { n: "Tania Sen", t: "The community here is real. People cheer for each other. It feels like a fitness family, not just a gym." },
];

export function Testimonials() {
  return (
    <section className="section border-y border-border bg-[var(--surface)]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> Reviews</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">4.7 ★ from <span className="text-gradient-red">425+ members</span></h2>
          <p className="mt-3 text-muted-foreground">Verified Google reviews from the ABSolute community.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.n} className="glass flex flex-col rounded-xl p-6">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-foreground/90">"{r.t}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-red)] font-bold">
                  {r.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold">{r.n}</div>
                  <div className="text-xs text-muted-foreground">Verified member</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

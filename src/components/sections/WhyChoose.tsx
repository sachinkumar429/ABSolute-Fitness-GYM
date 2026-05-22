import {
  Dumbbell, Users, ShieldCheck, Wind, Trophy, HeartPulse, Activity, Target,
} from "lucide-react";

const CARDS = [
  { icon: Users, title: "Certified Trainers", desc: "Internationally certified coaches who actually care about your progress." },
  { icon: Dumbbell, title: "Modern Equipment", desc: "Imported strength machines, free weights and cardio rigs." },
  { icon: Activity, title: "CrossFit Zone", desc: "Dedicated functional training and CrossFit setup." },
  { icon: Target, title: "Personal Attention", desc: "Small batches with real one-on-one coaching." },
  { icon: Wind, title: "Air-Conditioned", desc: "Spacious, hygienic, fully AC floors designed for performance." },
  { icon: HeartPulse, title: "Cardio Zone", desc: "Latest treadmills, ellipticals, rowing & cycling machines." },
  { icon: ShieldCheck, title: "Safe & Inclusive", desc: "Beginner-friendly culture, judgement-free, women-safe." },
  { icon: Trophy, title: "Transformation Support", desc: "Nutrition, planning, tracking — built for results." },
];

export function WhyChoose() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> Why Choose Us</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Built different. Built for <span className="text-gradient-red">results</span>.</h2>
          <p className="mt-4 text-muted-foreground">
            Every detail of ABSolute Fitness is engineered around the only thing that matters — your transformation.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div key={c.title} className="glass group relative overflow-hidden rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-[var(--gradient-red)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Sparkles, Shield, Dumbbell, Heart, Flame } from "lucide-react";

const POINTS = [
  { icon: Sparkles, title: "Start Your Fitness Journey Without Fear", desc: "Beginner-friendly trainers, simple onboarding and a no-judgement floor. Everyone starts somewhere — we make sure you stay." },
  { icon: Flame, title: "Real Results. Real Transformations.", desc: "Personalised, science-backed training and progress tracking that actually delivers on what other gyms only promise." },
  { icon: Dumbbell, title: "Train In A Professional Environment", desc: "Clean, spacious, AC-cooled floors with imported equipment and certified coaches. The way fitness should feel." },
  { icon: Heart, title: "Safe & Comfortable Fitness For Women", desc: "Female trainers, respectful culture and a comfortable atmosphere designed for women to train confidently." },
  { icon: Shield, title: "We Push You Beyond Your Limits", desc: "A community, daily motivation, goal tracking and trainers who refuse to let you quit on yourself." },
];

export function PainPoints() {
  return (
    <section className="section border-y border-border bg-[var(--surface)]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> Built For You</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Solving what other gyms <span className="text-gradient-red">ignore</span></h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p, i) => (
            <div key={p.title} className={`glass rounded-2xl p-7 ${i === 4 ? "lg:col-start-2" : ""}`}>
              <p.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  Dumbbell, Flame, HeartPulse, Activity, Users, Sparkles, Target, Zap, ShieldCheck,
} from "lucide-react";

const SERVICES = [
  { icon: Users, t: "Personal Training", d: "1-on-1 coaching with fully personalised plans, weekly reviews and nutrition guidance." },
  { icon: Flame, t: "Weight Loss", d: "Structured fat-loss programs combining strength, cardio and nutrition coaching." },
  { icon: Dumbbell, t: "Muscle Gain", d: "Hypertrophy-focused programming for clean lean muscle, built to look and perform." },
  { icon: Activity, t: "CrossFit", d: "High-intensity functional training in our dedicated CrossFit zone." },
  { icon: Zap, t: "Strength Training", d: "Powerlifting and strength systems with progressive overload and form coaching." },
  { icon: HeartPulse, t: "Cardio Training", d: "Treadmills, ellipticals, rowers and bikes — programmed for endurance and fat loss." },
  { icon: Target, t: "Functional Training", d: "Movement-first training that translates to real-world performance." },
  { icon: Sparkles, t: "Beginner Programs", d: "Judgement-free onboarding with simple, structured plans for first-timers." },
  { icon: ShieldCheck, t: "Women Fitness", d: "Female-led training in a safe, respectful, supportive environment." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Personal Training, CrossFit & More | ABSolute Fitness" },
      { name: "description", content: "Personal training, weight loss, muscle gain, CrossFit, strength, cardio, functional training & women fitness in Kasba, Kolkata." },
      { property: "og:title", content: "Fitness Services at ABSolute Fitness Gym" },
      { property: "og:description", content: "Coaching that delivers — personal training, CrossFit, weight loss and more." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="section bg-[var(--gradient-hero)]">
        <div className="container-x text-center">
          <div className="eyebrow justify-center"><span className="h-px w-8 bg-primary" /> What We Do</div>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">Services <span className="text-gradient-red">built for results</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            From your first session to your strongest version — every program at ABSolute is engineered around your goal.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.t} className="glass rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-primary">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-[var(--gradient-red)] shadow-[var(--shadow-glow)]"><s.icon className="h-6 w-6 text-primary-foreground" /></div>
              <h3 className="text-xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner />
    </SiteLayout>
  );
}

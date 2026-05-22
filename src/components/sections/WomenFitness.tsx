import womenImg from "@/assets/women-fitness.jpg";
import { ShieldCheck, Heart, Users } from "lucide-react";

export function WomenFitness() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> Women Fitness</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Safe & comfortable fitness <span className="text-gradient-red">for women</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A respectful, hygienic, judgement-free environment with female trainers and women-focused
            programs — fat loss, toning, strength and pre/post-natal coaching.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: ShieldCheck, t: "Safe Environment", d: "Verified, respectful trainers and a hygiene-first culture." },
              { icon: Heart, t: "Female Coaches", d: "Women-led training programs designed for real female goals." },
              { icon: Users, t: "Supportive Community", d: "Train with women who lift each other up, every single day." },
            ].map((f) => (
              <div key={f.t} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">{f.t}</div>
                  <div className="text-sm text-muted-foreground">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative">
            <img src={womenImg} alt="Women fitness training at ABSolute Fitness Kasba" loading="lazy" width={1280} height={1280} className="aspect-square w-full rounded-2xl object-cover" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

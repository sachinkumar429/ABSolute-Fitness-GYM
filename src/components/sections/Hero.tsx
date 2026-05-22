import heroImg from "@/assets/hero-gym.jpg";
import { Play, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <img
        src={heroImg}
        alt="Athlete training at ABSolute Fitness Gym Kasba"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.08 0.01 20 / 0.55) 0%, oklch(0.08 0.01 20 / 0.85) 70%, oklch(0.08 0.01 20) 100%)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.08_0.01_20/0.6)_100%)]" />

      <div className="container-x relative z-10 flex min-h-[92vh] flex-col justify-center py-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="font-semibold">4.7 ★ rated</span>
            <span className="text-muted-foreground">— 425+ Google reviews</span>
          </div>
          <h1 className="text-5xl font-black leading-[1.05] md:text-7xl">
            Transform your body at <span className="text-gradient-red">Kasba's premium</span> fitness destination
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Modern equipment · Certified trainers · Real results. Train fearlessly in an environment
            built for transformation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#join" className="btn-hero">Join Now</a>
            <a href="#trial" className="btn-outline">Free Trial</a>
            <a href="https://wa.me/918777080798" target="_blank" rel="noreferrer" className="btn-outline">
              <Play className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
            {[
              { n: "425+", l: "Happy Members" },
              { n: "15+", l: "Certified Trainers" },
              { n: "4.7★", l: "Google Rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient-red md:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

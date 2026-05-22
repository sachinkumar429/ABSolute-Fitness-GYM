import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-gym.jpg";

const stats = [
  { n: "425+", l: "Google Reviews" },
  { n: "4.7★", l: "Rating" },
  { n: "500+", l: "Active Members" },
  { n: "8+", l: "Years of Excellence" },
];

export function Hero() {
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal-hero").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={heroImg}
        alt="ABSolute Fitness GYM — premium gym interior Kasba Kolkata"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,5,5,0.93) 0%, rgba(5,5,5,0.75) 55%, rgba(232,0,13,0.08) 100%)",
        }}
      />
      {/* Red glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 10% 20%, rgba(232,0,13,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative z-10 flex min-h-screen flex-col justify-center py-28">
        {/* Eyebrow */}
        <div
          className="reveal-hero opacity-0 translate-y-6 transition-all duration-700 mb-5 inline-flex items-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="h-px w-10 bg-primary" />
          <span className="text-[11px] font-bold uppercase tracking-[4px] text-primary">
            Kasba, Kolkata's #1 Premium Gym
          </span>
          <span className="h-px w-10 bg-primary" />
        </div>

        {/* Rating pill */}
        <div
          className="reveal-hero opacity-0 translate-y-6 transition-all duration-700 mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5"
          style={{ transitionDelay: "80ms" }}
        >
          <span className="text-yellow-400 tracking-widest">★★★★★</span>
          <span className="text-sm font-semibold text-yellow-300">4.7 Stars</span>
          <span className="text-yellow-600">|</span>
          <span className="text-sm text-yellow-400/80">425+ Google Reviews</span>
        </div>

        {/* Headline */}
        <h1
          className="reveal-hero opacity-0 translate-y-6 transition-all duration-700 font-display text-[clamp(52px,9vw,108px)] leading-[0.93] uppercase mb-6"
          style={{ transitionDelay: "160ms" }}
        >
          Transform
          <br />
          Your Body At
          <br />
          <span className="text-gradient-red">Kasba's Elite</span>
          <br />
          Fitness Hub
        </h1>

        {/* Sub */}
        <p
          className="reveal-hero opacity-0 translate-y-6 transition-all duration-700 mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed"
          style={{ transitionDelay: "240ms" }}
        >
          <span className="text-foreground font-semibold">Modern Equipment</span> &bull;{" "}
          <span className="text-foreground font-semibold">Certified Trainers</span> &bull;{" "}
          <span className="text-foreground font-semibold">Real Results</span>
          <br />
          Kolkata's most trusted gym for fat loss, muscle building &amp; transformation.
        </p>

        {/* CTAs */}
        <div
          className="reveal-hero opacity-0 translate-y-6 transition-all duration-700 flex flex-wrap gap-3 mb-14"
          style={{ transitionDelay: "320ms" }}
        >
          <a href="#membership" className="btn-hero">
            🏋️ Join Now — Free Trial
          </a>
          <a
            href="https://wa.me/918777080798?text=Hi!%20I%20want%20a%20FREE%20trial%20at%20ABSolute%20Fitness%20GYM"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all"
            style={{ background: "#25D366", color: "#fff", boxShadow: "0 0 30px rgba(37,211,102,0.3)" }}
          >
            💬 WhatsApp Us
          </a>
          <a href="tel:+918777080798" className="btn-outline">
            📞 Call Now
          </a>
        </div>

        {/* Stats */}
        <div
          className="reveal-hero opacity-0 translate-y-6 transition-all duration-700 flex flex-wrap gap-10"
          ref={countersRef}
          style={{ transitionDelay: "400ms" }}
        >
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-[40px] leading-none text-gradient-red">{s.n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[2px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[3px] text-muted-foreground">Scroll</span>
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: "linear-gradient(to bottom, var(--primary), transparent)" }}
        />
      </div>
    </section>
  );
}

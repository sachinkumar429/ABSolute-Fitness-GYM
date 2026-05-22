import { useState } from "react";
import transformImg from "@/assets/transformation.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const stories = [
  {
    name: "Rahul Sharma",
    result: "-18 KG",
    duration: "6 Months",
    program: "Fat Loss Program",
    text: '"I had zero confidence. In 6 months at ABSolute Fitness, I lost 18kg and found a version of myself I never knew existed. The trainers are phenomenal."',
    img: transformImg,
  },
  {
    name: "Priya Bose",
    result: "+8 KG Muscle",
    duration: "9 Months",
    program: "Women's Strength",
    text: '"As a woman, I was hesitant. But the safe environment and incredible female trainers made me feel at home. Now I\'m stronger than I\'ve ever been!"',
    img: gallery3,
  },
  {
    name: "Arjun Dey",
    result: "Complete Transformation",
    duration: "12 Months",
    program: "Body Recomposition",
    text: '"From skinny-fat to athletic in 1 year. The personalized training program and diet guidance from ABSolute Fitness changed my life completely."',
    img: gallery2,
  },
];

export function Transformations() {
  const [active, setActive] = useState(0);

  return (
    <section id="transformation" className="section bg-background">
      <div className="container-x">
        <div className="mb-14 text-center">
          <div className="eyebrow mb-4">Member Success Stories</div>
          <h2 className="font-display text-5xl md:text-6xl">
            Real Results. <span className="text-gradient-red">Real</span> Transformations.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            No fake before/afters. Real members from Kasba who walked through our doors and never looked back.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(232,0,13,0.15)" }}
          >
            <img
              src={stories[active].img}
              alt={`Transformation story — ${stories[active].name}`}
              className="h-[440px] w-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <span
                className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
                style={{ background: "var(--primary)" }}
              >
                Real Member Result
              </span>
            </div>
          </div>

          {/* Stories */}
          <div>
            <h3 className="font-display text-3xl mb-2">Choose a Story</h3>
            <p className="text-sm text-muted-foreground mb-6">Click to see each member's journey</p>
            <div className="flex flex-col gap-4">
              {stories.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => setActive(i)}
                  className="text-left w-full rounded-xl border p-5 transition-all duration-300"
                  style={{
                    borderColor: active === i ? "var(--primary)" : "var(--border)",
                    background: active === i ? "rgba(232,0,13,0.05)" : "var(--surface)",
                    boxShadow: active === i ? "0 0 30px rgba(232,0,13,0.15)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base">{s.name}</span>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(232,0,13,0.15)", color: "var(--primary)" }}
                    >
                      {s.result}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 italic">{s.text}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>⏱️ {s.duration}</span>
                    <span>🎯 {s.program}</span>
                  </div>
                </button>
              ))}
            </div>
            <a
              href="https://wa.me/918777080798?text=I%20want%20to%20start%20my%20transformation%20at%20ABSolute%20Fitness!"
              target="_blank"
              rel="noreferrer"
              className="btn-hero mt-6 inline-flex"
            >
              🚀 Start My Transformation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

function calcBmi(weight: number, height: number) {
  const h = height / 100;
  return weight / (h * h);
}

function getCategory(bmi: number) {
  if (bmi < 18.5) return { label: "⚡ Underweight", color: "#3B82F6", pos: Math.min(((bmi - 10) / 8.5) * 25, 24) };
  if (bmi < 25)   return { label: "✅ Healthy Weight", color: "#22C55E", pos: 25 + ((bmi - 18.5) / 6.5) * 25 };
  if (bmi < 30)   return { label: "⚠️ Overweight", color: "#F5A623", pos: 50 + ((bmi - 25) / 5) * 25 };
  return { label: "🔴 Obese", color: "#E8000D", pos: Math.min(75 + ((bmi - 30) / 10) * 25, 96) };
}

function getAdvice(label: string) {
  if (label.includes("Underweight")) return "You need to gain healthy muscle mass. Our trainers specialize in structured weight gain programs. Join ABSolute Fitness!";
  if (label.includes("Healthy")) return "Great! You're in the healthy range. Maintain and improve with our strength & conditioning programs.";
  if (label.includes("Overweight")) return "A targeted fat loss program can get you back to healthy range. Our certified trainers have helped 500+ members lose weight!";
  return "Time to take action. Our specialized weight loss programs and certified trainers will guide you every step of the way.";
}

export function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<null | { bmi: number; category: ReturnType<typeof getCategory>; advice: string }>(null);

  function handleCalc(e: React.FormEvent) {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) return;
    const bmi = calcBmi(w, h);
    const category = getCategory(bmi);
    setResult({ bmi: Math.round(bmi * 10) / 10, category, advice: getAdvice(category.label) });
  }

  const inputCls = "w-full rounded-lg border border-border bg-surface-2 px-4 py-3.5 text-foreground text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground";

  return (
    <section id="bmi" className="section bg-background">
      <div className="container-x">
        <div className="mb-12 text-center">
          <div className="eyebrow mb-4">Free Tool</div>
          <h2 className="font-display text-5xl md:text-6xl">
            Check Your <span className="text-gradient-red">BMI</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Calculate your Body Mass Index instantly and see what it means for your fitness journey.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div
            className="relative overflow-hidden rounded-2xl border border-border p-10"
            style={{ background: "var(--surface)" }}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, var(--primary), transparent)" }} />

            <form onSubmit={handleCalc} className="space-y-5">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[1px] text-muted-foreground">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 75"
                    min="20" max="300"
                    required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[1px] text-muted-foreground">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    min="100" max="250"
                    required
                    className={inputCls}
                  />
                </div>
                <div className="col-span-2 md:col-span-1 flex items-end">
                  <button type="submit" className="btn-hero w-full justify-center py-3.5">
                    ⚡ Calculate
                  </button>
                </div>
              </div>
            </form>

            {result && (
              <div
                className="mt-8 rounded-xl border border-border p-7 text-center animate-fade-up"
                style={{ background: "var(--surface-2)" }}
              >
                <div className="font-display text-7xl leading-none mb-2" style={{ color: result.category.color }}>
                  {result.bmi}
                </div>
                <div className="text-lg font-bold mb-2" style={{ color: result.category.color }}>
                  {result.category.label}
                </div>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6 leading-relaxed">
                  {result.advice}
                </p>

                {/* BMI Scale */}
                <div className="relative h-2.5 rounded-full mb-2" style={{ background: "linear-gradient(90deg, #3B82F6 0%, #22C55E 25%, #F5A623 50%, #E8000D 100%)" }}>
                  <div
                    className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-white transition-all duration-500"
                    style={{ left: `${result.category.pos}%`, borderColor: "#050505", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground mb-6">
                  <span>Underweight</span><span>Healthy</span><span>Overweight</span><span>Obese</span>
                </div>

                <a
                  href="https://wa.me/918777080798?text=I%20calculated%20my%20BMI%20and%20want%20a%20fitness%20consultation%20at%20ABSolute%20Fitness%20GYM"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wider text-white"
                  style={{ background: "#25D366", boxShadow: "0 0 20px rgba(37,211,102,0.25)" }}
                >
                  💬 Get Free Fitness Consultation
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

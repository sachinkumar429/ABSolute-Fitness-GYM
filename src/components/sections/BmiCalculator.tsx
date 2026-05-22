import { useMemo, useState } from "react";

export function BmiCalculator() {
  const [h, setH] = useState(170);
  const [w, setW] = useState(70);
  const bmi = useMemo(() => {
    const m = h / 100;
    return +(w / (m * m)).toFixed(1);
  }, [h, w]);
  const label =
    bmi < 18.5 ? { t: "Underweight", c: "text-yellow-400" }
    : bmi < 25 ? { t: "Healthy", c: "text-emerald-400" }
    : bmi < 30 ? { t: "Overweight", c: "text-orange-400" }
    : { t: "Obese", c: "text-primary" };

  return (
    <section className="section border-y border-border bg-[var(--surface)]">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> Free Tool</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Calculate your <span className="text-gradient-red">BMI</span></h2>
          <p className="mt-4 text-muted-foreground">
            BMI is a starting point — not the full picture. Talk to our coaches for a body
            composition test and a personalised plan that actually fits you.
          </p>
          <a href="https://wa.me/918777080798" target="_blank" rel="noreferrer" className="btn-hero mt-6">Get my plan</a>
        </div>

        <div className="glass rounded-2xl p-8">
          <label className="block">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>Height</span><span className="text-primary">{h} cm</span>
            </div>
            <input type="range" min={120} max={220} value={h} onChange={(e) => setH(+e.target.value)} className="mt-2 w-full accent-[oklch(0.62_0.24_25)]" />
          </label>
          <label className="mt-6 block">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>Weight</span><span className="text-primary">{w} kg</span>
            </div>
            <input type="range" min={30} max={180} value={w} onChange={(e) => setW(+e.target.value)} className="mt-2 w-full accent-[oklch(0.62_0.24_25)]" />
          </label>

          <div className="mt-8 grid grid-cols-2 items-center gap-4 rounded-xl border border-border bg-background/60 p-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Your BMI</div>
              <div className="font-display text-5xl font-black">{bmi}</div>
            </div>
            <div className={`text-right font-display text-2xl font-bold ${label.c}`}>{label.t}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import { Instagram } from "lucide-react";

const TRAINERS = [
  { img: t1, name: "Aditya Sharma", role: "Head Coach · Strength", exp: "8+ yrs · ACE Certified", specialty: "Powerlifting, Hypertrophy" },
  { img: t2, name: "Riya Banerjee", role: "Women's Fitness Lead", exp: "6+ yrs · K11 Certified", specialty: "Fat Loss, Toning, Pre/Post-Natal" },
  { img: t3, name: "Karan Mehta", role: "CrossFit & Functional Coach", exp: "7+ yrs · CrossFit L2", specialty: "CrossFit, Conditioning, Athletes" },
];

export function Trainers() {
  return (
    <section id="trainers" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> The Team</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Coaches who <span className="text-gradient-red">actually care</span></h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TRAINERS.map((t) => (
            <article key={t.name} className="group relative overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={t.img} alt={`${t.name} — ${t.role}`} loading="lazy" width={800} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs uppercase tracking-widest text-primary">{t.role}</div>
                <h3 className="mt-1 text-2xl font-bold">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.exp}</p>
                <p className="text-xs text-muted-foreground">Specialty: {t.specialty}</p>
                <a href="#" className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border hover:border-primary"><Instagram className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

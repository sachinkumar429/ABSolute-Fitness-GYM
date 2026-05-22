import transformationImg from "@/assets/transformation.jpg";

export function Transformations() {
  const stories = [
    { name: "Rohit S.", goal: "Fat Loss", result: "-18 KG in 6 months" },
    { name: "Priya D.", goal: "Strength", result: "Deadlift PR 90 KG" },
    { name: "Arjun M.", goal: "Muscle Gain", result: "+8 KG lean mass" },
  ];
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> Transformations</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Real members. Real <span className="text-gradient-red">results</span>.</h2>
          <p className="mt-5 text-muted-foreground">
            Behind every transformation is a structured plan, weekly check-ins and a coach who refuses
            to let you slack. This is what real coaching looks like.
          </p>
          <div className="mt-8 space-y-4">
            {stories.map((s) => (
              <div key={s.name} className="glass flex items-center justify-between rounded-xl p-5">
                <div>
                  <div className="text-lg font-bold">{s.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.goal}</div>
                </div>
                <div className="font-display text-xl font-bold text-gradient-red">{s.result}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={transformationImg} alt="Member transformation at ABSolute Fitness" loading="lazy" width={1280} height={896} className="aspect-[4/5] w-full rounded-2xl object-cover" />
          <div className="absolute -bottom-5 left-5 right-5 glass rounded-xl p-5">
            <div className="font-display text-2xl font-bold">"This gym changed my life."</div>
            <div className="mt-1 text-xs text-muted-foreground">— verified Google review · 5 ★</div>
          </div>
        </div>
      </div>
    </section>
  );
}

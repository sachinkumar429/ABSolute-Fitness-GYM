import equipmentImg from "@/assets/equipment.jpg";
import crossfitImg from "@/assets/crossfit.jpg";

export function About() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={equipmentImg} alt="Premium gym equipment in Kasba" loading="lazy" width={1600} height={1024} className="aspect-[3/4] w-full rounded-xl object-cover" />
            <img src={crossfitImg} alt="CrossFit functional training area" loading="lazy" width={1280} height={896} className="mt-12 aspect-[3/4] w-full rounded-xl object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-primary/50 bg-background/80 px-6 py-4 backdrop-blur md:block">
            <div className="font-display text-3xl font-bold text-gradient-red">10+ Years</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Of Transforming Lives</div>
          </div>
        </div>

        <div>
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> About ABSolute</div>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            More than a gym. A culture of <span className="text-gradient-red">transformation</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            ABSolute Fitness Gym is Kasba's top-rated fitness destination — purpose-built for people
            who are serious about change. Whether your goal is fat loss, lean muscle, raw strength or
            simply moving better, our certified trainers and premium environment give you every
            advantage to win.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Imported strength & cardio equipment",
              "Spacious, hygienic, air-conditioned floors",
              "Beginner-friendly onboarding & personalised plans",
              "Dedicated CrossFit and functional zones",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <a href="#join" className="btn-hero">Start Your Journey</a>
            <a href="#trainers" className="btn-outline">Meet The Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}

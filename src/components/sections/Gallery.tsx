import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import crossfit from "@/assets/crossfit.jpg";

const items = [
  { src: gallery1, alt: "ABSolute Fitness GYM main training floor — Kasba Kolkata", icon: "🏋️", span: true },
  { src: gallery2, alt: "Heavy barbell training at ABSolute Fitness GYM", icon: "💪", span: false },
  { src: gallery3, alt: "Women's strength training at ABSolute Fitness GYM", icon: "❤️", span: false },
  { src: crossfit, alt: "CrossFit area at ABSolute Fitness GYM", icon: "🏆", span: false },
  { src: gallery4, alt: "Premium cardio zone at ABSolute Fitness GYM", icon: "🏃", span: false },
];

export function Gallery() {
  return (
    <section id="gallery" className="section bg-background">
      <div className="container-x">
        <div className="mb-14 text-center">
          <div className="eyebrow mb-4">Inside ABSolute Fitness</div>
          <h2 className="font-display text-5xl md:text-6xl">
            Our <span className="text-gradient-red">Gallery</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A glimpse into the premium world of ABSolute Fitness GYM — where champions are made.
          </p>
        </div>

        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "260px 260px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.alt}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={item.span ? { gridRow: "span 2" } : {}}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
                style={{ background: "rgba(232,0,13,0.5)" }}
              >
                <span className="text-4xl transform scale-75 transition-transform duration-300 group-hover:scale-100">
                  {item.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

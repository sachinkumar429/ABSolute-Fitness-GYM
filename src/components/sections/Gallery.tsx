import equipmentImg from "@/assets/equipment.jpg";
import crossfitImg from "@/assets/crossfit.jpg";
import transformationImg from "@/assets/transformation.jpg";
import womenImg from "@/assets/women-fitness.jpg";
import heroImg from "@/assets/hero-gym.jpg";
import t1 from "@/assets/trainer-1.jpg";

const IMAGES = [
  { src: heroImg, alt: "Strength training floor" },
  { src: equipmentImg, alt: "Premium dumbbell rack" },
  { src: crossfitImg, alt: "CrossFit functional zone" },
  { src: transformationImg, alt: "Member training" },
  { src: womenImg, alt: "Women fitness coaching" },
  { src: t1, alt: "Personal trainer" },
];

export function Gallery() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow"><span className="h-px w-8 bg-primary" /> Inside The Gym</div>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">A look <span className="text-gradient-red">inside</span></h2>
        </div>
        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 ? "col-span-2 row-span-2" : ""
              } ${i === 3 ? "md:row-span-2" : ""}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

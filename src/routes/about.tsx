import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Trainers } from "@/components/sections/Trainers";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ABSolute Fitness Gym — Kasba's Premium Gym" },
      { name: "description", content: "Learn about ABSolute Fitness — Kasba's premium gym with certified trainers, imported equipment and a culture built around real transformation." },
      { property: "og:title", content: "About ABSolute Fitness Gym" },
      { property: "og:description", content: "Kasba's premium fitness destination — built around real transformation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="section bg-[var(--gradient-hero)]">
        <div className="container-x text-center">
          <div className="eyebrow justify-center"><span className="h-px w-8 bg-primary" /> About Us</div>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">A gym <span className="text-gradient-red">built different</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            ABSolute Fitness is more than equipment and floors — it's a transformation system designed
            by coaches who've been in your shoes.
          </p>
        </div>
      </section>
      <About />
      <WhyChoose />
      <Trainers />
      <Testimonials />
      <CtaBanner />
    </SiteLayout>
  );
}

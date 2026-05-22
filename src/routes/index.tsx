import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { PainPoints } from "@/components/sections/PainPoints";
import { Transformations } from "@/components/sections/Transformations";
import { Testimonials } from "@/components/sections/Testimonials";
import { Trainers } from "@/components/sections/Trainers";
import { Plans } from "@/components/sections/Plans";
import { WomenFitness } from "@/components/sections/WomenFitness";
import { BmiCalculator } from "@/components/sections/BmiCalculator";
import { Gallery } from "@/components/sections/Gallery";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABSolute Fitness Gym Kasba — Best Gym in Kolkata | 4.7★" },
      { name: "description", content: "Top-rated premium gym in Kasba, Kolkata. Personal training, CrossFit, weight loss & muscle building. Modern equipment, certified trainers. Book a free trial." },
      { property: "og:title", content: "ABSolute Fitness Gym Kasba — Best Gym in Kolkata" },
      { property: "og:description", content: "Modern equipment · Certified trainers · Real results. Join Kasba's premium fitness destination." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HealthClub",
        name: "ABSolute Fitness Gym",
        image: "/og.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "205 1A, Bosepukur, Kasba",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700107",
          addressCountry: "IN",
        },
        telephone: "+91-87770-80798",
        priceRange: "₹₹",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "425" },
        openingHours: "Mo-Sa 05:00-22:00",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesMarquee />
      <About />
      <WhyChoose />
      <PainPoints />
      <Transformations />
      <Testimonials />
      <Trainers />
      <Plans />
      <WomenFitness />
      <BmiCalculator />
      <Gallery />
      <Faq />
      <CtaBanner />
    </SiteLayout>
  );
}

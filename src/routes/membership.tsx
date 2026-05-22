import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Plans } from "@/components/sections/Plans";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Affordable Gym in Kasba | ABSolute Fitness" },
      { name: "description", content: "Affordable gym membership in Kasba, Kolkata. Monthly, quarterly, half-yearly and personal training plans. No hidden fees." },
      { property: "og:title", content: "Gym Membership Plans — ABSolute Fitness" },
      { property: "og:description", content: "Plans built around your goals. Transparent pricing. Cancel anytime." },
      { property: "og:url", content: "/membership" },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <SiteLayout>
      <section className="section bg-[var(--gradient-hero)]">
        <div className="container-x text-center">
          <div className="eyebrow justify-center"><span className="h-px w-8 bg-primary" /> Membership</div>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">Choose your <span className="text-gradient-red">commitment</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Transparent pricing. Premium experience. Real coaching support included on every plan.
          </p>
        </div>
      </section>
      <Plans />
      <Faq />
      <CtaBanner />
    </SiteLayout>
  );
}

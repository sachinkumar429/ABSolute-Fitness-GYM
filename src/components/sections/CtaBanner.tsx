import heroImg from "@/assets/hero-gym.jpg";

export function CtaBanner() {
  return (
    <section id="trial" className="relative overflow-hidden py-24">
      <img src={heroImg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.24_25/0.3),transparent_70%)]" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.08 0.01 20 / 0.85), oklch(0.08 0.01 20 / 0.95))" }} />
      <div className="container-x relative z-10 text-center">
        <h2 className="text-5xl font-black md:text-6xl">Your transformation <span className="text-gradient-red">starts today</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Book a free trial session. Walk in, train hard, see the difference. No pressure, no contracts.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="tel:+918777080798" className="btn-hero">Call Now</a>
          <a href="#join" className="btn-outline">Join Membership</a>
          <a href="https://wa.me/918777080798" target="_blank" rel="noreferrer" className="btn-outline">Book Free Trial</a>
        </div>
      </div>
    </section>
  );
}

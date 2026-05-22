export function CtaBanner() {
  return (
    <section
      id="cta-banner"
      className="section relative overflow-hidden text-center"
      style={{
        background: "linear-gradient(135deg, #0D0000 0%, #1A0000 50%, #A50009 100%)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(232,0,13,0.3) 0%, transparent 70%)" }}
      />

      <div className="container-x relative z-10">
        <h2 className="font-display text-[clamp(48px,8vw,88px)] leading-[0.95] uppercase mb-4">
          Your Transformation
          <br />
          Starts <span style={{ color: "#F5A623" }}>Today</span>
        </h2>
        <p className="text-lg text-white/75 mb-3">
          Join Kasba's most trusted fitness community. 500+ members already transforming their lives.
        </p>
        <div
          className="mb-10 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-bold tracking-wider"
          style={{ color: "#F5A623" }}
        >
          🎁 LIMITED OFFER: FREE 3-Day Trial Pass — Claim Before It Expires!
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918777080798"
            className="btn-outline"
            aria-label="Call ABSolute Fitness GYM"
          >
            📞 Call: +91 87770 80798
          </a>
          <a
            href="https://wa.me/918777080798?text=I%20want%20to%20join%20ABSolute%20Fitness%20GYM!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5"
            style={{ background: "#25D366", boxShadow: "0 0 30px rgba(37,211,102,0.4)" }}
          >
            💬 WhatsApp to Join
          </a>
          <a href="#membership" className="btn-hero">
            🏋️ View Plans
          </a>
        </div>
      </div>
    </section>
  );
}

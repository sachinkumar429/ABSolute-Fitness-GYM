import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const NAV = [
  { href: "#about",         label: "About" },
  { href: "#services",      label: "Services" },
  { href: "#trainers",      label: "Trainers" },
  { href: "#membership",    label: "Plans" },
  { href: "#testimonials",  label: "Reviews" },
  { href: "#contact",       label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Main Header ── */}
      <header
        className={[
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-xl shadow-[0_4px_30px_oklch(0_0_0/0.5)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="container-x flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="ABSolute Fitness GYM Home">
            <div className="brand-logo-icon">A</div>
            <div className="leading-none">
              <div className="font-display text-[18px] tracking-wider leading-none">
                <span className="text-gradient-red">ABS</span>olute
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground mt-0.5">
                Fitness GYM · Kasba
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="nav-link">
                {n.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+918777080798"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Call ABSolute Fitness GYM"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              +91 87770 80798
            </a>
            <a
              href="https://wa.me/918777080798?text=Hi!%20I%20want%20to%20join%20ABSolute%20Fitness%20GYM"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp btn-sm"
            >
              💬 WhatsApp
            </a>
            <a href="#membership" className="btn-hero btn-sm">
              Join Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {open && (
          <nav
            className="border-t border-border bg-background/98 backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-x flex flex-col gap-1 py-5">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="nav-link border-b border-border py-3 text-base"
                >
                  {n.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/918777080798?text=Hi!%20I%20want%20to%20join%20ABSolute%20Fitness%20GYM"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp justify-center"
                >
                  💬 WhatsApp Us
                </a>
                <a href="#membership" className="btn-hero justify-center">
                  🏋️ Join Now — Free Trial
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

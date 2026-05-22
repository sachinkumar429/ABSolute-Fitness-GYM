import { Instagram, Facebook, Youtube, Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "#about",        label: "About Us" },
  { href: "#services",     label: "Our Services" },
  { href: "#trainers",     label: "Trainers" },
  { href: "#membership",   label: "Membership Plans" },
  { href: "#gallery",      label: "Gallery" },
  { href: "#contact",      label: "Contact Us" },
];

const services = [
  "Personal Training",
  "Weight Loss",
  "Muscle Building",
  "CrossFit",
  "Women's Fitness",
  "BMI Calculator",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="brand-logo-icon">A</div>
            <div className="leading-none">
              <div className="font-display text-[18px] tracking-wider">
                <span className="text-gradient-red">ABS</span>olute
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                Fitness GYM
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-[240px]">
            Kasba's premier fitness destination since 2016. Transforming bodies,
            building confidence, and creating champions — one rep at a time.
          </p>

          {/* Social icons */}
          <div className="flex gap-2.5" role="list" aria-label="Social media">
            {[
              { href: "#", Icon: Instagram, label: "Instagram" },
              { href: "#", Icon: Facebook, label: "Facebook" },
              { href: "#", Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                role="listitem"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-all duration-200 hover:border-primary hover:bg-surface-2 hover:text-primary text-muted-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-5 text-[11px] font-black uppercase tracking-[2px] text-foreground">
            Quick Links
          </h4>
          <ul className="space-y-3" role="list">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1"
                >
                  <span className="text-primary text-xs">→</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-5 text-[11px] font-black uppercase tracking-[2px] text-foreground">
            Services
          </h4>
          <ul className="space-y-3" role="list">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1"
                >
                  <span className="text-primary text-xs">→</span>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 text-[11px] font-black uppercase tracking-[2px] text-foreground">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" aria-hidden="true" />
              <span>205 1A, Bosepukur, Kasba,<br />Kolkata, WB 700107</span>
            </li>
            <li>
              <a
                href="tel:+918777080798"
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                +91 87770 80798
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 shrink-0 text-primary mt-0.5" aria-hidden="true" />
              <span>Mon – Sat: 5:00 AM – 10:00 PM<br />Sunday: Closed</span>
            </li>
          </ul>

          <a
            href="https://wa.me/918777080798?text=Hi%20ABSolute%20Fitness%2C%20I%27d%20like%20to%20book%20a%20free%20trial."
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp mt-6 w-full justify-center"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="border-t border-border py-5">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <span>
            © {new Date().getFullYear()} ABSolute Fitness GYM, Kasba, Kolkata. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <span className="stars-gold text-sm">★★★★★</span>
            <span>4.7 / 5 on Google · 425+ Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

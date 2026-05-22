import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-md bg-[var(--gradient-red)] font-display text-lg font-bold">
            A
          </div>
          <div className="leading-none">
            <div className="font-display text-base font-bold tracking-wider">ABSolute</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Fitness Gym</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+918777080798" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Phone className="h-4 w-4 text-primary" /> +91 87770 80798
          </a>
          <a href="#join" className="btn-hero !px-4 !py-2 text-xs">Join Now</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+918777080798" className="btn-hero mt-3">Call +91 87770 80798</a>
          </div>
        </div>
      )}
    </header>
  );
}

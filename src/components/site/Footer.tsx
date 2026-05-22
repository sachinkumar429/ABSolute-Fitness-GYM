import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface)]">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--gradient-red)] font-display text-xl font-bold">A</div>
            <div className="font-display text-xl font-bold">ABSolute Fitness</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Kasba's premium fitness destination. Modern equipment, certified trainers, real results.
          </p>
          <div className="mt-4 flex gap-3">
            <a aria-label="Instagram" href="#" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:border-primary"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="#" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:border-primary"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/membership" className="hover:text-primary">Membership</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary" /> 205 1A, Bosepukur, Kasba, Kolkata 700107</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> +91 87770 80798</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-primary" /> Mon–Sat: 5 AM – 10 PM<br/>Sunday: Closed</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold">Get Started</h4>
          <p className="text-sm text-muted-foreground">Book a free trial today. Your transformation starts now.</p>
          <a href="https://wa.me/918777080798" target="_blank" rel="noreferrer" className="btn-hero mt-4 w-full">WhatsApp Us</a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ABSolute Fitness Gym, Kasba. All rights reserved.
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Linkedin,Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-xl bg-[var(--gradient-brand)] grid place-items-center text-white font-bold">V</div>
            <span className="font-bold text-lg">VRC <span className="text-gradient">Groups</span></span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building future-ready technology for real-world innovation.
          </p>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-lg glass hover:text-[#34d5ff] hover:border-[#34d5ff]/40 transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-muted-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["/", "Home"], ["/about", "About"], ["/solutions", "Solutions"], ["/process", "Process"], ["/contact", "Contact"]].map(([to, l]) => (
              <li key={to}><Link to={to} className="text-muted-foreground hover:text-[#34d5ff] transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-muted-foreground">Solutions</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>VRC Future Minds</li>
            <li>Software Development</li>
            <li>AI & Machine Learning</li>
            <li>IoT Solutions</li>
            <li>Automation Systems</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-muted-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={16} className="text-[#34d5ff] shrink-0 mt-0.5" /> Vizag,Andhra Pradesh, India</li>
            <li className="flex gap-2"><Phone size={16} className="text-[#34d5ff] shrink-0 mt-0.5" /> +91 9392420643</li>
            <li className="flex gap-2"><Mail size={16} className="text-[#34d5ff] shrink-0 mt-0.5" /> welcome@vrcpvtltd.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-muted-foreground">
          © 2026 VRC Innovations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

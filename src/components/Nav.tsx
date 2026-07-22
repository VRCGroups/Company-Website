import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // Change to "@/assets/logo.png" if your alias works

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-12 w-12 overflow-hidden rounded-xl bg-white shadow-lg flex items-center justify-center">
              <img
                src={logo}
                alt="VRC Logo"
                className="h-full w-full object-contain p-1"
              />
            </div>

            <span className="font-bold text-lg tracking-tight">
              VRC <span className="text-gradient">Groups</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-[#34d5ff] rounded-lg"
                activeOptions={{ exact: true }}
                activeProps={{
                  className:
                    "relative px-4 py-2 text-sm font-semibold text-[#34d5ff] rounded-lg bg-white/5",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/5 hover:text-[#34d5ff] transition-colors"
                activeProps={{
                  className:
                    "block px-4 py-3 text-sm font-semibold rounded-lg bg-white/5 text-[#34d5ff]",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
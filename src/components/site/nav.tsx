import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./primitives";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Artists", href: "#artists" },
  { label: "Clients", href: "#clients" },
  { label: "Community", href: "#community" },
  { label: "Events", href: "#events" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <div className="mx-auto max-w-[1240px] px-5">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
            scrolled ? "glass" : "border border-transparent",
          )}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-[image:var(--gradient-hero)]">
              <span className="h-3 w-3 rounded-full bg-accent" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">ArtSphere</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#cta"
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Login
            </a>
            <a
              href="#cta"
              className="text-[13px] font-semibold text-primary transition-opacity hover:opacity-70"
            >
              Sign Up
            </a>
            <MagneticButton className="px-5 py-2.5 text-[13px]">Become an Artist</MagneticButton>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {open && (
          <div className="glass animate-fade-in mt-2 rounded-3xl p-4 md:hidden">
            <div className="grid grid-cols-2 gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-2.5 text-sm font-medium text-muted-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <MagneticButton className="mt-3 w-full justify-center">Become an Artist</MagneticButton>
          </div>
        )}
      </div>
    </header>
  );
}
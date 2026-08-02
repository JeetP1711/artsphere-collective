import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MagneticButton, Reveal, SectionHeading, TiltCard } from "./primitives";

const plans = [
  {
    name: "Free",
    price: "€0",
    note: "For artists getting started",
    features: ["Portfolio with 12 works", "Community access", "Apply to 5 jobs / month", "Basic analytics"],
  },
  {
    name: "Pro Artist",
    price: "€19",
    note: "For artists building a career",
    featured: true,
    features: [
      "Unlimited portfolio & case studies",
      "Verification badge",
      "AI portfolio review & roadmap",
      "Unlimited applications & bookings",
      "Mentorship sessions",
      "Secure payments with escrow",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "For studios, brands & galleries",
    features: ["Talent search & shortlists", "Team seats & workflows", "Campaign booking tools", "Dedicated partner manager"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Fair pricing for <span className="text-gradient">serious creativity.</span>
            </>
          }
        />
        <div className="mt-16 grid items-center gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <TiltCard
                className={`h-full rounded-[2.25rem] p-9 ${
                  p.featured
                    ? "bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-lift)] lg:scale-[1.06]"
                    : "glass"
                }`}
              >
                {p.featured && (
                  <span className="mb-5 inline-flex rounded-full bg-accent px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-accent-foreground uppercase">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-4 font-display text-5xl font-semibold">
                  {p.price}
                  {p.price.startsWith("€") && p.price !== "€0" && (
                    <span className="text-base font-light opacity-60"> /mo</span>
                  )}
                </p>
                <p className={`mt-2 text-sm font-light ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  {p.note}
                </p>
                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-light">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-accent" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  variant={p.featured ? "gold" : "ghost"}
                  className="mt-9 w-full justify-center"
                >
                  {p.name === "Enterprise" ? "Talk to us" : "Get started"}
                </MagneticButton>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["Who is ArtSphere for?", "Every kind of artist — photographers, musicians, painters, dancers, writers, filmmakers, tattooists and more — plus the brands, galleries, labels and event organizers who hire them."],
  ["How does verification work?", "We review your identity, credited work and client history. Verified artists rank higher in search and can accept bookings with escrow protection."],
  ["Do I pay commission on bookings?", "Free accounts pay a small platform fee per booking. Pro Artist includes reduced fees and instant payouts."],
  ["Can clients post jobs for free?", "Yes. Posting a role or open call is free; Enterprise adds shortlisting, team seats and campaign booking tools."],
  ["What does the AI actually do?", "It reviews your portfolio, suggests skills and pricing, and matches you with clients and events. Every suggestion is advisory — your work is never altered or used to train public models."],
];

export function FAQ() {
  return (
    <section className="surface-gradient py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <Reveal delay={0.1} className="mt-14">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map(([q, a], i) => (
              <AccordionItem
                key={q}
                value={`i-${i}`}
                className="glass rounded-[1.5rem] border-none px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed font-light text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden px-5 py-24">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[3rem] bg-[image:var(--gradient-hero)] px-8 py-24 text-center text-primary-foreground">
        <div className="blob top-[-30%] left-[10%] h-[360px] w-[360px] bg-accent/40" />
        <div className="blob right-[5%] bottom-[-30%] h-[320px] w-[320px] bg-white/25 [animation-delay:-7s]" />
        <Reveal className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl leading-[1.05] font-semibold md:text-6xl">
            The Future of Creative Careers Starts Here.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg font-light text-white/75">
            Whether you&apos;re an artist looking for opportunities or a client searching for
            exceptional talent, ArtSphere is your gateway to a global creative ecosystem.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <MagneticButton variant="gold" className="px-8 py-4 text-base">
              🚀 Join Now
            </MagneticButton>
            <MagneticButton variant="ghost" className="px-8 py-4 text-base">
              🎨 Explore Platform
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const footerCols = [
  { title: "Quick Links", links: ["Home", "Features", "Artists", "Clients", "Pricing"] },
  { title: "Resources", links: ["Blog", "Guides", "AI Insights", "Help Center", "Careers"] },
  { title: "Community", links: ["Events", "Workshops", "Competitions", "Mentorship", "Leaderboard"] },
  { title: "Legal", links: ["Privacy", "Terms", "Contact", "Trust & Safety"] },
];

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 pt-20 pb-10 text-secondary">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[image:var(--gradient-hero)]">
                <span className="h-3 w-3 rounded-full bg-accent" />
              </span>
              <span className="font-display text-lg font-semibold">ArtSphere</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed font-light text-white/55">
              Where creativity meets opportunity — the professional ecosystem for every artist.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-dark mt-8 flex items-center gap-2 rounded-full p-1.5"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 bg-transparent px-4 text-sm text-secondary placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-accent-foreground"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid gap-8 sm:grid-cols-4">
            {footerCols.map((c) => (
              <div key={c.title}>
                <h3 className="text-xs font-semibold tracking-[0.18em] uppercase">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#home"
                        className="text-sm font-light text-white/55 transition-colors hover:text-accent"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} ArtSphere. All rights reserved.</p>
          <div className="flex gap-5">
            {["Instagram", "Behance", "X", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#home" className="text-xs text-white/50 transition-colors hover:text-accent">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
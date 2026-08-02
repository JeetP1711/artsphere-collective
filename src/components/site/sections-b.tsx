import { motion } from "motion/react";
import { Sparkles, Wand2, Route, Target, BadgeDollarSign, CalendarSearch, Trophy, Radio, Swords, Presentation } from "lucide-react";
import { Counter, ParallaxLayer, Reveal, SectionHeading, TiltCard } from "./primitives";
import { FeedCard, FloatingPhone, HomeFeedScreen, PhoneFrame, PhoneShell, ArtTile } from "./phone";

const screens = [
  { label: "Home", tabs: ["Home", "Explore", "Jobs", "You"] },
  { label: "Explore", tabs: ["Explore", "Saved", "Near me", "You"] },
  { label: "Profile", tabs: ["Profile", "Works", "Reviews", "Rates"] },
  { label: "Jobs", tabs: ["Jobs", "Applied", "Invites", "You"] },
  { label: "Bookings", tabs: ["Bookings", "Calendar", "Payouts", "You"] },
  { label: "Analytics", tabs: ["Analytics", "Reach", "Hires", "You"] },
];

export function PlatformPreview() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="blob top-[10%] left-[-10%] -z-10 h-[400px] w-[400px] bg-secondary" />
      <div className="mx-auto max-w-[1240px] px-5">
        <SectionHeading
          eyebrow="Platform preview"
          title={
            <>
              Designed to be lived in, <span className="text-gradient">screen by screen.</span>
            </>
          }
          subtitle="Portfolio, hiring, bookings and insight — a single interface with the calm of a well-lit gallery."
        />
      </div>
      <div className="mt-20 flex gap-10 overflow-x-auto px-8 pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {screens.map((s, i) => (
          <ParallaxLayer key={s.label} strength={i % 2 === 0 ? 40 : -40} className="shrink-0">
            <FloatingPhone delay={i * 0.5}>
              <PhoneFrame label={s.label}>
                {i === 0 ? (
                  <HomeFeedScreen />
                ) : (
                  <PhoneShell title={s.label} tabs={s.tabs}>
                    <FeedCard title={`${s.label} overview`} meta="Updated just now" accent />
                    <div className="grid grid-cols-2 gap-2">
                      <ArtTile tall />
                      <div className="space-y-2">
                        <ArtTile />
                        <ArtTile />
                      </div>
                    </div>
                    <FeedCard title="Sony Music · Cover art" meta="96% AI match · €1,800" />
                    <FeedCard title="Mentorship session" meta="Thursday, 18:00 CET" />
                  </PhoneShell>
                )}
              </PhoneFrame>
            </FloatingPhone>
          </ParallaxLayer>
        ))}
      </div>
    </section>
  );
}

const steps = [
  ["Create Profile", "Claim your name and craft in minutes."],
  ["Upload Portfolio", "Curate works with context, credits and pricing."],
  ["Get Verified", "Earn the badge clients filter for."],
  ["Discover Jobs", "Matched roles, bookings and open calls."],
  ["Collaborate", "Team up with artists across 120 countries."],
  ["Earn & Grow", "Secure payments, analytics and mentorship."],
];

export function HowItWorks() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Six steps from talent to <span className="text-gradient">a working career.</span>
            </>
          }
        />
        <div className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute top-0 left-[27px] h-full w-px bg-border md:left-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute top-0 left-[27px] h-full w-px origin-top bg-[image:var(--gradient-hero)] md:left-1/2"
          />
          <div className="space-y-10">
            {steps.map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div
                  className={`flex items-start gap-6 md:w-1/2 ${
                    i % 2 === 0 ? "md:ml-0 md:flex-row-reverse md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[image:var(--gradient-hero)] font-display text-lg font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div className="glass flex-1 rounded-[1.75rem] p-6">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm font-light text-muted-foreground">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ai = [
  { icon: Sparkles, title: "AI Portfolio Analysis", body: "Scores clarity, cohesion and commercial readiness." },
  { icon: Wand2, title: "AI Skill Recommendations", body: "Learn the exact skills your next role requires." },
  { icon: Route, title: "AI Career Roadmap", body: "A 12-month path built from real hiring data." },
  { icon: Target, title: "AI Client Matching", body: "Brands surfaced by style fit, not keywords." },
  { icon: BadgeDollarSign, title: "AI Pricing Suggestions", body: "Rate guidance benchmarked by city and craft." },
  { icon: CalendarSearch, title: "AI Event Recommendations", body: "The rooms worth being in this month." },
];

export function AIFeatures() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 text-secondary md:py-36">
      <div className="blob top-[-15%] right-[-10%] h-[440px] w-[440px] bg-primary/40" />
      <div className="blob bottom-[-20%] left-[-5%] h-[360px] w-[360px] bg-accent/20 [animation-delay:-8s]" />
      <div className="relative mx-auto max-w-[1240px] px-5">
        <SectionHeading
          invert
          eyebrow="Intelligence"
          title={
            <>
              Powered by <span className="text-gradient">Intelligent Creativity</span>
            </>
          }
          subtitle="Machine insight in service of human craft — quiet, precise, always optional."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ai.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.08}>
              <TiltCard className="glass-dark group h-full rounded-[2rem] p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition-colors duration-500 group-hover:bg-accent">
                  <a.icon className="h-5 w-5 transition-colors group-hover:text-accent-foreground" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm font-light text-white/60">{a.body}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const community = [
  { icon: Radio, title: "Live discussions", body: "Nightly rooms on craft, rates and process." },
  { icon: Presentation, title: "Workshops & masterclasses", body: "Taught by artists you already admire." },
  { icon: Swords, title: "Competitions & challenges", body: "Weekly briefs with real commissions attached." },
  { icon: Trophy, title: "Leaderboard", body: "Recognition earned by contribution, not vanity." },
];

export function Community() {
  return (
    <section id="community" className="py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="Community & events"
            title={
              <>
                A scene, not a <span className="text-gradient">feed.</span>
              </>
            }
            subtitle="Creative groups, competitions, workshops and masterclasses — the parts of an art school that actually mattered."
          />
          <div id="events" className="grid gap-5 sm:grid-cols-2">
            {community.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <TiltCard className="glass hover-lift h-full rounded-[2rem] p-7">
                  <c.icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
                  <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm font-light text-muted-foreground">{c.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "I stopped chasing algorithms. Three verified commissions in my first month, and every brief matched what I actually love making.",
    name: "Maya Okonkwo",
    role: "Illustrator · Lagos",
  },
  {
    quote:
      "We cast an entire campaign from ArtSphere in four days. Verified portfolios and clear rates removed all the guesswork.",
    name: "Léa Fontaine",
    role: "Creative Director · Paris",
  },
  {
    quote:
      "The AI roadmap told me to build a motion reel. Six weeks later a label booked me for a full visual identity.",
    name: "Diego Ramos",
    role: "Digital Artist · Mexico City",
  },
];

export function Testimonials() {
  return (
    <section className="surface-gradient py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5">
        <SectionHeading eyebrow="Stories" title="Careers, quietly changed." />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <TiltCard className="glass hover-lift h-full rounded-[2rem] p-8">
                <span className="font-display text-5xl leading-none text-primary/25">&ldquo;</span>
                <p className="mt-3 text-[15px] leading-relaxed font-light text-foreground/80">
                  {t.quote}
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-[image:var(--gradient-hero)]" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { to: 100000, suffix: "+", label: "Artists" },
  { to: 50000, suffix: "+", label: "Projects" },
  { to: 15000, suffix: "+", label: "Clients" },
  { to: 120, suffix: "+", label: "Countries" },
  { to: 95, suffix: "%", label: "Hiring success" },
];

export function Stats() {
  return (
    <section className="border-y border-border/60 py-20">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07} className="text-center">
            <p className="font-display text-4xl font-semibold text-gradient md:text-5xl">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
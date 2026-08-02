import { motion } from "motion/react";
import {
  Brain,
  BadgeCheck,
  Briefcase,
  CalendarHeart,
  Users,
  MessagesSquare,
  GraduationCap,
  ShieldCheck,
  CalendarClock,
  BarChart3,
  Palette,
  TrendingUp,
  Handshake,
  Check,
  X,
} from "lucide-react";
import { Reveal, SectionHeading, TiltCard } from "./primitives";
import photography from "@/assets/cat-photography.jpg";
import music from "@/assets/cat-music.jpg";
import painting from "@/assets/cat-painting.jpg";
import dance from "@/assets/cat-dance.jpg";
import fashion from "@/assets/cat-fashion.jpg";

const partners = [
  "Creative Agencies",
  "Studios",
  "Art Galleries",
  "Music Labels",
  "Global Brands",
  "Event Companies",
  "Universities",
];

export function TrustedBy() {
  return (
    <section id="clients" className="border-y border-border/60 bg-card/50 py-10">
      <p className="mb-7 text-center text-[11px] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
        Trusted by creative organizations worldwide
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-14">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="font-display text-xl font-semibold whitespace-nowrap text-muted-foreground/50 transition-colors hover:text-primary"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const why = [
  {
    icon: Palette,
    title: "Professional Portfolio",
    body: "Build a verified portfolio that showcases your creativity beyond likes and followers.",
  },
  {
    icon: Briefcase,
    title: "Direct Hiring",
    body: "Apply for jobs, receive bookings, and connect directly with brands and clients.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    body: "Meet artists worldwide and work together on exciting creative projects.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    body: "Learn through mentorship, workshops, AI insights, and networking opportunities.",
  },
];

export function WhyArtSphere() {
  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-36">
      <div className="blob top-1/4 right-[-12%] -z-10 h-96 w-96 bg-secondary" />
      <div className="mx-auto max-w-[1240px] px-5">
        <SectionHeading
          eyebrow="Why ArtSphere"
          title={
            <>
              More Than Social Media.{" "}
              <span className="text-gradient">It&apos;s Your Creative Career Platform.</span>
            </>
          }
          subtitle="Everything a working artist needs — from first portfolio piece to signed contract — designed with the care of a gallery and the intelligence of a modern studio."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {why.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <TiltCard className="group glass h-full rounded-[2rem] p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-hero)] transition-transform duration-500 group-hover:scale-110">
                  <c.icon className="h-6 w-6 text-primary-foreground" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                  {c.body}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const oldWorld = [
  ["Instagram", "Likes, not clients"],
  ["Behance", "Views, no hiring"],
  ["LinkedIn", "Not built for art"],
  ["Freelance marketplaces", "Race to the bottom"],
];

const newWorld = [
  "Professional Portfolio",
  "Verified Identity",
  "AI Recommendations",
  "Direct Hiring",
  "Bookings",
  "Secure Payments",
  "Community",
  "Mentorship",
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 text-secondary md:py-36">
      <div className="blob top-[-20%] left-[-10%] h-[420px] w-[420px] bg-primary/40" />
      <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-5 lg:grid-cols-2">
        <Reveal>
          <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase">
            The old way
          </span>
          <h2 className="text-4xl leading-[1.05] font-semibold md:text-5xl">
            Talent everywhere.
            <br />
            <span className="text-white/40">Opportunity nowhere.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg font-light text-white/60">
            Artists post work into feeds designed for attention, not careers. The result: low
            visibility, no clients, missed bookings, zero collaborations.
          </p>
          <div className="mt-10 space-y-3">
            {oldWorld.map(([name, note], i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="glass-dark flex items-center justify-between rounded-2xl px-5 py-4"
              >
                <span className="font-medium">{name}</span>
                <span className="flex items-center gap-2 text-sm text-white/50">
                  {note} <X className="h-4 w-4 text-destructive" />
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-[2.5rem] bg-[image:var(--gradient-hero)] p-1">
            <div className="rounded-[2.3rem] bg-charcoal/85 p-8 backdrop-blur-xl">
              <span className="inline-flex rounded-full bg-accent px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-accent-foreground uppercase">
                ArtSphere
              </span>
              <h3 className="mt-6 text-3xl font-semibold">One ecosystem. Every opportunity.</h3>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {newWorld.map((n, i) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.6 }}
                    className="glass-dark flex items-center gap-2 rounded-xl px-3 py-3 text-[13px] font-medium"
                  >
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {n}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const bento = [
  { icon: Brain, title: "AI Portfolio Review", body: "Instant, expert-level critique on composition, consistency and market fit.", span: "lg:col-span-2 lg:row-span-2", feature: true },
  { icon: BadgeCheck, title: "Artist Verification", body: "A verified badge that proves you're real, credited and hireable." },
  { icon: Briefcase, title: "Smart Job Matching", body: "Roles ranked by your medium, style and rate." },
  { icon: CalendarHeart, title: "Event Discovery", body: "Exhibitions, gigs, festivals and open calls near you." },
  { icon: Users, title: "Collaboration Hub", body: "Find co-creators by skill, city and schedule.", span: "lg:col-span-2" },
  { icon: MessagesSquare, title: "Creative Community", body: "Critique circles, groups and live rooms." },
  { icon: GraduationCap, title: "Mentorship", body: "1:1 guidance from working professionals." },
  { icon: ShieldCheck, title: "Secure Payments", body: "Escrow, milestones and instant payouts." },
  { icon: CalendarClock, title: "Booking Calendar", body: "Availability, deposits and contracts in one flow." },
  { icon: BarChart3, title: "Analytics Dashboard", body: "See who viewed, saved and hired you." },
];

export function BentoFeatures() {
  return (
    <section id="features" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5">
        <SectionHeading
          eyebrow="Feature showcase"
          title={
            <>
              A complete studio, <span className="text-gradient">beautifully assembled.</span>
            </>
          }
        />
        <div className="mt-16 grid auto-rows-[minmax(170px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {bento.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 0.06} className={b.span ?? ""}>
              <TiltCard
                className={`group relative h-full overflow-hidden rounded-[2rem] p-7 ${
                  b.feature
                    ? "bg-[image:var(--gradient-hero)] text-primary-foreground"
                    : "glass"
                }`}
              >
                {b.feature && (
                  <div className="animate-float absolute -right-10 -bottom-14 h-56 w-56 rounded-full bg-accent/30 blur-2xl" />
                )}
                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${
                    b.feature ? "bg-white/20" : "bg-secondary"
                  }`}
                >
                  <b.icon
                    className={`h-5 w-5 ${b.feature ? "text-primary-foreground" : "text-primary"}`}
                    strokeWidth={1.6}
                  />
                </span>
                <h3
                  className={`relative mt-5 font-semibold ${b.feature ? "text-3xl" : "text-lg"}`}
                >
                  {b.title}
                </h3>
                <p
                  className={`relative mt-2 text-sm leading-relaxed font-light ${
                    b.feature ? "max-w-sm text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {b.body}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const categories = [
  { name: "Photography", img: photography },
  { name: "Music", img: music },
  { name: "Painting", img: painting },
  { name: "Dance", img: dance },
  { name: "Fashion", img: fashion },
  { name: "Digital Art", img: painting },
  { name: "Animation", img: dance },
  { name: "Writing", img: photography },
  { name: "Acting", img: fashion },
  { name: "Filmmaking", img: music },
  { name: "Tattoo", img: painting },
  { name: "Crafts", img: photography },
  { name: "Illustration", img: fashion },
];

export function Categories() {
  return (
    <section id="artists" className="surface-gradient py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5">
        <SectionHeading
          align="left"
          eyebrow="Artist categories"
          title={
            <>
              Every discipline. <span className="text-gradient">One professional home.</span>
            </>
          }
        />
      </div>
      <div className="mt-14 flex gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c, i) => (
          <Reveal key={c.name} delay={Math.min(i, 6) * 0.05}>
            <div className="group relative h-[420px] w-[290px] shrink-0 overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
              <img
                src={c.img}
                alt={`${c.name} artist on ArtSphere`}
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <h3 className="text-2xl font-semibold text-secondary">{c.name}</h3>
                <p className="mt-1 translate-y-2 text-xs text-secondary/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore {c.name.toLowerCase()} portfolios →
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
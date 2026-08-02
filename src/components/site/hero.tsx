import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import heroMesh from "@/assets/hero-mesh.jpg";
import { MagneticButton, Reveal } from "./primitives";
import { FloatingPhone, HomeFeedScreen, PhoneFrame } from "./phone";

const words = ["One Platform.", "Infinite Creativity.", "Endless Opportunities."];

export function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const meshX = useTransform(sx, [0, 1], [-30, 30]);
  const meshY = useTransform(sy, [0, 1], [-20, 20]);
  const phoneRotate = useTransform(sx, [0, 1], [8, -8]);
  const phoneY = useTransform(sy, [0, 1], [12, -12]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <motion.img
        src={heroMesh}
        alt="Emerald and mint abstract paint mesh"
        width={1920}
        height={1200}
        style={{ x: meshX, y: meshY }}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full scale-110 object-cover opacity-30"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="blob top-[-10%] left-[-10%] -z-10 h-[420px] w-[420px] bg-primary/25" />
      <div className="blob right-[-8%] bottom-[-15%] -z-10 h-[380px] w-[380px] bg-accent/25 [animation-delay:-6s]" />

      <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              The creative career ecosystem
            </span>
          </Reveal>

          <h1 className="mt-7 text-5xl leading-[0.98] font-semibold md:text-7xl">
            {words.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.15 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${i === 2 ? "text-gradient" : ""}`}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <Reveal delay={0.55}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed font-light text-muted-foreground">
              ArtSphere connects artists, creators, brands, event organizers, and clients into one
              intelligent ecosystem where creativity becomes a sustainable career.
            </p>
          </Reveal>

          <Reveal delay={0.7} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton className="px-8 py-4 text-base">🚀 Join as an Artist</MagneticButton>
            <MagneticButton variant="ghost" className="px-8 py-4 text-base">
              🎨 Explore the Community
            </MagneticButton>
          </Reveal>

          <Reveal delay={0.85} className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-background bg-[image:var(--gradient-hero)]"
                  style={{ opacity: 1 - i * 0.15 }}
                />
              ))}
            </div>
            <p className="text-sm font-light text-muted-foreground">
              <span className="font-semibold text-foreground">100,000+</span> artists building
              careers in 120 countries
            </p>
          </Reveal>
        </div>

        <motion.div
          style={{ rotateY: phoneRotate, y: phoneY, transformPerspective: 1200 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-8 rounded-[3rem] bg-[image:var(--gradient-hero)] opacity-25 blur-3xl" />
          <FloatingPhone>
            <PhoneFrame>
              <HomeFeedScreen />
            </PhoneFrame>
          </FloatingPhone>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="glass absolute top-8 -left-2 rounded-2xl px-4 py-3 md:-left-8"
          >
            <p className="text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Booking confirmed
            </p>
            <p className="text-sm font-semibold text-primary">€2,400 · Mural, Berlin</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="glass absolute -right-2 bottom-12 rounded-2xl px-4 py-3 md:-right-6"
          >
            <p className="text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              AI match
            </p>
            <p className="text-sm font-semibold text-primary">96% fit · Sony Music</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
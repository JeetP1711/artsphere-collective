import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative w-[260px] overflow-hidden rounded-[2.6rem] border-[10px] border-charcoal bg-charcoal shadow-[var(--shadow-lift)]">
        <div className="absolute top-2.5 left-1/2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-charcoal" />
        <div className="surface-gradient relative h-[520px] overflow-hidden rounded-[2rem]">
          <div className="blob top-[-20%] right-[-25%] h-56 w-56 bg-primary-glow/40" />
          <div className="relative z-10 flex h-full flex-col px-3.5 pt-9 pb-3">{children}</div>
        </div>
      </div>
      {label && (
        <span className="mt-4 block text-center text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          {label}
        </span>
      )}
    </div>
  );
}

function Bar({ w = "w-full", h = "h-2" }: { w?: string; h?: string }) {
  return <span className={cn("block rounded-full bg-primary/15", w, h)} />;
}

export function PhoneShell({ title, tabs, children }: { title: string; tabs: string[]; children: ReactNode }) {
  return (
    <>
      <div className="glass flex items-center justify-between rounded-2xl px-3 py-2">
        <span className="text-[11px] font-semibold text-primary">{title}</span>
        <span className="h-5 w-5 rounded-full bg-[image:var(--gradient-gold)]" />
      </div>
      <div className="mt-3 flex-1 space-y-2.5 overflow-hidden">{children}</div>
      <div className="glass mt-3 flex items-center justify-between rounded-2xl px-3 py-2">
        {tabs.map((t, i) => (
          <span
            key={t}
            className={cn(
              "text-[9px] font-medium",
              i === 0 ? "text-primary" : "text-muted-foreground/70",
            )}
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

export function FeedCard({
  title,
  meta,
  accent = false,
}: {
  title: string;
  meta: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-3",
        accent ? "bg-primary text-primary-foreground" : "glass",
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "h-7 w-7 rounded-full",
            accent ? "bg-white/25" : "bg-[image:var(--gradient-hero)]",
          )}
        />
        <div className="flex-1">
          <p className="text-[11px] leading-tight font-semibold">{title}</p>
          <p className={cn("text-[9px]", accent ? "text-white/70" : "text-muted-foreground")}>{meta}</p>
        </div>
      </div>
    </div>
  );
}

export function ArtTile({ tall = false }: { tall?: boolean }) {
  return (
    <span
      className={cn(
        "block rounded-xl bg-[image:var(--gradient-hero)] opacity-70",
        tall ? "h-24" : "h-16",
      )}
    />
  );
}

export function HomeFeedScreen() {
  return (
    <PhoneShell title="ArtSphere" tabs={["Home", "Explore", "Jobs", "Profile"]}>
      <FeedCard title="Featured Artist" meta="Maya Okonkwo · Illustrator" accent />
      <div className="grid grid-cols-2 gap-2">
        <ArtTile tall />
        <div className="space-y-2">
          <ArtTile />
          <ArtTile />
        </div>
      </div>
      <FeedCard title="Live Event · Tonight" meta="Sound & Colour, Lisbon" />
      <div className="glass space-y-2 rounded-2xl p-3">
        <p className="text-[10px] font-semibold text-primary">New booking request</p>
        <Bar w="w-4/5" />
        <Bar w="w-2/3" />
      </div>
    </PhoneShell>
  );
}

export function FloatingPhone({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
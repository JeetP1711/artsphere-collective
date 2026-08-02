import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow, ScrollProgress } from "@/components/site/primitives";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import {
  BentoFeatures,
  Categories,
  ProblemSection,
  TrustedBy,
  WhyArtSphere,
} from "@/components/site/sections-a";
import {
  AIFeatures,
  Community,
  HowItWorks,
  PlatformPreview,
  Stats,
  Testimonials,
} from "@/components/site/sections-b";
import { FAQ, FinalCTA, Footer, Pricing } from "@/components/site/sections-c";

const title = "ArtSphere — Where Creativity Meets Opportunity";
const description =
  "ArtSphere is the global platform where artists build careers: verified portfolios, direct hiring, bookings, collaboration, mentorship and AI-powered growth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <Hero />
      <TrustedBy />
      <WhyArtSphere />
      <ProblemSection />
      <BentoFeatures />
      <Categories />
      <PlatformPreview />
      <HowItWorks />
      <AIFeatures />
      <Community />
      <Testimonials />
      <Stats />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

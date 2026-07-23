import { AboutBackground } from "./aboutBackground";
import { AboutHero } from "./aboutHero";
import { AboutStory } from "./aboutStory";
import { AboutMissionVision } from "./aboutMissionVision";
import { AboutValues } from "./aboutValues";
import { AboutWhyChoose } from "./aboutWhyChoose";
import { AboutStats } from "./aboutStats";
import { AboutCTA } from "./aboutCTA";

export function About() {
  return (
    <main className="relative overflow-hidden bg-[#0E0E0E]">

      <AboutBackground />

      <AboutHero />

      <AboutStory />

      <AboutMissionVision />

      <AboutValues />

      <AboutWhyChoose />

      <AboutStats />

      <AboutCTA />

    </main>
  );
}
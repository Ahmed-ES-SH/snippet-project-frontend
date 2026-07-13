"use client";

import { HeroContent } from "./HeroContent";
import { CodePreview } from "./CodePreview";
import { ActivityFeed } from "./ActivityFeed";
import { BackgroundGrid } from "./BackgroundGrid";

export function Hero() {
  return (
    <section className="relative flex max-h-[100vh] min-h-[600px] flex-col overflow-hidden bg-[#181210] text-[#ECE0DC]">
      {/* Background */}
      <BackgroundGrid />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#FF5C00]/10 blur-[140px]" />

      {/* Top Gradient Fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1400px] 2xl:items-center items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Side */}
          <div>
            <HeroContent />
          </div>

          {/* Right Side */}
          <div className="relative hidden justify-center lg:flex lg:justify-end">
            <CodePreview />

            <div className="absolute -right-10 top-12 hidden xl:block">
              <ActivityFeed />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#120D0B] to-transparent" />
    </section>
  );
}

export default Hero;

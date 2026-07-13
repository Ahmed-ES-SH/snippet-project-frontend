"use client";

import { HiArrowRight, HiBolt, HiCommandLine } from "react-icons/hi2";

import { SearchBar } from "./SearchBar";
import { StatsBar } from "./StatsBar";

export function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Eyebrow */}
      <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-[#52443E] bg-[#201A18]/80 px-3 py-1.5 sm:mb-4 sm:px-4 sm:py-2">
        <HiBolt className="text-[#FF5C00]" />

        <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#D7C2BB]">
          AI-Powered Snippet Management
        </span>
      </div>

      {/* Heading */}
      <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#ECE0DC] sm:text-5xl lg:text-6xl xl:text-7xl">
        Store.
        <br />
        Search.
        <br />
        <span className="text-[#FF5C00]">Ship Faster.</span>
      </h1>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#C8C6C5] sm:mt-5 sm:text-lg sm:leading-8">
        Organize code snippets, commands, API requests and AI prompts inside one
        developer workspace built for speed—not clutter.
      </p>

      {/* Search */}
      <div className="mt-4 sm:mt-5">
        <SearchBar />
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:gap-4">
        <button className="group inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#FF5C00] px-6 text-sm font-semibold text-[#360F02] transition-all duration-300 hover:brightness-110 active:scale-95 sm:h-12 sm:px-8 sm:text-base">
          Start Building
          <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <button className="inline-flex h-11 items-center justify-center gap-3 rounded-lg border border-[#52443E] bg-[#1A1B22] px-6 text-sm font-semibold text-[#ECE0DC] transition-colors duration-300 hover:border-[#AB897D] hover:bg-[#2A2422] sm:h-12 sm:px-8 sm:text-base">
          <HiCommandLine />
          Live Demo
        </button>
      </div>

      {/* Small Trust Row */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#8A7A73] sm:mt-5 sm:gap-6 sm:text-sm">
        <span>✓ No setup required</span>

        <span>✓ AI Search</span>

        <span>✓ End-to-End Encrypted</span>
      </div>

      {/* Stats */}
      <div className="mt-5 sm:mt-6 hidden 2xl:block">
        <StatsBar />
      </div>
    </div>
  );
}

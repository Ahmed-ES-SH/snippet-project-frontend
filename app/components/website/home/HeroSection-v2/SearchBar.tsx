"use client";

import { HiMagnifyingGlass, HiSparkles, HiCommandLine } from "react-icons/hi2";

export function SearchBar() {
  return (
    <div className="group relative">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[#FF5C00]/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-3 rounded-xl border border-[#52443E] bg-[#1A1B22]/90 p-3 backdrop-blur-xl sm:gap-4 sm:p-4">
        {/* Search */}
        <div className="flex h-12 items-center gap-3 rounded-lg border border-[#52443E] bg-[#120D0B] px-4 transition-all duration-300 group-hover:border-[#AB897D] sm:h-14 sm:gap-4 sm:px-5">
          <HiMagnifyingGlass className="text-xl text-[#8A7A73]" />

          <input
            type="text"
            placeholder="Search snippets, prompts, commands..."
            className="flex-1 bg-transparent text-base text-[#ECE0DC] placeholder:text-[#8A7A73] focus:outline-none"
          />

          <div className="hidden items-center gap-2 rounded-md border border-[#52443E] bg-[#201A18] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D7C2BB] md:flex">
            <HiCommandLine />K
          </div>
        </div>

        {/* Quick Commands */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["React Hooks", "Next.js", "Docker", "Tailwind", "NestJS"].map(
            (item) => (
              <button
                key={item}
                className="rounded-md border border-[#52443E] bg-[#201A18] px-2.5 py-1.5 text-xs text-[#D7C2BB] transition-all duration-300 hover:border-[#FF5C00]/50 hover:bg-[#2A2422] hover:text-[#FF5C00] sm:px-3 sm:py-2 sm:text-sm"
              >
                {item}
              </button>
            ),
          )}
        </div>

        {/* AI Suggestion */}
        <div className="flex items-center gap-3 rounded-lg border border-[#52443E] bg-[#201A18] px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FF5C00]/15 text-[#FF5C00]">
            <HiSparkles className="text-lg" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium text-[#ECE0DC]">AI Suggestion</p>

            <p className="text-xs text-[#8A7A73]">
              Found 24 related snippets in under 0.08 seconds.
            </p>
          </div>

          <button className="rounded-md bg-[#FF5C00] px-4 py-2 text-sm font-semibold text-[#360F02] transition hover:brightness-110">
            Open
          </button>
        </div>
      </div>
    </div>
  );
}

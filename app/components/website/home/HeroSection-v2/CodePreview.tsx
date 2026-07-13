"use client";

import { motion } from "framer-motion";
import {
  HiCheckCircle,
  HiCloudArrowUp,
  HiCodeBracket,
  HiCpuChip,
} from "react-icons/hi2";

const codeLines = [
  {
    color: "text-[#8FDBA6]",
    code: "const",
    rest: " snippets = await ai.search({",
  },
  {
    color: "text-[#D2E4FF]",
    code: "  query:",
    rest: ' "next auth"',
  },
  {
    color: "text-[#D2E4FF]",
    code: "  language:",
    rest: ' "typescript"',
  },
  {
    color: "text-[#D2E4FF]",
    code: "  limit:",
    rest: " 12",
  },
  {
    color: "text-[#ECE0DC]",
    code: "});",
    rest: "",
  },
  {
    color: "text-[#8FDBA6]",
    code: "export",
    rest: " default snippets;",
  },
];

export function CodePreview() {
  return (
    <div className="relative w-full max-w-[640px]">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-[#FF5C00]/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-[#52443E] bg-[#1A1B22] shadow-[0_4px_24px_rgba(0,0,0,.25)]">
        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between border-b border-[#52443E] bg-[#201A18] px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />

            <span className="ml-3 text-sm text-[#C8C6C5]">search.ts</span>
          </div>

          <div className="flex items-center gap-2 rounded-md border border-[#52443E] bg-[#181210] px-3 py-1 text-xs text-[#D7C2BB]">
            <HiCpuChip />
            AI MODE
          </div>
        </div>

        {/* ================= CODE ================= */}

        <div className="bg-[#0C0E14] px-4 py-4 font-mono text-[12px] leading-6 sm:px-6 sm:py-5 sm:text-[13px] sm:leading-7 md:text-[14px] md:leading-8">
          {codeLines.map((line, index) => (
            <div key={index} className="flex">
              <span className="mr-6 w-6 select-none text-right text-[#5B4137]">
                {index + 1}
              </span>

              <span className={line.color}>{line.code}</span>

              <span className="ml-2 text-[#ECE0DC]">{line.rest}</span>
            </div>
          ))}

          {/* Cursor */}

          <motion.div
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="ml-14 mt-2 h-5 w-[2px] bg-[#FF5C00]"
          />
        </div>

        {/* ================= STATUS ================= */}

        <div className="border-t border-[#52443E] bg-[#181210] px-3 py-3 sm:px-5 sm:py-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            <div className="rounded-lg border border-[#52443E] bg-[#201A18] p-2.5 sm:p-3 md:p-4">
              <div className="flex items-center gap-1.5 text-[#8FDBA6] sm:gap-2">
                <HiCheckCircle />
                <span className="text-[10px] uppercase tracking-wider sm:text-xs">Status</span>
              </div>

              <p className="mt-1.5 text-sm font-semibold text-[#ECE0DC] sm:mt-2 sm:text-base md:text-lg">
                Synced
              </p>
            </div>

            <div className="rounded-lg border border-[#52443E] bg-[#201A18] p-2.5 sm:p-3 md:p-4">
              <div className="flex items-center gap-1.5 text-[#D2E4FF] sm:gap-2">
                <HiCloudArrowUp />
                <span className="text-[10px] uppercase tracking-wider sm:text-xs">Cloud</span>
              </div>

              <p className="mt-1.5 text-sm font-semibold text-[#ECE0DC] sm:mt-2 sm:text-base md:text-lg">
                1.2k Files
              </p>
            </div>

            <div className="rounded-lg border border-[#52443E] bg-[#201A18] p-2.5 sm:p-3 md:p-4">
              <div className="flex items-center gap-1.5 text-[#FF5C00] sm:gap-2">
                <HiCodeBracket />
                <span className="text-[10px] uppercase tracking-wider sm:text-xs">
                  Indexed
                </span>
              </div>

              <p className="mt-1.5 text-sm font-semibold text-[#ECE0DC] sm:mt-2 sm:text-base md:text-lg">98%</p>
            </div>
          </div>
        </div>

        {/* Live Indicator */}

        <motion.div
          animate={{
            opacity: [1, 0.4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute right-5 top-16 flex items-center gap-2 rounded-full border border-[#52443E] bg-[#181210] px-3 py-1 text-xs"
        >
          <span className="h-2 w-2 rounded-full bg-[#FF5C00]" />

          <span className="text-[#D7C2BB]">LIVE INDEXING</span>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

const verticalLines = Array.from({ length: 14 });
const horizontalLines = Array.from({ length: 10 });

export function BackgroundGrid() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#181210]" />

      {/* Radial Highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_28%,rgba(255,92,0,.08),transparent_45%)]" />

      {/* Top Fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#120D0B] to-transparent" />

      {/* Vertical Grid */}
      <div className="pointer-events-none absolute inset-0 flex justify-between px-10">
        {verticalLines.map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="h-full w-px bg-[#52443E]"
          />
        ))}
      </div>

      {/* Horizontal Grid */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-10">
        {horizontalLines.map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 7 + index,
              repeat: Infinity,
            }}
            className="h-px w-full bg-[#3A3331]"
          />
        ))}
      </div>

      {/* Animated Orange Beam */}
      <motion.div
        animate={{
          y: [-150, 900],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-[72%] top-0 h-56 w-px bg-gradient-to-b from-transparent via-[#FF5C00] to-transparent opacity-40"
      />

      {/* Second Beam */}
      <motion.div
        animate={{
          y: [700, -200],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-[18%] top-0 h-44 w-px bg-gradient-to-b from-transparent via-[#FF5C00]/70 to-transparent opacity-20"
      />

      {/* Floating Nodes */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[12%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#FF5C00]"
      />

      <motion.div
        animate={{
          y: [8, -8, 8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-[16%] top-[32%] h-2 rounded-full bg-[#8FDBA6]"
      />

      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-[20%] left-[28%] h-2 w-2 rounded-full bg-[#D2E4FF]"
      />

      {/* Large Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#FF5C00]/5 blur-[180px]" />

      {/* Corner Decorations */}
      <div className="pointer-events-none absolute left-10 top-10 h-20 w-20 border-l border-t border-[#52443E]" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-20 w-20 border-b border-r border-[#52443E]" />

      {/* Noise Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
        }}
      />
    </>
  );
}

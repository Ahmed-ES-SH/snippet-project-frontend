"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { ReactNode } from "react";

interface HeroParallaxProps {
  children: ReactNode;
}

export default function HeroParallax({ children }: HeroParallaxProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <motion.section ref={ref} style={{ y, opacity }}>
      {children}
    </motion.section>
  );
}

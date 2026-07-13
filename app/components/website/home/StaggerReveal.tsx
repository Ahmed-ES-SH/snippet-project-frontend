"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

const container = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export { item as staggerItem };

export default function StaggerReveal({
  children,
  className,
  stagger = 0.1,
}: StaggerRevealProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "@/app/hooks/global/useTranslation";
import styles from "./not-found.module.css";

export default function GlitchTitle() {
  const title = useTranslation("NotFound.title");
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleMouseMove(e: MouseEvent) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
      el!.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <h1
      ref={ref}
      data-text={title}
      className={`font-display-lg text-display-lg leading-none mb-sm ${styles.glitchText}`}
    >
      {title}
    </h1>
  );
}

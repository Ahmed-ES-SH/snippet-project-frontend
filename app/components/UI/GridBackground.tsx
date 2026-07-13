"use client";

export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="neon-circle neon-circle--1" />
      <div className="neon-circle neon-circle--2" />
    </div>
  );
}

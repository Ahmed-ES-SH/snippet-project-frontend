"use client";

export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none  fixed inset-0  overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage:
            "linear-gradient(rgba(91,65,55,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(91,65,55,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Neon circle top-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "5%",
          left: "-8%",
          background: "radial-gradient(circle, #ffb59a 0%, transparent 70%)",
          opacity: 0.15,
          filter: "blur(80px)",
        }}
      />

      {/* Neon circle bottom-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "5%",
          right: "-8%",
          background: "radial-gradient(circle, #ffdbce 0%, transparent 70%)",
          opacity: 0.1,
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

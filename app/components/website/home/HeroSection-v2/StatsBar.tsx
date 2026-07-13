"use client";

const stats = [
  {
    value: "50K+",
    label: "Snippets Indexed",
  },
  {
    value: "0.08s",
    label: "Average Search",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "12+",
    label: "Languages",
  },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-xl border border-[#52443E] bg-[#1A1B22] p-3 transition-all duration-300 hover:border-[#AB897D] sm:p-4 lg:p-5"
        >
          <h3 className="text-xl font-bold tracking-tight text-[#ECE0DC] transition-colors duration-300 group-hover:text-[#FF5C00] sm:text-2xl lg:text-3xl">
            {stat.value}
          </h3>

          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8A7A73] sm:mt-2 sm:text-xs">
            {stat.label}
          </p>

          <div className="mt-3 h-px w-full bg-[#52443E] sm:mt-4 lg:mt-5" />

          <div className="mt-1 h-[2px] w-[35%] rounded-full bg-[#FF5C00]" />
        </div>
      ))}
    </div>
  );
}

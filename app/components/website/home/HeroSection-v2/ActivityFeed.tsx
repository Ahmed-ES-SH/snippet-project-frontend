"use client";

import { motion } from "framer-motion";
import { HiSparkles, HiClock, HiArrowTrendingUp } from "react-icons/hi2";

const activities = [
  {
    icon: HiSparkles,
    title: "AI categorized snippet",
    time: "2 sec ago",
    color: "text-[#FF5C00]",
  },
  {
    icon: HiArrowTrendingUp,
    title: "12 snippets indexed",
    time: "8 sec ago",
    color: "text-[#8FDBA6]",
  },
  {
    icon: HiClock,
    title: "React Hooks opened",
    time: "35 sec ago",
    color: "text-[#D2E4FF]",
  },
  {
    icon: HiSparkles,
    title: "Prompt optimized",
    time: "1 min ago",
    color: "text-[#FFC073]",
  },
];

export function ActivityFeed() {
  return (
    <aside className="w-[320px]">
      <div className="overflow-hidden rounded-2xl border border-[#52443E] bg-[#1A1B22]">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#52443E] bg-[#201A18] px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A7A73]">
              Live Activity
            </p>

            <h3 className="mt-1 font-semibold text-[#ECE0DC]">
              Workspace Feed
            </h3>
          </div>

          <motion.div
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
            }}
            className="flex items-center gap-2"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5C00]" />

            <span className="text-xs uppercase tracking-wider text-[#D7C2BB]">
              Live
            </span>
          </motion.div>
        </div>

        {/* Activity List */}

        <div className="space-y-3 p-4">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="group rounded-xl border border-[#52443E] bg-[#201A18] p-4 transition-colors duration-300 hover:border-[#AB897D]"
              >
                <div className="flex gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg bg-[#181210] ${activity.color}`}
                  >
                    <Icon className="text-lg" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#ECE0DC]">
                      {activity.title}
                    </p>

                    <p className="mt-1 text-xs text-[#8A7A73]">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}

        <div className="border-t border-[#52443E] bg-[#181210] px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8A7A73]">
              Today
            </span>

            <span className="text-sm font-semibold text-[#FF5C00]">
              128 Events
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#201A18]">
            <div className="h-full w-[82%] rounded-full bg-[#FF5C00]" />
          </div>

          <div className="mt-2 flex justify-between text-xs text-[#8A7A73]">
            <span>Processing</span>

            <span>82%</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

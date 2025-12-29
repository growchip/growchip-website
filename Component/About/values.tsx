"use client";

import { useState } from "react";
import {
  Brain,
  CheckCircle,
  Lightbulb,
  Users,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    id: 1,
    title: "Entrepreneurial Mindset",
    description:
      "Encourages initiative, agility, optimism, proactive problem-solving, and ownership.",
    color: "#b91c1c",
    icon: Brain,
  },
  {
    id: 2,
    title: "Quality",
    description: "Delivering excellence with consistency and precision.",
    color: "#84cc16",
    icon: CheckCircle,
  },
  {
    id: 3,
    title: "Innovation",
    description: "Driving creativity and modern digital solutions.",
    color: "#06b6d4",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Teamwork",
    description: "Collaboration and shared success.",
    color: "#6b7280",
    icon: Users,
  },
  {
    id: 5,
    title: "Integrity",
    description: "Honesty, transparency, and ethics.",
    color: "#f97316",
    icon: ShieldCheck,
  },
];

export default function CoreValues() {
  const ICON_BG_SIZE = 64;
  const ICON_RADIUS = ICON_BG_SIZE / 2;
  const [active, setActive] = useState(values[0]);

  return (
    <section className="py-10 px-4  max-w-7xl
      mx-auto sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-6">
            OUR CORE <br /> VALUES
          </h1>

          <div
            className="rounded-2xl p-6 sm:p-8 text-white transition-all duration-500"
            style={{ backgroundColor: active.color }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {active.title}
            </h3>
            <div className="w-12 h-1 bg-white mb-4"></div>
            <p className="text-sm sm:text-base leading-relaxed opacity-90">
              {active.description}
            </p>
          </div>
        </div>

        {/* RIGHT SVG */}
        <div className="flex justify-center w-full">
          <svg
            viewBox="0 0 400 400"
            className="
              w-[280px] h-[280px]
              sm:w-[360px] sm:h-[360px]
              md:w-[460px] md:h-[460px]
              lg:w-[560px] lg:h-[560px]
              xl:w-[720px] xl:h-[720px]
            "
          >
            {/* ROTATING WHEEL */}
            <g
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                transition: "transform 1s ease-in-out",
              }}
            >
              {/* SEGMENTS */}
              {values.map((item, index) => {
                const isActive = active.id === item.id;

                return (
                  <path
                    key={item.id}
                    d={getArcPath(
                      200,
                      200,
                      170,
                      80,
                      index * 72,
                      (index + 1) * 72
                    )}
                    fill={item.color}
                    onMouseEnter={() => setActive(item)}
                    onClick={() => setActive(item)}
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      transition: "transform 0.4s ease, opacity 0.4s ease",
                      transform: isActive
                        ? "translateY(-6px)"
                        : "translateY(0)",
                      opacity: isActive ? 1 : 0.9,
                    }}
                    className="cursor-pointer"
                  />
                );
              })}

              {/* ICONS */}
              {values.map((item, index) => {
                const Icon = item.icon;
                const angle = index * 72 + 36;
                const pos = polarToCartesian(200, 200, 150, angle);
                const isActive = active.id === item.id;

                return (
                  <foreignObject
                    key={item.id}
                    x={pos.x - ICON_RADIUS}
                    y={pos.y - ICON_RADIUS}
                    width={ICON_BG_SIZE}
                    height={ICON_BG_SIZE}
                    onMouseEnter={() => setActive(item)}
                    onClick={() => setActive(item)}
                    className="overflow-visible"
                  >
                    <div
                      className={`
                        flex items-center justify-center rounded-full
                        transition-all duration-300
                        ${isActive ? "scale-110 shadow-lg" : ""}
                      `}
                      style={{
                        width: ICON_BG_SIZE,
                        height: ICON_BG_SIZE,
                        background: isActive
                          ? `linear-gradient(135deg, ${item.color}, #ffffff)`
                          : "#ffffff",
                      }}
                    >
                      <Icon
                        size={isActive ? 30 : 26}
                        color={isActive ? "#ffffff" : item.color}
                      />
                    </div>
                  </foreignObject>
                );
              })}
            </g>

            {/* CENTER */}
            <circle cx="200" cy="200" r="70" fill="#ffffff" />
            <text
              x="200"
              y="210"
              textAnchor="middle"
              fontSize="36"
              fontWeight="700"
              fill="#b91c1c"
            >
              EQITI
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HELPERS ---------------- */

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function getArcPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number
) {
  const p1 = polarToCartesian(cx, cy, outerR, startAngle);
  const p2 = polarToCartesian(cx, cy, outerR, endAngle);
  const p3 = polarToCartesian(cx, cy, innerR, endAngle);
  const p4 = polarToCartesian(cx, cy, innerR, startAngle);

  return `
    M ${p1.x} ${p1.y}
    A ${outerR} ${outerR} 0 0 1 ${p2.x} ${p2.y}
    L ${p3.x} ${p3.y}
    A ${innerR} ${innerR} 0 0 0 ${p4.x} ${p4.y}
    Z
  `;
}

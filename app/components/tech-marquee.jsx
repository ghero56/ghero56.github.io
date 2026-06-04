"use client";
import React, { useEffect, useRef } from "react";
import { Box, Stack } from "@mui/material";
import { keyframes } from "@mui/system";

const drift = keyframes`
  from { background-position: 0 0; }
  to { background-position: -260px 140px; }
`;
const twinkle = keyframes`
  0%, 100% { opacity: 0.55; }
  50% { opacity: 0.85; }
`;

const STAR_LAYERS = `
  radial-gradient(1.5px 1.5px at 10% 20%, #fff, transparent 100%),
  radial-gradient(1px 1px at 30% 80%, #cfe0ff, transparent 100%),
  radial-gradient(1.5px 1.5px at 70% 40%, #fff, transparent 100%),
  radial-gradient(1px 1px at 88% 75%, #aac4ff, transparent 100%),
  radial-gradient(1px 1px at 55% 12%, #fff, transparent 100%)`;

// Depth tiers: farther = smaller, dimmer, blurred; nearer = larger, sharp, neon.
const DEPTHS = [
  { size: 0.85, opacity: 0.32, blur: 2.8, weight: 500, color: "#8fa9cf" },
  { size: 1.05, opacity: 0.52, blur: 1.6, weight: 600, color: "#a9c1e6" },
  { size: 1.3, opacity: 0.76, blur: 0.6, weight: 700, color: "#d4e3f7" },
  {
    size: 1.7,
    opacity: 1,
    blur: 0,
    weight: 800,
    color: "#ffffff",
    glow: true,
  },
];

const DEFAULT_TECHS = [
  "Unity", "C#", "Unreal Engine", "C++", "Python", "Flask", "PHP", "MySQL",
  "React", "Next.js", "Node.js", "Git & GitHub", "OpenGL", "Blender",
  "TensorFlow", "OpenCV", "Java", "CI/CD", "Agile", "VR",
];

const ROW_SPEEDS = [42, 30, 54]; // px/s per lane (different speeds)
const ROW_DIRS = [-1, 1, -1]; // travel direction per lane
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];

// Infinite recycling marquee: each lane continuously spawns randomly-chosen
// tech labels at random depths and gaps, moves them via rAF, and REMOVES the
// DOM nodes once they leave the screen so the node count stays bounded.
export default function TechMarquee({ items }) {
  const pool = items && items.length ? items : DEFAULT_TECHS;
  const row0 = useRef(null);
  const row1 = useRef(null);
  const row2 = useRef(null);
  const poolRef = useRef(pool);
  poolRef.current = pool;

  useEffect(() => {
    const rows = [row0, row1, row2].map((ref, i) => ({
      el: ref.current,
      dir: ROW_DIRS[i],
      speed: ROW_SPEEDS[i],
      items: [],
      frontier: 0,
      inited: false,
    }));

    const makeItem = (row) => {
      const depth = pick(DEPTHS);
      const span = document.createElement("span");
      span.textContent = pick(poolRef.current);
      Object.assign(span.style, {
        position: "absolute",
        top: "50%",
        left: "0",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-geist-mono), monospace",
        letterSpacing: "1px",
        userSelect: "none",
        pointerEvents: "none",
        fontSize: `${depth.size}rem`,
        fontWeight: String(depth.weight),
        opacity: String(depth.opacity),
        color: depth.color,
        filter: depth.blur ? `blur(${depth.blur}px)` : "none",
        textShadow: depth.glow
          ? "0 0 10px rgba(87,143,202,0.9), 0 0 22px rgba(54,116,181,0.6)"
          : "none",
        willChange: "transform",
      });
      row.el.appendChild(span);
      return { el: span, width: span.offsetWidth, x: 0, gap: rand(36, 150) };
    };

    const place = (it, x) => {
      it.x = x;
      it.el.style.transform = `translate(${x}px, -50%)`;
    };

    const prefill = (row, cw) => {
      if (row.dir < 0) {
        let x = 0;
        while (x < cw + 200) {
          const it = makeItem(row);
          place(it, x);
          row.items.push(it);
          x += it.width + it.gap;
        }
        row.frontier = x;
      } else {
        let x = cw;
        while (x > -200) {
          const it = makeItem(row);
          place(it, x - it.width);
          row.items.push(it);
          x -= it.width + it.gap;
        }
        row.frontier = x;
      }
      row.inited = true;
    };

    let raf;
    let last = performance.now();
    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      for (const row of rows) {
        if (!row.el) continue;
        const cw = row.el.clientWidth;
        if (!row.inited) {
          if (cw > 0) prefill(row, cw);
          continue;
        }
        const dx = row.dir * row.speed * dt;
        row.frontier += dx;
        for (const it of row.items) place(it, it.x + dx);
        // recycle: drop nodes that fully left the screen
        row.items = row.items.filter((it) => {
          const off = row.dir < 0 ? it.x + it.width < -40 : it.x > cw + 40;
          if (off) row.el.removeChild(it.el);
          return !off;
        });
        // keep the lane filled
        if (row.dir < 0) {
          while (row.frontier < cw) {
            const it = makeItem(row);
            place(it, row.frontier);
            row.items.push(it);
            row.frontier += it.width + it.gap;
          }
        } else {
          while (row.frontier > 0) {
            const it = makeItem(row);
            place(it, row.frontier - it.width);
            row.items.push(it);
            row.frontier -= it.width + it.gap;
          }
        }
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      rows.forEach((row) => {
        if (row.el) row.el.replaceChildren();
      });
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 6 },
        background:
          "radial-gradient(ellipse at 50% 50%, #122943 0%, #0a1626 55%, #050b14 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
        maskImage:
          "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
      }}
      aria-label="Technologies"
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: STAR_LAYERS,
          backgroundSize: "260px 260px",
          backgroundRepeat: "repeat",
          animation: `${drift} 90s linear infinite, ${twinkle} 6s ease-in-out infinite`,
          pointerEvents: "none",
        }}
      />
      <Stack spacing={{ xs: 1.5, md: 2.5 }} sx={{ position: "relative" }}>
        {[row0, row1, row2].map((ref, i) => (
          <Box
            key={i}
            ref={ref}
            sx={{
              position: "relative",
              height: { xs: 38, md: 50 },
              overflow: "hidden",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

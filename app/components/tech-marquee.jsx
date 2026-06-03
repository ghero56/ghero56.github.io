"use client";
import React from "react";
import { Box, Stack } from "@mui/material";
import { keyframes } from "@mui/system";

const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;
const scrollRight = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
`;
const drift = keyframes`
  from { background-position: 0 0, 0 0, 0 0; }
  to { background-position: -260px 140px, 200px -120px, -120px -80px; }
`;
const twinkle = keyframes`
  0%, 100% { opacity: 0.55; }
  50% { opacity: 0.85; }
`;

// Tiled "starfield" built from radial-gradients (deterministic — no random, so
// it's SSR/hydration-safe). Three layers at different sizes for parallax depth.
const STAR_LAYERS = [
  `radial-gradient(1.5px 1.5px at 10% 20%, #fff, transparent 100%),
   radial-gradient(1px 1px at 30% 80%, #cfe0ff, transparent 100%),
   radial-gradient(1.5px 1.5px at 70% 40%, #fff, transparent 100%),
   radial-gradient(1px 1px at 88% 75%, #aac4ff, transparent 100%),
   radial-gradient(1px 1px at 55% 12%, #fff, transparent 100%)`,
].join(",");

// Depth styles: farther = smaller, dimmer, blurred; nearer = larger, sharp, neon.
const depthStyle = {
  far: {
    fontSize: { xs: "0.8rem", md: "0.95rem" },
    opacity: 0.4,
    filter: "blur(2.5px)",
    color: "#9fb6d6",
    fontWeight: 500,
  },
  mid: {
    fontSize: { xs: "1rem", md: "1.25rem" },
    opacity: 0.72,
    filter: "blur(0.7px)",
    color: "#cfe0f5",
    fontWeight: 600,
  },
  near: {
    fontSize: { xs: "1.35rem", md: "1.8rem" },
    opacity: 1,
    filter: "none",
    color: "#ffffff",
    fontWeight: 800,
    textShadow:
      "0 0 10px rgba(87,143,202,0.9), 0 0 22px rgba(54,116,181,0.6)",
  },
};

const DEPTH_PATTERN = ["mid", "near", "far", "near", "mid", "far", "near", "mid"];

function Row({ items, duration, reverse }) {
  const row = [...items, ...items];
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: { xs: 3, md: 5 },
        whiteSpace: "nowrap",
        willChange: "transform",
        animation: `${reverse ? scrollRight : scrollLeft} ${duration}s linear infinite`,
      }}
    >
      {row.map((it, i) => (
        <Box
          key={i}
          component="span"
          sx={{
            ...depthStyle[it.depth],
            fontFamily: "var(--font-geist-mono), monospace",
            letterSpacing: 1,
            userSelect: "none",
          }}
        >
          {it.label}
        </Box>
      ))}
    </Box>
  );
}

export default function TechMarquee({ items }) {
  // Split into 3 rows and assign a deterministic depth to each item.
  const rows = [[], [], []];
  items.forEach((label, i) => {
    rows[i % 3].push({ label, depth: DEPTH_PATTERN[i % DEPTH_PATTERN.length] });
  });

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
      {/* starfield */}
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
      <Stack spacing={{ xs: 2, md: 3 }} sx={{ position: "relative" }}>
        <Row items={rows[0]} duration={38} />
        <Row items={rows[1]} duration={54} reverse />
        <Row items={rows[2]} duration={46} />
      </Stack>
    </Box>
  );
}

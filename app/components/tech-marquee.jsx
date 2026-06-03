"use client";
import React from "react";
import { Box, Chip } from "@mui/material";
import { keyframes } from "@mui/system";

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

// Infinite horizontal band of technologies. The list is duplicated so the
// translateX(-50%) loop is seamless; pauses on hover.
export default function TechMarquee({ items }) {
  const row = [...items, ...items];

  return (
    <Box
      sx={{
        overflow: "hidden",
        py: 2.5,
        bgcolor: "primary.main",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        maskImage:
          "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
      }}
      aria-label="Technologies"
    >
      <Box
        sx={{
          display: "inline-flex",
          gap: 1.5,
          whiteSpace: "nowrap",
          willChange: "transform",
          animation: `${scroll} 45s linear infinite`,
          "&:hover": { animationPlayState: "paused" },
        }}
      >
        {row.map((tech, i) => (
          <Chip
            key={i}
            label={tech}
            sx={{
              bgcolor: "background.paper",
              color: "text.primary",
              fontWeight: 600,
              fontSize: "0.95rem",
              px: 1,
              py: 2.4,
              borderRadius: 2,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

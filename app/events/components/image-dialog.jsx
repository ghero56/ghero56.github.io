"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Dialog, Box, IconButton, Typography, Tooltip } from "@mui/material";
import { keyframes } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import CloseIcon from "@mui/icons-material/Close";
import { useLanguage } from "../../layout";

const SLIDE_MS = 3000;
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const overlayBtn = {
  color: "#fff",
  bgcolor: "rgba(0,0,0,0.4)",
  "&:hover": { bgcolor: "rgba(0,0,0,0.65)" },
};

// Lightbox with previous/next navigation, a presentation (auto-advance) mode,
// an image counter and keyboard controls (←/→ to navigate, space to play/pause).
export const ImageDialog = ({ open, handleClose, images = [], startIndex = 0 }) => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(startIndex);
  const [playing, setPlaying] = useState(false);

  const count = images.length;

  // Reset to the clicked image whenever the dialog (re)opens.
  useEffect(() => {
    if (open) {
      setIndex(startIndex);
      setPlaying(false);
    }
  }, [open, startIndex]);

  const go = useCallback(
    (delta) => {
      if (count) setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  // Auto-advance while in presentation mode.
  useEffect(() => {
    if (!open || !playing || count <= 1) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => clearInterval(id);
  }, [open, playing, count]);

  // Keyboard controls.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === " ") {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const current = images[index];
  const slideshowLabel = playing ? t.events.slideshowPause : t.events.slideshowPlay;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: "rgba(8,14,24,0.97)",
          borderRadius: "20px",
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: 320, md: 460 },
        }}
      >
        <IconButton
          onClick={handleClose}
          aria-label="Close"
          sx={{ position: "absolute", top: 8, right: 8, zIndex: 2, ...overlayBtn }}
        >
          <CloseIcon />
        </IconButton>

        {current && (
          <Box
            component="img"
            key={current.img}
            src={current.img}
            alt={current.title}
            sx={{
              maxWidth: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              display: "block",
              animation: `${fadeIn} 0.35s ease`,
            }}
          />
        )}

        {count > 1 && (
          <>
            <IconButton
              onClick={() => go(-1)}
              aria-label={t.events.galleryPrev}
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                ...overlayBtn,
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => go(1)}
              aria-label={t.events.galleryNext}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                ...overlayBtn,
              }}
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          </>
        )}

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            py: 1,
            bgcolor: "rgba(0,0,0,0.5)",
          }}
        >
          {count > 1 && (
            <Tooltip title={slideshowLabel}>
              <IconButton
                onClick={() => setPlaying((p) => !p)}
                aria-label={slideshowLabel}
                sx={{ color: "#fff" }}
              >
                {playing ? <PauseIcon /> : <PlayArrowIcon />}
              </IconButton>
            </Tooltip>
          )}
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {count ? index + 1 : 0} / {count}
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ImageDialog;

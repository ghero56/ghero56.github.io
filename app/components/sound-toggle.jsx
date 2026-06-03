"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { IconButton, Tooltip } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useLanguage } from "../layout";

// Elements that have a hover effect across the site.
const HOVER_SELECTOR =
  ".MuiButtonBase-root, .MuiChip-root, .MuiCard-root, .hover-grid, a[href]";

// Bottom-left toggle that enables a subtle UI hover sound. Uses the Web Audio API
// for low-latency ticks and a single delegated mouseover listener so every hover
// element triggers the sound without wiring each one individually.
export default function SoundToggle() {
  const { t } = useLanguage();
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef(null);
  const bufferRef = useRef(null);
  const lastElRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    if (window.localStorage.getItem("sound") === "on") setEnabled(true);
  }, []);

  const ensureAudio = useCallback(async () => {
    try {
      if (!ctxRef.current) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctxRef.current = new AC();
      }
      if (ctxRef.current.state === "suspended") await ctxRef.current.resume();
      if (!bufferRef.current) {
        const res = await fetch("/sounds/hover_tick.wav");
        const arr = await res.arrayBuffer();
        bufferRef.current = await ctxRef.current.decodeAudioData(arr);
      }
    } catch {
      /* audio not available */
    }
  }, []);

  const play = useCallback(() => {
    const ctx = ctxRef.current;
    const buf = bufferRef.current;
    if (!ctx || !buf || ctx.state !== "running") return;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = 0.96 + Math.random() * 0.08; // slight variation
    const gain = ctx.createGain();
    gain.gain.value = 0.22;
    src.connect(gain).connect(ctx.destination);
    src.start();
  }, []);

  // Delegated hover listener (+ resume audio on first gesture).
  useEffect(() => {
    if (!enabled) return undefined;
    ensureAudio();

    const onOver = (e) => {
      const el = e.target.closest?.(HOVER_SELECTOR);
      if (!el) {
        lastElRef.current = null;
        return;
      }
      if (el === lastElRef.current) return;
      const now = performance.now();
      lastElRef.current = el;
      if (now - lastTimeRef.current < 40) return;
      lastTimeRef.current = now;
      play();
    };
    const resume = () => ctxRef.current?.resume?.();

    document.addEventListener("mouseover", onOver);
    document.addEventListener("pointerdown", resume);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("pointerdown", resume);
    };
  }, [enabled, ensureAudio, play]);

  const toggle = async () => {
    const next = !enabled;
    setEnabled(next);
    window.localStorage.setItem("sound", next ? "on" : "off");
    if (next) await ensureAudio(); // unlock audio within the click gesture
  };

  const label = enabled ? t.sound.on : t.sound.off;

  return (
    <Tooltip title={label} placement="right">
      <IconButton
        onClick={toggle}
        aria-label={label}
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          bgcolor: "background.paper",
          boxShadow: 3,
          zIndex: 1000,
          color: enabled ? "secondary.main" : "text.secondary",
        }}
      >
        {enabled ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
    </Tooltip>
  );
}

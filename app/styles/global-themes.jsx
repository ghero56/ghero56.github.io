"use client";

import { createTheme } from "@mui/material/styles";

// Paleta compartida: azul como identidad de marca en ambos modos.
const brand = {
  primary: "#3674B5",
  secondary: "#578FCA",
};

const sharedTheme = {
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    h2: { fontWeight: 800 },
    h4: { fontWeight: 800 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
  },
};

const lightTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: "light",
    primary: { main: brand.primary },
    secondary: { main: brand.secondary },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
  },
});

const darkTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: "dark",
    primary: { main: brand.primary },
    secondary: { main: brand.secondary },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
  },
});

export { lightTheme, darkTheme };

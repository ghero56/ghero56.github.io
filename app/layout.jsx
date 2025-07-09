"use client";
import React, { useEffect, useRef } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import AppBarGlobal from "./components/appbar-global";
import ThemeButton from "./components/theme-button";
import FooterGlobal from "./components/footer-global";
import { darkTheme, lightTheme } from "./styles/global-themes";
import { createContext, useContext, useMemo, useState } from "react";
import Head from "next/head";
import GoUpButton from "./components/up-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Crear el contexto para el tema
const ThemeToggleContext = createContext();

export const useThemeToggle = () => useContext(ThemeToggleContext);

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("dark");

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);
  const refScrollUp = useRef();
  const handleScrollUp = () => {
    setshowGoTop(false);
    setSrollPosition(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 100) {
      return setshowGoTop(true);
    } else if (scrollPosition < 100) {
      return setshowGoTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const theme = useMemo(
    () => (mode === "dark" ? darkTheme : lightTheme),
    [mode],
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <html lang="en">
      <Head>
        <title>Ghero 56</title>
        <meta
          name="description"
          content="Some part of my brain is in here, watching you"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeToggleContext.Provider value={{ toggleTheme, mode }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBarGlobal />
            {children}
            <ThemeButton />

            <GoUpButton handleScrollUp={handleScrollUp} showGoTop={showGoTop} />

            <FooterGlobal />
          </ThemeProvider>
        </ThemeToggleContext.Provider>
      </body>
    </html>
  );
}

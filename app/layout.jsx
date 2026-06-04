"use client";
import React, { useEffect, useRef } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import AppBarGlobal from "./components/appbar-global";
import ThemeButton from "./components/theme-button";
import SoundToggle from "./components/sound-toggle";
import FooterGlobal from "./components/footer-global";
import { darkTheme, lightTheme } from "./styles/global-themes";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { createContext, useContext, useMemo, useState } from "react";
import Head from "next/head";
import GoUpButton from "./components/up-button";
import { translations } from "./i18n/translations";

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

// Contexto de idioma (ES / EN / HE)
const LANGS = ["es", "en", "he"];
const RTL_LANGS = ["he"];

// Emotion caches: LTR (default) and RTL (mirrors margins/padding/floats/etc.
// via stylis-plugin-rtl). The active cache is chosen by text direction.
const ltrCache = createCache({ key: "mui", prepend: true });
const rtlCache = createCache({
  key: "mui-rtl",
  prepend: true,
  stylisPlugins: [rtlPlugin],
});
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("dark");
  const [lang, setLang] = useState("es");

  // Restaurar idioma y tema guardados (solo en cliente, evita mismatch de hidratación)
  useEffect(() => {
    const savedLang = window.localStorage.getItem("lang");
    if (LANGS.includes(savedLang)) setLang(savedLang);
    const savedMode = window.localStorage.getItem("mode");
    if (savedMode === "dark" || savedMode === "light") setMode(savedMode);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = LANGS[(LANGS.indexOf(prev) + 1) % LANGS.length];
      window.localStorage.setItem("lang", next);
      return next;
    });
  };

  const t = useMemo(() => translations[lang], [lang]);
  const dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

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
    () => createTheme(mode === "dark" ? darkTheme : lightTheme, { direction: dir }),
    [mode, dir],
  );

  const toggleTheme = () => {
    setMode((prevMode) => {
      const next = prevMode === "dark" ? "light" : "dark";
      window.localStorage.setItem("mode", next);
      return next;
    });
  };

  return (
    <html lang={lang} dir={dir}>
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
          <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
            <CacheProvider value={dir === "rtl" ? rtlCache : ltrCache}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBarGlobal />
                {children}
                <ThemeButton />
                <SoundToggle />

                <GoUpButton
                  handleScrollUp={handleScrollUp}
                  showGoTop={showGoTop}
                />

                <FooterGlobal />
              </ThemeProvider>
            </CacheProvider>
          </LanguageContext.Provider>
        </ThemeToggleContext.Provider>
      </body>
    </html>
  );
}

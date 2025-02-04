"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import AppBarGlobal from "./components/appbar-global";
import ThemeButton from "./components/theme-button";
import { darkTheme, lightTheme } from "./styles/global-themes";
import { createContext, useContext, useMemo, useState } from "react";
import Head from "next/head";

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
  const [mode, setMode] = useState('dark');

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <html lang="en">
      <Head>
        <title>Ghero 56</title>
        <meta name="description" content="Some part of my brain is in here, watching you" />
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
            {/* 
            <FooterGlobal />
            */}
          </ThemeProvider>
        </ThemeToggleContext.Provider>

      </body>
        {/* Firebase 
        <script src="/__/firebase/9.1.3/firebase-app.js"></script>
        <script src="/__/firebase/9.1.3/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
        */}
    </html>
  );
}

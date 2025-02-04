"use client";

import { createTheme } from '@mui/material/styles';

// Definición de temas
const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#FFCDB2',
        },
        secondary: {
            main: '#FFB4A2',
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    },
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#3674B5',
        },
        secondary: {
            main: '#578FCA',
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    },
});

export { lightTheme, darkTheme };
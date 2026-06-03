"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import Link from "next/link";
import { useLanguage } from "../layout";

const AppBarGlobal = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Label for the language button = the NEXT language in the cycle.
  const nextLangLabel = { es: "EN", en: "עב", he: "ES" }[lang] || "EN";

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.courses, href: "/courses" },
    { label: t.nav.events, href: "/events" },
  ];

  return (
    <>
      <AppBar position="sticky" elevation={2} sx={{ bgcolor: "primary.main" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Brand */}
          <Typography
            component={Link}
            href="/"
            variant="h6"
            sx={{
              fontWeight: 800,
              letterSpacing: 1,
              color: "common.white",
              textDecoration: "none",
            }}
          >
            {t.nav.brand}
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  color: "common.white",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "secondary.main" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right side: language toggle + mobile menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              onClick={toggleLang}
              startIcon={<TranslateIcon />}
              sx={{
                color: "common.white",
                fontWeight: 700,
                border: "1px solid",
                borderColor: "secondary.main",
                borderRadius: 2,
                px: 1.5,
              }}
              aria-label="Toggle language"
            >
              {nextLangLabel}
            </Button>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 240 }} role="presentation">
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, px: 2, py: 2 }}
          >
            {t.nav.brand}
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AppBarGlobal;

"use client";
import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Avatar,
  Link as MuiLink,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import Link from "next/link";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import LaunchIcon from "@mui/icons-material/Launch";
import { useLanguage } from "./layout";
import TechMarquee from "./components/tech-marquee";

// Acrylic (glassmorphism) card with a neon glow on hover.
const acrylicCard = (theme) => ({
  bgcolor: alpha(
    theme.palette.background.paper,
    theme.palette.mode === "dark" ? 0.5 : 0.72,
  ),
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  borderRadius: 12,
  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: alpha(theme.palette.secondary.main, 0.7),
    boxShadow: `0 0 18px ${alpha(theme.palette.secondary.main, 0.55)}, 0 10px 30px ${alpha("#000", 0.25)}`,
  },
});

const neonText = (theme) => ({
  textShadow: `0 0 22px ${alpha(theme.palette.secondary.main, 0.45)}`,
});

// Skills grouped by area (language-neutral tech names).
const skillGroups = [
  {
    key: "gamedev",
    items: ["Unity", "C#", "Unreal Engine", "C++", "OpenGL", "Blender", "VR (Innoactive)"],
  },
  {
    key: "web",
    items: ["Python", "Flask", "PHP", "MySQL", "React", "Next.js", "Node.js", "HTML / CSS"],
  },
  {
    key: "tools",
    items: ["Git & GitHub", "CI/CD", "Agile", "AssetBundles", "TensorFlow", "OpenCV", "Java"],
  },
];

// Flat list for the scrolling band.
const marqueeTech = [
  "Unity",
  "C#",
  "Unreal Engine",
  "C++",
  "Python",
  "Flask",
  "PHP",
  "MySQL",
  "React",
  "Next.js",
  "Node.js",
  "Git & GitHub",
  "OpenGL",
  "Blender",
  "TensorFlow",
  "OpenCV",
  "Java",
  "CI/CD",
  "Agile",
  "VR",
];

const certs = [
  {
    name: "EF SET English Certificate — B2",
    issuer: "EF Standard English Test",
    url: "https://cert.efset.org/es/hLGWnq",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/72755ec3-87b2-4dc8-9137-0b6ff63f7894",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/3d114c35-b9ac-4117-924c-760eeebfafe2",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/4932e8c6-b759-44da-936c-d7581707e1d1",
  },
];

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(54,116,181,0.15) 0%, rgba(87,143,202,0.08) 100%)",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h6" color="secondary.main" fontWeight={600} gutterBottom>
                {h.greeting}
              </Typography>
              <Typography
                variant="h2"
                fontWeight={800}
                sx={(theme) => ({
                  fontSize: { xs: "2.2rem", md: "3.5rem" },
                  lineHeight: 1.1,
                  ...neonText(theme),
                })}
                gutterBottom
              >
                {h.name}
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ fontSize: { xs: "1.1rem", md: "1.5rem" }, mb: 3 }}
              >
                {h.role}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 4 }}>
                {h.intro}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  component={Link}
                  href="/projects"
                  variant="contained"
                  size="large"
                  sx={{ fontWeight: 700, borderRadius: 2 }}
                >
                  {h.ctaProjects}
                </Button>
                <Button
                  component={Link}
                  href="/courses"
                  variant="outlined"
                  size="large"
                  sx={{ fontWeight: 700, borderRadius: 2 }}
                >
                  {h.ctaCourses}
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
              <Avatar
                src="/images/photo/me.jpg"
                alt={h.name}
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  mx: "auto",
                  border: "6px solid",
                  borderColor: "primary.main",
                  boxShadow: 6,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TECH MARQUEE */}
      <TechMarquee items={marqueeTech} />

      {/* ABOUT */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" fontWeight={800} align="center" gutterBottom>
          {h.aboutTitle}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: "1.15rem", color: "text.secondary", mt: 2 }}
        >
          {h.aboutBody}
        </Typography>
      </Container>

      {/* SKILLS (grouped) */}
      <Box sx={{ bgcolor: "action.hover", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={800} align="center" gutterBottom>
            {h.skillsTitle}
          </Typography>
          <Stack spacing={4} sx={{ mt: 4 }}>
            {skillGroups.map((group) => (
              <Box key={group.key}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  color="primary.main"
                  align="center"
                  sx={{ mb: 1.5 }}
                >
                  {h.skillGroups[group.key]}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 1.5,
                  }}
                >
                  {group.items.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      color="primary"
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        px: 1,
                        py: 2.4,
                        transition: "box-shadow 0.2s, transform 0.2s",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 0 12px rgba(87,143,202,0.85)",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* EXPERIENCE */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" fontWeight={800} align="center" gutterBottom>
          {h.experienceTitle}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 1 }} justifyContent="center">
          {h.experience.map((exp, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card sx={(theme) => ({ ...acrylicCard(theme), height: "100%" })}>
                <CardContent>
                  <WorkOutlineIcon color="secondary" sx={{ fontSize: 36, mb: 1 }} />
                  <Typography variant="h6" fontWeight={700}>
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" fontWeight={600}>
                    {exp.place}
                  </Typography>
                  {exp.period && (
                    <Typography variant="caption" color="text.secondary">
                      {exp.period}
                    </Typography>
                  )}
                  <Typography variant="body2" sx={{ mt: 1.5 }}>
                    {exp.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* HIGHLIGHTS */}
      <Box sx={{ bgcolor: "action.hover", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={800} align="center" gutterBottom>
            {h.highlightsTitle}
          </Typography>
          <Stack spacing={1.5} sx={{ mt: 4 }}>
            {h.highlights.map((item, i) => (
              <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                <CheckCircleOutlineIcon color="secondary" sx={{ mt: "2px" }} />
                <Typography variant="body1" sx={{ fontSize: "1.05rem" }}>
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CERTIFICATIONS */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" fontWeight={800} align="center" gutterBottom>
          {h.certsTitle}
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }} justifyContent="center">
          {certs.map((cert, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={(theme) => ({
                  ...acrylicCard(theme),
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                })}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <VerifiedIcon color="primary" sx={{ fontSize: 34, mb: 1 }} />
                  <Typography variant="subtitle1" fontWeight={700}>
                    {cert.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {cert.issuer}
                  </Typography>
                </CardContent>
                <Box sx={{ px: 2, pb: 2 }}>
                  <MuiLink
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontWeight: 600,
                      color: "secondary.main",
                    }}
                  >
                    {h.certsVerify} <LaunchIcon sx={{ fontSize: 16 }} />
                  </MuiLink>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

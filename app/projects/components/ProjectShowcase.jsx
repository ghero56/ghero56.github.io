"use client";
import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import { useLanguage } from "../../layout";

// Detail page for a single software project: title, description and a gallery of
// screenshots. Used by the /aerolaundry and /pym-front routes.
export default function ProjectShowcase({
  title,
  description,
  descriptionEs,
  images = [],
  externalUrl,
}) {
  const { t, lang } = useLanguage();
  const desc = lang === "es" && descriptionEs ? descriptionEs : description;

  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Button
        component={Link}
        href="/projects"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3, fontWeight: 600 }}
      >
        {t.projects.back}
      </Button>

      <Typography variant="h3" fontWeight={800} gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ mb: 3, maxWidth: 820 }}
      >
        {desc}
      </Typography>

      {externalUrl && (
        <Button
          variant="contained"
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<LaunchIcon />}
          sx={{ mb: 4, borderRadius: 2, fontWeight: 700 }}
        >
          {t.projects.visit}
        </Button>
      )}

      <Grid container spacing={3}>
        {images.map((src, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box
              component="img"
              src={src}
              alt={`${title} ${i + 1}`}
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: 3,
                display: "block",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

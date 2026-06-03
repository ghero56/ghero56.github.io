"use client";
// ProjectGallery.jsx
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Gallery from "./components/ProjectCard";
import { useLanguage } from "../layout";

// Estilo para la imagen con efecto hover
const ImageContainer = styled("div")(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
    cursor: "pointer",
  },
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  height: "auto",
  display: "block",
}));

function handleImageClick(routeKey) {
  window.location.href = `/projects/${routeKey}`;
}

const ProjectGallery = () => {
  const { t } = useLanguage();

  // key = route segment (/projects/<key>), label comes from the dictionary.
  const categories = [
    { key: "AI", src: "/images/projects/ai.webp" },
    { key: "games", src: "/images/projects/games.webp" },
    { key: "hardware", src: "/images/projects/hw.webp" },
    { key: "software", src: "/images/projects/sw.webp" },
  ];

  // Lightweight cover images only — avoids loading every (heavy, animated)
  // project image into the landing carousel.
  const coverImgs = categories.map((c) => c.src);

  return (
    <Box
      sx={{
        padding: "20px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{ marginBottom: "50px" }}
      >
        {t.projects.title}
      </Typography>

      <Grid container spacing={4}>
        {categories.map((cat, index) => (
          <Grid
            item="true"
            xs={12}
            md={6}
            lg={3}
            xl={3}
            key={index}
            sx={{
              display: "center",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "50px",
            }}
          >
            <ImageContainer onClick={() => handleImageClick(cat.key)}>
              <StyledImg src={cat.src} alt={t.projects.cards[cat.key]} />
            </ImageContainer>
          </Grid>
        ))}
        <Grid
          item="true"
          xs={12}
          sx={{
            display: "center",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "50px",
            backdropFilter: "blur(5px)",
          }}
          onClick={() => handleImageClick("all")}
        >
          <Gallery
            enableClick={false}
            carrousel={true}
            fullSize={true}
            showTitle={true}
            data={[
              {
                title: t.projects.all,
                imgUrl: coverImgs,
              },
            ]}
            transitionDuration={3200}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectGallery;

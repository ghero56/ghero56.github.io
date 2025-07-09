"use client";
// ProjectGallery.jsx
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Route } from "@mui/icons-material";
import {
  DataMisc,
  DataAI,
  DataGames,
  DataHardware,
  DataSoftware,
} from "./components/projects-data";
import Gallery from "./components/ProjectCard";

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

function handleImageClick(title) {
  window.location.href = `/projects/${title}`;
}

const ProjectGallery = () => {
  const projectImages = [
    { title: "AI", src: "/images/projects/ai.webp" },
    { title: "games", src: "/images/projects/games.webp" },
    { title: "hardware", src: "/images/projects/hw.webp" },
    { title: "software", src: "/images/projects/sw.webp" },
    // Añade más imágenes aquí
  ];

  const allProjectsImg = [
    ...DataGames,
    ...DataAI,
    ...DataMisc,
    ...DataHardware,
    ...DataSoftware,
  ].flatMap((item) =>
    Array.isArray(item.imgUrl) ? item.imgUrl : [item.imgUrl],
  );

  console.log(allProjectsImg);

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
        Projects 👀
      </Typography>

      <Grid container spacing={4}>
        {projectImages.map((project, index) => (
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
            <ImageContainer onClick={() => handleImageClick(project.title)}>
              <StyledImg src={project.src} alt={project.title} />
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
                title: "All Projects",
                imgUrl: allProjectsImg,
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

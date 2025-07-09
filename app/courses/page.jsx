"use client";
// ProjectGallery.jsx
import React from "react";
import {
  Link,
  Grid,
  Typography,
  Box,
  Card,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

// Estilo para la imagen con efecto hover
const ImageContainer = styled("div")(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "12px",
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

export default function ProjectGallery() {
  const projectImages = [
    { title: "Mi Juego 1", src: "/courses/7.webp" },
    { title: "Mi Juego 2", src: "/courses/5.webp" },
    { title: "Mi Juego 3", src: "/courses/1.webp" },
    { title: "Mi Juego 4", src: "/courses/2.webp" },
    { title: "Mi Juego 7", src: "/courses/6.webp" },
    { title: "Mi Juego 6", src: "/courses/4.webp" },
    { title: "Mi Juego 5", src: "/courses/3.webp" },
    { title: "Mi Juego 8", src: "/courses/8.webp" },
    // Añade más imágenes aquí
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{ marginBottom: "50px", paddingTop: "20px" }}
      >
        Some of the courses I have imparted 🧑‍ 🏫
      </Typography>

      <Grid container spacing={4}>
        {projectImages.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ImageContainer>
              <StyledImg
                src={project.src}
                alt={project.title}
                onClick={() => (window.location.href = `https://www.sodvi.com`)}
              />
            </ImageContainer>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <ImageContainer>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <StyledImg
                  src={"/courses/sodvi.webp"}
                  alt="SODVI Course"
                  onClick={() =>
                    (window.location.href = `https://www.sodvi.com`)
                  }
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </ImageContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

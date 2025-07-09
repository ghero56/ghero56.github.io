"use client";
import { use, useState } from "react";
import Gallery from "../components/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import { DataAI } from "../components/projects-data";

export default function IAPage() {
  // this data has the title, and 1 array of games with title and image
  // those are accessed in the Gallery component as Data.title and Data.data

  const title = "AI projects 🤖";
  const Data = DataAI;

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            align="center"
            sx={{
              color: "main.primary",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Gallery data={Data} />
      </Grid>
    </Box>
  );
}

"use client";
import Gallery from "../components/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import { DataGames } from "../components/projects-data"; // Import the games data
import { useLanguage } from "../../layout";

export default function GamesPage() {
  const { t } = useLanguage();
  const title = t.projects.pageTitles.games;
  const Data = DataGames;

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
              color: "text.primary",
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

"use client";
import Gallery from "../components/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { DataSoftware } from "../components/projects-data";

export default function SoftwarePage() {
  const title = "Software projects";
  const Data = DataSoftware;

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
          <PrecisionManufacturingIcon
            sx={{
              fontSize: "2rem",
              color: "main.primary",
              marginLeft: "10px",
            }}
          />
        </Grid>
        <Gallery data={Data} />
      </Grid>
    </Box>
  );
}

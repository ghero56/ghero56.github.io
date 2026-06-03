"use client";
import Gallery from "../components/ProjectCard";
import React from "react";
import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import {
  DataAI,
  DataGames,
  DataHardware,
  DataMisc,
  DataSoftware,
} from "../components/projects-data";
import { useLanguage } from "../../layout";

export default function AllProjectsPage() {
  const { t } = useLanguage();
  const sections = [
    { title: t.projects.sections.ai, data: DataAI },
    { title: t.projects.sections.games, data: DataGames },
    { title: t.projects.sections.hardware, data: DataHardware },
    { title: t.projects.sections.misc, data: DataMisc },
    { title: t.projects.sections.software, data: DataSoftware },
  ];

  // Collect unique filter options from all sections' data
  const allProjects = sections.flatMap((section) => section.data);

  // Extract unique values for filters
  const years = Array.from(
    new Set(
      allProjects
        .map((p) => {
          const match = p.year?.match(/\d{4}/);
          return match ? match[0] : null;
        })
        .filter(Boolean),
    ),
  ).sort((a, b) => b - a);

  // Platforms extracted from project data
  const platforms = Array.from(
    new Set(
      allProjects.flatMap((p) => {
        if (typeof p.platform !== "string") return [];
        return (
          p.platform
            // Quitar todo entre paréntesis
            .replace(/\([^)]*\)/g, "")
            // Separar por comas
            .split(",")
            // Quitar espacios extra
            .map((s) => s.trim())
            // Filtrar vacíos
            .filter(Boolean)
        );
      }),
    ),
  ).sort();

  // Tecnologías extraídas de paréntesis
  const technologies = [
    "Quartus",
    "Unreal Engine",
    "OpenCV",
    "Python",
    "TensorFlow",
    "Keras",
    "C++",
    "Unity",
    "Node.js",
    "React",
    "OpenGL",
    "fmod",
    "OpenAI API",
    "TASM",
  ];

  // Add more filters as needed (e.g., tags, languages, etc.)
  // Example: const tags = Array.from(new Set(allProjects.flatMap(p => p.tags || [])));

  // State for filters
  const [selectedPlatform, setSelectedPlatform] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("");
  const [selectedTechnology, setSelectedTechnology] = React.useState("");

  // Filtering logic
  const filterProject = (project) => {
    return (
      (!selectedPlatform ||
        (project.platform || []).includes(selectedPlatform)) &&
      (!selectedYear || project.year.includes(selectedYear)) &&
      (!selectedTechnology ||
        (project.platform || project.description || []).includes(
          selectedTechnology,
        ))
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{
          color: "text.primary",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          marginBottom: 2,
        }}
      >
        {t.projects.all}
      </Typography>
      {/* Filter Options */}
      <Box sx={{ marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1">
              {t.projects.filters.platform}
            </Typography>
            <Select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              style={{ width: "100%", padding: 8, borderRadius: 4 }}
            >
              <MenuItem value="">{t.projects.filters.all}</MenuItem>
              {platforms.map((platform) => (
                <MenuItem key={platform} value={platform}>
                  {platform}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1">
              {t.projects.filters.year}
            </Typography>
            <Select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{ width: "100%", padding: 8, borderRadius: 4 }}
            >
              <MenuItem value="">{t.projects.filters.all}</MenuItem>
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1">
              {t.projects.filters.technology}
            </Typography>
            <Select
              value={selectedTechnology}
              onChange={(e) => setSelectedTechnology(e.target.value)}
              style={{ width: "100%", padding: 8, borderRadius: 4 }}
            >
              <MenuItem value="">{t.projects.filters.all}</MenuItem>
              {technologies.map((tech) => (
                <MenuItem key={tech} value={tech}>
                  {tech}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Box>
      {/* Projects Gallery */}
      <Grid container spacing={2}>
        {sections.map((section, index) => {
          // Filter section data
          const filteredData = section.data.filter(filterProject);
          if (filteredData.length === 0) return null;
          return (
            <Grid item xs={12} key={index}>
              <Grid container spacing={2} sx={{ marginBottom: 4 }}>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    align="center"
                    sx={{
                      color: "text.primary",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      marginBottom: 2,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ marginBottom: 2 }}
                  >
                    {filteredData.length} {t.projects.filters.found}
                  </Typography>
                </Grid>

                <Gallery data={filteredData} />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

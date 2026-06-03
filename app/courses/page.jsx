"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  Avatar,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RouterIcon from "@mui/icons-material/Router";
import CodeIcon from "@mui/icons-material/Code";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SchoolIcon from "@mui/icons-material/School";
import { coursesTaken, coursesTaught } from "./components/courses-data";
import { useLanguage } from "../layout";

// Map the icon names stored in the data to the actual MUI components.
const iconMap = {
  SportsEsports: SportsEsportsIcon,
  Router: RouterIcon,
  Code: CodeIcon,
  Coffee: CoffeeIcon,
};

export default function CoursesPage() {
  const { t } = useLanguage();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* COURSES TAKEN */}
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={{ mb: 5, mt: 2 }}
      >
        {t.courses.takenTitle} 🎓
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {coursesTaken.map((course, index) => {
          const Icon = iconMap[course.icon] || SchoolIcon;
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Icon sx={{ fontSize: 36 }} />
                  </Avatar>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {course.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.place}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* COURSES TAUGHT */}
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={{ mb: 5, mt: 10 }}
      >
        {t.courses.taughtSubtitle}
      </Typography>

      <Grid container spacing={4}>
        {coursesTaught.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
              }}
            >
              <CardActionArea
                onClick={() => window.open(course.source, "_blank")}
              >
                <CardMedia
                  component="img"
                  image={course.img}
                  alt={course.name}
                  sx={{ aspectRatio: "16/9", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    {course.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.place}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

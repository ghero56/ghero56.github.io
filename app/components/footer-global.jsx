"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export default function FooterGlobal() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          bottom: 0,
          padding: "20px",
          mt: "200px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item sm={12}>
            <Typography
              sx={{
                textAlign: "center",
                color: "text.primary",
                fontSize: "14px",
              }}
            >
              Contact me on my social media!
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <LinkedInIcon
              sx={{
                color: "secondary.main",
                fontSize: "2rem",
                cursor: "pointer",
                transition: "font-size 0.2s",
                "&:hover": {
                  fontSize: "2.5rem",
                },
              }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/ghero56/", "_blank")
              }
            />
          </Grid>
          <Grid item sm={2}>
            <InstagramIcon
              sx={{
                color: "secondary.main",
                fontSize: "2rem",
                cursor: "pointer",
                transition: "font-size 0.2s",
                "&:hover": {
                  fontSize: "2.5rem",
                },
              }}
              onClick={() =>
                window.open("https://www.instagram.com/ghero_56/", "_blank")
              }
            />
          </Grid>
          <Grid item sm={2}>
            <GitHubIcon
              sx={{
                color: "secondary.main",
                fontSize: "2rem",
                cursor: "pointer",
                transition: "font-size 0.2s",
                "&:hover": {
                  fontSize: "2.5rem",
                },
              }}
              onClick={() =>
                window.open("https://www.github.com/ghero56", "_blank")
              }
            />
          </Grid>
          <Grid item sm={2}>
            <ContactPhoneIcon
              sx={{
                color: "secondary.main",
                fontSize: "2rem",
                cursor: "pointer",
                transition: "font-size 0.2s",
                "&:hover": {
                  fontSize: "2.5rem",
                },
              }}
              onClick={() =>
                window.open("https://wa.me/525587746122", "_blank")
              }
            />
          </Grid>
          <Grid item sm={2}>
            <FmdGoodIcon
              sx={{
                color: "secondary.main",
                fontSize: "2rem",
                cursor: "pointer",
                transition: "font-size 0.2s",
                "&:hover": {
                  fontSize: "2.5rem",
                },
              }}
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/gmphqwMJzx8612Ds7",
                  "_blank",
                )
              }
            />
          </Grid>
          <Grid item sm={12}>
            <Typography
              sx={{
                textAlign: "center",
                color: "text.secondary",
                fontSize: "14px",
              }}
            >
              © 1999-{year} Ghero56. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

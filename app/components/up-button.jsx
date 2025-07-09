"use client";
import React from "react";
import { Typography } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";

const GoUpButton = ({ handleScrollUp, showGoTop }) => {
  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: 16,
        left: 16,
        bgcolor: "primary.main",
        boxShadow: 3,
        zIndex: 1000,
      }}
      style={{ display: showGoTop ? "block" : "none" }}
      color="secondary"
      variant="extended"
      aria-label="scroll to top"
      onClick={handleScrollUp}
    >
      <NavigationIcon sx={{ mr: 1 }} />
      <Typography variant="button" sx={{ textTransform: "none" }}>
        Go Up
      </Typography>
    </Fab>
  );
};

export default GoUpButton;

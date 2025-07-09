"use client";
import React from "react";
import { Dialog } from "@mui/material";

export const ImageDialog = ({ open, handleClose, image, alt }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <img src={image} alt={alt} style={{ width: "100%" }} />
    </Dialog>
  );
};

export default ImageDialog;

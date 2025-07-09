"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Dialog, Typography, Container, Modal, Box } from "@mui/material/";
import DialogTitle from "@mui/material/DialogTitle";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageDialog from "./image-dialog";

const images = {
  ggj25: [
    { img: "/images/events/ggj2025/image1.jpg", title: "participantes" },
    { img: "/images/events/ggj2025/image2.jpg", title: "foto de equipo" },
    { img: "/images/events/ggj2025/image3.jpg", title: "foto de equipo" },
    { img: "/images/events/ggj2025/image4.jpg", title: "foto de premiación" },
    { img: "/images/events/ggj2025/image5.jpg", title: "foto de premiación" },
    { img: "/images/events/ggj2025/image6.jpg", title: "foto de premiación" },
    { img: "/images/events/ggj2025/image7.jpg", title: "foto de premiación" },
    { img: "/images/events/ggj2025/image8.jpg", title: "foto de presentación" },
    { img: "/images/events/ggj2025/image9.jpg", title: "foto de celebración" },
    { img: "/images/events/ggj2025/image10.jpg", title: "foto de trabajo" },
    { img: "/images/events/ggj2025/image11.jpg", title: "foto de trabajo" },
    { img: "/images/events/ggj2025/image12.jpg", title: "foto de trabajo" },
    { img: "/images/events/ggj2025/image13.jpg", title: "foto de trabajo" },
    { img: "/images/events/ggj2025/image14.jpg", title: "foto de trabajo" },
    { img: "/images/events/ggj2025/image15.jpg", title: "foto de trabajo" },
    { img: "/images/events/ggj2025/image16.jpg", title: "foto de trabajo" },
    { img: "/images/events/ggj2025/image17.jpg", title: "foto de trabajo" },
    { img: "/images/events/ggj2025/image18.jpg", title: "foto de trabajo" },
    { img: "/images/events/ggj2025/image19.jpg", title: "foto de juego" },
    {
      img: "/images/events/ggj2025/image20.jpg",
      title: "foto de la Escuela Nacional de Artes Cinematográficas",
    },
    { img: "/images/events/ggj2025/image21.jpg", title: "foto de equipo" },
    { img: "/images/events/ggj2025/image22.jpg", title: "foto de equipo" },
    { img: "/images/events/ggj2025/image23.jpg", title: "foto de equipo" },
    {
      img: "/images/events/ggj2025/image24.jpg",
      title: "foto de aula de trabajo",
    },
    {
      img: "/images/events/ggj2025/image25.jpg",
      title: "foto de aula de trabajo",
    },
    { img: "images/events/ggj2025/image26.jpg", title: "foto de gafete" },
  ],
  otro: [
    // Añadir imágenes para otro tipo de lista
  ],
};

export const EventDialog = ({ open, onClose, listType }) => {
  const imageList = images[listType] || [];

  const [imageDialogOpen, setImageDialogOpen] = useState(false);

  const [imageItem, setImageItem] = useState(null);

  return (
    <Dialog
      scroll="body"
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      style={{
        backdropFilter: "blur(5px) sepia(5%)",
        backgroundColor: "transparent",
        boxShadow: "inherit",
      }}
      sx={{
        backdropFilter: "blur(5px) sepia(5%)",
        "& .MuiDialog-paper": {
          borderRadius: "45px",
        },
      }}
    >
      <DialogTitle>
        <Typography align="center" sx={{ fontWeight: 700 }}>
          {listType === "ggj25"
            ? "Global Game Jam 2025 Images"
            : "Other Images"}
        </Typography>
      </DialogTitle>
      <Container>
        <ImageList variant="masonry" cols={3} gap={8}>
          {imageList.map((item, index) => (
            <ImageListItem
              key={index}
              onClick={() => {
                (setImageDialogOpen(true),
                  console.log("Image clicked"),
                  setImageItem(item));
              }}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <ImageDialog
        open={imageDialogOpen}
        handleClose={() => setImageDialogOpen(false)}
        image={imageItem?.img}
        alt={imageItem?.title}
      />
    </Dialog>
  );
};

EventDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  listType: PropTypes.oneOf(["ggj25", "otro"]).isRequired,
};

export default EventDialog;

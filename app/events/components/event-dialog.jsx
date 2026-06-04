"use client";
import React, { useState } from "react";
import { Dialog, Typography, Container, Box, Button } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ImageDialog from "./image-dialog";
import { useLanguage } from "../../layout";

// Local WebP teaser images. The full set lives in the linked Google Photos album.
const ggj25 = Array.from({ length: 26 }, (_, i) => ({
  img: `/images/events/ggj2025/image${i + 1}.webp`,
  title: `Global Game Jam 2025 — ${i + 1}`,
}));

const ggj26 = Array.from({ length: 8 }, (_, i) => ({
  img: `/images/events/ggj2026/image${i + 1}.webp`,
  title: `Global Game Jam 2026 — ${i + 1}`,
}));

const imageSets = { ggj25, ggj26 };

export const EventDialog = ({ open, onClose, event }) => {
  const { t } = useLanguage();
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const imageList = (event && imageSets[event.listType]) || [];

  return (
    <Dialog
      scroll="body"
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        backdropFilter: "blur(5px) sepia(5%)",
        "& .MuiDialog-paper": { borderRadius: "32px" },
      }}
    >
      <DialogTitle>
        <Typography align="center" sx={{ fontWeight: 700, fontSize: "1.4rem" }}>
          {event?.title}
        </Typography>
      </DialogTitle>

      <Container sx={{ pb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: imageList.length ? 3 : 1,
          }}
        >
          <Button
            variant="contained"
            startIcon={<PhotoLibraryIcon />}
            href={event?.album}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderRadius: 2, fontWeight: 700 }}
          >
            {t.events.albumButton}
          </Button>
        </Box>

        {imageList.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ pb: 2 }}>
            {t.events.albumNote}
          </Typography>
        ) : (
          <ImageList variant="masonry" cols={3} gap={8}>
            {imageList.map((item, index) => (
              <ImageListItem
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                  setImageDialogOpen(true);
                }}
                sx={{ cursor: "pointer" }}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Container>

      <ImageDialog
        open={imageDialogOpen}
        handleClose={() => setImageDialogOpen(false)}
        images={imageList}
        startIndex={selectedIndex}
      />
    </Dialog>
  );
};

export default EventDialog;

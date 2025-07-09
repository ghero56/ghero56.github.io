"use client";
import React, { useState, useEffect, act } from "react";
import { Grid, Typography, Box, Modal, Link } from "@mui/material";
import { styled } from "@mui/system";

const HoverGrid = styled(Box)(({ imgurl, fullsize }) => ({
  position: "relative",
  overflow: "hidden",
  height: fullsize ? 700 : 350,

  width: "100%",

  backgroundImage: `url(${imgurl})`,

  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
  "&:hover .overlay": {
    opacity: 1,
  },
  "&:hover .image": {
    filter: "blur(4px)",
    transform: "scale(1.05)",
  },
  borderRadius: "12px",
}));

const ImageLayer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  transition: "filter 0.3s ease, transform 0.3s ease",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const Overlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== "transition",
})(({ transition = false }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: transition ? 0 : 1,
  transition: transition ? "opacity 0.3s ease" : "none",
}));

const ImageHoverItem = ({ imgUrl, title, fullsize, transition = false }) => (
  <HoverGrid
    imgurl={imgUrl}
    fullsize={fullsize ? 1 : undefined}
    className="hover-grid"
  >
    <ImageLayer
      className="image"
      style={{ backgroundImage: `url(${imgUrl})` }}
    />
    <Overlay transition={transition} className="overlay">
      <Typography variant="h4" color="common.white">
        {title}
      </Typography>
    </Overlay>
  </HoverGrid>
);

function Gallery({
  data,
  showTitle = false,
  carrousel = false,
  enableClick = true,
  transitionDuration = 2000,
  fullSize = false,
}) {
  const [activeImage, setActiveImage] = useState(null);

  const [openGallery, setOpenGallery] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    carrousel && data.length > 0 ? data[0] : null,
  );

  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!selectedItem?.imgUrl) return;

    const images = Array.isArray(selectedItem.imgUrl)
      ? selectedItem.imgUrl
      : [selectedItem.imgUrl];
    let index = 0;

    setActiveImage(images[0]);
    setFade(true);

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        index = (index + 1) % images.length;
        setActiveImage(images[index]);
        setFade(true); // actually is not used
      }, 300); // fade out duration
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [selectedItem, transitionDuration]);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpenGallery(true);
  };

  const handleClose = () => {
    setOpenGallery(false);
    setSelectedItem(null);
  };

  return (
    <>
      {data.map((item, index) => (
        <Grid
          xs={12}
          sm={fullSize ? 12 : 6}
          md={fullSize ? 12 : 4}
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
          onClick={() => (enableClick ? handleOpen(item) : null)} // Set the gallery to open on click
        >
          <ImageHoverItem
            fullsize={fullSize}
            imgUrl={
              carrousel
                ? activeImage
                : Array.isArray(item.imgUrl)
                  ? item.imgUrl[0]
                  : item.imgUrl
            }
            title={item.title}
            transition={!showTitle}
          />
        </Grid>
      ))}
      <Modal open={openGallery} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${activeImage})`,
            backgroundSize: "max(75%, 75%)",
            backgroundPosition: "center",
            sx: {
              mt: 100,
              ml: 100,
              mr: 100,
              mb: 100,
              backgroundColor: "rgba(0,0,0,0.85)",
            },
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",

            display: "flex",
            margin: "auto",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            padding: "40px",
            textAlign: "center",
            zIndex: 1300,
            overflow: "auto",
            maxHeight: "100vh",
            maxWidth: "100vw",
          }}
        >
          {selectedItem && (
            <Box
              sx={{
                maxWidth: "50%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: 24,
                color: "main.primary",
                textAlign: "center",
              }}
            >
              <Typography variant="h3" gutterBottom>
                {selectedItem.title}
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: "auto" }}>
                {selectedItem.description}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "20px", color: "main.primary" }}
              >
                <strong>Platform:</strong> {selectedItem.platform || "N/A"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "20px", color: "main.primary" }}
              >
                <strong>Year:</strong> {selectedItem.year || "N/A"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "20px", color: "main.primary" }}
              >
                <Link
                  href={
                    selectedItem.source === "none" ? "#" : selectedItem.source
                  }
                  sx={{
                    marginTop: "20px",
                    color: "main.primary",
                    textDecoration: "underline",
                  }}
                  onClick={() =>
                    selectedItem.source === "none"
                      ? handleClose()
                      : window.open(selectedItem.source)
                  }
                  underline="hover"
                >
                  {selectedItem.source == "none" ? "Go back" : "View More"}
                </Link>
              </Typography>
              {selectedItem.source !== "none" && (
                <Typography
                  align="center"
                  variant="body2"
                  sx={{ marginTop: "20px", color: "main.primary" }}
                >
                  <Link
                    href="#"
                    onClick={handleClose}
                    sx={{
                      marginTop: "20px",
                      color: "main.secondary",
                      textDecoration: "underline",
                    }}
                    underline="hover"
                  >
                    Go back
                  </Link>
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default Gallery;

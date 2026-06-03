"use client";
import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, Box, Modal, Link } from "@mui/material";
import { styled } from "@mui/system";
import { useLanguage } from "../../layout";

const HoverGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== "imgurl" && prop !== "fullsize",
})(({ imgurl, fullsize }) => ({
  position: "relative",
  overflow: "hidden",
  height: fullsize ? 700 : 350,
  width: "100%",
  backgroundColor: "rgba(87,143,202,0.12)", // placeholder while not loaded
  backgroundImage: imgurl ? `url(${imgurl})` : "none",
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

// Only mounts its (often heavy) media while near the viewport. For animated
// projects it renders a hardware-decoded <video>; when scrolled away the video
// is unmounted so the browser stops decoding it. This bounds how much animated
// media decodes at once and is what keeps weak mobile devices from crashing.
const ImageHoverItem = ({ imgUrl, video, title, fullsize, transition = false }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "300px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showVideo = inView && Boolean(video);
  const activeUrl = inView && !video ? imgUrl : undefined;

  return (
    <HoverGrid
      ref={ref}
      imgurl={activeUrl}
      fullsize={fullsize ? 1 : undefined}
      className="hover-grid"
    >
      {showVideo ? (
        <video
          className="image"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "filter 0.3s ease, transform 0.3s ease",
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <ImageLayer
          className="image"
          style={{ backgroundImage: activeUrl ? `url(${activeUrl})` : "none" }}
        />
      )}
      <Overlay transition={transition} className="overlay">
        <Typography variant="h4" color="common.white">
          {title}
        </Typography>
      </Overlay>
    </HoverGrid>
  );
};

function Gallery({
  data,
  showTitle = false,
  carrousel = false,
  enableClick = true,
  transitionDuration = 2000,
  fullSize = false,
}) {
  const { t, lang } = useLanguage();
  const [activeImage, setActiveImage] = useState(null);
  const [openGallery, setOpenGallery] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    carrousel && data.length > 0 ? data[0] : null,
  );

  useEffect(() => {
    if (!selectedItem) return;
    // Video items don't cycle images (avoids loading the heavy source webp).
    if (selectedItem.video) {
      setActiveImage(null);
      return;
    }
    if (!selectedItem.imgUrl) return;

    const images = Array.isArray(selectedItem.imgUrl)
      ? selectedItem.imgUrl
      : [selectedItem.imgUrl];
    let index = 0;
    setActiveImage(images[0]);

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setActiveImage(images[index]);
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

  const descriptionOf = (item) =>
    lang === "es" && item?.descriptionEs ? item.descriptionEs : item?.description;

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
          onClick={() => (enableClick ? handleOpen(item) : null)}
        >
          <ImageHoverItem
            fullsize={fullSize}
            video={carrousel ? undefined : item.video}
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
            backgroundColor: "rgba(0,0,0,0.85)",
            backgroundImage: selectedItem?.video
              ? "none"
              : `url(${activeImage})`,
            backgroundSize: "max(75%, 75%)",
            backgroundPosition: "center",
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
                maxWidth: { xs: "90%", md: "50%" },
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: 24,
                color: "common.white",
                textAlign: "center",
              }}
            >
              <Typography variant="h3" gutterBottom>
                {selectedItem.title}
              </Typography>

              {selectedItem.video && (
                <Box
                  component="video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  sx={{
                    width: "100%",
                    maxHeight: "50vh",
                    borderRadius: "12px",
                    mb: 2,
                    backgroundColor: "#000",
                  }}
                >
                  <source src={selectedItem.video} type="video/mp4" />
                </Box>
              )}

              <Typography variant="body1" sx={{ maxWidth: "auto" }}>
                {descriptionOf(selectedItem)}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "20px" }}>
                <strong>{t.projects.modal.platform}:</strong>{" "}
                {selectedItem.platform || "N/A"}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "20px" }}>
                <strong>{t.projects.modal.year}:</strong>{" "}
                {selectedItem.year || "N/A"}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "20px" }}>
                <Link
                  href={selectedItem.source === "none" ? "#" : selectedItem.source}
                  sx={{
                    marginTop: "20px",
                    color: "common.white",
                    textDecoration: "underline",
                  }}
                  onClick={() =>
                    selectedItem.source === "none"
                      ? handleClose()
                      : window.open(selectedItem.source)
                  }
                  underline="hover"
                >
                  {selectedItem.source === "none"
                    ? t.projects.modal.goBack
                    : t.projects.modal.viewMore}
                </Link>
              </Typography>
              {selectedItem.source !== "none" && (
                <Typography
                  align="center"
                  variant="body2"
                  sx={{ marginTop: "20px" }}
                >
                  <Link
                    href="#"
                    onClick={handleClose}
                    sx={{
                      marginTop: "20px",
                      color: "common.white",
                      textDecoration: "underline",
                    }}
                    underline="hover"
                  >
                    {t.projects.modal.goBack}
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

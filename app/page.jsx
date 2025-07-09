"use client";
import { Link, Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
      <Image
        src="/images/projects/software/aliat/7.webp"
        alt="Under Construction"
        width={300}
        height={300}
        style={{ marginBottom: 32 }}
      />
      <Typography variant="h3" fontWeight={700} mb={2} align="center">
        Work in progress...
      </Typography>
      <Typography variant="body1" fontSize="1.25rem" align="center" mb={2}>
        This page is under construction. Please check back later.
      </Typography>
      <Typography variant="body2" fontSize="1.1rem" align="center" mb={3}>
        In the meantime, you can check out my projects hosted on this github
        page.
      </Typography>
      <Link
        href="/projects"
        underline="none"
        sx={{
          bgcolor: "primary.main",
          color: "text.secondary",
          px: 3,
          py: 1,
          borderRadius: 2,
          fontWeight: 600,
          fontSize: "1.1rem",
          boxShadow: 2,
          transition: "background 0.2s",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        Go to projects
      </Link>
    </Box>
  );
}

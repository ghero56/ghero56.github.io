"use client";

import React, { useState } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { Card, Container, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EventDialog from "./components/event-dialog";
import { useLanguage } from "../layout";

const ALBUM_2026 = "https://photos.app.goo.gl/GNxtTCL3hG78hUct6";
const ALBUM_2025 = "https://photos.app.goo.gl/iSyWgSi2GZzVanM67";

export default function CustomizedTimeline() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);

  const events = [    
    {
      year: "2025",
      title: t.events.ggj2025Title,
      desc: t.events.ggj2025Desc,
      cover: "/images/events/ggj2025/portada.webp",
      album: ALBUM_2025,
      listType: "ggj25",
    },
    {
      year: "2026",
      title: t.events.ggj2026Title,
      desc: t.events.ggj2026Desc,
      // TODO: replace with a GGJ 2026 cover photo when available.
      cover: "/images/events/ggj2026/portada.webp",
      album: ALBUM_2026,
      listType: "ggj26",
    },
    {
      year: "20XX",
      title: t.events.comingSoonTitle,
      desc: t.events.comingSoonDesc,
      cover: "/images/events/coming-soon/coming-soon.jpg",
      placeholder: true,
    },
  ];

  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Timeline position="alternate">
        <Typography variant="h6" align="center" fontSize={35} sx={{ mb: 4 }}>
          {t.events.intro}
        </Typography>
        {events.map((ev, i) => (
          <TimelineItem key={ev.year}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              {ev.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SportsEsportsIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "24px", px: 2 }}>
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "transform 0.25s, box-shadow 0.25s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <CardActionArea
                  onClick={() => (ev.placeholder ? null : setSelected(ev))}
                >
                  <CardMedia
                    component="img"
                    image={ev.cover}
                    alt={ev.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {ev.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {ev.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <EventDialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        event={selected}
      />
    </Container>
  );
}

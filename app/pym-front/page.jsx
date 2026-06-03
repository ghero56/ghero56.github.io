"use client";
import React from "react";
import ProjectShowcase from "../projects/components/ProjectShowcase";

export default function CursosPymPage() {
  return (
    <ProjectShowcase
      title="Cursos PyM"
      description="Online learning platform with JWT authentication, roles, video streaming and real-time chat. Built with Next.js, Flask and MongoDB."
      descriptionEs="Plataforma de cursos en línea con autenticación JWT, roles, streaming de video y chat en tiempo real. Hecha con Next.js, Flask y MongoDB."
      descriptionHe="פלטפורמת לימוד מקוונת עם אימות JWT, הרשאות, סטרימינג וידאו וצ'אט בזמן אמת. נבנתה עם Next.js, Flask ו-MongoDB."
      externalUrl="https://cursopym.com.mx/"
      images={[
        "/images/projects/software/cursos-pym/image1.webp",
        "/images/projects/software/cursos-pym/image2.webp",
        "/images/projects/software/cursos-pym/image3.webp",
        "/images/projects/software/cursos-pym/image4.webp",
        "/images/projects/software/cursos-pym/image5.webp",
        "/images/projects/software/cursos-pym/image6.webp",
      ]}
    />
  );
}

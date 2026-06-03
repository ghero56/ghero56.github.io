"use client";
import React from "react";
import ProjectShowcase from "../projects/components/ProjectShowcase";

export default function AeroLaundryPage() {
  return (
    <ProjectShowcase
      title="AeroLaundry"
      description="Website for a laundry business in Tláhuac, Mexico City. Built in February 2026 with Node.js, deployed on GitHub Pages with a CI/CD pipeline."
      descriptionEs="Página web para una lavandería en Tláhuac, Ciudad de México. Hecha en febrero de 2026 con Node.js y desplegada en GitHub Pages con CI/CD."
      descriptionHe="אתר עבור מכבסה בטלאוואק, מקסיקו סיטי. נבנה בפברואר 2026 עם Node.js, ופורסם ב-GitHub Pages עם תהליך CI/CD."
      images={[
        "/images/projects/software/aerolaundry/image1.webp",
        "/images/projects/software/aerolaundry/image2.webp",
        "/images/projects/software/aerolaundry/image3.webp",
      ]}
    />
  );
}

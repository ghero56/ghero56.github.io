"use client";
import React from "react";
import ProjectShowcase from "../projects/components/ProjectShowcase";

export default function AeroLaundryPage() {
  return (
    <ProjectShowcase
      title="AeroLaundry"
      description="Web application for managing a laundry service, with order tracking and a clean, responsive interface."
      descriptionEs="Aplicación web para la gestión de un servicio de lavandería, con seguimiento de pedidos y una interfaz limpia y responsiva."
      images={[
        "/images/projects/software/aerolaundry/image1.webp",
        "/images/projects/software/aerolaundry/image2.webp",
        "/images/projects/software/aerolaundry/image3.webp",
      ]}
    />
  );
}

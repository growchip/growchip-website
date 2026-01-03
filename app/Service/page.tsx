import HeroSection from "@/components/Service/HeroSection";
import OurStack from "@/components/Service/OurStack";
import ServiceAccordingNavbar from "@/components/Service/services According/ServiceAccordingNavbar";
import { Metadata } from "next";
import React from "react";

function page() {
  return (
    <div>
      <HeroSection />

      <ServiceAccordingNavbar />
      <OurStack />
    </div>
  );
}

export default page;

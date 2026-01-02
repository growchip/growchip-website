import HeroSection from "@/Component/service/HeroSection";
import OurStack from "@/Component/service/OurStack";
import ServiceAccordingNavbar from "@/Component/service/services According/ServiceAccordingNavbar";
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

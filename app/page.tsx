
"use client";
import WhatWeOffer from '@/Component/landing/WhatWeOffer';
import HeroSectionpage from '../Component/landing/HeroSection'
import ThirdSection from "@/Component/landing/Productsthatdefine"
import UpCommingSection from '@/Component/landing/UpCommingSection';
import Testimoinal from '@/Component/landing/Testimoinal';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OurProcess from '@/Component/landing/OurExpeties';
import FAQsection from '@/Component/landing/FAQsection';
import Aipowered from '@/Component/landing/Aipowered';
import Automate from '@/Component/landing/Aiptowered2';
import PartnerLogocarousle from '@/Component/landing/OurAssociates';
import BarComponent from '@/Component/landing/LocationWeServe'
import LastSection from '@/Component/landing/LastSection';




export default function Home() {
  return (
    <>
      <HeroSectionpage />
      <PartnerLogocarousle />
      <WhatWeOffer />
      <ThirdSection />
      <OurProcess />
      <UpCommingSection />
      <Aipowered />
      <FAQsection />
      <BarComponent />
      <Testimoinal />

    </>
  );
}

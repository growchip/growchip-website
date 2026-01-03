
"use client";
import WhatWeOffer from '@/components/landing/WhatWeOffer';
import HeroSectionpage from '../components/landing/HeroSection'
import ThirdSection from "@/components/landing/Productsthatdefine"
import UpCommingSection from '@/components/landing/DrivingGrowth';
import Testimoinal from '@/components/landing/WhatAreClient';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OurProcess from '@/components/landing/OurExpeties';
import FAQsection from '@/components/landing/FAQsection';
import Aipowered from '@/components/landing/Aipowered';

import PartnerLogocarousle from '@/components/landing/TrustedBy';
import BarComponent from '@/components/landing/LocationWeServe'





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

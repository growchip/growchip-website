
"use client";
import WhatWeOffer from '@/Component/landing/WhatWeOffer';
import HeroSectionpage from '../Component/landing/HeroSection'
import ThirdSection from "@/Component/landing/Productsthatdefine"
import UpCommingSection from '@/Component/landing/DrivingGrowth';
import Testimoinal from '@/Component/landing/WhatAreClient';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OurProcess from '@/Component/landing/OurExpeties';
import FAQsection from '@/Component/landing/FAQsection';
import Aipowered from '@/Component/landing/Aipowered';

import PartnerLogocarousle from '@/Component/landing/TrustedBy';
import BarComponent from '@/Component/landing/LocationWeServe'





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

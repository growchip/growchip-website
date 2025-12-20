
 "use client";
import WhatWeOffer from '@/Component/home/WhatWeOffer';
import HeroSectionpage from '../Component/home/HeroSection'
import ThirdSection from "@/Component/home/ThirdSection"
import UpCommingSection from '@/Component/home/UpCommingSection';
import Testimoinal from '@/Component/home/Testimoinal';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



export default function Home() {
  return (
 <>
<div className='max-w-40vw'> 
  <HeroSectionpage/>
<WhatWeOffer/>
 <ThirdSection/>
 <UpCommingSection/>
 <Testimoinal/>
</div>
 </>
  );
}

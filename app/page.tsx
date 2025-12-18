
 "use client";
import WhatWeOffer from '@/Component/home/WhatWeOffer';
import HeroSectionpage from '../Component/home/HeroSection'
import ThirdSection from "@/Component/home/ThirdSection"
import UpCommingSection from '@/Component/home/UpCommingSection';
import Testimoinal from '@/Component/home/Testimoinal';


export default function Home() {
  return (
 <>
<HeroSectionpage/>
<WhatWeOffer/>
 <ThirdSection/>
 <UpCommingSection/>
 <Testimoinal/>
 </>
  );
}

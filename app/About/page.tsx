import React from 'react'
import StatsCard from '@/Component/About/StatsCard'
import HeroSection from '@/Component/About/HeroSection'
import MeetOurTEAM from '@/Component/About/MeetOurTEAM'
import WhyChoseUs from '@/Component/About/WhyChoseUs'
import PartnerLogocarousle from '@/Component/About/PartnerLogocarousle'
import Values  from "@/Component/About/values"

{/* this is  About page */}
function page() {
  return (
    <>
<Values/>
   
   <StatsCard/>   
   <MeetOurTEAM/> 
   
   <PartnerLogocarousle/>
   <WhyChoseUs/>
     
    
    </>
  )
}

export default page
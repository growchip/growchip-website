import React from 'react'
import StatsCard from '@/Component/about/StatsCard'
import HeroSection from '@/Component/about/HeroSection'
import MeetOurTEAM from '@/Component/about/MeetOurTEAM'
import WhyChoseUs from '@/Component/about/WhyChoseUs'

import Values  from "@/Component/about/values"
import { Metadata } from 'next'

export const metadata: Metadata ={
  title:"About Us | Growchip AI Technologies",
  description:"Growchip AI Technologies is a leading digital marketing company in Chandigarh. We offer a complete range of Web Development & Designing Services with IT and E-Commerce Solutions."
  
}
{/* this is  About page */}
function page() {
  return (
    <>
   <Values/>
   <StatsCard/>   
   <MeetOurTEAM/> 
   <WhyChoseUs/>
     
    
    </>
  )
}

export default page
import React from 'react'
import StatsCard from '@/components/About/StatsCard'
import HeroSection from '@/components/About/HeroSection'
import MeetOurTEAM from '@/components/About/MeetOurTEAM'
import WhyChoseUs from '@/components/About/WhyChoseUs'

import Values  from "@/components/About/values"
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
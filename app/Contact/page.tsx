"use Client"

import From from '@/Component/contact/From'
import HeroSection from '@/Component/contact/HeroSection'
import OurStack from '@/Component/service/OurStack'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Page | Growchip AI Technologies",
  description: " Growchip AI Technologies is the best Digital Marketing Agency in Chandigarh and Panchkula. we provide quality which drive results and growth of our customers. ",
  keywords: "",
  authors: [{ name: "Rajveer Chauhan" }, { name: "GrowChip Ai teachnlogoy" }]
};
{/* this is the Contact Page  */ }
function page() {
  return (
    <>
      <HeroSection />
      <From />

    </>

  )
}

export default page
import React from 'react'
import { useState, useEffect  } from 'react';

export interface CarouselCard {
  id: number;
  title: string;
  desc: string;
  rating: number;
  image: string;
}
export const carouselData:CarouselCard[] = [
    
  
  ]
function caroulse( ) {
     
      
  return (
   <>
 <div
  className=" relative w-full bg-black py-12 sm:py-16 lg:py-10 flex items-center justify-center overflow-hidden "
 
>
  {/* Carousel */}
  <div
    className="  relative w-full max-w-7xl  h-[360px] sm:h-[420px] lg:h-[520px]  flex items-center justify-center  perspective-[800px] sm:perspective-[1000px] lg:perspective-[1200px]  "
  >
    {carouselData.map((card, index) => {
      const offset = index - active;
      const isActive = offset === 0;

      return (
        
   </>
  )
}

export default caroulse
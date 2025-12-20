
import React from 'react'
import OurService from "@/public/image/grow.jpg"
function HeroSection() {
  return (
  <>
   
   <div
  className="text-start max-w-screen min-h-[80vh]"
  style={{
    backgroundImage: `url(${OurService.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="px-16 pt-24">
    <h1 className="text-[90px] font-bold">Our Services</h1>
    <p className="mt-4 ">We are customers very satisfied</p>
    <button className="mt-6 px-6 py-3 bg-black text-white rounded">
      Contact us
    </button>
  </div>
</div>
  </>
  )
}

export default HeroSection
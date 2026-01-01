import React from 'react'
import laptopImage from "@/public/image/ther.jpg"
import Image from 'next/image'
import Buttons from '../Buttons'

function Aipowered() {
  return (
    <div
      className=" max-w-6xl mx-auto bg-gray-800 rounded-2xl sm:rounded-3xl px-4 sm:px-8 md:px-10 lg:px-10 py-6 sm:py-10 lg:py-16 mt-10 sm:mt-14 lg:mt-20 "
    >
      <div
        className=" max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 "
      >
        {/* Content */}
        <div className=" text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold pb-1 sm:pb-2">
            Beyond Digital Marketing –   <span className=" pt-1 text-green-600 "> Innovating Products </span>That Change the Game
          </h2>
          <h3 className="sm:text-xs  md:text-xs  lg:text- pb-4 sm:pb-6">
            Growchip: Where Enterprise-Grade Products Meet Unmatched Quality & Client Growth
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-lg max-w-md sm:max-w-lg lg:max-w-xl leading-relaxed mx-auto lg:mx-0">
            At GrowChip, digital marketing is just the trailer—powerful, result-driven, and designed to boost growth. But it’s only 10% of our vision. Our real focus is building market-cracking products that redefine industries, empower businesses, and deliver measurable impact at scale.
            <br />
            <br />
            We are not just a Chandigarh-based IT and digital marketing company. We are a hardcore product-first organization, driven by IITians and Big-4 tech experts who design, develop, and deploy enterprise-grade software, AI solutions, and cloud-based innovations for clients in India and globally.

          </p>
           <Buttons text="Follow us For Updates " link="#" />
        </div>

        {/* Image */}
        <div className=" flex justify-center">
          <Image
            src={laptopImage.src}
            alt="Laptop illustration"
            width={400}
            height={200}
            className=" max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-2xl object-cover "
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Aipowered
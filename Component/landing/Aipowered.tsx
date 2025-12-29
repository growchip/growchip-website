import React from 'react'
import laptopImage from "@/public/image/ther.jpg"
import Image from 'next/image'

function Aipowered() {
    return (
        <div
  className="
    max-w-7xl mx-auto
    bg-gray-400
    rounded-2xl sm:rounded-3xl
    px-4 sm:px-8 md:px-10 lg:px-16
    py-6 sm:py-10 lg:py-16
    mt-10 sm:mt-14 lg:mt-20
  "
>
  <div
    className="
      flex flex-col-reverse
      lg:flex-row
      items-center
      gap-8 sm:gap-10 lg:gap-16
    "
  >
    {/* Content */}
    <div className=" text-center lg:text-left">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold pb-4 sm:pb-6">
        Advanced AI & Machine Learning Services for Businesses 
      </h2>

      <p className="text-sm sm:text-base md:text-lg lg:text-lg max-w-md sm:max-w-lg lg:max-w-xl leading-relaxed mx-auto lg:mx-0">
        Products that define excellence are built with purpose, precision, and
        an uncompromising focus on quality. They don’t just meet expectations—
        they raise the bar through thoughtful design, reliable performance, and
        attention to detail.
      </p>
    </div>

    {/* Image */}
    <div className=" flex justify-center">
      <Image
        src={laptopImage.src}
        alt="Laptop illustration"
        width={400}
        height={200}
        className="
         
          max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
          h-auto
          rounded-2xl
          object-cover
        "
        priority
      />
    </div>
  </div>
</div>
    )
}

export default Aipowered
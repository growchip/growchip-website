import React, { useEffect, useState } from 'react'
import clientImaage from "@/public/image/ceo.webp"
import Image from 'next/image';
import Rating from '../Rating';

const items = [
  {
    id: 1,
    title: "Rajveer",
    desc: "Build responsive, SEO-optimized websites and apps that scale globally. Trusted by Chandigarh, Indian, and international clients.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  }, {
    id: 2,
    title: "Rajveer",
    desc: "Build responsive, SEO-optimized websites and apps that scale globally. Trusted by Chandigarh, Indian, and international clients.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  }, {
    id: 3,
    title: "Rajveer",
    desc: "Build responsive, SEO-optimized websites and apps that scale globally. Trusted by Chandigarh, Indian, and international clients.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  }, {
    id: 4,
    title: "Rajveer",
    desc: "Build responsive, SEO-optimized websites and apps that scale globally. Trusted by Chandigarh, Indian, and international clients.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  }, {
    id: 5,
    title: "Rajveer",
    desc: "Build responsive, SEO-optimized websites and apps that scale globally. Trusted by Chandigarh, Indian, and international clients.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  }, {
    id: 6,
    title: "Rajveer",
    desc: "Build responsive, SEO-optimized websites and apps that scale globally. Trusted by Chandigarh, Indian, and international clients.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },

];


function Testimoinal() {


  return (
    <>
      {/* Section Header */}
      <div className=" max-w-7xl mx-auto flex items-center py-12 sm:py-16 md:py-18 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-16 ">
        <div className="w-full">
          <div className="p-0 sm:p-4 lg:p-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              What are Client's Say about us.....
            </h2>
          </div>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto flex items-center py-12 sm:py-16 md:py-18 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-16 ">
        <div className="relative w-full overflow-hidden">
          {/* Gradient fade (optional) */}

          {/* Scrolling Track */}
          <div className="flex w-max animate-scroll gap-6">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] rounded-xl bg-gray-800 p-6 shadow-md "
              >
                <div className=' flex  flex-col justify-end items-end '>

                  <div className='flex justify-start gap-5 items-start'>
                    <div>
                      <Image className='rounded-full w-19 h-19' src={clientImaage.src} alt="clientImage" width="50" height="50" />
                    </div>
                    <div>
                      <h2>{item.title} </h2>
                      <div className='flex gap-1'>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          viewBox="0 0 24 24"
                          className={`w-5 h-5 ${star <= item.rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                          fill="currentColor"
                        >
                          <path d="M12 2l2.94 6.63L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.06-.64L12 2z" />
                        </svg>
                      ))} </div>
                      <p className="text-sm max-w-[260px]  text-gray-500 mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

             
         
          </div>
        ))}
        </div>
      </div>
    </div >
      <style>
        {`@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

/* Pause on hover (optional)*/ 
.animate-scroll:hover {
  animation-play-state: paused;
} `}
      </style>
 
    </>
  )
}

export default Testimoinal
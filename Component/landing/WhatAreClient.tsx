import React, { useEffect, useState } from 'react'
import clientImaage from "@/public/image/ceo.webp"
import Image from 'next/image';
import Rating from '../Rating';
import { ImageError } from 'next/dist/server/image-optimizer';

 const image ="https://res.cloudinary.com/dlb4q6oje/image/upload/v1767335446/user_pumhjc.png"
const items = [
  {
    id: 1,
    title: "Yuvraj Singh Pawar",
    desc: "Excellent tech service website—fast, reliable, and easy to use. The team delivers high-quality solutions with great support and clear communication.",
    rating: 5,
   
  }, {
    id: 2,
    title: "Arindam Gupta",
    desc: "A reliable and professional tech service platform that’s easy to navigate. The quality of service and attention to detail are impressive.",
    rating: 4,
   
  }, {
    id: 3,
    title: "Vipin Chauhan",
    desc: "Excellent tech service website offering fast, secure, and efficient solutions. Customer support is helpful and highly knowledgeable.",
    rating: 3,
   
  }, {
    id: 4,
    title: "Arjun Singh Rawat",
    desc: "Great tech service website with a clean design and smooth performance. Support is responsive and solutions are delivered on time.",
    rating: 4.8,
    
  }, {
    id: 5,
    title: "Simaran Kaur",
    desc: "Professional and user-friendly tech service platform. Everything works smoothly and support is always ready to help.",
    rating: 4.8,
  },{
    id: 6,
    title: "Namita Rawat",
    desc: "Outstanding tech service website with modern design and fast loading speed. The service quality truly exceeds expectations.",
    rating: 5,
    
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
                      <Image className='rounded-full w-19 h-19' src={image} alt="clientImage" width="50" height="50" />
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
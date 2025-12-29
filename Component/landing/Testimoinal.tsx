import React from 'react'
import Carousle from "@/Component/caroulse"
import search from "@/public/image/png/search.png"
import development from "@/public/image/png/devlopment.png"
import customerservice from "@/public/image/png/customer-service.png"
import trading from "@/public/image/png/trading.png"
import Image from 'next/image'
const cards = [
  {
    id: 1,
    src: search.src,
    title: "Discover &  Analysis",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

  }, {
    id: 1,
    src: search.src,
    title: "Discover &  Analysis",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

  }, {
    id: 1,
    src: search.src,
    title: "Discover &  Analysis",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

  }, {
    id: 1,
    src: search.src,
    title: "Discover &  Analysis",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

  }
  
]

function Testimoinal() {
    return (
        <>

           {/* Section Header */}
<div
  className="
    max-w-7xl mx-auto
    flex items-center
    py-12 sm:py-16 md:py-18 lg:py-20
    px-4 sm:px-6 md:px-8 lg:px-16
  "
>
  <div className="w-full">
    <div className="p-0 sm:p-4 lg:p-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
       Grow Chip Clients Testimonials ...
      </h2>
    </div>
  </div>
</div>

{/* Cards Section */}
<div
  className="
    max-w-7xl mx-auto
    px-4 sm:px-6 md:px-8 lg:px-16
    pb-16 sm:pb-20 lg:pb-28
  "
>
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-6 sm:gap-8
      w-full
    "
  >
    {cards.map((card, index) => (
      <div
        key={index}
        className="
          bg-[#191919]
          rounded-xl
          shadow-lg
          p-6 sm:p-8
          cursor-pointer
          transition-all duration-300
          hover:scale-105
          hover:bg-gradient-to-r from-[#84DA2E] to-[#2596BE]
        "
      >
        <Image
          src={card.src}
          alt="card image"
          width={60}
          height={60}
          className="mb-6"
        />

        <h4 className="text-lg sm:text-xl font-light mb-4">
          {card.title}
        </h4>

        <p className="text-xs sm:text-sm text-gray-300">
          {card.desc}
        </p>
      </div>
    ))}
  </div>
</div>

        </>


    )
}

export default Testimoinal
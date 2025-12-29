import React from 'react'
import Image from 'next/image'
import search from "@/public/image/png/search.png"
import development from "@/public/image/png/devlopment.png"
import customerservice from "@/public/image/png/customer-service.png"
import trading from "@/public/image/png/trading.png"

const cards = [
  {
    id: 1,
    src: search.src,
    title: "Discover &  Analysis",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

  },
  {
    id: 2,
    src: development.src,
    title: "Development & integration",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

  },
  {
    id: 3,
    src: trading.src,
    title: "Tesing & Quality Assyrance ",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

  },
  {
    id: 4,
    src: customerservice.src,
    title: "Deploment & Support ",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",


  },
]
function OurProcess() {
  return (
    <>
      <div className="flex flex-col max-w-7xl mx-auto items-center px-4 sm:px-8 lg:px-16 pb-16 sm:pb-24">

        {/* Badge */}
        <span
          className="
      border border-white rounded-3xl
      px-4 py-2 mb-6
      text-sm sm:text-base
      hover:bg-white/80 hover:text-black
      transition-all duration-300
      hover:scale-105
    "
        >
          Our Process
        </span>

        {/* Heading */}
        <div className="text-center max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl flex flex-col lg:text-5xl font-semibold mb-4">
            
  
<span className="px-4  text-white"> Our Step-by-Step Method </span>
  <span className="px-4 pt-3 text-white">for Successful Service Delivery </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300">
            We follow a clear, structured approach to ensure every project runs smoothly.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-6 sm:gap-8
      max-w-7xl
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

export default OurProcess
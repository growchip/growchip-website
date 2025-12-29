import React from 'react'
import Card1 from "@/public/image/card 1.png"
import card2 from "@/public/image/card 2.png"
import sideIamge from "@/public/image/sideImage.png"
import { Key } from 'lucide-react'
import Buttons from '../Buttons'

const cards = [
    {
        id: 1,
        title: "New Tittle",
        desc: "Real-time insights",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
        id: 2,
        title: "New Tittle",
        desc: "Brain-like networks",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
        id: 3,
        title: "New Tittle",
        desc: "Central processing",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
        id: 4,
        title: "New Tittle",
        desc: "Threat detection",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
]
function WhatWeOffer() {



    return (
     <div className="w-ful max-w-7xl mx-auto mt-40">
      
  {/* Heading Section */}
  <div className="flex justify-center items-center flex-col text-center px-4">
    <h2 className="text-4xl sm:text-5xl lg:text-7xl pb-6 sm:pb-8">
     What We Offer
    </h2>

    <p
      className="text-lg sm:text-xl lg:text-3xl pb-6 sm:pb-10 font-light"
    >
      We build an environment together
    </p>

    <Buttons text="Explore" link='#' />
  </div>

  {/* Cards Section */}
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-6 sm:gap-8
      py-12 sm:py-16 lg:py-20
      px-4
      mx-auto
      max-w-6xl
    "
  >
    {cards.map((card, index) => (
      <div
        key={index}
        className="
          bg-[#191919]
          cursor-pointer
          hover:bg-gradient-to-r from-[#84DA2E] to-[#2596BE]
          rounded-xl
          shadow-lg
          p-6 sm:p-8 lg:p-10
          transition-transform duration-300
          hover:scale-105
        "
      >
        <img
          src={Card1.src}
          alt=""
          className="mb-4 w-12 sm:w-14"
        />

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extralight mb-4 sm:mb-6">
          {card.title}
        </h2>

        <p className="text-sm sm:text-base lg:text-lg">
          {card.desc}
        </p>
      </div>
    ))}
  </div>
</div>

    )
}

export default WhatWeOffer
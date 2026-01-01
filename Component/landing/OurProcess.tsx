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
    title: "Pharmaceuticals ",
    desc: "Digital solutions for patient engagement, hospital management, and pharma operations.",

  },
  {
    id: 2,
    src: development.src,
    title: "Real Estate ",
    desc: "CRM systems, website development, and property marketing solutions.",

  },
  {
    id: 3,
    src: trading.src,
    title: "Retail & E-commerce",
    desc: "Web development, SEO, SMO, and conversion-focused digital marketing.",

  },
  {
    id: 4,
    src: customerservice.src,
    title: "Manufacturing & Supply Chain",
    desc: "ERP systems, cloud integration, and process optimization tools."
  },
  {
    id: 4,
    src: customerservice.src,
    title: "Wedding & Event Management",
    desc: "AI-powered promotions, event websites, and digital marketing campaigns."
  },
{
    id: 4,
    src: customerservice.src,
    title: "Education & EdTech",
    desc: "Learning platforms, SEO-optimized websites, and digital engagement tools."
  },
{
    id: 4,
    src: customerservice.src,
    title: "Hospitality & Travel",
    desc: "Booking platforms, web solutions, and targeted marketing campaigns"
  },
  {
    id: 4,
    src: customerservice.src,
    title: "Media & Entertainment",
    desc: "AI-driven content creation, SEO, and video marketing solutions."
  },

]
function OurProcess() {
  return (
    <>
      <div className="flex flex-col max-w-7xl mx-auto items-center px-4 sm:px-8 lg:px-16 pb-16 sm:pb-24">

        {/* Badge */}
        <span
          className=" border border-white rounded-3xl px-4 py-2 mb-6 text-sm sm:text-base hover:bg-white/80 hover:text-black transition-all duration-300 hover:scale-105 "
        >
          Our Expertise
        </span>

        {/* Heading */}
        <div className="text-center max-w-3xl mb-12">
          <h2 className="inline text-2xl sm:text-3xl md:text-4xl flex flex-col lg:text-5xl font-semibold mb-4">
            
  Industries We   
<span className="text-green-600"> Serve</span>

          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300">
          Delivering tailored IT and digital solutions across sectors to drive growth, efficiency, and innovation.
          </p>
        </div>

        {/* Cards */}
        <div
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl w-full "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className=" bg-[#191919] rounded-xl shadow-lg p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-[#84DA2E] to-[#2596BE] "
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
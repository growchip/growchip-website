import React from "react";
import Image  from "next/image";
import Buttons from "../Buttons";
import DigitalMarketing from "@/public/image/png/Digital.png"
import Software from "@/public/image/png/Enterprise.png"
import Ai from "@/public/image/png/Ai.png"
import customerservice from "@/public/image/png/customerservice.png"

const cards = [
  {
    id: 1,
    src:DigitalMarketing.src,
    title: "Digital Marketing & Digital Presence",
    desc: "Growchip digital marketing solutions focus on generating qualified leads, improving conversion rates, and accelerating business growth across global markets.",
    
  },
  {
    id: 2,
     src:Software.src,
    title: "Enterprise Software Engineering",
    desc: "Secure, scalable, and high-performance applications built to meet global standards and complex business needs.",
    
  },
  {
    id: 3,
    src:Ai.src,
    title: "Data, AI & Advanced Analytics",
    desc: "Unlock insights, accelerate decision-making, and drive innovation with data-driven and AI-powered solutions",
  
  },
  {
    id: 4,
    src:customerservice.src,
    title: "Managed Services & 24/7 Support",
    desc: "Always-on monitoring, proactive management, and global support to keep your business running without disruption.hreat detection",
    
  },
];
function WhatWeOffer() {
  return (
    <div className="w-ful max-w-7xl mx-auto mt-40">
      {/* Heading Section */}
      <div className="flex justify-center items-center flex-col text-center px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl pb-6 sm:pb-4">
          What We Offer
        </h2>

        <p className="text-lg sm:text-xl lg:text-xl pb-6 sm:pb-2 font-light">
         We deliver enterprise-grade IT services designed to help businesses scale, innovate,
        <br/> and stay competitive in a rapidly evolving digital landscape.
        </p>

        <Buttons text="Explore" link="#" />
      </div>

      {/* Cards Section */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 py-12 sm:py-16 lg:py-20 px-4 mx-auto max-w-6xl ">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" bg-[#191919] cursor-pointer hover:bg-gradient-to-r from-[#84DA2E] to-[#2596BE] rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 transition-transform duration-300 hover:scale-105 "
          >
            <Image src={card.src} alt="" height={500} width={800}  className="mb-7  sm:w-14 mb:w-24 lg:w-34 " />
  
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extralight mb-4 sm:mb-6">
              {card.title}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeOffer;

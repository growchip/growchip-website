import React from "react";
import Card1 from "@/public/image/card 1.png";
import card2 from "@/public/image/card 2.png";
import sideIamge from "@/public/image/sideImage.png";
import { Key } from "lucide-react";
import Buttons from "../Buttons";

const cards = [
  {
    id: 1,
    title: "Digital Marketing & Digital Presence",
    desc: "Growchip digital marketing solutions focus on generating qualified leads, improving conversion rates, and accelerating business growth across global markets.",
    
  },
  {
    id: 2,
    title: "Enterprise Software Engineering",
    desc: "Secure, scalable, and high-performance applications built to meet global standards and complex business needs.",
    
  },
  {
    id: 3,
    title: "Data, AI & Advanced Analytics",
    desc: "Unlock insights, accelerate decision-making, and drive innovation with data-driven and AI-powered solutions",
  
  },
  {
    id: 4,
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
            <img src={Card1.src} alt="" className="mb-4 w-12 sm:w-14" />

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

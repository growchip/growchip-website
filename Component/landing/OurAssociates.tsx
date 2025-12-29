
"use client";
import React from 'react'
import { useEffect, useState } from 'react'
import Bio from "@/public/logo/Bio.png"
import Bio2 from '@/public/logo/Rechelist.png'
import bio3 from '@/public/logo/Zoicilfe.png'
import Image from 'next/image';
import { url } from 'inspector';



export const carouselData = [
    {
        id: 1,
        title: "New Tittle",
        src: Bio.src,
    }, 
    {
        id: 2,
        title: "New Tittle",
       src: Bio2.src,
    },
    {
        id: 3,
        title: "New Tittle",
        src: bio3.src,
    },
    {
        id: 4,
        title: "New Tittle",
        src: Bio2.src,
    },
    {
        id: 5,
        title: "New Tittle",
        src: Bio.src,
    },
     {
        id: 6,
        title: "New Tittle",
       src: Bio2.src,
    },
    {
        id: 7,
        title: "New Tittle",
        src: bio3.src,
    },
    {
        id: 8,
        title: "New Tittle",
        src: Bio2.src,
    },
    {
        id: 9,
        title: "New Tittle",
        src: Bio.src,
    }  
    ,]

function PartnerLogocarousle() {
    const [active, setActive] = useState(2);
    const [paused, setPaused] = useState(false);

    const total = carouselData.length;
    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % total);
        }, 1000);

        return () => clearInterval(interval);
    }, [paused, total]);

    return (
        <>
    {/* OUR ASSOCIATES */}
<section className= " max-w-7xl mx-auto bg-black  overflow-hidden py-6 sm:py-8 lg:py-10">
  {/* ⬆️ reduced from py-12 / py-16 / py-20 */}

  {/* Heading */}
  <h2
    className="
      text-center
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl
      font-semibold
      text-white
      mb-6 sm:mb-8 lg:mb-10
    "
  >
    OUR ASSOCIATES
  </h2>

  {/* Carousel Wrapper */}
  <div
    className="relative w-full flex items-center justify-center"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
  >
    {/* Perspective container */}
    <div
      className="
        relative
        w-full
        max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
        h-[140px] sm:h-[160px] md:h-[190px] lg:h-[220px]
        flex items-center justify-center
        overflow-hidden
        perspective-[800px] sm:perspective-[1000px] lg:perspective-[1200px]
        mt-2 sm:mt-4
      "
    >
      {carouselData.map((card, index) => {
        const offset = index - active;
        const isActive = offset === 0;

        return (
          <div
            key={index}
            className="absolute transition-all duration-700 ease-out"
            style={{
              transform: `
                translateX(${offset * 180}px)
                translateZ(${isActive ? 120 : -220}px)
                rotateY(${offset * -22}deg)
                scale(${isActive ? 1.1 : 0.9})
              `,
              opacity: Math.abs(offset) > 2 ? 0 : 1,
              zIndex: 10 - Math.abs(offset),
            }}
          >
            {/* Card */}
            <div
              className={`
                w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]
                h-[110px] sm:h-[130px] md:h-[150px] lg:h-[170px]
                rounded-2xl
                bg-white
                border
                shadow-xl
                flex items-center justify-center
                transition
                ${isActive ? "shadow-cyan-500/30" : "opacity-90"}
              `}
            >
              <Image
                src={card.src}
                alt={card.title}
                width={320}
                height={180}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
       
        </>
    )
}

export default PartnerLogocarousle
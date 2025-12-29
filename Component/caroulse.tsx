import React from 'react'
import { useState, useEffect  } from 'react';

export interface CarouselCard {
  id: number;
  title: string;
  desc: string;
  rating: number;
  image: string;
}
export const carouselData:CarouselCard[] = [
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
    {
        id: 5,
        title: "New Tittle",
        desc: "Identity recognition",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    },]
function caroulse() {
      const [active, setActive] = useState(2);


  const total = carouselData.length;
    useEffect(() => {
  

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 1000); 

    return () => clearInterval(interval);
  }, [ total]);
    
      
  return (
   <>
 <div
  className="
    relative w-full bg-black
    py-12 sm:py-16 lg:py-20
    flex items-center justify-center
    overflow-hidden
  "
 
>
  {/* Carousel */}
  <div
    className="
      relative w-full max-w-7xl
      h-[360px] sm:h-[420px] lg:h-[520px]
      flex items-center justify-center
      perspective-[800px] sm:perspective-[1000px] lg:perspective-[1200px]
    "
  >
    {carouselData.map((card, index) => {
      const offset = index - active;
      const isActive = offset === 0;

      return (
        <div
          key={card.id}
          className="absolute transition-all duration-700 ease-out"
          style={{
            transform: `
              translateX(${
                offset *
                (typeof window !== "undefined" && window.innerWidth < 640
                  ? 160
                  : typeof window !== "undefined" && window.innerWidth < 1024
                  ? 200
                  : 240)
              }px)
              translateZ(${isActive ? 100 : -200}px)
              rotateY(${offset * -20}deg)
              scale(${isActive ? 1.1 : 0.9})
            `,
            opacity: Math.abs(offset) > 2 ? 0 : 1,
            zIndex: 10 - Math.abs(offset),
          }}
        >
          {/* Card */}
          <div
            className="
              w-[260px] sm:w-[300px] lg:w-[340px]
              h-[340px] sm:h-[380px] lg:h-[420px]
              rounded-2xl overflow-hidden
              bg-zinc-900 border border-zinc-700
              shadow-xl
            "
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="h-32 sm:h-36 lg:h-40 w-full object-cover"
            />

            {/* Content */}
            <div className="p-3 sm:p-4 text-white">
              <h3 className="text-base sm:text-lg font-semibold">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                {card.desc}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
   </>
  )
}

export default caroulse

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
            
                {/* Content Of the Our Asscate  */}
                <div className='p-20 text-center text-6xl h-30'> OUR ASSOCIATES</div>
                <div>
                    <div
                        className="relative w-full max-h-screen  mt-19 pb-50 bg-black  flex items-center justify-center"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        {/* Carousel */}
                        <div className="relative w-5xl max-w-6xl h-[220px]   overflow-hidden flex items-center justify-center perspective-[1200px]">
                            {carouselData.map((card, index) => {
                                const offset = index - active;
                                const isActive = offset === 0;

                                return (
                                    <div
                                       key={index}
                                        className="absolute transition-all duration-700 ease-out"
                                        style={{
                                            transform: `
                             translateX(${offset * 240}px)
                             translateZ(${isActive ? 120 : -220}px)
                             rotateY(${offset * -25}deg)
                             scale(${isActive ? 1.15 : 0.9})
                           `,
                                            opacity: Math.abs(offset) > 2 ? 0 : 1,
                                            zIndex: 10 - Math.abs(offset),
                                        }}
                                    >
                                        {/* Card */}
                                        
                                        <div
                                            className={`w-[340px] h-[170px] rounded-2xl overflow-hidden  bg-white border border-white shadow-xl
                                            ${isActive ? "shadow-cyan-500/30" : "opacity-!00"}`}>
                                            {/* Image */}
                                           <div className=' p-4'>
                                             < Image
                                                src={card.src}
                                                alt={card.title}
                                                width={205}
                                                height={600} 

                                                className="h-34  p-2 w-xl"
                                            />

                                           </div>

                                        </div>
                                        
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
       
        </>
    )
}

export default PartnerLogocarousle
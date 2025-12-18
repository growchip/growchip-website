import React from 'react'
import { useState } from 'react';

const cards = [
    {
        id: 1,
        title: "Analytics AI",
        desc: "Real-time insights",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
        id: 2,
        title: "Neural Map",
        desc: "Brain-like networks",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
        id: 3,
        title: "Core System",
        desc: "Central processing",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
        id: 4,
        title: "Security",
        desc: "Threat detection",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
    {
        id: 5,
        title: "Biometrics",
        desc: "Identity recognition",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    },
];

function UpCommingSection() {
    const [active, setActive] = useState(2);

    const prev = () => {
        setActive((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const next = () => {
        setActive((prev) => (prev + 1) % cards.length);
    };
    return (
        <>
            <div className=' items-center  p-15 '>
                <div className='flex justify-start px-70  rounded-4xl '>
                    <div className='w-1/3  p-10' > {/* Content */}
                        <h2 className='text-7xl '> Up Comming Project ...</h2>

                    </div>
                </div>

            </div>
            
            {/* the caroulse is start her  */}

            <div className="relative w-full h-[420px] bg-black overflow-hidden flex items-center justify-center">
                {/* Carousel */}
                <div className="relative w-full max-w-6xl h-full flex items-center justify-center perspective-[1200px]">
                    {cards.map((card, index) => {
                        const offset = index - active;
                        const isActive = offset === 0;

                        return (
                            <div
                                key={card.id}
                                className="absolute transition-all duration-500 ease-out"
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
                                    className={`w-[240px] h-[320px] rounded-2xl overflow-hidden
                border border-zinc-700 bg-zinc-900 shadow-xl
                ${isActive ? "shadow-cyan-500/30" : "opacity-80"}`}
                                >
                                    {/* Image */}
                                    <div className="h-40 w-full overflow-hidden">
                                        <img
                                          
                                            alt={card.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 text-white">
                                        <h3 className="text-lg font-semibold">{card.title}</h3>
                                        <p className="text-sm text-zinc-400">{card.desc}</p>

                                        {/* Rating 
                                        <div className="mt-3 flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <span
                                                    key={i}
                                                    className={
                                                        i <= Math.round(card.rating)
                                                            ? "text-yellow-400"
                                                            : "text-zinc-600"
                                                    }
                                                >
                                                    ★
                                                </span>
                                            ))}
                                            <span className="ml-2 text-sm text-zinc-400">
                                                {card.rating}
                                            </span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Controls */}
                <button
                    onClick={prev}
                    className="absolute left-6 text-white bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700"
                >
                    ◀
                </button>

                <button
                    onClick={next}
                    className="absolute right-6 text-white bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700"
                >
                    ▶
                </button>
            </div>





          
              
           <div className=' items-center mt-20 p-15 '>
                <div className='flex justify-center px-70  rounded-4xl '>
                    <div className='w-1/2  p-15 bg-[#191919] rounded-4xl'  > {/* Content */}
                        <h2 className='text-7xl '> AI Powered Voice Speech</h2>
                         <p className=' text-2xl '>AI Powered voice speech

                    Products that define excellence are built with purpose, precision, and an uncompromising focus on quality. They don’t just meet expectations—they raise the bar through thoughtful design, reliable performance, and attention to detail that users can feel from the first interaction. These are products that earn trust, stand the test of time, and quietly set the standard for what “best-in-class” truly means.</p>

                    </div>
                </div>

            </div>
                
           <div className=' items-center mt-30 p-15 '>
                <div className='flex justify-center px-70  rounded-4xl '>
                    <div className='w-[70%]  p-20 bg-linear-to-r from-[#84DA2E] to-[#2596BE] rounded-4xl'  > {/* Content */}
                        <h2 className='text-7xl '> AI Powered Voice Speech</h2>
                         <p className=' text-2xl '>AI Powered voice speech

                    Products that define excellence are built with purpose, precision, and an uncompromising focus on quality. They don’t just meet expectations—they raise the bar through thoughtful design, reliable performance, and attention to detail that users can feel from the first interaction. These are products that earn trust, stand the test of time, and quietly set the standard for what “best-in-class” truly means.</p>

                    </div>
                </div>

            </div>



        </>


    )
}

export default UpCommingSection
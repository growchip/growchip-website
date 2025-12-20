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
        <div
            // style={{
            //     backgroundImage: `url(${sideIamge.src})`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: "",
            //     backgroundSize: 'contain',
            //     minHeight: '100vh',
            //     width: '100%',
            // }}
        >
            <div className="flex justify-center items-center mt-40 flex-col">
                <h1 className='text-7xl pb-10'> Let there be Change</h1>
                <p className='text-3xl m-[-10px]' style={{ fontWeight: "100" }}> We build an enviroment together</p>
                <Buttons text="Explore"/>
            </div>

            <div className="grid  grid-cols-2 py-20 gap-y-10 mx-auto max-w-4xl ">
                {cards.map((card, index) => {
                    return (

                        <>
                            <div className="bg-[#191919] cursor-pointer hover:bg-linear-to-r from-[#84DA2E] to-[#2596BE] rounded-xl shadow-lg p-10 w-[400px] h-auto hover:scale-105 transition-transform duration-300" key={index}>
                                <img src={Card1.src} alt="" />
                                <h2 className="text-3xl font-extralight mb-14">{card.title}</h2>
                                <p className="text-lg mb-16">{card.desc}</p>
                            </div>


                        </>
                    )
                })}

            </div>


        </div>
    )
}

export default WhatWeOffer
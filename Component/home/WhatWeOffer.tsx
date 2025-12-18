import React from 'react'
import Card1 from "@/public/image/card 1.png"
import card2 from "@/public/image/card 2.png"
import  sideIamge from "@/public/image/sideImage.png"

function WhatWeOffer() {

    const Card =[]
    
    return (
        <div
            style={{
                backgroundImage: `url(${sideIamge.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "",
                backgroundSize: 'contain',
                minHeight: '100vh',
                width: '100%',
            }}
        >
            <div className="flex justify-center items-center mt-40 flex-col">
                <h1 className='text-[8rem]'> What We Offer</h1>
                <p className='text-4xl m-[-10px]' style={{ fontWeight: "100" }}> This is the second page</p>
                <button> Explore</button>
            </div>
            <div className="flex flex-wrap justify-center gap-20 p-12">
                {/* Card 1 */}
                <div className="bg-[#191919] rounded-xl shadow-lg p-10 w-[400px] h-auto hover:scale-105 transition-transform duration-300">
                    <img src={Card1.src} alt="" />
                    <h2 className="text-4xl font-extralight mb-14">Search Engine Optimization (SEO)</h2>
                    <p className="text-2xl mb-16">Improve your website’s visibility on search engines with data-driven SEO strategies that attract high-intent traffic and deliver long-term growth.</p>
                </div>
                {/* Card 2 */}
                <div className="bg-[#191919] rounded-xl shadow-lg p-10 w-[400px] h-auto hover:scale-105 transition-transform duration-300">
                    <img src={card2.src} alt="" />
                    <h2 className="text-4xl font-extralight mb-14">Search Engine Optimization (SEO)</h2>
                    <p className="text-2xl mb-16">Improve your website’s visibility on search engines with data-driven SEO strategies that attract high-intent traffic and deliver long-term growth.</p>
                </div>
            </div>
            <div className="flex W-[500px] justify-center gap-20 p-12">
                {/* Card 3 */}
                <div className="bg-gradient-to-b from-[#84DA2E] to-[#2596BE] rounded-xl shadow-lg p-10 w-[400px] h-auto hover:scale-105 transition-transform duration-300">
                    <img src={card2.src} alt="" />
                    <h2 className="text-4xl font-extralight mb-14">Search Engine Optimization (SEO)</h2>
                    <p className="text-2xl mb-16">Improve your website’s visibility on search engines with data-driven SEO strategies that attract high-intent traffic and deliver long-term growth.</p>
                </div>
                {/* Card 4 */}
                <div className="bg-[#191919] rounded-xl shadow-lg p-10 w-[400px] h-auto hover:scale-105 transition-transform duration-300">
                    <img src={Card1.src} alt="" />
                    <h2 className="text-4xl font-extralight mb-14">Search Engine Optimization (SEO)</h2>
                    <p className="text-2xl mb-16">Improve your website’s visibility on search engines with data-driven SEO strategies that attract high-intent traffic and deliver long-term growth.</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer
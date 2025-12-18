import React from 'react'
import mainImage from "@/public/image/mainImage.png"


function HeroSection() {
    return (
        <>
            <div
                className="flex justify-start items-center mt-0 flex-col min-h-screen w-full"
                style={{
                    backgroundImage: `url(${mainImage.src})`,
                    backgroundSize: 'cover  ',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                   
                }}
            >
                <h1 className='text-[8rem]'> Let there be Change</h1>
                <p className='text-4xl m-[-10px]' style={{ fontWeight: "100" }}> We build an enviroment together</p>
                <button className=' bg-amber'> Explore</button>
            </div>
         
        </>
    )
}

export default HeroSection
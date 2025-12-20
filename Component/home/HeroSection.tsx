import React from 'react'
import mainImage from "@/public/image/mainImage.png"
import Buttons from '@/Component/Buttons'

function HeroSection() {
    return (
        <>
            <div
                className="flex justify-start max-h-screen items-center mt-0 flex-col min-h-screen w-full"
                style={{
                    backgroundImage: `url(${mainImage.src})`,
                    backgroundSize: 'cover  ',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                   
                }}
            >
                <h1 className='text-7xl pb-10'> Let there be Change</h1>
                <p className='text-3xl m-[-10px]' style={{ fontWeight: "100" }}> We build an enviroment together</p>
                <Buttons text={"Explore"}/>
            </div>
         
        </>
    )
}

export default HeroSection
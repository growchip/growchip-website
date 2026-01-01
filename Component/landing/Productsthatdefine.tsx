import React from 'react'
import Image from 'next/image'
import laptopImage from "@/public/image/thirdSecitionImage.png"
import Buttons from '../Buttons'

function ThirdSection() {

    return (
        <>
            <div className=" max-w-7xl mx-auto flex justify-center items-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24">
                <div
                    className=" flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl w-full ">
                    {/* Content */}
                    <div className=" lg:w-[70%] text-center lg:text-left">
                        <h2 className=" inline flex flex-col sm:text-4xl lg:text-4xl ">
                          
                            <span className=" text-2xl text-white font-extralight">Powering Growth with </span>
                            <br />
                            <span className=" pt-1 text-[#2596BE] "> Cutting-Edge </span> Digital Solutions
                            
                        </h2>

                        <p className="  sm:text-lg lg:text-xl mt-6 sm:mt-8 pb-6 leading-relaxed">
                            Looking to grow your business online? Our Chandigarh-based digital services help local and national businesses stand out. From  responsive  <h2 className=' inline font-bold'>  web development</h2 > and <h2 className='inline font-extrabold'> SEO services to social media optimization (SMO), AI-powered video content creation, and high-converting Google & Meta Ads, </h2> we provide end-to-end solutions designed to boost your online visibility and drive measurable results.  
                            <br /> 
                           </p> 
                        <Buttons text="Explore" link="#" />
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-[50%] flex justify-center">
                        <Image
                            src={laptopImage.src}
                            alt="laptopImage"
                            width={800}
                            height={500}
                            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdSection
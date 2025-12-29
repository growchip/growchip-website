import React from 'react'
import Image from 'next/image'
import laptopImage from "@/public/image/thirdSecitionImage.png"
import Buttons from '../Buttons'

function ThirdSection() {

    return (
        <>
            <div className=" max-w-7xl mx-auto flex justify-center items-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24">
                <div
                    className="
      flex flex-col-reverse lg:flex-row
      items-center
      gap-12 lg:gap-20
      max-w-7xl
      w-full
    ">
                    {/* Content */}
                    <div className=" lg:w-1/2 text-center lg:text-left">
                        <h2 className=" flex flex-col sm:text-4xl lg:text-4xl ">
                          
                            <span className=" text-2xl text-white font-extralight"> Digital Marketing Services in </span>
                            <span className=" pt-1 text-white "> Chandigarh and Web Solutions </span>
                            <span className=" text-3xl pt-3 text-white "> That Drive Real Results </span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 pb-6 leading-relaxed">
                            Products that define excellence are built with purpose, precision,
                            and an uncompromising focus on quality. They don’t just meet
                            expectations—they raise the bar through thoughtful design, reliable
                            performance, and attention to detail that users can feel from the
                            first interaction. These are products that earn trust, stand the
                            test of time, and quietly set the standard for what “best-in-class”
                            truly means.
                        </p>

                        <Buttons text="Explore" link="#" />
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
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
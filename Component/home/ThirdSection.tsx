import React from 'react'
import Image  from 'next/image'
import laptopImage from "@/public/image/thirdSecitionImage.png"
import Buttons from '../Buttons'

function ThirdSection() {
    
    return (
        <>
            <div className=' flex justify-center items-center mt-60 h-screen   p-15 '>
                <div className='flex justify-around  rounded-4xl   '>
                    <div className='w-1/3  ' > {/* Content */}
                    <h2 className='text-5xl '> Products that define excellence</h2>
                    <p className=' text-xl mt-20'>Products that define excellence
                        Products that define excellence are built with purpose, precision, and an uncompromising focus on quality. They don’t just meet expectations—they raise the bar through thoughtful design, reliable performance, and attention to detail that users can feel from the first interaction. These are products that earn trust, stand the test of time, and quietly set the standard for what “best-in-class” truly means.</p>
                         <Buttons text="Explore"/>
                </div>
                    <div className=''>
                     <Image src={laptopImage.src} alt="laptopImage" width={800} height={500} 
                     />
 
                    </div>
                   </div>

            </div>
     </>
    )
}

export default ThirdSection
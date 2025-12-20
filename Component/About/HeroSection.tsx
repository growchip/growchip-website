import React from 'react'
import HeroSectionImage from '@/public/image/about hero imaeg.png'
import Image from 'next/image'

function HeroSection() {
  return (
    <>

      <div className=' flex justify-center max-h-screen items-center '>
        <div className='flex justify-around  rounded-4xl   '>
          <div className='w-1/3  ' > {/* Content */}
            <h2 className='text-6xl pb-20 '> Products that define excellence</h2>
            <p className=' text-xl '>Products that define excellence
              Products that define excellence are built with purpose, precision, and an uncompromising focus on quality. They don’t just meet expectations—they raise the bar through thoughtful design, reliable performance, and attention to detail that users can feel from the first interaction. These are products that earn trust, stand the test of time, and quietly set the standard for what “best-in-class” truly means.</p>

          </div>
          <div className=''>
            <Image src={HeroSectionImage.src} alt="laptopImage" width={800} height={500}
            />

          </div>
        </div>

      </div>
    </>
  )
}

export default HeroSection
import React from 'react'
import { useState } from 'react';
import Caroulse from "@/Component/caroulse"


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
                <div className='flex justify-start px-30 rounded-4xl '>
                    <div className='  ' > {/* Content */}
                        <h2 className='text-5xl '> Up Comming Project ...</h2>

                    </div>
                </div>

            </div>

<Caroulse />

          
              
           <div className=' items-center mt-20 p-15 '>
                <div className='flex justify-center px-70  rounded-4xl '>
                    <div className='w-3xl  p-15 bg-[#191919] rounded-4xl'  > {/* Content */}
                        <h2 className='text-5xl pb-10'> AI Powered Voice Speech</h2>
                         <p className=' text-xl '>AI Powered voice speech

                    Products that define excellence are built with purpose, precision, and an uncompromising focus on quality. They don’t just meet expectations—they raise the bar through thoughtful design, reliable performance, and attention to detail that users can feel from the first interaction. These are products that earn trust, stand the test of time, and quietly set the standard for what “best-in-class” truly means.</p>

                    </div>
                </div>

            </div>
                
           <div className=' items-center mt-30  '>
                <div className='flex justify-center px-70  rounded-4xl '>
                    <div className='w-[90%]  p-10 bg-linear-to-r from-[#84DA2E] to-[#2596BE] rounded-4xl'  > {/* Content */}
                        <h2 className='text-6xl pb-10 '>Ready to Automate  <br/>Smarter?</h2>
                         <p className=' text-xl '>AI Powered voice speech

                    Products that define excellence are built with purpose, precision, and an uncompromising focus on quality. They don’t just meet expectations—they raise the bar through thoughtful design, reliable performance, and attention to detail that users can feel from the first interaction. These are products that earn trust, stand the test of time, and quietly set the standard for what “best-in-class” truly means.</p>

                    </div>
                </div>

            </div>



        </>


    )
}

export default UpCommingSection
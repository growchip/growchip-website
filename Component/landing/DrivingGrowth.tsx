import React, { useEffect ,useState  } from 'react'
import Elite from "@/public/image/png/EliteWeb&Mobile.jpg" 
import AI from "@/public/image/png/AI.jpg" 
import Digital from "@/public/image/png/digital.jpg" 
import Clound from "@/public/image/png/Cloud.jpg" 
import google from "@/public/image/png/google.jpg" 
import IIT from "@/public/image/png/iit.webp" 
import Image from 'next/image';


const carouselData = [
    {
           id: 1,
           title: "Elite Web & Mobile Development",
           desc: "Build responsive, SEO-optimized websites and apps that scale globally. Trusted by Chandigarh, Indian, and international clients.",
           rating: 4.8,
           src: "https://res.cloudinary.com/dlb4q6oje/image/upload/v1767335110/EliteWeb_Mobile_i2xnws.jpg",
       },
       {
           id: 2,
           title: "AI-Powered Video & Content Solutions",
           desc: "Captivate audiences with AI-powered videos and digital content that drives engagement and conversions.",
           rating: 4.6,
           src: "https://res.cloudinary.com/dlb4q6oje/image/upload/v1767329348/AI_vko1i9.jpg",
           
       },
       {
           id: 3,
           title: "SEO, SMO & Digital Marketing ",
           desc: "Boost visibility, generate leads, and improve conversions with  SEO, SMO, and paid campaigns optimized for Chandigarh and beyond.",
           rating: 5.0,
           src: "https://res.cloudinary.com/dlb4q6oje/image/upload/v1767329350/digital_muis6a.jpg"
       },
       {
           id: 4,
           title: "Google & Meta Ads Expertise",
           desc: "Run targeted Google Ads and Meta Ads campaigns that reach the right audience and deliver measurable results.",
           rating: 4.7,
            src: "https://res.cloudinary.com/dlb4q6oje/image/upload/v1767329355/google_z1viy6.jpg"
         
       },
       {
           id: 5,
           title: "Cloud, DevOps & Enterprise IT",
           desc: "Secure, resilient, and cloud-enabled infrastructure for businesses in Chandigarh, India, and global markets.",
           rating: 4.5,
           src: "https://res.cloudinary.com/dlb4q6oje/image/upload/v1767335120/Cloud_peer0h.jpg"
       }, {
           id: 6,
           title: "IITians & Big-4 Tech Expertise  ",
           desc: "Our IIT alumni and Big-4 tech veterans deliver unmatched technical expertise, ensuring every project meets global standards and drives growth.",
            src: "https://res.cloudinary.com/dlb4q6oje/image/upload/v1767329354/iit_q4vw47.webp"
           
       },
];

function UpCommingSection() {
    const [active, setActive] = useState(2);
   
   
     const total = carouselData.length;
       useEffect(() => {
       const interval = setInterval(() => {
         setActive((prev) => (prev + 1) % total);
       }, 1000); 
   
       return () => clearInterval(interval);
     }, [ total]);
       
    return (
        <><div className="flex max-w-7xl mx-auto items-center px-4 sm:px-8 lg:px-16 py-8 sm:py-5">
            <div className="w-full  max-w-7xl mx-auto rounded-2xl">

                {/* Content */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold">
                   
                     <span className=" text-4xl text-white font-extralight"> Driving Growth with Enterprise  </span> <br />
                            <span className=" pt-1 text-4xl text-green-600 ">IT & Digital Solutions</span>
                            
                </h2>
                <p className=' mt-5'>IITian-Led Team Delivering Chandigarh’s Best IT Services to India & the World</p>
            </div>
        </div>


 <div
  className=" relative w-full bg-black py-12 sm:py-16 lg:py-5 flex items-center justify-center overflow-hidden "
 
>
  {/* Carousel */}
  <div
    className="  relative w-full max-w-7xl  h-[360px] sm:h-[420px] lg:h-[400px]  flex items-center justify-center  perspective-[800px] sm:perspective-[1000px] lg:perspective-[1200px]  "
  >
    {carouselData.map((card, index) => {
      const offset = index - active;
      const isActive = offset === 0;

      return (
        <div
          key={card.id}
          className="absolute transition-all duration-700 ease-out"
          style={{
            transform: `
              translateX(${
                offset *
                (typeof window !== "undefined" && window.innerWidth < 640
                  ? 160
                  : typeof window !== "undefined" && window.innerWidth < 1024
                  ? 200
                  : 240)
              }px)
              translateZ(${isActive ? 100 : -200}px)
              rotateY(${offset * -20}deg)
              scale(${isActive ? 1.1 : 0.9})
            `,
            opacity: Math.abs(offset) > 2 ? 0 : 1,
            zIndex: 10 - Math.abs(offset),
          }}
        >
          {/* Card */}
          <div
            className=" w-[260px] sm:w-[300px] lg:w-[340px] h-[340px] sm:h-[380px] lg:h-[320px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-700 shadow-xl "
          >
            {/* Image */}
            <Image
              src={card.src}
              alt={card.title}
              height={500}
              width={900}
              className="h-32 sm:h-36 lg:h-40 w-full object-cover"
            />

            {/* Content */}
            <div className="p-3 sm:p-4 text-white">
              <h3 className="text-base sm:text-lg font-semibold">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                {card.desc}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
   



        </>


    )
}

export default UpCommingSection
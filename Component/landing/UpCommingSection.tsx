import React, { useEffect ,useState  } from 'react'
import laptopImage from "@/public/image/thirdSecitionImage.png"


const carouselData = [
    {
           id: 1,
           title: "Elite Web & Mobile Development",
           desc: "Build responsive, SEO-optimized websites and apps that scale globally. Trusted by Chandigarh, Indian, and international clients.",
           rating: 4.8,
           image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
       },
       {
           id: 2,
           title: "AI-Powered Video & Content Solutions",
           desc: "Captivate audiences with AI-powered videos and digital content that drives engagement and conversions.",
           rating: 4.6,
           image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
       },
       {
           id: 3,
           title: "SEO, SMO & Digital Marketing ",
           desc: "Boost visibility, generate leads, and improve conversions with  SEO, SMO, and paid campaigns optimized for Chandigarh and beyond.",
           rating: 5.0,
           image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
       },
       {
           id: 4,
           title: "Google & Meta Ads Expertise",
           desc: "Run targeted Google Ads and Meta Ads campaigns that reach the right audience and deliver measurable results.",
           rating: 4.7,
           image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
       },
       {
           id: 5,
           title: "Cloud, DevOps & Enterprise IT",
           desc: "Secure, resilient, and cloud-enabled infrastructure for businesses in Chandigarh, India, and global markets.",
           rating: 4.5,
           image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
       }, {
           id: 6,
           title: "IITians & Big-4 Tech Expertise  ",
           desc: "Our IIT alumni and Big-4 tech veterans deliver unmatched technical expertise, ensuring every project meets global standards and drives growth.",
           rating: 4.5,
           image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
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
            <img
              src={card.image}
              alt={card.title}
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
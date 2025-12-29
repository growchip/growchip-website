  "use client";
  import Image from "next/image";
  import { ShieldCheck, Cog, Users, Package, Scale } from "lucide-react";
  import { useEffect, useRef } from "react";
  import { motion, useScroll, useTransform } from "framer-motion";
  import Lenis from "@studio-freight/lenis";
  import WhyChooseUse from "@/public/image/whyChooseUs.png"



  function WhyChoseUs() {
      const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
    });


    const items = [
      {
        icon: <ShieldCheck className="w-8 h-8 text-[#84DA2E]" />,
        title: "ISO 9001:2008 Certified",
        desc: "Zoic Life Sciences is an ISO certified Pharma company, committed to high quality products. We have also earned the right amount of trust, respect in the market.",
      },
      {
        icon: <Cog className="w-8 h-8 text-[#84DA2E]" />,
        title: "Our Quality Approach",
        desc: "We are committed to follow the quality norms for manufacturing products. We formulate all our offered medicines as per the set quality norms.",
      },
      {
        icon: <Users className="w-8 h-8 text-[#84DA2E]" />,
        title: "Dedicated Workforce",
        desc: "Our team members are quite diverse to create a comprehensive, high-performance culture in our company, which will affect our business outcome.",
      },
      {
        icon: <Package className="w-8 h-8 text-[#84DA2E]" />,
        title: "Packaging",
        desc: "We make use of proven techniques for packaging all medicines. Using advanced methods, we ensure leakage & breakage-proof delivery.",
      },
      {
        icon: <Scale className="w-8 h-8 text-[#84DA2E]" />,
        title: "Ethics and Compliance",
        desc: "Our policies and procedures ensure our company and partners conduct business in a legal, ethical, and responsible manner.",
      },
    ];
    
    return (
      
      <>
      
      <section
    ref={container}
    className="relative py-16 sm:py-24 lg:py-32"
  >
    <div
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 md:px-8 lg:px-16
      "
    >
      {/* Heading */}
      <h2 className="
        regulator-nova-alts-straight
        tracking-wider
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        text-white
        mb-12 sm:mb-16
        text-center 
        font-bold
      ">
        Why Grow Chip Delivers Measurable Digital Marketing Results
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 w-full lg:w-3/5">
          {items.map((item, index) => {
            const targetScale = 1 - (items.length - index) * 0.05;
            const range = [index * 0.2, 1];
            const scale = useTransform(
              scrollYProgress,
              range,
              [1, targetScale]
            );

            return (
              <motion.div
                key={index}
                style={{ scale }}
                className="
                  flex
                  border-t-2
                  sticky top-[18vh]
                  items-start sm:items-center
                  gap-4
                  bg-gray-200
                  rounded-xl
                  shadow-md hover:shadow-lg
                  transition-all duration-300
                  px-5 sm:px-6
                  py-8 sm:py-10
                "
              >
                {/* Gradient Bar */}
                <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-[#84DA2E] to-[#2596BE] rounded-l-xl" />

                {/* Icon */}
                <div className="flex items-center justify-center bg-[#E6F4FA] rounded-full w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="
                    regulator-nova-alts-straight
                    tracking-wider
                    font-semibold
                    text-lg sm:text-xl md:text-2xl lg:text-3xl
                    text-gray-900
                  ">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex w-full lg:w-2/5 justify-center">
          <div
            className="
              w-[300px] xl:w-[350px]
              h-[60vh] xl:h-[70vh]
              sticky top-[18vh]
              bg-center bg-no-repeat
              bg-[length:120%_100%]
              overflow-hidden
            "
            style={{
              backgroundImage: WhyChooseUse.src,
              borderTopLeftRadius: "20%",
              borderBottomRightRadius: "20%",
              boxShadow: "8px -8px 20px green",
            }}
          />
        </div>

      </div>
    </div>
  </section>
      </>
    )
  }

  export default WhyChoseUs

  function useHoverText(arg0: string, arg1: string) {
    throw new Error("Function not implemented.");
  }

"use client";

import React from "react";
import Image from "next/image";

interface TechItem {
  name: string;
  src: string;
}
const techStack: TechItem[] = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Drupal",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
  },
  {
    name: "Android",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "C++",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: ".NET",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "Shopify",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
  },
  {
    name: "WordPress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  },
  {
    name: "Go",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "React Native",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "iOS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
  {
    name: ".NET",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "WordPress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  },
  {
    name: "Go",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "React Native",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "iOS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
];
function OurStack() {
  return (
    <>
      <section className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 my-auto overflow-hidden">
        {/* Container */}
        <div className=" px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200 dark:text-white">
              Our Tech Stack
            </h2>

            <p className="mt-4 sm:mt-6 text-gray-300 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Great software needs the right foundation. That's why we use a
              modern tech stack that ensures performance, scalability, and
              security. With expertise in the latest tools, frameworks, and
              platforms, we deliver custom software that is future-ready and
              built to last.
            </p>
          </div>

          {/* Marquee Row 1 */}
          <div className="relative mt-12 sm:mt-16 lg:mt-20">
            <div className="flex gap-6 sm:gap-8 md:gap-10 w-max animate-marquee">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 */}
          <div className="relative mt-10 sm:mt-14 lg:mt-20">
            <div className="flex gap-6 sm:gap-8 md:gap-10 w-max animate-marquee2">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-marquee {
      animation: marquee 30s linear infinite;
      display: flex;
      width: max-content;
      will-change: transform;
    }

    @keyframes marquee2 {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }

    .animate-marquee2 {
      animation: marquee2 30s linear infinite;
      display: flex;
      width: max-content;
      will-change: transform;
    }
  `}</style>
      </section>
    </>
  );
}

export default OurStack;

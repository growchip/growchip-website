
"use client";

import Link from 'next/link'
import DigitalMarketing from './DigitalMarketing';

import { JSX, useState, useEffect, useRef } from 'react';
import OurServices from '../OurServices';
import Webdevelopment from './WebDevelopment';
import SeoServices from './SeoServices';

type Card = {
  title: string;
  component: JSX.Element;
};
const cards: Card[] = [
  { title: "Digital Marketing", component: <DigitalMarketing /> },
  { title: "SEO Services", component: <DigitalMarketing /> },
  { title: "PPC Services", component: <Webdevelopment /> },
  { title: "SMO (Social Media Marketing)", component: <Webdevelopment /> },
  { title: "Content Marketing", component: <Webdevelopment /> },
  { title: "Web Development ", component: <Webdevelopment /> },
  { title: "UI / UX Design", component: <Webdevelopment /> },
  { title: "SEO Optimization", component: <SeoServices /> },
  { title: "E-Commerce Solutions", component: <Webdevelopment /> },
  { title: "E-Commerce Solutions", component: <Webdevelopment /> },

];
function ServiceAccordingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeCard, setActiveCard] = useState<null | typeof cards[0]>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!activeCard && cards.length > 0) {
      setActiveCard(cards[0]);
    }
  }, [cards, activeCard]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeCard]);

  return (
    <>
<section className="w-full bg-black">
  {/* 🔹 Sticky Tabs Bar */}
  <div className="sticky top-16 z-40 bg-black shadow-md">
    <div
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        py-4
        flex justify-center
    
      "
    >
      {/* Tabs */}
      <div
        className="
          flex flex-wrap
          justify-center items-center text-center
          gap-4 sm:gap-6 lg:gap-10
        "
      >
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => setActiveCard(card)}
            className={`
              relative
              px-4 py-2
              text-sm sm:text-base lg:text-lg
              font-medium
              transition-all duration-200
              ${
                activeCard?.title === card.title
                  ? "text-black bg-gray-300 rounded-md"
                  : "text-white hover:text-[#2596BE]"
              }
            `}
          >
            {card.title}

            {/* Active underline */}
            {activeCard?.title === card.title && (
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-black" />
            )}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* 🔹 Content Area */}
  {activeCard && (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref={scrollRef}
        className="
          mt-8 sm:mt-10 lg:mt-12
          bg-gray-800
          rounded-xl
          p-4 sm:p-6 lg:p-8

          /* Height control */
          max-h-none
          sm:max-h-[60vh]
          md:max-h-[65vh]
          lg:max-h-[70vh]
          xl:max-h-[75vh]

          /* Vertical scroll only */
          overflow-y-auto
          overflow-x-hidden

          /* Smooth scrolling */
          scroll-smooth

          /* Hide scrollbar visually */
          [&::-webkit-scrollbar]:hidden
          [scrollbar-width:none]
        "
      >
        {activeCard.component}
      </div>
    </div>
  )}
</section>

    </>
  )
}

export default ServiceAccordingNavbar
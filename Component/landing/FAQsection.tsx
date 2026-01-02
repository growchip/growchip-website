import React from "react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { opendir } from "fs";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What services does Growchip offer?",
    answer:
      "Growchip provides enterprise-grade IT solutions, including web and mobile development, SEO, SMO, AI-powered video creation, Google & Meta Ads, cloud and DevOps services, cybersecurity, and managed IT services. We also develop market-cracking products engineered for scalability, reliability, and global impact.",
  },
  {
    id: 2,
    question: "Where is Growchip located and which markets do you serve?",
    answer:
      "We are headquartered in Chandigarh, India, but serve clients across India and internationally. Our IITian-led team and Big-4 tech experts enable us to deliver world-class IT and digital solutions to enterprises worldwide.",
  },
  {
    id: 3,
    question: "What makes Growchip different from other Chandigarh IT companies?",
    answer:
      "Unlike competitors, Growchip combines elite IITian talent with Big-4 tech experience, delivering enterprise-grade products, scalable software solutions, and high-quality digital marketing services. Our focus is on quality, measurable growth, and client success, not just marketing campaigns.",
  },
  {
    id: 4,
    question: ". Do you focus more on digital marketing or product development?",
    answer:
      "Digital marketing at Growchip is just the trailer—designed to generate leads and visibility. Our primary focus is product development, including AI solutions, SaaS platforms, and enterprise software that deliver sustainable growth and global impact.",
  },
  {
    id: 5,
    question: "How can I get in touch or schedule a consultation?",
    answer:
      "You can schedule a consultation directly from our website. Our Chandigarh-based team of IITians and tech experts will understand your requirements and propose enterprise-grade IT solutions or marketing strategies tailored for your business growth.",
  }
  
];
function FAQsection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="bg-black py-12 sm:py-20 lg:py-32">
      <div
        className=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 "
      >
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
           Everything You Need to Know About Growchip’s IT, Product, and Digital Marketing Expertise
          </p>
        </div>

        {/* Right Accordion */}
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="border-b border-neutral-800 pb-4">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-white">
                    {faq.id}. {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-sm sm:text-base text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQsection;

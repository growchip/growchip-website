import React from 'react'


import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { opendir } from 'fs';



interface FAQItem {
  id: number;
  question: string;
  answer: string;
}


const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including healthcare, fintech, e-commerce, education, logistics, and enterprise software.",
  },
  {
    id: 2,
    question: "How secure are your solutions?",
    answer:
      "Security is a top priority. We follow industry best practices, implement encryption, secure authentication, and conduct regular audits.",
  },
  {
    id: 3,
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern technologies such as React, Next.js, Node.js, Python, AWS, mobile development, and cloud-native solutions.",
  },
  {
    id: 4,
    question: "Can you customize solutions for my business needs?",
    answer:
      "Absolutely. Every solution we build is tailored to your specific business goals, workflows, and scalability requirements.",
  },
  {
    id: 5,
    question: "How do you ensure project success?",
    answer:
      "We follow agile methodologies, maintain transparent communication, and focus on quality assurance at every stage of development.",
  },
];
function FAQsection() {
  const [openId, setOpenId] = useState<number | null>(null);


const toggle = (id: number) => {
setOpenId(openId === id ? null : id);
};
  return (
  <section className="bg-black py-12 sm:py-20 lg:py-32">
  <div
    className="
      max-w-7xl mx-auto
      px-4 sm:px-6 md:px-8 lg:px-16
      grid grid-cols-1 lg:grid-cols-2
      gap-10 sm:gap-14 lg:gap-24
    "
  >
    {/* Left Content */}
    <div className="max-w-xl">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
        Frequently Asked
        <br />
        Questions
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
        Here are answers to some frequently asked questions. If your question
        isn’t listed, please contact us. We’re happy to assist!
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


    
  )
}

export default FAQsection
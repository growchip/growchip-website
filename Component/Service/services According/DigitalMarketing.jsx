"use client";
import ServiceRow from "../ServiceRow";
import {
  ClipboardList,
  Settings,
  MousePointerClick,
  Users,
  Laptop,
} from "lucide-react";
export default function DigitalMarketing() {
  const services = [
    {
      id: "01",
      title: "Search Engine Optimization (SEO)",
      description:
        "Professional web and digital solutions built for speed, security, and scalability. Enhance your online presence with modern, SEO-optimized technology.",
      icon: ClipboardList,
      color: "bg-red-700",
      side: "left",
    },
    {
      id: "02",
      title: "Social Media Optimization(SMO) ",
      description:
        "Modern web solutions designed for performance, reach, and conversions. Optimized for search engines and social media platforms.",
      icon: Settings,
      color: "bg-orange-500",
      side: "right",
    },
    {
      id: "03",
      title: "Google Ads",
      description:
        "Grow your business with smart digital solutions that deliver results. SEO, SMO & Google Ads strategies designed to boost traffic and conversions.",
      icon: MousePointerClick,
      color: "bg-teal-400",
      side: "left",
    },
    {
      id: "04",
      title: "Meta Ads",
      description:
        "Reach the right audience and convert them into customers. Performance-driven SEO, social media, Google Ads & Meta Ads..",
      icon: Laptop,
      color: "bg-blue-700",
      side: "left",
    },
    {
      id: "05",
      title: "Whatsapp Marketing",
      description:
        "Generate high-quality leads and close more sales faster. SEO, social media, paid ads & WhatsApp Marketing in one strategy.",
      icon: Users,
      color: "bg-sky-500",
      side: "right",
    },
    {
      id: "06",
      title: "Email Marketing ",
      description:
        "Attract, engage, and retain customers across every channel. SEO, paid ads, WhatsApp & Email Marketing for maximum ROI.",
      icon: Laptop,
      color: "bg-blue-700",
      side: "left",
    }
       
  ];

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex flex-col items-center gap-20">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

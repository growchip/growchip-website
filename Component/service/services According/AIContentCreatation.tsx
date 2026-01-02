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
      title: "AI Video Content Creation ",
      description:
        "AI Content Creation uses advanced artificial intelligence to generate high-quality, engaging, and SEO-friendly content for websites, blogs, and marketing campaigns, saving time while improving consistency and performance.",
      src: "https://res.cloudinary.com/dlb4q6oje/image/upload/v1767342936/video_qmd0hm.png",
      color: "bg-red-700",
      side: "left",
    },
    {
      id: "02",
      title: "AI Poster Design ",
      description:
        "AI Poster Design uses smart algorithms and creative design to produce eye-catching posters that attract attention and boost engagement. Perfect for promotions, events, and digital campaigns.",
      src: "https://res.cloudinary.com/dlb4q6oje/image/upload/v1767342935/poster_jzccmh.png",
      color: "bg-orange-500",
      side: "right",
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

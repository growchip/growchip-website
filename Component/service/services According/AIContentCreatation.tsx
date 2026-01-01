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
      title: "SEO",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
      icon: ClipboardList,
      color: "bg-red-700",
      side: "left",
    },
    {
      id: "02",
      title: "Operations",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
      icon: Settings,
      color: "bg-orange-500",
      side: "right",
    },
    {
      id: "03",
      title: "Online",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
      icon: MousePointerClick,
      color: "bg-teal-400",
      side: "left",
    },
    {
      id: "04",
      title: "Consulting",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
      icon: Users,
      color: "bg-sky-500",
      side: "right",
    },
    {
      id: "05",
      title: "Devices",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
      icon: Laptop,
      color: "bg-blue-700",
      side: "left",
    },
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

"use client";

import { useState } from "react";
import Image from "next/image";
import  Contact  from "@/public/image/Contact 2.png";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    alert(data.message);
    if (data.success) {
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
  <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">


 <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <Image
        src={Contact.src}
        alt="Contact Image"
        width={900}
        height={900}
        className="
          w-full
          max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
          h-auto
          object-contain
        "
        priority
      />
    </div>


    {/* LEFT: FORM */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84DA2E]"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84DA2E]"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#84DA2E]"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center  text-white px-6 py-3 rounded-md font-medium  bg-linear-to-r from-[#84DA2E] to-[#2596BE] hover:scale-105 transition-transform duration-300 "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>

    {/* RIGHT: IMAGE */}
   
  </div>
</section>
  );
}
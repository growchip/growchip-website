import { main } from "framer-motion/client";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services Page | Growchip AI Technologies",
  description:
    " Growchip AI Technologies is the best Digital Marketing Agency in Chandigarh and Panchkula. we provide quality which driv  results and growth of our customers. ",
  keywords: "",
  authors: [{ name: "Rajveer Chauhan" }, { name: "GrowChip Ai teachnlogoy" }],
};

function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

export default ServicesLayout;

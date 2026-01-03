import type { Metadata } from "next";
import { Geist, Geist_Mono, Iceland, Gudea ,Inter } from "next/font/google";
import "./globals.css";
import Footers from "@/components/Footers";
import Headers from "@/components/Headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
    subsets: ['latin'],
  weight: '400',
})

const gudea = Gudea({
    subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: 'https://wwww.growchipAiteachnology.com',
  title: "Digital Marketing Agency in Chandigarh | Growchip AI Technologies ",
  description:" Growchip AI Technologies is the best Digital Marketing Agency in Chandigarh and Panchkula. we provide quality which drive results and growth of our customers. ",

  authors:[{name:"Rajveer Chauhan"},{name:"GrowChip Ai teachnlogoy"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <> 
 
    <html lang="en">
    
      <body   className={inter.className}
      >
        <Headers/>
        <main className="pt-20 md:pt-30 lg:pt-20  overflow-x-hidden">{children}</main>

       <Footers/>
      </body>
    </html>
 </>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import {Navbar, Footer} from "@/components/Index";
import "./globals.css";

const monserrat = Montserrat({
  variable:'--font-montserrat',
  weight: ['400','700'],
  subsets:['latin'],
})
export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Clone of Airbnb create for Javierlnc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${monserrat.className} antialiased`}
      >
        <Navbar/>
        <div className="pt-20 md:pt-32">
        {children}
        </div>
      </body>
    </html>
  );
}

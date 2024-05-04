
"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ButtonGradient from "@/public/assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowToUse from "./components/HowToUse";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
// import Works from "./components/Works";



const DynamicWorks = dynamic(() => import("./components/Works"), {
  ssr: false,
});

const DynamicContact = dynamic(() => import("./components/Contact"), {
  ssr: false,
});

const DynamicStars = dynamic(() => import("./components/canvas/Stars"), {
  ssr: false,
});


export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <HowToUse />
        {/* <DynamicWorks /> */}
        <Services />
        <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        </div>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

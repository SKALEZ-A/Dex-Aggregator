"use client";

// import { curve, heroBackground, robot } from "../assets";
import Image from "next/image";
import { curve, heroBackground } from "@/public/assets";
import block from "@/public/assets/blockchain4.png";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Companies from "./Companies";
// import Generating from "./Generating";
// import Notification from "./Notification";
// import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="md:pt-[10rem] pt-[8rem] -mt-[5.25rem] "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      
      <section className="lg:pt-8 flex flex-items justify-center mb-12  bg-center bg-cover  items-center overflow-hidden  " ref={parallaxRef}>
        <div className="z-[5] m-4 gap-5 container max-w-full justify-center items-center flex flex-col sm:flex-row sm:max-w-4xl md:max-w-5xl md:grid md:grid-cols-2">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem]  mt-4 md:mt-0 ">
            <h1 className="h1 mb-6">
              Unlock the power of &nbsp;Defi&nbsp; with {` `}
              <span className="inline-block relative">
                Marble Protocol{" "}
                <Image
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Optimized swaps with powerful Dex Aggregation.
            </p>
            <Button href="/pricing" white>
              Launch Dapp
            </Button>
          
          </div>

          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient justify-center items-center">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className=" rounded-b-[0.9rem] overflow-hidden md:aspect-[500/490] bg-transparent">
                <Image
                  src={block}
                  alt="hero image"
                  className="w-full   "
                  // width={500}
                  // height={500}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] "> */}
        <div className="absolute -top-[50%] left-1/2 w-[200%] -translate-x-1/2 md:-top-[40%] md:w-[90%] lg:-top-[40%] ">
            <Image
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles/>
      </section>

      <Companies className="hidden relative z-10 mt-20 lg:block" />
      

      <BottomLine />
    </Section>
  );
};

export default Hero;

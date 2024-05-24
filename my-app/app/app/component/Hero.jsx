"use client"
import React from 'react'

import { useState, useEffect, Suspense } from "react";
import { SquidWidget } from '@0xsquid/widget';
import { motion } from 'framer-motion'
import Link from 'next/link'
import banner from "@/public/images/blockchain4.png"
import Image from 'next/image'
import dynamic from 'next/dynamic'
// import ParticlesBackground from './ParticlesBackground'
// import Iframe from './Iframe';



const Hero = () => {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  useEffect(() => {
    setIsWidgetLoaded(true);
  }, []);
  

    const Particle = dynamic(() => import('./Particle'), {
        ssr: false, // Disable server-side rendering for this component
    });

    const Iframe = dynamic(() => import('./Iframe'), {
      ssr: false, // Disable server-side rendering for this component
  });

    return (
        <>

            <div className='particles-container'>
        <Particle />
        </div>

      <section className="lg:pt-8 flex flex-items justify-center bg-fixed bg-center bg-cover  items-center overflow-hidden  z-[99999]  ">        
        
        <div className="z-[5] m-4 gap-5 container max-w-full justify-center items-center flex flex-col sm:flex-row sm:max-w-4xl md:max-w-5xl ">
        {/* overlay */}
        {/* <div className=" top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] flex-r " /> */}
        <div className='p-5 custom-glass h-screen w-full'>

          <Iframe />
        </div>
        
        {/* <div className="z-[5] m-4 gap-5 container max-w-full justify-center items-center flex flex-col sm:flex-row sm:max-w-4xl md:max-w-5xl "> */}
        <div className="z-[5] m-2 gap-5 container justify-center items-center flex custom-glass h-screen w-full">
        {isWidgetLoaded && (
        <Suspense fallback={<div>Loading...</div>}>
         <SquidWidget config={
{
    "integratorId": "marble-protocol-354e844c-17aa-4dca-abfe-45b032bfa636",
    "companyName": "Custom",
    "style": {
        "neutralContent": "#9DA7B1",
        "baseContent": "#FFFDFD",
        "base100": "#434565",
        "base200": "#202230",
        "base300": "#161522",
        "error": "#ED6A5E",
        "warning": "#FFB155",
        "success": "#2EAEB0",
        "primary": "#AB67CB",
        "secondary": "#37394C",
        "secondaryContent": "#B2BCD3",
        "neutral": "#383A4C",
        "roundedBtn": "24px",
        "roundedCornerBtn": "999px",
        "roundedBox": "20px",
        "roundedDropDown": "15px"
    },
    "slippage": 1.5,
    "infiniteApproval": false,
    "enableExpress": true,
    "apiUrl": "https://api.squidrouter.com",
    "mainLogoUrl": "https://marble-dex.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FM-logo-ico.7a5192fc.png&w=64&q=75",
    "comingSoonChainIds": [],
    "titles": {
        "swap": "Swap",
        "settings": "Settings",
        "wallets": "Wallets",
        "tokens": "Select Token",
        "chains": "Select Chain",
        "history": "History",
        "transaction": "Transaction",
        "allTokens": "Select Token",
        "destination": "Destination address",
        "depositAddress": "Deposit address"
    },
    "priceImpactWarnings": {
        "warning": 3,
        "critical": 5
    },
    "environment": "mainnet",
    "showOnRampLink": true,
    "defaultTokens": [],
    "preferDex": [
        ""
    ]
}
} />
        </Suspense>
      )}
          {/* <div className='h-screen'>

          </div> */}
        </div>
        </div>
      </section>
      
      
      
      </>
    )
  }
  

export default Hero

import Image from "next/image";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "@/public/assets";
import ufo from "@/public/assets/ether_ufo.webp";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Native cross-chain tool created for everyone."
          text=" We leave no stone unturned in our quest to find you the best prices, scouring every corner of the market for liquidity to serve your needs."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <Image
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={ufo}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto custom-glass px-5">
              <h4 className="h4 mb-4 text-black md:text-white">Marble Goal</h4>
              <p className="body-2 mb-[3rem] text-white">
              We're collaborating with market makers, decentralized exchanges,  bridges to forge a unified, decentralized financial ecosystem for all in Web 3.0.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6 text-white"
                  >
                    <Image width={24} height={24} src={check} />
                    <p className="ml-4 text-white">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>

          

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;

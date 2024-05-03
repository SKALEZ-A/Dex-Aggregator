import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import Heading from "./Heading";
import bg_svg from "@/public/assets/benefits/image-2.png"
import image_url from "@/public/assets/benefits/card-4.svg"
import { GradientLight } from "./design/Benefits";
import { benefits } from "../constants";


import { styles } from "../styles";
import { fadeIn, textVariant, projects } from "../constants/motion/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  previewUrl,
}) => {

  
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="block relative bg-no-repeat bg-[length:100%_100%] p-0.5" >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="custom-glass p-5 rounded-2xl sm:w-[360px] w-full min-h-[17rem] "
      >
        {/* <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            
            <div
              className="rounded-t-xl relative group"
              onClick={() => window.open(previewUrl, "_blank")}
            >
             
            </div>
          </div>
        </div> */}

        <div className="mt-5 relative z-2 block bg-no-repeat bg-[length:100%_100%]"  style={{
                backgroundImage: `url(${image_url})`,
              }}>
          <h5 className="text-white font-bold h5 mb-5">{name}</h5>
          <p className="body-2 mb-6 text-n-3">{description}</p>
          {/* {benefits.map((item) => (
           <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  
                </div> 
          ))} */}
        </div>

        <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  
                    <Image
                      src={bg_svg}
                      width={380}
                      height={362}
                      alt="bg-svg"
                      className="w-full h-full object-cover"
                    />
                  
                </div>
                <GradientLight />
              </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <Section id="how-to-use">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Trade Smarter, Not Harder with Marble Protocol"
        />
      

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      </div>
        
    </Section>
  );
};

export default Works;

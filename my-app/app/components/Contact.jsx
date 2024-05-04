"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// import EarthCanvas from "../components/canvas/Earth";
import EarthCanvas from "./canvas/Earth";
// import { slideIn } from "@/app/utils/motion";
import { styles } from "@/app/styles";
import Section from "./Section";
import Heading from "./Heading";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  return (
    <Section id="contact">
       <Heading
          title="Trade different crypto assets from all over the world."
          
        />
    <div
      className={`xl:mt-12 justify-center items-center overflow-hidden`}
    >
     

      <div
        
        className=" h-auto md:h-[550px] "
      >
        <EarthCanvas />
      </div>
    </div>
    </Section>
  );
};

export default Contact;

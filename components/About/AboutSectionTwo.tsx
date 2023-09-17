"use client";
import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleAbout from "./SingleAbout";

const aboutTextData = [
  {
    title: "Bug-Free Code",
    description:
      "I take pride in writing clean and bug-free code. My development process ensures that your projects are free from issues and run smoothly.",
  },
  {
    title: "Premier Support",
    description:
      "I provide premier support to my clients. Your questions and concerns are addressed promptly to ensure a seamless experience.",
  },
  {
    title: "Full-Stack Expertise",
    description:
      "With expertise in both front-end and back-end technologies, including Next.js, I create web applications that deliver exceptional user experiences.",
  },
];

const AboutSectionTwo = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="about" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="About My Portfolio" paragraph="" center />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.5 }}
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s">
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </motion.div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              {aboutTextData.map((item, index) => (
                <SingleAbout key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

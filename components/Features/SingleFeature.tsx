"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-8 flex w-fit rounded-md bg-primary bg-opacity-10 ">
          <Image alt="" width={100} height={100} src={icon} />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleFeature;

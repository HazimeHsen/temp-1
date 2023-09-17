"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const SingleAbout = ({
  item,
}: {
  item: {
    title: string;
    description: string;
  };
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
      className="mb-9">
      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {item.title}
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

export default SingleAbout;

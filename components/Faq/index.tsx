"use client";
import React, { useState } from "react";
import AccordionItem from "./SingleFaq";
import SectionTitle from "../Common/SectionTitle";

const Faq = () => {
  const accordionItems = [
    {
      header:
        "How long does it take to complete a freelance web development project?",
      text: "The duration of a freelance web development project can vary widely depending on its complexity, scope, and the developer's availability. Small to medium-sized projects may take a few weeks to a couple of months, while larger projects might extend to several months. It's essential to discuss project timelines and milestones with your freelance developer to get a more accurate estimate.",
    },
    {
      header: "What factors can affect the timeline of a freelance project?",
      text: "Several factors can impact the timeline of a freelance project. These include project complexity, the number of features and pages, client responsiveness (for feedback and approvals), the availability of resources (such as content and assets), and any unexpected technical challenges that may arise during development.",
    },
    {
      header:
        "How can I ensure my freelance web development project stays on schedule?",
      text: "To help ensure your project stays on schedule, maintain clear communication with your freelance developer. Provide detailed project requirements, content, and assets upfront. Be prompt with feedback and approvals. Address any questions or concerns promptly, and maintain realistic expectations about the development process.",
    },
    {
      header: "What happens if the project timeline needs to be extended?",
      text: "Sometimes, project timelines need to be extended due to unforeseen circumstances or changes in project requirements. It's essential to discuss any timeline adjustments with your freelance developer as early as possible. They can provide you with an updated timeline and, if necessary, a revised project scope and cost estimate.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative z-20 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <SectionTitle title="FAQ" paragraph="Any Questions? Look Here" center />
        <div className="flex flex-wrap">
          <div className="w-full px-4 ">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                header={item.header}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
export default Faq;

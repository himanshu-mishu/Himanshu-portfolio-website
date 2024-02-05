"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
 
  const {ref} = useSectionInView('About');


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        While i was in im 1st year I gained extensive experience in{" "}
        <span className="font-medium">UI & UX</span> and related technologies
        like as Figma for interactive graphic and motion design which also
        created an urge in me to become a fullstack to know the actual
        Developer's process to make my great designs into a fully functional
        scalable platforms, I decided to pursue my passion for programming. I
        enrolled in a FreeCodeCamp and learned Responsive Web Design ,
        Javascript Algos, DSA & Relational Database Management before initiating
        my React journey and did a lots of documentation reading and courses for
        perciving best learning path for{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Tailwind. I am always looking
        to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing my
        Guitar, Swimming, and playing basketball. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          Artificial Intelligence (AI) and Machine Learning
        </span>
        .
      </p>
    </motion.section>
  );
}

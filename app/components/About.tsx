"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
        initial={{y:300,opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true}}
        transition={{duration:0.5}}
        className="w-[100%]  pt-10 pb-16 pl-6 lg:pl-20 lg:pr-5">
      <div>
        <h2 className="text-2xl lg:text-4xl font-extrabold text-center mb-5">What I do</h2>
        <ul className="text-slate-300 text-lg lg:text-xl list-disc pr-4 lg:pr-0">
          <li className="mb-5 lg:mb-10">I Develop Full-Stack applications using MERN Stack.</li>
          <li className="mb-5 lg:mb-10">I'm proficient in creating dynamic and interactive web applications using Next.js, React, Bootstrap and Tailwind, ensuring seamless user experiences.</li>
          <li>I seamlessly integrate RESTful APIs to enhance the functionality and connectivity of web applications.</li>
        </ul>
      </div>
    </motion.section>
    

  )
}

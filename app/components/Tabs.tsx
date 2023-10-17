"use client";
import { motion } from 'framer-motion';
import React from 'react'
import Skills from './Skills';
import { useState } from 'react';
import Education from './Education';

export default function Tabs() {

    const [activeTab, setActiveTab] = useState("skills");
  return (
    <motion.section 
        initial={{y:300, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true}}
        transition={{duration:0.5}}
        className="flex flex-col justify-start align-middle text-white lg:ml-10 pl-5 pr-5 lg:pr-10 min-w-[50%]"
    >
        <div className='flex flex-row justify-evenly'>
            <h2 className={`text-2xl lg:text-4xl font-extrabold text-center duration-100 lg:pt-10 ${activeTab==="skills"?"border-b-4 rounded-sm border-rose-500 text-white hover:select-none":"border-b-4 border-[#2b2b2b] text-slate-300 hover:text-white hover:cursor-pointer"}`} onClick={ ()=> setActiveTab("skills")}>Skills</h2>
            <h2 className={`text-2xl lg:text-4xl font-extrabold text-center duration-100 lg:pt-10 ${activeTab==="education"?"border-b-4 rounded-sm border-rose-500 text-white hover:select-none":"border-b-4 border-[#2b2b2b] text-slate-300 hover:text-white hover:cursor-pointer"}`} onClick={()=> setActiveTab("education")}>Education</h2>
        </div>

        {activeTab==="skills"?<Skills/>:<Education/>}
    </motion.section>
  )
}

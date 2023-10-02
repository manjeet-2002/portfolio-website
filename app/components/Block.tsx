"use client"
import { motion } from 'framer-motion'
import React from 'react'

export default function Block() {
  return (
    <motion.div 
        initial={{x:-500,visibility:'hidden'}}
        whileInView={{x:-20,visibility:'visible'}}
        transition={{delay:0.5,duration:0.5}}
        viewport={{once:true}}
        className="absolute z-[-10] rounded-xl bg-violet-700 w-[100%] lg:w-[52%] h-[58%] sm:h-[60%] lg:h-[80%]"></motion.div>
  )
}

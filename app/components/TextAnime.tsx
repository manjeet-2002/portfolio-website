"use client"

import { TypeAnimation } from "react-type-animation"

export default function TextAnime() {
  return (
    <TypeAnimation
    className="text-rose-500"
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Manjeet',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'MERN Developer',
      1000,
      'C++ Developer',
      1000,
      'Next.js Developer',
      1000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '0.5m', display: 'inline-block' }}
    repeat={Infinity}
    
  />
  )
}

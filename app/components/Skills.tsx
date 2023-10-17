"use client";
import React from 'react'
import Image from 'next/image'
import { Tooltip } from '@geist-ui/core'
import SkillDisc from './SkillDisc';
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <>
        <div className='flex flex-wrap flex-row gap-10 mt-10 mb-10 justify-center'>
            <SkillDisc text="HTML-5" pathname='/html.svg' alternate='html'/>
            <SkillDisc text="CSS-3" pathname='/css.svg' alternate='css'/>
            <SkillDisc text="Node.js" pathname='/nodejs.svg' alternate='nodejs'/>
            <SkillDisc text="React.js" pathname='/react.svg' alternate='reactjs'/>
            <SkillDisc text="Next.js" pathname='/nextjs.svg' alternate='nextjs'/>
            <SkillDisc text="Express.js" pathname='/expressjs.svg' alternate='expressjs'/>
            <SkillDisc text="MongoDB" pathname='/mongo.svg' alternate='mongodb'/>
            <SkillDisc text="SQL" pathname='/sql.png' alternate='sql'/>
            <SkillDisc text="C++ Programming" pathname='/cpp.svg' alternate='c++'/>
            <SkillDisc text="Git" pathname='/git.svg' alternate='git'/>
            <SkillDisc text="Firebase" pathname='/firebase.svg' alternate='firebase'/>        
        </div>
    </>
  )
}

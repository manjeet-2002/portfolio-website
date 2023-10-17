"use client";

import { Tooltip } from '@geist-ui/core'
import Image from 'next/image'
import React from 'react'

export default function SkillDisc({pathname,text,alternate}:{pathname:string,text:string,alternate:string}) {
  return (
    <Tooltip text={<p className="text-xs">{text}</p>} enterDelay={200} placement='bottom' type='dark'>
            <div className='hover:bg-slate-200  transform hover:scale-110 shadow-lg bg-white shadow-black  duration-200  h-16  w-16 rounded-full flex items-center justify-center '>
                
                <Image
                    src={pathname}
                    alt={alternate}
                    width={48}
                    height={48}
                />
            </div>
            </Tooltip>
  )
}

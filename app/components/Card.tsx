import React from 'react'
import Image from 'next/image'

interface projectProps{
    pathname:string;
    alternate:string;
    title:string;
    desc:string;
    body?:any;
    demo?:string;
    github?:string;
}

export default function Card(props:projectProps) {
    const githubButton = (<a href={props.github} target='_blank'>
                            <button className='bg-black hover:bg-slate-500 text-white duration-200 rounded-md px-4 pl-2 pr-2'>
                                GitHub
                            </button>
                        </a>);
    const demoButton = (<a href={props.demo} target='_blank'>
                            <button className='flex flex-row items-center bg-violet-700 hover:bg-rose-500 duration-200 text-white rounded-md px-4 pl-2 pr-1 ml-4'>
                                Demo
                                <Image className="stroke-violet-500" src="open.svg" alt="gh" width={20} height={20}/>
                            </button>
                        </a>);
  return (
    <div className='bg-white transform hover:scale-105 duration-200 rounded-xl shadow-lg w-[300px] h-fit pb-5'> 
            <Image
                className="rounded-t-lg"
                src={props.pathname}
                alt={props.alternate}
                width={300}
                height={40}
            />
        <div className='px-5'>
            <h3 className='text-2xl text-black font-extrabold mt-2'>{props.title}</h3>
            <p className="text-md text-slate-600 mb-2">{props.desc}</p>
            {props.body!==undefined?props.body:""}
            <div className='pt-4 flex flex-row'>
                {props.github!==undefined?githubButton:""}
                {props.demo!==undefined?demoButton:""}
            </div>
        </div>

    </div>
  )
}

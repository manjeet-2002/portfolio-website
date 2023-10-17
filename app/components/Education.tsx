import React from 'react'

export default function Education() {
  return (
    <div className='flex flex-col align-middle items-center mt-5'>
      <div className='flex flex-col content-center items-center bg-slate-200 w-[80%] h-[60%] mt-5 rounded-xl px-5 pt-5 pb-5 mb-5 text-center shadow-inner shadow-black transform hover:scale-105 duration-200'>
        <h3 className='text-lg text-black font-bold'>National Institute of Technology, Jalandhar (NIT-J)</h3>
        <p className='text-slate-700'>B.Tech - Electronics and Communication Engineering</p>
        <p className='bg-rose-500 mt-4 w-32 text-center align-middle rounded-md'>2020-2024</p>
    </div>    
    <div className='flex flex-col content-center items-center bg-slate-200 w-[80%] h-[60%] mt-5 rounded-xl px-5 pb-5 pt-5 mb-5 text-center shadow-inner shadow-black transform hover:scale-105 duration-200'>
    <h3 className='text-lg text-black font-bold'>Shivalik Public School, Jalalabad West</h3>
    <p className='text-slate-700'>Secondary Education - PCM</p>
    <p className='bg-rose-500 mt-4 w-32 text-center align-middle rounded-md'>2018-2020</p>
</div>
    </div>
  )
}

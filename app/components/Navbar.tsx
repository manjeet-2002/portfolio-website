import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex flex-row items-center text-slate-300 pt-2 pb-2 mb-10 lg:mb-20 sticky top-0 bg-[#2b2b2b] z-10">
        <h1 className="basis-1/2 lg:ml-0 ml-[40%] text-xl lg:text-2xl pl-5 font-semibold">Manjeet</h1>
       
        <div className="flex basis-1/2 justify-end">
            <Link href="#skills" className="lg:basis-1/6 lg:block hidden"><h3 className="hover:text-rose-400 duration-200">About</h3></Link>
            <Link href="#projects" className="lg:basis-1/6 lg:block hidden"><h3 className="hover:text-rose-400 duration-200">Projects</h3></Link>
            <Link href="/#contact" className="lg:basis-1/6 lg:block hidden"><h3 className="hover:text-rose-400 duration-200">Contact</h3></Link>

        </div>
    </div>
  )
}

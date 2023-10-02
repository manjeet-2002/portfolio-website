import HomeSection from "./components/Home"
import About from "./components/About"
import Block from "./components/Block"
import Tabs from "./components/Tabs"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen container mx-auto px:0 lg:pt-10">
      <HomeSection/>
      
      <div id="skills" className="flex mt-10 lg:mt-32 flex-col lg:flex-row gap-10">
        <Block/>
        <About/>
        <Tabs/>
      </div>

      <Projects/>
      <Contact/>
      
    </main>
  )
}

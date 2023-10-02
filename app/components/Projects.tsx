import Card from "./Card";

export default function Projects() {
  return (
    
    <section id="projects" className="mb-20 mt-20 bg-slate-200 pb-10">
      
     <h2 className="text-2xl text-black lg:text-4xl font-extrabold text-center mt-16 mb-10">Projects</h2>
     <div className="flex flex-row flex-wrap justify-center gap-16">
      <Card 
        title="Connect"
        alternate="Connect image"
        pathname="/connect.png"
        desc="A web application where community can connect. Donate or collect items like food, clothes, etc."
        body={(<p className="">
              <span className="text-black">Using:</span><span className="text-slate-700 pl-4">React.js, Firestore, Netlify</span>   
            </p>)}
        github="https://github.com/manjeet-2002/connect-netlify"
        demo="https://connact.netlify.app/"
      />

      <Card
        title="CodeRooms"
        alternate="Coderooms image"
        pathname="/coderooms.png"
        desc="An online IDE and compiler for C++ programs."
        body={(<p className="">
               <span className="text-black">Using:</span><span className="text-slate-700 pl-4">React, Node, Express</span>   
            </p>)}
        github="https://github.com/manjeet-2002/coderoom"
      />

      <Card
        title="YouMark"
        alternate="Youmark image"
        pathname="/youmark.png"
        desc="A Chrome extenstion to bookmark YouTube video timestamps."
        body={(<p className="">
                <span className="text-black">Using:</span><span className="text-slate-700 pl-4">JavaScript, Manifest V3</span>   
            </p>)}
        github="https://github.com/manjeet-2002/YouMark"
      />

      <Card 
        title="OCUTYPE"
        alternate="ocutype image"
        pathname="/ocutype.jpg"
        desc="A communincation device for fully paralysed people that decodes blinking patterns of eyes into text."
        body={(<p>
                <span className="text-black">Using:</span><span className="text-slate-700 pl-4">Nodemcu, C++, Firebase</span>   
            </p>)}
      />

      </div>
      <div className="w-[100%] h-[100px] absolute z-[-10] skew-y-3 bg-slate-200"></div>
    </section>
  )
}

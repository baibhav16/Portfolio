import Link from "next/link"
import Shooting from "./component/shooting"

function Projects() {
  return (
    <div className="h-screen w-screen bg-black">
     <div className="stars">
      <div className="s1 absolute top-2 left-[35%]"></div>
      <div className="s2 absolute top-[10%] left-[50%]"></div>
      <div className="s4 absolute top-[25%] left-[10%]"></div>
      <div className="s5 absolute top-[65%] right-[25%]"></div>

<Shooting/>

 <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-40 backdrop-blur-md text-white">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <div className="space-x-6">
          
          <Link href="/pages/index.js" className="text-black hover:underline">Home</Link>
          <a href="#" className="hover:underline text-blue-500">Projects</a>
          <a href="#" className="hover:underline">Contact</a>
        
        </div>
      </nav>

      {/* Main Content */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-6 py-8 gap-y-24 " >
       
          <div
            className=" bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-white shadow-lg border border-white border-opacity-20 leheight"
          >
            <h2 className="text-xl font-semibold mb-2">Project </h2>
            <p className="text-sm">
              This is a short description of Project . It uses modern tech and responsive design.
            </p>
          </div>
     
      <div
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-white shadow-lg border border-white border-opacity-20 "
          >
            <h2 className="text-xl font-semibold mb-2">Project </h2>
            <p className="text-sm">
              This is a short description of Project . It uses modern tech and responsive design.
            </p>
          </div>
     
      <div
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-white shadow-lg border border-white border-opacity-20 "
          >
            <h2 className="text-xl font-semibold mb-2">Project </h2>
            <p className="text-sm">
              This is a short description of Project . It uses modern tech and responsive design.
            </p>
          </div>
     
      <div
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-white shadow-lg border border-white border-opacity-20 "
          >
            <h2 className="text-xl font-semibold mb-2">Project </h2>
            <p className="text-sm">
              This is a short description of Project . It uses modern tech and responsive design.
            </p>
          </div>
     
      </main>
    </div>

     </div>
    
  )
}

export default Projects

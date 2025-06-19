import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="relative w-full min-h-screen font-k2d overflow-x-hidden">
      {/* Decorative overlay */}
      <div className="background-overlay" />

      {/* Navigation */}
      <nav className="absolute top-4 left-0 right-0 flex justify-center space-x-4  gap-8 mt-2 sm:space-x-8 md:space-x-16 text-sm sm:text-base md:text-xl z-10">
        <a href="#about" className="text-black hover:underline">About</a>
        <a href="#projects" className="text-black hover:underline">Projects</a>
        <a href="#skills" className="text-black hover:underline">Skills</a>
        <a href="#contacts" className="text-black hover:underline">Contacts</a>
      </nav>

      {/* ABOUT Section */}
      <section id="about" className="h-screen flex flex-col items-center justify-center text-center z-10 px-4">
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-12 md:space-x-56 text-base sm:text-xl md:text-2xl mb-6">
          <div>Learn</div>
          <div>Implement</div>
          <div>Improve</div>
        </div>
        <div className="w-full flex justify-center mb-6">
          <div className="h-1 sm:h-2 bg-red-900 w-[80%] sm:w-[75%] md:w-[65%]"></div>
        </div>
        <div>
          <div className="text-black text-4xl sm:text-5xl md:text-7xl tracking-wider">
            <span className="text-transparent str">Hi! I am</span> Baibhav Kumar,
          </div>
          <p className="text-black text-base sm:text-xl md:text-2xl mt-4">
            a 3<sup>rd</sup> year CSE undergrad
          </p>
         

        </div>
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 text-sm sm:text-base md:text-xl text-slate-800">
          bk5398@srmist.edu.in
        </div>
      </section>

     <section id="projects" className="py-20 text-center z-10 px-4">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-black">Projects</h2>
  
  <div className="overflow-x-auto flex space-x-6 px-2 scrollbar-hide">
    {[
      {
        title: "AI-Based Fruits Expiry Predictor",
        description:
          "A deep learning model using MobileNetV2 to detect spoilage and estimate the remaining shelf life of fruits based on images, helping reduce food waste in smart fridges and grocery inventory systems.",
      },
      {
        title: "AI-Based Disease Predictor",
        description:
          "An interactive health assistant that uses NLP and machine learning to predict diseases from user symptoms and suggest relevant tests, built with React, Flask, and RandomForest.",
      },
      {
        title: "Markdown Previewer",
        description:
          "A real-time markdown editor built with React that lets users write and instantly preview styled text. Supports GitHub-style markdown syntax with clean UI and dark mode.",
      },
    ].map(({ title, description }, i) => (
      <div
        key={i}
        className="min-w-[280px] sm:min-w-[300px] bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white border-opacity-20 text-black gap-y-3 my-5"
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    ))}
  </div>
</section>


      {/* SKILLS Section */}
      <section id="skills" className="py-20 text-center z-10 ">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-black">Skills</h2>

  <div className="relative overflow-hidden bg-black w-full py-4">
    <div className="animate-marquee whitespace-nowrap flex items-center space-x-12">
      {["HTML", "CSS", "JavaScript", "React", "Next.js", "Python", "MySQL", "Firebase", "Tailwind CSS"].map((skill, i) => (
        <span key={i} className="text-white text-xl sm:text-2xl font-medium">
          {skill}
        </span>
      ))}
      {/* Repeat the same skills again for smooth loop */}
      {["HTML", "CSS", "JavaScript", "React", "Next.js", "Python", "MySQL", "Figma","UI/UX", "Tailwind CSS"].map((skill, i) => (
        <span key={`repeat-${i}`} className="text-white text-xl sm:text-2xl font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT Section */}
<section id="contacts" className="py-20 px-4 text-center z-10 contacts">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-black">Contact Me</h2>

   <p className=" text-base sm:text-xl md:text-2xl mt-4 text-blue-900">
            <a href="https://www.linkedin.com/in/baibhav-op/">
            Linkedin
            </a>
          </p>
  <p className="text-lg sm:text-xl text-black mb-8">

    Want to collaborate or ask something? Drop an email 👇
  </p>
  <a
    href="mailto:bk5398@srmist.edu.in"
    className="inline-block px-6 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
  >
    bk5398@srmist.edu.in
  </a>

  <div className="mt-10 text-sm text-gray-600">
    © {new Date().getFullYear()} Baibhav Kumar. All rights reserved.
  </div>
</section>

    </div>
  );
}

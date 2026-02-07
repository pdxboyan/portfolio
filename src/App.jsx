import Navbar from "./pages/components/navbar";
import Animate from "./pages/components/animateHeaders";
import MinorProjectCard from "./pages/components/minorCard";
import MajorProjectCard from "./pages/components/marjorCard";
import Modal from "./pages/components/modal";

import {
  renderIcons,
  skills,
  ferroVisual,
  moodRun,
  checkInServer,
  cFlat,
  fractals,
  portfolioWebsite,
} from "./pages/components/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEnvelope, FaLinkedin, FaDownload} from "react-icons/fa6";


function App() {
  return (
    <div className="pt-24 bg-orange-300">
      <Navbar />

      {/* Home */}
      <section
        id="hero"
        className="scroll-mt-24 h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/portfolio/images/background.jpg')" }}
      >
        <div className="absolute top-1/5 bg-gray/40 backdrop-blur-sm px-8 py-16 md:p-28  rounded-lg text-center">
          <h2 className="font-title text-7xl md:text-8xl font-bold text-white"> Boyan Gankov </h2>
          <p className="font-text mt-4 pt-6 text-2xl text-white">Full Stack Developer</p>
          <a
            href="/portfolio/Boyan_Gankov_Resume.pdf"
            download
            className="inline-flex items-center gap-3 mt-10 px-6 py-3
                      border-2 border-white rounded-xl
                      font-text text-xl text-white
                      transition-all duration-300 ease-out
                      hover:bg-white hover:text-black
                      hover:-translate-y-1 hover:shadow-xl"
          >
            Download CV
            <FaDownload size={18} />
          </a>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="scroll-mt-24 bg-orange-200 flex flex-col items-center justify-start p-12 pb-32">
        <Animate text="About Me" duration={2000} variant="primary" />
         <div className="w-[75vw] mx-auto pt-16 grid grid-cols-1 md:grid-cols-2 md:gap-16 items-start">

          {/* Left column */}
          <div className="flex flex-col items-center md:items-start text-left pb-8 md:pl-6 md:pt-16">
            <div className="text-gray-800 font-text text-lg">
              <img
                src="/portfolio/images/headshot.jpg"
                alt="Boyan Gankov"
                className="w-48 h-48 mx-auto object-cover rounded-2xl shadow-lg md:float-left md:mr-6 mb-4"
              />
              Hi, I'm Boyan - a recent computer science graduate from Portland State University. 
              I focus on backend systems, with an emphasis on system architecture, database design, 
              and CI/CD pipelines. I enjoy building software that solves real-world problems while 
              remaining elegant, lightweight, and secure. Outside of development, I spend my time 
              playing guitar, cooking, and shooting astrophotography - see above!
            </div>
            <p className="font-text text-lg text-gray-800 pt-4">
              You can find some of the tools I'm familiar with here, as well as projects I've 
              worked on below. Feel free to reach out with any inquiries or collaboration ideas, 
              I'd love to connect!
            </p>
          </div>

          {/* Right column */}
          <div className="text-center">
            <Animate text="Tech Stack" duration={2000} variant="secondary" />

            <div className="grid grid-cols-4 gap-6">
              {skills.map((skill) => (
                <a key={skill.label} 
                   href="#projects"
                   className="flex flex-col items-center gap-2 text-gray-700"
                >
                  {skill.type === "fa" ? 
                  (<FontAwesomeIcon icon={skill.icon} size="2x" className="transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.2] hover:text-black
                                                                            focus-within:-translate-y-1 focus-within:scale-[1.2]"/>) 
                  : 
                  (<skill.icon size="2em" className="transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.2] hover:text-black
                                                      focus-within:-translate-y-1 focus-within:scale-[1.2]" />)}
                  <span className="font-text text-sm ">{skill.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 bg-orange-300 flex flex-col items-center justify-start pt-12 px-6">
        <Animate text="Projects" duration={2000} variant="primary" />
          {/* Top 3 Projects */}
          <div className="flex flex-col items-center max-w-6xl w-full mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pb-8">

              {/* Check-in & POS Server */}
              <MajorProjectCard
                title="Check-in & Point of Sale Server"
                description="A deep dive into my senior capstone project and the role I played in my team throughout the development process. Showcases database & system design, Agile methods, connecting front & backends between teams, and overcoming challenges."
                image="/portfolio/images/psu.png"
                alt="Electronics Prototyping Lab"
                href="https://pdxboyan.github.io"
                icons={renderIcons(checkInServer, "check-in")}
              />

              {/* Moodrun App */}
              <MajorProjectCard
                title="MoodRun – AI Cloud App"
                description="MoodRun recommends 5 songs to a user based on their mood and current music taste by requesting access to their Spotify data, tying Spotify & OpenAI APIs together hosted on GCP's CloudRun."
                image="/portfolio/images/cloudrun.png"
                alt="Cloud Run App"
                href="https://pdxboyan.github.io/articles/12-13-24.html"
                icons={renderIcons(moodRun, "moodRun")}
              />

              {/* Ferrofluid Visualizer */}
              <MajorProjectCard
                title="Ferrofluid Music Visualizer"
                description="An incremental view into the design & development of a realtime audio visualizer streaming audio from a local web server — from circuit to software."
                image="/portfolio/images/ferrodemo.gif"
                alt="Ferrofluid Music Visualizer"
                href="https://pdxboyan.github.io/articles/12-11-24.html"
                icons={renderIcons(ferroVisual, "ferro")}
              />

            </div>
            
            {/* Cb Langauge */}
            <MinorProjectCard
              title="C Flat Programming Language"
              label="project"
              description="An overview and demo of the rudimentary Cb (C flat) programming language. Built from Python, Cb is a simple interpreted, functional programming language with the ability to evaluate and play simple melodies through a homebrew synthesizer."
              image="/portfolio/images/Cb.png"
              alt="C Flat Language"
              href="https://pdxboyan.github.io/articles/3-27-25.html"
              icons={renderIcons(cFlat, 'cFlat')}
            />

            {/* Fractals */}
            <MinorProjectCard
              title="Fractal Generation"
              label="blog"
              description="A look into my journey with fractals — how to generate, manipulate, and animate them using the C programming language and a custom graphics library built on X11."
              image="/portfolio/images/fractal.jpg"
              alt="The Burning Ship Fractal"
              href="https://pdxboyan.github.io"
              icons={renderIcons(fractals, 'fractals')}
            />

            {/* Portfolio Website */}
            <MinorProjectCard
              title="Portfolio Website"
              label="blog"
              description="Technical details about how I built this website; how I chose the tech stack as well as my struggles and successes."
              image="/portfolio/images/portfolio.png"
              alt="React + Vite + Tailwind"
              href="https://pdxboyan.github.io/"
              icons={renderIcons(portfolioWebsite, 'portfolio')}
            />

          </div>
      </section>

      {/* Contact Info */}
      <section id="contact" className="bg-orange-400 flex flex-col items-center justify-start pt-12 px-6">
        <Animate text="Contact" duration={2000} variant="primary" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 p-10 ">
           <a href="https://www.linkedin.com/in/boyan-gankov-718a9926a/"
                 label="LinkedIn"
                 >
            <div className="flex items-center space-x-3 pl-10 md:pl-24">
              <FaLinkedin size={28}/>
              <span>Boyan Gankov</span>
            </div>
          </a>

            <div className="flex items-center space-x-3 pl-10">
              <FaEnvelope size={28} />
              <span>pdx.boyan@gmail.com</span>
            </div>

        </div>
      </section>
    </div>
  );
}

export default App;
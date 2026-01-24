import Navbar from "./components/navbar";
import Animate from "./components/animateHeaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faPython,
  faNodeJs,
  faAws, 
  faGoogle, 
  faDocker, 
  faHtml5, 
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { 
  SiC,
  SiCplusplus, 
  SiRust, 
  SiTailwindcss, 
  SiFlask, 
  SiDjango, 
  SiPostgresql 
} from "react-icons/si";
import { FaEnvelope, FaLinkedin} from "react-icons/fa6";


const skills = [
  { icon: faAws, label: "AWS", type: "fa" },
  { icon: faGoogle, label: "GCP", type: "fa" },
  { icon: faDocker, label: "Docker", type: "fa" },
  { icon: faPython, label: "Python", type: "fa" },
  { icon: SiC, label: "C", type: "si" },
  { icon: SiCplusplus, label: "C++", type: "si" },
  { icon: SiRust, label: "Rust", type: "si" },
  { icon: SiPostgresql, label: "PostgreSQL", type: "si" },
  { icon: faReact, label: "React", type: "fa" },
  { icon: faNodeJs, label: "Node.js", type: "fa" },
  { icon: faHtml5, label: "HTML", type: "fa" },
  { icon: faCss3Alt, label: "CSS", type: "fa" },
  { icon: faJs, label: "JavaScript", type: "fa" },
  { icon: SiTailwindcss, label: "Tailwind", type: "si" },
  { icon: SiFlask, label: "Flask", type: "si" },
  { icon: SiDjango, label: "Django", type: "si" },
];

const ferroVisual = [
  { icon: faPython, type: "fa" }
]

const moodRun = [
  { icon: faGoogle, type: "fa" },
  { icon: faPython, type: "fa" },
  { icon: SiFlask, type: "si" },
]

const checkInServer = [
  { icon: faPython, type: "fa" },
  { icon: SiPostgresql, type: "si" },
  { icon: SiDjango, type: "si" },
  { icon: faJs, type: "fa" },
];

const cFlat = [
  { icon: faPython, type: "fa" }
]

const fractals = [
  { icon: SiC, type: "si"}
]

const portfolioWebsite = [
  { icon: faNodeJs, type: "fa"},
  { icon: faReact, type: "fa"},
  { icon: SiTailwindcss, type: "si"},
]
const renderIcons = (items) =>
  items.map((skill) => (
    <div
      key={skill.label}
      className="flex flex-col items-center gap-2 text-gray-700 hover:text-black transition-colors"
    >
      {skill.type === "fa" ? (<FontAwesomeIcon icon={skill.icon} size="2x" />) : (<skill.icon size="2em" />)}
    </div>
  ));

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
        <div className="absolute top-1/3 md:top-1/3 bg-gray/40 backdrop-blur-sm px-8 py-16 md:p-28  rounded-lg text-center">
          <h2 className="font-title text-7xl md:text-8xl font-bold text-white"> Boyan Gankov </h2>
          <p className="font-text mt-4 pt-6 text-2xl text-white">Full Stack Developer</p>
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
                <a href="#projects">
                  <div
                    key={skill.label}
                    className="flex flex-col items-center gap-2 text-gray-700"
                  >
                    {skill.type === "fa" ? 
                    (<FontAwesomeIcon icon={skill.icon} size="2x" className="transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[2] hover:text-black
                                                                             focus-within:-translate-y-2 focus-within:scale-[2]"/>) 
                    : 
                    (<skill.icon size="2em" className="transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[2] hover:text-black
                                                       focus-within:-translate-y-2 focus-within:scale-[2]" />)}
                    <span className="font-text text-sm ">{skill.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 bg-orange-300 flex flex-col items-center justify-start pt-12 px-6">
        <Animate text="Projects" duration={2000} variant="primary" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl pb-12">

            {/* Ferrofluid Visualizer */}
            <div className="
            bg-orange-200 rounded-2xl p-6
            shadow-lg transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl
            focus-within:-translate-y-2 focus-within:scale-[1.03] focus-within:shadow-2xl">
              <a
              href="https://pdxboyan.github.io/articles/12-11-24.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              >
                <h3 className="font-text font-bold text-xl mb-2">Ferrofluid Music Visualizer</h3>
                <img
                src="/portfolio/images/ferrofluid.jpg"
                alt="Ferrofluid Music Visualizer"
                className="w-48 h-48 object-cover rounded-2xl mb-4"
                />
                <p className="font-text text-gray-700">
                  An incremental view into the design & development of my ferrofluid music visualizer. 
                  Powered by a Raspberry Pi Pico W and an electromagnet, with data transfer streamed over 
                  a local wifi server built on micro-python.
                </p>
              </a>

              <div className="mt-auto pt-6">
                <div className="flex gap-4">
                  {renderIcons(ferroVisual)}
                </div>
              </div>
            </div>

            {/* Moodrun App */}
            <div className="
            bg-orange-200 rounded-2xl p-6 flex flex-col
            shadow-lg transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl
            focus-within:-translate-y-2 focus-within:scale-[1.03] focus-within:shadow-2xl">
              <a
              href="https://pdxboyan.github.io/articles/12-13-24.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              >
                <h3 className="font-text font-bold text-xl mb-2">Spotify / Open AI Cloud App</h3>
                <img
                src="/portfolio/images/cloudrun.png"
                alt="Cloud Run App"
                className="w-48 h-48 object-cover rounded-2xl mb-4"
                />
                <p className="font-text text-gray-700">
                  Flask / Python App launched with GCP's Cloud Run that ties Spotify & Open AI's 
                  APIs together to recommend 5 songs to a user based on their current top songs and 
                  their mood.
                </p>
              </a>
              
              <div className="mt-auto pt-6">
                <div className="flex gap-4">
                  {renderIcons(moodRun)}
                </div>
              </div>
            </div>

            {/* Check-in & POS Server */}
            <div className="
            bg-orange-200 rounded-2xl p-6 flex flex-col
            shadow-lg transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl
            focus-within:-translate-y-2 focus-within:scale-[1.03] focus-within:shadow-2xl">
              <a
              href="https://pdxboyan.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              >
                <h3 className="font-text font-bold text-xl mb-2">Check-in & Point of Sale Server</h3>
                <img
                src="/portfolio/images/psu.png"
                alt="Electronics Prototyping Lab"
                className="w-48 h-48 object-cover rounded-2xl mb-4"
                />
                <p className="font-text text-gray-700">
                  A deep dive into my senior capstone project and the role I played in my team 
                  throughout the development process. Showcases database & system design, agile 
                  methods, connecting front & backends, and overcoming challenges.
                </p>
              </a>

              <div className="mt-auto pt-6">
                <div className="flex gap-4">
                  {renderIcons(checkInServer)}
                </div>
              </div>
            </div>

            {/* Cb Langauge */}
            <div className="
            bg-orange-200 rounded-2xl p-6 flex flex-col
            shadow-lg transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl
            focus-within:-translate-y-2 focus-within:scale-[1.03] focus-within:shadow-2xl">
              <a
              href="https://pdxboyan.github.io/articles/3-27-25.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              >
                <h3 className="font-text font-bold text-xl mb-2">C Flat Programming Language</h3>
                <img
                src="/portfolio/images/Cb.png"
                alt="C Flat Language"
                className="w-48 h-48 object-cover rounded-2xl mb-4"
                />
                <p className="font-text text-gray-700">
                  An overview and demo of the rudimentary Cb (C flat) programming language. Built from 
                  python using the Lark library to structure grammar, Cb is a simple interpretted, functional 
                  programming language with the ability to evaluate and play simple melodies through a 
                  homebrew synthesizer. 
                </p>
              </a>

              <div className="mt-auto pt-6">
                <div className="flex gap-4">
                  {renderIcons(cFlat)}
                </div>
              </div>
              
            </div>

            {/* Fractals */}
            <div className="
            bg-orange-200 rounded-2xl p-6 flex flex-col
            shadow-lg transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl
            focus-within:-translate-y-2 focus-within:scale-[1.03] focus-within:shadow-2xl">
              <a
              href="https://pdxboyan.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              >
                <h3 className="font-text font-bold text-xl mb-2">Fractal Generation</h3>
                <img
                src="/portfolio/images/fractal.jpg"
                alt="The Burning Ship Fractal"
                className="w-48 h-48 object-cover rounded-2xl mb-4"
                />
                <p className="font-text text-gray-700">
                  A look into my journey with fractals -- how to generate, manipulate,
                  and animate them using the C programming language and a custom graphics 
                  library built on X11. 
                </p>
              </a>

              <div className="mt-auto pt-6">
                <div className="flex gap-4">
                  {renderIcons(fractals)}
                </div>
              </div>

            </div>

            {/* Portfolio Website */}
            <div className="
            bg-orange-200 rounded-2xl p-6 flex flex-col
            shadow-lg transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl
            focus-within:-translate-y-2 focus-within:scale-[1.03] focus-within:shadow-2xl">
              <a
              href="https://pdxboyan.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              >
                <h3 className="font-text font-bold text-xl mb-2">Portfolio Website</h3>
                <img
                src="/portfolio/images/portfolio.png"
                alt="React + Vite + Tailwind"
                className="w-48 h-48 object-cover rounded-2xl mb-4"
                />
                <p className="font-text text-gray-700">
                  Technical details about how I built this website; how I chose the tech 
                  stack as well as my struggles and successes. 
                </p>
              </a>

              <div className="mt-auto pt-6">
                <div className="flex gap-4">
                  {renderIcons(portfolioWebsite)}
                </div>
              </div>

            </div>

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
              <FaLinkedin size={28} />
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
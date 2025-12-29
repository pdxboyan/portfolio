import Navbar from "./components/navbar";
import Animate from "./components/animateHeaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faPython,
  faNodeJs,
  faGitAlt,
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


const skills = [
  { icon: faAws, label: "AWS", type: "fa" },
  { icon: faGoogle, label: "GCP", type: "fa" },
  { icon: faDocker, label: "Docker", type: "fa" },
  { icon: faPython, label: "Python", type: "fa" },
  { icon: SiC, label: "C", type: "si" },
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
  { icon: faGitAlt, label: "Git", type: "fa" },
];

function App() {
  return (
    <div className="pt-24 bg-orange-300">
      <Navbar />

      {/* Home */}
      <section
        id="hero"
        className="h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/portfolio/images/background.jpg')" }}
      >
        <div className="absolute top-1/8 md:top-1/3 bg-gray/40 backdrop-blur-sm p-20 md:p-28 rounded-lg text-center">
          <h2 className="font-title text-7xl md:text-8xl font-bold text-white"> Boyan Gankov </h2>
          <p className="font-text mt-4 pt-6 text-2xl text-white">Backend Engineer | Cloud & Systems</p>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="bg-orange-200 flex flex-col items-center justify-start p-12">
        <Animate text="About Me" color="#000" duration={2000} />
         <div className="max-w-screen-3xl mx-auto pt-16 grid grid-cols-1 md:grid-cols-2 md:gap-16 items-start">

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
              playing guitar, shooting astrophotography, and cooking.
            </div>
            <p className="font-text text-lg text-gray-800 pt-4">
              You can find some of the tools I'm familiar with here, as well as projects I've 
              worked on below. Feel free to reach out with any inquiries or collaboration ideas, 
              I'd love to connect!
            </p>
          </div>

          {/* Right column */}
          <div>
            <h3 className="font-title text-3xl font-bold mb-8 text-center">Tech Stack</h3>

            <div className="grid grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-2 text-gray-700 hover:text-black transition-colors"
                >
                  {skill.type === "fa" ? (<FontAwesomeIcon icon={skill.icon} size="2x" />) : (<skill.icon size="2em" />
                  )}
                  <span className="font-text text-sm">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="h-screen bg-orange-300 flex flex-col items-center justify-start pt-12 px-6">
        <Animate text="Projects" color="#000" duration={2000} />
      </section>

      {/* Contact Info */}
      <section id="contact" className="min-h-[350px] bg-orange-400 flex flex-col items-center justify-start pt-12 px-6">
        <Animate text="Contact" color="#000" duration={2000} />
      </section>
    </div>
  );
}

export default App;
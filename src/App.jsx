import Navbar from "./components/navbar";
import Animate from "./components/animateHeaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faPython,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { icon: faJs, label: "JavaScript" },
  { icon: faReact, label: "React" },
  { icon: faPython, label: "Python" },
  { icon: faNodeJs, label: "Node.js" },
  { icon: faGitAlt, label: "Git" },
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
        <div className="absolute top-1/3 bg-gray/40 backdrop-blur-sm p-28 rounded-lg text-center">
          <h2 className="font-title text-8xl font-bold text-white"> Boyan Gankov </h2>
          <p className="font-text mt-4 pt-6 text-2xl text-white">Full Stack Developer | Dev Ops | Security Enthusiest</p>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="h-screen bg-orange-200 flex flex-col items-center justify-start pt-24 px-6">
        <Animate text="About Me" color="#000" duration={2000} />
         <div className="max-w-screen-3xl mx-auto pt-32 grid grid-cols-1 md:grid-cols-2 gap-64 items-start">

          {/* Left column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/portfolio/images/headshot.jpg"
              alt="Boyan Gankov"
              className="w-48 h-48 object-cover rounded-2xl shadow-lg mb-6"
            />

            <p className="text-lg text-gray-800 mb-4">
              Hi, I'm Boyan — a computer science student with a focus on backend
              systems, databases, and data-driven applications.
            </p>

            <p className="text-lg text-gray-800">
              I enjoy building things that are both technically solid and visually
              intentional, especially when audio, data, and the web intersect.
            </p>
          </div>

          {/* Right column */}
          <div>
            <h3 className="font-title text-3xl font-bold mb-8 text-center md:text-left">
              Skills
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 place-items-center md:place-items-start">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-2 text-gray-700 hover:text-black transition-colors"
                >
                  <FontAwesomeIcon icon={skill.icon} size="2x" />
                  <span className="text-sm">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="h-screen bg-orange-300 flex flex-col items-center justify-start pt-24 px-6">
        <Animate text="Projects" color="#000" duration={2000} />
      </section>

      {/* Contact Info */}
      <section id="contact" className="min-h-[400px] bg-orange-400 flex flex-col items-center justify-start pt-12 px-6">
        <Animate text="Contact" color="#000" duration={2000} />
      </section>
    </div>
  );
}

export default App;
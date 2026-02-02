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
  SiPostgresql,
} from "react-icons/si";

/* ======================
   Icon Definitions
   ====================== */

export const skills = [
  { icon: faAws, label: "AWS", id: "aws", type: "fa" },
  { icon: faGoogle, label: "GCP", id: "gcp", type: "fa" },
  { icon: faDocker, label: "Docker", id: "docker", type: "fa" },
  { icon: faPython, label: "Python", id: "python", type: "fa" },
  { icon: SiC, label: "C", id: "c", type: "si" },
  { icon: SiCplusplus, label: "C++", id: "c++", type: "si" },
  { icon: SiRust, label: "Rust", id: "rust", type: "si" },
  { icon: SiPostgresql, label: "PostgreSQL", id: "postgresql", type: "si" },
  { icon: faReact, label: "React", id: "react", type: "fa" },
  { icon: faNodeJs, label: "Node.js", id: "node.js", type: "fa" },
  { icon: faHtml5, label: "HTML", id: "html", type: "fa" },
  { icon: faCss3Alt, label: "CSS", id: "css", type: "fa" },
  { icon: faJs, label: "JavaScript", id: "javascript", type: "fa" },
  { icon: SiTailwindcss, label: "Tailwind", id: "tailwind", type: "si" },
  { icon: SiFlask, label: "Flask", id: "flask", type: "si" },
  { icon: SiDjango, label: "Django", id: "django", type: "si" },
];

export const ferroVisual = [
  { icon: faPython, label: "Python", id: "python", type: "fa" },
];

export const moodRun = [
  { icon: faGoogle, label: "GCP", id: "gcp", type: "fa" },
  { icon: faPython, label: "Python", id: "python", type: "fa" },
  { icon: SiFlask, label: "Flask", id: "flask", type: "si" },
  { icon: faDocker, label: "Docker", id: "docker", type: "fa" },
];

export const checkInServer = [
  { icon: SiPostgresql, label: "PostgreSQL", id: "postgresql", type: "si" },
  { icon: faPython, label: "Python", id: "python", type: "fa" },
  { icon: SiDjango, label: "Django", id: "django", type: "si" },
  { icon: faJs, label: "JavaScript", id: "javascript", type: "fa" },
];

export const cFlat = [
  { icon: faPython, label: "Python", id: "python", type: "fa" },
];

export const fractals = [
  { icon: SiC, label: "C", id: "c", type: "si" },
];

export const portfolioWebsite = [
  { icon: faNodeJs, label: "Node.js", id: "node.js", type: "fa" },
  { icon: faReact, label: "React", id: "react", type: "fa" },
  { icon: SiTailwindcss, label: "Tailwind", id: "tailwind", type: "si" },
];

/* ======================
   Icon Renderer
   ====================== */

export const renderIcons = (items, prefix) =>
  items.map((skill) => (
    <div
      key={`${prefix}-${skill.id}`}
      className="flex flex-col items-center gap-2 text-gray-700 hover:text-black transition-colors"
      title={skill.label}
    >
      {skill.type === "fa" ? (
        <FontAwesomeIcon icon={skill.icon} size="2x" />
      ) : (
        <skill.icon size="2em" />
      )}
    </div>
  ));
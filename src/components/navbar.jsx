import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];


  const socialLinks = [
    {
      id: "github",
      href: "https://github.com/pdxboyan",
      icon: faGithub,
      label: "GitHub",
      hover: "hover:text-black",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/boyan-gankov-718a9926a/",
      icon: faLinkedin,
      label: "LinkedIn",
      hover: "hover:text-blue-700",
    },
  ];
  
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/50 backdrop-blur-lg border-b border-black/5">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 h-24 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Brand */}
        <a href="#hero" className="font-brand text-sm justify-self-start">
          boyan / portfolio
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex md:justify-self-center md:col-span-1">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`font-title transition-colors ${
                    active === link.id ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-black"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center justify-self-end px-6 space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className={`text-gray-600 transition-colors ${link.hover}`}
            >
              <FontAwesomeIcon icon={link.icon} size="xl" />
            </a>
          ))}
        </div>
        
        
        {/* Animated mobile hamburger button (= -> x) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 md:hidden justify-self-end"
          aria-label="Toggle menu"
        >
          <span className={`absolute top-1/4 left-0 w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`absolute top-3/4 left-0 w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu slide animations */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto": "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`font-title block py-2 ${
                  active === link.id ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-black"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile social icons */}
        <div className="flex items-center space-x-4 px-4 pb-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className={`text-gray-600 transition-colors ${link.hover}`}
            >
              <FontAwesomeIcon icon={link.icon} size="xl" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
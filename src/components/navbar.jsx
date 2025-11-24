import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Scrollspy using IntersectionObserver
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
      { threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Brand */}
        <a href="#hero" className="text-xl font-bold text-gray-900">Boyan Gankov</a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-900 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Links */}
        <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            {[
              { id: "hero", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "about", label: "About" },
              { id: "contact", label: "Contact" }
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`block py-2 px-3 rounded transition-colors ${
                    active === link.id
                      ? "text-blue-500 font-semibold"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={() => setIsOpen(false)} // close mobile menu on click
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4 md:mt-0 md:ml-6">
            <a
              href="https://github.com/pdxboyan"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
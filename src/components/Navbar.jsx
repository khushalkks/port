import React from 'react';

const Navbar = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: "About", ref: aboutRef },
    { label: "Skills", ref: skillsRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-center items-center gap-4 md:gap-10 py-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.ref)}
              className="relative px-4 py-2 text-gray-700 font-semibold text-sm md:text-base transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg shadow hover:shadow-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

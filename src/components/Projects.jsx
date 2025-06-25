import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Alpha_Quiz",
    description:
      "An interactive quiz application with real-time scoring, multiple categories, and beautiful animations. Built with React and modern UI patterns.",
    image: "/assets/p1.png",
    link: "https://qizzzzzz.vercel.app/",
    tech: ["React", "Tailwind", "Vanta 3-D Effects"],
    category: "QUIZ",
    gradient: "from-purple-600 to-blue-600",
    glowColor: "purple",
  },
  {
    id: 2,
    title: "Wellora",
    description:
      "Wellora Healthcare is a modern digital platform offering personalized health tracking, appointment booking, and medical record management. It empowers users with seamless access to wellness services and smart health insights.",
    image: "/assets/p2.png",
    link: "https://healthifnow-frontend1.onrender.com/",
    tech: ["React", "API", "Responsive Design"],
    category: "HEALTHCARE",
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "cyan",
  },
  {
    id: 3,
    title: "Ev-Rides",
    description:
      "evRide is a smart platform for discovering and booking electric vehicle rides. It promotes sustainable travel with real-time EV availability and optimized route planning.",
    image: "/assets/p3.png",
    link: "/assets/p3.png",
    tech: ["Vite", "React", "3D Effects"],
    category: "EVRIDES",
    gradient: "from-pink-500 to-rose-500",
    glowColor: "pink",
  },
];

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const handleImageLoad = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: false }));
  };

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 px-6 py-20 overflow-hidden"
      id="projects"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              My Projects
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-4"></div>
          </div>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Explore my latest creations - each project tells a unique story of
            innovation and creativity
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["All", "Web App", "Mobile App", "Portfolio"].map((category) => (
              <div
                key={category}
                className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/80 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* 3D Container */}
              <div className="relative perspective-1000">
                <div
                  className={`
                  relative transform-gpu transition-all duration-700 preserve-3d
                  ${
                    hoveredProject === project.id
                      ? "rotate-y-6 rotate-x-3 scale-105"
                      : ""
                  }
                `}
                >
                  {/* Glowing Background */}
                  <div
                    className={`
                    absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg opacity-30 
                    group-hover:opacity-60 transition-all duration-500
                  `}
                  ></div>

                  {/* Main Card */}
                  <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden bg-slate-700">
                      {/* Try to load the actual image first */}
                      {!imageErrors[project.id] && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(project.id)}
                          onLoad={() => handleImageLoad(project.id)}
                        />
                      )}
                      
                      {/* Fallback content if image fails to load */}
                      {imageErrors[project.id] && (
                        <div className="absolute inset-0 flex items-center justify-center text-center text-white/90 bg-gradient-to-br from-slate-600 to-slate-800">
                          <div>
                            <div className="text-6xl mb-4">
                              {project.id === 1 && "🧠"}
                              {project.id === 2 && "🏥"}
                              {project.id === 3 && "⚡"}
                            </div>
                            <p className="text-sm font-medium">
                              {project.title}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Overlay Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Live Indicator */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-300 text-xs font-medium">
                            Live
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 bg-gradient-to-r ${project.gradient} text-white font-bold py-3 px-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                        >
                          View Live 🚀
                        </a>
                        <button className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white/80 hover:bg-white/20 transition-all duration-300">
                          <span className="text-lg">👨‍💻</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 3D Shadow */}
                  <div
                    className={`
                    absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-3xl
                    transform translate-x-8 translate-y-8 -z-10 blur-xl
                  `}
                  ></div>
                </div>
              </div>

              {/* Floating Elements */}
              {hoveredProject === project.id && (
                <>
                  <div
                    className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${project.gradient} rounded-full animate-bounce opacity-80`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-70`}
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className={`absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce opacity-60`}
                    style={{ animationDelay: "1s" }}
                  ></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Like what you see?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate and create something extraordinary together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start a Project 🎯
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-pink-400 text-pink-400 font-bold rounded-xl hover:bg-pink-400 hover:text-white transition-all duration-300">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        .rotate-x-3 {
          transform: rotateX(3deg);
        }
      `}</style>
    </section>
  );
};

export default Project;
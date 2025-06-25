import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 px-6 py-20 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Photo Section with 3D Effects */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Glowing Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 animate-pulse transition-all duration-500"></div>

            {/* 3D Container */}
            <div className="relative w-80 h-80 transform-gpu perspective-1000">
              <div className="relative w-full h-full transform-gpu transition-all duration-700 preserve-3d group-hover:rotate-y-12 group-hover:rotate-x-6">
                {/* Main Photo */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                    <div className="text-center text-white/70">
                      <img
                        src="/assets/k2.png"
                        alt="User Photo"
                        className="w-80 h-80 object-cover full mx-auto mb-2 shadow-lg"
                      />
                      {/* Optionally keep a caption below the image */}
                      <p className="text-sm"></p>
                    </div>
                  </div>
                </div>

                {/* 3D Shadow/Depth */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-900 to-pink-900 opacity-30 transform translate-x-6 translate-y-6 -z-10"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
            <div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-bounce opacity-70"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Animated Title */}
          <div className="relative mb-8">
            <h2 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
              About Me
            </h2>
            <div className="absolute -bottom-2 left-0 w-20 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Content Card */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <p className="text-lg text-gray-100 leading-relaxed font-light">
              नमस्ते! I'm{" "}
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Khushal Kumar sahu
              </span>
              , a passionate full-stack developer who loves creating{" "}
              <span className="text-yellow-300 font-semibold">
                mind-blowing
              </span>{" "}
              web experiences.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                <span>
                  Expert in{" "}
                  <strong className="text-cyan-300">
                   Expert in React and Node.js, crafting high-performance web apps with clean architecture.
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                <span>
                  Passionate about{" "}
                  <strong className="text-purple-300">
                   Skilled in building scalable full-stack solutions using the latest JavaScript technologies.
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse"></div>
                <span>
                  Building the{" "}
                  <strong className="text-yellow-300">
                   Driven by code, performance, and creating seamless user experiences for the modern web.
                  </strong>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#projects">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-700">
                  View My Work
                </button>
              </a>
              <a href= "#contact">
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
              </a>
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
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .rotate-x-6 {
          transform: rotateX(6deg);
        }
      `}</style>
    </section>
  );
};

export default About;

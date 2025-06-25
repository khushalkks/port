import React, { useState } from 'react';

// Mock icons - replace with actual react-icons when using
const mockIcons = {
  html: '🌐',
  css: '🎨',
  js: '⚡',
  react: '⚛️',
  tailwind: '💨',
  node: '🟢',
  express: '🚀',
  mongo: '🍃',
  mysql: '🐬',
  git: '📝',
  github: '🐙'
};

const sections = [
  {
    title: 'Frontend Magic',
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'HTML5', icon: mockIcons.html, color: 'from-orange-400 to-red-500', proficiency: 95 },
      { name: 'CSS3', icon: mockIcons.css, color: 'from-blue-400 to-blue-600', proficiency: 90 },
      { name: 'JavaScript', icon: mockIcons.js, color: 'from-yellow-400 to-yellow-600', proficiency: 88 },
      { name: 'React', icon: mockIcons.react, color: 'from-sky-400 to-cyan-500', proficiency: 85 },
      { name: 'Tailwind', icon: mockIcons.tailwind, color: 'from-cyan-400 to-teal-500', proficiency: 80 },
       { name: 'Bootstrap', icon: mockIcons.css, color: 'from-blue-400 to-blue-600', proficiency: 90 },
    ],
  },
  {
    title: 'Backend Power',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', icon: mockIcons.node, color: 'from-green-500 to-green-700', proficiency: 82 },
      { name: 'Express.js', icon: mockIcons.express, color: 'from-gray-600 to-gray-800', proficiency: 78 },
    ],
  },
  {
    title: 'Database Mastery',
    gradient: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'MongoDB', icon: mockIcons.mongo, color: 'from-green-600 to-green-800', proficiency: 75 },
      { name: 'MySQL', icon: mockIcons.mysql, color: 'from-blue-600 to-blue-800', proficiency: 70 },
    ],
  },
  {
    title: 'Version Control',
    gradient: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Git', icon: mockIcons.git, color: 'from-red-500 to-red-700', proficiency: 85 },
      { name: 'GitHub', icon: mockIcons.github, color: 'from-gray-700 to-black', proficiency: 80 },
    ],
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6 overflow-hidden" id="skills">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-600 to-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Main Title */}
        <div className="mb-20">
          <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tight">
            My Skills
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 font-light">Technologies I work with to create amazing experiences</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="group">
              
              {/* Section Header */}
              <div className="mb-8">
                <div className={`inline-block px-8 py-4 rounded-2xl bg-gradient-to-r ${section.gradient} text-white font-bold text-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500`}>
                  {section.title}
                </div>
              </div>

              {/* Skills Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {section.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="relative group/skill"
                    onMouseEnter={() => setHoveredSkill(`${sectionIdx}-${skillIdx}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    
                    {/* 3D Card Container */}
                    <div className="relative perspective-1000">
                      <div className={`
                        relative w-full h-32 transform-gpu transition-all duration-700 preserve-3d
                        ${hoveredSkill === `${sectionIdx}-${skillIdx}` ? 'rotate-y-12 rotate-x-6' : ''}
                        group-hover/skill:scale-110
                      `}>
                        
                        {/* Main Card */}
                        <div className={`
                          absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 shadow-2xl
                          group-hover/skill:shadow-3xl transition-all duration-500
                        `}>
                          <div className="w-full h-full rounded-2xl bg-slate-900/90 backdrop-blur-xl flex flex-col items-center justify-center gap-2 border border-white/10">
                            
                            {/* Icon */}
                            <div className="text-4xl transform group-hover/skill:scale-125 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            
                            {/* Skill Name */}
                            <p className="text-white font-bold text-sm tracking-wide">
                              {skill.name}
                            </p>
                            
                            {/* Proficiency Bar */}
                            <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden mt-1">
                              <div 
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ 
                                  width: hoveredSkill === `${sectionIdx}-${skillIdx}` ? `${skill.proficiency}%` : '0%' 
                                }}
                              ></div>
                            </div>
                            
                            {/* Proficiency Percentage */}
                            {hoveredSkill === `${sectionIdx}-${skillIdx}` && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-lg animate-fade-in">
                                {skill.proficiency}%
                              </div>
                            )}
                          </div>
                        </div>

                        {/* 3D Shadow */}
                        <div className={`
                          absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-30 
                          transform translate-x-4 translate-y-4 -z-10 blur-sm
                        `}></div>
                      </div>
                    </div>

                    {/* Floating Particles */}
                    {hoveredSkill === `${sectionIdx}-${skillIdx}` && (
                      <>
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-500"></div>
                        <div className="absolute top-1/2 -right-3 w-2 h-2 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to work together?</h3>
            <p className="text-gray-300 mb-6">Let's build something amazing with these technologies!</p>
            <a href="#contact">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Let's Connect 🚀
            </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
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
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
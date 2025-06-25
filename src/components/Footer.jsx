import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white opacity-20 rotate-45 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-6 h-6 border-2 border-white opacity-30 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-purple-400 opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-5 h-5 bg-blue-400 opacity-30 rotate-12 animate-bounce animation-delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Copyright section with 3D effect */}
        <div className="mb-8 md:mb-0 transform hover:scale-105 transition-all duration-300">
          <div className="relative">
            <p className="text-lg font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
              &copy; {new Date().getFullYear()} Khushal Kumar sahu
            </p>
            <p className="text-sm text-gray-300 mt-1 opacity-80">
              All rights reserved
            </p>
            {/* 3D shadow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-lg opacity-20 transform translate-x-1 translate-y-1 -z-10"></div>
          </div>
        </div>

        {/* Social links with advanced 3D effects */}
        <div className="flex space-x-8">
          <a 
            href="https://github.com/khushalkks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative transform transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:-translate-y-2">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-150"></div>
              
              {/* Icon container with glassmorphism */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 border border-white border-opacity-20 shadow-2xl">
                <FaGithub className="text-2xl text-white group-hover:text-gray-200 transition-colors duration-300" />
                
                {/* 3D depth effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white from-10% to-transparent rounded-xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-black from-5% to-transparent rounded-xl opacity-20"></div>
              </div>
              
              {/* Floating label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs bg-black bg-opacity-70 text-white px-2 py-1 rounded-md whitespace-nowrap">
                  GitHub
                </span>
              </div>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/khushal-kumar-sahu-4aaa4a242" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:-translate-y-2">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-150"></div>
              
              {/* Icon container with glassmorphism */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 border border-white border-opacity-20 shadow-2xl">
                <FaLinkedin className="text-2xl text-white group-hover:text-blue-200 transition-colors duration-300" />
                
                {/* 3D depth effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white from-10% to-transparent rounded-xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-black from-5% to-transparent rounded-xl opacity-20"></div>
              </div>
              
              {/* Floating label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs bg-black bg-opacity-70 text-white px-2 py-1 rounded-md whitespace-nowrap">
                  LinkedIn
                </span>
              </div>
            </div>
          </a>

          <a 
            href="kkskumarsahu31@example.com"
            className="group relative"
          >
            <div className="relative transform transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:-translate-y-2">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-150"></div>
              
              {/* Icon container with glassmorphism */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 border border-white border-opacity-20 shadow-2xl">
                <FaEnvelope className="text-2xl text-white group-hover:text-purple-200 transition-colors duration-300" />
                
                {/* 3D depth effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white from-10% to-transparent rounded-xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-black from-5% to-transparent rounded-xl opacity-20"></div>
              </div>
              
              {/* Floating label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs bg-black bg-opacity-70 text-white px-2 py-1 rounded-md whitespace-nowrap">
                  Email
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-pulse animation-delay-500"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
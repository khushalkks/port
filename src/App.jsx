import React, { useRef } from 'react';
//import VantaBackground from './components/VantaBackground';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const footerRef = useRef();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <VantaBackground /> */}
      <div className="relative z-10">
        <Navbar
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          footerRef={footerRef}
        />
        <div className="pt-20" ref={aboutRef}><About /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={contactRef}><Contact /></div>
        <div ref={footerRef}><Footer /></div>
      </div>
    </div>
  );
}

export default App;

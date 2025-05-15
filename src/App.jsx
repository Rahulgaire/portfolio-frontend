import React from 'react';
import Navbar from './Common/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import TechStack from './Pages/Techstack';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Roadmap from './Pages/Roadmap';
import Contact from './Pages/Contact';
import Footer from './Common/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="bg-[#171d32] w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Roadmap />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
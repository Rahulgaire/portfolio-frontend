import React from 'react';
import Navbar from './Common/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Toaster } from 'react-hot-toast';
import TechStack from './Pages/Techstack';
import Footer from './Common/Footer';
const App = () => {
  return (
    <div className="bg-[#171d32] w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <TechStack/>
      <Contact />
      <Footer/>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;

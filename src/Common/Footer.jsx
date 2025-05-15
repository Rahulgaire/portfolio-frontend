import React from 'react'

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <footer className="flex flex-col space-y-10 justify-center m-10 font-serif bg-blue-1100">

    <nav className="flex justify-center flex-wrap gap-6 text-white font-medium">
        <a
          className="hover:text-yellow-500"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Home
        </a>
        <a
          className="hover:text-yellow-500"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </a>
        <a
          className="hover:text-yellow-500"
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('experience');
          }}
        >
          Experience
        </a>
        <a
          className="hover:text-yellow-500"
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}
        >
          Projects
        </a>
        <a
          className="hover:text-yellow-500"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </a>
    </nav>

    <div className="flex justify-center space-x-5">
        <a href="https://facebook.com/rahul.gaire.948" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://www.linkedin.com/in/rahul-gaire-368136324/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com/rahulgaire_" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://github.com/Rahulgaire" target="_blank" rel="noopener noreferrer">
            <img src="https://github.com/fluidicon.png" width={30}/>
        </a>
        <a href="https://twitter.com/gairerahul44239" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p className="text-center text-white font-medium">&copy; {new Date().getFullYear()} Company Ltd. All rights reserved.
</p>
</footer>
  )
}

export default Footer

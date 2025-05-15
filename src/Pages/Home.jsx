import React from "react";
import avatarImg from "../assets/rahul.jpg";

function Home() {
  return (
    <div id="home" className="bg-gray-900 text-white px-6 md:px-16 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight">
            Hello, I’m Rahul.
          </h1>
          <p className="text-base md:text-xl mt-4 text-gray-300">
            I’m a passionate MERN stack developer focused on building modern,
            responsive, and user-friendly web applications. I enjoy turning
            ideas into real-world digital experiences.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-[#465697] text-white font-semibold rounded-full hover:opacity-80 hover:scale-110 transform transition-transform duration-300 ease-in-out"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Me
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={avatarImg}
            alt="Rahul's profile"
            className="w-60 md:w-80 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

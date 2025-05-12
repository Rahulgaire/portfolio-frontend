import React from "react";
import avatarImg from "../assets/rahul.jpg";

function Home() {
  return (
    <div className="bg-gray-900 text-white px-6 md:px-16 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight">
            Hello, I am Rahul.
          </h1>
          <p className="text-base md:text-xl mt-4 text-gray-300">
            I'm a passionate MERN stack developer currently interning at Ansh Infotech. I love building full-stack web applications that are both functional and beautiful.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#465697] text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition duration-300">
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

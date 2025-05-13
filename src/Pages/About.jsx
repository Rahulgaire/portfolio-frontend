import React from "react";
import { IoArrowForward } from "react-icons/io5";
import avatar from "../assets/7358653-removebg-preview.png";
import cv from "../assets/RahulGaireCV.pdf";
const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row overflow-hidden items-center justify-center bg-black shadow-2xl mx-4 md:mx-20 bg-opacity-50 rounded-xl p-8 md:p-12"
    >
      {/* Left Side - Image and CV Button */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
          About
        </h2>
        <div className="flex flex-col items-center md:items-start">
          <img
            className="h-64 w-64 rounded-full shadow-lg mb-6"
            src={avatar}
            alt="Profile"
          />
          <a
            href={cv}
            download
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Side - Skills */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <ul className="space-y-6">
          <li className="flex gap-4 items-start">
            <IoArrowForward size={30} className="text-amber-500" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-relaxed text-gray-300">
                Skilled in building responsive user interfaces using{" "}
                <strong>React</strong>, <strong>HTML</strong>,{" "}
                <strong>CSS</strong>, <strong>Tailwind CSS</strong>, and{" "}
                <strong>JavaScript</strong>.
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <IoArrowForward size={30} className="text-amber-500" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Database Developer
              </h1>
              <p className="text-sm md:text-md leading-relaxed text-gray-300">
                Experienced with <strong>MongoDB</strong> for NoSQL databases
                and <strong>MySQL</strong> for relational data modeling.
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <IoArrowForward size={30} className="text-amber-500" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-relaxed text-gray-300">
                Proficient in building RESTful APIs using{" "}
                <strong>Node.js</strong> and <strong>Express</strong>,
                integrating with both SQL and NoSQL databases.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

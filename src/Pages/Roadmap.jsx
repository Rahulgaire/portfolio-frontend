import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';
import { HiLightningBolt } from 'react-icons/hi';
import { GoProject } from 'react-icons/go';

const Roadmap = () => {
  const roadmapItems = [
    {
      icon: <FaReact className="text-blue-500 w-6 h-6" />,
      title: "MERN Stack",
      description: "Mastering MongoDB, Express, React and Node.js to build scalable web applications."
    },
    {
      icon: <SiTypescript className="text-blue-600 w-6 h-6" />,
      title: "TypeScript",
      description: "Adding type safety to enhance code quality and maintainability."
    },
    {
      icon: <GoProject className="text-green-500 w-6 h-6" />,
      title: "Real Projects",
      description: "Building complex applications with authentication and APIs."
    },
    {
      icon: <FaGitAlt className="text-orange-600 w-6 h-6" />,
      title: "Git Mastery",
      description: "Advanced version control for better collaboration."
    }
  ];

  return (
    <section className="px-6 py-12 md:px-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 w-full">
      <div className="flex items-center gap-3 mb-6">
        <HiLightningBolt className="text-yellow-500 w-7 h-7" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Roadmap</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roadmapItems.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-3 gap-3">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transition-all duration-300">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          I'm excited about this learning journey and look forward to growing as a developer!
        </p>
      </div>
    </section>
  );
};

export default Roadmap;
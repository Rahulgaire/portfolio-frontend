import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiMysql,SiPostman  } from 'react-icons/si';

const techs = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaGithub />, name: 'Git & GitHub' },
  { icon: <SiPostman  />, name: 'Postman' },
];

const TechStack = () => {
  return (
    <>
    <section id="techstack" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white hover:text-[#00d9ff] transition duration-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default TechStack;

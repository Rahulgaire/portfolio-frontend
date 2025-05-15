import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="px-6 py-12 md:px-20 bg-gray-900 transition-colors duration-300 w-full" id="experience">
      <div className="flex items-center gap-3 mb-6">
        <FaBriefcase className="text-3xl text-white" />
        <h2 className="text-3xl font-bold text-white">Work Experience</h2>
      </div>

      <div className="bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 transition-all duration-300 border border-gray-700">
        <div className="flex justify-between flex-wrap items-center mb-3">
          <h3 className="text-2xl font-semibold text-white">Software Intern — Ansh Infotech</h3>
          <span className="text-sm text-gray-400 mt-1 md:mt-0">Feb 2025 – Present</span>
        </div>

        <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
          <li>
            Developed dynamic interfaces using <span className="font-semibold text-amber-400">React</span> for dashboards and data visualization tools.
          </li>
          <li>
            Built scalable backend APIs using <span className="font-semibold text-green-400">Express.js</span> and <span className="font-semibold text-green-400">MongoDB</span>.
          </li>
          <li>
            Used <span className="font-semibold text-purple-400">Git & GitHub</span> for collaboration and version control in a team environment.
          </li>
          <li>
            Optimized performance by refining <span className="font-semibold text-blue-400">React state management</span> and minimizing asset load.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

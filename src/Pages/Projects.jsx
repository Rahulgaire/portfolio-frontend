import React from 'react';

const projects = [
  {
    title: 'Myntra Clone',
    description: 'A static front-end clone of the Myntra e-commerce homepage using core web technologies.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Rahulgaire/Myntra-clone.git',
    demo: '#'
  },
  {
    title: 'Blogging Website',
    description: 'A full-stack blogging platform with user authentication, CRUD operations, and a responsive UI.',
    tech: ['Node.js', 'MongoDB', 'ReactJS', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Rahulgaire/Blogs.git',
    demo: '#'
  },
  {
    title: 'Ice Cream Parlour',
    description: 'A Django-based UI design for a POS system. The contact form is fully functional and stores data in the backend, while other features like stock and billing are currently static.',
    tech: ['HTML', 'MySQL', 'Django', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Rahulgaire/icecream-seller-webapp.git',
    demo: '#'
  },
  {
    title: 'Todo List',
    description: 'A dynamic React-powered todo/wishes app featuring animations, image uploads, and persistent storage.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Rahulgaire/todolist.git',
    demo: '#'
  }
];

function Projects() {
  return (
    <div className="bg-gray-900 py-14 px-4 md:px-10" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
            <p className="text-gray-300 mt-3 text-sm">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-cyan-700 text-white text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 text-sm">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">
                GitHub
              </a>
              {project.demo !== '#' ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
                  Live Demo
                </a>
              ) : (
                <span className="text-gray-400">Demo Not Available</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

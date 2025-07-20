import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Shield, Lock, Globe, Database } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Vulnerability Scanner',
      description: 'Automated vulnerability scanning tool built with Python for web application security assessment.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      tech: ['Python', 'Flask', 'SQLite', 'Nmap'],
      category: 'Security',
      github: 'https://github.com/SMOZHIVARMAN',
      demo: '#',
      icon: Shield
    },
    {
      id: 2,
      title: 'Network Traffic Analyzer',
      description: 'Real-time network traffic monitoring and analysis dashboard with threat detection capabilities.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      tech: ['Python', 'Wireshark', 'React', 'D3.js'],
      category: 'Security',
      github: 'https://github.com/SMOZHIVARMAN',
      demo: '#',
      icon: Globe
    },
    {
      id: 3,
      title: 'Cryptographic Chat App',
      description: 'End-to-end encrypted messaging application with advanced cryptographic protocols.',
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg',
      tech: ['React', 'Node.js', 'Socket.io', 'AES'],
      category: 'Cryptography',
      github: 'https://github.com/SMOZHIVARMAN',
      demo: '#',
      icon: Lock
    },
    {
      id: 4,
      title: 'Digital Forensics Toolkit',
      description: 'Comprehensive digital forensics analysis tool for investigating cyber incidents.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
      tech: ['Python', 'Tkinter', 'SQLite', 'Volatility'],
      category: 'Forensics',
      github: 'https://github.com/SMOZHIVARMAN',
      demo: '#',
      icon: Database
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with cybersecurity-themed animations and dark mode.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      category: 'Web Development',
      github: 'https://github.com/SMOZHIVARMAN',
      demo: '#',
      icon: Globe
    },
    {
      id: 6,
      title: 'SIEM Dashboard',
      description: 'Security Information and Event Management dashboard for real-time threat monitoring.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
      tech: ['Python', 'Django', 'PostgreSQL', 'ELK Stack'],
      category: 'Security',
      github: 'https://github.com/SMOZHIVARMAN',
      demo: '#',
      icon: Shield
    }
  ];

  const categories = ['All', 'Security', 'Cryptography', 'Forensics', 'Web Development'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Showcasing my cybersecurity projects and development work
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <Filter className="w-5 h-5 mr-2 mt-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
              className={`project-card group rounded-xl overflow-hidden ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-2xl`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-blue-500/20 backdrop-blur-sm rounded-lg">
                    <project.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded ${
                        isDark
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No projects found for the selected category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
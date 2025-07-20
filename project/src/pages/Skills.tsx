import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Database, Cloud, Terminal, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Skills: React.FC = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      ]
    },
    {
      title: 'Cybersecurity Tools',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Kali Linux', icon: 'https://img.icons8.com/color/48/000000/linux--v1.png' },
        { name: 'Parrot Linux', icon: 'https://img.icons8.com/color/48/000000/linux--v2.png' },
        { name: 'Metasploit', icon: 'https://img.icons8.com/color/48/000000/security-checked.png' },
        { name: 'Cryptography', icon: 'https://img.icons8.com/color/48/000000/lock--v1.png' },
        { name: 'Blockchain', icon: 'https://img.icons8.com/color/48/000000/blockchain-technology.png' },
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'REST API', icon: 'https://img.icons8.com/color/48/000000/api-settings.png' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
        { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      ]
    },
    {
      title: 'Development Tools',
      icon: Terminal,
      color: 'from-indigo-500 to-indigo-600',
      skills: [
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Notion', icon: 'https://img.icons8.com/color/48/000000/notion--v1.png' },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive technical skills across cybersecurity, software development, and modern technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 15,
                      transition: { duration: 0.3 }
                    }}
                    className={`group relative p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      isDark 
                        ? 'bg-gray-700/30 hover:bg-blue-500/10 border border-gray-600/30 hover:border-blue-500/30' 
                        : 'bg-white/30 hover:bg-blue-500/10 border border-gray-200/30 hover:border-blue-500/30'
                    } backdrop-blur-sm hover:shadow-lg`}
                  >
                    {/* Skill Icon with Animation */}
                    <div className="w-12 h-12 mx-auto mb-3 relative">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement?.parentElement?.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center">
                                  <span class="text-white font-bold text-xs">${skill.name.substring(0, 3)}</span>
                                </div>
                                <span class="text-sm font-medium text-center block group-hover:text-blue-500 transition-colors">${skill.name}</span>
                              `;
                            }
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Skill Name */}
                    <span className="text-sm font-medium text-center block group-hover:text-blue-500 transition-colors">
                      {skill.name}
                    </span>

                    {/* Hover Effect Overlay with Light Blue Background */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 rounded-xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Tooltip for Skill Name on Hover */}
                    <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 ${
                      isDark 
                        ? 'bg-gray-900 text-white border border-gray-700' 
                        : 'bg-white text-gray-900 border border-gray-200'
                    } shadow-lg`}>
                      {skill.name}
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                        isDark ? 'border-t-gray-900' : 'border-t-white'
                      }`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className={`p-8 rounded-2xl text-center ${
            isDark 
              ? 'bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-500/20' 
              : 'bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200'
          }`}>
            <h3 className="text-2xl font-bold mb-4">Data Structures & Algorithms</h3>
            <p className={`mb-6 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Proficient in DSA using Python and Java with extensive practice across multiple coding platforms
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting', 'Searching', 'Recursion'].map((topic) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.15)'
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isDark
                      ? 'bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:border-blue-500/40'
                      : 'bg-blue-50 border border-blue-200 text-blue-700 hover:border-blue-300'
                  }`}
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
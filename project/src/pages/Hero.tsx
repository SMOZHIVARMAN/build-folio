import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const skills = [
    'Cybersecurity', 'Penetration Testing', 'Digital Forensics', 'Risk Assessment',
    'Network Security', 'Incident Response', 'SIEM', 'Vulnerability Assessment'
  ];

  const tools = [
    { name: 'Kali Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Metasploit', icon: 'https://img.icons8.com/color/48/000000/security-checked.png' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'AWS', icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 text-sm"
              >
                <div className="flex items-center space-x-1 text-blue-500">
                  <MapPin className="h-4 w-4" />
                  <span>Chennai, India</span>
                </div>
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>•</span>
                <div className="flex items-center space-x-1 text-green-500">
                  <Calendar className="h-4 w-4" />
                  <span>Available for hire</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              >
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-500 via-violet-500 to-blue-600 bg-clip-text text-transparent">
                  MOZHIVARMAN S
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl font-semibold text-blue-400"
              >
                Cybersecurity Analyst
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Passionate cybersecurity professional specializing in threat analysis, 
                penetration testing, and digital forensics with expertise in modern web technologies.
              </motion.p>
            </div>

            {/* Key Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold">Key Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${
                      isDark
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                        : 'bg-blue-50 border-blue-200 text-blue-700'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold">Tools & Technologies</h3>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className={`group p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? 'bg-gray-800/50 hover:bg-gray-700/50'
                        : 'bg-white/50 hover:bg-gray-100/50'
                    }`}
                    title={tool.name}
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-8 h-8 mx-auto transition-transform duration-300 group-hover:rotate-12"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="mailto:mozhivarman2005@gmail.com"
                className="cyber-button inline-flex items-center justify-center px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </a>
              
              <a
                href="https://drive.google.com/file/d/17pOIHFz90N3Oh2XX-4cpoA66ZyVMOppu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full p-1 animate-pulse">
                <div className={`w-full h-full rounded-full ${
                  isDark ? 'bg-gray-900' : 'bg-gray-50'
                }`} />
              </div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-violet-500 p-1">
                <div className={`w-full h-full rounded-full overflow-hidden ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                }`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center text-6xl font-bold ${
                    isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <img src="src\components\portfolio.png" alt="Profile Photo" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-violet-500/20 rounded-full backdrop-blur-sm border border-violet-500/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
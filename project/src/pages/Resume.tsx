import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Resume: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive overview of my professional journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className={`rounded-xl overflow-hidden ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-xl`}>
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Resume Preview</h2>
                  <div className="flex space-x-2">
                    <a
                      href="https://drive.google.com/file/d/18BKNNDfeqPlFd9d07Bu4gc70Tjd8P3oo/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                    <a
                      href="https://drive.google.com/file/d/17pOIHFz90N3Oh2XX-4cpoA66ZyVMOppu/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Resume Content Preview */}
              <div className={`p-8 space-y-8 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                {/* Header Section */}
                <div className={`text-center border-b pb-6 ${isDark ? 'border-gray-600' : 'border-gray-300'}`}>
                  <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>MOZHIVARMAN S</h1>
                  <p className="text-lg text-blue-500 mt-2">Cybersecurity Analyst</p>
                  <div className={`flex justify-center space-x-4 mt-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span>mozhivarman2005@gmail.com</span>
                    <span>•</span>
                    <span>Chennai, India</span>
                  </div>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className={`text-xl font-bold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                    Professional Summary
                  </h2>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Dedicated Cybersecurity Analyst with expertise in threat detection, vulnerability assessment, 
                    and digital forensics. Proficient in multiple programming languages and security tools, 
                    with a strong foundation in both offensive and defensive security practices.
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h2 className={`text-xl font-bold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <Award className="w-5 h-5 mr-2 text-blue-500" />
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className={`font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Programming</h3>
                      <div className="flex flex-wrap gap-1">
                        {['Python', 'Java', 'C++', 'JavaScript', 'React.js'].map((skill) => (
                          <span key={skill} className={`px-2 py-1 text-xs rounded ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Security Tools</h3>
                      <div className="flex flex-wrap gap-1">
                        {['Kali Linux', 'Metasploit', 'Wireshark', 'Nmap'].map((tool) => (
                          <span key={tool} className={`px-2 py-1 text-xs rounded ${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-800'}`}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className={`text-xl font-bold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                    Education
                  </h2>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h3 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Bachelor of Computer Science Engineering</h3>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Cybersecurity Specialization</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2023 - 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Download Options */}
            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-500" />
                Download Options
              </h3>
              <div className="space-y-3">
                <a
                  href="https://drive.google.com/file/d/17pOIHFz90N3Oh2XX-4cpoA66ZyVMOppu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button w-full inline-flex items-center justify-center px-4 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
                <a
                  href="https://drive.google.com/file/d/18BKNNDfeqPlFd9d07Bu4gc70Tjd8P3oo/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-4 py-3 font-medium rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Image
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                {[
                  { label: 'Years of Study', value: '2+' },
                  { label: 'Projects', value: '15+' },
                  { label: 'Certifications', value: '8+' },
                  { label: 'Programming Languages', value: '6+' }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</span>
                    <span className="font-bold text-blue-500">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gradient-to-br from-blue-900/20 to-violet-900/20 border border-blue-500/20' : 'bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200'
            }`}>
              <h3 className="text-lg font-semibold mb-2">Interested in working together?</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Let's discuss how I can contribute to your cybersecurity initiatives.
              </p>
              <a
                href="mailto:mozhivarman2005@gmail.com"
                className="cyber-button w-full inline-flex items-center justify-center px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
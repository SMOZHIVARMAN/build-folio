import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Target, Code, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const CodingProfiles: React.FC = () => {
  const { isDark } = useTheme();

  const platforms = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/MOZHIVARMAN_S/',
      icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png',
      color: 'from-orange-500 to-yellow-500',
      description: 'Data Structures & Algorithms practice'
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/MOZHIVARMAN_S',
      icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png',
      color: 'from-green-500 to-emerald-500',
      description: 'Programming challenges and skill assessment'
    },
    {
      name: 'SkillRack',
      url: 'http://www.skillrack.com/profile/438758/a2e7a6baec7fbea98c74561ccb993a2c09b1d30d',
      icon: 'https://img.icons8.com/fluency/48/000000/code.png',
      color: 'from-blue-500 to-indigo-500',
      description: 'Programming practice and contests'
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/mozhivar7v39/',
      icon: 'https://img.icons8.com/color/48/000000/GeeksforGeeks.png',
      color: 'from-green-600 to-green-700',
      description: 'Comprehensive programming tutorials and practice'
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
              Coding Profiles
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Connect with me on various coding platforms
          </p>
        </motion.div>

        {/* Coding Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                isDark ? 'hover:border-blue-500/40' : 'hover:border-blue-300/40'
              } ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm shadow-lg hover:shadow-2xl`}
              onClick={() => window.open(platform.url, '_blank')}
            >
              {/* Platform Header */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${platform.color} opacity-20 flex items-center justify-center mb-4`}>
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="w-12 h-12 relative z-10"
                      style={{ filter: 'brightness(1.2) contrast(1.1)' }}
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {platform.name}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {platform.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-blue-500 group-hover:text-blue-400 transition-colors">
                  <span className="text-sm font-medium">Visit Profile</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className={`inline-block p-8 rounded-2xl ${
            isDark 
              ? 'bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-500/20' 
              : 'bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200'
          }`}>
            <Trophy className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-2xl font-bold mb-2">Competitive Programming</h3>
            <p className={`mb-4 max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Passionate about solving algorithmic challenges and improving problem-solving skills 
              through consistent practice across multiple coding platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Data Structures', 'Algorithms', 'Dynamic Programming', 'Graph Theory', 'Number Theory'].map((topic) => (
                <span
                  key={topic}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDark
                      ? 'bg-blue-500/10 border border-blue-500/20 text-blue-300'
                      : 'bg-blue-50 border border-blue-200 text-blue-700'
                  }`}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfiles;
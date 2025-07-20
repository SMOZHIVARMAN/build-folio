import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  ExternalLink,
  Code,
  Trophy,
  Globe
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SocialLinks: React.FC = () => {
  const { isDark } = useTheme();

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mozhivarmanofficial',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700',
      description: 'Professional network and career updates',
      followers: '500+',
      category: 'Professional'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SMOZHIVARMAN',
      icon: Github,
      color: 'from-gray-700 to-gray-900',
      description: 'Open source projects and code repositories',
      followers: '100+',
      category: 'Development'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mozhivarman_official',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      description: 'Personal updates and behind-the-scenes',
      followers: '1.2K+',
      category: 'Personal'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: Youtube,
      color: 'from-red-500 to-red-600',
      description: 'Cybersecurity tutorials and tech content',
      followers: 'Coming Soon',
      category: 'Content'
    }
  ];

  const codingPlatforms = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/MOZHIVARMAN_S/',
      icon: Code,
      color: 'from-orange-500 to-yellow-500',
      description: 'Competitive programming and DSA practice',
      stats: '250+ problems solved'
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/MOZHIVARMAN_S',
      icon: Trophy,
      color: 'from-green-500 to-emerald-500',
      description: 'Programming challenges and certifications',
      stats: '5-star rating'
    },
    {
      name: 'SkillRack',
      url: 'http://www.skillrack.com/profile/438758/a2e7a6baec7fbea98c74561ccb993a2c09b1d30d',
      icon: Code,
      color: 'from-blue-500 to-indigo-500',
      description: 'Programming contests and skill building',
      stats: 'Expert level'
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/mozhivar7v39/',
      icon: Globe,
      color: 'from-green-600 to-green-700',
      description: 'Programming tutorials and practice',
      stats: '200+ problems solved'
    }
  ];

  const contactInfo = {
    email: 'mozhivarman2005@gmail.com',
    location: 'Chennai, India',
    availability: 'Available for opportunities'
  };

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
              Let's Connect
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Find me across various platforms and let's build something amazing together
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mb-16 p-8 rounded-2xl text-center ${
            isDark 
              ? 'bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-500/20' 
              : 'bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200'
          }`}
        >
          <Mail className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
          <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to discuss cybersecurity solutions or collaboration opportunities?
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="font-semibold">Email</div>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
            <div>
              <div className="font-semibold">Location</div>
              <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {contactInfo.location}
              </div>
            </div>
            <div>
              <div className="font-semibold">Status</div>
              <div className="text-green-500">{contactInfo.availability}</div>
            </div>
          </div>

          <motion.a
            href={`mailto:${contactInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button inline-flex items-center px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Message
          </motion.a>
        </motion.div>

        {/* Social Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Social Media</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group p-6 rounded-xl transition-all duration-300 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {platform.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {platform.category}
                  </span>
                  <div className="flex items-center space-x-1 text-blue-500">
                    <span className="text-sm font-medium">{platform.followers}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Coding Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Coding Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group p-6 rounded-xl transition-all duration-300 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {platform.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-500">
                    {platform.stats}
                  </span>
                  <ExternalLink className="w-4 h-4 text-blue-500" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className={`inline-block p-6 rounded-xl ${
            isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
          }`}>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Always open to new connections and opportunities. 
              <br />
              Feel free to reach out for collaborations, discussions, or just to say hello!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialLinks;
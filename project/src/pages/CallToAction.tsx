import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const CallToAction: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-blue-500"
            >
              <Shield className="w-16 h-16" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-violet-500"
            >
              <Lock className="w-16 h-16" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-blue-400"
            >
              <Eye className="w-16 h-16" />
            </motion.div>
          </div>

          {/* Main Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Ready to Secure Your
            <span className="block bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Digital Future?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Let's collaborate to build robust cybersecurity solutions that protect your 
            organization from evolving threats and ensure business continuity.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "500+", label: "Security Assessments" },
              { number: "24/7", label: "Monitoring Support" },
              { number: "99.9%", label: "Threat Detection Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.2 }}
                className={`p-6 rounded-xl ${
                  isDark
                    ? 'bg-gray-800/50 border border-blue-500/20'
                    : 'bg-white/50 border border-blue-200/50'
                } backdrop-blur-sm`}
              >
                <div className="text-3xl font-bold text-blue-500">{stat.number}</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="mailto:mozhivarman2005@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button inline-flex items-center px-12 py-4 text-xl font-semibold text-white rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 group"
            >
              Let's Connect
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
          >
            <p>Email: mozhivarman2005@gmail.com</p>
            <p>Response within 24 hours guaranteed</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
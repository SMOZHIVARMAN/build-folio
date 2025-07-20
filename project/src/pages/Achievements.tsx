import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Download, Calendar, Building, Filter, X, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Achievements: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      id: 1,
      title: 'Cybersecurity Fundamentals',
      issuer: 'Coursera',
      date: '2024',
      category: 'Cybersecurity',
      skills: ['Network Security', 'Risk Management', 'Incident Response'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      downloadUrl: '#',
      verified: true
    },
    {
      id: 2,
      title: 'Ethical Hacking Certification',
      issuer: 'EC-Council',
      date: '2024',
      category: 'Penetration Testing',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Social Engineering'],
      image: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg',
      downloadUrl: '#',
      verified: true
    },
    {
      id: 3,
      title: 'AWS Security Specialty',
      issuer: 'Amazon Web Services',
      date: '2024',
      category: 'Cloud Security',
      skills: ['Cloud Security', 'AWS', 'Identity Management'],
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
      downloadUrl: '#',
      verified: true
    },
    {
      id: 4,
      title: 'Digital Forensics Specialist',
      issuer: 'SANS Institute',
      date: '2023',
      category: 'Digital Forensics',
      skills: ['Digital Forensics', 'Incident Response', 'Evidence Analysis'],
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
      downloadUrl: '#',
      verified: true
    },
    {
      id: 5,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      category: 'Web Development',
      skills: ['React.js', 'JavaScript', 'Frontend Development'],
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      downloadUrl: '#',
      verified: true
    },
    {
      id: 6,
      title: 'Python Programming',
      issuer: 'HackerRank',
      date: '2023',
      category: 'Programming',
      skills: ['Python', 'Data Structures', 'Algorithms'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      downloadUrl: '#',
      verified: true
    }
  ];

  const categories = ['All', 'Cybersecurity', 'Penetration Testing', 'Cloud Security', 'Digital Forensics', 'Web Development', 'Programming'];

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

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
              Achievements & Certifications
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Professional certifications and achievements in cybersecurity and technology
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total Certificates', value: '8+', icon: Award },
            { label: 'Domains Covered', value: '6', icon: Building },
            { label: 'Year Started', value: '2023', icon: Calendar },
            { label: 'Verified', value: '100%', icon: ExternalLink }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`text-center p-6 rounded-xl ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm`}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <Filter className="w-5 h-5 mr-2 mt-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
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

        {/* Certificates Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
              className={`achievement-card cursor-pointer rounded-xl overflow-hidden ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-2xl group`}
              onClick={() => setSelectedCertificate(cert)}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    {cert.verified && (
                      <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-2">
                        <Award className="w-5 h-5 text-green-400" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold line-clamp-2">{cert.title}</h3>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Building className="w-4 h-4 text-blue-500" />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cert.issuer}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-4 h-4 text-green-500" />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cert.date}
                  </span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 text-xs rounded ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className={`px-2 py-1 text-xs rounded ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        +{cert.skills.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCertificate(cert);
                    }}
                    className="flex-1 px-3 py-2 text-sm bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500/20 transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href={cert.downloadUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500/20 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`max-w-2xl w-full rounded-xl overflow-hidden ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{selectedCertificate.title}</h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Issuer</span>
                      <p className="font-medium">{selectedCertificate.issuer}</p>
                    </div>
                    <div>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Date</span>
                      <p className="font-medium">{selectedCertificate.date}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Skills Gained</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedCertificate.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDark ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={selectedCertificate.downloadUrl}
                      className="cyber-button flex-1 inline-flex items-center justify-center px-4 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </a>
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        isDark
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Achievements;
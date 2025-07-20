import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CyberBackground: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Grid */}
      <div className="cyber-grid absolute inset-0 opacity-40" />
      
      {/* Flowing Lines */}
      <div className="cyber-lines absolute inset-0 opacity-30" />
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain absolute inset-0 opacity-25" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            } opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-10 ${
        isDark 
          ? 'from-blue-900 via-transparent to-violet-900' 
          : 'from-blue-100 via-transparent to-violet-100'
      }`} />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default CyberBackground;
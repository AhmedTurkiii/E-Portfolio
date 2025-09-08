import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../themeProvider';

const ProjectCard = ({ title, description, techStack, repoLink, date, remote, image, liveDemo, impact }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const techArray = techStack.split(', ');

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 hover:shadow-2xl backdrop-blur-md border ${
        darkMode 
          ? "bg-white/5 border-white/10 hover:bg-white/10" 
          : "bg-white/50 border-gray-200 hover:bg-white/70"
      }`}
      whileHover={{ y: -15 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex space-x-6">
            <motion.a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 backdrop-blur-md border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
          </div>
        </div>

        {/* Status badges */}
        <div className="absolute top-6 left-6 flex space-x-3">
          {remote && (
            <span className="px-4 py-2 bg-green-500/90 text-white text-sm font-semibold rounded-full backdrop-blur-md border border-white/20">
              Remote
            </span>
          )}
          {date && (
            <span className={`px-4 py-2 text-sm font-semibold rounded-full backdrop-blur-md border ${
              darkMode ? "bg-white/20 text-white border-white/20" : "bg-black/20 text-black border-black/20"
            }`}>
              {date}
            </span>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-10">
        <h3 className={`text-3xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-900"
        }`} style={{
          fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
        }}>
          {title}
        </h3>
        
        <p className={`text-xl leading-relaxed mb-8 font-light ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`} style={{
          fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
        }}>
          {description}
        </p>

        {/* Impact metrics */}
        {impact && (
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/20">
            <h4 className={`text-lg font-semibold mb-3 ${
              darkMode ? "text-blue-300" : "text-blue-800"
            }`} style={{
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
            }}>
              Key Impact:
            </h4>
            <p className={`text-lg font-light ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`} style={{
              fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
            }}>
              {impact}
            </p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`} style={{
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
          }}>
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-3">
            {techArray.map((tech, index) => (
              <motion.span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                  darkMode 
                    ? "bg-white/10 text-white border-white/20 hover:bg-white/20" 
                    : "bg-black/5 text-gray-700 border-gray-200 hover:bg-black/10"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {tech.trim()}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-4">
          <motion.a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center py-4 px-6 rounded-2xl font-semibold transition-all duration-500 backdrop-blur-md border ${
              darkMode
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 border-blue-500/30"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 border-blue-500/30"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Repository
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

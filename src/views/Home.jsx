import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <div
        className={`relative min-h-screen overflow-hidden ${
          darkMode 
            ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" 
            : "bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
        }`}
        style={
          darkMode
            ? { 
                backgroundImage: `url('${cloudDark}')`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
              }
            : { 
                backgroundImage: `url('${cloud}')`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
              }
        }
      >
        {/* Elegant floating geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Elegant grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? 'white' : 'black'} 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <main
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen py-20 z-10"
          id="/"
        >
          <motion.div 
            className="sm:text-center lg:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className={`inline-block px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-md border ${
                darkMode 
                  ? "bg-white/10 text-white border-white/20" 
                  : "bg-black/5 text-gray-700 border-gray-200"
              }`}>
                ✨ Welcome to my digital space
              </span>
            </motion.div>

            <motion.h1 
              className={`text-6xl sm:text-7xl md:text-8xl font-black leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              variants={itemVariants}
              style={{
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.02em"
              }}
            >
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ahmed Torki
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl font-light mt-6">
                <Typical
                  steps={[
                    "Software Engineer",
                    2500,
                    "Mobile App Developer", 
                    2500,
                    "Frontend Developer",
                    2500,
                    "Real-Time Specialist",
                    2500,
                    "Problem Solver",
                    2500,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </span>
            </motion.h1>

            <motion.p
              className={`mt-10 text-xl sm:text-2xl max-w-3xl leading-relaxed font-light ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
              variants={itemVariants}
              style={{
                fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
              }}
            >
              I'm a passionate Software Engineer currently interning at Metafoodx, with experience from California State University – Monterey Bay. I specialize in creating innovative web and mobile solutions that make a real impact.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6 mt-12"
              variants={itemVariants}
            >
              {contactLinks.map((el, index) => (
                <motion.a
                  key={index}
                  href={el.link}
                  className={`p-4 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl backdrop-blur-md border ${
                    darkMode 
                      ? "bg-white/10 hover:bg-white/20 border-white/20" 
                      : "bg-black/5 hover:bg-black/10 border-gray-200"
                  }`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img alt={el.name} src={el.url} className="w-8 h-8" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mt-16"
              variants={itemVariants}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={`group inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-md border ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 border-blue-500/30"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 border-blue-500/30"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <a
                href="https://drive.google.com/file/d/1OY73hjjNowH3lX1cAv_CpOllKyctFPOi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-md ${
                  darkMode
                    ? "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
                <svg className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-20 md:mt-0 md:ml-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.img
                src={heroBg}
                alt="Ahmed Torki - Software Engineer"
                className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Home;

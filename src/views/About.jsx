import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "20+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div 
      id="about" 
      className={`relative py-32 overflow-hidden ${
        darkMode 
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" 
          : "bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
      }`}
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 360, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Elegant grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? 'white' : 'black'} 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-6xl md:text-7xl font-black mb-8 ${
            darkMode ? "text-white" : "text-gray-900"
          }`} style={{
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            letterSpacing: "-0.02em"
          }}>
            About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`text-2xl max-w-4xl mx-auto font-light leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`} style={{
            fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
          }}>
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className={`text-4xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`} style={{
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                My Story
              </h3>
              <div className={`p-8 rounded-3xl backdrop-blur-md border ${
                darkMode 
                  ? "bg-white/5 border-white/10" 
                  : "bg-white/50 border-gray-200"
              }`}>
                <p className={`text-xl leading-relaxed mb-6 font-light ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`} style={{
                  fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  I'm a passionate Software Engineer currently interning at Metafoodx, with a strong foundation from California State University – Monterey Bay. My journey in tech began with a curiosity about how things work, which evolved into a love for creating solutions that solve real-world problems.
                </p>
                <p className={`text-xl leading-relaxed font-light ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`} style={{
                  fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  I specialize in full-stack development, with expertise in React, Node.js, real-time WebSocket applications, and mobile development using Kotlin. My recent work includes building collaborative platforms with real-time synchronization, Docker containerization, and production-ready deployments.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-8 rounded-3xl backdrop-blur-md border transition-all duration-500 hover:scale-105 ${
                    darkMode 
                      ? "bg-white/5 border-white/10 hover:bg-white/10" 
                      : "bg-white/50 border-gray-200 hover:bg-white/70"
                  }`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-5xl font-black mb-3 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`} style={{
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {stat.number}
                  </div>
                  <div className={`text-lg font-medium ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`} style={{
                    fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className={`relative p-10 rounded-3xl backdrop-blur-md border ${
                darkMode 
                  ? "bg-white/5 border-white/10" 
                  : "bg-white/50 border-gray-200"
              }`}>
                <h4 className={`text-3xl font-bold mb-8 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`} style={{
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  What I Do
                </h4>
                <div className="space-y-6">
                  {[
                    "Full-Stack Web Development",
                    "React Native Mobile Apps",
                    "Cross-Platform Mobile Apps Development",
                    "Docker & DevOps",
                    "Automation Testing"
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-3 h-3 rounded-full ${
                        darkMode ? "bg-blue-400" : "bg-blue-600"
                      }`} />
                      <span className={`text-lg font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`} style={{
                        fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                      }}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-4xl font-bold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`} style={{
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
          }}>
            Technologies & Tools
          </h3>
          <p className={`text-center text-xl mb-16 max-w-4xl mx-auto font-light ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`} style={{
            fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
          }}>
            I work with modern technologies and tools to build scalable, efficient, and user-friendly applications
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className={`group p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-md border ${
                  darkMode 
                    ? "bg-white/5 hover:bg-white/10 border-white/10" 
                    : "bg-white/50 hover:bg-white/70 border-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.img 
                    src={tech.link} 
                    alt={tech.name}
                    className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className={`text-sm font-semibold ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`} style={{
                    fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

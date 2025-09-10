import React, { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

// Limited to 4 specified projects
const projects = [
  {
    title: "Collaborative Whiteboard",
    description: "Real-time collaborative whiteboard inspired by FigJam with multi-user drawing, presence, and persistent boards. Full-stack app with secure auth and Dockerized deployment.",
    techStack: "React, Node.js, Express.js, Socket.io, MongoDB, Mongoose, Fabric.js, JWT, Docker, Nginx",
    repoLink: "https://github.com/AhmedTurkiii/collaborative-whiteboard-fmj-inspired",
    date: "Dec 2024 - Present",
    remote: false,
    image: `${process.env.PUBLIC_URL}/icons/figjam-whiteboard.svg`,
    impact: "Sub-second sync for concurrent users with reliable persistence and production-grade deployment"
  },
  {
    title: "Subscription Expenses Tracker (iOS)",
    description: "Track recurring subscriptions with insights, reminders, and smart categorization. Native iOS app focusing on financial clarity and control.",
    techStack: "SwiftUI, Core Data, Core ML, OpenAI API, Charts",
    repoLink: "https://github.com/AhmedTurkiii/subcriot-tracker",
    date: "2024",
    remote: true,
    image: `${process.env.PUBLIC_URL}/icons/subscription-tracker.svg`,
    impact: "Helped users cut monthly spend by identifying redundant subscriptions and renewal spikes"
  },
  {
    title: "Android MovieApp",
    description: "Modern Android app for discovering movies with MVVM, DI, and offline caching. Rich details, search, and favorites with polished Material UI.",
    techStack: "Java/Kotlin, Retrofit, MVVM, Dagger Hilt, Room, Material Design",
    repoLink: "https://github.com/AhmedTurkiii/Movie",
    date: "Sep 2021 - Present",
    remote: false,
    image: `${process.env.PUBLIC_URL}/icons/movieapp.png`,
    impact: "Fast browsing and reliable caching with clean architecture and strong testability"
  },
  {
    title: "QuoteLingo (Android & iOS)",
    description: "Language learning through daily quotes with translation, favorites, and history. Cross-platform app with clean architecture.",
    techStack: "React Native, Expo, Node.js, REST APIs, Mocha",
    repoLink: "https://github.com/AhmedTurkiii/QuoteLingo",
    date: "May 2024 - Aug 2024",
    remote: true,
    image: `${process.env.PUBLIC_URL}/icons/quotelingo.svg`,
    impact: "Improved engagement via delightful UX and offline-friendly caching"
  }
];

const Projects = () => {
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

  return (
    <div
      id="projects"
      className={`relative py-32 overflow-hidden ${
        darkMode 
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" 
          : "bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
      }`}
    >
      {/* Elegant background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
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
            My <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-2xl max-w-4xl mx-auto font-light leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`} style={{
            fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
          }}>
            Showcasing innovative solutions and creative problem-solving
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                repoLink={project.repoLink}
                date={project.date}
                remote={project.remote}
                image={project.image}
                liveDemo={project.liveDemo}
                impact={project.impact}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/AhmedTurkiii"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-md border ${
              darkMode
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 border-blue-500/30"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 border-blue-500/30"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects on GitHub
            <svg
              className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Collaborative Whiteboard",
    description: "A real-time collaborative whiteboard application inspired by Figma FigJam. Built with React and Node.js, featuring WebSocket integration for seamless multi-user collaboration and MongoDB for persistent storage.",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=500&fit=crop",
    tech: ["React", "Node.js", "WebSockets", "MongoDB"],
    github: "https://github.com/AhmedTurkiii/collaborative-whiteboard-fmj-inspired.git",
    live: null
  },
  {
    title: "Subscription Expenses Tracker",
    description: "A FinTech iOS application built with SwiftUI for tracking subscription expenses. Features Core Data for local storage, Core ML for intelligent categorization, and OpenAI API integration for smart expense insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tech: ["SwiftUI", "Core Data", "Core ML", "OpenAI API"],
    github: "https://github.com/AhmedTurkiii/subcriot-tracker",
    live: null
  },
  {
    title: "Android MovieApp",
    description: "A feature-rich Android application for browsing and discovering movies. Built with Java/Kotlin, implementing MVVM architecture pattern, Retrofit for API integration, and Dagger Hilt for dependency injection.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop",
    tech: ["Java", "Kotlin", "Retrofit", "MVVM", "Dagger Hilt"],
    github: "https://github.com/AhmedTurkiii/Movie",
    live: null
  },
  {
    title: "QuoteLingo Translation App",
    description: "A cross-platform mobile application (Android & iOS) for language learning through quotes. Built with React Native and Node.js, featuring REST API integration and comprehensive testing with Mocha.js.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
    tech: ["React Native", "Node.js", "REST APIs", "Mocha.js"],
    github: "https://github.com/AhmedTurkiii/QuoteLingo",
    live: null
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-[#050505] relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-mono text-sm tracking-wider">MY WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building 
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="space-y-32 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


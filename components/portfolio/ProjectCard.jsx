"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
    >
      {/* Image */}
      <div className={`flex-1 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[#111]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className={`flex-1 ${isEven ? 'lg:pl-8 lg:text-left' : 'lg:pr-8 lg:text-right'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        >
          <span className="text-blue-400 font-mono text-sm tracking-wider">
            Featured Project
          </span>
          <h3 className="text-3xl font-bold text-white mt-2 mb-4">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-sm font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className={`flex gap-4 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}


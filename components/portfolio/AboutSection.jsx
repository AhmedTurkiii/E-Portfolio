"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, GraduationCap, Coffee, Award } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, value: "4+", label: "Projects Completed" },
    { icon: Briefcase, value: "2+", label: "Years Experience" },
    { icon: GraduationCap, value: "3.85", label: "GPA" },
    { icon: Coffee, value: "∞", label: "Cups of Coffee" },
  ];

  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-3 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
                <div className="aspect-square rounded-2xl bg-[#111] overflow-hidden">
                  <img 
                    src="/E-Portfolio/image1.jpg"
                    alt="Torki Ahmed"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="aspect-square rounded-2xl bg-[#111] overflow-hidden">
                  <img 
                    src="/E-Portfolio/image2.jpg"
                    alt="Torki Ahmed"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-2xl backdrop-blur-sm border border-blue-500/20 flex items-center justify-center">
                <Code2 className="w-10 h-10 text-blue-400" />
              </div>
            </motion.div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-blue-400 font-mono text-sm tracking-wider"
              >
                ABOUT ME
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8"
              >
                Passionate about
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> building </span>
                the future
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 text-gray-400 text-lg leading-relaxed"
              >
                <p>
                  I'm a Software Engineer at Metafoodx, an AI-driven food-tech company, 
                  where I build scalable microservices and integrate GenAI solutions. Currently 
                  pursuing my Bachelor's in Computer Science at CSU Monterey Bay with a 3.85 GPA.
                </p>
                <p>
                  I specialize in full-stack development, microservices architecture, and AI automation. 
                  As a Teaching Assistant at CSUMB, I mentor 100+ students in software engineering, 
                  with a particular focus on software testing methodologies. I teach comprehensive testing 
                  practices including unit testing with JUnit and Jest, integration testing, API testing 
                  with Postman, and end-to-end testing with Selenium and Playwright. I'm passionate about 
                  building production-ready systems and contributing to the next generation of developers.
                </p>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Certifications & Achievements</span>
                </div>
                <div className="space-y-2">
                  <a 
                    href="https://www.udemy.com/certificate/UC-b034fa44-c298-4134-a6cb-459d29057894/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors flex items-center gap-2"
                  >
                    <span>Front-end Web Application Development using React.js (Udemy)</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <div className="text-gray-500 text-sm">
                    • FIGFEST 2025 Participant – Selected for Figma's exclusive early-career SWE conference
                  </div>
                  <div className="text-gray-500 text-sm">
                    • CSU Monterey Bay – School of Computing, Teaching Assistant Program, Sr. Coordinator
                  </div>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


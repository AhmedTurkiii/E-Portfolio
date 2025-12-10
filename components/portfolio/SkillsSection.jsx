"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Java (Spring Boot)", level: 92 },
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 85 },
      { name: "Kotlin", level: 80 },
    ]
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "RESTful Services", level: 92 },
      { name: "Microservices", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "AWS (EC2, S3, DynamoDB)", level: 82 },
      { name: "Docker", level: 85 },
    ]
  },
  {
    title: "Testing & DevOps",
    skills: [
      { name: "Jest", level: 88 },
      { name: "JUnit", level: 85 },
      { name: "Selenium", level: 82 },
      { name: "Jenkins CI/CD", level: 80 },
      { name: "API Testing", level: 90 },
      { name: "Git/GitHub", level: 95 },
    ]
  }
];

const technologies = [
  "Java", "Spring Boot", "Python", "TypeScript", "Kotlin", "C++", "React.js", "Next.js", 
  "Node.js", "RESTful APIs", "Microservices", "JPA/Hibernate", "PostgreSQL", "MySQL", 
  "SQLite", "Redis", "AWS DynamoDB", "Docker", "Jenkins", "AWS EC2", "AWS S3", 
  "GCP", "Jest", "JUnit", "Mockito", "Selenium", "Espresso", "ADB", "Git", "Linux"
];

function SkillBar({ skill, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-mono text-sm tracking-wider">EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of experience, constantly evolving 
            with the latest technologies.
          </p>
        </motion.div>

        {/* Skill Bars Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-[#111] rounded-2xl p-8 border border-gray-800/50"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={categoryIndex * 0.2 + skillIndex * 0.1} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.03 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
              className="px-4 py-2 bg-gray-800/50 text-gray-400 rounded-full text-sm font-mono cursor-default transition-colors hover:text-white"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


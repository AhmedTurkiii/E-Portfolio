"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Metafoodx, AI-Driven Food-Tech Company",
    location: "San Jose, CA",
    period: "Mar 2025 - Present",
    description: "Working on full-stack development, backend systems, and AI-driven solutions. Developing end-to-end automation pipelines leveraging GenAI and YOLOv8 computer vision integration models for operational data processing. Architecting microservices and backend integrations with Node.js and SQL databases, containerized with Docker. Building internal full-stack tools integrating 20+ RESTful APIs with real-time dashboards.",
    highlights: ["Improved operational visibility for 50+ locations", "Reduced audit time by 50%", "99.9% reliability across deployments", "AI-driven automation pipelines"]
  },
  {
    title: "Software Developer in Test Intern",
    company: "Metafoodx, AI-Driven Food-Tech Company",
    location: "San Jose, CA",
    period: "Dec 2024 - Mar 2025",
    description: "Developed comprehensive test automation frameworks for Android and web applications, reducing crash rates through early exploratory testing and continuous integration. Implemented CI/CD pipelines for automated testing workflows, enabling faster release cycles and improved code quality. Created test suites using Selenium, Espresso, and Jest to ensure robust application stability.",
    highlights: ["Reduced crash rate by 30%", "Implemented CI/CD pipelines", "Automated Android & web testing", "Early bug detection"]
  },
  {
    title: "Software Engineer Intern",
    company: "CSU Monterey Bay",
    location: "San Jose, CA",
    period: "May 2024 - Dec 2024",
    description: "Built interactive front-end energy measurement dashboards with Plotly to visualize computational complexity. Led QA automation with Jest, Selenium, and JMeter. Automated grading workflows with Python & Google Apps Script, reducing manual effort by 20%. Mentored 100+ students in computer science fundamentals, focusing on data structures, algorithms, and software testing methodologies.",
    highlights: ["Built energy dashboards", "Automated grading workflows", "Mentored 100+ students", "Led QA automation"]
  },
  {
    title: "Mobile Software Engineer Intern",
    company: "Tawasol for Software Solutions",
    location: "Remote",
    period: "Jan 2023 - June 2023",
    description: "Optimized Android app crash rate by 30%, boosting overall stability and enhancing user experience. Performed comprehensive manual testing for Mobile and Web Software Applications.",
    highlights: ["Reduced crash rate by 30%", "Enhanced app stability", "Manual testing expertise"]
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-[#050505] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-mono text-sm tracking-wider">CAREER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Work Experience
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            My professional journey through the tech industry.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent md:-translate-x-px" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-16 last:pb-0 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-[#050505]`} />
              
              {/* Content card */}
              <div className={`bg-[#0a0a0a] rounded-2xl p-8 border border-gray-800/50 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                <div className={`flex items-center gap-2 text-blue-400 mb-2 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">{exp.period}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                
                <div className={`flex items-center gap-2 text-gray-400 mb-4 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <Building2 className="w-4 h-4" />
                  <span>{exp.company}</span>
                  <span className="text-gray-600">•</span>
                  <span>{exp.location}</span>
                </div>
                
                <p className="text-gray-500 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className={`flex flex-wrap gap-2 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  {exp.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


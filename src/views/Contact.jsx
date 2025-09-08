import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:torki.ah.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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
      id="contact"
      className={`relative py-32 overflow-hidden ${
        darkMode 
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" 
          : "bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
      }`}
    >
      {/* Elegant background elements */}
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
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`text-2xl max-w-4xl mx-auto font-light leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`} style={{
            fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
          }}>
            Let's discuss your next project and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className={`p-10 rounded-3xl backdrop-blur-md border ${
                darkMode 
                  ? "bg-white/5 border-white/10" 
                  : "bg-white/50 border-gray-200"
              }`}
            >
              <h3 className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`} style={{
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                Send me a message
              </h3>
              <p className={`text-xl mb-8 font-light ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`} style={{
                fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
              }}>
                I'm always excited to work on new projects and collaborate with amazing people.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className={`block text-lg font-medium mb-3 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`} style={{
                      fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 rounded-2xl text-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                        ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20" 
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                    }`}
                    placeholder="Your full name"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className={`block text-lg font-medium mb-3 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`} style={{
                      fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 rounded-2xl text-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                        ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20" 
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className={`block text-lg font-medium mb-3 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`} style={{
                      fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-6 py-4 rounded-2xl text-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      darkMode 
                        ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20" 
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 px-8 rounded-2xl text-xl font-semibold transition-all duration-500 backdrop-blur-md border ${
                      darkMode
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 border-blue-500/30"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 border-blue-500/30"
                    } ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-2xl"}`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-gray-900" : "text-white"
              }`}>
                Let's Connect
              </h3>
              <p className={`text-lg mb-8 ${
                darkMode ? "text-gray-700" : "text-gray-300"
              }`}>
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and innovation.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:torki.ah.dev@gmail.com"
                className={`flex items-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-white/60 hover:bg-white/80"
                    : "bg-gray-800/60 hover:bg-gray-800/80"
                }`}
                whileHover={{ x: 10 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                  darkMode ? "bg-blue-100" : "bg-blue-900/30"
                }`}>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    darkMode ? "text-gray-900" : "text-white"
                  }`}>
                    Email
                  </h4>
                  <p className={`${
                    darkMode ? "text-gray-700" : "text-gray-300"
                  }`}>
                    torki.ah.dev@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+14083096144"
                className={`flex items-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-white/60 hover:bg-white/80"
                    : "bg-gray-800/60 hover:bg-gray-800/80"
                }`}
                whileHover={{ x: 10 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                  darkMode ? "bg-green-100" : "bg-green-900/30"
                }`}>
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    darkMode ? "text-gray-900" : "text-white"
                  }`}>
                    Phone
                  </h4>
                  <p className={`${
                    darkMode ? "text-gray-700" : "text-gray-300"
                  }`}>
                    +1 (408) 309-6144
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                className={`flex items-center p-6 rounded-2xl ${
                  darkMode
                    ? "bg-white/60"
                    : "bg-gray-800/60"
                }`}
                whileHover={{ x: 10 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                  darkMode ? "bg-purple-100" : "bg-purple-900/30"
                }`}>
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    darkMode ? "text-gray-900" : "text-white"
                  }`}>
                    Location
                  </h4>
                  <p className={`${
                    darkMode ? "text-gray-700" : "text-gray-300"
                  }`}>
                    San Jose, California, USA
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className={`text-xl font-semibold mb-6 ${
                darkMode ? "text-gray-900" : "text-white"
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-2xl transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "bg-white/60 hover:bg-white/80"
                        : "bg-gray-800/60 hover:bg-gray-800/80"
                    }`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img alt={link.name} src={link.url} className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className={`w-full py-8 mt-20 ${
          darkMode
            ? "bg-white/80 backdrop-blur-sm text-gray-900"
            : "bg-gray-800/80 backdrop-blur-sm text-white"
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">
            Made with <span className="text-red-500 text-xl">❤️</span> by Ahmed Torki
          </p>
          <p className="text-sm mt-2 opacity-70">
            © 2024 Ahmed Torki. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#050505] border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-500 text-sm">
            © {currentYear} Torki Ahmed. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> and lots of coffee
          </div>
          
          <div className="flex gap-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}


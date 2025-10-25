import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white"
          >
            Sahil Bharne
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-center text-lg"
          >
            Full Stack Developer
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6"
          >
            {[
              { name: 'GitHub', icon: '💻', url: 'https://github.com/sahilbharne' },
              { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/sahil-bharne-4a4121332/' },
              { name: 'Twitter', icon: '🐦', url: 'https://x.com/SahilB9711' }
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 text-lg"
                aria-label={platform.name}
              >
                {platform.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-center pt-4 border-t border-gray-800 w-full"
          >
            <p>© {currentYear} Sahil Bharne. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Detailed Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              More About <span className="text-blue-600">Me</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in creating digital experiences that are not only visually appealing 
                but also highly functional and user-friendly. My approach combines technical 
                expertise with creative problem-solving.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or learning about the latest trends in web development.
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">NAME</h3>
                  <p className="text-gray-900 font-medium">Sahil Bharne</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">EMAIL</h3>
                  <p className="text-gray-900 font-medium">sahilbharne18@gmail.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">LOCATION</h3>
                  <p className="text-gray-900 font-medium">Nagpur, India</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">STATUS</h3>
                  <p className="text-green-600 font-medium">Available for work</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image with Fallback */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Try multiple image paths */}
                <img 
  src="/profile.jpg" 
  alt="Sahil Bharne - Full Stack Developer"
  className="w-full h-full object-cover"
  onError={(e) => {
    e.target.style.display = 'none';
  }}
/>
                {/* Fallback if image doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold border-2 border-white/30">
                      SB
                    </div>
                    <p className="text-white/90 font-medium">Sahil Bharne</p>
                    <p className="text-white/70 text-sm mt-1">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 relative overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                SAHIL BHARNE
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-blue-600">
                Full Stack Web Developer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              I build modern, responsive web applications using the MERN stack. 
              Passionate about creating seamless user experiences with clean code 
              and innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white rounded-xl font-semibold transition-all duration-300 text-center"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - About Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* About Me Card */}
            <div className="bg-white shadow-lg p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>

              {/* Progress/Stats */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <span className="text-5xl font-bold text-blue-600">100%</span>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-2 bg-blue-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Computer Science student passionate about full-stack development. 
                  I've built projects using React, Node.js, and MongoDB, constantly 
                  learning and improving my skills.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: "6+", label: "Projects" },
                  { value: "MERN", label: "Stack" },
                  { value: "100%", label: "Dedicated" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
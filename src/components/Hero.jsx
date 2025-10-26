import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 sm:pt-24 flex items-center justify-center bg-gray-50 text-gray-900 relative overflow-hidden px-6 sm:px-8"
    >
      {/* Floating Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-200/40 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-10 right-10 w-56 sm:w-72 h-56 sm:h-72 bg-purple-200/40 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 items-center relative z-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
              SAHIL BHARNE
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-blue-600">
              Full Stack Web Developer
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            I build modern, responsive web applications using the MERN stack. 
            Passionate about creating seamless user experiences with clean code 
            and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white rounded-xl font-semibold transition-all duration-300 text-center"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-lg p-6 sm:p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition mx-auto max-w-md lg:max-w-none"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            About Me
          </h2>

          {/* Progress */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl sm:text-5xl font-bold text-blue-600">
              100%
            </span>
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2 }}
                  className="h-2 bg-blue-600 rounded-full"
                />
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Computer Science student passionate about full-stack development. 
            I've built projects using React, Node.js, and MongoDB — constantly 
            learning and improving my skills.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6">
            {[
              { value: "6+", label: "Projects" },
              { value: "MERN", label: "Stack" },
              { value: "100%", label: "Dedicated" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center bg-gray-50 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
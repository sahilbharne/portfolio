import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "MINNIT Allahabad",
      duration: "2024 - Present"
    },
    {
      degree: "Higher Secondary Education",
      institution: "St. Paul's High School, Nagpur",
      duration: "2022 - 2024"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {edu.degree}
              </h3>
              <p className="text-gray-600 mb-2 text-lg">
                {edu.institution}
              </p>
              <p className="text-blue-600 font-medium">
                {edu.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
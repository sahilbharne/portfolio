import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Express", level: 85 }
      ]
    },
    {
      title: "AI & ML",
      skills: [
        { name: "Python", level: 85 },
        { name: "NumPy", level: 50 },
        { name: "Pandas", level: 50 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Postman", level: 75 },
        { name: "Vercel", level: 70 },
        { name: "REST APIs", level: 90 }
      ]
    }
  ];

  const getSkillIcon = (skillName) => {
    const icons = {
      'React': '⚛️',
      'JavaScript': '🟨',
      'Tailwind CSS': '💨',
      'Next.js': '▲',
      'Node.js': '🟢',
      'MongoDB': '🍃',
      'Express': '🚀',
      'Python': '🐍',
      'NumPy': '🔢',
      'Pandas': '🐼',
      'Scikit-learn': '🤖',
      'Git': '📚',
      'Postman': '📮',
      'Vercel': '▲',
      'REST APIs': '🔗'
    };
    return icons[skillName] || '💼';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-xl p-6 group hover:shadow-lg transition-all duration-300 border border-gray-200 text-center"
                  >
                    <div className="text-3xl mb-3">
                      {getSkillIcon(skill.name)}
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                      {skill.name}
                    </h4>
                    
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                    
                    <span className="text-sm font-bold text-blue-600">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Full-Stack Development Expertise</h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            With expertise across frontend, backend, AI/ML, and modern development tools, 
            I can build comprehensive solutions from concept to deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
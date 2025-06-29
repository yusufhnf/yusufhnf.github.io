import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TechStackProps {
  data: any;
}

const TechStack: React.FC<TechStackProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: { title: 'Frontend', skills: data.skills.frontend },
    backend: { title: 'Backend', skills: data.skills.backend },
    tools: { title: 'Tools & DevOps', skills: data.skills.tools },
  };

  // Function to get proficiency label
  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    if (level >= 60) return 'Intermediate';
    if (level >= 50) return 'Basic';
    return 'Learning';
  };

  // Function to get text color based on level
  const getTextColor = (level: number) => {
    if (level >= 80) return 'text-emerald-400';
    if (level >= 60) return 'text-blue-400';
    return 'text-orange-400';
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text" data-text="Tech Stack">Tech Stack</h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="liquid-glass rounded-modern-lg p-2 flex flex-wrap gap-2">
            {Object.entries(categories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-modern font-medium transition-all text-sm sm:text-base micro-interaction ${
                  activeCategory === key
                    ? 'btn-liquid text-white glow-interactive'
                    : 'glass-effect text-text-secondary hover:text-text-primary'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid - Card style like experience section */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories[activeCategory as keyof typeof categories].skills.map((skill: any, index: number) => (
            <motion.div
              key={skill.name}
              className="glass-effect rounded-xl p-4 sm:p-6 card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                {/* Skill Icon/Badge */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  {/* Skill Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                        {skill.name}
                      </h3>
                      <span className={`text-xs sm:text-sm font-medium ${getTextColor(skill.level)}`}>
                        {getProficiencyLabel(skill.level)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`text-lg sm:text-xl font-bold ${getTextColor(skill.level)}`}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  
                  {/* Static Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-300`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Legend */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-center gradient-text">
              Proficiency Scale
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { range: '90-100%', label: 'Expert', color: 'from-emerald-400 to-emerald-600' },
                { range: '80-89%', label: 'Advanced', color: 'from-blue-400 to-blue-600' },
                { range: '70-79%', label: 'Proficient', color: 'from-cyan-400 to-cyan-600' },
                { range: '60-69%', label: 'Intermediate', color: 'from-yellow-400 to-yellow-600' },
                { range: '50-59%', label: 'Basic', color: 'from-orange-400 to-orange-600' },
                { range: '0-49%', label: 'Learning', color: 'from-red-400 to-red-600' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-full h-3 rounded-full bg-gradient-to-r ${item.color} mb-2`} />
                  <div className="text-xs sm:text-sm font-medium text-text-primary mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-text-muted">
                    {item.range}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg text-text-secondary mb-6">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Learning: Rust', 'Exploring: Web3', 'Interested in: AI/ML'].map((item, index) => (
              <span
                key={index}
                className="liquid-glass px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
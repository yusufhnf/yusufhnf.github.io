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

  // Function to get gradient color based on proficiency level
  const getProgressGradient = (level: number) => {
    if (level >= 90) {
      return 'from-emerald-400 via-blue-500 to-blue-600'; // Expert
    } else if (level >= 80) {
      return 'from-blue-400 via-blue-500 to-blue-600'; // Advanced
    } else if (level >= 70) {
      return 'from-cyan-400 via-blue-500 to-blue-600'; // Proficient
    } else if (level >= 60) {
      return 'from-yellow-400 via-orange-500 to-blue-500'; // Intermediate
    } else if (level >= 50) {
      return 'from-orange-400 via-orange-500 to-red-500'; // Basic
    } else {
      return 'from-red-400 via-red-500 to-red-600'; // Learning
    }
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

        {/* Skills Grid */}
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
              className="glass-card rounded-modern-xl p-4 sm:p-6 card-hover group glow-interactive"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Skill Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-1">
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
              
              {/* Progress Bar Container */}
              <div className="relative">
                {/* Background Track */}
                <div className="w-full progress-liquid rounded-full h-3 sm:h-4 overflow-hidden">
                  {/* Animated Progress Bar */}
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(skill.level)} relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 1.2, 
                      delay: index * 0.1 + 0.5,
                      ease: "easeOut"
                    }}
                  >
                    {/* Enhanced Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 1.7,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Liquid Flow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                  </motion.div>
                </div>

                {/* Enhanced Glow Effect on Hover */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${getProgressGradient(skill.level)} opacity-0 blur-sm`}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Skill Level Indicator */}
              <div className="flex justify-between items-center mt-3 text-xs text-text-muted">
                <span>Beginner</span>
                <span>Expert</span>
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
          <div className="glass-card rounded-modern-xl p-6 sm:p-8 glow-interactive">
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-center gradient-text">
              Proficiency Scale
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { range: '90-100%', label: 'Expert', color: 'from-emerald-400 via-blue-500 to-blue-600' },
                { range: '80-89%', label: 'Advanced', color: 'from-blue-400 via-blue-500 to-blue-600' },
                { range: '70-79%', label: 'Proficient', color: 'from-cyan-400 via-blue-500 to-blue-600' },
                { range: '60-69%', label: 'Intermediate', color: 'from-yellow-400 via-orange-500 to-blue-500' },
                { range: '50-59%', label: 'Basic', color: 'from-orange-400 via-orange-500 to-red-500' },
                { range: '0-49%', label: 'Learning', color: 'from-red-400 via-red-500 to-red-600' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-full h-3 rounded-full bg-gradient-to-r ${item.color} mb-2 relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-text-primary mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-text-muted">
                    {item.range}
                  </div>
                </motion.div>
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
              <motion.span
                key={index}
                className="liquid-glass px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 micro-interaction glow-interactive"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
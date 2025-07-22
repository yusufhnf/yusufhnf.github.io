import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import type { PortfolioData } from '../hooks/useData';

interface ExperienceProps {
  data: PortfolioData;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">Work Experience</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>

          {data.experience.map((exp, index: number) => {
            const isExpanded = expandedCards.includes(index);
            
            return (
              <motion.div
                key={index}
                className={`relative flex items-start mb-8 sm:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-4 border-dark-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="glass-effect rounded-xl p-4 sm:p-6 card-hover"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {exp.period}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-base sm:text-lg text-blue-400 mb-4">{exp.company}</h4>
                    <p className="text-sm sm:text-base text-gray-300 mb-4">{exp.description}</p>

                    {/* Responsibilities Section */}
                    <AnimatePresence>
                      {isExpanded && exp.responsibilities && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4 overflow-hidden"
                        >
                          <h5 className="font-semibold text-white text-sm sm:text-base mb-2">Job Responsibilities:</h5>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility: string, respIndex: number) => (
                              <motion.li
                                key={respIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                                className="text-gray-300 text-xs sm:text-sm flex items-start"
                              >
                                <span className="text-blue-400 mr-2 mt-1">•</span>
                                {responsibility}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-white text-sm sm:text-base">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement: string, achIndex: number) => (
                          <li key={achIndex} className="text-gray-300 text-xs sm:text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expand/Collapse Button */}
                    {exp.responsibilities && (
                      <motion.button
                        onClick={() => toggleCard(index)}
                        className="mt-4 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{isExpanded ? 'Show Less' : 'Show Responsibilities'}</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
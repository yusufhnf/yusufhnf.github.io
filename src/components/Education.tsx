import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import type { PortfolioData } from '../hooks/useData';

interface EducationProps {
  data: PortfolioData;
}

const Education: React.FC<EducationProps> = ({ data }) => {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">Education</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {data.education.map((edu, index: number) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl p-4 sm:p-6 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg flex-shrink-0">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {edu.period}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-base sm:text-lg text-blue-400 mb-3">{edu.institution}</h4>
                  
                  {edu.gpa && (
                    <p className="text-sm sm:text-base text-gray-300 mb-3">GPA: {edu.gpa}</p>
                  )}

                  <div className="space-y-2">
                    <h5 className="font-semibold text-white text-sm sm:text-base">Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement: string, achIndex: number) => (
                        <li key={achIndex} className="text-gray-300 text-xs sm:text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
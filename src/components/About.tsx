import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

interface AboutProps {
  data: any;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const iconMap = {
    Code,
    Palette,
    Zap,
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                {data.personal.bio}
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                I believe in the power of clean code, intuitive design, and continuous learning. 
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                My goal is to bridge the gap between design and development, creating solutions 
                that are not only technically sound but also provide exceptional user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {data.achievements.map((achievement: any, index: number) => {
              const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  className="glass-effect rounded-xl p-4 sm:p-6 text-center card-hover"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue rounded-lg mb-4">
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-2">{achievement.title}</h3>
                  <p className="text-sm sm:text-base text-text-muted">{achievement.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">My Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.values.map((value: any, index: number) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-4 sm:p-6 card-hover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-blue-500">{value.title}</h4>
                <p className="text-sm sm:text-base text-text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
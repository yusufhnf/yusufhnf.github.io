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

  // Use branding configuration with fallback to personal data
  const displayName = data.branding?.fullName || data.personal?.name || 'Developer';
  const displayAvatar = data.branding?.avatarUrl || data.personal?.avatar || 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500';
  const aboutTitle = data.sections?.about?.title || 'About Me';
  const aboutDescription = data.sections?.about?.description || data.personal?.bio || 'Passionate developer creating amazing digital experiences.';

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text" data-text={aboutTitle}>{aboutTitle}</h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        {/* Avatar Section */}
        <motion.div
          className="flex justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Animated gradient border container */}
            <motion.div
              className="w-64 h-64 rounded-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(45deg, #4F46E5, #9333EA, #4F46E5)',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Inner container for the image */}
              <div className="absolute inset-2 rounded-full overflow-hidden glass-card">
                <img
                  src={displayAvatar}
                  alt={displayName}
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover' }}
                />
                {/* Overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #4F46E5, #9333EA, #4F46E5)',
                  filter: 'blur(8px)',
                  opacity: 0.3,
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left column - Personal introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-xl p-6 sm:p-8 glow-interactive">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">My Story</h3>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                  {data.personal.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Skills/expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-xl p-6 sm:p-8 glow-interactive">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">Expertise</h3>
              
              {/* Skills list */}
              <div className="space-y-4 mb-8">
                {[
                  'Flutter Development',
                  'iOS Development (Swift)',
                  'Mobile App Development',
                  'Cross-Platform Solutions',
                  'UI/UX Implementation',
                  'Technical Leadership'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-text-secondary">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Achievement cards */}
              <div className="grid grid-cols-1 gap-4">
                {data.achievements.map((achievement: any, index: number) => {
                  const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={index}
                      className="liquid-glass rounded-lg p-4 card-hover glow-interactive"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.3 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="btn-liquid p-3 rounded-lg">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold gradient-text">{achievement.title}</h4>
                          <p className="text-sm text-text-muted">{achievement.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values section */}
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
                className="glass-card rounded-xl p-4 sm:p-6 card-hover glow-interactive"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-blue-400">{value.title}</h4>
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
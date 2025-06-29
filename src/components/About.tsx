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

        {/* Avatar Section - Simple without animation */}
        <motion.div
          className="flex justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Static gradient border container */}
            <div
              className="w-64 h-64 rounded-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(45deg, #4F46E5, #9333EA, #4F46E5)',
              }}
            >
              {/* Inner container for the circular image frame */}
              <div className="absolute inset-2 rounded-full overflow-hidden glass-card">
                {/* Circular Avatar Image */}
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={displayAvatar}
                    alt={displayName}
                    className="w-full h-full object-cover object-center"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center center'
                    }}
                    onError={(e) => {
                      // Fallback to a default avatar if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500';
                    }}
                  />
                  {/* Subtle overlay for better integration with the glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-full" />
                  
                  {/* Optional: Add a subtle inner border for definition */}
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                </div>
              </div>
              
              {/* Static glow effect */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #4F46E5, #9333EA, #4F46E5)',
                  filter: 'blur(12px)',
                  opacity: 0.4,
                  zIndex: -1,
                }}
              />
            </div>
            
            {/* Static indicator dot */}
            <div
              className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"
              title="Available for work"
            />
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
            <div className="glass-effect rounded-xl p-4 sm:p-6 card-hover">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">My Story</h3>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                  {data.personal.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Skills/expertise with card style like experience section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-4 sm:p-6 card-hover">
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

              {/* Achievement cards - styled like experience cards */}
              <div className="space-y-4">
                {data.achievements.map((achievement: any, index: number) => {
                  const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={index}
                      className="glass-effect rounded-lg p-4 card-hover"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg flex-shrink-0">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                          <p className="text-sm text-gray-300">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
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
                className="glass-effect rounded-xl p-4 sm:p-6 card-hover"
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
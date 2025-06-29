import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Clock, Smartphone } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Helper function to validate URLs
  const isValidUrl = (url: string | null | undefined): boolean => {
    if (!url || url.trim() === '') return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleLinkClick = (url: string, fallbackMessage: string) => {
    if (isValidUrl(url)) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(fallbackMessage);
    }
  };

  // Check which URLs are valid for this project
  const hasLiveUrl = isValidUrl(project.liveUrl);
  const hasGithubUrl = isValidUrl(project.githubUrl);
  const hasPlayStoreUrl = isValidUrl(project.playStoreUrl);
  const hasAppStoreUrl = isValidUrl(project.appStoreUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          {/* Enhanced Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto modal-liquid shadow-dark-xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Enhanced Close Button - Fixed positioning */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-3 liquid-glass rounded-full transition-colors glow-interactive"
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                zIndex: 20
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
            >
              <X size={20} className="text-white" />
            </motion.button>

            {/* Project Image */}
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Project Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="liquid-glass px-3 py-1 rounded-full text-sm font-medium text-white capitalize">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{project.title}</h2>
                
                {/* Project Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>Completed: {project.completedDate || 'Recently'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>Duration: {project.duration || '2-3 months'}</span>
                  </div>
                </div>

                {/* Enhanced Action Buttons - Only show valid URLs */}
                <div className="flex flex-wrap gap-3">
                  {/* Live Demo Button - only show if URL is valid */}
                  {hasLiveUrl && (
                    <motion.button
                      onClick={() => handleLinkClick(project.liveUrl, 'Live demo is currently unavailable')}
                      className="inline-flex items-center space-x-2 btn-liquid px-4 py-2 rounded-lg font-medium text-white transition-all glow-interactive"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.button>
                  )}
                  
                  {/* GitHub Button - only show if URL is valid */}
                  {hasGithubUrl && (
                    <motion.button
                      onClick={() => handleLinkClick(project.githubUrl, 'Source code is currently private')}
                      className="inline-flex items-center space-x-2 btn-liquid-secondary px-4 py-2 rounded-lg font-medium text-white transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </motion.button>
                  )}

                  {/* Play Store Button - only show if URL is valid */}
                  {hasPlayStoreUrl && (
                    <motion.button
                      onClick={() => handleLinkClick(project.playStoreUrl, 'Play Store link is currently unavailable')}
                      className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium text-white transition-all glow-interactive"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title="Download on Google Play"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <span>Play Store</span>
                    </motion.button>
                  )}

                  {/* App Store Button - only show if URL is valid */}
                  {hasAppStoreUrl && (
                    <motion.button
                      onClick={() => handleLinkClick(project.appStoreUrl, 'App Store link is currently unavailable')}
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-white transition-all glow-interactive"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title="Download on App Store"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                      </svg>
                      <span>App Store</span>
                    </motion.button>
                  )}
                </div>

                {/* Show message if no valid URLs are available */}
                {!hasLiveUrl && !hasGithubUrl && !hasPlayStoreUrl && !hasAppStoreUrl && (
                  <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-400">
                      <span className="text-yellow-400">ℹ️</span> Project links are currently private or unavailable for public viewing.
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.features && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <motion.span
                      key={index}
                      className="liquid-glass px-3 py-1 rounded-full text-sm text-blue-400 glow-interactive"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              {project.challenges && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Challenges & Solutions</h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge: any, index: number) => (
                      <div key={index} className="glass-card rounded-lg p-4">
                        <h4 className="font-medium text-blue-400 mb-2">{challenge.challenge}</h4>
                        <p className="text-gray-300 text-sm">{challenge.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Stats */}
              {project.stats && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Project Impact</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {Object.entries(project.stats).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        className="text-center glass-card rounded-lg p-3 glow-interactive"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-xl font-bold text-blue-400">{value as string}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
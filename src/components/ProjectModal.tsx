import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Clock } from 'lucide-react';

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
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-effect rounded-xl shadow-dark-xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
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
                <span className="bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white capitalize">
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

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 py-2 rounded-lg font-medium text-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 glass-effect border border-gray-600 hover:border-blue-500 px-4 py-2 rounded-lg font-medium text-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
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
                      className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-400"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
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
                      <div key={index} className="glass-effect rounded-lg p-4">
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
                        className="text-center glass-effect rounded-lg p-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
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
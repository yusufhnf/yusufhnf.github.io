import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code, Layers, Smartphone, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectModal from './ProjectModal';

interface PortfolioProps {
  data: any;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? data.projects 
    : data.projects.filter((project: any) => project.category === activeFilter);

  // Show only first 6 projects on the main page
  const displayedProjects = filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleViewAllClick = () => {
    navigate('/projects');
  };

  // Portfolio statistics data
  const portfolioStats = [
    {
      icon: Code,
      title: `${data.projects.length} Projects`,
      description: 'Successfully delivered',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Layers,
      title: `${data.projects.filter((p: any) => p.category === 'fullstack').length} Full Stack`,
      description: 'Complete solutions',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Smartphone,
      title: `${data.projects.filter((p: any) => p.category === 'frontend').length} Frontend`,
      description: 'User interfaces',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: '7+ Years',
      description: 'Development experience',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text" data-text="Portfolio">Portfolio</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base micro-interaction ${
                activeFilter === filter.id
                  ? 'btn-liquid text-white glow-interactive'
                  : 'liquid-glass text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Experience-style cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          layout
        >
          {displayedProjects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              className="glass-effect rounded-xl p-4 sm:p-6 card-hover cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              onClick={() => handleProjectClick(project)}
            >
              <div className="flex items-start space-x-4">
                {/* Project Icon/Image */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  {/* Project Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium capitalize">
                      {project.category}
                    </span>
                    {project.duration && (
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <Calendar size={14} className="mr-1" />
                        {project.duration}
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="liquid-glass px-2 py-1 rounded-full text-xs text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-400 px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex space-x-3">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </motion.button>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      className="inline-flex items-center space-x-1 text-gray-400 hover:text-gray-300 text-sm transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </motion.button>
                  </div>

                  {/* App Store Links */}
                  {(project.playStoreUrl || project.appStoreUrl) && (
                    <div className="flex space-x-2 mt-3">
                      {project.playStoreUrl && (
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.playStoreUrl, '_blank');
                          }}
                          className="app-store-button px-2 py-1 rounded text-xs font-medium transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Play Store
                        </motion.button>
                      )}
                      {project.appStoreUrl && (
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.appStoreUrl, '_blank');
                          }}
                          className="ios-store-button px-2 py-1 rounded text-xs font-medium transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          App Store
                        </motion.button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced View All Projects Button */}
        {hasMoreProjects && (
          <motion.div
            className="flex justify-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleViewAllClick}
              className="group inline-flex items-center space-x-3 btn-liquid px-8 py-4 rounded-modern font-semibold text-base transition-all glow-interactive relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Enhanced button content */}
              <span className="relative z-10">View All Projects</span>
              <motion.div
                className="flex items-center relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={20} />
              </motion.div>
              <span className="text-sm text-blue-200 opacity-80 relative z-10">
                ({filteredProjects.length - 6} more)
              </span>
              
              {/* Enhanced hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        )}

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No projects found for this category.</p>
          </motion.div>
        )}

        {/* Portfolio Summary - Card style like experience section */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-xl p-6 sm:p-8 card-hover">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text text-center">
              Portfolio Highlights
            </h3>
            
            {/* Portfolio Stats - Card style like experience cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {portfolioStats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-lg p-4 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg flex-shrink-0`}>
                      <stat.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">{stat.title}</h4>
                      <p className="text-sm text-gray-300">{stat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Portfolio;
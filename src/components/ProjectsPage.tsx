import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectModal from './ProjectModal';

interface ProjectsPageProps {
  data: any;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ data }) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recent'); // recent, alphabetical, category

  const filters = [
    { id: 'all', label: 'All Projects', count: data.projects.length },
    { id: 'fullstack', label: 'Full Stack', count: data.projects.filter((p: any) => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: data.projects.filter((p: any) => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: data.projects.filter((p: any) => p.category === 'backend').length },
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent' },
    { id: 'alphabetical', label: 'Alphabetical' },
    { id: 'category', label: 'By Category' },
  ];

  let filteredProjects = activeFilter === 'all' 
    ? data.projects 
    : data.projects.filter((project: any) => project.category === activeFilter);

  // Apply sorting
  filteredProjects = [...filteredProjects].sort((a: any, b: any) => {
    switch (sortBy) {
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'recent':
      default:
        return b.id - a.id; // Assuming higher ID means more recent
    }
  });

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  // Helper function to check if URL is valid and not empty
  const isValidUrl = (url: string | null | undefined): boolean => {
    if (!url || url.trim() === '') return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-primary-black">
      {/* Enhanced Header with Navigation */}
      <motion.header
        className="sticky top-0 z-40 nav-glass border-b border-primary-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={handleBackClick}
              className="inline-flex items-center space-x-2 btn-liquid-secondary px-4 py-2 rounded-modern font-medium transition-all glow-interactive"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </motion.button>

            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold gradient-text">Complete Portfolio</h1>
              <p className="text-sm text-gray-400 mt-1">
                {filteredProjects.length} of {data.projects.length} projects
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-liquid px-4 py-2 rounded-modern text-sm font-medium appearance-none cursor-pointer pr-8"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id} className="bg-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
              <Filter size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Enhanced Filter Section */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card rounded-modern-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-0">
                Filter Projects
              </h2>
              <div className="text-sm text-gray-400">
                Showing {filteredProjects.length} projects
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-modern font-medium transition-all text-sm sm:text-base micro-interaction ${
                    activeFilter === filter.id
                      ? 'btn-liquid text-white glow-interactive'
                      : 'liquid-glass text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{filter.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === filter.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          layout
        >
          {filteredProjects.map((project: any, index: number) => {
            // Check which URLs are valid for this project
            const hasLiveUrl = isValidUrl(project.liveUrl);
            const hasGithubUrl = isValidUrl(project.githubUrl);
            const hasPlayStoreUrl = isValidUrl(project.playStoreUrl);
            const hasAppStoreUrl = isValidUrl(project.appStoreUrl);
            const hasAnyValidUrl = hasLiveUrl || hasGithubUrl;

            return (
              <motion.div
                key={project.id}
                className="glass-card rounded-modern-xl overflow-hidden group card-hover cursor-pointer glow-interactive"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Only show overlay with buttons if there are valid URLs */}
                  {hasAnyValidUrl && (
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex space-x-3">
                        {/* Live URL Button - only show if valid */}
                        {hasLiveUrl && (
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.liveUrl, '_blank');
                            }}
                            className="liquid-glass p-2 rounded-full hover:bg-white/30 transition-colors glow-interactive"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="View live project"
                          >
                            <ExternalLink size={18} />
                          </motion.button>
                        )}
                        
                        {/* GitHub URL Button - only show if valid */}
                        {hasGithubUrl && (
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, '_blank');
                            }}
                            className="liquid-glass p-2 rounded-full hover:bg-white/30 transition-colors glow-interactive"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="View GitHub repository"
                          >
                            <Github size={18} />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="liquid-glass px-2 py-1 rounded-full text-xs font-medium text-white capitalize">
                      {project.category}
                    </span>
                  </div>

                  {/* Click to view indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="liquid-glass px-2 py-1 rounded text-xs text-white">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Project Meta */}
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                    {project.completedDate && (
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{project.completedDate}</span>
                      </div>
                    )}
                    {project.duration && (
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{project.duration}</span>
                      </div>
                    )}
                  </div>
                  
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
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* App Store Badges - Only show if URLs are valid */}
                  {(hasPlayStoreUrl || hasAppStoreUrl) && (
                    <div className="flex space-x-2 mt-3">
                      {hasPlayStoreUrl && (
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
                      {hasAppStoreUrl && (
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card rounded-modern-xl p-8 sm:p-12 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">No Projects Found</h3>
              <p className="text-gray-400 mb-6">
                No projects match the current filter criteria.
              </p>
              <motion.button
                onClick={() => setActiveFilter('all')}
                className="btn-liquid px-6 py-3 rounded-modern font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show All Projects
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Portfolio Statistics */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card rounded-modern-xl p-6 sm:p-8 glow-interactive">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center gradient-text">
              Portfolio Overview
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                  {data.projects.length}
                </div>
                <div className="text-sm text-gray-400">Total Projects</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                  {data.projects.filter((p: any) => p.category === 'fullstack').length}
                </div>
                <div className="text-sm text-gray-400">Full Stack</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                  {data.projects.filter((p: any) => p.category === 'frontend').length}
                </div>
                <div className="text-sm text-gray-400">Frontend</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">
                  {data.projects.filter((p: any) => isValidUrl(p.playStoreUrl) || isValidUrl(p.appStoreUrl)).length}
                </div>
                <div className="text-sm text-gray-400">Published Apps</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProjectsPage;
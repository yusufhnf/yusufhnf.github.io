import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { useMedium } from '../hooks/useMedium';

interface MediumProps {
  data: any;
}

const Medium: React.FC<MediumProps> = ({ data }) => {
  const username = data.personal.mediumProfile.split('@')[1] || 'johndoe';
  const { articles, loading, error } = useMedium(username);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">Medium Articles</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Sharing knowledge and insights through writing
          </p>
          <motion.a
            href={data.personal.mediumProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen size={20} />
            <span>Visit My Medium Profile</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>

        {loading && (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4 animate-spin"></div>
            <p className="text-gray-300">Loading articles...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">Unable to load articles from Medium</p>
            <p className="text-gray-400 text-sm">Showing demo articles instead</p>
          </div>
        )}

        {!loading && articles.length > 0 && (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {articles.map((article, index) => (
              <motion.article
                key={article.guid}
                className="glass-effect rounded-xl overflow-hidden group card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {article.thumbnail && (
                  <div className="relative overflow-hidden">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                  </div>
                )}

                <div className="p-4 sm:p-6">
                  <div className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm mb-3">
                    <Calendar size={14} />
                    <span>{formatDate(article.pubDate)}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {!loading && articles.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Medium;
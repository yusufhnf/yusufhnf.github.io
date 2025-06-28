import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Layers, Zap, Monitor, Palette } from 'lucide-react';

const MobileDevIllustration: React.FC = () => {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Central MacBook */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
      >
        {/* MacBook Base */}
        <div className="relative">
          {/* MacBook Screen */}
          <div className="w-48 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 shadow-2xl">
            {/* Screen Bezel */}
            <div className="w-full h-full bg-black rounded-md m-1 p-2 relative overflow-hidden">
              {/* VS Code Interface */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-sm">
                {/* Title Bar */}
                <div className="flex items-center justify-between p-1 bg-gray-800 rounded-t-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">App.tsx</div>
                </div>
                
                {/* Code Content */}
                <div className="p-2 space-y-1">
                  <motion.div 
                    className="text-xs text-blue-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    import React from 'react';
                  </motion.div>
                  <motion.div 
                    className="text-xs text-purple-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    const MobileApp = () =&gt; {'{'}
                  </motion.div>
                  <motion.div 
                    className="text-xs text-green-400 ml-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    return &lt;View&gt;...&lt;/View&gt;
                  </motion.div>
                  <div className="text-xs text-purple-400">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* MacBook Keyboard */}
          <div className="w-48 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg border-2 border-t-0 border-gray-700">
            <div className="w-full h-full bg-gray-800 rounded-b-md m-1 flex items-center justify-center">
              <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Mobile Devices */}
      <motion.div
        className="absolute top-8 left-8"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-28 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-gray-600 shadow-xl">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-md m-0.5 p-1">
            {/* Mobile App Screen */}
            <div className="w-full h-4 bg-blue-600 rounded-t-sm mb-1"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-1 bg-gray-400 rounded"></div>
              <div className="w-1/2 h-1 bg-gray-300 rounded"></div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1">
              <div className="w-full h-3 bg-purple-500 rounded-sm"></div>
              <div className="w-full h-3 bg-blue-500 rounded-sm"></div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-12 right-6"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-14 h-24 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-gray-600 shadow-xl">
          <div className="w-full h-full bg-gradient-to-br from-green-900 to-teal-900 rounded-md m-0.5 p-1">
            {/* Mobile App Screen */}
            <div className="w-full h-3 bg-green-600 rounded-t-sm mb-1"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-gray-300 rounded"></div>
              <div className="w-2/3 h-1 bg-gray-400 rounded"></div>
            </div>
            <div className="mt-1 space-y-1">
              <div className="w-full h-2 bg-teal-500 rounded-sm"></div>
              <div className="w-full h-2 bg-green-500 rounded-sm"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating UI Elements */}
      <motion.div
        className="absolute top-4 left-20"
        animate={{ 
          y: [0, -8, 0],
          x: [0, 5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-12 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg flex items-center justify-center">
          <Layers size={16} className="text-blue-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-12"
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg flex items-center justify-center">
          <Palette size={14} className="text-purple-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-20 right-16"
        animate={{ 
          y: [0, -10, 0],
          x: [0, -8, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg flex items-center justify-center">
          <Zap size={12} className="text-green-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8"
        animate={{ 
          y: [0, -14, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-14 h-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-lg flex items-center justify-center">
          <Code size={14} className="text-orange-400" />
        </div>
      </motion.div>

      {/* Floating Code Snippets */}
      <motion.div
        className="absolute top-6 left-32 text-xs font-mono text-blue-400/70"
        animate={{ 
          y: [0, -6, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        useState()
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-xs font-mono text-purple-400/70"
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        {'<View />'}
      </motion.div>

      <motion.div
        className="absolute top-32 left-6 text-xs font-mono text-green-400/70"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        async/await
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-4 text-xs font-mono text-yellow-400/70"
        animate={{ 
          y: [0, -7, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        API.call()
      </motion.div>

      {/* Workflow Arrows */}
      <motion.div
        className="absolute top-16 left-24"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-blue-400/50">
          <path
            d="M10 2L15 7H12V13H8V7H5L10 2Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-12"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" className="text-purple-400/50">
          <path
            d="M2 10L7 5V8H13V12H7V15L2 10Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Connecting Lines */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="200" height="200" className="absolute inset-0">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M50 50 Q100 30 150 50 Q170 100 150 150 Q100 170 50 150 Q30 100 50 50"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </motion.div>

      {/* Ambient Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default MobileDevIllustration;
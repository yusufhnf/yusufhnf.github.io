import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Layers, Zap, Monitor, Palette, Play, Settings } from 'lucide-react';

const FlutterMobileDevIllustration: React.FC = () => {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Central MacBook Pro */}
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
      >
        {/* MacBook Base */}
        <div className="relative">
          {/* MacBook Screen */}
          <div className="w-52 h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 shadow-2xl">
            {/* Screen Bezel */}
            <div className="w-full h-full bg-black rounded-md m-1 p-2 relative overflow-hidden">
              {/* VS Code Interface with Flutter */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-sm">
                {/* Title Bar */}
                <div className="flex items-center justify-between p-1 bg-gray-800 rounded-t-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400 flex items-center space-x-1">
                    <span>main.dart</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Flutter Code Content */}
                <div className="p-2 space-y-1 text-xs font-mono">
                  <motion.div 
                    className="text-blue-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    import 'package:flutter/material.dart';
                  </motion.div>
                  <motion.div 
                    className="text-purple-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  >
                    class MyApp extends StatelessWidget {'{'}
                  </motion.div>
                  <motion.div 
                    className="text-green-400 ml-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  >
                    Widget build(BuildContext context) {'{'}
                  </motion.div>
                  <motion.div 
                    className="text-orange-400 ml-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                  >
                    return MaterialApp(
                  </motion.div>
                  <motion.div 
                    className="text-cyan-400 ml-6"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                  >
                    home: Scaffold(...)
                  </motion.div>
                  <div className="text-orange-400 ml-4">);</div>
                  <div className="text-green-400 ml-2">{'}'}</div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* MacBook Keyboard */}
          <div className="w-52 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg border-2 border-t-0 border-gray-700">
            <div className="w-full h-full bg-gray-800 rounded-b-md m-1 flex items-center justify-center">
              <div className="w-20 h-1.5 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Orbiting Mobile Devices */}
      <motion.div
        className="absolute"
        animate={{ 
          rotate: 360,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ width: '300px', height: '300px' }}
      >
        {/* iPhone */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-18 h-32 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-gray-600 shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg m-0.5 p-1.5">
              {/* iOS App Screen */}
              <div className="w-full h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-md mb-1 flex items-center justify-center">
                <div className="text-xs text-white font-bold">Flutter App</div>
              </div>
              <div className="space-y-1">
                <div className="w-full h-1.5 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-1.5 bg-gray-400 rounded"></div>
                <div className="w-1/2 h-1.5 bg-gray-300 rounded"></div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1">
                <div className="w-full h-4 bg-purple-500 rounded-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-full h-4 bg-blue-500 rounded-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="mt-1 w-full h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-md"></div>
            </div>
          </div>
        </motion.div>

        {/* Android Phone */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-16 h-28 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-gray-600 shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-green-900 to-teal-900 rounded-md m-0.5 p-1">
              {/* Android App Screen */}
              <div className="w-full h-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-t-sm mb-1 flex items-center justify-center">
                <div className="text-xs text-white font-bold">Material</div>
              </div>
              <div className="space-y-1">
                <div className="w-full h-1 bg-gray-300 rounded"></div>
                <div className="w-2/3 h-1 bg-gray-400 rounded"></div>
              </div>
              <div className="mt-1 space-y-1">
                <div className="w-full h-2.5 bg-teal-500 rounded-sm"></div>
                <div className="w-full h-2.5 bg-green-500 rounded-sm"></div>
                <div className="w-3/4 h-2.5 bg-emerald-500 rounded-sm"></div>
              </div>
              <div className="mt-1 flex justify-center">
                <div className="w-8 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tablet */}
        <motion.div
          className="absolute left-0 top-1/2 transform -translate-y-1/2"
          animate={{ 
            y: [0, -10, 0],
            x: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="w-20 h-28 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-gray-600 shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 rounded-md m-0.5 p-1.5">
              {/* Tablet App Screen */}
              <div className="w-full h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-sm mb-1"></div>
              <div className="grid grid-cols-2 gap-1 mb-1">
                <div className="h-3 bg-gray-300 rounded"></div>
                <div className="h-3 bg-gray-400 rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="w-full h-2 bg-purple-500 rounded"></div>
                <div className="w-full h-2 bg-indigo-500 rounded"></div>
                <div className="w-3/4 h-2 bg-blue-500 rounded"></div>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1">
                <div className="h-3 bg-purple-400 rounded"></div>
                <div className="h-3 bg-indigo-400 rounded"></div>
                <div className="h-3 bg-blue-400 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Flutter Widgets */}
      <motion.div
        className="absolute top-8 left-16"
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-14 h-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg flex items-center justify-center">
          <div className="text-xs text-blue-400 font-mono">Widget</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-12 right-12"
        animate={{ 
          y: [0, -8, 0],
          x: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg flex items-center justify-center">
          <Palette size={16} className="text-purple-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-8"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-16 h-8 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg flex items-center justify-center">
          <div className="text-xs text-green-400 font-mono">setState</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-16"
        animate={{ 
          y: [0, -10, 0],
          x: [0, -8, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-lg flex items-center justify-center">
          <Play size={14} className="text-orange-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-24 left-32"
        animate={{ 
          y: [0, -6, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg flex items-center justify-center">
          <Settings size={12} className="text-cyan-400" />
        </div>
      </motion.div>

      {/* Floating Flutter Code Snippets */}
      <motion.div
        className="absolute top-4 left-28 text-xs font-mono text-blue-400/70"
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        StatefulWidget
      </motion.div>

      <motion.div
        className="absolute top-28 right-8 text-xs font-mono text-purple-400/70"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        BuildContext
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-20 text-xs font-mono text-green-400/70"
        animate={{ 
          y: [0, -12, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        MaterialApp
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-24 text-xs font-mono text-cyan-400/70"
        animate={{ 
          y: [0, -7, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        Scaffold
      </motion.div>

      <motion.div
        className="absolute top-16 right-32 text-xs font-mono text-orange-400/70"
        animate={{ 
          y: [0, -9, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
      >
        hot reload
      </motion.div>

      {/* Development Workflow Indicators */}
      <motion.div
        className="absolute top-20 left-20"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-400/50">
          <path
            d="M12 2L17 7H14V13H10V7H7L12 2Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-purple-400/50">
          <path
            d="M2 12L7 7V10H13V14H7V17L2 12Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Flutter Logo Animation */}
      <motion.div
        className="absolute top-6 right-6"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
          <div className="text-white font-bold text-xs">F</div>
        </div>
      </motion.div>

      {/* Connecting Data Flow Lines */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="240" height="240" className="absolute inset-0">
          <defs>
            <linearGradient id="flutterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="25%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="75%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M60 60 Q120 40 180 60 Q200 120 180 180 Q120 200 60 180 Q40 120 60 60"
            stroke="url(#flutterGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
          />
          <path
            d="M80 80 Q120 100 160 80 Q180 120 160 160 Q120 140 80 160 Q60 120 80 80"
            stroke="url(#flutterGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,2"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Enhanced Ambient Glow with Flutter Colors */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-purple-500/6 via-cyan-500/8 via-green-500/6 to-orange-500/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary Glow Layer */}
      <motion.div
        className="absolute inset-4 bg-gradient-to-br from-blue-400/10 via-purple-400/8 to-cyan-400/10 rounded-full blur-2xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};

export default FlutterMobileDevIllustration;
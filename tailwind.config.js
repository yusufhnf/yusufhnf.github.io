/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Dark Mode Color System with Liquid Glass Support
        primary: {
          black: '#0A0A0F',        // Deep space black
          dark: '#1A1A2E',         // Rich dark navy
          elevated: '#16213E',     // Elevated navy surfaces
          border: '#0F3460',       // Border color with blue tint
        },

        // Enhanced Text colors with better contrast
        text: {
          primary: '#FFFFFF',      // Pure white text (AAA on dark backgrounds)
          secondary: '#E2E8F0',    // Light slate text (AA+ on dark backgrounds)
          muted: '#CBD5E1',        // Muted slate text (AA on dark backgrounds)
          disabled: '#94A3B8',     // Disabled text
        },

        // Enhanced Blue color palette for liquid glass
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',          // Light blue for accents
          500: '#3B82F6',          // Primary blue
          600: '#2563EB',          // Darker blue
          700: '#1D4ED8',          // Deep blue
          800: '#1E40AF',          // Navy blue
          900: '#1E3A8A',          // Dark navy
        },

        // Liquid glass specific colors
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.15)',
          heavy: 'rgba(255, 255, 255, 0.2)',
          blue: 'rgba(59, 130, 246, 0.1)',
          'blue-medium': 'rgba(59, 130, 246, 0.15)',
          'blue-heavy': 'rgba(59, 130, 246, 0.2)',
        },

        // Status colors with glass variants
        status: {
          success: '#10B981',
          'success-glass': 'rgba(16, 185, 129, 0.1)',
          warning: '#F59E0B',
          'warning-glass': 'rgba(245, 158, 11, 0.1)',
          error: '#EF4444',
          'error-glass': 'rgba(239, 68, 68, 0.1)',
          info: '#3B82F6',
          'info-glass': 'rgba(59, 130, 246, 0.1)',
        },

        // Interactive states for liquid glass
        interactive: {
          hover: 'rgba(255, 255, 255, 0.05)',
          active: 'rgba(255, 255, 255, 0.1)',
          focus: '#60A5FA',
          disabled: 'rgba(255, 255, 255, 0.02)',
        },
      },

      // Enhanced gradients for liquid glass
      backgroundImage: {
        'liquid-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(255, 255, 255, 0.08) 100%)',
        'liquid-gradient-hover': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(255, 255, 255, 0.12) 100%)',
        'liquid-blue': 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.9) 50%, rgba(29, 78, 216, 0.8) 100%)',
        'liquid-blue-hover': 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 1) 50%, rgba(29, 78, 216, 0.9) 100%)',
        'gradient-text': 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 25%, #2563EB 50%, #1D4ED8 75%, #1E40AF 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        'background-liquid': 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 25%, #16213E 50%, #0F3460 75%, #0A0A0F 100%)',
      },

      // Enhanced shadows for liquid glass
      boxShadow: {
        'liquid': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'liquid-lg': '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        'liquid-xl': '0 24px 80px rgba(0, 0, 0, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.25)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-blue-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-interactive': '0 0 20px rgba(96, 165, 250, 0.3)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2)',
        'dark-sm': '0 1px 3px rgba(0, 0, 0, 0.5)',
        'dark': '0 2px 10px rgba(0, 0, 0, 0.3)',
        'dark-md': '0 4px 16px rgba(0, 0, 0, 0.4)',
        'dark-lg': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'dark-xl': '0 16px 40px rgba(0, 0, 0, 0.6)',
      },

      // Enhanced animations for liquid effects
      animation: {
        'liquid-flow': 'liquidFlow 20s ease-in-out infinite',
        'liquid-shimmer': 'liquidShimmer 1.5s infinite',
        'glass-shimmer': 'glassShimmer 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },

      keyframes: {
        liquidFlow: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg) scale(1)',
            opacity: '1'
          },
          '25%': { 
            transform: 'translate(-5%, -5%) rotate(1deg) scale(1.05)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'translate(3%, -3%) rotate(-0.5deg) scale(0.95)',
            opacity: '0.9'
          },
          '75%': { 
            transform: 'translate(-2%, 4%) rotate(0.8deg) scale(1.02)',
            opacity: '0.85'
          },
        },
        liquidShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glassShimmer: {
          '0%, 100%': { 
            transform: 'rotate(0deg) scale(1)', 
            opacity: '0.5' 
          },
          '50%': { 
            transform: 'rotate(180deg) scale(1.1)', 
            opacity: '0.8' 
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)', 
            opacity: '0.7' 
          },
          '25%': { 
            transform: 'translateY(-15px) rotate(1deg)', 
            opacity: '1' 
          },
          '50%': { 
            transform: 'translateY(-25px) rotate(-1deg)', 
            opacity: '0.8' 
          },
          '75%': { 
            transform: 'translateY(-15px) rotate(0.5deg)', 
            opacity: '1' 
          },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      // Enhanced spacing for better liquid glass layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // Enhanced border radius for modern liquid glass
      borderRadius: {
        'modern': '12px',
        'modern-lg': '16px',
        'modern-xl': '20px',
        'modern-2xl': '24px',
        'liquid': '20px',
      },

      // Enhanced backdrop blur for liquid glass
      backdropBlur: {
        'xs': '2px',
        'modern': '20px',
        'liquid': '24px',
        'heavy': '32px',
      },

      // Enhanced backdrop saturate for liquid glass
      backdropSaturate: {
        '150': '1.5',
        '180': '1.8',
        '200': '2',
      },

      // Typography enhancements
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },

      // Enhanced line heights
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
    },
  },
  plugins: [],
}
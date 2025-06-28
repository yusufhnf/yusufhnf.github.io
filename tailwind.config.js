/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Dark Mode Color System
        primary: {
          black: '#0A0A0A',        // Deep black background
          dark: '#1A1A1A',         // Rich dark gray surfaces
          elevated: '#2A2A2A',     // Elevated surfaces
          border: '#3A3A3A',       // Border color
        },

        // Text colors with WCAG compliance
        text: {
          primary: '#FFFFFF',      // Primary white text (AAA on #0A0A0A)
          secondary: '#E0E0E0',    // Light gray body text (AA on #0A0A0A)
          muted: '#B0B0B0',        // Muted text (AA on #0A0A0A)
          disabled: '#808080',     // Disabled text
        },

        // Primary Blue colors
        blue: {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CFFF',
          300: '#66B7FF',
          400: '#339FFF',
          500: '#0066FF',          // Primary electric blue
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },

        // Secondary Blue colors (replacing purple)
        'blue-alt': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',          // Secondary blue
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },

        // Accent color (replacing red with blue)
        accent: '#3B82F6',         // Blue accent (was red)

        // Status colors
        status: {
          success: '#10B981',      // Green
          warning: '#F59E0B',      // Amber
          error: '#EF4444',        // Red (keeping for error states)
          info: '#3B82F6',         // Blue
        },

        // Interactive states
        interactive: {
          hover: '#2A2A2A',        // Hover background
          active: '#3A3A3A',       // Active background
          focus: '#0066FF',        // Focus ring color
          disabled: '#1A1A1A',     // Disabled background
        },

        // Discord-inspired colors
        discord: {
          500: '#5865F2',          // Discord blurple
          600: '#4752C4',
          700: '#3C45A5',
        }
      },

      // Enhanced gradients
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0066FF 0%, #4D9FFF 50%, #80BFFF 100%)',
        'gradient-blue-alt': 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)',
        'gradient-surface': 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)',
        'radial-gradient': 'radial-gradient(circle, #2A2A2A 0%, #1A1A1A 70%, transparent 100%)',
        'discord-gradient': 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
      },

      // Enhanced shadows
      boxShadow: {
        'dark-sm': '0 1px 3px rgba(0, 0, 0, 0.5)',
        'dark': '0 2px 10px rgba(0, 0, 0, 0.3)',
        'dark-md': '0 4px 16px rgba(0, 0, 0, 0.4)',
        'dark-lg': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'dark-xl': '0 16px 40px rgba(0, 0, 0, 0.6)',
        'glow-blue': '0 0 20px rgba(0, 102, 255, 0.3)',
        'glow-blue-lg': '0 0 40px rgba(0, 102, 255, 0.4)',
        'glow-blue-alt': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-blue-alt-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'card-hover': '0 20px 40px rgba(0, 102, 255, 0.15)',
      },

      // Enhanced animations
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-gradient': 'pulseGradient 3.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGradient: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.7' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)', opacity: '1' },
          '50%': { transform: 'translateY(-20px) rotate(-1deg)', opacity: '0.8' },
          '75%': { transform: 'translateY(-10px) rotate(0.5deg)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 102, 255, 0.6)' },
        }
      },

      // Enhanced spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },

      // Enhanced border radius
      borderRadius: {
        'modern': '12px',
        'modern-lg': '16px',
        'modern-xl': '20px',
      },

      // Enhanced backdrop blur
      backdropBlur: {
        'xs': '2px',
        'modern': '20px',
      }
    },
  },
  plugins: [],
}
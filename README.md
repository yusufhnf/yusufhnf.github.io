# Modern Portfolio Website

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/yusufhnf/portfolio)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/yusufhnf/portfolio/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?logo=vite)](https://vitejs.dev/)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features stunning liquid glass morphism design, smooth animations, and a comprehensive project showcase.

## 🌟 Key Features

- **Liquid Glass Morphism Design** - Modern glassmorphism UI with liquid animations
- **Fully Responsive** - Optimized for all devices from mobile to 4K displays
- **Dynamic Content** - JSON-driven content management system
- **Project Showcase** - Interactive project gallery with detailed modals
- **Medium Integration** - Automatic blog post fetching from Medium
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Dark Mode Optimized** - Beautiful dark theme with enhanced contrast
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Performance Focused** - Optimized loading and rendering performance

## 📸 Screenshots

![Portfolio Homepage](https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200)
*Homepage with liquid glass hero section*

![Project Gallery](https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200)
*Interactive project showcase*

## 🚀 Live Demo

Visit the live portfolio: [https://yusufhnf.dev](https://yusufhnf.dev)

---

# Technical Stack

## Frontend Technologies
- **React 19.1.0** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 7.0.0** - Fast build tool and development server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Production-ready motion library

## UI & Animation Libraries
- **Lucide React 0.468.0** - Beautiful SVG icons
- **React Router DOM 6.28.0** - Client-side routing

## Development Tools
- **ESLint 9.29.0** - Code linting and quality
- **TypeScript ESLint 8.34.1** - TypeScript-specific linting
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.17** - CSS vendor prefixing

## Architecture Overview

```
src/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # Landing section with animations
│   ├── Portfolio.tsx   # Project showcase
│   ├── ProjectModal.tsx # Detailed project view
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useData.ts      # Data fetching and management
│   └── useMedium.ts    # Medium blog integration
├── assets/             # Static assets and data
│   └── data.json       # Portfolio content configuration
└── App.tsx             # Main application component
```

## System Requirements

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher (or yarn 1.22.0+)
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+

---

# Installation Guide

## Prerequisites

Ensure you have the following installed on your system:

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version (should be 9+)
npm --version
```

## Step-by-Step Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yusufhnf/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### 3. Verify Installation

```bash
# Check if all dependencies are installed correctly
npm list --depth=0
```

## Common Installation Issues

### Issue: Node.js Version Compatibility
```bash
# Solution: Use Node Version Manager (nvm)
nvm install 18
nvm use 18
```

### Issue: Package Installation Failures
```bash
# Solution: Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: Permission Errors (macOS/Linux)
```bash
# Solution: Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

---

# Environment Setup

## Development Environment Variables

Create a `.env.local` file in the root directory:

```env
# Development Configuration
VITE_APP_TITLE="Your Portfolio Name"
VITE_APP_DESCRIPTION="Your portfolio description"
VITE_APP_URL="http://localhost:5173"

# Medium Integration (Optional)
VITE_MEDIUM_USERNAME="your-medium-username"

# Analytics (Optional)
VITE_GA_TRACKING_ID="GA-XXXXXXXXX"

# Contact Form (Optional)
VITE_CONTACT_EMAIL="your-email@example.com"
```

## Configuration File Template

Create `src/config/environment.ts`:

```typescript
export const config = {
  app: {
    title: import.meta.env.VITE_APP_TITLE || 'Portfolio',
    description: import.meta.env.VITE_APP_DESCRIPTION || 'Modern Portfolio Website',
    url: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
  },
  medium: {
    username: import.meta.env.VITE_MEDIUM_USERNAME || '',
  },
  analytics: {
    trackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || '',
  },
};
```

## Development Tools Setup

### 1. VS Code Extensions (Recommended)

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag"
  ]
}
```

### 2. Git Hooks Setup

```bash
# Install husky for git hooks
npm install --save-dev husky
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npm run lint"
```

### 3. Local Development Setup

```bash
# Start development server
npm run dev

# Run in different port
npm run dev -- --port 3000

# Run with host access
npm run dev -- --host
```

---

# Configuration

## Portfolio Content Configuration

Edit `src/assets/data.json` to customize your portfolio content:

### Personal Information
```json
{
  "personal": {
    "name": "Your Full Name",
    "title": "Your Professional Title",
    "tagline": "Your professional tagline",
    "bio": "Your professional biography...",
    "location": "Your Location",
    "email": "your.email@example.com",
    "phone": "+1-234-567-8900",
    "resumeUrl": "https://your-resume-url.com"
  }
}
```

### Branding Configuration
```json
{
  "branding": {
    "name": "Display Name",
    "fullName": "Full Professional Name",
    "avatarUrl": "https://your-avatar-url.com/image.jpg",
    "avatar": "Initials",
    "brandingName": "Brand Name"
  }
}
```

### Project Configuration
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Title",
      "description": "Brief project description",
      "detailedDescription": "Detailed project description...",
      "image": "https://project-image-url.com/image.jpg",
      "category": "fullstack|frontend|backend",
      "technologies": ["React", "TypeScript", "Node.js"],
      "liveUrl": "https://project-live-url.com",
      "githubUrl": "https://github.com/username/project",
      "playStoreUrl": "https://play.google.com/store/apps/details?id=...",
      "appStoreUrl": "https://apps.apple.com/app/...",
      "duration": "3 months",
      "completedDate": "January 2024",
      "features": [
        "Feature 1",
        "Feature 2"
      ],
      "challenges": [
        {
          "challenge": "Challenge description",
          "solution": "Solution description"
        }
      ]
    }
  ]
}
```

## Styling Configuration

### Tailwind CSS Customization

Edit `tailwind.config.js` for custom styling:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#0A0A0F',
          dark: '#1A1A2E',
        },
        // Add your custom colors
      },
      animation: {
        'custom-animation': 'customKeyframe 2s ease-in-out infinite',
      },
    },
  },
};
```

### CSS Custom Properties

Edit `src/App.css` for global styles:

```css
:root {
  --primary-color: #3B82F6;
  --secondary-color: #1E40AF;
  --accent-color: #60A5FA;
}
```

## Environment-Specific Settings

### Development
```env
VITE_NODE_ENV=development
VITE_API_URL=http://localhost:3001
VITE_DEBUG=true
```

### Production
```env
VITE_NODE_ENV=production
VITE_API_URL=https://api.yoursite.com
VITE_DEBUG=false
```

### Staging
```env
VITE_NODE_ENV=staging
VITE_API_URL=https://staging-api.yoursite.com
VITE_DEBUG=true
```

---

# Build and Deployment

## Build Process

### Development Build
```bash
# Start development server with hot reload
npm run dev

# Build for development with source maps
npm run build:dev
```

### Production Build
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Analyze bundle size
npm run build:analyze
```

### Build Scripts Configuration

Add to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "build:dev": "tsc -b && vite build --mode development",
    "build:analyze": "npm run build && npx vite-bundle-analyzer dist",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "type-check": "tsc --noEmit"
  }
}
```

## Deployment Options

### 1. Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### 2. Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

**Vercel Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. GitHub Pages Deployment

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"deploy": "gh-pages -d dist"

# Deploy
npm run build && npm run deploy
```

### 4. Docker Deployment

**Dockerfile**:
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Docker Commands**:
```bash
# Build Docker image
docker build -t portfolio .

# Run Docker container
docker run -p 80:80 portfolio
```

## CI/CD Pipeline Setup

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm run test
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v2.0
      with:
        publish-dir: './dist'
        production-branch: main
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Deployment Prerequisites

### Environment Variables Setup
```bash
# Production environment variables
VITE_APP_URL=https://yoursite.com
VITE_GA_TRACKING_ID=your-ga-id
VITE_CONTACT_EMAIL=contact@yoursite.com
```

### Domain Configuration
1. Configure custom domain in hosting provider
2. Set up SSL certificate
3. Configure DNS records
4. Set up redirects (www to non-www or vice versa)

## Troubleshooting Deployment

### Common Build Issues

**Issue: TypeScript Errors**
```bash
# Solution: Run type checking
npm run type-check
# Fix TypeScript errors before building
```

**Issue: Missing Environment Variables**
```bash
# Solution: Check environment variables
echo $VITE_APP_URL
# Ensure all required variables are set
```

**Issue: Build Size Too Large**
```bash
# Solution: Analyze bundle and optimize
npm run build:analyze
# Remove unused dependencies and optimize images
```

### Performance Optimization

```bash
# Optimize images
npm install --save-dev imagemin imagemin-webp

# Enable gzip compression in server
# Add to nginx.conf or .htaccess

# Implement code splitting
# Use React.lazy() for route-based splitting
```

---

# Language Customization

## Internationalization (i18n) Setup

### 1. Install i18n Dependencies

```bash
npm install react-i18next i18next i18next-browser-languagedetector
```

### 2. Create Translation Files

**Directory Structure**:
```
src/
├── locales/
│   ├── en/
│   │   ├── common.json
│   │   ├── navigation.json
│   │   └── portfolio.json
│   ├── es/
│   │   ├── common.json
│   │   ├── navigation.json
│   │   └── portfolio.json
│   └── fr/
│       ├── common.json
│       ├── navigation.json
│       └── portfolio.json
```

### 3. Translation File Examples

**English** (`src/locales/en/common.json`):
```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "portfolio": "Portfolio",
    "contact": "Contact"
  },
  "buttons": {
    "viewProject": "View Project",
    "downloadResume": "Download Resume",
    "getInTouch": "Get In Touch"
  },
  "sections": {
    "hero": {
      "title": "Hi, I'm {{name}}",
      "subtitle": "Flutter Developer | iOS Developer",
      "description": "Crafting exceptional digital experiences with modern technologies"
    }
  }
}
```

**Spanish** (`src/locales/es/common.json`):
```json
{
  "navigation": {
    "home": "Inicio",
    "about": "Acerca de",
    "portfolio": "Portafolio",
    "contact": "Contacto"
  },
  "buttons": {
    "viewProject": "Ver Proyecto",
    "downloadResume": "Descargar CV",
    "getInTouch": "Contactar"
  },
  "sections": {
    "hero": {
      "title": "Hola, soy {{name}}",
      "subtitle": "Desarrollador Flutter | Desarrollador iOS",
      "description": "Creando experiencias digitales excepcionales con tecnologías modernas"
    }
  }
}
```

### 4. i18n Configuration

Create `src/i18n/index.ts`:

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from '../locales/en/common.json';
import esCommon from '../locales/es/common.json';
import frCommon from '../locales/fr/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  es: {
    common: esCommon,
  },
  fr: {
    common: frCommon,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
```

### 5. Using Translations in Components

```typescript
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section>
      <h1>{t('sections.hero.title', { name: 'John Doe' })}</h1>
      <h2>{t('sections.hero.subtitle')}</h2>
      <p>{t('sections.hero.description')}</p>
      <button>{t('buttons.getInTouch')}</button>
    </section>
  );
};
```

### 6. Language Switcher Component

```typescript
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];
  
  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
        >
          <span>{lang.flag}</span>
          <span>{lang.name}</span>
        </button>
      ))}
    </div>
  );
};
```

## Adding New Languages

### 1. Create Translation Files

```bash
# Create new language directory
mkdir src/locales/de

# Copy English files as template
cp src/locales/en/* src/locales/de/

# Translate content in German files
```

### 2. Update i18n Configuration

```typescript
// Add to src/i18n/index.ts
import deCommon from '../locales/de/common.json';

const resources = {
  en: { common: enCommon },
  es: { common: esCommon },
  fr: { common: frCommon },
  de: { common: deCommon }, // Add new language
};
```

### 3. Update Language Switcher

```typescript
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }, // Add new language
];
```

## Language-Specific Configuration

### RTL Language Support

For right-to-left languages (Arabic, Hebrew):

```typescript
// src/i18n/index.ts
i18n.on('languageChanged', (lng) => {
  const rtlLanguages = ['ar', 'he', 'fa'];
  const isRTL = rtlLanguages.includes(lng);
  
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});
```

### Date and Number Formatting

```typescript
// src/utils/formatters.ts
import { useTranslation } from 'react-i18next';

export const useFormatters = () => {
  const { i18n } = useTranslation();
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(i18n.language).format(date);
  };
  
  const formatNumber = (number: number) => {
    return new Intl.NumberFormat(i18n.language).format(number);
  };
  
  return { formatDate, formatNumber };
};
```

---

# Contributing Guidelines

## 🤝 How to Contribute

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Contribution Process

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Test Your Changes**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   npm run test
   ```

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   # or
   git commit -m "fix: resolve bug description"
   ```

6. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Code Style and Standards

### TypeScript Guidelines

```typescript
// ✅ Good: Use proper typing
interface ProjectProps {
  project: Project;
  onSelect: (id: number) => void;
}

// ❌ Bad: Avoid any types
const handleClick = (data: any) => { ... }

// ✅ Good: Use proper typing
const handleClick = (data: ProjectData) => { ... }
```

### React Component Guidelines

```typescript
// ✅ Good: Functional components with proper props
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// ✅ Good: Export with proper typing
export default Button;
```

### CSS/Tailwind Guidelines

```css
/* ✅ Good: Use semantic class names */
.project-card {
  @apply glass-effect rounded-xl p-6 card-hover;
}

/* ❌ Bad: Avoid arbitrary values in components */
.project-card {
  @apply bg-[#1a1a2e] rounded-[20px] p-[24px];
}
```

### File Naming Conventions

```
✅ Good:
- PascalCase for components: `ProjectCard.tsx`
- camelCase for utilities: `formatDate.ts`
- kebab-case for assets: `project-image.jpg`

❌ Bad:
- projectcard.tsx
- ProjectCard.js (use .tsx for React components)
- project_image.jpg
```

## 🧪 Testing Requirements

### Unit Tests

```typescript
// Example test file: ProjectCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    id: 1,
    title: 'Test Project',
    description: 'Test description',
    // ... other required fields
  };

  it('renders project title correctly', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('calls onSelect when clicked', () => {
    const mockOnSelect = jest.fn();
    render(<ProjectCard project={mockProject} onSelect={mockOnSelect} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnSelect).toHaveBeenCalledWith(1);
  });
});
```

### Integration Tests

```typescript
// Example: App.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Integration', () => {
  it('renders main navigation', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });
});
```

### Test Commands

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm run test ProjectCard.test.tsx
```

## 📋 Pull Request Process

### PR Template

When creating a pull request, please include:

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] I have tested the changes in multiple browsers

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
```

### Review Process

1. **Automated Checks**: All PRs must pass automated tests and linting
2. **Code Review**: At least one maintainer must review and approve
3. **Testing**: Changes must be tested across different browsers/devices
4. **Documentation**: Update relevant documentation for new features

## 🐛 Bug Reports

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

## 📞 Contact Information

### Maintainers

- **Primary Maintainer**: [Yusuf Umar Hanafi](mailto:flyme.yusuf@gmail.com)
  - GitHub: [@yusufhnf](https://github.com/yusufhnf)
  - LinkedIn: [yusufhnf](https://linkedin.com/in/yusufhnf)

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and community discussions
- **Email**: For private inquiries and security issues

### Response Times

- **Bug Reports**: 24-48 hours
- **Feature Requests**: 3-5 days
- **Pull Requests**: 2-3 days
- **Security Issues**: 12-24 hours

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Lucide](https://lucide.dev/) - For beautiful icons
- [Pexels](https://www.pexels.com/) - For stock images

## 📈 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yusufhnf/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/yusufhnf/portfolio?style=social)
![GitHub issues](https://img.shields.io/github/issues/yusufhnf/portfolio)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yusufhnf/portfolio)

---

**Made with ❤️ by [Yusuf Umar Hanafi](https://github.com/yusufhnf)**
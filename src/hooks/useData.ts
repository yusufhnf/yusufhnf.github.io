import { useState, useEffect } from 'react';

interface BrandingConfig {
  name: string;
  fullName: string;
  avatarUrl: string;
  avatar: string;
}

interface SectionConfig {
  title: string;
  subtitle?: string;
  description?: string;
  avatar?: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  resumeUrl: string;
  mediumProfile: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  achievements: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface Value {
  title: string;
  description: string;
}

interface PortfolioData {
  branding: BrandingConfig;
  sections: {
    home: SectionConfig;
    about: SectionConfig;
  };
  personal: PersonalInfo;
  social: SocialLink[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
  achievements: Achievement[];
  values: Value[];
}

// Template interpolation function
const interpolateTemplate = (template: string, data: Record<string, unknown>): string => {
  return template.replace(/\{\{([^}]+)\}\}/g, (match, path) => {
    const keys = path.trim().split('.');
    let value = data;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return match; // Return original if path not found
      }
    }
    
    return typeof value === 'string' ? value : match;
  });
};

// Process sections with template interpolation
const processSections = (sections: any, data: PortfolioData) => {
  const processed: any = {};
  
  for (const [sectionKey, sectionValue] of Object.entries(sections)) {
    processed[sectionKey] = {};
    
    for (const [key, value] of Object.entries(sectionValue as any)) {
      if (typeof value === 'string') {
        processed[sectionKey][key] = interpolateTemplate(value, data);
      } else {
        processed[sectionKey][key] = value;
      }
    }
  }
  
  return processed;
};

export const useData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const rawData = await response.json();
        
        // Process template interpolation
        const processedData = {
          ...rawData,
          sections: processSections(rawData.sections, rawData)
        };
        
        setData(processedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
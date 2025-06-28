import { useState, useEffect } from 'react';

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

export const useData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/assets/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
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
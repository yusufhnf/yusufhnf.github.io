import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Medium from './components/Medium';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import ProjectsPage from './components/ProjectsPage';
import { useData } from './hooks/useData';
import './App.css';

function HomePage({ data, activeSection }: { data: any; activeSection: string }) {
  return (
    <>
      <Navbar activeSection={activeSection} data={data} />
      <main>
        <section id="home">
          <Hero data={data} />
        </section>
        <section id="about" className="bg-primary-dark">
          <About data={data} />
        </section>
        <section id="experience" className="bg-primary-black">
          <Experience data={data} />
        </section>
        <section id="education" className="bg-primary-dark">
          <Education data={data} />
        </section>
        <section id="tech-stack" className="bg-primary-black">
          <TechStack data={data} />
        </section>
        <section id="portfolio" className="bg-primary-dark">
          <Portfolio data={data} />
        </section>
        <section id="medium" className="bg-primary-black">
          <Medium data={data} />
        </section>
        <section id="contact" className="bg-primary-dark">
          <Contact data={data} />
        </section>
      </main>
      <BackToTop />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const { data, loading: dataLoading, error } = useData();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'tech-stack', 'portfolio', 'medium', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dataLoading || error) {
    return (
      <div className="min-h-screen bg-primary-black flex items-center justify-center">
        <div className="text-center">
          {error ? (
            <div className="text-status-error">
              <h2 className="text-2xl font-bold mb-2">Error Loading Data</h2>
              <p>{error}</p>
            </div>
          ) : (
            <div className="text-text-primary">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4 animate-spin"></div>
              <p>Loading portfolio data...</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="bg-primary-black text-text-primary overflow-x-hidden min-h-screen w-full">
        <AnimatePresence>
          {isLoading && <LoadingScreen />}
        </AnimatePresence>
        
        {!isLoading && data && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Routes>
              <Route 
                path="/" 
                element={<HomePage data={data} activeSection={activeSection} />} 
              />
              <Route 
                path="/projects" 
                element={<ProjectsPage data={data} />} 
              />
            </Routes>
          </motion.div>
        )}
      </div>
    </Router>
  );
};

export default App;
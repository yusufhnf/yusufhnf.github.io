import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, ChevronDown, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { privacyPolicies } from '../privacyPolicies';

interface NavbarProps {
  activeSection: string;
  data: any;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPolicyMenuOpen, setIsPolicyMenuOpen] = useState(false);
  const [isMobilePolicyMenuOpen, setIsMobilePolicyMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'medium', label: 'Medium' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest('[data-policy-menu-root]')) {
        setIsPolicyMenuOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = data.personal.resumeUrl;
    link.download = `${data.personal.name.replace(' ', '_')}_Resume.pdf`;
    link.click();
  };

  const handlePolicyMenuToggle = () => {
    setIsPolicyMenuOpen((current) => !current);
  };

  const handlePolicyMenuItemClick = () => {
    setIsOpen(false);
    setIsPolicyMenuOpen(false);
    setIsMobilePolicyMenuOpen(false);
  };

  // Use branding configuration with fallback to personal data
  const displayAvatar = data.branding?.avatar || data.personal?.avatar || 'D';
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'nav-glass shadow-dark-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-2xl font-bold gradient-text glow-interactive"
            whileHover={{ scale: 1.05 }}
            data-text={displayAvatar}
          >
            {displayAvatar}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-modern text-sm font-medium transition-all micro-interaction ${
                    activeSection === item.id
                      ? 'btn-liquid text-white'
                      : 'liquid-glass text-text-secondary hover:text-text-primary'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="relative" data-policy-menu-root>
                <motion.button
                  onClick={handlePolicyMenuToggle}
                  className="liquid-glass text-text-secondary hover:text-text-primary px-4 py-2 rounded-modern text-sm font-medium transition-all micro-interaction inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>App Privacy &amp; Policy</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isPolicyMenuOpen ? 'rotate-180' : ''}`}
                  />
                </motion.button>

                {isPolicyMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-80 rounded-modern-xl border border-primary-border liquid-glass p-3 shadow-dark-lg"
                  >
                    <Link
                      to="/privacy-policy"
                      onClick={handlePolicyMenuItemClick}
                      className="flex items-center gap-3 rounded-modern px-3 py-3 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                    >
                      <ShieldCheck size={18} className="text-blue-300" />
                      <span>View All Documents</span>
                    </Link>
                    <div className="my-2 h-px bg-primary-border/70" />
                    <div className="space-y-1">
                      {privacyPolicies.map((policy) => (
                        <Link
                          key={policy.slug}
                          to={`/privacy-policy/${policy.slug}`}
                          onClick={handlePolicyMenuItemClick}
                          className="block rounded-modern px-3 py-3 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                        >
                          {policy.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Resume Download Button */}
          <motion.button
            onClick={handleDownloadResume}
            className="hidden lg:flex items-center space-x-2 btn-liquid px-6 py-3 rounded-modern text-sm font-medium micro-interaction glow-interactive"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            <span>Resume</span>
          </motion.button>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="liquid-glass text-text-muted hover:text-text-primary p-3 rounded-modern micro-interaction"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 liquid-glass border-t border-primary-border">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block px-4 py-3 rounded-modern text-base font-medium w-full text-left transition-all micro-interaction ${
                activeSection === item.id
                  ? 'btn-liquid text-white'
                  : 'glass-effect text-text-muted hover:text-text-primary'
              }`}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              {item.label}
            </motion.button>
          ))}
          <div className="rounded-modern glass-effect overflow-hidden">
            <motion.button
              onClick={() => setIsMobilePolicyMenuOpen((current) => !current)}
              className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-text-muted transition-all micro-interaction hover:text-text-primary"
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <span>App Privacy &amp; Policy</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${isMobilePolicyMenuOpen ? 'rotate-180' : ''}`}
              />
            </motion.button>
            {isMobilePolicyMenuOpen && (
              <div className="border-t border-primary-border/70 px-2 py-2 space-y-1">
                <Link
                  to="/privacy-policy"
                  onClick={handlePolicyMenuItemClick}
                  className="block rounded-modern px-3 py-3 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                >
                  View All Documents
                </Link>
                {privacyPolicies.map((policy) => (
                  <Link
                    key={policy.slug}
                    to={`/privacy-policy/${policy.slug}`}
                    onClick={handlePolicyMenuItemClick}
                    className="block rounded-modern px-3 py-3 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                  >
                    {policy.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <motion.button
            onClick={handleDownloadResume}
            className="flex items-center space-x-2 btn-liquid px-4 py-3 rounded-modern text-base font-medium w-full micro-interaction"
            whileHover={{ x: 10, scale: 1.02 }}
          >
            <Download size={16} />
            <span>Download Resume</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
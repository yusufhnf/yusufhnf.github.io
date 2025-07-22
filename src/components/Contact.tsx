import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, BookOpen, Music, Instagram } from 'lucide-react';
import type { PortfolioData } from '../hooks/useData';

interface ContactProps {
  data: PortfolioData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: data.personal.email,
      href: `mailto:${data.personal.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: data.personal.phone,
      href: `tel:${data.personal.phone.replace(/\s/g, '')}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: data.personal.location,
      href: '#'
    }
  ];

  const iconMap = {
    Github,
    Linkedin,
    Twitter,
    BookOpen,
    Music, // TikTok
    Instagram,
  };

  // Standardized social media button styling
  const getSocialButtonStyle = (platform: string) => {
    const baseClasses = 'p-3 rounded-lg transition-all duration-300';
    
    switch (platform.toLowerCase()) {
      case 'tiktok':
        return `${baseClasses} bg-black hover:bg-gray-800 text-white border border-gray-700 hover:border-gray-600`;
      case 'instagram':
        return `${baseClasses} bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white border border-purple-400`;
      case 'github':
        return `${baseClasses} bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500`;
      case 'linkedin':
        return `${baseClasses} bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 hover:border-blue-400`;
      case 'twitter':
        return `${baseClasses} bg-blue-500 hover:bg-blue-600 text-white border border-blue-400 hover:border-blue-300`;
      case 'medium':
        return `${baseClasses} bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500`;
      default:
        return `${baseClasses} btn-liquid`;
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text" data-text="Get In Touch">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information - Card style like experience section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-6 sm:p-8 card-hover">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 gradient-text">Let's Connect</h3>
              
              {/* Contact Info Cards - styled like experience cards */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-lg p-4 card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg flex-shrink-0">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{info.label}</h4>
                        <p className="text-sm sm:text-base text-gray-300">{info.value}</p>
                        {info.href !== '#' && (
                          <a
                            href={info.href}
                            className="inline-block mt-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                          >
                            Contact via {info.label.toLowerCase()}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Section */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Follow Me</h4>
                {/* Social Media Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {data.social.map((social, index: number) => {
                    const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                    const buttonStyle = getSocialButtonStyle(social.platform);
                    
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonStyle}
                        aria-label={social.platform}
                        title={social.platform}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Card style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-6 sm:p-8 card-hover">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">Send Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 input-liquid rounded-lg text-white placeholder-gray-400 text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 input-liquid rounded-lg text-white placeholder-gray-400 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 input-liquid rounded-lg text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 input-liquid rounded-lg text-white placeholder-gray-400 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-liquid disabled:opacity-50 disabled:cursor-not-allowed px-6 sm:px-8 py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-all text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
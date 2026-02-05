'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail, Palette, Sparkles, Zap } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home, color: '#00D9FF' },
  { name: 'About', href: '#about', icon: User, color: '#FF6B9D' },
  { name: 'Projects', href: '#projects', icon: Briefcase, color: '#FFD700' },
  { name: 'Skills', href: '#skills', icon: Code, color: '#00FF88' },
  { name: 'Design', href: '#design', icon: Palette, color: '#A855F7' },
  { name: 'Contact', href: '#contact', icon: Mail, color: '#FF6B6B' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - CENTERED AT TOP */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <motion.div
            className="relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-black/60 border-2 border-cyan-500/30 shadow-2xl"
            animate={{
              boxShadow: scrolled 
                ? [
                    '0 0 30px rgba(0, 217, 255, 0.3)',
                    '0 0 60px rgba(0, 217, 255, 0.5)',
                    '0 0 30px rgba(0, 217, 255, 0.3)',
                  ]
                : '0 0 20px rgba(0, 217, 255, 0.2)',
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
              },
            }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 opacity-50"
              style={{
                background: 'linear-gradient(90deg, #00D9FF, #FF6B9D, #FFD700, #00FF88, #A855F7, #00D9FF)',
                backgroundSize: '400% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          
            <div className="relative bg-black/60 backdrop-blur-xl m-[2px] rounded-3xl">
              <div className="px-4 lg:px-6 py-3">
                <div className="flex items-center justify-between gap-4">
                {/* Logo - CRAZY ANIMATED */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 cursor-pointer"
                  onClick={() => scrollToSection('#home')}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(0, 217, 255, 0.8)',
                        '0 0 30px rgba(255, 107, 157, 0.8)',
                        '0 0 10px rgba(0, 217, 255, 0.8)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                      AN
                    </span>
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      <Sparkles size={16} className="text-yellow-400" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Desktop Menu - ALL ITEMS VISIBLE */}
                <div className="hidden md:flex flex-1 justify-center">
                  <div className="flex items-center space-x-1 lg:space-x-2">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.href.substring(1);
                      
                      return (
                        <motion.button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className={`relative px-3 lg:px-4 py-2 rounded-2xl text-xs lg:text-sm font-bold transition-all duration-300 flex items-center space-x-1 lg:space-x-2 overflow-hidden group ${
                            isActive
                              ? 'text-white'
                              : 'text-gray-300 hover:text-white'
                          }`}
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {/* Active background */}
                          {isActive && (
                            <motion.div
                              layoutId="activeNav"
                              className="absolute inset-0 rounded-2xl"
                              style={{
                                background: `linear-gradient(135deg, ${item.color}80, ${item.color}40)`,
                              }}
                              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          
                          {/* Hover glow effect */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                            style={{
                              background: `radial-gradient(circle, ${item.color}40, transparent 70%)`,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Icon with rotation */}
                          <motion.div
                            className="relative z-10"
                            animate={isActive ? {
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.2, 1],
                            } : {}}
                            transition={{
                              duration: 2,
                              repeat: isActive ? Infinity : 0,
                            }}
                          >
                            <Icon size={18} style={{ color: isActive ? item.color : undefined }} />
                          </motion.div>
                          
                          <span className="relative z-10">{item.name}</span>
                          
                          {/* Sparkle effect on active */}
                          {isActive && (
                            <motion.div
                              className="absolute -top-1 -right-1"
                              animate={{
                                scale: [1, 1.5, 1],
                                rotate: [0, 180, 360],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            >
                              <Zap size={12} style={{ color: item.color }} />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                        >
                          <X size={24} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                        >
                          <Menu size={24} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu - CRAZY DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: 'spring' }}
              className="md:hidden mt-2"
            >
              <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-black/60 border-2 border-cyan-500/30 shadow-2xl">
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, #00D9FF, #FF6B9D, #FFD700)',
                    backgroundSize: '400% 400%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative p-4 space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.substring(1);
                    
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-left px-5 py-4 rounded-2xl text-base font-bold transition-all duration-300 flex items-center space-x-3 ${
                          isActive
                            ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-2 border-cyan-400'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon size={22} style={{ color: item.color }} />
                        <span>{item.name}</span>
                        {isActive && (
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          >
                            <Sparkles size={16} style={{ color: item.color }} />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Floating Social Icons - CRAZY STYLE */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="flex flex-col space-y-4">
          {[
            { name: 'GitHub', url: 'https://github.com', icon: '🔗', color: '#00D9FF' },
            { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼', color: '#FF6B9D' },
            { name: 'Twitter', url: 'https://twitter.com', icon: '🐦', color: '#00FF88' },
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 backdrop-blur-xl bg-black/40 border-2 border-cyan-500/30 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.15, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, ${social.color}60, transparent 70%)`,
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">{social.icon}</span>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    `0 0 10px ${social.color}40`,
                    `0 0 30px ${social.color}80`,
                    `0 0 10px ${social.color}40`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Back to Top Button - CRAZY ROCKET */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl flex items-center justify-center shadow-2xl z-40 text-2xl overflow-hidden group"
            whileHover={{ scale: 1.2, rotate: 360, y: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative z-10">🚀</span>
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 217, 255, 0.5)',
                  '0 0 60px rgba(255, 107, 157, 0.8)',
                  '0 0 20px rgba(0, 217, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

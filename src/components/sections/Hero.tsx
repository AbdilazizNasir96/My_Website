'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Code, Rocket } from 'lucide-react';
import PremiumBackground from '@/components/ui/PremiumBackground';

const jobTitles = [
  'Full Stack Developer',
  'Mobile App Developer',
  'Frontend Specialist',
  'Backend Engineer',
  'Database Expert',
  'Video Editor',
  'Motion Designer',
  'Upwork Freelancer',
];

const techIcons = [
  { name: 'React', symbol: '⚛️', color: '#61DAFB' },
  { name: 'Flutter', symbol: '📱', color: '#02569B' },
  { name: 'Next.js', symbol: '▲', color: '#FFFFFF' },
  { name: 'C#', symbol: '#️⃣', color: '#239120' },
  { name: 'Node.js', symbol: '🟢', color: '#339933' },
  { name: 'Database', symbol: '🗄️', color: '#F29111' },
  { name: 'TypeScript', symbol: '📘', color: '#3178C6' },
  { name: 'API', symbol: '🔌', color: '#FF6B6B' },
];

// Simplified Floating Shape for mobile
const FloatingShape = ({ delay = 0, isMobile = false }: { delay?: number; isMobile?: boolean }) => {
  const shapes = ['◆', '●', '■', '▲', '★'];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  const colors = ['#58a6ff', '#f78166', '#a5d6ff', '#ff6b9d', '#ffd700'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  // Static shapes on mobile
  if (isMobile) {
    return (
      <div
        className="absolute text-2xl opacity-5"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          color,
        }}
      >
        {shape}
      </div>
    );
  }
  
  return (
    <motion.div
      className="absolute text-4xl opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 50 - 25, 0],
        rotate: [0, 360],
        opacity: [0.1, 0.4, 0.1],
      }}
      transition={{
        duration: Math.random() * 8 + 10,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      {shape}
    </motion.div>
  );
};

// Simplified Matrix-style falling code
const FallingCode = ({ isMobile = false }: { isMobile?: boolean }) => {
  // Don't render on mobile
  if (isMobile) return null;
  
  const codes = ['{ }', '< />', '[ ]', '( )', '=>', 'fn'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-500 font-mono text-sm opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: -20,
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          {codes[Math.floor(Math.random() * codes.length)]}
        </motion.div>
      ))}
    </div>
  );
};

// Simplified Tech Icons
const FloatingTechIcon = ({ icon, index, isMobile }: { icon: typeof techIcons[0]; index: number; isMobile: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.8, type: 'spring' }}
      className="absolute text-3xl md:text-5xl cursor-pointer"
      style={{
        left: `${10 + (index % 4) * 22}%`,
        top: `${20 + Math.floor(index / 4) * 30}%`,
      }}
    >
      <motion.div
        animate={!isMobile ? {
          y: [0, -25, 0],
          rotateY: [0, 180, 360],
        } : {
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5 + index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={!isMobile ? { 
          scale: 1.5, 
          rotateZ: 360,
          transition: { duration: 0.5 }
        } : {}}
        className="relative"
        title={icon.name}
      >
        {!isMobile && (
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{ background: icon.color }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        )}
        <span className="relative z-10 drop-shadow-2xl">{icon.symbol}</span>
      </motion.div>
    </motion.div>
  );
};

// INSANE Job Title Animation - Works on both mobile and desktop
const JobTitleAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const gradients = [
    'from-cyan-400 via-blue-500 to-purple-600',
    'from-pink-500 via-red-500 to-yellow-500',
    'from-green-400 via-cyan-500 to-blue-500',
    'from-purple-500 via-pink-500 to-red-500',
    'from-yellow-400 via-orange-500 to-red-500',
    'from-blue-500 via-purple-500 to-pink-500',
    'from-orange-500 via-red-500 to-pink-500',
    'from-teal-400 via-cyan-500 to-blue-500',
  ];

  const glowColors = [
    '#58a6ff',
    '#ff6b9d',
    '#00ff88',
    '#a855f7',
    '#ffd700',
    '#8b5cf6',
    '#f97316',
    '#14b8a6',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="text-xl sm:text-2xl lg:text-4xl font-bold mb-6 md:mb-8 h-24 md:h-32 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated "I'm a" text */}
      <motion.span 
        className="text-gray-300 mr-3 md:mr-4 text-xl md:text-3xl relative z-10"
        animate={{ 
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        I'm a
      </motion.span>

      {/* Main container for job title */}
      <div className="relative inline-block min-w-[280px] sm:min-w-[450px] h-full flex items-center justify-start perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full"
          >
            {/* Explosive background burst */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 2, 1.5],
                opacity: [0, 0.6, 0],
              }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="w-full h-full rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${glowColors[currentIndex]}, transparent)`,
                }}
              />
            </motion.div>

            {/* Rotating 3D text container */}
            <motion.div
              initial={{ 
                rotateX: 90,
                rotateY: -90,
                scale: 0,
                opacity: 0,
              }}
              animate={{ 
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{ 
                rotateX: -90,
                rotateY: 90,
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.68, -0.55, 0.265, 1.55],
              }}
              className="relative preserve-3d"
            >
              {/* Main text with split animation */}
              <div className="relative">
                {jobTitles[currentIndex].split('').map((char, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ 
                      opacity: 0, 
                      y: 50,
                      rotateX: -90,
                      scale: 0,
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -50,
                      rotateX: 90,
                      scale: 0,
                    }}
                    transition={{
                      delay: idx * 0.05,
                      duration: 0.5,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className={`
                      inline-block font-black
                      bg-gradient-to-r ${gradients[currentIndex]} 
                      bg-clip-text text-transparent
                    `}
                    style={{
                      backgroundSize: '200% 200%',
                      textShadow: isMobile ? 'none' : `0 0 30px ${glowColors[currentIndex]}`,
                      filter: isMobile ? 'none' : `drop-shadow(0 0 20px ${glowColors[currentIndex]})`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}

                {/* Animated gradient wave effect */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: `linear-gradient(90deg, transparent, ${glowColors[currentIndex]}20, transparent)`,
                    backgroundSize: '200% 100%',
                  }}
                />
              </div>

              {/* Orbiting particles around text */}
              {!isMobile && [...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: glowColors[currentIndex],
                    boxShadow: `0 0 10px ${glowColors[currentIndex]}`,
                  }}
                  initial={{ 
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.5, 1.5, 0],
                    x: [
                      0,
                      Math.cos((i * 60 * Math.PI) / 180) * 100,
                      Math.cos((i * 60 * Math.PI) / 180) * 150,
                    ],
                    y: [
                      0,
                      Math.sin((i * 60 * Math.PI) / 180) * 100,
                      Math.sin((i * 60 * Math.PI) / 180) * 150,
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3 + i * 0.1,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {/* Explosion sparkles */}
              {[...Array(isMobile ? 4 : 8)].map((_, i) => (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute text-xl md:text-2xl"
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: Math.cos((i * 45 * Math.PI) / 180) * (isMobile ? 60 : 100),
                    y: Math.sin((i * 45 * Math.PI) / 180) * (isMobile ? 60 : 100),
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + i * 0.05,
                    ease: 'easeOut',
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                >
                  ✨
                </motion.div>
              ))}

              {/* Pulsing underline */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 rounded-full"
                initial={{ width: '0%', opacity: 0 }}
                animate={{ 
                  width: ['0%', '100%', '100%'],
                  opacity: [0, 1, 0],
                  boxShadow: [
                    `0 0 0px ${glowColors[currentIndex]}`,
                    `0 0 20px ${glowColors[currentIndex]}`,
                    `0 0 0px ${glowColors[currentIndex]}`,
                  ],
                }}
                transition={{ 
                  duration: 2,
                  times: [0, 0.5, 1],
                }}
                style={{
                  background: `linear-gradient(90deg, transparent, ${glowColors[currentIndex]}, transparent)`,
                }}
              />

              {/* Scanning line effect */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 1.5,
                  delay: 0.3,
                  ease: 'easeInOut',
                }}
                style={{
                  background: `linear-gradient(90deg, transparent, ${glowColors[currentIndex]}40, transparent)`,
                  width: '50%',
                }}
              />
            </motion.div>

            {/* Ripple effect */}
            {!isMobile && (
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ 
                  scale: [0, 3],
                  opacity: [0.8, 0],
                }}
                transition={{ duration: 1.5 }}
              >
                <div 
                  className="w-32 h-32 rounded-full border-4"
                  style={{
                    borderColor: glowColors[currentIndex],
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Glitch cursor effect */}
        <motion.div
          className="absolute w-1 md:w-1.5 h-10 md:h-14 rounded-full"
          style={{
            right: '-15px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: `linear-gradient(to bottom, ${glowColors[currentIndex]}, transparent)`,
            boxShadow: `0 0 20px ${glowColors[currentIndex]}`,
          }}
          animate={{
            opacity: [1, 0, 1],
            scaleY: [1, 0.8, 1],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Holographic scan lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              ${glowColors[currentIndex]}10 2px,
              ${glowColors[currentIndex]}10 4px
            )`,
          }}
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* PREMIUM ANIMATED BACKGROUND */}
      <PremiumBackground />
      
      {/* Additional Hero-specific effects */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes - Minimal for mobile */}
        {Array.from({ length: isMobile ? 3 : 12 }).map((_, i) => (
          <FloatingShape key={i} delay={i * 0.3} isMobile={isMobile} />
        ))}
        
        {/* Matrix Falling Code - Desktop only */}
        <FallingCode isMobile={isMobile} />
        
        {/* Animated Grid - Desktop only */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(#58a6ff 1px, transparent 1px),
                linear-gradient(90deg, #58a6ff 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}
        
        {/* Mouse-following gradient - Desktop only */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(88, 166, 255, 0.15), transparent 50%)`,
            }}
          />
        )}
      </div>

      {/* Floating Tech Icons - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 hidden lg:block">
          {techIcons.map((icon, index) => (
            <FloatingTechIcon key={icon.name} icon={icon} index={index} isMobile={isMobile} />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting with icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles className="text-yellow-400" size={isMobile ? 20 : 28} />
            </motion.div>
            <p className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
              Hello, I'm
            </p>
            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Zap className="text-yellow-400" size={isMobile ? 20 : 28} />
            </motion.div>
          </motion.div>

          {/* Name with effects */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, type: 'spring', bounce: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 md:mb-8 relative"
          >
            <motion.span
              className="relative inline-block"
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            >
              {!isMobile && (
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50" />
              )}
              <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Abdilaziz Nasir
              </span>
            </motion.span>
          </motion.h1>

          {/* Job Title Animation */}
          <JobTitleAnimation />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate about creating <span className="text-cyan-400 font-bold">innovative digital solutions</span> with expertise in 
            <span className="text-blue-400 font-bold"> Flutter</span>,
            <span className="text-orange-400 font-bold"> Next.js</span>,
            <span className="text-cyan-400 font-bold"> React.js</span>, and
            <span className="text-purple-400 font-bold"> ASP.NET</span>.
            Let's build something <span className="text-yellow-400 font-bold">amazing</span> together! 🚀
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-full font-bold text-base md:text-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 md:gap-3">
                <Code size={isMobile ? 20 : 24} />
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 md:border-4 border-cyan-400 text-cyan-400 rounded-full font-bold text-base md:text-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -5, borderColor: '#ffffff', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 md:gap-3">
                <Rocket size={isMobile ? 20 : 24} />
                Get In Touch
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-cyan-400 text-xs md:text-sm mb-2 font-semibold group-hover:text-white transition-colors">
              Scroll to explore
            </span>
            <ChevronDown className="text-cyan-400 group-hover:text-white transition-colors" size={isMobile ? 24 : 32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

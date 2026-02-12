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
  
  return (
    <motion.div
      className="absolute text-2xl md:text-4xl opacity-10 md:opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color,
      }}
      animate={{
        y: [0, isMobile ? -50 : -100, 0],
        x: [0, Math.random() * 50 - 25, 0],
        rotate: [0, 360],
        opacity: [0.1, isMobile ? 0.2 : 0.4, 0.1],
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
  const codes = ['{ }', '< />', '[ ]', '( )', '=>', 'fn'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: isMobile ? 8 : 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-500 font-mono text-xs md:text-sm opacity-20"
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

// Job Title Animation
const JobTitleAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const gradients = [
    'from-cyan-400 via-blue-500 to-purple-600',
    'from-pink-500 via-red-500 to-yellow-500',
    'from-green-400 via-cyan-500 to-blue-500',
    'from-purple-500 via-pink-500 to-red-500',
    'from-yellow-400 via-orange-500 to-red-500',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="text-xl sm:text-2xl lg:text-4xl font-bold mb-6 md:mb-8 h-16 md:h-24 flex items-center justify-center relative"
    >
      <span className="text-gray-300 mr-3 md:mr-4 text-xl md:text-3xl">I'm a</span>
      <div className="relative inline-block min-w-[250px] sm:min-w-[400px] h-full flex items-center justify-start">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ 
              opacity: 0,
              y: 30,
              filter: 'blur(10px)',
              scale: 0.8,
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
            }}
            exit={{ 
              opacity: 0,
              y: -30,
              filter: 'blur(10px)',
              scale: 0.8,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2
              bg-gradient-to-r ${gradients[currentIndex]} 
              bg-clip-text text-transparent font-black
            `}
          >
            {jobTitles[currentIndex]}
          </motion.span>
        </AnimatePresence>
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
        {/* Floating Geometric Shapes - Reduced for mobile */}
        {Array.from({ length: isMobile ? 5 : 12 }).map((_, i) => (
          <FloatingShape key={i} delay={i * 0.3} isMobile={isMobile} />
        ))}
        
        {/* Matrix Falling Code */}
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

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

// Crazy Animated Orbs
const AnimatedOrb = ({ delay = 0, size = 300, color = '#58a6ff' }: { delay?: number; size?: number; color?: string }) => {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40, transparent 70%)`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
        y: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
        scale: [1, 1.3, 0.8, 1],
        opacity: [0.3, 0.6, 0.4, 0.3],
      }}
      transition={{
        duration: Math.random() * 10 + 15,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
};

// Floating Geometric Shapes
const FloatingShape = ({ delay = 0 }: { delay?: number }) => {
  const shapes = ['◆', '●', '■', '▲', '★', '✦', '◉', '◈'];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  const colors = ['#58a6ff', '#f78166', '#a5d6ff', '#ff6b9d', '#ffd700', '#00ff88'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
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
        scale: [0.8, 1.2, 0.8],
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

// Matrix-style falling code
const FallingCode = () => {
  const codes = ['{ }', '< />', '[ ]', '( )', '=> ', 'fn', 'var', 'let', 'const', '&&', '||', '==='];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
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

// Crazy Tech Icons with 3D effect
const FloatingTechIcon = ({ icon, index }: { icon: typeof techIcons[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateY: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.8, type: 'spring' }}
      className="absolute text-5xl cursor-pointer"
      style={{
        left: `${10 + (index % 4) * 22}%`,
        top: `${20 + Math.floor(index / 4) * 30}%`,
      }}
    >
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotateY: [0, 180, 360],
          rotateZ: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5 + index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ 
          scale: 1.5, 
          rotateZ: 360,
          transition: { duration: 0.5 }
        }}
        className="relative"
        title={icon.name}
      >
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
        <span className="relative z-10 drop-shadow-2xl">{icon.symbol}</span>
      </motion.div>
    </motion.div>
  );
};

// Insane Job Title Animation
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
      className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 h-24 flex items-center justify-center relative"
    >
      <span className="text-gray-300 mr-4 text-3xl">I'm a</span>
      <div className="relative inline-block min-w-[350px] sm:min-w-[500px] h-full flex items-center justify-start">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ 
              opacity: 0,
              y: 50,
              rotateX: -90,
              filter: 'blur(20px)',
              scale: 0.5,
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: 'blur(0px)',
              scale: 1,
            }}
            exit={{ 
              opacity: 0,
              y: -50,
              rotateX: 90,
              filter: 'blur(20px)',
              scale: 0.5,
            }}
            transition={{
              duration: 0.8,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2
              bg-gradient-to-r ${gradients[currentIndex]} 
              bg-clip-text text-transparent font-black
            `}
            style={{
              backgroundSize: '200% 200%',
              textShadow: '0 0 30px rgba(88, 166, 255, 0.5)',
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {jobTitles[currentIndex]}
            </motion.span>
          </motion.span>
        </AnimatePresence>
        
        {/* Glowing cursor */}
        <motion.span
          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-10 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"
          animate={{
            opacity: [1, 0, 1],
            scaleY: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            boxShadow: '0 0 20px rgba(88, 166, 255, 0.8)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* PREMIUM ANIMATED BACKGROUND */}
      <PremiumBackground />
      
      {/* Additional Hero-specific effects */}
      <div className="absolute inset-0">{/* Floating Geometric Shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingShape key={i} delay={i * 0.3} />
        ))}
        
        {/* Matrix Falling Code */}
        <FallingCode />
        
        {/* Animated Grid */}
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
        
        {/* Mouse-following gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(1000px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(88, 166, 255, 0.15), transparent 50%)`,
          }}
        />
        
        {/* Rotating gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #f78166 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #a5d6ff 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, #58a6ff 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, #ff6b9d 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #f78166 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 hidden lg:block">
        {techIcons.map((icon, index) => (
          <FloatingTechIcon key={icon.name} icon={icon} index={index} />
        ))}
      </div>

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
            className="flex items-center justify-center gap-3 mb-4"
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
              <Sparkles className="text-yellow-400" size={28} />
            </motion.div>
            <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
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
              <Zap className="text-yellow-400" size={28} />
            </motion.div>
          </motion.div>

          {/* Name with crazy effects */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1, type: 'spring', bounce: 0.4 }}
            className="text-6xl sm:text-7xl lg:text-9xl font-black mb-8 relative"
          >
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50" />
              <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Abdilaziz Nasir
              </span>
            </motion.span>
          </motion.h1>

          {/* Job Title Animation */}
          <JobTitleAnimation />

          {/* Description with icons */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate about creating <span className="text-cyan-400 font-bold">innovative digital solutions</span> with expertise in 
            <span className="text-blue-400 font-bold"> Flutter</span>,
            <span className="text-orange-400 font-bold"> Next.js</span>,
            <span className="text-cyan-400 font-bold"> React.js</span>, and
            <span className="text-purple-400 font-bold"> ASP.NET</span>.
            Let's build something <span className="text-yellow-400 font-bold">amazing</span> together! 🚀
          </motion.p>

          {/* CTA Buttons with crazy effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-full font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Code size={24} />
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(88, 166, 255, 0.5)',
                    '0 0 60px rgba(88, 166, 255, 0.8)',
                    '0 0 20px rgba(88, 166, 255, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-transparent border-4 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.1, y: -5, borderColor: '#ffffff', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Rocket size={24} />
                Get In Touch
                <motion.span
                  className="opacity-0 group-hover:opacity-100"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-cyan-400 text-sm mb-2 font-semibold group-hover:text-white transition-colors">
              Scroll to explore
            </span>
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 10px rgba(88, 166, 255, 0.5)',
                  '0 0 30px rgba(88, 166, 255, 0.8)',
                  '0 0 10px rgba(88, 166, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="rounded-full p-2"
            >
              <ChevronDown className="text-cyan-400 group-hover:text-white transition-colors" size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

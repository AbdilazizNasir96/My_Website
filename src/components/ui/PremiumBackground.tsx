'use client';

import { motion } from 'framer-motion';

interface FloatingOrbProps {
  delay?: number;
  duration?: number;
}

const FloatingOrb = ({ delay = 0, duration = 4 }: FloatingOrbProps) => (
  <motion.div
    className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
    style={{
      background: `radial-gradient(circle, ${
        ['#a855f7', '#ec4899', '#f59e0b', '#8b5cf6', '#58a6ff', '#00ff88'][Math.floor(Math.random() * 6)]
      }, transparent)`,
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 80}%`,
    }}
    animate={{
      x: [0, Math.random() * 100 - 50, 0],
      y: [0, Math.random() * 100 - 50, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
);

export default function PremiumBackground() {
  return (
    <>
      {/* Layer 1: Deep Space Base */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #1a0b2e 0%, #0a0118 50%, #000000 100%)',
        }}
      />

      {/* Layer 2: Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 0% 0%, rgba(88, 166, 255, 0.3) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.3) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(245, 158, 11, 0.3) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.3) 0px, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Layer 3: Floating Gradient Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <FloatingOrb key={i} delay={i * 0.7} duration={5 + i * 0.5} />
        ))}
      </div>

      {/* Layer 4: Animated Wave Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, #58a6ff 0%, #ec4899 25%, #f59e0b 50%, #8b5cf6 75%, #58a6ff 100%)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Layer 5: Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Layer 6: Animated Grid */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(88, 166, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88, 166, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Layer 7: Radial Pulse */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(88, 166, 255, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Layer 8: Moving Spotlights */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #58a6ff, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #ec4899, transparent 70%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Layer 9: Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />
    </>
  );
}

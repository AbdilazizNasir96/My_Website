'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'purple' | 'orange' | 'green' | 'blue';
}

export default function AnimatedBackground({ variant = 'default' }: AnimatedBackgroundProps) {
  const colors = {
    default: ['#00D9FF', '#FF6B9D', '#FFD700', '#00FF88'],
    purple: ['#A855F7', '#EC4899', '#F59E0B', '#8B5CF6'],
    orange: ['#F78166', '#FFD700', '#FF6B9D', '#F59E0B'],
    green: ['#00FF88', '#00D9FF', '#A5D6FF', '#58A6FF'],
    blue: ['#58A6FF', '#A5D6FF', '#00D9FF', '#3B82F6'],
  };

  const selectedColors = colors[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Orbs */}
      {selectedColors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 250 + Math.random() * 200,
            height: 250 + Math.random() * 200,
            background: `radial-gradient(circle, ${color}30, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.4, 0.3],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(${selectedColors[0]} 1px, transparent 1px),
            linear-gradient(90deg, ${selectedColors[0]} 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Shapes */}
      {[...Array(8)].map((_, i) => {
        const shapes = ['◆', '●', '■', '▲', '★'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        return (
          <motion.div
            key={`shape-${i}`}
            className="absolute text-3xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: selectedColors[i % selectedColors.length],
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {shape}
          </motion.div>
        );
      })}
    </div>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const texts = ['Initializing', 'Loading Assets', 'Building Interface', 'Almost Ready', 'Finalizing'];
    let textIndex = 0;

    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 600);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          clearInterval(textInterval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000000 100%)',
          }}
        >
          {/* Animated Grid Background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 217, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Rotating Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: 200 + Math.random() * 300,
                  height: 200 + Math.random() * 300,
                  background: `radial-gradient(circle, ${
                    [
                      'rgba(0, 217, 255, 0.4)',
                      'rgba(255, 107, 157, 0.4)',
                      'rgba(168, 85, 247, 0.4)',
                      'rgba(236, 72, 153, 0.4)',
                      'rgba(245, 158, 11, 0.4)',
                      'rgba(139, 92, 246, 0.4)',
                    ][i % 6]
                  }, transparent 70%)`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 200 - 100, 0],
                  y: [0, Math.random() * 200 - 100, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
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
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Rotating Ring */}
          <motion.div
            className="absolute"
            style={{
              width: 400,
              height: 400,
              border: '2px solid transparent',
              borderRadius: '50%',
              borderTopColor: '#00D9FF',
              borderRightColor: '#A855F7',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Inner Rotating Ring */}
          <motion.div
            className="absolute"
            style={{
              width: 300,
              height: 300,
              border: '2px solid transparent',
              borderRadius: '50%',
              borderBottomColor: '#FF6B9D',
              borderLeftColor: '#FFD700',
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Loading Content */}
          <div className="relative z-10 text-center px-4">
            {/* Animated Logo with 3D Effect */}
            <motion.div
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
              className="mb-12 relative"
            >
              {/* Glow Effect Behind Logo */}
              <motion.div
                className="absolute inset-0 blur-3xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(0, 217, 255, 0.6), rgba(168, 85, 247, 0.6))',
                }}
              />

              {/* Main Logo */}
              <motion.div
                className="relative"
                animate={{
                  textShadow: [
                    '0 0 30px rgba(0, 217, 255, 1), 0 0 60px rgba(168, 85, 247, 0.8)',
                    '0 0 50px rgba(255, 107, 157, 1), 0 0 80px rgba(236, 72, 153, 0.8)',
                    '0 0 30px rgba(0, 217, 255, 1), 0 0 60px rgba(168, 85, 247, 0.8)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <motion.h1
                  className="text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  AN
                </motion.h1>
              </motion.div>

              {/* Orbiting Icons */}
              {[
                { Icon: Code, angle: 0, color: '#00D9FF' },
                { Icon: Palette, angle: 90, color: '#FF6B9D' },
                { Icon: Sparkles, angle: 180, color: '#A855F7' },
                { Icon: Zap, angle: 270, color: '#FFD700' },
              ].map(({ Icon, angle, color }, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.25,
                  }}
                >
                  <motion.div
                    style={{
                      x: Math.cos((angle * Math.PI) / 180) * 120,
                      y: Math.sin((angle * Math.PI) / 180) * 120,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: -360,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border-2"
                      style={{
                        backgroundColor: `${color}20`,
                        borderColor: color,
                        boxShadow: `0 0 20px ${color}80`,
                      }}
                    >
                      <Icon size={24} style={{ color }} />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Loading Text with Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <motion.p
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
              >
                {loadingText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Advanced Progress Bar */}
            <div className="relative w-80 mx-auto mb-6">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 blur-xl opacity-50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />
              </motion.div>

              {/* Progress Bar Container */}
              <div className="relative h-4 bg-gray-900/50 backdrop-blur-sm rounded-full overflow-hidden border border-gray-800">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'linear-gradient(90deg, #00D9FF, #A855F7, #FF6B9D, #00D9FF)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Progress Fill */}
                <motion.div
                  className="relative h-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #00D9FF, #A855F7, #FF6B9D)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Progress Percentage with Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
            >
              <motion.p
                className="text-5xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #00D9FF, #A855F7, #FF6B9D)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))',
                }}
              >
                {progress}%
              </motion.p>
            </motion.div>

            {/* Animated Dots Loader */}
            <motion.div
              className="flex justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                >
                  {/* Glow */}
                  <motion.div
                    className="absolute inset-0 blur-md"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                    style={{
                      background: ['#00D9FF', '#A855F7', '#FF6B9D', '#FFD700', '#00FF88'][i],
                    }}
                  />
                  {/* Dot */}
                  <motion.div
                    className="relative w-4 h-4 rounded-full"
                    style={{
                      background: ['#00D9FF', '#A855F7', '#FF6B9D', '#FFD700', '#00FF88'][i],
                    }}
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 text-sm text-gray-500 tracking-widest uppercase"
            >
              Crafting Excellence
            </motion.p>
          </div>

          {/* Corner Accents */}
          {[
            { top: 0, left: 0, rotate: 0 },
            { top: 0, right: 0, rotate: 90 },
            { bottom: 0, right: 0, rotate: 180 },
            { bottom: 0, left: 0, rotate: 270 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32"
              style={pos}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="w-full h-full border-t-2 border-l-2 border-cyan-400"
                style={{ borderRadius: '0 0 100% 0', transform: `rotate(${pos.rotate}deg)` }}
                animate={{
                  borderColor: ['#00D9FF', '#A855F7', '#FF6B9D', '#00D9FF'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

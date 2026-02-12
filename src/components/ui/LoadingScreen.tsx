'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();

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
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 4; // Faster progress on mobile
      });
    }, isMobile ? 30 : 50); // Faster intervals on mobile

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [isMobile]);

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
          {/* Simplified Background for Mobile */}
          {!isMobile && (
            <>
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

              {/* Rotating Gradient Orbs - Reduced for performance */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full blur-2xl"
                    style={{
                      width: 250,
                      height: 250,
                      background: `radial-gradient(circle, ${
                        [
                          'rgba(0, 217, 255, 0.3)',
                          'rgba(255, 107, 157, 0.3)',
                          'rgba(168, 85, 247, 0.3)',
                          'rgba(236, 72, 153, 0.3)',
                        ][i]
                      }, transparent 70%)`,
                      left: `${25 + i * 25}%`,
                      top: `${25 + (i % 2) * 50}%`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {/* Mobile: Simple gradient background */}
          {isMobile && (
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.15), transparent 50%), radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.15), transparent 50%)',
                }}
              />
            </div>
          )}

          {/* Rotating Ring - Simplified for mobile */}
          <motion.div
            className="absolute"
            style={{
              width: isMobile ? 250 : 400,
              height: isMobile ? 250 : 400,
              border: '2px solid transparent',
              borderRadius: '50%',
              borderTopColor: '#00D9FF',
              borderRightColor: '#A855F7',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: isMobile ? 4 : 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Inner Rotating Ring */}
          {!isMobile && (
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
          )}

          {/* Loading Content */}
          <div className="relative z-10 text-center px-4">
            {/* Animated Logo with 3D Effect */}
            <motion.div
              initial={{ scale: 0, rotateY: isMobile ? 0 : -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: isMobile ? 0.5 : 1, type: 'spring', bounce: 0.4 }}
              className="mb-8 md:mb-12 relative"
            >
              {/* Glow Effect Behind Logo - Simplified for mobile */}
              {!isMobile && (
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
              )}

              {/* Main Logo */}
              <motion.div
                className="relative"
                animate={!isMobile ? {
                  textShadow: [
                    '0 0 30px rgba(0, 217, 255, 1), 0 0 60px rgba(168, 85, 247, 0.8)',
                    '0 0 50px rgba(255, 107, 157, 1), 0 0 80px rgba(236, 72, 153, 0.8)',
                    '0 0 30px rgba(0, 217, 255, 1), 0 0 60px rgba(168, 85, 247, 0.8)',
                  ],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <motion.h1
                  className="text-6xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
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

              {/* Orbiting Icons - Desktop only */}
              {!isMobile && [
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
              transition={{ delay: 0.3 }}
              className="mb-6 md:mb-8"
            >
              <motion.p
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
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
            <div className="relative w-64 md:w-80 mx-auto mb-4 md:mb-6">
              {/* Glow Effect - Desktop only */}
              {!isMobile && (
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
              )}

              {/* Progress Bar Container */}
              <div className="relative h-3 md:h-4 bg-gray-900/50 backdrop-blur-sm rounded-full overflow-hidden border border-gray-800">
                {/* Animated Background - Simplified for mobile */}
                {!isMobile && (
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
                )}

                {/* Progress Fill */}
                <motion.div
                  className="relative h-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #00D9FF, #A855F7, #FF6B9D)',
                    backgroundSize: isMobile ? '100% 100%' : '200% 100%',
                  }}
                  animate={!isMobile ? {
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {/* Shimmer Effect - Desktop only */}
                  {!isMobile && (
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
                  )}
                </motion.div>
              </div>
            </div>

            {/* Progress Percentage with Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 md:mb-8"
            >
              <motion.p
                className="text-3xl md:text-5xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #00D9FF, #A855F7, #FF6B9D)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: isMobile ? 'none' : 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))',
                }}
              >
                {progress}%
              </motion.p>
            </motion.div>

            {/* Animated Dots Loader */}
            <motion.div
              className="flex justify-center gap-2 md:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                >
                  {/* Glow - Desktop only */}
                  {!isMobile && (
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
                  )}
                  {/* Dot */}
                  <motion.div
                    className="relative w-3 h-3 md:w-4 md:h-4 rounded-full"
                    style={{
                      background: ['#00D9FF', '#A855F7', '#FF6B9D', '#FFD700', '#00FF88'][i],
                    }}
                    animate={{
                      y: [0, isMobile ? -15 : -20, 0],
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
              className="mt-6 md:mt-8 text-xs md:text-sm text-gray-500 tracking-widest uppercase"
            >
              Crafting Excellence
            </motion.p>
          </div>

          {/* Corner Accents - Desktop only */}
          {!isMobile && [
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

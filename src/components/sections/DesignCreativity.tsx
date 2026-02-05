'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Play, Pause, 
  Film, Scissors, Layers, CheckCircle2, Rocket, Eye, Heart
} from 'lucide-react';
import Image from 'next/image';

const videos = [
  { id: 1, src: '/Image/video/fruite_build.mp4', title: 'Fruit Build Animation', description: 'Dynamic 3D fruit building animation' },
  { id: 2, src: '/Image/video/Intros.mp4', title: 'Creative Intros', description: 'Stunning intro animations' },
  { id: 3, src: '/Image/video/Neon_Motion_graphics.mp4', title: 'Neon Motion Graphics', description: 'Futuristic neon motion design' },
];

const videoEditingDesigns = [
  { id: 1, src: '/Image/design/1.jpeg', title: 'Video Thumbnail Design', category: 'Thumbnail' },
  { id: 2, src: '/Image/design/2.jpeg', title: 'Creative Video Design', category: 'Graphics' },
  { id: 3, src: '/Image/design/azi.png', title: 'Brand Video Design', category: 'Branding' },
  { id: 4, src: '/Image/design/New Design (1).png', title: 'Modern Video Layout', category: 'Layout' },
  { id: 5, src: '/Image/design/thumbnail.png', title: 'YouTube Thumbnail', category: 'Thumbnail' },
  { id: 6, src: '/Image/design/UI.png', title: 'Video UI Design', category: 'Interface' },
];

const videoEditingSkills = [
  { name: 'Adobe Premiere Pro', level: 95, icon: Film, color: '#9999FF' },
  { name: 'After Effects', level: 90, icon: Layers, color: '#9999FF' },
  { name: 'DaVinci Resolve', level: 85, icon: Film, color: '#FF6B6B' },
  { name: 'Final Cut Pro', level: 80, icon: Scissors, color: '#A8DADC' },
  { name: 'Motion Graphics', level: 92, icon: Sparkles, color: '#F78166' },
  { name: 'Color Grading', level: 88, icon: Film, color: '#58A6FF' },
];

const services = [
  {
    title: 'Video Editing',
    description: 'Professional video editing for YouTube, social media, and corporate content',
    icon: Film,
    features: ['Color Correction', 'Audio Mixing', 'Transitions', 'Effects'],
  },
  {
    title: 'Motion Graphics',
    description: 'Eye-catching animations and motion design for brands and content creators',
    icon: Layers,
    features: ['2D Animation', '3D Elements', 'Logo Animation', 'Kinetic Typography'],
  },
  {
    title: 'Post Production',
    description: 'Complete post-production services from raw footage to final delivery',
    icon: Scissors,
    features: ['Sound Design', 'VFX', 'Color Grading', 'Final Mastering'],
  },
];

const FloatingOrb = ({ delay = 0, duration = 4 }: { delay?: number; duration?: number }) => (
  <motion.div
    className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
    style={{
      background: `radial-gradient(circle, ${
        ['#a855f7', '#ec4899', '#f59e0b', '#8b5cf6'][Math.floor(Math.random() * 4)]
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

const VideoCard = ({ video, index }: { video: typeof videos[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-dark-card"
        whileHover={{ y: -15, scale: 1.02 }}
        transition={{ duration: 0.4, type: 'spring' }}
      >
        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: 'linear-gradient(45deg, #a855f7, #ec4899, #f59e0b, #8b5cf6, #a855f7)',
            backgroundSize: '400% 400%',
            padding: '3px',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-full h-full bg-dark-card rounded-3xl" />
        </motion.div>

        <div className="relative z-20 p-2">
          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
            <video
              ref={videoRef}
              src={video.src}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Play/Pause Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/30 to-transparent flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: isPlaying ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={togglePlay}
                className="w-20 h-20 rounded-full bg-purple-500/90 backdrop-blur-sm flex items-center justify-center text-white shadow-2xl shadow-purple-500/50 border-4 border-white/20"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.5)',
                    '0 0 40px rgba(168, 85, 247, 0.8)',
                    '0 0 20px rgba(168, 85, 247, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
              </motion.button>
            </motion.div>

            {/* Hover Controls */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                >
                  <motion.button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </motion.button>
                  
                  <motion.div
                    className="flex gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.button
                      className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold hover:bg-purple-500 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Full
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glowing corners */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/20 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-pink-500/20 blur-2xl rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Video Info */}
          <div className="p-4">
            <motion.h3
              className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              {video.title}
            </motion.h3>
            <motion.p
              className="text-gray-400"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ delay: 0.05 }}
            >
              {video.description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Floating sparkles on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 360],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={16} className="text-purple-500" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DesignCard = ({ design, index }: { design: typeof videoEditingDesigns[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 20);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-dark-card border border-dark-border"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(45deg, #a855f7, #ec4899, #f59e0b, #8b5cf6)',
            backgroundSize: '400% 400%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="relative m-[2px] bg-dark-card rounded-2xl overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={design.src}
              alt={design.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                  className="flex gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/50"
                  >
                    <Eye size={24} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleLike}
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${
                      isLiked ? 'bg-red-500 shadow-red-500/50' : 'bg-pink-500 shadow-pink-500/50'
                    }`}
                  >
                    <Heart size={24} fill={isLiked ? 'white' : 'none'} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <motion.span
                className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                whileHover={{ scale: 1.05 }}
              >
                {design.category}
              </motion.span>
              <motion.div
                className="flex items-center gap-1 text-gray-400"
                animate={{ scale: isLiked ? [1, 1.2, 1] : 1 }}
              >
                <Heart size={16} fill={isLiked ? '#ec4899' : 'none'} className={isLiked ? 'text-pink-500' : ''} />
                <span className="text-sm">{likes}</span>
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {design.title}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Floating particles on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-purple-500"
                initial={{
                  x: '50%',
                  y: '50%',
                  opacity: 1,
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 200}%`,
                  y: `${50 + (Math.random() - 0.5) * 200}%`,
                  opacity: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function DesignCreativity() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="design"
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Premium Animated Background */}
      
      {/* Layer 1: Base Gradient */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Layer 2: Animated Gradients */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(168, 85, 247, 0.4) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(236, 72, 153, 0.4) 0px, transparent 50%),
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

      {/* Layer 3: Moving Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <FloatingOrb key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Layer 4: Animated Gradient Waves */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, #a855f7 0%, #ec4899 25%, #f59e0b 50%, #8b5cf6 75%, #a855f7 100%)',
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
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
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
              duration: 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Layer 6: Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
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

      {/* Layer 7: Radial Pulse Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
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

      {/* Layer 8: Spotlight Effects */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.6) 0%, transparent 70%)',
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

      {/* Layer 9: Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Layer 10: Vignette Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Floating Icons */}
          <div className="flex justify-center gap-4 mb-6">
            {[Film, Scissors, Layers].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Video Editing & Motion Graphics
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Professional video editing services transforming raw footage into compelling stories. 
            Specializing in motion graphics, color grading, and post-production excellence.
          </motion.p>

          {/* Animated Divider */}
          <motion.div
            className="mt-8 h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Video Editing Design Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Video Editing Portfolio
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Thumbnails, graphics, and visual designs created for video projects
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoEditingDesigns.map((design, index) => (
              <DesignCard key={design.id} design={design} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Services Offered
              </span>
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-dark-card border border-dark-border p-8 h-full">
                  {/* Animated gradient border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(45deg, #a855f7, #ec4899, #f59e0b, #a855f7)',
                      backgroundSize: '400% 400%',
                      padding: '2px',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-full h-full bg-dark-card rounded-3xl" />
                  </motion.div>

                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon size={32} className="text-white" />
                    </motion.div>

                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.15 + i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <CheckCircle2 size={16} className="text-purple-500" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="glass-strong rounded-3xl p-8 border border-dark-border mb-20"
        >
          <h4 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoEditingSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon size={20} style={{ color: skill.color }} />
                    </motion.div>
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                  </div>
                  <motion.span
                    className="text-2xl font-bold"
                    style={{ color: skill.color }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <div className="relative h-3 bg-dark-bg rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1, duration: 1, ease: 'easeOut' }}
                  />
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full opacity-50 blur-sm"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1, duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-2xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <motion.button
              className="relative px-12 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full font-bold text-lg shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-3">
                <Rocket size={24} />
                Let's Create Something Amazing
                <Sparkles size={24} />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

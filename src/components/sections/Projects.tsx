'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import PremiumBackground from '@/components/ui/PremiumBackground';

const projects = [
  {
    id: 1,
    title: 'Enterprise Housing Management System',
    description: 'A comprehensive housing contract renewal and management system for Federal Housing Corporation with triple-credential authentication, payment integration, and document management.',
    image: '/Image/housing_management_system.png',
    technologies: ['Flutter', 'ASP.NET Core', 'SQL Server', 'TeleBirr API'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'AI-Powered Math Assistant',
    description: 'An offline AI assistant providing instant math help with pattern matching, beautiful UI, and comprehensive coverage of trigonometry, calculus, and algebra.',
    image: '/Image/AI maths_assistant.png',
    technologies: ['Flutter', 'Pattern Matching', 'Offline AI', 'Material Design'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.',
    image: '/Image/Ecommerce.png',
    technologies: ['Next.js', 'React.js', 'MongoDB', 'Stripe API'],
    category: 'web',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Task Management API',
    description: 'RESTful API for task management with user authentication, real-time notifications, and comprehensive project tracking.',
    image: '/Image/task_managment.jpg',
    technologies: ['ASP.NET Core', 'SQL Server', 'SignalR', 'JWT'],
    category: 'backend',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Real Estate Dashboard',
    description: 'Interactive dashboard for real estate management with property listings, analytics, and client management system.',
    image: '/Image/real_State_Dashboard.png',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
    category: 'web',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Inventory Management System',
    description: 'Comprehensive inventory tracking system with barcode scanning, automated reordering, and detailed reporting.',
    image: '/Image/inventaory.png',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions', 'ML Kit'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];
const HorizontalProjectCard = ({ project, isMobile }: { project: typeof projects[0]; isMobile?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Simplified for mobile
  if (isMobile) {
    return (
      <div className="flex-shrink-0 w-[350px] mx-4">
        <div className="glass rounded-xl overflow-hidden border border-primary-500/20 h-full">
          <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-500/10 via-accent-orange/10 to-accent-blue/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="350px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {project.featured && (
              <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-accent-orange to-primary-500 text-white text-xs font-bold rounded-full">
                ⭐ Featured
              </div>
            )}
            
            <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-primary-500/30">
              {project.category === 'mobile' && '📱 Mobile'}
              {project.category === 'web' && '🌐 Web'}
              {project.category === 'backend' && '⚙️ Backend'}
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-3 leading-relaxed text-sm line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-medium border border-primary-500/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-medium border border-primary-500/20">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      className="flex-shrink-0 w-[400px] mx-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="glass card-3d spotlight rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/30 relative h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-orange to-accent-blue opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
        
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-primary-500/10 via-accent-orange/10 to-accent-blue/10">
          <motion.div
            className="relative w-full h-full"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>
          
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center space-x-4 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors shadow-lg"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors shadow-lg"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
          
          {project.featured && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-accent-orange to-primary-500 text-white text-xs font-bold rounded-full shadow-lg z-20">
              ⭐ Featured
            </div>
          )}
          
          <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-primary-500/30 z-20">
            {project.category === 'mobile' && '📱 Mobile'}
            {project.category === 'web' && '🌐 Web'}
            {project.category === 'backend' && '⚙️ Backend'}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-3 leading-relaxed text-sm line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-medium border border-primary-500/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-medium border border-primary-500/20">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <PremiumBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
          {!isMobile && (
            <p className="text-sm text-primary-500">
              ✨ Hover to pause • Continuously scrolling
            </p>
          )}
        </motion.div>
      </div>

      {/* Horizontal Auto-Scrolling Container */}
      <div 
        className="relative"
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onMouseLeave={() => !isMobile && setIsPaused(false)}
        onTouchStart={() => isMobile && setIsPaused(true)}
        onTouchEnd={() => isMobile && setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          className="flex"
          animate={{
            x: isPaused ? undefined : [0, -((isMobile ? 350 + 32 : 400 + 32) * projects.length)],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isMobile ? 30 : 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <HorizontalProjectCard key={`${project.id}-${index}`} project={project} isMobile={isMobile} />
          ))}
        </motion.div>
      </div>

      {/* View More Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/AbdilazizNasir96"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-orange text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

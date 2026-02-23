'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Database, Globe, Award, Heart } from 'lucide-react';
import Image from 'next/image';
import PremiumBackground from '@/components/ui/PremiumBackground';

const skills = [
  { name: 'Flutter', level: 95, color: '#02569B' },
  { name: 'Next.js', level: 90, color: '#000000' },
  { name: 'React.js', level: 88, color: '#61DAFB' },
  { name: 'C#', level: 85, color: '#239120' },
  { name: 'ASP.NET', level: 82, color: '#512BD4' },
  { name: 'Supabase', level: 80, color: '#3ECF8E' },
  { name: 'Firebase', level: 85, color: '#FFCA28' },
  { name: 'MongoDB', level: 78, color: '#47A248' },
  { name: 'SQL Server', level: 80, color: '#CC2927' },
];

const experiences = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Specialized in Flutter development, creating cross-platform mobile applications with beautiful UIs and seamless performance.',
    highlights: ['Cross-platform apps', 'Native performance', 'Custom animations']
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Full-stack web development using modern frameworks like Next.js, React.js, and ASP.NET for scalable applications.',
    highlights: ['Responsive design', 'SEO optimization', 'Performance tuning']
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Expert in designing and optimizing databases using SQL Server, MongoDB, and cloud solutions like Supabase.',
    highlights: ['Schema design', 'Query optimization', 'Data modeling']
  },
  {
    icon: Code,
    title: 'Backend Systems',
    description: 'Building robust backend systems with ASP.NET Core, implementing secure APIs and microservices architecture.',
    highlights: ['RESTful APIs', 'Microservices', 'Security implementation']
  }
];

const SkillBadge = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-primary-500/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-white">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const Icon = experience.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="glass card-3d spotlight rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-all duration-500" />
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors duration-300">
          <Icon className="text-primary-500" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-white ml-4">{experience.title}</h3>
      </div>
      
      <p className="text-gray-400 mb-4 leading-relaxed">{experience.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {experience.highlights.map((highlight, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function About() {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [storyRef, storyInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PremiumBackground />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          ref={storyRef}
          initial={{ opacity: 0, y: 30 }}
          animate={storyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-dark-card border border-dark-border rounded-2xl p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Heart className="text-accent-orange mr-3" size={24} />
                My Journey
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a passionate full-stack developer with expertise in modern web and mobile technologies. 
                My journey began with a curiosity about how digital products work, which evolved into a 
                deep love for creating innovative solutions that make a real impact.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                With extensive experience in Flutter for mobile development, Next.js and React.js for 
                web applications, and ASP.NET for robust backend systems, I bring a comprehensive 
                approach to every project.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences that are 
                not just functional, but delightful. When I'm not coding, you'll find me exploring 
                new technologies and contributing to open-source projects.
              </p>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                animate={storyInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
                className="relative group"
              >
                {/* Main Photo Container - Circular with 3D effect */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  whileTap={{ scale: 1.05 }}
                  transition={{ 
                    scale: { type: "spring", stiffness: 200, damping: 15 },
                    rotate: { duration: 0.5 }
                  }}
                  className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary-500/50 shadow-2xl shadow-primary-500/40 group-hover:border-accent-orange/70 transition-all duration-500"
                >
                  {/* Image with zoom */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/Image/portofolio.png"
                      alt="About - Abdilaziz Nasir"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                      priority={false}
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay - Simplified for mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Shimmer Effect - Single for better mobile performance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  />
                </motion.div>

                {/* Fast Rotating Ring 1 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-500/60 will-change-transform"
                />
                
                {/* Counter Rotating Ring 2 - Faster */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 rounded-full border-2 border-dotted border-accent-orange/50 will-change-transform"
                />

                {/* Pulsing Ring - Simplified for mobile */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -inset-3 rounded-full border-4 border-primary-500/40 blur-sm will-change-transform"
                />

                {/* Spinning Dots - Desktop only (8 dots) */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-primary-500 hidden sm:block will-change-transform"
                    style={{
                      top: '50%',
                      left: '50%',
                      marginTop: '-6px',
                      marginLeft: '-6px',
                      transformOrigin: `${Math.cos((i * Math.PI * 2) / 8) * 150}px ${Math.sin((i * Math.PI * 2) / 8) * 150}px`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      },
                      scale: {
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.125,
                      }
                    }}
                  />
                ))}

                {/* Mobile-friendly dots - Only 4 dots on mobile */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={`mobile-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-primary-500 sm:hidden will-change-transform"
                    style={{
                      top: '50%',
                      left: '50%',
                      marginTop: '-4px',
                      marginLeft: '-4px',
                      transformOrigin: `${Math.cos((i * Math.PI * 2) / 4) * 140}px ${Math.sin((i * Math.PI * 2) / 4) * 140}px`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 1.25,
                      },
                      scale: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.375,
                      }
                    }}
                  />
                ))}

                {/* Orbiting Particles - Desktop only for performance */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={`orbit-${i}`}
                    className="absolute w-2 h-2 rounded-full hidden lg:block will-change-transform"
                    style={{
                      background: i % 2 === 0 ? '#3b82f6' : '#f97316',
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [
                        Math.cos((i * Math.PI * 2) / 4) * 180,
                        Math.cos(((i + 1) * Math.PI * 2) / 4) * 180,
                        Math.cos(((i + 2) * Math.PI * 2) / 4) * 180,
                        Math.cos(((i + 3) * Math.PI * 2) / 4) * 180,
                        Math.cos((i * Math.PI * 2) / 4) * 180,
                      ],
                      y: [
                        Math.sin((i * Math.PI * 2) / 4) * 180,
                        Math.sin(((i + 1) * Math.PI * 2) / 4) * 180,
                        Math.sin(((i + 2) * Math.PI * 2) / 4) * 180,
                        Math.sin(((i + 3) * Math.PI * 2) / 4) * 180,
                        Math.sin((i * Math.PI * 2) / 4) * 180,
                      ],
                      scale: [1, 1.5, 1, 1.5, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3,
                    }}
                  />
                ))}

                {/* Background Glow - Optimized */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -inset-12 bg-gradient-to-r from-primary-500/30 via-accent-orange/30 to-primary-500/30 rounded-full blur-3xl -z-10 will-change-transform"
                />
                
                {/* Secondary Glow Layer - Desktop only */}
                <motion.div
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -inset-16 bg-gradient-to-l from-accent-orange/20 via-primary-500/20 to-accent-orange/20 rounded-full blur-3xl -z-10 hidden sm:block will-change-transform"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl font-semibold text-center mb-12"
          >
            What I <span className="gradient-text">Do</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.title} experience={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-semibold text-center mb-12"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

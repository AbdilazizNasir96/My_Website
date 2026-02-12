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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative group perspective-1000"
              >
                {/* Main Photo Container with 3D Tilt Effect */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: -5,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                  className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary-500/40 shadow-2xl shadow-primary-500/20"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Image with Parallax Effect */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/Image/about.jpg"
                      alt="About - Abdilaziz Nasir"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80vw, 256px"
                      priority={false}
                    />
                  </motion.div>
                  
                  {/* Animated Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Shimmer Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Rotating Border Ring 1 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-500/30"
                />
                
                {/* Counter-Rotating Border Ring 2 */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 rounded-full border border-dotted border-accent-orange/20"
                />

                {/* Pulsing Glow Ring */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-full ring-4 ring-primary-500/20 blur-sm"
                />

                {/* Floating Particles Around Photo - Desktop only */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary-500 hidden md:block"
                    style={{
                      top: `${50 + Math.cos((i * Math.PI * 2) / 6) * 140}px`,
                      left: `${50 + Math.sin((i * Math.PI * 2) / 6) * 140}px`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* Hover Ring Effect */}
                <div className="pointer-events-none absolute inset-0 rounded-full ring-0 group-hover:ring-8 ring-primary-500/10 transition-all duration-500" />
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

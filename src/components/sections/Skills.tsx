'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PremiumBackground from '@/components/ui/PremiumBackground';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 88, color: '#61DAFB' },
      { name: 'Next.js', level: 90, color: '#000000' },
      { name: 'Flutter', level: 95, color: '#02569B' },
      { name: 'TypeScript', level: 85, color: '#3178C6' },
      { name: 'Tailwind CSS', level: 90, color: '#06B6D4' },
    ]
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'ASP.NET Core', level: 82, color: '#512BD4' },
      { name: 'C#', level: 85, color: '#239120' },
      { name: 'Node.js', level: 75, color: '#339933' },
      { name: 'RESTful APIs', level: 88, color: '#FF6B35' },
      { name: 'GraphQL', level: 70, color: '#E10098' },
    ]
  },
  {
    title: 'Database & Cloud',
    icon: '☁️',
    skills: [
      { name: 'SQL Server', level: 80, color: '#CC2927' },
      { name: 'MongoDB', level: 78, color: '#47A248' },
      { name: 'Firebase', level: 85, color: '#FFCA28' },
      { name: 'Supabase', level: 80, color: '#3ECF8E' },
      { name: 'PostgreSQL', level: 75, color: '#336791' },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 90, color: '#F05032' },
      { name: 'Docker', level: 70, color: '#2496ED' },
      { name: 'VS Code', level: 95, color: '#007ACC' },
      { name: 'Figma', level: 75, color: '#F24E1E' },
      { name: 'Postman', level: 85, color: '#FF6C37' },
    ]
  }
];

const CircularProgress = ({ skill, index, categoryIndex }: { 
  skill: typeof skillCategories[0]['skills'][0], 
  index: number,
  categoryIndex: number 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        delay: categoryIndex * 0.2 + index * 0.1, 
        duration: 0.5 
      }}
      className="flex flex-col items-center group"
    >
      <div className="relative w-24 h-24 mb-3 hover:scale-110 transition-transform duration-300">
        {/* Background circle */}
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#374151"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={skill.color}
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : {}}
            transition={{ 
              delay: categoryIndex * 0.2 + index * 0.1 + 0.3, 
              duration: 1.5, 
              ease: "easeOut" 
            }}
            className="drop-shadow-lg"
            style={{
              filter: `drop-shadow(0 0 6px ${skill.color}40)`
            }}
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ 
              delay: categoryIndex * 0.2 + index * 0.1 + 0.8, 
              duration: 0.5 
            }}
            className="text-sm font-bold text-white"
          >
            {skill.level}%
          </motion.span>
        </div>
      </div>
      
      <h4 className="text-sm font-semibold text-center text-gray-300 group-hover:text-white transition-colors">
        {skill.name}
      </h4>
    </motion.div>
  );
};

const SkillCategory = ({ category, categoryIndex }: { 
  category: typeof skillCategories[0], 
  categoryIndex: number 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
      className="glass spotlight rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="flex items-center mb-6">
        <span className="text-3xl mr-3">{category.icon}</span>
        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {category.skills.map((skill, index) => (
          <CircularProgress 
            key={skill.name} 
            skill={skill} 
            index={index}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

const ExpertiseOverview = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { label: 'Years of Experience', value: '3+', icon: '📅' },
    { label: 'Projects Completed', value: '25+', icon: '🚀' },
    { label: 'Technologies Mastered', value: '15+', icon: '💻' },
    { label: 'Happy Clients', value: '10+', icon: '😊' },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-primary-500/10 to-accent-orange/10 border border-primary-500/20 rounded-xl p-8 mb-12"
    >
      <h3 className="text-2xl font-semibold text-center mb-8">
        Professional <span className="gradient-text">Overview</span>
      </h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies
          </p>
        </motion.div>

        {/* Expertise Overview */}
        <ExpertiseOverview />

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory 
              key={category.title} 
              category={category} 
              categoryIndex={categoryIndex}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

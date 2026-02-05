'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/AbdilazizNasir96', color: '#333' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: '#0077B5' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: '#1DA1F2' },
  { name: 'Email', icon: Mail, url: 'mailto:harolife31@gmail.com', color: '#EA4335' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-bg border-t border-primary-500/20 overflow-hidden">
      {/* Decorative gradient blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Abdilaziz Nasir </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and beautiful user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} className="text-gray-400 hover:text-primary-500 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary-500" />
                <a href="mailto:abdiharo@example.com" className="hover:text-primary-500 transition-colors">
                  harolife31@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary-500">📍</span>
                Addis Ababa, Ethiopia
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary-500">📱</span>
                +251 902261650
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-500/20 my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p className="flex items-center mb-4 md:mb-0">
            © {currentYear} Abdilaziz Nasir. Made with{' '}
            <Heart size={14} className="mx-1 text-red-500 animate-pulse" />
            and lots of ☕
          </p>
          <p className="flex items-center space-x-2">
            <span>Built with</span>
            <span className="text-primary-500 font-semibold">Next.js</span>
            <span>•</span>
            <span className="text-accent-orange font-semibold">TypeScript</span>
            <span>•</span>
            <span className="text-accent-blue font-semibold">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>

      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-orange to-accent-blue">
        <motion.div
          className="h-full bg-white/20"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: '50%' }}
        />
      </div>
    </footer>
  );
}

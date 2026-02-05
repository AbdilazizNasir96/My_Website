'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, Briefcase } from 'lucide-react';
import PremiumBackground from '@/components/ui/PremiumBackground';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'harolife31@gmail.com',
    href: 'mailto:harolife31@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+251 902271650',
    href: 'tel:+251902271650'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: '#'
  }
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/AbdilazizNasir96',
    color: '#333'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/abdilaziz-nasir',
    color: '#0077B5'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/abdilaziz_nasir',
    color: '#1DA1F2'
  },
  {
    name: 'Upwork',
    icon: Briefcase,
    url: 'https://www.upwork.com/freelancers/~your-profile',
    color: '#14A800'
  }
];

const FloatingLabel = ({ 
  label, 
  value, 
  onChange, 
  type = 'text', 
  required = false,
  multiline = false 
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value.length > 0;

  const inputClasses = `
    w-full px-4 py-4 bg-transparent border-2 rounded-lg transition-all duration-300 text-white
    ${focused ? 'border-primary-500 shadow-lg shadow-primary-500/20' : 'border-gray-600'}
    focus:outline-none focus:border-primary-500 focus:shadow-lg focus:shadow-primary-500/20
    ${multiline ? 'resize-none' : ''}
  `;

  return (
    <div className="relative">
      <motion.label
        animate={{
          top: isFloating ? -8 : 16,
          fontSize: isFloating ? '0.875rem' : '1rem',
          color: focused ? '#58a6ff' : '#9CA3AF'
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 bg-dark-bg px-2 pointer-events-none z-10 font-medium"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </motion.label>
      
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          rows={4}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
};

const ContactCard = ({ info, index }: { info: typeof contactInfo[0], index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const Icon = info.icon;

  return (
    <motion.a
      ref={ref}
      href={info.href}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="block glass spotlight rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-500 group relative overflow-hidden"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-all duration-500" />
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
          <Icon className="text-primary-500" size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-white mb-1">{info.label}</h3>
          <p className="text-gray-400 group-hover:text-primary-500 transition-colors">
            {info.value}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formRef, formInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Starting form submission...');
    console.log('Form data:', formData);
    
    try {
      // Check if EmailJS is loaded
      console.log('Checking for EmailJS...');
      console.log('EmailJS available:', !!(window as any).emailjs);
      
      // Wait for EmailJS to load
      const emailjsLoaded = await new Promise((resolve) => {
        if ((window as any).emailjs) {
          console.log('EmailJS already loaded');
          resolve(true);
        } else {
          console.log('Waiting for EmailJS to load...');
          const checkEmailJS = setInterval(() => {
            if ((window as any).emailjs) {
              console.log('EmailJS loaded!');
              clearInterval(checkEmailJS);
              resolve(true);
            }
          }, 100);
          
          // Timeout after 5 seconds
          setTimeout(() => {
            console.log('EmailJS load timeout');
            clearInterval(checkEmailJS);
            resolve(false);
          }, 5000);
        }
      });

      if (!emailjsLoaded) {
        throw new Error('EmailJS failed to load after 5 seconds');
      }

      const emailjs = (window as any).emailjs;
      
      console.log('Sending email with config:', {
        serviceId: 'service_xdqzkfj',
        templateId: 'template_69vdab8',
        publicKey: 'OenvfQrW-t5uKx_AQ'
      });

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_xdqzkfj',  // Your Service ID
        'template_69vdab8', // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Abdilaziz Nasir',
          reply_to: formData.email
        },
        'OenvfQrW-t5uKx_AQ' // Your Public Key
      );

      console.log('Email sent successfully:', result);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } catch (error: any) {
      console.error('Detailed error:', error);
      console.error('Error message:', error?.message);
      console.error('Error text:', error?.text);
      console.error('Error status:', error?.status);
      
      let errorMessage = 'Failed to send message. ';
      if (error?.text) {
        errorMessage += `Error: ${error.text}. `;
      }
      errorMessage += 'Please try emailing directly at harolife31@gmail.com';
      
      alert(errorMessage);
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-semibold mb-8"
            >
              Let's Start a Conversation
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a specific project in mind or just want to chat about technology, 
              feel free to reach out!
            </motion.p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <ContactCard key={info.label} info={info} index={index} />
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-dark-card border border-dark-border rounded-lg hover:border-primary-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={20} className="text-gray-400 hover:text-primary-500 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-strong spotlight rounded-xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-orange/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FloatingLabel
                  label="Your Name"
                  value={formData.name}
                  onChange={updateFormData('name')}
                  required
                />
                <FloatingLabel
                  label="Email Address"
                  value={formData.email}
                  onChange={updateFormData('email')}
                  type="email"
                  required
                />
              </div>
              
              <FloatingLabel
                label="Subject"
                value={formData.subject}
                onChange={updateFormData('subject')}
                required
              />
              
              <FloatingLabel
                label="Your Message"
                value={formData.message}
                onChange={updateFormData('message')}
                multiline
                required
              />

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`
                  w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2
                  ${isSubmitted 
                    ? 'bg-green-500 text-white' 
                    : isSubmitting 
                      ? 'bg-primary-500/50 text-white cursor-not-allowed' 
                      : 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25'
                  }
                `}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-500 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

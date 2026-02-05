'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import all components with no SSR
const Navigation = dynamic(() => import('@/components/ui/Navigation'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });
const PageTransition = dynamic(() => import('@/components/ui/PageTransition'), { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/ui/LoadingScreen'), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false });
const DesignCreativity = dynamic(() => import('@/components/sections/DesignCreativity'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/sections/Footer'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            AN
          </div>
          <div className="text-cyan-400">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <LoadingScreen />
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
          <CustomCursor />
          <Navigation />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <DesignCreativity />
            <Contact />
          </main>
          <Footer />
        </div>
      </PageTransition>
    </>
  );
}

import { useEffect, useState } from 'react';

export function usePerformanceMode() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      
      // Enable low performance mode on mobile
      if (mobile) {
        setIsLowPerformance(true);
        return;
      }

      // Check device memory (if available)
      const memory = (navigator as any).deviceMemory;
      if (memory && memory < 4) {
        setIsLowPerformance(true);
        return;
      }

      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency;
      if (cores && cores < 4) {
        setIsLowPerformance(true);
        return;
      }

      setIsLowPerformance(false);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isLowPerformance, isMobile };
}

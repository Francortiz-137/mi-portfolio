import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

interface PageTransitionProps {
  children: React.ReactNode;
  animationType?: 'fade' | 'slide' | 'zoom' | 'bounce' | 'home' | 'about' | 'projects' | 'skills' | 'contact';
  duration?: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  animationType = 'fade',
  duration = 800
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset visibility when route changes
    setIsVisible(false);
    
    // Show content after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div 
      className={`page-transition ${animationType} ${isVisible ? 'visible' : ''}`}
      style={{ '--duration': `${duration}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default PageTransition; 
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './PageIntroAnimation.css';

interface PageIntroAnimationProps {
  children: React.ReactNode;
}

const PageIntroAnimation: React.FC<PageIntroAnimationProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const { t } = useTranslation();
  
  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return t('navigation.home');
    if (path === '/about') return t('navigation.about');
    if (path === '/projects') return t('navigation.projects');
    if (path === '/skills') return t('navigation.skills');
    if (path === '/contact') return t('navigation.contact');
    return '';
  };
  
  // Get page color based on current route
  const getPageColor = () => {
    const path = location.pathname;
    if (path === '/') return 'var(--primary-color)';
    if (path === '/about') return 'var(--secondary-color)';
    if (path === '/projects') return 'var(--accent-color)';
    if (path === '/skills') return 'var(--success-color)';
    if (path === '/contact') return 'var(--info-color)';
    return 'var(--primary-color)';
  };

  useEffect(() => {
    // Reset visibility when route changes
    setIsVisible(true);
    
    // Hide animation after a delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2 seconds for the animation

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isVisible) return <>{children}</>;

  return (
    <div className="page-intro-container" style={{ '--page-color': getPageColor() } as React.CSSProperties}>
      <div className="page-intro-content">
        <h1 className="page-intro-title">{getPageTitle()}</h1>
        <div className="page-intro-decoration"></div>
      </div>
      <div className="page-intro-background"></div>
    </div>
  );
};

export default PageIntroAnimation; 
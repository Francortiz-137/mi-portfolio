import React, { useEffect, useState } from 'react';
import './WelcomeAnimation.css';

const WelcomeAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500); // 3.5 segundos para la animación

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <p>Welcome</p>
        <p>to</p>
        <p>my</p>
        <p>portfolio!</p>
      </div>
      <div className="welcome-sun">
        <div className="disc"></div>
        <span className="light light1"><span className="beam"></span></span>
        <span className="light light2"><span className="beam"></span></span>
        <span className="light light3"><span className="beam"></span></span>
        <span className="light light4"><span className="beam"></span></span>
        <span className="light light5"><span className="beam"></span></span>
        <span className="light light6"><span className="beam"></span></span>
        <span className="light light7"><span className="beam"></span></span>
        <span className="light light8"><span className="beam"></span></span>
      </div>
    </div>
  );
};

export default WelcomeAnimation; 
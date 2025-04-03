import React from 'react';
import './MenuAnimation.css';

interface MenuAnimationProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const MenuAnimation: React.FC<MenuAnimationProps> = ({ isOpen, children }) => {
  return (
    <div id="menu-animation" className={isOpen ? 'slide-in' : 'slide-out'}>
      <div className="curtain">
        <div className="curtain-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuAnimation; 
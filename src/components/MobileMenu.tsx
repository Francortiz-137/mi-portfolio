import React from 'react';
import { X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import MenuAnimation from './MenuAnimation';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isDarkMode, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const handleNavigation = (path: string) => {
    // Primero navegamos a la nueva página
    navigate(path);
    // Luego iniciamos la animación de cierre
    setTimeout(() => {
      onClose();
    }, 100);
  };

  return (
    <MenuAnimation isOpen={isOpen}>
      <div className="menu-content">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="logo-mobile">FrancOrtiz</div>
        
        <nav className="nav-menu">
          <button onClick={() => handleNavigation('/')} className="nav-link">
            {t('nav.home')}
          </button>
          <button onClick={() => handleNavigation('/about')} className="nav-link">
            {t('nav.about')}
          </button>
          <button onClick={() => handleNavigation('/projects')} className="nav-link">
            {t('nav.projects')}
          </button>
          <button onClick={() => handleNavigation('/skills')} className="nav-link">
            {t('nav.skills')}
          </button>
          <button onClick={() => handleNavigation('/contact')} className="nav-link">
            {t('nav.contact')}
          </button>
        </nav>

        <div className="menu-buttons">
          <div className="language-switcher">
            <button 
              className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={toggleLanguage}
            >
              EN
            </button>
            <span className="language-separator">|</span>
            <button 
              className={`language-button ${i18n.language === 'es' ? 'active' : ''}`}
              onClick={toggleLanguage}
            >
              ESP
            </button>
          </div>
          <button className="theme-button" onClick={toggleTheme}>
            {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>
      </div>
    </MenuAnimation>
  );
};

export default MobileMenu; 
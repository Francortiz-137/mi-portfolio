import React from 'react';
import { X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <MenuAnimation isOpen={isOpen}>
      <div className="menu-content">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="logo-mobile">FrancOrtiz</div>
        
        <nav className="nav-menu">
          <a href="#home" onClick={onClose}>{t('nav.home')}</a>
          <a href="#about" onClick={onClose}>{t('nav.about')}</a>
          <a href="#projects" onClick={onClose}>{t('nav.projects')}</a>
          <a href="#contact" onClick={onClose}>{t('nav.contact')}</a>
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
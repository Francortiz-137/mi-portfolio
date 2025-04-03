import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isDarkMode, toggleTheme }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`menu-mobile ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>
      <div className="menu-content">
        <Link to="/" className="logo-mobile" onClick={onClose}>
          FrancOrtiz
        </Link>
        <nav className="nav-menu">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/about" onClick={onClose}>About</Link>
          <Link to="/projects" onClick={onClose}>Projects</Link>
          <Link to="/skills" onClick={onClose}>Skills</Link>
          <Link to="/contact" onClick={onClose}>Contact</Link>
          <Link to="/save-files" onClick={onClose}>Save Files</Link>
        </nav>
        <div className="menu-buttons">
          <div className="language-buttons">
            <button 
              onClick={() => changeLanguage('en')}
              className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
            <span className="language-separator">|</span>
            <button 
              onClick={() => changeLanguage('es')}
              className={`language-button ${i18n.language === 'es' ? 'active' : ''}`}
            >
              ESP
            </button>
          </div>
          <button onClick={toggleTheme} className="theme-button">
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 
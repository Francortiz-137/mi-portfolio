import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  color?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ color }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown} style={{ color: color || 'inherit' }}>
        {i18n.language.toUpperCase()}
      </button>
      <div className={`dropdown ${isOpen ? 'show' : ''}`}>
        <button 
          onClick={() => changeLanguage('es')}
          style={{ color: color || 'inherit' }}
        >
          ES
        </button>
        <button 
          onClick={() => changeLanguage('en')}
          style={{ color: color || 'inherit' }}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 
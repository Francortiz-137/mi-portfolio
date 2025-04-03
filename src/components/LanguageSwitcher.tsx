import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language;
  const otherLanguage = currentLanguage === 'en' ? 'es' : 'en';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 text-sm rounded-md bg-primary text-white w-12 flex items-center justify-between"
      >
        {currentLanguage.toUpperCase()}
        <span className="ml-1">▼</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1">
          <button
            onClick={() => changeLanguage(otherLanguage)}
            className="w-12 px-3 py-1 text-sm rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {otherLanguage.toUpperCase()}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 
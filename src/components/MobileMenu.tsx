import React, { useState, useEffect } from "react";
import { X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from './LanguageSwitcher';
import Footer from "./Footer";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isDarkMode, toggleTheme }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  // Gestionar la animación de cierre
  useEffect(() => {
    if (!isOpen && isClosing) {
      const timer = setTimeout(() => {
        setIsClosing(false);
      }, 300); // Duración reducida de la animación
      return () => clearTimeout(timer);
    }
  }, [isOpen, isClosing]);
  
  // Función para cerrar con animación
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200); // Retraso reducido antes de ejecutar onClose
  };

  return (
    <>
      {/* Overlay with blur effect */}
      <div 
        className={`fixed inset-0 bg-black/30 mobile-menu-backdrop transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`} 
        onClick={handleClose}
      />
      
        {/* Blue menu panel */}
        <div
          className={`menu-mobile z-50 ${
            isOpen ? "translate-x-0 menu-open" : "-translate-x-full"
          } ${isClosing ? "menu-closing" : ""}`}
        >
        <button 
          className="menu-close-button" 
          onClick={handleClose} 
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="menu-content">
          <Link to="/" className="logo-mobile" onClick={handleClose}>
            FrancOrtiz
          </Link>

          <nav className="nav-menu">
            <Link to="/" onClick={handleClose}>Home</Link>
            <Link to="/about" onClick={handleClose}>About</Link>
            <Link to="/projects" onClick={handleClose}>Projects</Link>
            <Link to="/skills" onClick={handleClose}>Skills</Link>
            <Link to="/contact" onClick={handleClose}>Contact</Link>
            <Link to="/saveFiles" onClick={handleClose}>Save Files</Link>
          </nav>
          <div className="menu-buttons">
            <LanguageSwitcher color="white" />
            <button
              onClick={toggleTheme}
              className="navbar-theme-button"
            >
              {isDarkMode ? 
                <Sun className="w-5 h-5 nav-icon" /> : 
                <Moon className="w-5 h-5 nav-icon" />
              }
            </button>
          </div>
          {/* Footer component */}
        <div className="mobile-menu-footer">
          <Footer />
        </div>

          
        </div>

        
      </div>
    </>
  );
};

export default MobileMenu; 
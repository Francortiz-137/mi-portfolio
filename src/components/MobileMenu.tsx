import React, { useState, useEffect } from "react";
import { X, Sun, Moon } from "lucide-react";
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
        {/* Navbar area */}
        <div className="flex justify-between items-center h-16 px-4">
          <button
            onClick={handleClose}
            className="p-2 rounded-md bg-transparent hover:bg-blue-400/30 dark:hover:bg-blue-800/30 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-7 h-7 nav-icon-mobile" />
          </button>

          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-transparent hover:bg-blue-400/30 dark:hover:bg-blue-800/30 transition-colors"
          >
            {isDarkMode ? 
              <Sun className="w-6 h-6 nav-icon-mobile" /> : 
              <Moon className="w-6 h-6 nav-icon-mobile" />
            }
          </button>
        </div>

        <div className="h-[calc(100%-4rem)] flex flex-col justify-between px-8">
          <div className="flex flex-col space-y-12">
            {/* Logo */}
            <div className="text-center">
              <span className="logo-mobile">Francortiz</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-8 nav-menu">
              <a
                href="/"
                onClick={handleClose}
                style={{"--index": 1} as React.CSSProperties}
              >
                Home
              </a>
              <a
                href="/about"
                onClick={handleClose}
                style={{"--index": 2} as React.CSSProperties}
              >
                About
              </a>
              <a
                href="/projects"
                onClick={handleClose}
                style={{"--index": 3} as React.CSSProperties}
              >
                Projects
              </a>
              <a
                href="/skills"
                onClick={handleClose}
                style={{"--index": 4} as React.CSSProperties}
              >
                Skills
              </a>
              <a
                href="/contact"
                onClick={handleClose}
                style={{"--index": 5} as React.CSSProperties}
              >
                Contact
              </a>
            </div>
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
import React from "react";
import { Github, Linkedin, Mail, X, Sun, Moon } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isDarkMode, toggleTheme }) => {
  return (
    <>
      {/* Overlay with blur effect */}
      <div 
        className={`fixed inset-0 bg-black/30 mobile-menu-backdrop transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`} 
        onClick={onClose}
      />
      
      {/* Blue menu panel */}
      <div
        className={`menu-mobile z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Navbar area */}
        <div className="flex justify-between items-center h-16 px-4">
          <button
            onClick={onClose}
            className="p-2 rounded-md bg-transparent hover:bg-blue-400/30 dark:hover:bg-blue-800/30 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 nav-icon" />
          </button>

          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-transparent hover:bg-blue-400/30 dark:hover:bg-blue-800/30 transition-colors"
          >
            {isDarkMode ? 
              <Sun className="w-5 h-5 nav-icon" /> : 
              <Moon className="w-5 h-5 nav-icon" />
            }
          </button>
        </div>

        <div className="h-[calc(100%-4rem)] flex flex-col justify-center px-8 space-y-12">
          {/* Logo */}
          <div className="text-center">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Francortiz</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-8 nav-menu">
            <a
              href="/"
              onClick={onClose}
            >
              Home
            </a>
            <a
              href="/about"
              onClick={onClose}
            >
              About
            </a>
            <a
              href="/projects"
              onClick={onClose}
            >
              Projects
            </a>
            <a
              href="/skills"
              onClick={onClose}
            >
              Skills
            </a>
            <a
              href="/contact"
              onClick={onClose}
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github className="w-8 h-8 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin className="w-8 h-8 text-white" />
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <Mail className="w-8 h-8 text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 
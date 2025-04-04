import React from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'hidden' : 'block'}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="navbar-button"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 nav-icon" />
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <LanguageSwitcher />
              <button
                onClick={toggleTheme} 
                className="navbar-theme-button"
              >
                {theme === 'dark' ? 
                  <Sun className="w-5 h-5 nav-icon" /> : 
                  <Moon className="w-5 h-5 nav-icon" />
                }
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        isDarkMode={theme === 'dark'}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

export default Navbar;

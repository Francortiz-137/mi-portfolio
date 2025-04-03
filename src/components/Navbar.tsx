import React from "react";
import { Menu, Sun, Moon } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'invisible' : 'visible'}`}>
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

            {/* Theme Toggle */}
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
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={closeMenu} 
        isDarkMode={theme === 'dark'}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

export default Navbar;

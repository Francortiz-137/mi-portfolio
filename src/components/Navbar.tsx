import React from "react";
import { Menu, Sun, Moon } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Verificar si hay una preferencia guardada
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Verificar la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  React.useEffect(() => {
    // Guardar la preferencia en localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    // Aplicar la clase dark al documento
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
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
              {isDarkMode ? 
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
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

export default Navbar;

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
      <nav className={`w-full fixed top-0 left-0 right-0 z-50 bg-transparent ${isMenuOpen ? 'invisible' : 'visible'}`}>
        <div className="w-full px-2 sm:px-4 bg-transparent">
          <div className="flex justify-between items-center h-16 bg-transparent">
            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 mx-2 rounded-md hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors bg-transparent"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 nav-icon" />
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 mx-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors bg-transparent"
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

import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WelcomeAnimation from './WelcomeAnimation';
import PageIntroAnimation from './PageIntroAnimation';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine the current page for animation
  const getPageType = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/projects') return 'projects';
    if (path === '/skills') return 'skills';
    if (path === '/contact') return 'contact';
    return 'fade'; // Default animation
  };

  return (
    <div className="min-h-screen flex flex-col">
      <WelcomeAnimation />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-grow">
        <PageIntroAnimation>
          <Outlet />
        </PageIntroAnimation>
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
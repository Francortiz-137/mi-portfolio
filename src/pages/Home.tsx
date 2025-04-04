import React, { useEffect } from 'react';
import { Download, Linkedin, Github, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Home = () => {
  useEffect(() => {
    // Reinicializar AOS cuando el componente se monta
    AOS.refresh();
    
    // Configurar AOS con opciones adecuadas
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      delay: 100,
      easing: 'ease-in-out',
    });
    
    // Limpiar AOS cuando el componente se desmonta
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-16">
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;

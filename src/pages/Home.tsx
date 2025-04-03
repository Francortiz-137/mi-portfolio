import React, { useEffect } from 'react';
import { Download, Linkedin, Github, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
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

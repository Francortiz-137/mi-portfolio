import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Download } from "lucide-react";

const HeroSection = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="glass-container">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Hi, I'm <br /><span className="text-gradient">Franco Ortiz</span><br />
          <span className="animated-text">
            <span>Fullstack</span>
            <span>Backend</span>
            <span>Frontend</span>
          </span> Developer
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-10 subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          Crafting digital experiences with code
        </p>
        <div className="hero-buttons-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <div className="hero-buttons-row">
            <a href="/contact" className="btn-primary cursor-star hero-button">
              Get in Touch
            </a>
            <a href="/projects" className="btn-secondary cursor-star hero-button">
              View Projects
            </a>
          </div>
          <a href="/public/cv.pdf" download className="btn-secondary cursor-star hero-button flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
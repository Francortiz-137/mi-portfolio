import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="footer-content flex flex-col items-center space-y-4">
          <div className="footer-social flex space-x-6 gap-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Francortiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

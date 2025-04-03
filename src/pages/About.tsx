import React from 'react';
import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";

const About: React.FC = () => {
  return (
    <PageTemplate title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto mt-8"
      >
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-container">
              <p className="text-lg mb-4">
                I am a passionate developer with a strong focus on creating beautiful and functional web applications.
                My journey in web development started with a curiosity about how websites work, and it has grown into
                a deep love for creating digital experiences that make a difference.
              </p>
              <p className="text-lg mb-4">
                With expertise in modern web technologies like React, TypeScript, and Node.js, I strive to build
                applications that are not only visually appealing but also performant and user-friendly.
              </p>
              <p className="text-lg mb-4">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the developer community.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </PageTemplate>
  );
};

export default About;

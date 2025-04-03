import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose dark:prose-invert">
            <p className="text-lg mb-4">
              I'm a passionate Fullstack Developer with a strong focus on creating efficient and user-friendly applications.
              My journey in web development started several years ago, and I've been constantly learning and improving my skills.
            </p>
            <p className="text-lg mb-4">
              I specialize in building modern web applications using technologies like React, Node.js, and TypeScript.
              I'm always eager to learn new technologies and best practices to deliver the best possible solutions.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
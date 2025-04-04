import React, { useState } from 'react';
import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = {
    frontend: {
      title: t('skills.frontend'),
      technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'SASS', 'React', 'Angular']
    },
    backend: {
      title: t('skills.backend'),
      technologies: ['Java', 'Python', 'MySQL', 'PostgreSQL', 'MongoDB', 'Spring Boot']
    },
    tools: {
      title: t('skills.tools'),
      technologies: ['Figma', 'Git', 'VS Code', 'Docker', 'Postman', 'Jira']
    }
  };

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <PageTemplate title={t('skills.title')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="glass-container">
            <p className="text-lg mb-8">{t('skills.description')}</p>
            
            <div className="space-y-4">
              {Object.entries(categories).map(([key, category]) => (
                <div key={key} className="skill-category">
                  <button
                    onClick={() => toggleCategory(key)}
                    className="category-button w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    {activeCategory === key ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeCategory === key ? 'auto' : 0,
                      opacity: activeCategory === key ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                      {category.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="tech-item glass p-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </PageTemplate>
  );
};

export default Skills;

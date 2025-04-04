import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SkillCard from '../components/SkillCard';

// Importar imágenes de habilidades
import htmlLogo from '../assets/skills/html.png';
import cssLogo from '../assets/skills/css.png';
import jsLogo from '../assets/skills/js.png';
import tsLogo from '../assets/skills/ts.svg';
import tailwindLogo from '../assets/skills/tailwind.svg';
import sassLogo from '../assets/skills/sass.png';
import reactLogo from '../assets/skills/react.svg';
import angularLogo from '../assets/skills/angular.png';
import javaLogo from '../assets/skills/java-4.svg';
import pythonLogo from '../assets/skills/python-5.svg';
import mysqlLogo from '../assets/skills/mysql-logo-pure.svg';
import postgresqlLogo from '../assets/skills/postgresql.svg';
import mongodbLogo from '../assets/skills/mongodb-icon-1.svg';
import springLogo from '../assets/skills/spring-3.svg';
import figmaLogo from '../assets/skills/figma.svg';
import gitLogo from '../assets/skills/git.svg';
import vscodeLogo from '../assets/skills/vscode.svg';
import dockerLogo from '../assets/skills/docker.svg';
import postmanLogo from '../assets/skills/postman.svg';
import jiraLogo from '../assets/skills/jira.svg';

// Mock project data for counting
const projects = [
  { id: 1, technologies: ['React', 'TypeScript', 'Tailwind CSS'] },
  { id: 2, technologies: ['Angular', 'Java', 'Spring Boot'] },
  { id: 3, technologies: ['Python', 'MongoDB'] },
  { id: 4, technologies: ['React', 'Node.js', 'PostgreSQL'] },
  { id: 5, technologies: ['HTML', 'CSS', 'JavaScript'] },
];

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [techCounts, setTechCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    // Count projects per technology
    const counts: Record<string, number> = {};
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });
    setTechCounts(counts);
  }, []);

  const categories = {
    frontend: {
      title: t('skills.frontend'),
      technologies: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: jsLogo },
        { name: 'TypeScript', logo: tsLogo },
        { name: 'Tailwind CSS', logo: tailwindLogo },
        { name: 'SASS', logo: sassLogo },
        { name: 'React', logo: reactLogo },
        { name: 'Angular', logo: angularLogo },
      ]
    },
    backend: {
      title: t('skills.backend'),
      technologies: [
        { name: 'Java', logo: javaLogo },
        { name: 'Python', logo: pythonLogo },
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'PostgreSQL', logo: postgresqlLogo },
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'Spring Boot', logo: springLogo },
      ]
    },
    tools: {
      title: t('skills.tools'),
      technologies: [
        { name: 'Figma', logo: figmaLogo },
        { name: 'Git', logo: gitLogo },
        { name: 'VS Code', logo: vscodeLogo },
        { name: 'Docker', logo: dockerLogo },
        { name: 'Postman', logo: postmanLogo },
        { name: 'Jira', logo: jiraLogo },
      ]
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
                  
                  {activeCategory === key && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4"
                    >
                      {category.technologies.map((tech) => (
                        <SkillCard
                          key={tech.name}
                          name={tech.name}
                          logo={tech.logo}
                          projectCount={techCounts[tech.name] || 0}
                          category={key}
                        />
                      ))}
                    </motion.div>
                  )}
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

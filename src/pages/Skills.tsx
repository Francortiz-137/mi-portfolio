import React, { useState, useMemo } from 'react';
import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import { projects } from '../data/projects';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Calcular el contador de proyectos por tecnología
  const technologyCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const categories = {
    frontend: {
      title: t('skills.frontend'),
      technologies: [
        { name: 'HTML', logo: '/assets/skills/html.svg', count: technologyCounts['HTML'] || 0 },
        { name: 'CSS', logo: '/assets/skills/css.svg', count: technologyCounts['CSS'] || 0 },
        { name: 'JavaScript', logo: '/assets/skills/javascript.svg', count: technologyCounts['JavaScript'] || 0 },
        { name: 'TypeScript', logo: '/assets/skills/typescript.svg', count: technologyCounts['TypeScript'] || 0 },
        { name: 'Tailwind CSS', logo: '/assets/skills/tailwind.svg', count: technologyCounts['Tailwind CSS'] || 0 },
        { name: 'SASS', logo: '/assets/skills/sass.svg', count: technologyCounts['SASS'] || 0 },
        { name: 'React', logo: '/assets/skills/react.svg', count: technologyCounts['React'] || 0 },
        { name: 'Angular', logo: '/assets/skills/angular.svg', count: technologyCounts['Angular'] || 0 }
      ]
    },
    backend: {
      title: t('skills.backend'),
      technologies: [
        { name: 'Java', logo: '/assets/skills/java.svg', count: technologyCounts['Java'] || 0 },
        { name: 'Python', logo: '/assets/skills/python.svg', count: technologyCounts['Python'] || 0 },
        { name: 'MySQL', logo: '/assets/skills/mysql.svg', count: technologyCounts['MySQL'] || 0 },
        { name: 'PostgreSQL', logo: '/assets/skills/postgresql.svg', count: technologyCounts['PostgreSQL'] || 0 },
        { name: 'MongoDB', logo: '/assets/skills/mongodb.svg', count: technologyCounts['MongoDB'] || 0 },
        { name: 'Spring Boot', logo: '/assets/skills/spring.svg', count: technologyCounts['Spring Boot'] || 0 }
      ]
    },
    tools: {
      title: t('skills.tools'),
      technologies: [
        { name: 'Figma', logo: '/assets/skills/figma.svg', count: technologyCounts['Figma'] || 0 },
        { name: 'Git', logo: '/assets/skills/git.svg', count: technologyCounts['Git'] || 0 },
        { name: 'VS Code', logo: '/assets/skills/vscode.svg', count: technologyCounts['VS Code'] || 0 },
        { name: 'Docker', logo: '/assets/skills/docker.svg', count: technologyCounts['Docker'] || 0 },
        { name: 'Postman', logo: '/assets/skills/postman.svg', count: technologyCounts['Postman'] || 0 },
        { name: 'Jira', logo: '/assets/skills/jira.svg', count: technologyCounts['Jira'] || 0 }
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
                        <SkillCard
                          key={tech.name}
                          name={tech.name}
                          logo={tech.logo}
                          projectCount={tech.count}
                          category={key}
                        />
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

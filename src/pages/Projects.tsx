import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import PageTemplate from './PageTemplate';
import { useTranslation } from 'react-i18next';
import { projects, Project } from '../data/projects';
import { Github, ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const technology = searchParams.get('technology');

  const filteredProjects = technology
    ? projects.filter(project => project.technologies.includes(technology))
    : projects;

  return (
    <PageTemplate title={t('projects.title')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold mb-8">{t('projects.title')}</h1>
        <p className="text-lg mb-8">{t('projects.description')}</p>

        {technology && (
          <div className="mb-8 flex items-center gap-4">
            <p className="text-lg">
              {t('projects.filteredBy')}: <span className="font-semibold">{technology}</span>
            </p>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <X size={20} />
              {t('projects.clearFilter')}
            </Link>
          </div>
        )}

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl mb-4">{t('projects.noProjectsFound')}</p>
            <Link
              to="/projects"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {t('projects.showAllProjects')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="custom-project-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="project-description mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">{t('projects.technologies')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Link
                          key={tech}
                          to={`/projects?technology=${tech}`}
                          className="custom-tech-tag px-3 py-1 rounded-full text-sm transition-colors duration-300"
                        >
                          {tech}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                      >
                        {t('projects.view')}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </PageTemplate>
  );
};

export default Projects;

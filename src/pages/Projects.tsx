import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageTemplate title={t('projects.title')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto mt-8"
      >
        <div className="glass-container mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('projects.subtitle')}</h2>
          <p className="text-lg">{t('projects.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Nombre del Proyecto</h3>
              <p className="text-sm mb-4">Descripción breve del proyecto</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                  {t('projects.technologies')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageTemplate>
  );
};

export default Projects;

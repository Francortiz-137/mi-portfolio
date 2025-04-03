import React from 'react';
import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageTemplate title={t('about.title')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="glass-container">
            <p className="text-lg mb-4">
              {t('about.description')}
            </p>
          </div>
        </div>
      </motion.div>
    </PageTemplate>
  );
};

export default About;

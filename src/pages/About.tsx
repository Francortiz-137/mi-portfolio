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
          {/* Profile image container */}
          <div className="glass-container mb-8 flex flex-col items-center">
            <div className="profile-image-container w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6">
              <img 
                src="https://via.placeholder.com/300" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* About text container */}
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

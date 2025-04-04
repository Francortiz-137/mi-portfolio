import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code } from 'lucide-react';

interface SkillCardProps {
  name: string;
  logo: string;
  projectCount: number;
  category: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, logo, projectCount, category }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    navigate(`/projects?technology=${name.toLowerCase()}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="skill-card glass p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-col items-center space-y-2">
        {imageError ? (
          <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
            <Code size={24} className="text-gray-500 dark:text-gray-400" />
          </div>
        ) : (
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-12 h-12 object-contain"
            onError={handleImageError}
          />
        )}
        <h3 className="text-lg font-semibold">{name}</h3>
        {projectCount>0 && (
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {projectCount} {projectCount === 1 ? t('skills.project') : t('skills.projects')}
          </span>
        </div>
        )}
      </div>
    </motion.div>
  );
};

export default SkillCard; 
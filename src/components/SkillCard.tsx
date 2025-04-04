import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface SkillCardProps {
  name: string;
  logo: string;
  projectCount: number;
  category: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, logo, projectCount, category }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(`/projects?technology=${name.toLowerCase()}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="skill-card glass p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-col items-center space-y-2">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-12 h-12 object-contain"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {projectCount} {projectCount === 1 ? t('skills.project') : t('skills.projects')}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard; 
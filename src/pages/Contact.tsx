import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageTemplate title={t('contact.title')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mt-8"
      >
        <div className="glass-container mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('contact.subtitle')}</h2>
          <p className="text-lg">{t('contact.description')}</p>
        </div>
        <div className="glass p-6 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                placeholder={t('contact.name')}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                placeholder={t('contact.email')}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={t('contact.message')}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {t('contact.send')}
            </button>
          </form>
        </div>
      </motion.div>
    </PageTemplate>
  );
};

export default Contact;

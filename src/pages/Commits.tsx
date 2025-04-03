import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
  repository: {
    name: string;
    html_url: string;
  };
}

const Commits: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('https://api.github.com/users/francortiz/events');
        if (!response.ok) {
          throw new Error('Failed to fetch commits');
        }
        const data = await response.json();
        
        // Filtrar solo los eventos de push y obtener los commits
        const pushEvents = data.filter((event: any) => event.type === 'PushEvent');
        const recentCommits = pushEvents
          .flatMap((event: any) => 
            event.payload.commits.map((commit: any) => ({
              sha: commit.sha,
              commit: {
                message: commit.message,
                author: {
                  date: event.created_at
                }
              },
              html_url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
              repository: {
                name: event.repo.name,
                html_url: `https://github.com/${event.repo.name}`
              }
            }))
          )
          .slice(0, 10); // Limitar a 10 commits

        setCommits(recentCommits);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  const formatDate = (dateString: string) => {
    const locale = i18n.language === 'es' ? es : enUS;
    return format(new Date(dateString), 'PPP', { locale });
  };

  return (
    <PageTemplate title={t('commits.title')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mt-8"
      >
        <div className="glass-container mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('commits.subtitle')}</h2>
          <p className="text-lg">{t('commits.description')}</p>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-lg">{t('commits.loading')}</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">
            <p className="text-lg">{t('commits.error')}</p>
          </div>
        ) : commits.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg">{t('commits.noCommits')}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {commits.map((commit) => (
              <motion.div
                key={commit.sha}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <a
                    href={commit.repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 font-semibold"
                  >
                    {commit.repository.name}
                  </a>
                  <span className="text-sm text-gray-500">
                    {formatDate(commit.commit.author.date)}
                  </span>
                </div>
                <a
                  href={commit.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-blue-500"
                >
                  <p className="text-gray-700 dark:text-gray-300">
                    {commit.commit.message}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </PageTemplate>
  );
};

export default Commits; 
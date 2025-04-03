import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";

const Projects: React.FC = () => (
  <PageTemplate title="Proyectos">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="max-w-6xl mx-auto mt-8"
    >
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
                Tecnología
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </PageTemplate>
);

export default Projects;

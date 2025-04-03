import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";

const About: React.FC = () => (
  <PageTemplate title="Sobre Mí">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="max-w-3xl mx-auto mt-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Educación</h3>
          <ul className="space-y-4">
            <li>
              <h4 className="font-medium">Título o Certificación</h4>
              <p className="text-sm">Institución - Año</p>
            </li>
          </ul>
        </div>
        <div className="glass p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Experiencia</h3>
          <ul className="space-y-4">
            <li>
              <h4 className="font-medium">Puesto</h4>
              <p className="text-sm">Empresa - Período</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  </PageTemplate>
);

export default About;

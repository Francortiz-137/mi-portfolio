import { motion } from "framer-motion";
import PageTemplate from "./PageTemplate";

const Skills: React.FC = () => (
  <PageTemplate title="Habilidades">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="max-w-4xl mx-auto mt-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>React</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="glass p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Backend</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Node.js</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </PageTemplate>
);

export default Skills;

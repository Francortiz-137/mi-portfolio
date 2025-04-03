import { motion } from "framer-motion";

type PageProps = {
  title: string;
};

const PageTemplate: React.FC<PageProps> = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="p-10 text-center text-3xl"
  >
    {title}
  </motion.div>
);

export default PageTemplate;

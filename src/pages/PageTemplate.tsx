import { motion } from "framer-motion";
import { ReactNode } from "react";

type PageProps = {
  title: string;
  children?: ReactNode;
};

const PageTemplate: React.FC<PageProps> = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="p-10"
  >
    <h1 className="text-center text-3xl font-bold mb-8">{title}</h1>
    {children}
  </motion.div>
);

export default PageTemplate;

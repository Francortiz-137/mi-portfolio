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
    className="w-full max-w-4xl mx-auto px-4 pt-24"
  >
    <h1 className="section-title">{title}</h1>
    {children}
  </motion.div>
);

export default PageTemplate;

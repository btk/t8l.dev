import { motion } from 'framer-motion';
import Link from 'next/link';

const ToolCard = ({ tool, index, Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
        <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1.5">
          <Icon className="w-4 h-4" />
          {tool.category}
        </span>
      </div>
      <p className="text-gray-400 mb-4">{tool.description}</p>
      <Link 
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
      >
        Visit Website →
      </Link>
    </motion.div>
  );
};

export default ToolCard; 
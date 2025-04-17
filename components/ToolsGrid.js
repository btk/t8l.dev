import { useState } from 'react';
import { motion } from 'framer-motion';
import ToolCard from './ToolCard';
import {
  SparklesIcon,
  BoltIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  ChartBarIcon,
  ArrowPathIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

// Category icon mapping
const categoryIcons = {
  'All': SparklesIcon,
  'API': CpuChipIcon,
  'License': DocumentTextIcon,
  'Search': MagnifyingGlassIcon,
  'Editor': PencilSquareIcon,
  'Generator': BoltIcon,
  'Analytics': ChartBarIcon,
  'Converter': ArrowPathIcon
};

const ToolsGrid = ({ tools }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterKey, setFilterKey] = useState(0);
  
  // Get unique categories
  const categories = ['All', ...new Set(tools.map(tool => tool.category))];
  
  // Filter tools based on selected category and search query
  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    if (newQuery === '') {
      setFilterKey(prev => prev + 1);
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tools by name or description..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => {
          const Icon = categoryIcons[category];
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === category
                  ? 'bg-[#2563eb] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              {category}
            </button>
          );
        })}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool, index) => (
          <ToolCard
            key={`${tool.name}-${filterKey}`}
            tool={tool}
            index={index}
            Icon={categoryIcons[tool.category]}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid; 
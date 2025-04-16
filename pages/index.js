import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import toolsData from '../data/tools.json';
import Footer from '../components/Footer';

// Category emoji mapping
const categoryEmojis = {
  'All': '✨',
  'API': '🔌',
  'License': '📜',
  'Search': '🔍',
  'Editor': '✏️',
  'Generator': '⚡',
  'Analytics': '📊',
  'Converter': '🔄'
};

export default function DeveloperTools() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(toolsData.tools.map(tool => tool.category))];
  
  // Filter tools based on selected category
  const filteredTools = selectedCategory === 'All' 
    ? toolsData.tools 
    : toolsData.tools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Head>
        <title>t8l.dev - Impactful Developer Tools</title>
        <meta name="description" content="A collection of free developer tools created by t8l.dev for developers, designers, and creators. All tools are free or have generous free tiers." />
        <meta name="keywords" content="developer tools, design tools, free tools, web development, design resources, SVG tools, vector tools" />
        
        {/* Open Graph */}
        <meta property="og:title" content="t8l.dev - Impactful Developer Tools" />
        <meta property="og:description" content="A collection of free developer tools created by t8l.dev for developers, designers, and creators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://t8l.dev/" />
        <meta property="og:image" content="https://t8l.dev/logo_white.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="t8l.dev - Impactful Developer Tools" />
        <meta name="twitter:description" content="A collection of free developer tools created by t8l.dev for developers, designers, and creators." />
        <meta name="twitter:image" content="https://t8l.dev/logo_white.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": toolsData.tools.map((tool, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "WebApplication",
                  "name": tool.name,
                  "description": tool.description,
                  "url": tool.url,
                  "applicationCategory": tool.category
                }
              }))
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-[#111111] text-white flex flex-col">
        <div className="container mx-auto px-4 py-20 flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <Image
              src="/logo_white.png"
              alt="t8l.dev logo"
              width={232.5}
              height={68.5}
              className="h-auto"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-semibold mb-8 text-center">Impactful Developer Tools</h1>
            <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
              A list of tools we made for developers, designers, and creators. All tools are free or have generous free tiers.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#00ffcc] text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-1">{categoryEmojis[category]}</span>
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                      <span className="mr-1">{categoryEmojis[tool.category]}</span>
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
              ))}
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
} 
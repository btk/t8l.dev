import { motion } from 'framer-motion';
import { CodeBracketIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <Image
              src="/logo_white.png"
              alt="t8l.dev logo"
              width={465}
              height={137}
              className="h-auto"
              priority
            />
          </motion.div>
          <motion.p 
            className="text-2xl text-gray-400 mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Better tools for better developers
          </motion.p>
          <Link href="/developer-tools/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-gray-100"
            >
              Check out the Tools
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
          >
            <div className="bg-[#1a1a1a] p-4 rounded-lg w-fit mb-6 border border-gray-800">
              <CodeBracketIcon className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Developer First</h3>
            <p className="text-gray-400 leading-relaxed">Tools built by developers, for developers. No compromises on quality or performance.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
          >
            <div className="bg-[#1a1a1a] p-4 rounded-lg w-fit mb-6 border border-gray-800">
              <RocketLaunchIcon className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Lightning Fast</h3>
            <p className="text-gray-400 leading-relaxed">Optimized for speed and efficiency. Every millisecond counts in development.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
          >
            <div className="bg-[#1a1a1a] p-4 rounded-lg w-fit mb-6 border border-gray-800">
              <SparklesIcon className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Modern Stack</h3>
            <p className="text-gray-400 leading-relaxed">Built with the latest technologies and best practices in mind.</p>
          </motion.div>
        </div>
      </section>

      {/* Why t8l.dev Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-semibold mb-8 text-white">Why t8l.dev?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-400 mb-6">
              We're on a mission to make development delightful again. Our tools are designed to eliminate friction and boost productivity.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <h4 className="font-semibold mb-2 text-white">Speed</h4>
                <p className="text-gray-400">Optimized for performance</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <h4 className="font-semibold mb-2 text-white">UX</h4>
                <p className="text-gray-400">Intuitive interfaces</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <h4 className="font-semibold mb-2 text-white">Simplicity</h4>
                <p className="text-gray-400">Clean and focused</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <h4 className="font-semibold mb-2 text-white">Open Source</h4>
                <p className="text-gray-400">Community driven</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1a1a1a] rounded-2xl p-8 text-center border border-gray-800"
        >
          <h2 className="text-4xl font-semibold mb-4 text-white">Join the Movement</h2>
          <p className="text-xl text-gray-400 mb-6">Be the first to try our tools and shape the future of development.</p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#111111] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 border border-gray-800 focus:border-gray-700 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-100"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

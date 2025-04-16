import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import LogoHeader from '../components/LogoHeader';

export default function Licensing() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <div className="container mx-auto px-4 py-20 flex-grow">
        <LogoHeader />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-semibold mb-8 text-center">Licensing</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">
              All tools and content created using t8l.dev are released under the Unlicense. This means they are dedicated to the public domain, free for anyone to use, modify, and distribute for any purpose.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">The Unlicense</h2>
            <p className="text-gray-400 mb-4">
              This is free and unencumbered software released into the public domain.
            </p>
            <p className="text-gray-400 mb-4">
              Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.
            </p>
            <p className="text-gray-400 mb-4">
              In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.
            </p>
            <p className="text-gray-400 mb-4">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What This Means For You</h2>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li>You can use any tool or content created with t8l.dev for any purpose</li>
              <li>You can modify and adapt the tools as you see fit</li>
              <li>You can distribute the tools, modified or unmodified</li>
              <li>You can use the tools commercially</li>
              <li>No attribution is required</li>
            </ul>

            <p className="text-gray-400 mb-6">
              For more information about the Unlicense, please visit <a href="https://unlicense.org" target="_blank" rel="noopener noreferrer" className="text-[#00ffcc] hover:text-[#00ffcc]/80">unlicense.org</a>.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import LogoHeader from '../components/LogoHeader';

export default function TermsOfUse() {
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
          <h1 className="text-4xl font-semibold mb-8 text-center">Terms of Use</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">
              By accessing and using t8l.dev, you agree to be bound by these Terms of Use. Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
            <p className="text-gray-400 mb-4">
              t8l.dev uses the following third-party services. By using our platform, you also agree to their respective terms of service:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li>
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#00ffcc] hover:text-[#00ffcc]/80">
                  Google Terms of Service
                </a>
              </li>
              <li>
                <a href="https://vercel.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-[#00ffcc] hover:text-[#00ffcc]/80">
                  Vercel Terms of Service
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
            <p className="text-gray-400 mb-4">
              You agree to use t8l.dev only for lawful purposes and in accordance with these Terms of Use. You agree not to use the service:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
              <li>To impersonate or attempt to impersonate t8l.dev, a t8l.dev employee, another user, or any other person or entity</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p className="text-gray-400 mb-4">
              The Service and its original content, features, and functionality are owned by t8l.dev and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
            <p className="text-gray-400 mb-4">
              The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. t8l.dev does not warrant that the Service will be uninterrupted, timely, secure, or error-free.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-400 mb-4">
              In no event shall t8l.dev, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p className="text-gray-400 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 
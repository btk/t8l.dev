import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import LogoHeader from '../components/LogoHeader';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-semibold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">
              This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our Service and tells you about your privacy rights and how the law protects you.
            </p>

            <p className="text-gray-400 mb-6">
              We use your Personal data to provide and improve our Service. By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">Interpretation</h3>
            <p className="text-gray-400 mb-4">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Definitions</h3>
            <p className="text-gray-400 mb-4">For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li><strong>Account</strong> means a unique account created for you to access our Service.</li>
              <li><strong>Company</strong> (referred to as either "We", "Us" or "Our" in this Agreement) refers to t8l.dev.</li>
              <li><strong>Cookies</strong> are small files that are placed on your computer, mobile device, or any other device by a website, containing the details of your browsing history on that website.</li>
              <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Website</strong> refers to t8l.dev, accessible from https://t8l.dev</li>
              <li><strong>You</strong> means the individual accessing or using the Service.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">Types of Data Collected</h3>
            <h4 className="text-lg font-semibold mt-4 mb-2">Personal Data</h4>
            <p className="text-gray-400 mb-4">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Usage Data</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4 mb-2">Usage Data</h4>
            <p className="text-gray-400 mb-4">
              Usage Data is collected automatically when using the Service. This may include information such as your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Tracking Technologies and Cookies</h3>
            <p className="text-gray-400 mb-4">
              We use Cookies and similar tracking technologies to track the activity on our Service and store certain information. The technologies we use may include:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
              <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on your Device. You can instruct your browser to refuse all Cookies or to indicate when a Cookie is being sent.</li>
              <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons that permit us to count users who have visited those pages or opened an email.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Security of Your Personal Data</h2>
            <p className="text-gray-400 mb-6">
              The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
            <p className="text-gray-400 mb-6">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-400 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 
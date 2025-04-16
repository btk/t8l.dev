import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <span className="text-4xl text-gray-400/20 font-mono">∞</span>
        </div>
        <div className="py-6">
          <div className="text-center space-x-4">
            <Link 
              href="https://buraktokak.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-block"
            >
              © 2025 - Burak Tokak
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              href="/terms-of-use"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-block"
            >
              Terms of Use
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-block"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              href="/licensing"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-block"
            >
              Licensing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 
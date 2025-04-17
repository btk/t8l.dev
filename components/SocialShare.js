import { motion } from 'framer-motion';

const SocialShare = ({ tool }) => {
  const shareText = `Check out ${tool.name} - ${tool.description}`;
  const encodedShareText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(tool.url);

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedShareText}`,
  };

  return (
    <div className="flex space-x-4">
      {Object.entries(socialLinks).map(([platform, url]) => (
        <motion.a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center"
          title={`Share on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
        >
          <img
            src={`/social/${platform}.svg`}
            alt={`Share on ${platform}`}
            className="w-6 h-6 text-white"
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialShare; 
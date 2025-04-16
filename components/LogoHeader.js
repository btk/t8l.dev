import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LogoHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center mb-12"
    >
      <Image
        src="/logo_white.png"
        alt="t8l.dev logo"
        width={155}
        height={45.67}
        className="h-auto"
        priority
      />
    </motion.div>
  );
} 
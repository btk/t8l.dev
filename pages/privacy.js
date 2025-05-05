import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PrivacyRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/privacy-policy');
  }, [router]);

  return null;
} 
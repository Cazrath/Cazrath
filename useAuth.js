// lib/useAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('cazrath-auth');
    if (auth !== 'true') {
      router.replace('/login');
    }
  }, []);
}

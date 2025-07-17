// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const unlocked = localStorage.getItem('unlocked');
    if (unlocked !== 'true') {
      router.replace('/gate');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col p-6">
      <div className="text-xl font-bold">Cazrath</div>
    </div>
  );
}

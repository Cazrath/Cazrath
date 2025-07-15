import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
      <Head>
        <title>Cazrath</title>
      </Head>
      <h1 className="text-5xl font-bold mb-2 tracking-wider">Cazrath</h1>
      <p className="text-sm mb-10 tracking-tight">even if the sky falls, the soul it feared most — Cazrath — will still be standing where gravity ends.</p>
      <p className="max-w-xl text-sm leading-loose">
        if you see me, it’s because i let you · i walked to escape the noise but found myself in silence ·
        the world didn’t give me answers — it gave me questions that felt like home · and i learned peace is not a place — it’s a path
      </p>
    </div>
  );
}
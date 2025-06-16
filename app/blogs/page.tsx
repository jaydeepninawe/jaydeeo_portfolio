// pages/blog/index.tsx
import React from 'react';
import Link from 'next/link';

export default function BlogComingSoon() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        📝 Blog Coming Soon
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl">
        I’m currently working on publishing insightful write-ups for my projects,
        tutorials, and tech deep dives. Stay tuned!
      </p>
      <Link href="/" className="mt-6 inline-block text-sm text-cyan-400 hover:underline">
        ← Back to Portfolio
      </Link>
    </div>
  );
}

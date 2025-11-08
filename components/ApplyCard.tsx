'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ApplyCard() {
  return (
    <Link
      href="/candidate-dashboard-portal-cards/apply"
      className="flex flex-col h-full pixel-borders border-4 border-black bg-[#fffacd] hover:bg-[#fff5b8] dark:bg-[#1a1a1a] dark:border-[#ff8c00] pixel-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all overflow-hidden"
    >
      <Image src="/memes/works-on-my-machine.webp" alt="It works on my machine meme" width={400} height={200} className="w-full h-48 object-cover pixel-borders"/>
      <div className="p-6 grow">
        <h2 className="text-xl font-semibold text-black dark:text-[#ffd700] mb-2 pixel-font">
          Code Ninja Job
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-sm">
          The standard application form. Seems simple enough...
        </p>
      </div>
      <footer className="p-6 pt-2 text-xs text-gray-600 dark:text-gray-400 pixel-borders border-t-4 border-black dark:border-[#ff8c00]">
        <strong>Priority:</strong> <span className="text-[#ff0000] font-bold">HIGH</span><br/>
        <strong>Status:</strong> <Link href="/candidate-dashboard-portal-cards/status" className="text-[#ff8c00] hover:underline" onClick={(e) => e.stopPropagation()}>Pending</Link><br/>
        <strong>Owner:</strong> <Link href="/candidate-dashboard-portal-cards/owner" className="text-[#ff8c00] hover:underline" onClick={(e) => e.stopPropagation()}>HR Dept</Link>
      </footer>
    </Link>
  );
}

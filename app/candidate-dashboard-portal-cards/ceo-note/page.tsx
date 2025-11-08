'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/ui/pixel/pixel-card';
import { PixelButton } from '@/components/ui/pixel/pixel-button';
import { PixelInput } from '@/components/ui/pixel/pixel-input';

export default function CeoNote() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === 'PHOENIX') {
      router.push('/candidate-dashboard-portal-cards/phoenix-vault');
    } else {
      setError('Incorrect Vault Key. Did you read the note carefully?');
    }
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] p-8">
      <PixelCard className="max-w-4xl mx-auto">
        <Image
          src="/memes/Wait-A-Minute.webp"
          alt="Our Vision"
          width={800}
          height={300}
          className="w-full h-64 object-cover pixel-borders mb-6"
        />
        <PixelCardHeader>
          <PixelCardTitle className="text-4xl">A Note From Our CEO</PixelCardTitle>
          <p className="text-gray-300 mt-2">&quot;On Our Bold New Future: Project Phoenix&quot;</p>
        </PixelCardHeader>
        <PixelCardContent>
          <div className="prose max-w-none text-gray-300 space-y-4 mb-8">
            <p>
              <strong className="text-[#ffd700]">P</strong>eople are the cornerstone of our success. We believe in
              investing in our team and fostering a culture of &apos;GRIND&apos;.
            </p>
            <p>
              <strong className="text-[#ffd700]">H</strong>owever, culture alone is not enough. We are on the precipice
              of a new technological dawn, a revolution in how we do business.
            </p>
            <p>
              <strong className="text-[#ffd700]">O</strong>ur new initiative, codenamed &apos;Project Phoenix&apos;, will redefine
              our industry. It is a testament to our commitment to innovation.
            </p>
            <p>
              <strong className="text-[#ffd700]">E</strong>very single employee must be aligned with this vision. We will
              leverage our synergies and pivot our core competencies.
            </p>
            <p>
              <strong className="text-[#ffd700]">N</strong>ow, more than ever, we must think outside the box. This project
              is under &apos;lock and key&apos; for a reason.
            </p>
            <p>
              <strong className="text-[#ffd700]">I</strong> am confident that &apos;Project Phoenix&apos; will lead us to unparalleled
              heights. The key to our future is in this project.
            </p>
            <p>
              <strong className="text-[#ffd700]">X</strong> marks the spot. Our future starts now.
            </p>
          </div>

          <div className="pixel-borders border-4 border-[#ff8c00] p-6 bg-[#2a2a2a]">
            <h2 className="text-2xl font-semibold text-[#ffd700] mb-4 pixel-font">Access the Project Vault</h2>
            <p className="text-gray-300 mb-4">
              Enter the Vault Key (found in the CEO&apos;s note) to access the project roadmap.
            </p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <PixelInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1"
                placeholder="Enter Vault Key..."
              />
              <PixelButton type="submit">
                Unlock
              </PixelButton>
            </form>
            {error && <p className="text-[#ff0000] text-sm mt-2 pixel-font font-bold">{error}</p>}
          </div>
        </PixelCardContent>
      </PixelCard>
    </main>
  );
}
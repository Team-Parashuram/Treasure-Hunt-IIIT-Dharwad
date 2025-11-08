'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/ui/pixel/pixel-card';
import { PixelButton } from '@/components/ui/pixel/pixel-button';
import { PixelInput } from '@/components/ui/pixel/pixel-input';
import { PixelLabel } from '@/components/ui/pixel/pixel-label';

export default function EmployeeContest() {
  const router = useRouter();
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isQ1 = answers.q1.trim().toUpperCase() === 'FAGE';
    const isQ2 = answers.q2.trim() === '72';
    const isQ3 = answers.q3.trim() === '6838';

    if (isQ1 && isQ2 && isQ3) {
      setError('Verifying your answers... this is it!');
      setTimeout(() => {
        router.push('/tu-nalla-hi-marega');
      }, 60000);
    } else {
      setError('Wrong answers! Your vote is invalid. Did you even listen to the complaints?');
    }
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] p-8">
      <PixelCard className="max-w-4xl mx-auto">
        <PixelCardHeader>
          <PixelCardTitle className="text-3xl">Vote: Employee of the Month!</PixelCardTitle>
          <p className="text-gray-300 mt-2">
            Vote for your favorite colleague! To validate your vote, you must
            answer 3 security questions to prove you work here.
          </p>
        </PixelCardHeader>
        <PixelCardContent>
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
            <div className="p-4 pixel-borders border-4 border-[#ff8c00]">
              <Image src="/memes/chillguy.png" alt="Raj" width={100} height={100} className="mx-auto pixel-borders w-24 h-24 mb-2"/>
              <span className="pixel-font text-gray-200">Raj (Dev)</span>
            </div>
            <div className="p-4 pixel-borders border-4 border-[#ff8c00]">
              <Image src="/memes/blanket.png" alt="Brenda" width={100} height={100} className="mx-auto pixel-borders w-24 h-24 mb-2"/>
              <span className="pixel-font text-gray-200">Brenda (Accounting)</span>
            </div>
            <div className="p-4 pixel-borders border-4 border-[#ff8c00]">
              <Image src="/memes/raccoon.png" alt="Tom" width={100} height={100} className="mx-auto pixel-borders w-24 h-24 mb-2"/>
              <span className="pixel-font text-gray-200">Tom (Facilities)</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <PixelLabel className="block text-lg mb-2">
                Q1: What brand of yogurt did Brenda have stolen?
              </PixelLabel>
              <PixelInput 
                type="text" 
                onChange={(e) => setAnswers(p => ({...p, q1: e.target.value}))} 
                placeholder="(Hint: Listen to the Grievance Hotline...)" 
              />
            </div>
            <div>
              <PixelLabel className="block text-lg mb-2">
                Q2: What is Tom&apos;s &quot;optimal&quot; thermostat temperature (in Fahrenheit)?
              </PixelLabel>
              <PixelInput 
                type="text" 
                onChange={(e) => setAnswers(p => ({...p, q2: e.target.value}))} 
                placeholder="(Hint: He's very... particular.)" 
              />
            </div>
            <div>
              <PixelLabel className="block text-lg mb-2">
                Q3: What is Raj&apos;s &quot;joke&quot; Hacktoberfest PR number?
              </PixelLabel>
              <PixelInput 
                type="text" 
                onChange={(e) => setAnswers(p => ({...p, q3: e.target.value}))} 
                placeholder="(Hint: This is a 4-digit number.)" 
              />
            </div>
            
            {error && <p className="text-[#ff0000] text-center pixel-font font-bold">{error}</p>}
            
            <PixelButton
              type="submit"
              className="w-full"
            >
              Submit Vote & Claim Prize
            </PixelButton>
          </form>
        </PixelCardContent>
      </PixelCard>
    </main>
  );
}
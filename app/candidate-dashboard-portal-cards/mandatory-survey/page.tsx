'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/ui/pixel/pixel-card';
import { PixelButton } from '@/components/ui/pixel/pixel-button';
import { PixelRadioGroup, PixelRadioGroupItem } from '@/components/ui/pixel/pixel-radio-group';
import { PixelLabel } from '@/components/ui/pixel/pixel-label';
import { PixelScrollArea } from '@/components/ui/pixel/pixel-scroll-area';

const allQuestions = Array.from({ length: 100 }, (_, i) => {
  const buzzwords = ['synergy', 'leverage', 'core competency', 'GRIND', 'pivot', 'bandwidth'];
  return `Q.${i + 1}: On a scale of 1-5, how much do you 'feel' our ${buzzwords[i % buzzwords.length]}?`;
});

export default function MandatorySurvey() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [error, setError] = useState('');

  const handleSelect = (qIndex: number, value: string) => {
    setAnswers(prev => ({ ...prev, [qIndex]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(answers).length < 100) {
      setError(`You have only answered ${Object.keys(answers).length} questions. All 100 are mandatory.`);
      return;
    }

    // The punchline
    setError('Thank you. Your submission is... noted.');
    setTimeout(() => {
      router.push('/tu-nalla-hi-marega');
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] p-8">
      <PixelCard className="max-w-4xl mx-auto">
        <PixelCardHeader>
          <PixelCardTitle className="text-3xl">
            Annual &apos;Corporate Culture&apos; Survey
          </PixelCardTitle>
          <p className="text-gray-300 mt-2">
            Your feedback is critical to our success! Please answer all 100 questions.
          </p>
        </PixelCardHeader>
        <PixelCardContent>
          <form onSubmit={handleSubmit}>
            <PixelScrollArea className="h-[60vh] border-4 border-[#ff8c00] pixel-borders p-4">
              <div className="space-y-8">
                {allQuestions.map((q, i) => (
                  <div key={i} className="pixel-borders border-b-4 border-[#ff8c00] pb-4">
                    <p className="font-medium text-gray-200 mb-2 pixel-font">{q}</p>
                    <div className="flex space-x-4">
                      {[1, 2, 3, 4, 5].map(val => (
                        <label key={val} className="text-sm flex items-center space-x-1">
                          <input 
                            type="radio" 
                            name={`q-${i}`} 
                            value={val} 
                            onChange={() => handleSelect(i, `${val}`)}
                            className="mr-1 accent-[#ffd700]"
                          />
                          <span className="pixel-font">{val}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </PixelScrollArea>

            <div className="mt-6">
              {error && <p className="text-[#ff0000] text-center mb-4 pixel-font font-bold">{error}</p>}
              <PixelButton
                type="submit"
                className="w-full"
              >
                Submit 100-Question Survey
              </PixelButton>
            </div>
          </form>
        </PixelCardContent>
      </PixelCard>
    </main>
  );
}
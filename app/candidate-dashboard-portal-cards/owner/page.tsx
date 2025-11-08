import Image from 'next/image';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/ui/pixel/pixel-card';

export default function OwnerPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-12 bg-[#1a1a1a]">
      <PixelCard className="w-full max-w-2xl">
        <PixelCardHeader>
          <PixelCardTitle className="text-3xl">
            HR Department Portal
          </PixelCardTitle>
        </PixelCardHeader>
        <PixelCardContent className="space-y-6">
          <div className="pixel-borders border-b-4 border-[#ff8c00] pb-6">
            <h2 className="text-xl font-semibold text-[#ffd700] mb-4 pixel-font">
              Our Legacy
            </h2>
            <div className="relative h-64 pixel-borders overflow-hidden">
              <Image
                src="/memes/worthless.webp"
                alt="Legacy API Token (DO NOT USE, FOR TEST ONLY): this-company-is-a-joke-lol"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-gray-300 italic">
              Our first-ever server (2010). We keep it for &apos;legacy&apos; reasons.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#ffd700] mb-2 pixel-font">
              HR Department Notice
            </h2>
            <div className="pixel-borders border-4 border-[#ff8c00] p-4 bg-[#2a2a2a]">
              <p className="text-gray-300 mb-4">
                Please note that all job applications must follow our standard operating procedures.
                Any attempts to bypass our carefully designed recruitment process will result in
                automatic disqualification.
              </p>
              <p className="text-gray-300">
                For technical issues, please use our new support portal. Do not attempt to use
                deprecated systems or legacy endpoints.
              </p>
            </div>
          </div>
        </PixelCardContent>
      </PixelCard>
    </main>
  );
}
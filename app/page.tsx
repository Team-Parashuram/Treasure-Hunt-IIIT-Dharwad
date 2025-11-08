'use client';

import { LoginButton } from '@/components/LoginButton';
import { GoogleLoginButton } from '@/components/GoogleLoginButton';
import { useSession } from '@/lib/auth-client';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/ui/pixel/pixel-card';
import Image from 'next/image';

export default function Home() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24 bg-[#000000] dark:bg-[#000000] text-white">
        <PixelCard className="max-w-3xl w-full text-center">
          <PixelCardHeader>
            <PixelCardTitle className="text-2xl md:text-4xl text-[#ff0000] animate-pulse">
              Kya Naukri Milegi Tumhe?
            </PixelCardTitle>
          </PixelCardHeader>
          <PixelCardContent>
            <p className="text-xl md:text-2xl text-[#ffd700] font-bold mb-4">
              The Ultimate Job Hunt
            </p>
            <div className="mt-8 space-y-3">
              <p className="text-lg md:text-xl text-gray-300 animate-bounce">
                🔍 Checking your credentials...
              </p>
              <p className="text-md text-gray-400">
                HR is reviewing your profile...
              </p>
              <div className="flex justify-center items-center space-x-2 mt-4">
                <div className="w-3 h-3 bg-[#ff0000] pixel-borders" style={{ animationDelay: '0ms' }}></div>
                <div className="w-3 h-3 bg-[#ffd700] pixel-borders animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 bg-[#00ff00] pixel-borders animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </PixelCardContent>
        </PixelCard>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24 bg-[#000000] dark:bg-[#000000]">
        <PixelCard className="max-w-2xl w-full text-center">
          <PixelCardContent className="space-y-6">
            <Image
              src="/memes/This-Is-Fine-Dog-Fire-Meme-Sticker.webp"
              alt="This is fine dog"
              width={300}
              height={170}
              className="mx-auto pixel-borders"
              priority 
            />

            <PixelCardTitle className="text-2xl md:text-3xl text-[#ff0000]">
              Welcome to Kya tumhe Naukri Milegi?
            </PixelCardTitle>
            <p className="text-lg md:text-xl text-white">
              First, authenticate yourself to proceed...
            </p>

            <GoogleLoginButton />
          </PixelCardContent>
        </PixelCard>
      </main>
    );
  }

  return (
<>
    <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24 bg-[#000000] dark:bg-[#000000]">
      <PixelCard className="max-w-2xl w-full text-center">
        <PixelCardContent className="space-y-6">
          <Image
            src="/memes/This-Is-Fine-Dog-Fire-Meme-Sticker.webp"
            alt="This is fine dog"
            width={300}
            height={170}
            className="mx-auto pixel-borders"
            priority 
          />

          <PixelCardTitle className="text-2xl md:text-3xl text-[#ff0000]">
            Welcome to Kya tumhe Naukri Milegi?
          </PixelCardTitle>
          <p className="text-lg md:text-xl text-white">
            HR has closed the gate for you.
          </p>
          <p className="text-base md:text-lg text-[#ffd700]">
            You have to become a hacker to bypass the gate and get naukri...
          </p>

          <Image 
            src="/memes/Mai-Expert-Hu-popular-indian-meme-templates-300x169.webp" 
            alt="Mai Expert Hu Meme"
            width={300}
            height={169}
            className="mx-auto pixel-borders"
          />
          <div
            style={{ display: 'none' }}
            dangerouslySetInnerHTML={{
              __html: `
              <p className='hidden'> HR told me to disable this, but they don't check the source code.
              Use this for testing.
              U: haha_tujhko_kya_naukri_milegi
              P: naukri_krun_chahiye_tere_ko_nalla_mar_na
              </p>
                `,
            }}
          />

          <LoginButton />
          <p className="text-sm text-gray-400 pt-8 animate-pulse">
            (Psst... real hackers... check something to get ahead!)
          </p>
        </PixelCardContent>
      </PixelCard>
    </main>
    </>
  );
}
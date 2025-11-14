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
      <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12 lg:p-24 bg-[#000000] dark:bg-[#000000] text-white pixel-scanlines">
        <section className="max-w-4xl w-full">
          <PixelCard className="w-full text-center pixel-glow">
            <PixelCardHeader className="pb-8">
              <PixelCardTitle className="text-3xl md:text-4xl lg:text-5xl text-pixel-dark-danger pixel-glow-text leading-tight">
                KYA NAUKRI MILEGI TUMHE?
              </PixelCardTitle>
            </PixelCardHeader>
            <PixelCardContent className="space-y-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-pixel-dark-secondary font-bold pixel-font">
                The Ultimate Job Hunt
              </h2>
              <div className="mt-8 space-y-4 py-8">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 animate-bounce pixel-font">
                  🔍 Checking your credentials...
                </p>
                <p className="text-base md:text-lg text-gray-400 pixel-font">
                  HR is reviewing your profile...
                </p>
                <div className="flex justify-center items-center space-x-4 mt-8 pt-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-pixel-dark-danger pixel-borders pixel-shadow animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-pixel-dark-secondary pixel-borders pixel-shadow animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-pixel-dark-success pixel-borders pixel-shadow animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </PixelCardContent>
          </PixelCard>
        </section>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12 lg:p-24 bg-[#000000] dark:bg-[#000000] pixel-grid pixel-scanlines">
        <section className="max-w-3xl w-full">
          <PixelCard className="w-full text-center pixel-pulse">
            <PixelCardContent className="space-y-8 py-8">
              <div className="mb-6">
                <Image
                  src="/memes/This-Is-Fine-Dog-Fire-Meme-Sticker.webp"
                  alt="This is fine dog meme - Welcome to the chaos of job hunting"
                  width={300}
                  height={170}
                  className="mx-auto pixel-borders pixel-shadow-lg"
                  priority 
                />
              </div>

              <header>
                <PixelCardTitle className="text-2xl md:text-3xl lg:text-4xl text-pixel-dark-danger pixel-text-shadow mb-6">
                  Welcome to Kya Tumhe Naukri Milegi?
                </PixelCardTitle>
                <p className="text-lg md:text-xl lg:text-2xl text-white pixel-font leading-relaxed px-4">
                  First, authenticate yourself to proceed...
                </p>
              </header>

              <div className="pixel-divider my-8"></div>

              <div className="py-4">
                <GoogleLoginButton />
              </div>

              <p className="text-sm md:text-base text-gray-400 italic pt-4">
                🎮 Ready to prove you deserve the job?
              </p>
            </PixelCardContent>
          </PixelCard>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12 lg:p-24 bg-[#000000] dark:bg-[#000000] pixel-grid pixel-scanlines">
      <section className="max-w-3xl w-full">
        <PixelCard className="w-full text-center pixel-glow">
          <PixelCardContent className="space-y-8 py-8">
            <div className="mb-6">
              <Image
                src="/memes/This-Is-Fine-Dog-Fire-Meme-Sticker.webp"
                alt="This is fine dog meme - Everything is fine, or is it?"
                width={300}
                height={170}
                className="mx-auto pixel-borders pixel-shadow-lg pixel-float"
                priority 
              />
            </div>

            <header className="space-y-6">
              <PixelCardTitle className="text-2xl md:text-3xl lg:text-4xl text-pixel-dark-danger pixel-text-shadow leading-tight">
                Welcome to Kya Tumhe Naukri Milegi?
              </PixelCardTitle>
              <div className="space-y-4 px-4">
                <p className="text-lg md:text-xl lg:text-2xl text-white pixel-font leading-relaxed">
                  HR has closed the gate for you.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-pixel-dark-secondary pixel-font leading-relaxed">
                  You have to become a hacker to bypass the gate and get naukri...
                </p>
              </div>
            </header>

            <div className="pixel-divider my-8"></div>

            <div className="my-6">
              <Image 
                src="/memes/Mai-Expert-Hu-popular-indian-meme-templates-300x169.webp" 
                alt="Mai Expert Hu meme - Showing confidence in hacking skills"
                width={300}
                height={169}
                className="mx-auto pixel-borders pixel-shadow"
              />
            </div>

            <div
              style={{ display: 'none' }}
              dangerouslySetInnerHTML={{
                __html: `
                <!-- HR told me to disable this, but they don't check the source code.
                Use this for testing.
                U: haha_tujhko_kya_naukri_milegi
                P: naukri_krun_chahiye_tere_ko_nalla_mar_na
                -->
                `,
              }}
            />

            <div className="pt-6">
              <LoginButton />
            </div>

            <footer className="pt-8">
              <p className="text-xs md:text-sm text-gray-400 animate-pulse pixel-font">
                (Psst... real hackers check the source code! 🕵️‍♂️)
              </p>
            </footer>
          </PixelCardContent>
        </PixelCard>
      </section>
    </main>
  );
}
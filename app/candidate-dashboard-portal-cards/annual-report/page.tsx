'use client';

import { useState} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/ui/pixel/pixel-card';
import { PixelButton } from '@/components/ui/pixel/pixel-button';
import { PixelCheckbox } from '@/components/ui/pixel/pixel-checkbox';
import { PixelProgress } from '@/components/ui/pixel/pixel-progress';
import { PixelAlert, PixelAlertTitle, PixelAlertDescription } from '@/components/ui/pixel/pixel-alert';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function AnnualReport() {
  const router = useRouter();
  const [preparing, setPreparing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [showError, setShowError] = useState(false);

  const startPreparing = () => {
    setPreparing(true);
    simulateProgress();
  };

  const simulateProgress = async () => {
    const statusMessages: Record<number, string> = {
      10: "Initializing export job... [job_id: 88122]",
      30: "Querying legacy database (Q1-Q3)...",
      50: "Bundling Q4 Appendix... (This is the large one, please wait...)",
      70: "Processing financial statements...",
      90: "Compressing files...",
      99: "Finalizing export..."
    };

    for (let i = 0; i <= 99; i++) {
      setProgress(i);
      
      if (statusMessages[i]) {
        setStatus(statusMessages[i]);
      }
      if (i === 50) {
        await sleep(120000); 
        setStatus("Resuming process... (Legacy system is slow)");
        await sleep(120000);
      }
      await sleep(12000); 
    }
    await sleep(1200000);

    setShowError(true);
    await sleep(10000);
    router.push('/tu-nalla-hi-marega');
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-gray-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Image
            src="/memes/free-real-estate.webp"
            alt="Its free real estate"
            width={300}
            height={200}
            className="mx-auto pixel-borders mb-6"
          />
          <h1 className="text-3xl font-bold text-[#ffd700] pixel-font">Company Reports Portal</h1>
          <p className="mt-2 text-gray-300 pixel-font">Fiscal Year 2025 - Annual Report</p>
        </div>

        {!preparing ? (
          <PixelCard>
            <PixelCardContent className="p-6">
              <div className="mb-6">
                <p className="text-gray-300">
                  This file is too large for a direct download. Please select the components 
                  you need and prepare your export.
                </p>
              </div>

              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <PixelCheckbox />
                  <span>Q1-Q3 Financials (12MB)</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <PixelCheckbox defaultChecked />
                  <span className="font-medium">Q4 Appendix (38MB)</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <PixelCheckbox />
                  <span>Legal Disclaimers (1.2MB)</span>
                </label>

                <label className="flex items-center space-x-3 text-gray-400">
                  <PixelCheckbox />
                  <span>Compress file (Makes export 2x slower)</span>
                </label>
              </div>

              <PixelButton
                onClick={startPreparing}
                className="mt-6 w-full"
              >
                Prepare Export
              </PixelButton>
            </PixelCardContent>
          </PixelCard>
        ) : (
          <PixelCard>
            <PixelCardContent className="p-6">
              {!showError ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-[#ffd700] pixel-font">
                      Preparing your report...
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Please do not close this window. This may take several minutes...
                    </p>
                  </div>

                  <div className="relative pt-1">
                    <PixelProgress value={progress} className="mb-4" />
                    <div className="flex justify-between text-sm text-gray-300 pixel-font">
                      <span>{progress}% Complete</span>
                      <span className="animate-pulse">{status}</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-[#ff0000] text-xl font-bold pixel-font">
                    EXPORT FAILED
                  </div>
                  <PixelAlert variant="error">
                    <PixelAlertTitle>Error: 403 (Permission Denied)</PixelAlertTitle>
                    <PixelAlertDescription>
                      <p className="mt-2">
                        This resource is flagged for &apos;Confidential Financial Data&apos;. 
                        Access is restricted to C-Suite level employees only.
                      </p>
                      <p className="mt-2 font-bold">
                        Your candidate profile has been flagged for attempting to access 
                        sensitive materials. An HR representative will be in touch.
                      </p>
                    </PixelAlertDescription>
                  </PixelAlert>
                </div>
              )}
            </PixelCardContent>
          </PixelCard>
        )}
      </div>
    </main>
  );
}
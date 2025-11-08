'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { PixelButton } from '@/components/ui/pixel/pixel-button';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/ui/pixel/pixel-card';
import { PixelInput } from '@/components/ui/pixel/pixel-input';
import { PixelLabel } from '@/components/ui/pixel/pixel-label';

export function LoginModal({ onClose }: { onClose: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/candidate-dashboard-portal-cards');
    } else {
      const data = await res.json();
      setError(data.error || 'Login failed. Try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <PixelCard className="w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl pixel-font"
        >
          X
        </button>
        <PixelCardHeader>
          <PixelCardTitle className="text-2xl text-center">
            Applicant Portal
          </PixelCardTitle>
        </PixelCardHeader>
        <PixelCardContent>
          <div className="mb-6 text-center">
            <p className="text-sm italic pixel-borders border-2 p-3 bg-black/20">
              &quot;Beneath the surface of what you see,
              <br />In layers of code, secrets run free.
              <br />Inspect anywhere, the source holds truths you must detect.&quot;
            </p>
            <p className="text-xs text-gray-500 mt-2">- Dev who got lazy with security</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <PixelLabel htmlFor="username">
                Username
              </PixelLabel>
              <PixelInput
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <PixelLabel htmlFor="password">
                Password
              </PixelLabel>
              <PixelInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </div>
            {error && (
              <p className="text-sm text-[#ff0000] text-center pixel-font">{error}</p>
            )}

            <PixelButton
              type="submit"
              className="w-full"
              size="lg"
            >
              Bypass Gate
            </PixelButton>
          </form>
        </PixelCardContent>
      </PixelCard>
    </div>
  );
}
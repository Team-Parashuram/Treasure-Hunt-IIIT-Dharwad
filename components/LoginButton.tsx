'use client';

import { useState } from 'react';
import { LoginModal } from './LoginModal';
import { PixelButton } from '@/components/ui/pixel/pixel-button';

export function LoginButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PixelButton
        onClick={() => setIsModalOpen(true)}
        size="lg"
        className="mt-8"
      >
        Login
      </PixelButton>
      {isModalOpen && (
        <LoginModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const basePath = "/candidate-dashboard-portal-cards";

  return (
    <footer className="mt-12 pt-8 border-t-4 pixel-borders border-[#ff8c00] text-sm text-gray-400 bg-[#0a0a0a]">
      
      {/* 4-Column "Mega-Footer" Trap */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-left">
        
        {/* Column 1: "Company" */}
        <div>
          <h3 className="font-semibold text-[#ffd700] mb-3 uppercase tracking-wider pixel-font text-xs">Company</h3>
          <div className="flex flex-col space-y-2">
            <Link href={`${basePath}/legal-training`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Legal & Compliance (Overdue)
            </Link>
            <Link href={`${basePath}/mandatory-survey`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Mandatory Company-Wide Survey
            </Link>
            <Link href={`${basePath}/annual-report`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Annual Report (50MB)
            </Link>
          </div>
        </div>

        {/* Column 2: "Resources"  */}
        <div>
          <h3 className="font-semibold text-[#ffd700] mb-3 uppercase tracking-wider pixel-font text-xs">Resources</h3>
          <div className="flex flex-col space-y-2">
            <Link href={`${basePath}/it-help-desk`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              IT Help Desk Portal
            </Link>
            <Link href={`${basePath}/legacy-site`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Access &apos;Legacy&apos; Site Archive
            </Link>
            <Link href={`${basePath}/demo-request`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Request a Demo
            </Link>
            <Link href={`${basePath}/leaked-memos`} className="text-[#ff0000] hover:text-[#ff3333] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Competitor&apos;s &quot;Leaked&quot; Memos
            </Link>
          </div>
        </div>

        {/* Column 3: "Community" */}
        <div>
          <h3 className="font-semibold text-[#ffd700] mb-3 uppercase tracking-wider pixel-font text-xs">Community</h3>
          <div className="flex flex-col space-y-2">
            <Link href={`${basePath}/employee-contest`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Employee of the Month (Vote!)
            </Link>
            <Link href={`${basePath}/ab-test`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Give Feedback (A/B Test)
            </Link>
          </div>
        </div>

        {/* Column 4: "Initiatives" */}
        <div>
          <h3 className="font-semibold text-[#ffd700] mb-3 uppercase tracking-wider pixel-font text-xs">Initiatives</h3>
          <div className="flex flex-col space-y-2">
            <Link href={`${basePath}/ai-chatbot`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Beta Test our AI Chatbot
            </Link>
            <Link href={`${basePath}/ceo-note`} className="text-[#ff8c00] hover:text-[#ffd700] hover:underline pixel-font text-[10px] hover:translate-x-1 transition-all">
              Project Phoenix
            </Link>
          </div>
        </div>

      </div> {/* End of grid */}

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t-4 pixel-borders border-[#ff8c00]/30 text-center">
        <p className="mb-2 pixel-font text-[10px] text-gray-500">
          © 2025 Kya Naukri Milegi? Inc. All rights reserved. (No, not
          really).
        </p>
      </div>
    </footer>
  );
}

export default Footer;
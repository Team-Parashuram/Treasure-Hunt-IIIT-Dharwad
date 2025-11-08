"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import EasyPath2 from "@/components/path-2/Easy-Path-2";
import EasyPath3 from "@/components/path-2/Easy-Path-3";
import ApplyCard from "@/components/ApplyCard";

export default function Dashboard() {
  const initialCards = [
    <ApplyCard key="1" />,

    <EasyPath2 key="2" />,

    <EasyPath3 key="3" />,

    <Link
      key="4"
      href="/candidate-dashboard-portal-cards/stack"
      className="flex flex-col h-full pixel-borders border-4 border-black bg-[#fffacd] hover:bg-[#fff5b8] dark:bg-[#1a1a1a] dark:border-[#ff8c00] pixel-shadow-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all overflow-hidden pixel-corners group"
    >
      <Image src="/memes/jenga.jpg" alt="Jenga tower code meme" width={400} height={200} className="w-full h-48 object-cover pixel-borders border-b-4 border-black dark:border-[#ff8c00] group-hover:brightness-110 transition-all" />
      <div className="p-6 grow">
        <h2 className="text-xl font-semibold text-black dark:text-[#ffd700] mb-2 pixel-font pixel-text-shadow">
          Our Tech
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
          Learn about the &apos;cutting-edge&apos; tools we use.
        </p>
      </div>
      <footer className="p-6 pt-2 text-xs text-gray-600 dark:text-gray-400 pixel-borders border-t-4 border-black dark:border-[#ff8c00] bg-black/5 dark:bg-white/5">
        <strong className="pixel-font">Classification:</strong> <span className="pixel-font">Internal Use Only</span><br/>
        <strong className="pixel-font">Documentation:</strong> <span className="pixel-font">v0.1 (Draft)</span><br/>
        <strong className="pixel-font">Maintained by:</strong> <span className="pixel-font">&apos;The Interns&apos;</span>
      </footer>
    </Link>,

    <Link
      key="5"
      href="/candidate-dashboard-portal-cards/policy"
      className="flex flex-col h-full pixel-borders border-4 border-black bg-[#fffacd] hover:bg-[#fff5b8] dark:bg-[#1a1a1a] dark:border-[#ff8c00] pixel-shadow-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all overflow-hidden pixel-corners group"
    >
      <Image src="/memes/agree-condition.webp" alt="I read the terms and conditions" width={400} height={200} className="w-full h-48 object-cover pixel-borders border-b-4 border-black dark:border-[#ff8c00] group-hover:brightness-110 transition-all"/>
      <div className="p-6 grow">
        <h2 className="text-xl font-semibold text-black dark:text-[#ffd700] mb-2 pixel-font pixel-text-shadow">
          Company Policy
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
          Mandatory reading. Seriously... *mandatory*.
        </p>
      </div>
      <footer className="p-6 pt-2 text-xs text-gray-600 dark:text-gray-400 pixel-borders border-t-4 border-black dark:border-[#ff8c00] bg-black/5 dark:bg-white/5">
        <strong className="pixel-font">Last Revised:</strong> <span className="pixel-font">2022</span><br/>
        <strong className="pixel-font">Compliance:</strong> <span className="text-[#ff0000] pixel-font">Overdue</span><br/>
        <strong className="pixel-font">File Size:</strong> <span className="pixel-font">2.1MB (PDF)</span>
      </footer>
    </Link>,

    <Link
      key="6"
      href="/candidate-dashboard-portal-cards/internship"
      className="flex flex-col h-full pixel-borders border-4 border-[#ff0000] bg-[#fffacd] hover:bg-[#fff5b8] dark:bg-[#1a1a1a] pixel-shadow-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all overflow-hidden pixel-corners group"
    >
      <Image src="/memes/free-real-estate.webp" alt="It's free real estate meme" width={400} height={200} className="w-full h-48 object-cover pixel-borders border-b-4 border-[#ff0000] group-hover:brightness-110 transition-all"/>
      <div className="p-6 grow">
        <h2 className="text-xl font-semibold text-[#ff0000] mb-2 pixel-font pixel-text-shadow">
          Unpaid Internship
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
          6 months, no pay. Great &apos;exposure&apos;. (Leads to /nalla).
        </p>
      </div>
      <footer className="p-6 pt-2 text-xs text-gray-600 dark:text-gray-400 pixel-borders border-t-4 border-[#ff0000] bg-black/5 dark:bg-white/5">
        <strong className="pixel-font">Applications:</strong> <span className="pixel-font">1,337</span><br/>
        <strong className="pixel-font">Closes:</strong> <span className="pixel-font">Today</span><br/>
        <strong className="pixel-font">Pay:</strong> <span className="pixel-font">₹0.00</span>
      </footer>
    </Link>,

    <Link
      key="7"
      href="/candidate-dashboard-portal-cards/grievance"
      className="flex flex-col h-full pixel-borders border-4 border-black bg-[#fffacd] hover:bg-[#fff5b8] dark:bg-[#1a1a1a] dark:border-[#ff8c00] pixel-shadow-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all overflow-hidden pixel-corners group"
    >
      <Image src="/memes/worthless.webp" alt="This is worthless meme" width={400} height={200} className="w-full h-48 object-cover pixel-borders border-b-4 border-black dark:border-[#ff8c00] group-hover:brightness-110 transition-all"/>
      <div className="p-6 grow">
        <h2 className="text-xl font-semibold text-black dark:text-[#ffd700] mb-2 pixel-font pixel-text-shadow">
          Grievance Form
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
          Why is this public? Seems like a mistake... or a test.
        </p>
      </div>
      <footer className="p-6 pt-2 text-xs text-gray-600 dark:text-gray-400 pixel-borders border-t-4 border-black dark:border-[#ff8c00] bg-black/5 dark:bg-white/5">
        <strong className="pixel-font">Anonymous:</strong> <span className="pixel-font">Yes</span><br/>
        <strong className="pixel-font">Status:</strong> <span className="pixel-font">Unread (99+)</span><br/>
        <strong className="pixel-font">Response Time:</strong> <span className="pixel-font">N/A</span>
      </footer>
    </Link>,

    <Link
      key="8"
      href="/candidate-dashboard-portal-cards/swag-store"
      className="flex flex-col h-full bg-purple-50 hover:bg-purple-100 rounded-lg shadow-sm border border-purple-200 transform hover:-translate-y-1 transition-all overflow-hidden"
    >
      <Image src="/memes/shut-up-take-money.webp" alt="Shut up and take my money meme" width={400} height={200} className="w-full h-48 object-cover"/>
      <div className="p-6 grow">
        <h2 className="text-2xl font-semibold text-purple-800 mb-2">
          Company Swag Store
        </h2>
        <p className="text-purple-700">
          Buy our branded mugs and t-shirts. (Currently &quot;Sold Out&quot;).
        </p>
      </div>
      <footer className="p-6 pt-2 text-sm text-gray-500 border-t border-purple-100">
        <strong>Status:</strong> <span className="font-bold text-red-600">SOLD OUT</span><br/>
        <strong>Next Restock:</strong> TBD<br/>
        <strong>Discount Code:</strong> N/A
      </footer>
    </Link>,

    <Link
      key="9"
      href="/candidate-dashboard-portal-cards/angry-hr-complaint/hr-complaints"
      className="flex flex-col h-full bg-yellow-50 hover:bg-yellow-100 rounded-lg shadow-sm border border-yellow-200 transform hover:-translate-y-1 transition-all overflow-hidden"
    >
      <Image src="/memes/jhethalala-angry.webp" alt="Jethalal Angry Boss Meme" width={400} height={200} className="w-full h-48 object-cover"/>
      <div className="p-6 grow">
        <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
          Anger of HR: Exit Interviews
        </h2>
        <p className="text-yellow-700">
          They forgot to secure these audio files... 👀
        </p>
      </div>
      <footer className="p-6 pt-2 text-sm text-gray-500 border-t border-yellow-100">
        <strong>Status:</strong> <span className="text-red-600 font-bold">CONFIDENTIAL</span><br/>
        <strong>Last Update:</strong> Today<br/>
        <strong>Files:</strong> 11 Audio Recordings
      </footer>
    </Link>,
  ];

  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const shuffle = () => {
      setCards(prev => {
        const arr = [...prev];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.random() * (i + 1) | 0;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      });
    };

    const timer = setInterval(shuffle, 30000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-12 bg-[#000000] dark:bg-[#000000] text-white">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#ff8c00] mb-2 tracking-tight pixel-font">
              Candidate Dashboard
            </h1>
            <p className="text-sm text-gray-400 pixel-font">Welcome, Hacker • Access: <span className="text-[#00ff00] font-semibold">FULL</span></p>
          </div>
          <Link
            href="/candidate-dashboard-portal-cards/task-queue"
            className="flex items-center space-x-3 px-4 py-3 pixel-borders border-4 border-[#ff0000] bg-[#1a1a1a]
                       hover:bg-[#2a2a2a] pixel-shadow-sm
                       transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full pixel-borders bg-[#ff0000] opacity-75"></span>
              <span className="relative inline-flex pixel-borders h-3 w-3 bg-[#ff0000]"></span>
            </span>
            <span className="text-[#ff0000] font-bold text-sm pixel-font">
              9 Urgent Tasks
            </span>
          </Link>
        </div>

        {/* Welcome Message */}
        <div className="pixel-borders border-4 border-[#ff8c00] p-6 pixel-shadow mb-8 bg-[#1a1a1a]">
          <p className="text-base text-white leading-relaxed">
            <span className="font-semibold text-[#ff8c00] pixel-font">Access Granted.</span> You&apos;re in. Good job... hacker. Now the <em className="text-[#ff0000] font-semibold">real</em> test begins. HR has
            flagged the following items for your immediate attention. Choose your
            first task wisely.
          </p>
        </div>

        {/* Company Stats Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pixel-borders border-4 border-[#ffd700] bg-[#1a1a1a] text-white p-5 pixel-shadow-lg mb-10">
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💰</span>
              <div>
                <span className="text-gray-400 text-xs block pixel-font">Company Value</span>
                <span className="text-[#00ff00] font-bold text-lg pixel-font">$4.20B</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📈</span>
              <div>
                <span className="text-gray-400 text-xs block pixel-font">Growth</span>
                <span className="text-[#00ff00] font-bold text-lg pixel-font">+69%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              href="/candidate-dashboard-portal-cards/demo-request"
              className="text-[#ff8c00] hover:text-[#ffd700] font-medium transition-colors flex items-center space-x-1 pixel-font text-xs"
            >
              <span>📞</span>
              <span className="underline">Demo</span>
            </Link>
            <Link 
              href="/candidate-dashboard-portal-cards/annual-report"
              className="text-[#ff8c00] hover:text-[#ffd700] font-medium transition-colors flex items-center space-x-1 pixel-font text-xs"
            >
              <span>📄</span>
              <span className="underline">Report</span>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards}
        </div>
      </div>
    </main>
  );
}

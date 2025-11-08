"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      // Clear all session storage on logout
      sessionStorage.clear();
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] dark:bg-[#000000] pixel-grid pixel-scanlines">
      {/* Top navigation bar */}
      <nav className="bg-[#1a1a1a] pixel-borders border-b-4 border-[#ff8c00] pixel-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/candidate-dashboard-portal-cards"
                className="flex items-center space-x-2 group pixel-font"
              >
                <span className="text-2xl group-hover:pixel-shake transition-transform">🏢</span>
                <span className="text-sm text-[#ffd700] pixel-text-shadow group-hover:text-[#ff8c00] transition-colors">
                  Internal Dashboard
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link 
                href="/leaderboard" 
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#ff8c00] hover:bg-[#ff9f1a] text-white pixel-borders border-3 border-black pixel-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all pixel-font text-xs uppercase"
              >
                <span>🏆</span>
                <span>Leaderboard</span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#ff0000] hover:bg-[#ff3333] text-white pixel-borders border-3 border-black pixel-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center space-x-2 pixel-font text-xs uppercase"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}

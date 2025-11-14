import { CacheManager } from '@/lib/cache';
import Link from 'next/link';
import { PixelButton } from '@/components/ui/pixel/pixel-button';
import { PixelCard, PixelCardContent } from '@/components/ui/pixel/pixel-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leaderboard - Hall of Fame',
  description: 'View the top hackers who conquered the Kya Tumhe Naukri Milegi treasure hunt. Check rankings, scores, and see who made it to the Hall of Fame!',
  openGraph: {
    title: 'Leaderboard - Hall of Fame | Kya Tumhe Naukri Milegi',
    description: 'Top hackers who conquered the treasure hunt challenge. Can you make it to the leaderboard?',
    type: 'website',
  },
};

// Force dynamic rendering due to Redis usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getLeaderboard() {
  try {
    const leaders = await CacheManager.getLeaderboard(50); // Top 50 users with caching
    return leaders;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
}

export default async function LeaderboardPage() {
  const leaders = await getLeaderboard();

  return (
    <main className="min-h-screen bg-pixel-dark-bg dark:bg-pixel-dark-bg text-white p-6 md:p-8 lg:p-12 pixel-grid pixel-scanlines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pixel-dark-secondary pixel-font pixel-glow-text">
            🏆 Hall of Fame 🏆
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl pixel-font leading-relaxed">
            Top hackers who conquered the treasure hunt
          </p>
          <div className="pixel-divider max-w-md mx-auto mt-6"></div>
        </header>

        {/* Leaderboard */}
        <PixelCard className="overflow-hidden pixel-glow">
          {/* Table Header */}
          <div className="pixel-borders border-b-4 border-pixel-dark-primary bg-pixel-dark-surface px-4 md:px-6 py-4 pixel-outline">
            <div className="grid grid-cols-12 gap-2 md:gap-4 font-bold text-xs uppercase tracking-wider pixel-font">
              <div className="col-span-1 text-center">Rank</div>
              <div className="col-span-4">Name</div>
              <div className="col-span-2 text-center">Paths</div>
              <div className="col-span-3 text-center">Points</div>
              <div className="col-span-2 text-center hidden md:block">Date</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-700">
            {leaders.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-400">
                <p className="text-xl pixel-font">No one completed yet!</p>
                <p className="mt-2 pixel-font">Be the first! 🚀</p>
              </div>
            ) : (
              leaders.map((winner, index) => {
                const rank = index + 1;
                const getRankEmoji = () => {
                  if (rank === 1) return '🥇';
                  if (rank === 2) return '🥈';
                  if (rank === 3) return '🥉';
                  return `#${rank}`;
                };

                const getRankColor = () => {
                  if (rank === 1) return 'text-pixel-dark-secondary font-bold text-xl md:text-2xl';
                  if (rank === 2) return 'text-gray-300 font-bold text-lg md:text-xl';
                  if (rank === 3) return 'text-pixel-dark-primary font-bold text-lg md:text-xl';
                  return 'text-gray-500';
                };

                return (
                  <div
                    key={winner._id?.toString() || index}
                    className={`grid grid-cols-12 gap-2 md:gap-4 px-4 md:px-6 py-4 hover:bg-pixel-dark-surface transition-all border-b border-gray-800 last:border-b-0 ${
                      rank <= 3 ? 'bg-pixel-dark-surface/50 pixel-glow' : ''
                    }`}
                  >
                    {/* Rank */}
                    <div className={`col-span-1 text-center ${getRankColor()} flex items-center justify-center pixel-font`}>
                      {getRankEmoji()}
                    </div>

                    {/* Name */}
                    <div className="col-span-4 flex items-center">
                      <span className={`font-semibold pixel-font text-sm md:text-base ${rank <= 3 ? 'md:text-lg pixel-text-shadow' : ''}`}>
                        {winner.name}
                      </span>
                    </div>

                    {/* Paths Completed */}
                    <div className="col-span-2 text-center flex items-center justify-center">
                      <div className="flex items-center gap-1 md:gap-2">
                        <span className="text-pixel-dark-primary font-mono text-base md:text-lg pixel-font">
                          {winner.completedPaths?.length || 0}
                        </span>
                        <span className="text-gray-400 text-xs md:text-sm pixel-font">/ 8</span>
                      </div>
                    </div>

                    {/* Total Points */}
                    <div className="col-span-3 text-center flex items-center justify-center">
                      <div className="pixel-borders border-2 border-pixel-dark-success bg-pixel-dark-success/20 px-2 md:px-4 py-1 md:py-2 pixel-shadow-sm hover:pixel-glow transition-all">
                        <span className="font-bold text-sm md:text-lg text-pixel-dark-success pixel-font">
                          {winner.totalPoints || 0}
                        </span>
                        <span className="text-xs ml-1 text-gray-300 pixel-font hidden md:inline">pts</span>
                      </div>
                    </div>

                    {/* Last Activity */}
                    <div className="col-span-2 text-center text-gray-400 text-xs hidden md:flex items-center justify-center pixel-font">
                      {winner.lastUpdated 
                        ? new Date(winner.lastUpdated).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        : 'N/A'
                      }
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </PixelCard>

        {/* Stats Footer */}
        {leaders.length > 0 && (
          <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PixelCard className="text-center pixel-pulse">
              <PixelCardContent className="pt-6">
                <div className="text-2xl md:text-3xl font-bold text-pixel-dark-secondary pixel-font pixel-text-shadow">
                  {leaders.length}
                </div>
                <div className="text-gray-400 mt-2 text-xs md:text-sm pixel-font">Total Participants</div>
              </PixelCardContent>
            </PixelCard>
            
            <PixelCard className="text-center pixel-pulse" style={{ animationDelay: '0.2s' }}>
              <PixelCardContent className="pt-6">
                <div className="text-2xl md:text-3xl font-bold text-pixel-dark-success pixel-font pixel-text-shadow">
                  {leaders[0]?.totalPoints || 0}
                </div>
                <div className="text-gray-400 mt-2 text-xs md:text-sm pixel-font">Highest Score</div>
              </PixelCardContent>
            </PixelCard>
            
            <PixelCard className="text-center pixel-pulse" style={{ animationDelay: '0.4s' }}>
              <PixelCardContent className="pt-6">
                <div className="text-2xl md:text-3xl font-bold text-pixel-dark-primary pixel-font pixel-text-shadow">
                  {Math.max(...leaders.map(l => l.completedPaths?.length || 0), 0)}
                </div>
                <div className="text-gray-400 mt-2 text-xs md:text-sm pixel-font">Most Paths</div>
              </PixelCardContent>
            </PixelCard>
          </section>
        )}

        {/* Back Button */}
        <footer className="mt-8 text-center">
          <Link href="/">
            <PixelButton size="lg" className="pixel-press">
              ← Back to Home
            </PixelButton>
          </Link>
        </footer>
      </div>
    </main>
  );
}

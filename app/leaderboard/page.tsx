import { CacheManager } from '@/lib/cache';
import Link from 'next/link';
import { PixelButton } from '@/components/ui/pixel/pixel-button';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/ui/pixel/pixel-card';

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
    <main className="min-h-screen bg-[#000000] dark:bg-[#000000] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#ffd700] pixel-font">
            Hall of Fame
          </h1>
          <p className="text-gray-300 text-lg">
            Top hackers who conquered the treasure hunt
          </p>
        </div>

        {/* Leaderboard */}
        <PixelCard className="overflow-hidden">
          {/* Table Header */}
          <div className="pixel-borders border-b-4 border-[#ff8c00] bg-[#1a1a1a] px-6 py-4">
            <div className="grid grid-cols-12 gap-4 font-bold text-xs uppercase tracking-wider pixel-font">
              <div className="col-span-1 text-center">Rank</div>
              <div className="col-span-4">Name</div>
              <div className="col-span-2 text-center">Paths</div>
              <div className="col-span-3 text-center">Points</div>
              <div className="col-span-2 text-center">Date</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-700">
            {leaders.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-400">
                <p className="text-xl pixel-font">No one completed yet!</p>
                <p className="mt-2">Be the first! 🚀</p>
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
                  if (rank === 1) return 'text-[#ffd700] font-bold text-2xl';
                  if (rank === 2) return 'text-gray-300 font-bold text-xl';
                  if (rank === 3) return 'text-[#ff8c00] font-bold text-xl';
                  return 'text-gray-500';
                };

                return (
                  <div
                    key={winner._id?.toString() || index}
                    className={`grid grid-cols-12 gap-4 px-6 py-4 hover:bg-[#1a1a1a] transition-colors ${
                      rank <= 3 ? 'bg-[#1a1a1a]/50' : ''
                    }`}
                  >
                    {/* Rank */}
                    <div className={`col-span-1 text-center ${getRankColor()} flex items-center justify-center`}>
                      {getRankEmoji()}
                    </div>

                    {/* Name */}
                    <div className="col-span-4 flex items-center">
                      <span className={`font-semibold ${rank <= 3 ? 'text-lg' : ''}`}>
                        {winner.name}
                      </span>
                    </div>

                    {/* Paths Completed */}
                    <div className="col-span-2 text-center flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-[#ff8c00] font-mono text-lg">
                          {winner.completedPaths?.length || 0}
                        </span>
                        <span className="text-gray-400 text-sm">/ 8</span>
                      </div>
                    </div>

                    {/* Total Points */}
                    <div className="col-span-3 text-center flex items-center justify-center">
                      <div className="pixel-borders border-2 border-[#00ff00] bg-[#00ff00]/20 px-4 py-2">
                        <span className="font-bold text-lg text-[#00ff00] pixel-font">
                          {winner.totalPoints || 0}
                        </span>
                        <span className="text-sm ml-1 text-gray-300">pts</span>
                      </div>
                    </div>

                    {/* Last Activity */}
                    <div className="col-span-2 text-center text-gray-400 text-xs flex items-center justify-center">
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
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PixelCard className="text-center">
              <PixelCardContent className="pt-6">
                <div className="text-3xl font-bold text-[#ffd700] pixel-font">
                  {leaders.length}
                </div>
                <div className="text-gray-400 mt-1 text-sm">Total Participants</div>
              </PixelCardContent>
            </PixelCard>
            
            <PixelCard className="text-center">
              <PixelCardContent className="pt-6">
                <div className="text-3xl font-bold text-[#00ff00] pixel-font">
                  {leaders[0]?.totalPoints || 0}
                </div>
                <div className="text-gray-400 mt-1 text-sm">Highest Score</div>
              </PixelCardContent>
            </PixelCard>
            
            <PixelCard className="text-center">
              <PixelCardContent className="pt-6">
                <div className="text-3xl font-bold text-[#ff8c00] pixel-font">
                  {Math.max(...leaders.map(l => l.completedPaths?.length || 0), 0)}
                </div>
                <div className="text-gray-400 mt-1 text-sm">Most Paths</div>
              </PixelCardContent>
            </PixelCard>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link href="/">
            <PixelButton size="lg">
              Back to Home
            </PixelButton>
          </Link>
        </div>
      </div>
    </main>
  );
}

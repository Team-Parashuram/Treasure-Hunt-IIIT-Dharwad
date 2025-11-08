import Image from 'next/image';
import Link from 'next/link';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/ui/pixel/pixel-card';
import { PixelBadge } from '@/components/ui/pixel/pixel-badge';

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <PixelCard>
          <PixelCardContent className="p-8">
            <h1 className="text-4xl font-bold mb-6 text-[#ffd700] pixel-font">
              Our Revolutionary Tech Stack
            </h1>
            <p className="text-gray-300 mb-4">
              Leveraging cutting-edge AI-driven blockchain solutions in a cloud-native environment 
              to maximize synergy and optimize stakeholder value through quantum machine learning algorithms.
            </p>
            <div className="flex gap-4 text-sm flex-wrap">
              <PixelBadge variant="default">Cloud-Native</PixelBadge>
              <PixelBadge variant="success">AI-Powered</PixelBadge>
              <PixelBadge variant="warning">Blockchain-Enabled</PixelBadge>
              <PixelBadge variant="error">Quantum-Ready</PixelBadge>
            </div>
          </PixelCardContent>
        </PixelCard>

        {/* Award Section */}
        <PixelCard>
          <PixelCardContent className="p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="space-y-4 flex-1">
                <h2 className="text-2xl font-bold text-[#ffd700] pixel-font">
                  Press Release: Innovation Award Winner 2025
                </h2>
                <p className="text-gray-300">
                  We are thrilled to announce we&apos;ve won the &apos;Innovator of the Year&apos; 
                  award for our new internal platform! This AI-driven tool is a game-changer. 
                  To honor our developers, we&apos;ve named the platform with a riddle:
                </p>
                <blockquote className="text-gray-200 pixel-borders border-l-4 border-[#00ff00] pl-4 italic">
                  &quot;I have cities, but no houses. I have mountains, but no trees. 
                  I have water, but no fish. What am I?&quot;
                </blockquote>
              </div>
              <Image 
                src="/memes/winner-tfg-ANSWER=1984.jpg" 
                alt="Our team accepting the prestigious award"
                width={300}
                height={200}
                className="pixel-borders"
              />
            </div>
          </PixelCardContent>
        </PixelCard>

        {/* Internal Tools Section */}
        <PixelCard>
          <PixelCardHeader>
            <PixelCardTitle className="text-2xl">
              Internal Company Tools
            </PixelCardTitle>
          </PixelCardHeader>
          <PixelCardContent className="space-y-4">
            <Link 
              href="/candidate-dashboard-portal-cards/stack/ai-matrix"
              className="block p-4 pixel-borders border-4 border-[#ff8c00] hover:bg-[#ff8c00]/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-[#ffd700] pixel-font">
                AI-Synergy Matrix (v3.0)
              </h3>
              <p className="text-gray-300">
                Quantum-blockchain powered employee performance analyzer.
              </p>
            </Link>

            <Link 
              href="/candidate-dashboard-portal-cards/stack/directory"
              className="block p-4 pixel-borders border-4 border-[#ff8c00] hover:bg-[#ff8c00]/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-[#ffd700] pixel-font">
                Cloud-Native Employee Directory
              </h3>
              <p className="text-gray-300">
                Web3-enabled staff lookup system with ML-based search.
              </p>
            </Link>

            <Link 
              href="/candidate-dashboard-portal-cards/stack/map-tool"
              className="block p-4 pixel-borders border-4 border-[#ff8c00] hover:bg-[#ff8c00]/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-[#ffd700] pixel-font flex items-center">
                Legacy Mapping Tool
                <PixelBadge variant="warning" className="ml-2 text-xs">
                  v1.2 - DEPRECATED
                </PixelBadge>
              </h3>
              <p className="text-gray-300">
                Old school resource allocation visualizer.
              </p>
            </Link>
          </PixelCardContent>
        </PixelCard>

        {/* Fake Architecture Diagram */}
        <PixelCard>
          <PixelCardHeader>
            <PixelCardTitle className="text-2xl">
              System Architecture
            </PixelCardTitle>
          </PixelCardHeader>
          <PixelCardContent>
            <div className="p-8 pixel-borders border-4 border-dashed border-[#ff8c00] text-center text-gray-400 pixel-font">
              [Diagram removed for security reasons. Please file a ticket with IT.]
            </div>
          </PixelCardContent>
        </PixelCard>
      </div>
    </main>
  );
}
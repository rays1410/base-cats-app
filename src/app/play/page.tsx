import { GameUI } from '@/components/GameUI';
import Link from 'next/link';

export default function PlayPage() {
  return (
    <div className="relative">
      {/* Back to home link */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-700/80 transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </Link>

      <GameUI />
    </div>
  );
}

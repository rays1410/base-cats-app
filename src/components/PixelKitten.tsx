'use client';

import { KittenState, KittenTraits } from '@/types/game';

interface PixelKittenProps {
  state: KittenState;
  traits: KittenTraits;
  className?: string;
}

// Helper to create inline style with color
const bgColor = (hex: string) => ({ backgroundColor: hex });
const borderColor = (hex: string) => ({ borderBottomColor: hex });

// Component for each kitten state that uses dynamic colors from traits
function HappyKitten({ traits }: { traits: KittenTraits }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Body */}
      <div
        className="absolute w-20 h-16 rounded-3xl bottom-4"
        style={bgColor(traits.bodyColor.hex)}
      />
      {/* Paws */}
      <div
        className="absolute w-4 h-4 rounded-full bottom-2 left-8"
        style={bgColor(traits.pawColor.hex)}
      />
      <div
        className="absolute w-4 h-4 rounded-full bottom-2 right-8"
        style={bgColor(traits.pawColor.hex)}
      />
      {/* Head */}
      <div
        className="absolute w-16 h-14 rounded-full top-2"
        style={bgColor(traits.headColor.hex)}
      />
      {/* Ears */}
      <div
        className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent top-0 left-6"
        style={borderColor(traits.earColor.hex)}
      />
      <div
        className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent top-0 right-6"
        style={borderColor(traits.earColor.hex)}
      />
      {/* Inner ears */}
      <div className="absolute w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-pink-300 top-1 left-7" />
      <div className="absolute w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-pink-300 top-1 right-7" />
      {/* Eyes - happy (^_^) */}
      <div
        className="absolute w-3 h-1 rounded-full top-7 left-8 rotate-12"
        style={bgColor(traits.eyeColor.hex)}
      />
      <div
        className="absolute w-3 h-1 rounded-full top-7 right-8 -rotate-12"
        style={bgColor(traits.eyeColor.hex)}
      />
      {/* Nose */}
      <div
        className="absolute w-2 h-1.5 rounded-full top-10 left-1/2 -translate-x-1/2"
        style={bgColor(traits.noseColor.hex)}
      />
      {/* Mouth - smile */}
      <div className="absolute w-4 h-2 border-b-2 border-gray-800 rounded-b-full top-11 left-1/2 -translate-x-1/2" />
      {/* Whiskers */}
      <div className="absolute w-6 h-0.5 bg-gray-600 top-10 left-0 -rotate-6" />
      <div className="absolute w-6 h-0.5 bg-gray-600 top-11 left-0" />
      <div className="absolute w-6 h-0.5 bg-gray-600 top-10 right-0 rotate-6" />
      <div className="absolute w-6 h-0.5 bg-gray-600 top-11 right-0" />
      {/* Tail - wagging */}
      <div
        className="absolute w-3 h-12 rounded-full -right-2 bottom-8 rotate-45 animate-wag origin-bottom"
        style={bgColor(traits.tailColor.hex)}
      />
    </div>
  );
}

function HungryKitten({ traits }: { traits: KittenTraits }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Body - slightly thinner */}
      <div
        className="absolute w-18 h-14 rounded-3xl bottom-4"
        style={bgColor(traits.bodyColor.hex)}
      />
      {/* Paws */}
      <div
        className="absolute w-3 h-3 rounded-full bottom-2 left-9"
        style={bgColor(traits.pawColor.hex)}
      />
      <div
        className="absolute w-3 h-3 rounded-full bottom-2 right-9"
        style={bgColor(traits.pawColor.hex)}
      />
      {/* Head */}
      <div
        className="absolute w-16 h-14 rounded-full top-2"
        style={bgColor(traits.headColor.hex)}
      />
      {/* Ears - droopy */}
      <div
        className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent top-1 left-5 -rotate-12"
        style={borderColor(traits.earColor.hex)}
      />
      <div
        className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent top-1 right-5 rotate-12"
        style={borderColor(traits.earColor.hex)}
      />
      {/* Inner ears */}
      <div className="absolute w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-pink-300 top-2 left-6 -rotate-12" />
      <div className="absolute w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-pink-300 top-2 right-6 rotate-12" />
      {/* Eyes - big pleading eyes */}
      <div
        className="absolute w-4 h-4 rounded-full top-6 left-7"
        style={bgColor(traits.eyeColor.hex)}
      >
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-0.5 left-0.5" />
      </div>
      <div
        className="absolute w-4 h-4 rounded-full top-6 right-7"
        style={bgColor(traits.eyeColor.hex)}
      >
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-0.5 left-0.5" />
      </div>
      {/* Nose */}
      <div
        className="absolute w-2 h-1.5 rounded-full top-10 left-1/2 -translate-x-1/2"
        style={bgColor(traits.noseColor.hex)}
      />
      {/* Mouth - meowing */}
      <div className="absolute w-3 h-3 bg-pink-300 rounded-full top-11 left-1/2 -translate-x-1/2 border-2 border-gray-800" />
      {/* Whiskers */}
      <div className="absolute w-6 h-0.5 bg-gray-600 top-10 left-0 -rotate-6" />
      <div className="absolute w-6 h-0.5 bg-gray-600 top-11 left-0" />
      <div className="absolute w-6 h-0.5 bg-gray-600 top-10 right-0 rotate-6" />
      <div className="absolute w-6 h-0.5 bg-gray-600 top-11 right-0" />
      {/* Tail - down */}
      <div
        className="absolute w-3 h-10 rounded-full -right-1 bottom-4 rotate-12"
        style={bgColor(traits.tailColor.hex)}
      />
    </div>
  );
}

function SadKitten({ traits }: { traits: KittenTraits }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Body */}
      <div
        className="absolute w-20 h-16 rounded-3xl bottom-4"
        style={bgColor(traits.bodyColor.hex)}
      />
      {/* Paws */}
      <div
        className="absolute w-4 h-4 rounded-full bottom-2 left-8"
        style={bgColor(traits.pawColor.hex)}
      />
      <div
        className="absolute w-4 h-4 rounded-full bottom-2 right-8"
        style={bgColor(traits.pawColor.hex)}
      />
      {/* Head - tilted down slightly */}
      <div
        className="absolute w-16 h-14 rounded-full top-4"
        style={bgColor(traits.headColor.hex)}
      />
      {/* Ears - very droopy */}
      <div
        className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent top-3 left-4 -rotate-25"
        style={borderColor(traits.earColor.hex)}
      />
      <div
        className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent top-3 right-4 rotate-25"
        style={borderColor(traits.earColor.hex)}
      />
      {/* Inner ears */}
      <div className="absolute w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-pink-300 top-4 left-5 -rotate-25" />
      <div className="absolute w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-pink-300 top-4 right-5 rotate-25" />
      {/* Eyes - sad with tears */}
      <div
        className="absolute w-3 h-3 rounded-full top-8 left-8"
        style={bgColor(traits.eyeColor.hex)}
      >
        <div className="absolute w-1 h-1 bg-white rounded-full top-0.5 left-0.5" />
      </div>
      <div
        className="absolute w-3 h-3 rounded-full top-8 right-8"
        style={bgColor(traits.eyeColor.hex)}
      >
        <div className="absolute w-1 h-1 bg-white rounded-full top-0.5 left-0.5" />
      </div>
      {/* Tears */}
      <div className="absolute w-1.5 h-3 bg-blue-300 rounded-full top-11 left-9 animate-bounce" />
      <div className="absolute w-1.5 h-3 bg-blue-300 rounded-full top-12 right-9 animate-bounce delay-100" />
      {/* Nose */}
      <div
        className="absolute w-2 h-1.5 rounded-full top-12 left-1/2 -translate-x-1/2"
        style={bgColor(traits.noseColor.hex)}
      />
      {/* Mouth - frown */}
      <div className="absolute w-4 h-2 border-t-2 border-gray-800 rounded-t-full top-14 left-1/2 -translate-x-1/2" />
      {/* Whiskers - droopy */}
      <div className="absolute w-6 h-0.5 bg-gray-600 top-12 left-0 rotate-12" />
      <div className="absolute w-6 h-0.5 bg-gray-600 top-13 left-0 rotate-6" />
      <div className="absolute w-6 h-0.5 bg-gray-600 top-12 right-0 -rotate-12" />
      <div className="absolute w-6 h-0.5 bg-gray-600 top-13 right-0 -rotate-6" />
      {/* Tail - curled down */}
      <div
        className="absolute w-3 h-8 rounded-full -right-1 bottom-2"
        style={bgColor(traits.tailColor.hex)}
      />
    </div>
  );
}

function SleepingKitten({ traits }: { traits: KittenTraits }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Body - curled up */}
      <div
        className="absolute w-24 h-12 rounded-full bottom-4"
        style={bgColor(traits.bodyColor.hex)}
      />
      {/* Paws - tucked in */}
      <div
        className="absolute w-3 h-3 rounded-full bottom-3 left-12"
        style={bgColor(traits.pawColor.hex)}
      />
      {/* Head - resting */}
      <div
        className="absolute w-14 h-12 rounded-full top-6 left-2"
        style={bgColor(traits.headColor.hex)}
      />
      {/* Ears - relaxed */}
      <div
        className="absolute w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent top-2 left-4"
        style={borderColor(traits.earColor.hex)}
      />
      <div
        className="absolute w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent top-2 left-12"
        style={borderColor(traits.earColor.hex)}
      />
      {/* Inner ears */}
      <div className="absolute w-0 h-0 border-l-[4px] border-r-[4px] border-b-[7px] border-l-transparent border-r-transparent border-b-pink-300 top-3 left-5" />
      <div className="absolute w-0 h-0 border-l-[4px] border-r-[4px] border-b-[7px] border-l-transparent border-r-transparent border-b-pink-300 top-3 left-13" />
      {/* Eyes - closed (lines) */}
      <div
        className="absolute w-3 h-0.5 rounded-full top-9 left-5"
        style={bgColor(traits.eyeColor.hex)}
      />
      <div
        className="absolute w-3 h-0.5 rounded-full top-9 left-11"
        style={bgColor(traits.eyeColor.hex)}
      />
      {/* Nose */}
      <div
        className="absolute w-1.5 h-1 rounded-full top-11 left-8"
        style={bgColor(traits.noseColor.hex)}
      />
      {/* Mouth - peaceful */}
      <div className="absolute w-3 h-1 border-b border-gray-600 rounded-b-full top-12 left-7" />
      {/* Tail - wrapped around */}
      <div
        className="absolute w-10 h-3 rounded-full bottom-6 right-2 rotate-12"
        style={bgColor(traits.tailColor.hex)}
      />
      {/* Zzz */}
      <div className="absolute top-0 right-4 text-blue-400 font-bold text-lg animate-pulse">
        z<span className="text-base">z</span>
        <span className="text-sm">z</span>
      </div>
    </div>
  );
}

export function PixelKitten({ state, traits, className = '' }: PixelKittenProps) {
  const KittenByState: Record<KittenState, React.ReactNode> = {
    happy: <HappyKitten traits={traits} />,
    hungry: <HungryKitten traits={traits} />,
    sad: <SadKitten traits={traits} />,
    sleeping: <SleepingKitten traits={traits} />,
  };

  return <div className={`relative ${className}`}>{KittenByState[state]}</div>;
}

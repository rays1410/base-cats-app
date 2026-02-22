'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Animated cat silhouettes for background
function FloatingCat({ delay, size, left, top }: { delay: number; size: number; left: string; top: string }) {
  return (
    <div
      className="absolute opacity-10 animate-float"
      style={{
        left,
        top,
        animationDelay: `${delay}s`,
        fontSize: `${size}rem`,
      }}
    >
      🐱
    </div>
  );
}

// Hero cat showcase component
function HeroCat({ color, rotation, delay }: { color: string; rotation: number; delay: number }) {
  return (
    <div
      className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl animate-float-slow shadow-2xl"
      style={{
        backgroundColor: color,
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl">
        🐱
      </div>
    </div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-black to-black" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000" />

      {/* Floating cats in background */}
      {mounted && (
        <>
          <FloatingCat delay={0} size={3} left="10%" top="20%" />
          <FloatingCat delay={1} size={2} left="85%" top="30%" />
          <FloatingCat delay={2} size={2.5} left="15%" top="70%" />
          <FloatingCat delay={3} size={2} left="80%" top="75%" />
          <FloatingCat delay={4} size={3} left="50%" top="10%" />
        </>
      )}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-400 text-sm font-medium">Live on Base Network</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 text-transparent bg-clip-text">
                Digital Pets
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              BaseCats is a collection of unique, generative cats living on the Base blockchain.
              Adopt, nurture, and watch your companion thrive in the decentralized world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/play"
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
              >
                <span className="relative z-10">Adopt Your Cat</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <a
                href="#collection"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Collection
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">10K</div>
                <div className="text-sm text-gray-500">Total Supply</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">256</div>
                <div className="text-sm text-gray-500">Unique Traits</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">Base</div>
                <div className="text-sm text-gray-500">Network</div>
              </div>
            </div>
          </div>

          {/* Cat showcase */}
          <div className={`relative h-96 lg:h-[500px] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main featured cat */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-blue-500 to-violet-600 rounded-3xl shadow-2xl shadow-blue-500/30 animate-float-slow">
              <div className="w-full h-full flex items-center justify-center text-7xl sm:text-8xl">
                🐱
              </div>
            </div>

            {/* Surrounding cats */}
            <div className="absolute left-[10%] top-[15%]">
              <HeroCat color="#F59E0B" rotation={-12} delay={0.5} />
            </div>
            <div className="absolute right-[10%] top-[20%]">
              <HeroCat color="#10B981" rotation={8} delay={1} />
            </div>
            <div className="absolute left-[5%] bottom-[20%]">
              <HeroCat color="#EC4899" rotation={-8} delay={1.5} />
            </div>
            <div className="absolute right-[15%] bottom-[15%]">
              <HeroCat color="#8B5CF6" rotation={12} delay={2} />
            </div>

            {/* Decorative elements */}
            <div className="absolute left-0 top-1/4 w-20 h-20 border border-blue-500/20 rounded-2xl rotate-12" />
            <div className="absolute right-0 bottom-1/4 w-16 h-16 border border-violet-500/20 rounded-xl -rotate-12" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-sm">Scroll</span>
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

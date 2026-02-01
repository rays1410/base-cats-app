'use client';

import { useEffect, useRef, useState } from 'react';

// Sample collection items with different rarity colors
const collectionItems = [
  { id: 1, name: 'BaseCat #001', rarity: 'Legendary', color: '#F59E0B', bg: 'from-amber-500/20 to-orange-500/20' },
  { id: 2, name: 'BaseCat #042', rarity: 'Epic', color: '#8B5CF6', bg: 'from-violet-500/20 to-purple-500/20' },
  { id: 3, name: 'BaseCat #108', rarity: 'Rare', color: '#3B82F6', bg: 'from-blue-500/20 to-cyan-500/20' },
  { id: 4, name: 'BaseCat #256', rarity: 'Common', color: '#9CA3AF', bg: 'from-gray-500/20 to-slate-500/20' },
  { id: 5, name: 'BaseCat #333', rarity: 'Epic', color: '#EC4899', bg: 'from-pink-500/20 to-rose-500/20' },
  { id: 6, name: 'BaseCat #512', rarity: 'Uncommon', color: '#10B981', bg: 'from-emerald-500/20 to-green-500/20' },
  { id: 7, name: 'BaseCat #777', rarity: 'Legendary', color: '#F43F5E', bg: 'from-rose-500/20 to-red-500/20' },
  { id: 8, name: 'BaseCat #888', rarity: 'Rare', color: '#06B6D4', bg: 'from-cyan-500/20 to-teal-500/20' },
];

function CollectionCard({ item, index }: { item: typeof collectionItems[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const rarityColors: Record<string, string> = {
    Legendary: 'text-amber-400 bg-amber-500/20',
    Epic: 'text-violet-400 bg-violet-500/20',
    Rare: 'text-blue-400 bg-blue-500/20',
    Uncommon: 'text-green-400 bg-green-500/20',
    Common: 'text-gray-400 bg-gray-500/20',
  };

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-3xl overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
      <div className="absolute inset-0 bg-black/40" />

      {/* Card content */}
      <div className="relative p-6">
        {/* Cat display */}
        <div
          className="aspect-square rounded-2xl mb-4 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundColor: item.color + '30' }}
        >
          <span className="drop-shadow-lg">🐱</span>
        </div>

        {/* Info */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-semibold">{item.name}</h4>
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${rarityColors[item.rarity]}`}>
              {item.rarity}
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-300" />
    </div>
  );
}

export function CollectionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="collection" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
            <span className="text-violet-400 text-sm font-medium">The Collection</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            10,000 Unique
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 text-transparent bg-clip-text">
              BaseCats
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Each BaseCat is unique, algorithmically generated from over 256 traits
            across multiple categories. Find your perfect companion.
          </p>
        </div>

        {/* Collection grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {collectionItems.map((item, index) => (
            <CollectionCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View all button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            View Full Collection
          </button>
        </div>

        {/* Rarity guide */}
        <div className={`mt-16 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { name: 'Common', color: 'bg-gray-400', percent: '40%' },
            { name: 'Uncommon', color: 'bg-green-400', percent: '30%' },
            { name: 'Rare', color: 'bg-blue-400', percent: '18%' },
            { name: 'Epic', color: 'bg-violet-400', percent: '10%' },
            { name: 'Legendary', color: 'bg-amber-400', percent: '2%' },
          ].map((rarity) => (
            <div key={rarity.name} className="flex items-center gap-3">
              <div className={`w-3 h-3 ${rarity.color} rounded-full`} />
              <span className="text-gray-400 text-sm">
                {rarity.name} <span className="text-gray-600">({rarity.percent})</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

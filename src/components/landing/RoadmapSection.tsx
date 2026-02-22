'use client';

import { useEffect, useRef, useState } from 'react';

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Genesis',
    status: 'completed',
    items: [
      'Concept & Art Development',
      'Smart Contract Development',
      'Community Building',
      'Website Launch',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Launch',
    status: 'active',
    items: [
      'Whitelist Mint',
      'Public Mint',
      'Marketplace Integration',
      'Reveal & Rarity System',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Evolution',
    status: 'upcoming',
    items: [
      'Interactive Gameplay Launch',
      'Breeding System',
      'Cat Accessories & Upgrades',
      'Mobile App Development',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    status: 'upcoming',
    items: [
      'Metaverse Integration',
      'Cross-chain Expansion',
      'Community Governance',
      'IRL Events & Merchandise',
    ],
  },
];

function RoadmapCard({ phase, index }: { phase: typeof roadmapPhases[0]; index: number }) {
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

  const statusStyles = {
    completed: 'border-green-500/50 bg-green-500/5',
    active: 'border-blue-500/50 bg-blue-500/5 ring-2 ring-blue-500/20',
    upcoming: 'border-white/10 bg-white/5',
  };

  const statusBadge = {
    completed: 'bg-green-500/20 text-green-400',
    active: 'bg-blue-500/20 text-blue-400',
    upcoming: 'bg-white/10 text-gray-400',
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Connector line */}
      {index < roadmapPhases.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-white/20 to-transparent" />
      )}

      <div className={`relative p-8 rounded-3xl border ${statusStyles[phase.status as keyof typeof statusStyles]}`}>
        {/* Phase badge */}
        <div className="flex items-center justify-between mb-6">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge[phase.status as keyof typeof statusBadge]}`}>
            {phase.status === 'completed' && '✓ '}
            {phase.status === 'active' && '● '}
            {phase.phase}
          </span>
          {phase.status === 'active' && (
            <span className="flex items-center gap-1.5 text-xs text-blue-400">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              In Progress
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-6">{phase.title}</h3>

        {/* Items */}
        <ul className="space-y-3">
          {phase.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 ${
                phase.status === 'completed'
                  ? 'bg-green-500/20 text-green-400'
                  : phase.status === 'active' && i === 0
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-white/10 text-gray-500'
              }`}>
                {phase.status === 'completed' || (phase.status === 'active' && i === 0) ? '✓' : '○'}
              </div>
              <span className={phase.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-300'}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function RoadmapSection() {
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
    <section id="roadmap" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm font-medium">Roadmap</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Journey
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Together
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We have ambitious plans for BaseCats. Here's what we're building and where we're headed.
          </p>
        </div>

        {/* Roadmap grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapPhases.map((phase, index) => (
            <RoadmapCard key={phase.phase} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

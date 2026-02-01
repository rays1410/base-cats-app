'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '🎨',
    title: 'Unique Art',
    description: 'Each BaseCat is algorithmically generated with over 256 possible trait combinations, making your cat truly one-of-a-kind.',
  },
  {
    icon: '🎮',
    title: 'Interactive Gameplay',
    description: 'Your BaseCat is alive! Feed, play, and care for your digital companion. Watch them grow and evolve over time.',
  },
  {
    icon: '⛓️',
    title: 'On-Chain Forever',
    description: 'Built on Base network for low fees and fast transactions. Your cat lives on the blockchain, forever.',
  },
  {
    icon: '🏆',
    title: 'Earn Rewards',
    description: 'Take good care of your cat and earn exclusive rewards. Happy cats mean happy owners.',
  },
];

function FeatureCard({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) {
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

  return (
    <div
      ref={cardRef}
      className={`group relative p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">Why BaseCats?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            More Than Just
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
              Digital Collectibles
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            BaseCats combines beautiful generative art with interactive gameplay.
            Your cat is not just a picture — it's a living companion that needs your care.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>

        {/* Additional info */}
        <div className={`mt-20 grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Built for the Community
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              BaseCats is more than a project — it's a movement. We believe in creating value for our community
              through exclusive benefits, governance rights, and continuous development.
            </p>
            <ul className="space-y-4">
              {['Community-driven development', 'Fair launch, no team allocation', 'Transparent roadmap', 'Active Discord community'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-xs">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-80 lg:h-96">
            {/* Decorative cat grid */}
            <div className="absolute inset-0 grid grid-cols-3 gap-4">
              {['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#6366F1', '#F43F5E', '#84CC16'].map((color, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden animate-float-slow"
                  style={{
                    backgroundColor: color + '20',
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-60">
                    🐱
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

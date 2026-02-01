'use client';

import { useEffect, useRef, useState } from 'react';

const socialLinks = [
  {
    name: 'Discord',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
    href: '#',
    color: 'hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/50',
    members: '15K+',
  },
  {
    name: 'Twitter',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: '#',
    color: 'hover:bg-white/20 hover:text-white hover:border-white/50',
    members: '25K+',
  },
  {
    name: 'Telegram',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    href: '#',
    color: 'hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/50',
    members: '10K+',
  },
];

export function CommunitySection() {
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
    <section id="community" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-6">
              <span className="text-pink-400 text-sm font-medium">Join the Family</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Be Part of
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 text-transparent bg-clip-text">
                Something Special
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Join thousands of cat lovers in our growing community. Share your BaseCats,
              participate in events, and help shape the future of the project.
            </p>

            {/* Community stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '50K+', label: 'Community Members' },
                { value: '5K+', label: 'Holders' },
                { value: '100+', label: 'Countries' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-400 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                  <span className="font-medium">{social.name}</span>
                  <span className="text-xs opacity-60">{social.members}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Large decorative cat */}
            <div className="relative h-96 flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-orange-500/20 rounded-full blur-3xl" />

              {/* Main cat container */}
              <div className="relative w-72 h-72 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full flex items-center justify-center border border-pink-500/20">
                <span className="text-9xl animate-float-slow">🐱</span>

                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-3xl">💖</div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-3xl">✨</div>
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 text-3xl">🌟</div>
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-3xl">💫</div>
                </div>
              </div>

              {/* Floating smaller cats */}
              <div className="absolute top-8 left-8 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🐱</div>
              <div className="absolute bottom-8 right-8 text-4xl animate-float" style={{ animationDelay: '1s' }}>🐱</div>
              <div className="absolute top-16 right-12 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>🐱</div>
              <div className="absolute bottom-16 left-12 text-3xl animate-float" style={{ animationDelay: '2s' }}>🐱</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

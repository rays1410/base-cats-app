'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl">🐱</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              BASE<span className="text-blue-400">CATS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a href="#collection" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Collection
            </a>
            <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Roadmap
            </a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Community
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/play"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Play Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                About
              </a>
              <a href="#collection" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Collection
              </a>
              <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Roadmap
              </a>
              <a href="#community" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Community
              </a>
              <Link
                href="/play"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm font-semibold rounded-full text-center"
              >
                Play Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

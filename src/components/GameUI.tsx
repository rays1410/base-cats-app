'use client';

import { useState, useEffect } from 'react';
import { useGameState } from '@/hooks/useGameState';
import { PixelKitten } from './PixelKitten';
import { StatusBar } from './StatusBar';
import { ActionButton } from './ActionButton';
import {
  determineKittenState,
  getCooldownInfo,
  formatCooldown,
  getKittenAge,
} from '@/lib/gameLogic';

export function GameUI() {
  const { kitten, isInitialized, adoptKitten, feed, play, resetGame } = useGameState();
  const [cooldowns, setCooldowns] = useState({ canFeed: true, canPlay: true, feedCooldownRemaining: 0, playCooldownRemaining: 0 });

  // Update cooldowns every second
  useEffect(() => {
    if (!kitten) return;

    const updateCooldowns = () => {
      setCooldowns(getCooldownInfo(kitten));
    };

    updateCooldowns();
    const interval = setInterval(updateCooldowns, 1000);
    return () => clearInterval(interval);
  }, [kitten]);

  // Loading state
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-2xl text-orange-400 animate-pulse">Loading...</div>
      </div>
    );
  }

  // No kitten - show adopt screen
  if (!kitten) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold text-orange-400 mb-4">
            🐱 BaseCat
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Adopt your virtual kitten and take care of it! Feed it, play with it, and watch it grow happy.
          </p>
          <div className="mb-8">
            <PixelKitten state="happy" className="mx-auto scale-150" />
          </div>
          <button
            onClick={adoptKitten}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xl font-bold rounded-2xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-500/25"
          >
            Adopt a Kitten!
          </button>
          <p className="text-gray-600 text-sm mt-4">
            Stage 1 Prototype - No blockchain yet
          </p>
        </div>
      </div>
    );
  }

  // Main game screen
  const kittenState = determineKittenState(kitten);
  const age = getKittenAge(kitten);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 sm:p-8">
      {/* Header */}
      <header className="w-full max-w-md mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-orange-400">🐱 BaseCat</h1>
          <button
            onClick={resetGame}
            className="text-gray-500 hover:text-red-400 text-sm transition-colors"
            title="Reset game"
          >
            Reset
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-1">{age}</p>
      </header>

      {/* Kitten Display */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-700 rounded-3xl p-8 mb-6 shadow-2xl border border-gray-600">
        {/* State indicator */}
        <div className="absolute top-2 right-2 px-3 py-1 bg-gray-900/50 rounded-full">
          <span className="text-sm text-gray-300 capitalize">{kittenState}</span>
        </div>

        {/* Kitten */}
        <div className="w-48 h-48 flex items-center justify-center">
          <PixelKitten state={kittenState} className="scale-150" />
        </div>
      </div>

      {/* Status Bars */}
      <div className="w-full max-w-md space-y-4 mb-8">
        <StatusBar
          label="Hunger"
          value={kitten.hunger}
          color="red"
          icon="🍖"
          inverted={true}
        />
        <StatusBar
          label="Happiness"
          value={kitten.happiness}
          color="green"
          icon="💚"
          inverted={false}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-6 mb-8">
        <ActionButton
          onClick={feed}
          disabled={!cooldowns.canFeed}
          cooldownText={formatCooldown(cooldowns.feedCooldownRemaining)}
          variant="primary"
          icon="🍖"
        >
          Feed
        </ActionButton>
        <ActionButton
          onClick={play}
          disabled={!cooldowns.canPlay}
          cooldownText={formatCooldown(cooldowns.playCooldownRemaining)}
          variant="secondary"
          icon="🎮"
        >
          Play
        </ActionButton>
      </div>

      {/* Tips */}
      <div className="text-center text-gray-500 text-sm max-w-md">
        <p>
          {kittenState === 'hungry' && '🍖 Your kitten is hungry! Feed it to make it happy.'}
          {kittenState === 'sad' && '😢 Your kitten is sad. Play with it to cheer it up!'}
          {kittenState === 'sleeping' && '💤 Shh... Your kitten is sleeping peacefully.'}
          {kittenState === 'happy' && '😊 Your kitten is happy! Keep taking good care of it.'}
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-8 text-center text-gray-600 text-xs">
        <p>BaseCat v0.1 - Stage 1 Prototype</p>
        <p>Built on Base Network (coming soon)</p>
      </footer>
    </div>
  );
}

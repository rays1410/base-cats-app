'use client';

import { useState, useEffect, useCallback } from 'react';
import { KittenStats, GameState } from '@/types/game';
import { GAME_CONFIG } from '@/lib/constants';
import {
  createNewKitten,
  calculateDecay,
  feedKitten,
  playWithKitten,
  getCooldownInfo,
} from '@/lib/gameLogic';

function loadFromStorage(): KittenStats | null {
  if (typeof window === 'undefined') return null;

  try {
    const saved = localStorage.getItem(GAME_CONFIG.STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as KittenStats;
    }
  } catch (error) {
    console.error('Failed to load game state:', error);
  }
  return null;
}

function saveToStorage(kitten: KittenStats): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(GAME_CONFIG.STORAGE_KEY, JSON.stringify(kitten));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
}

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    kitten: null,
    isInitialized: false,
  });

  // Initialize from localStorage
  useEffect(() => {
    const savedKitten = loadFromStorage();
    if (savedKitten) {
      // Apply decay for time passed while away
      const updatedKitten = calculateDecay(savedKitten);
      setGameState({
        kitten: updatedKitten,
        isInitialized: true,
      });
      saveToStorage(updatedKitten);
    } else {
      setGameState({
        kitten: null,
        isInitialized: true,
      });
    }
  }, []);

  // Update decay periodically
  useEffect(() => {
    if (!gameState.kitten) return;

    const interval = setInterval(() => {
      setGameState((prev) => {
        if (!prev.kitten) return prev;
        const updated = calculateDecay(prev.kitten);
        saveToStorage(updated);
        return { ...prev, kitten: updated };
      });
    }, GAME_CONFIG.UPDATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [gameState.kitten !== null]);

  const adoptKitten = useCallback(() => {
    const newKitten = createNewKitten();
    setGameState({
      kitten: newKitten,
      isInitialized: true,
    });
    saveToStorage(newKitten);
  }, []);

  const feed = useCallback(() => {
    setGameState((prev) => {
      if (!prev.kitten) return prev;
      const cooldown = getCooldownInfo(prev.kitten);
      if (!cooldown.canFeed) return prev;

      const updated = feedKitten(prev.kitten);
      saveToStorage(updated);
      return { ...prev, kitten: updated };
    });
  }, []);

  const play = useCallback(() => {
    setGameState((prev) => {
      if (!prev.kitten) return prev;
      const cooldown = getCooldownInfo(prev.kitten);
      if (!cooldown.canPlay) return prev;

      const updated = playWithKitten(prev.kitten);
      saveToStorage(updated);
      return { ...prev, kitten: updated };
    });
  }, []);

  const resetGame = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(GAME_CONFIG.STORAGE_KEY);
    }
    setGameState({
      kitten: null,
      isInitialized: true,
    });
  }, []);

  return {
    ...gameState,
    adoptKitten,
    feed,
    play,
    resetGame,
  };
}

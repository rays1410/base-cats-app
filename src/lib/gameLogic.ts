import { KittenStats, KittenState, CooldownInfo } from '@/types/game';
import { GAME_CONFIG } from './constants';

export function createNewKitten(): KittenStats {
  const now = Date.now();
  return {
    hunger: 20,        // Start slightly hungry
    happiness: 80,     // Start happy
    lastFed: now,
    lastPlayed: now,
    lastUpdate: now,
    createdAt: now,
  };
}

export function calculateDecay(kitten: KittenStats): KittenStats {
  const now = Date.now();
  const minutesPassed = (now - kitten.lastUpdate) / 1000 / 60;

  if (minutesPassed < 0.1) return kitten; // Skip tiny updates

  const newHunger = Math.min(100, kitten.hunger + minutesPassed * GAME_CONFIG.HUNGER_INCREASE_PER_MINUTE);
  const newHappiness = Math.max(0, kitten.happiness - minutesPassed * GAME_CONFIG.HAPPINESS_DECREASE_PER_MINUTE);

  return {
    ...kitten,
    hunger: Math.round(newHunger * 10) / 10,
    happiness: Math.round(newHappiness * 10) / 10,
    lastUpdate: now,
  };
}

export function determineKittenState(kitten: KittenStats): KittenState {
  // Check time - if it's night (22:00 - 07:00), kitten might be sleeping
  const hour = new Date().getHours();
  if (hour >= 22 || hour < 7) {
    // High chance of sleeping at night, unless very hungry
    if (kitten.hunger < GAME_CONFIG.HUNGER_THRESHOLD_HUNGRY) {
      return 'sleeping';
    }
  }

  // Priority: hungry > sad > happy
  if (kitten.hunger >= GAME_CONFIG.HUNGER_THRESHOLD_HUNGRY) {
    return 'hungry';
  }

  if (kitten.happiness <= GAME_CONFIG.HAPPINESS_THRESHOLD_SAD) {
    return 'sad';
  }

  return 'happy';
}

export function getCooldownInfo(kitten: KittenStats): CooldownInfo {
  const now = Date.now();

  const feedCooldownEnd = kitten.lastFed + GAME_CONFIG.FEED_COOLDOWN * 1000;
  const playCooldownEnd = kitten.lastPlayed + GAME_CONFIG.PLAY_COOLDOWN * 1000;

  const feedCooldownRemaining = Math.max(0, Math.ceil((feedCooldownEnd - now) / 1000));
  const playCooldownRemaining = Math.max(0, Math.ceil((playCooldownEnd - now) / 1000));

  return {
    canFeed: feedCooldownRemaining === 0,
    canPlay: playCooldownRemaining === 0,
    feedCooldownRemaining,
    playCooldownRemaining,
  };
}

export function feedKitten(kitten: KittenStats): KittenStats {
  return {
    ...kitten,
    hunger: Math.max(0, kitten.hunger - GAME_CONFIG.FEED_HUNGER_REDUCTION),
    lastFed: Date.now(),
  };
}

export function playWithKitten(kitten: KittenStats): KittenStats {
  return {
    ...kitten,
    happiness: Math.min(100, kitten.happiness + GAME_CONFIG.PLAY_HAPPINESS_INCREASE),
    lastPlayed: Date.now(),
  };
}

export function formatCooldown(seconds: number): string {
  if (seconds <= 0) return 'Ready!';

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  }
  return `${secs}s`;
}

export function getKittenAge(kitten: KittenStats): string {
  const now = Date.now();
  const ageMs = now - kitten.createdAt;
  const days = Math.floor(ageMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ageMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} old`;
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} old`;
  }
  return 'Just born!';
}

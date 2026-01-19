export type KittenState = 'happy' | 'hungry' | 'sad' | 'sleeping';

export interface KittenStats {
  hunger: number;      // 0-100, higher = more hungry (bad)
  happiness: number;   // 0-100, higher = more happy (good)
  lastFed: number;     // timestamp
  lastPlayed: number;  // timestamp
  lastUpdate: number;  // timestamp for calculating decay
  createdAt: number;   // timestamp when kitten was created
}

export interface GameState {
  kitten: KittenStats | null;
  isInitialized: boolean;
}

export interface CooldownInfo {
  canFeed: boolean;
  canPlay: boolean;
  feedCooldownRemaining: number;  // seconds
  playCooldownRemaining: number;  // seconds
}

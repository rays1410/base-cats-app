export type KittenState = 'happy' | 'hungry' | 'sad' | 'sleeping';

export type Rarity = 'common' | 'uncommon' | 'rare' | 'legendary';

// Individual color trait with hex color and rarity
export interface ColorTrait {
  name: string;       // Human-readable name (e.g., "Orange Tabby")
  hex: string;        // Hex color code
  rarity: Rarity;
}

// All kitten traits - these will become NFT metadata
export interface KittenTraits {
  // Fur colors
  bodyColor: ColorTrait;
  headColor: ColorTrait;
  tailColor: ColorTrait;
  earColor: ColorTrait;
  pawColor: ColorTrait;

  // Facial features
  eyeColor: ColorTrait;
  noseColor: ColorTrait;

  // Pattern (for future use)
  pattern: ColorTrait;

  // Computed overall rarity based on traits
  overallRarity: Rarity;
}

export interface KittenStats {
  hunger: number;      // 0-100, higher = more hungry (bad)
  happiness: number;   // 0-100, higher = more happy (good)
  lastFed: number;     // timestamp
  lastPlayed: number;  // timestamp
  lastUpdate: number;  // timestamp for calculating decay
  createdAt: number;   // timestamp when kitten was created
  traits: KittenTraits; // Visual traits for the kitten
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

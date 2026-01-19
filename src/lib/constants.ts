// Game balance constants
export const GAME_CONFIG = {
  // Decay rates (per minute)
  HUNGER_INCREASE_PER_MINUTE: 2, // Hunger increases by 0.1 every minute (~10 per hour)
  HAPPINESS_DECREASE_PER_MINUTE: 0.067, // Happiness decreases by 0.067 every minute (~4 per hour)

  // Action effects
  FEED_HUNGER_REDUCTION: 30, // Feeding reduces hunger by 30
  PLAY_HAPPINESS_INCREASE: 20, // Playing increases happiness by 20

  // Cooldowns (in seconds)
  FEED_COOLDOWN: 1, // 1 hour between feeds
  PLAY_COOLDOWN: 1, // 2 hours between plays

  // State thresholds
  HUNGER_THRESHOLD_HUNGRY: 60, // Above 60 hunger = hungry state
  HAPPINESS_THRESHOLD_SAD: 40, // Below 40 happiness = sad state

  // Update interval
  UPDATE_INTERVAL_MS: 1000, // Update every second

  // Local storage key
  STORAGE_KEY: "basecat_game_state",
} as const;

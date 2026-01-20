import { ColorTrait, KittenTraits, Rarity } from '@/types/game';

// =============================================================================
// COLOR PALETTES WITH RARITY
// =============================================================================

// Fur colors (for body, head, tail, ears, paws)
export const FUR_COLORS: ColorTrait[] = [
  // Common (60% total chance) - realistic cat colors
  { name: 'Gray', hex: '#6B7280', rarity: 'common' },
  { name: 'Brown Tabby', hex: '#8B6914', rarity: 'common' },
  { name: 'Orange Tabby', hex: '#D97706', rarity: 'common' },
  { name: 'Black', hex: '#1F2937', rarity: 'common' },
  { name: 'White', hex: '#F3F4F6', rarity: 'common' },
  { name: 'Tuxedo Black', hex: '#111827', rarity: 'common' },

  // Uncommon (25% total chance)
  { name: 'Cream', hex: '#FDE68A', rarity: 'uncommon' },
  { name: 'Ginger', hex: '#EA580C', rarity: 'uncommon' },
  { name: 'Blue Gray', hex: '#64748B', rarity: 'uncommon' },
  { name: 'Caramel', hex: '#B45309', rarity: 'uncommon' },

  // Rare (12% total chance)
  { name: 'Silver', hex: '#94A3B8', rarity: 'rare' },
  { name: 'Chocolate', hex: '#78350F', rarity: 'rare' },
  { name: 'Lilac', hex: '#A78BFA', rarity: 'rare' },
  { name: 'Cinnamon', hex: '#C2410C', rarity: 'rare' },

  // Legendary (3% total chance)
  { name: 'Golden', hex: '#F59E0B', rarity: 'legendary' },
  { name: 'Rose', hex: '#FDA4AF', rarity: 'legendary' },
  { name: 'Mystic Blue', hex: '#3B82F6', rarity: 'legendary' },
];

// Eye colors
export const EYE_COLORS: ColorTrait[] = [
  // Common
  { name: 'Green', hex: '#22C55E', rarity: 'common' },
  { name: 'Yellow', hex: '#EAB308', rarity: 'common' },
  { name: 'Amber', hex: '#F59E0B', rarity: 'common' },

  // Uncommon
  { name: 'Blue', hex: '#3B82F6', rarity: 'uncommon' },
  { name: 'Hazel', hex: '#84CC16', rarity: 'uncommon' },
  { name: 'Copper', hex: '#B45309', rarity: 'uncommon' },

  // Rare
  { name: 'Gold', hex: '#FCD34D', rarity: 'rare' },
  { name: 'Ice Blue', hex: '#7DD3FC', rarity: 'rare' },
  { name: 'Emerald', hex: '#10B981', rarity: 'rare' },

  // Legendary
  { name: 'Violet', hex: '#8B5CF6', rarity: 'legendary' },
  { name: 'Heterochromia Blue', hex: '#60A5FA', rarity: 'legendary' }, // One eye
  { name: 'Ruby', hex: '#EF4444', rarity: 'legendary' },
];

// Nose colors
export const NOSE_COLORS: ColorTrait[] = [
  // Common
  { name: 'Pink', hex: '#F472B6', rarity: 'common' },
  { name: 'Black', hex: '#1F2937', rarity: 'common' },
  { name: 'Brown', hex: '#78350F', rarity: 'common' },

  // Uncommon
  { name: 'Coral', hex: '#FB7185', rarity: 'uncommon' },
  { name: 'Peach', hex: '#FDBA74', rarity: 'uncommon' },

  // Rare
  { name: 'Lavender', hex: '#C4B5FD', rarity: 'rare' },
  { name: 'Rose', hex: '#FDA4AF', rarity: 'rare' },

  // Legendary
  { name: 'Heart Pink', hex: '#EC4899', rarity: 'legendary' },
  { name: 'Galaxy', hex: '#6366F1', rarity: 'legendary' },
];

// Pattern types (affects how colors are displayed)
export const PATTERNS: ColorTrait[] = [
  // Common
  { name: 'Solid', hex: '#000000', rarity: 'common' },
  { name: 'Tabby', hex: '#000000', rarity: 'common' },

  // Uncommon
  { name: 'Bicolor', hex: '#000000', rarity: 'uncommon' },
  { name: 'Tuxedo', hex: '#000000', rarity: 'uncommon' },

  // Rare
  { name: 'Calico', hex: '#000000', rarity: 'rare' },
  { name: 'Tortoiseshell', hex: '#000000', rarity: 'rare' },

  // Legendary
  { name: 'Spotted', hex: '#000000', rarity: 'legendary' },
  { name: 'Marbled', hex: '#000000', rarity: 'legendary' },
];

// =============================================================================
// RARITY WEIGHTS AND SELECTION
// =============================================================================

const RARITY_WEIGHTS: Record<Rarity, number> = {
  common: 60,
  uncommon: 25,
  rare: 12,
  legendary: 3,
};

// Rarity score for calculating overall rarity
const RARITY_SCORE: Record<Rarity, number> = {
  common: 1,
  uncommon: 2,
  rare: 3,
  legendary: 4,
};

/**
 * Select a random rarity based on weights
 */
function selectRarity(): Rarity {
  const total = Object.values(RARITY_WEIGHTS).reduce((a, b) => a + b, 0);
  let random = Math.random() * total;

  for (const [rarity, weight] of Object.entries(RARITY_WEIGHTS)) {
    random -= weight;
    if (random <= 0) {
      return rarity as Rarity;
    }
  }

  return 'common';
}

/**
 * Select a random color from a palette with the given rarity
 */
function selectColorByRarity(palette: ColorTrait[], rarity: Rarity): ColorTrait {
  const colorsOfRarity = palette.filter((c) => c.rarity === rarity);

  if (colorsOfRarity.length === 0) {
    // Fallback to any common color if no colors of this rarity exist
    const commonColors = palette.filter((c) => c.rarity === 'common');
    return commonColors[Math.floor(Math.random() * commonColors.length)];
  }

  return colorsOfRarity[Math.floor(Math.random() * colorsOfRarity.length)];
}

/**
 * Select a random color trait from a palette
 */
function selectRandomColor(palette: ColorTrait[]): ColorTrait {
  const rarity = selectRarity();
  return selectColorByRarity(palette, rarity);
}

/**
 * Calculate overall rarity based on all traits
 * Uses average rarity score with bonus for multiple rare/legendary traits
 */
function calculateOverallRarity(traits: Omit<KittenTraits, 'overallRarity'>): Rarity {
  const allTraits = [
    traits.bodyColor,
    traits.headColor,
    traits.tailColor,
    traits.earColor,
    traits.pawColor,
    traits.eyeColor,
    traits.noseColor,
    traits.pattern,
  ];

  // Calculate average score
  const totalScore = allTraits.reduce(
    (sum, trait) => sum + RARITY_SCORE[trait.rarity],
    0
  );
  const avgScore = totalScore / allTraits.length;

  // Count rare and legendary traits
  const rareCount = allTraits.filter((t) => t.rarity === 'rare').length;
  const legendaryCount = allTraits.filter((t) => t.rarity === 'legendary').length;

  // Bonus for multiple high-rarity traits
  const bonusScore = rareCount * 0.2 + legendaryCount * 0.5;
  const finalScore = avgScore + bonusScore;

  // Determine overall rarity
  if (finalScore >= 3.5 || legendaryCount >= 2) {
    return 'legendary';
  }
  if (finalScore >= 2.5 || (rareCount >= 2 && legendaryCount >= 1)) {
    return 'rare';
  }
  if (finalScore >= 1.8 || rareCount >= 2) {
    return 'uncommon';
  }
  return 'common';
}

// =============================================================================
// MAIN GENERATION FUNCTION
// =============================================================================

/**
 * Generate random kitten traits
 * Each part is independently colored with rarity-weighted selection
 */
export function generateKittenTraits(): KittenTraits {
  const bodyColor = selectRandomColor(FUR_COLORS);
  const headColor = selectRandomColor(FUR_COLORS);
  const tailColor = selectRandomColor(FUR_COLORS);
  const earColor = selectRandomColor(FUR_COLORS);
  const pawColor = selectRandomColor(FUR_COLORS);
  const eyeColor = selectRandomColor(EYE_COLORS);
  const noseColor = selectRandomColor(NOSE_COLORS);
  const pattern = selectRandomColor(PATTERNS);

  const traitsWithoutRarity = {
    bodyColor,
    headColor,
    tailColor,
    earColor,
    pawColor,
    eyeColor,
    noseColor,
    pattern,
  };

  return {
    ...traitsWithoutRarity,
    overallRarity: calculateOverallRarity(traitsWithoutRarity),
  };
}

/**
 * Get display color for rarity badges
 */
export function getRarityColor(rarity: Rarity): string {
  switch (rarity) {
    case 'common':
      return '#6B7280'; // gray
    case 'uncommon':
      return '#22C55E'; // green
    case 'rare':
      return '#3B82F6'; // blue
    case 'legendary':
      return '#F59E0B'; // gold
    default:
      return '#6B7280';
  }
}

/**
 * Get background gradient for rarity
 */
export function getRarityGradient(rarity: Rarity): string {
  switch (rarity) {
    case 'common':
      return 'from-gray-500 to-gray-600';
    case 'uncommon':
      return 'from-green-500 to-emerald-600';
    case 'rare':
      return 'from-blue-500 to-indigo-600';
    case 'legendary':
      return 'from-yellow-400 via-orange-500 to-red-500';
    default:
      return 'from-gray-500 to-gray-600';
  }
}

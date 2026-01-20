'use client';

import { KittenTraits, ColorTrait, Rarity } from '@/types/game';
import { getRarityGradient } from '@/lib/traits';

interface TraitsPanelProps {
  traits: KittenTraits;
}

// Rarity badge component
function RarityBadge({ rarity }: { rarity: Rarity }) {
  const gradientClass = getRarityGradient(rarity);

  return (
    <span
      className={`px-2 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r ${gradientClass} text-white uppercase`}
    >
      {rarity}
    </span>
  );
}

// Single trait display
function TraitItem({ label, trait }: { label: string; trait: ColorTrait }) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-gray-700/50 last:border-0">
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded-full border border-gray-600"
          style={{ backgroundColor: trait.hex }}
        />
        <span className="text-gray-400 text-sm">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-300 text-sm">{trait.name}</span>
        <RarityBadge rarity={trait.rarity} />
      </div>
    </div>
  );
}

export function TraitsPanel({ traits }: TraitsPanelProps) {
  return (
    <div className="w-full max-w-md bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
      {/* Header with overall rarity */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-200">Kitten Traits</h3>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Overall:</span>
          <RarityBadge rarity={traits.overallRarity} />
        </div>
      </div>

      {/* Traits list */}
      <div className="space-y-0">
        <TraitItem label="Body" trait={traits.bodyColor} />
        <TraitItem label="Head" trait={traits.headColor} />
        <TraitItem label="Ears" trait={traits.earColor} />
        <TraitItem label="Tail" trait={traits.tailColor} />
        <TraitItem label="Paws" trait={traits.pawColor} />
        <TraitItem label="Eyes" trait={traits.eyeColor} />
        <TraitItem label="Nose" trait={traits.noseColor} />
        <TraitItem label="Pattern" trait={traits.pattern} />
      </div>

      {/* NFT metadata hint */}
      <div className="mt-4 pt-3 border-t border-gray-700">
        <p className="text-xs text-gray-500 text-center">
          These traits will become your NFT metadata in Stage 2
        </p>
      </div>
    </div>
  );
}

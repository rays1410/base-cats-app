'use client';

interface StatusBarProps {
  label: string;
  value: number;        // 0-100
  maxValue?: number;
  color: 'green' | 'red' | 'blue' | 'yellow';
  icon?: React.ReactNode;
  inverted?: boolean;   // For hunger, where lower is better
}

const colorClasses = {
  green: {
    bar: 'bg-green-500',
    bg: 'bg-green-900/30',
    text: 'text-green-400',
  },
  red: {
    bar: 'bg-red-500',
    bg: 'bg-red-900/30',
    text: 'text-red-400',
  },
  blue: {
    bar: 'bg-blue-500',
    bg: 'bg-blue-900/30',
    text: 'text-blue-400',
  },
  yellow: {
    bar: 'bg-yellow-500',
    bg: 'bg-yellow-900/30',
    text: 'text-yellow-400',
  },
};

export function StatusBar({
  label,
  value,
  maxValue = 100,
  color,
  icon,
  inverted = false,
}: StatusBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));
  const colors = colorClasses[color];

  // Determine bar color based on value and whether it's inverted
  // For hunger (inverted): high = bad (red), low = good (green)
  // For happiness (normal): high = good (green), low = bad (red)
  const getBarColor = () => {
    if (inverted) {
      if (percentage > 70) return 'bg-red-500';
      if (percentage > 40) return 'bg-yellow-500';
      return 'bg-green-500';
    } else {
      if (percentage > 60) return 'bg-green-500';
      if (percentage > 30) return 'bg-yellow-500';
      return 'bg-red-500';
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="text-sm font-medium text-gray-300">{label}</span>
        </div>
        <span className={`text-sm font-bold ${colors.text}`}>
          {Math.round(value)}/{maxValue}
        </span>
      </div>
      <div className={`h-4 rounded-full ${colors.bg} overflow-hidden border border-gray-700`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${getBarColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

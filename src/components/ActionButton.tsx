'use client';

interface ActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  cooldownText?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

export function ActionButton({
  onClick,
  disabled = false,
  cooldownText,
  children,
  variant = 'primary',
  icon,
}: ActionButtonProps) {
  const baseClasses =
    'relative px-6 py-3 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2 min-w-[140px]';

  const variantClasses = {
    primary: disabled
      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
      : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-500/25',
    secondary: disabled
      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/25',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span>{children}</span>
      {disabled && cooldownText && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
          {cooldownText}
        </span>
      )}
    </button>
  );
}

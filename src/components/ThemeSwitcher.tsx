import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { useTheme, type ThemeChoice } from '../hooks/useTheme';

const options: { value: ThemeChoice; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
];

export default function ThemeSwitcher() {
  const { choice, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const CurrentIcon = options.find(o => o.value === choice)?.icon || Monitor;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-lg text-ink-secondary hover:text-ink hover:bg-surface transition-colors"
        aria-label={`Theme: ${choice}. Click to change.`}
        aria-expanded={open}
      >
        <CurrentIcon className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-lg border border-border bg-white dark:bg-slate-800 dark:border-slate-700 p-1.5 z-50">
          {options.map(opt => {
            const Icon = opt.icon;
            const isActive = choice === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => { setTheme(opt.value); setOpen(false); }}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300'
                    : 'text-ink-secondary dark:text-slate-300 hover:bg-surface dark:hover:bg-slate-700'
                }`}
                role="menuitemradio"
                aria-checked={isActive}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {opt.label}
                </span>
                {isActive && <Check className="w-4 h-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

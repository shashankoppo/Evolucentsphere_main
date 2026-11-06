import { useEffect, useState, useCallback } from 'react';

export type ThemeChoice = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'evolucentsphere-theme';

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredChoice(): ThemeChoice {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  return 'system';
}

function applyTheme(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle('dark', resolved === 'dark');
  root.style.colorScheme = resolved;
}

export function useTheme() {
  const [choice, setChoice] = useState<ThemeChoice>('system');
  const [resolved, setResolved] = useState<ResolvedTheme>('light');

  useEffect(() => {
    const stored = getStoredChoice();
    setChoice(stored);
    const initial = stored === 'system' ? getSystemTheme() : stored;
    setResolved(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    if (choice !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const newResolved: ResolvedTheme = e.matches ? 'dark' : 'light';
      setResolved(newResolved);
      applyTheme(newResolved);
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [choice]);

  const setTheme = useCallback((newChoice: ThemeChoice) => {
    setChoice(newChoice);
    localStorage.setItem(STORAGE_KEY, newChoice);
    const newResolved = newChoice === 'system' ? getSystemTheme() : newChoice;
    setResolved(newResolved);
    applyTheme(newResolved);
  }, []);

  return { choice, resolved, setTheme };
}

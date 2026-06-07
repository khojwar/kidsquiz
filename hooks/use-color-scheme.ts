// use-color-scheme – simple cross‑platform hook
// Returns "light" or "dark" based on the device/theme settings.
// Uses React Native's Appearance API on native platforms and
// window.matchMedia on web. This mirrors the typical Expo hook that was
// removed from the repo.

import { useEffect, useState } from 'react';
import { Appearance, AppearancePreferences, ColorSchemeName, Platform } from 'react-native';

/**
 * Returns the current color scheme ("light" | "dark").
 * Updates automatically when the system preference changes.
 */
export function useColorScheme(): ColorSchemeName {
  const [scheme, setScheme] = useState<ColorSchemeName>(
    // Initial value – try RN Appearance first, then web fallback
    (() => {
      if (Platform.OS !== 'web') {
        return Appearance.getColorScheme();
      }
      // Web fallback using matchMedia
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    })()
  );

  useEffect(() => {
    if (Platform.OS !== 'web') {
      const subscription = Appearance.addChangeListener((prefs: AppearancePreferences) => {
        setScheme(prefs.colorScheme);
      });
      return () => subscription.remove();
    } else {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e: MediaQueryListEvent) => setScheme(e.matches ? 'dark' : 'light');
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  return scheme;
}

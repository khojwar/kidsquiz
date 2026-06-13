// Settings screen redesign following KidsQuiz Design & Development Rules
import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Appearance, ScrollView, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import SignOutButton from '@/components/social-auth-buttons/sign-out-button';

/**
 * 🎉 KidsQuiz Settings Screen – playful, kid‑friendly UI.
 * • Primary green #58CC02, secondary blue #1CB0F6.
 * • Rounded cards (radius 20) with soft shadow.
 * • Large touch targets (min 56 px height) per Mobile Rules.
 * • Spacing uses the defined system (4‑8‑12‑16‑20‑24‑32‑40‑48).
 * • Dark‑mode support via Appearance API.
 */
export default function SettingsScreen() {
  // ----- State ----------------------------------------------------------
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [musicEnabled, setMusicEnabled] = useState<boolean>(true);
  const [voiceGuidanceEnabled, setVoiceGuidanceEnabled] = useState<boolean>(false);

  const systemScheme = useColorScheme(); // "light" | "dark" | null
  const [isDark, setIsDark] = useState<boolean>(systemScheme === 'dark');

  // Sync with system theme changes.
  useEffect(() => {
    setIsDark(systemScheme === 'dark');
  }, [systemScheme]);

  const toggleTheme = (value: boolean) => {
    const newScheme = value ? 'dark' : 'light';
    Appearance.setColorScheme(newScheme);
    setIsDark(value);
  };

  // Helper to render each setting as a large, tappable card.
  const renderToggle = (
    label: string,
    value: boolean,
    onChange: (v: boolean) => void,
    thumbAccent = '#58CC02' // Primary green for the switch thumb.
  ) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onChange(!value)}
      style={styles.card}
    >
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Switch
          value={value}
          onValueChange={onChange}
          thumbColor={value ? thumbAccent : '#fff'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Settings</Text>

      {/* Theme toggle */}
      {renderToggle('Dark Theme', isDark, toggleTheme)}

      {/* Sound Effects */}
      {renderToggle('Sound Effects', soundEnabled, setSoundEnabled)}

      {/* Music */}
      {renderToggle('Music', musicEnabled, setMusicEnabled)}

      {/* Voice Guidance */}
      {renderToggle('Voice Guidance', voiceGuidanceEnabled, setVoiceGuidanceEnabled)}

      {/* Logout – highlighted orange card */}
      <SignOutButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20, // 5 * 4 spacing units
    backgroundColor: '#FFFFFF', // light background – dark mode handled by Appearance
  },
  title: {
    fontSize: 32, // Heading XL
    fontWeight: '700',
    color: '#58CC02', // primary green accent
    marginBottom: 24, // 3 * 8 spacing
  },
  card: {
    backgroundColor: '#F7F7F7', // surface color
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    // soft shadow (elevation for Android, shadow props for iOS)
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minHeight: 56, // touch target per Mobile Rules
    justifyContent: 'center',
  },
  logoutCard: {
    backgroundColor: '#FF9600', // orange accent for logout action
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20, // Heading M size, readable for kids
    color: '#3C3C3C', // primary text color
  },
});

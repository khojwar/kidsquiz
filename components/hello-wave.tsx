// HelloWave – placeholder animated greeting component
// In the original project this likely rendered a waving hand emoji or animation.
// For now we provide a simple static component that can be enhanced later.

import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const HelloWave: React.FC = () => {
  return (
    <Text style={styles.wave}>👋</Text>
  );
};

const styles = StyleSheet.create({
  wave: {
    fontSize: 32,
    // Align visually with other header text
    marginLeft: 8,
  },
});

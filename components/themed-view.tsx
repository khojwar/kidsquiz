// ThemedView component – simple wrapper around React Native View
// Provides consistent styling for container views across the app.
// Currently passes through any style prop; can be extended with theme handling later.

import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

type ThemedViewProps = ViewProps & {
  /** Optional custom style */
  style?: any;
};

export const ThemedView: React.FC<ThemedViewProps> = ({ style, children, ...rest }) => {
  return (
    <View style={[styles.base, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    // default background could be overridden by a theme provider elsewhere
  },
});

// ParallaxScrollView – lightweight placeholder for the original component
// It provides a simple header area with optional background color and image,
// and then renders its children. This mimics the API used in the app tabs.

import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType, ViewStyle } from 'react-native';

type ParallaxScrollViewProps = {
  /** Background colour for the header (supports light/dark object) */
  headerBackgroundColor?: { light: string; dark: string } | string;
  /** Image element to display in the header */
  headerImage?: React.ReactNode;
  /** Optional style for the container */
  style?: ViewStyle;
  /** Content rendered below the header */
  children?: React.ReactNode;
};

/**
 * Simple implementation that renders a header view with the provided background
 * colour (or defaults) and optional image, then displays the children.
 * It does not provide true parallax scrolling – that can be added later.
 */
export default function ParallaxScrollView({
  headerBackgroundColor,
  headerImage,
  style,
  children,
}: ParallaxScrollViewProps) {
  const backgroundStyle =
    typeof headerBackgroundColor === 'string'
      ? { backgroundColor: headerBackgroundColor }
      : {
          backgroundColor: headerBackgroundColor?.light ?? '#fff',
        };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.header, backgroundStyle]}>{headerImage}</View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // Simple fixed height placeholder – real implementation would be taller with parallax effect
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

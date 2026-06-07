// ThemedText component – simple wrapper around React Native Text
// Provides basic typographic variants used throughout the app.
// Variants: "title", "subtitle", "link". Any other variant falls back to default styling.
// Additional props (style, etc.) are passed through to the underlying Text.

import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

type Variant = 'title' | 'subtitle' | 'link';

type ThemedTextProps = TextProps & {
  /**
   * Visual variant of the text. Determines default size, weight and colour.
   * When omitted the default text style is used.
   */
  type?: Variant;
};

export const ThemedText: React.FC<ThemedTextProps> = ({ type, style, children, ...rest }) => {
  const variantStyle = type ? styles[type] : {};
  return (
    <Text style={[styles.base, variantStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: '#000', // fallback colour – will be overridden by theme provider if needed
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  link: {
    fontSize: 16,
    color: '#2089dc',
    textDecorationLine: 'underline',
  },
});

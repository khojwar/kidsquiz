import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet, Dimensions, Easing } from 'react-native';

interface BobbingImageProps {
  source: any; // require('./path/to/image.png') or { uri: '...' }
  size?: number;
  style?: any;
}

const BobbingImage: React.FC<BobbingImageProps> = ({ 
  source, 
  size = 180, 
  style 
}) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -25,           // Move up
          duration: 1200,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad), // smooth curve
        }),
        Animated.timing(translateY, {
          toValue: 0,             // Move back down
          duration: 1200,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad),
        }),
      ])
    );

    animation.start();

    // Cleanup
    return () => animation.stop();
  }, [translateY]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={source}
        style={[
          styles.image,
          {
            width: size,
            height: size,
            transform: [{ translateY }],
          },
          style,
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // Optional: add shadow for more "floating" feel
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  image: {
    // Base styles
  },
});

export default BobbingImage;
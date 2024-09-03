import React, { useEffect, useState } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';

const logo = require('../assets/icon.png'); // Adjust path as needed

const SplashScreen = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity (fade in)
  const [zoomAnim] = useState(new Animated.Value(0.5)); // Initial value for scale (zoom in)

  useEffect(() => {
    // Zoom in and fade in animation
    Animated.parallel([
      Animated.timing(zoomAnim, {
        toValue: 1, // End value for scale
        duration: 3000, // Duration of animation
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1, // End value for opacity
        duration: 3000, // Duration of animation
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to Login after animation
      navigation.replace('Login');
    });
  }, [fadeAnim, zoomAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim, transform: [{ scale: zoomAnim }] }]}>
        <Image source={logo} style={styles.logo} />
      </Animated.View>
      <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
        <Text style={styles.appName}>Debt Manager</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SplashScreen;
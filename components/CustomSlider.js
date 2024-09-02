import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const CustomSlider = ({ label, value, min, max, step, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} ({value}):</Text>
      <Slider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default CustomSlider;
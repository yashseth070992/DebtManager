import React from 'react';
import { View, Text } from 'react-native';
import Slider  from '@react-native-community/slider'
import styles from '../styles'; // Import the styles from styles.js

const CustomSlider = ({ label, value, min, max, step, onValueChange }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderLabel}>{label} ({value}):</Text>
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

export default CustomSlider;
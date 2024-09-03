import React from 'react';
import { View, Text } from 'react-native';
import styles from './../styles'; 

const DebtManager = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEBT Calculator</Text>
      <Text style={styles.text}>This is another screen!</Text>
    </View>
  );
};

export default DebtManager;
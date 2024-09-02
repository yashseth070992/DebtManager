import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SipCalculator from './components/SipCalculator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SipCalculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
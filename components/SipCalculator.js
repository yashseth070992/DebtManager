import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualRate, setAnnualRate] = useState(12);
  const [years, setYears] = useState(10);
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const maturity =
      monthlyInvestment *
      (((1 + monthlyRate) ** months - 1) / monthlyRate) *
      (1 + monthlyRate);

    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIP Calculator</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Monthly Investment (₹{monthlyInvestment}):</Text>
        <Slider
          style={styles.slider}
          minimumValue={1000}
          maximumValue={100000}
          step={100}
          value={monthlyInvestment}
          onValueChange={(value) => setMonthlyInvestment(value)}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Expected Annual Return ({annualRate}%):</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={30}
          step={0.5}
          value={annualRate}
          onValueChange={(value) => setAnnualRate(value)}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Investment Duration ({years} years):</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={30}
          step={1}
          value={years}
          onValueChange={(value) => setYears(value)}
        />
      </View>

      <Button title="Calculate" onPress={calculateSIP} />

      {maturityAmount && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            Expected Maturity Amount: ₹{maturityAmount}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
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
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SipCalculator;
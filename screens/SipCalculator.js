import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import BarChartComponent from '../components/BarChartComponent';
import PieChartComponent from '../components/PieChartComponent';
import CustomSlider from '../components/CustomSlider'; // Import the CustomSlider component
import styles from '../styles'; // Import the styles from styles.js

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualRate, setAnnualRate] = useState(12);
  const [years, setYears] = useState(10);
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [yearlyData, setYearlyData] = useState([]);

  const calculateSIP = () => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const maturity =
      monthlyInvestment *
      (((1 + monthlyRate) ** months - 1) / monthlyRate) *
      (1 + monthlyRate);

    setMaturityAmount(maturity.toFixed(2));

    let investment = 0;
    const data = [];
    for (let i = 1; i <= years; i++) {
      investment += monthlyInvestment * 12;
      const amount = 
        monthlyInvestment *
        (((1 + monthlyRate) ** (i * 12) - 1) / monthlyRate) *
        (1 + monthlyRate);
      const profit = amount - investment;
      data.push({ year: i, investment, amount, profit });
    }
    setYearlyData(data);
  };

  const pieData = [
    {
      name: 'Invested Amount',
      amount: monthlyInvestment * years * 12,
      color: '#f00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Returns',
      amount: maturityAmount - monthlyInvestment * years * 12,
      color: '#0f0',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const barData = {
    labels: yearlyData.map(d => `Year ${d.year}`),
    datasets: [
      {
        data: yearlyData.map(d => d.investment), // Investment
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Investment color
      },
      {
        data: yearlyData.map(d => d.profit), // Profit
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Profit color
      },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>SIP Calculator</Text>

      <CustomSlider
        label="Monthly Investment"
        value={monthlyInvestment}
        min={1000}
        max={100000}
        step={100}
        onValueChange={(value) => setMonthlyInvestment(value)}
      />

      <CustomSlider
        label="Expected Annual Return"
        value={annualRate}
        min={1}
        max={30}
        step={0.5}
        onValueChange={(value) => setAnnualRate(value)}
      />

      <CustomSlider
        label="Investment Duration"
        value={years}
        min={1}
        max={30}
        step={1}
        onValueChange={(value) => setYears(value)}
      />

      <Button title="Calculate" onPress={calculateSIP} />

      {maturityAmount && (
        <>
          <View style={styles.result}>
            <Text style={styles.resultText}>
              Expected Maturity Amount: ₹{maturityAmount}
            </Text>
          </View>
          <PieChartComponent
            data={pieData}
          />
          <Text style={styles.chartTitle}>Yearly Investment vs Total Amount</Text>
          <BarChartComponent
            data={barData}
          />
        </>
      )}
    </ScrollView>
  );
};

export default SipCalculator;
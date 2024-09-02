// BarChartComponent.js
import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const BarChartComponent = ({ data, chartConfig, style }) => {
  return (
    <BarChart
      data={data}
      width={screenWidth}
      height={300}
      yAxisLabel="₹"
      chartConfig={{
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional
        decimalPlaces: 0, // optional, defaults to 2dp
        ...chartConfig,
      }}
      verticalLabelRotation={30}
      style={[styles.barChart, style]}
      fromZero
    />
  );
};

const styles = StyleSheet.create({
  barChart: {
    marginTop: 20,
    borderRadius: 8,
  },
});

export default BarChartComponent;

// PieChartComponent.js
import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const PieChartComponent = ({ data, chartConfig, style }) => {
  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={{
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        ...chartConfig,
      }}
      accessor="amount"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
      style={style}
    />
  );
};

const styles = StyleSheet.create({
  pieChart: {
    marginTop: 20,
    borderRadius: 8,
  },
});

export default PieChartComponent;
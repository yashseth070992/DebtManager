import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styles from './../styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // To get the stored JWT token

const DebtManager = ({ navigation }) => {
  const [debts, setDebts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const fetchDebts = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          Alert.alert('Error', 'User not authenticated.');
          return;
        }

        const response = await axios.get(
          'http://debtmanager-env.eba-byvqjeud.ap-south-1.elasticbeanstalk.com/debts',
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass JWT token in the Authorization header
            },
          }
        );

        setDebts(response.data);
      } catch (err) {
        console.error('Error fetching debts:', err);
        setError('Failed to fetch debts.');
      } finally {
        setLoading(false);
      }
    };

    fetchDebts();
  }, []);

  const getCategoryData = () => {
    const categories = debts.reduce((acc, debt) => {
      if (!acc[debt.category]) {
        acc[debt.category] = 0;
      }
      acc[debt.category] += debt.totalAmount - debt.amountPaid;
      return acc;
    }, {});

    return Object.keys(categories).map(category => ({
      name: category,
      population: categories[category],
      color: getRandomColor(),
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    }));
  };

  const getDebtData = () => {
    return debts.map(debt => ({
      name: debt.name,
      population: debt.totalAmount - debt.amountPaid,
      color: getRandomColor(),
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    }));
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.heading}>Debts Manage</Text>
          <Text style={styles.subHeading}>All your debts in one place</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddDebt')}>
          <Text style={styles.addButtonText}>Add Debt</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {debts.map((debt) => (
          <View key={debt.id} style={styles.card}>
            <Text style={styles.cardTitle}>{debt.name}</Text>
            <Text style={styles.cardText}>EMI: {debt.emi}</Text>
            <Text style={styles.cardText}>Rate of Interest: {debt.rate}</Text>
            <Text style={styles.cardText}>Duration: {debt.duration}</Text>
            <View style={styles.statusContainer}>
              <Text style={styles.cardText}>
                Paid Off: ${(debt.totalAmount - debt.amountPaid).toFixed(2)}
              </Text>
              <View style={styles.statusBarContainer}>
                <View
                  style={[
                    styles.statusBar,
                    {
                      width: `${((debt.amountPaid / debt.totalAmount) * 100).toFixed(2)}%`,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        ))}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.chartTitle}>Balance by Category</Text>
          <PieChart
            data={getCategoryData()}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa',
              },
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.chartTitle}>Balance by Debt</Text>
          <PieChart
            data={getDebtData()}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa',
              },
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DebtManager;
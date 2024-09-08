import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './../styles';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // To get the stored JWT token

const categories = [
  'Personal Loan',
  'Auto Loan',
  'Credit Card',
  'Home Loan',
  'Student Loan',
];

const AddDebt = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [debtName, setDebtName] = useState('');
  const [currentBalance, setCurrentBalance] = useState('');
  const [rateOfInterest, setRateOfInterest] = useState('');
  const [emi, setEmi] = useState('');
  const [nextDueDate, setNextDueDate] = useState('');

  const handleSave = async () => {
    try {
      // Retrieve JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      // Prepare data for the request
      const debtData = {
        category,
        debtName,
        currentBalance: parseFloat(currentBalance),
        rateOfInterest: parseFloat(rateOfInterest),
        emi: parseFloat(emi),
        nextDueDate,
      };

      // Make the API call
      const response = await axios.post(
        'http://debtmanager-env.eba-byvqjeud.ap-south-1.elasticbeanstalk.com/add-debt',
        debtData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass JWT token in the Authorization header
          },
        }
      );

      if (response.status === 201) {
        Alert.alert('Success', 'Debt added successfully');
        navigation.navigate('DebtManager'); // Navigate to DebtManager screen
      }
    } catch (error) {
      console.error('Error adding debt:', error);
      Alert.alert('Error', 'Failed to add debt. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Debt</Text>

      {/* Debt Name */}
      <TextInput
        style={styles.input}
        placeholder="Debt Name"
        value={debtName}
        onChangeText={setDebtName}
      />

      {/* Category */}
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select a category" value="" />
        {categories.map((cat, index) => (
          <Picker.Item key={index} label={cat} value={cat} />
        ))}
      </Picker>

      {/* Current Balance */}
      <TextInput
        style={styles.input}
        placeholder="Current Balance"
        keyboardType="numeric"
        value={currentBalance}
        onChangeText={setCurrentBalance}
      />

      {/* Rate of Interest */}
      <TextInput
        style={styles.input}
        placeholder="Rate of Interest"
        keyboardType="numeric"
        value={rateOfInterest}
        onChangeText={setRateOfInterest}
      />

      {/* EMI */}
      <TextInput
        style={styles.input}
        placeholder="EMI"
        keyboardType="numeric"
        value={emi}
        onChangeText={setEmi}
      />

      {/* Next Due Date */}
      <TextInput
        style={styles.input}
        placeholder="Next Due Date (YYYY-MM-DD)"
        value={nextDueDate}
        onChangeText={setNextDueDate}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddDebt;
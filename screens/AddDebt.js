import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './../styles';
import { Picker } from '@react-native-picker/picker';

const categories = [
  'Personal Loan',
  'Auto Loan',
  'Credit Card',
  'Home Loan',
  'Student Loan',
  // Add more categories as needed
];

const AddDebt = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [debtName, setDebtName] = useState('');
  const [currentBalance, setCurrentBalance] = useState('');
  const [rateOfInterest, setRateOfInterest] = useState('');
  const [emi, setEmi] = useState('');
  const [nextDueDate, setNextDueDate] = useState('');

  const handleSave = () => {
    // Add validation here if needed
    console.log({
      category,
      debtName,
      currentBalance,
      rateOfInterest,
      emi,
      nextDueDate,
    });
    navigation.navigate('DebtManager'); // Explicitly navigate to DebtManager
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Debt</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Category</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a category" value="" />
          {categories.map((cat, index) => (
            <Picker.Item key={index} label={cat} value={cat} />
          ))}
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Debt Name"
        value={debtName}
        onChangeText={setDebtName}
      />
      <TextInput
        style={styles.input}
        placeholder="Current Balance"
        keyboardType="numeric"
        value={currentBalance}
        onChangeText={setCurrentBalance}
      />
      <TextInput
        style={styles.input}
        placeholder="Rate of Interest"
        keyboardType="numeric"
        value={rateOfInterest}
        onChangeText={setRateOfInterest}
      />
      <TextInput
        style={styles.input}
        placeholder="EMI"
        keyboardType="numeric"
        value={emi}
        onChangeText={setEmi}
      />
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
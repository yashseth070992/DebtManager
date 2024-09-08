import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!username  || !password) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    axios.post('http://debtmanager-env.eba-byvqjeud.ap-south-1.elasticbeanstalk.com/signup', { username, password },  { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
        Alert.alert('Sign-Up Success', `Welcome ${username}`);
        navigation.navigate('Login');  // Navigate to login on success
      })
      .catch(error => {
        Alert.alert('Error', 'Sign-Up failed');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInLink}>Already have an account? Sign In</Text>
      </TouchableOpacity>      
    </View>
  );
};

export default SignUpScreen;
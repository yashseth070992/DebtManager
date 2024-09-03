import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import styles from '../styles'; // Import your styles

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const userInfo = await GoogleSignin.signIn();
    //   Alert.alert('Google Sign-In Success', `Welcome ${userInfo.user.name}`);
    // } catch (error) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     Alert.alert('Google Sign-In Cancelled');
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     Alert.alert('Google Sign-In In Progress');
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     Alert.alert('Play Services Not Available');
    //   } else {
    //     Alert.alert('Google Sign-In Error', error.toString());
    //   }
    // }
  };

  const handleSignUp = () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }
    // Handle manual sign-up logic here (e.g., API call)
    Alert.alert('Sign-Up Success', `Welcome ${username}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Text style={styles.googleButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />

      {/* Optionally, add a link to sign in page */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInLink}>Already have an account? Sign In</Text>
      </TouchableOpacity>      
    </View>
  );
};

export default SignUpScreen;
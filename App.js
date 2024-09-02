// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SipCalculator from './components/SipCalculator';
import DebtManager from './components/DebtManager';
import CustomDrawerContent from './components/CustomDrawerContent'; // Import custom drawer content if needed

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="SipCalculator"
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer content
      >
        <Drawer.Screen name="SipCalculator" component={SipCalculator} />
        <Drawer.Screen name="DebtManager" component={DebtManager} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
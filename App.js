import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SipCalculator from './screens/SipCalculator';
import DebtManager from './screens/DebtManager';
import CustomDrawerContent from './components/CustomDrawerContent'; 
import LoginScreen from './screens/LoginScreen'; 
import styles from './styles'; 

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainApp = () => (
  <Drawer.Navigator
    initialRouteName="SipCalculator"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="SipCalculator" component={SipCalculator} />
    <Drawer.Screen name="DebtManager" component={DebtManager} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
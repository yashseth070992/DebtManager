import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SipCalculator from './screens/SipCalculator';
import DebtManager from './screens/DebtManager';
import CustomDrawerContent from './components/CustomDrawerContent'; 
import LoginScreen from './screens/LoginScreen'; 
import SignUpScreen from './screens/SignUpScreen'; 


// import { GoogleSignin } from '@react-native-google-signin/google-signin';

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
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: 'YOUR_WEB_CLIENT_ID', // From Firebase Console
  //   });
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="SignUp" component={SignUpScreen} /> 
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
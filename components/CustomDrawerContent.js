import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import styles from './../styles'; 

const CustomDrawerContent = (props) => {
  const { navigation } = props;

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SipCalculator')}
          style={styles.drawerItem}
        >
          <Text>SIP Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('DebtManager')}
          style={styles.drawerItem}
        >
          <Text>Debt Manager</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          style={[styles.drawerItem, styles.logoutButton]}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
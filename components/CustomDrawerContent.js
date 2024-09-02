// CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  // Use the navigation prop from props rather than useNavigation hook
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SipCalculator')}
          style={styles.drawerItem}
        >
          <Text>SIP Calculator</Text>
        </TouchableOpacity>
        {/* Add more items here */}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 50,
  },
  drawerItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CustomDrawerContent;
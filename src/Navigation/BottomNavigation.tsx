import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import List from '../screens/List';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'red' }}>
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

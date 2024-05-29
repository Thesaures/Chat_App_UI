import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import List from '../screens/List';
import BottomTab from './Tab';
import Individual from '../screens/Individual';
import Phone from '../screens/Phone';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="List" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="Phone" component={Phone} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

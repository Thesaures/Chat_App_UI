import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import List from './src/screens/List';
import BottomNavigation from './src/Navigation/BottomNavigation';
import BottomTab from './src/Navigation/Tab';
const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};
export default App;

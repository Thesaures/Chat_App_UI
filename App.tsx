import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import List from './src/screens/List';
import StackNavigation from './src/Navigation/BottomNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTab from './src/Navigation/Tab';
import Individual from './src/screens/Individual';
const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {/* <BottomTab /> */}
        {/* <Individual /> */}
        <StackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default App;

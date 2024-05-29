import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import List from '../screens/List';
import { Image, TouchableOpacity, View } from 'react-native';
import Individual from '../screens/Individual';
import Message from '../screens/Message';
import Phone from '../screens/Phone';
import Dummy from '../screens/Dummy';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const CustomButton = () => {
  return (
    <TouchableOpacity
      style={{
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: '#703EFF',
        marginBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
        top: -30,
      }}
    >
      <MaterialCommunityIcons name="plus" size={40} color="white" />
    </TouchableOpacity>
  );
};
const BottomTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        // initialRouteName="List"
        screenOptions={{
          tabBarShowLabel: false,
          //   tabBarActiveTintColor: '#703EFF',
          //   tabBarInactiveTintColor: 'red',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: 90,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          },
        }}
      >
        <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarActiveTintColor: '#703EFF',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="web" size={30} />,
          }}
        />
        <Tab.Screen
          name="Hom"
          component={Home}
          options={{
            tabBarActiveTintColor: '#703EFF',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="chat" size={30} />,
          }}
        />

        <Tab.Screen
          name="Individual"
          component={Individual}
          options={{
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="home" size={30} color="white" />
            // ),
            tabBarButton: () => <CustomButton />,
          }}
        />
        <Tab.Screen
          name="Dummy"
          component={Dummy}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="phone" size={30} />,
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog-outline" size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
export default BottomTab;

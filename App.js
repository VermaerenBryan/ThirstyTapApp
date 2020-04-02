import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import colors from './style/colors';
import Menu from './screens/Menu';
import History from './screens/History';
import Checkout from './screens/Checkout';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Menu') iconName = 'local-drink';
            else if (route.name === 'History') iconName = 'history';
            else if (route.name === 'Checkout') iconName = 'payment';

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: colors.neutral[100]
        }}
      >
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Checkout" component={Checkout} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

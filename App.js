import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import colors from './style/colors';
import Menu from './screens/Menu';
import History from './screens/History';
import Checkout from './screens/Checkout';
import CheckoutCreditCard from './screens/CheckoutCreditCard';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CheckoutScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="CheckoutCreditCard" component={CheckoutCreditCard} />
    </Stack.Navigator>
  );
};

const App = () => {
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
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.neutral[100],
          inactiveTintColor: colors.neutral[200],
          style: {
            backgroundColor: colors.neutral[900],
          },
        }}
      >
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Checkout" component={CheckoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

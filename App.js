import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite';

import colors from './style/colors';
import Menu from './screens/Menu';
import History from './screens/History';
import Checkout from './screens/Checkout';
import CheckoutCreditCard from './screens/CheckoutCreditCard';
import CheckoutCompleted from './screens/CheckoutCompleted';
import CheckoutCash from './screens/CheckoutCash';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const dbConnection = SQLite.openDatabase('thirstytapapp');

const CheckoutScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="CheckoutCreditCard" component={CheckoutCreditCard} />
      <Stack.Screen name="CheckoutCompleted" component={CheckoutCompleted} />
      <Stack.Screen name="CheckoutCash" component={CheckoutCash} />
    </Stack.Navigator>
  );
};

const App = () => {
  useEffect(() =>
    dbConnection.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS "Category" ("categoryId"	INTEGER NOT NULL UNIQUE, "categoryName"	TEXT NOT NULL, PRIMARY KEY("categoryId" AUTOINCREMENT))');
      tx.executeSql('CREATE TABLE IF NOT EXISTS "Product" ("id"	INTEGER NOT NULL UNIQUE, "title"	TEXT NOT NULL, "content"	TEXT NOT NULL, "price"	TEXT NOT NULL, "img"	TEXT NOT NULL, "categoryId"	INTEGER, PRIMARY KEY("id" AUTOINCREMENT), FOREIGN KEY("categoryId") REFERENCES "Category"("categoryId"))');
      tx.executeSql('CREATE TABLE IF NOT EXISTS "Order" ("orderId"	INTEGER NOT NULL UNIQUE, "clientName"	TEXT NOT NULL, "tableNumber"	INTEGER NOT NULL, "price"	TEXT, PRIMARY KEY("orderId" AUTOINCREMENT))');
      tx.executeSql('CREATE TABLE IF NOT EXISTS "History" ("historyId"	INTEGER NOT NULL UNIQUE, "orderId"	INTEGER NOT NULL, "productId"	INTEGER NOT NULL, "quantity"	INTEGER, FOREIGN KEY("productId") REFERENCES "Product"("id"), FOREIGN KEY("orderId") REFERENCES "Order"("orderId"), PRIMARY KEY("historyId" AUTOINCREMENT))');
      tx.executeSql('INSERT OR IGNORE INTO "Category" ("categoryId","categoryName") VALUES (1,"Soda"), (2,"Alcohol"), (3,"Cocktails");');
      tx.executeSql('INSERT OR IGNORE INTO "Order" ("orderId","clientName","tableNumber","price") VALUES (1,"Thomas",15,"€7,80");');
      tx.executeSql('INSERT OR IGNORE INTO "History" ("historyId","orderId","productId","quantity") VALUES (1,1,4,3);');
      tx.executeSql('INSERT OR IGNORE INTO "Product" ("id","title","content","price","img","categoryId") VALUES (1,"Coca Cola","33 cl","€1,50","https://images.pexels.com/photos/2668308/pexels-photo-2668308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",1), (2,"Lemonade","33 cl","€1,30","https://images.pexels.com/photos/3651045/pexels-photo-3651045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",1), (3,"Carlsberg","33 cl","€2,20","https://images.pexels.com/photos/1435598/pexels-photo-1435598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",2), (4,"Corona","33 cl","€2,60","https://images.pexels.com/photos/2286972/pexels-photo-2286972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",2), (5,"Whiskey","10 cl","€8,10","https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",2), (6,"Mojito","22 cl","€3,30","https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",3);');
    })
  );
  // dbConnection.transaction((tx) => {
  //   const products = tx.executeSql('SELECT * FROM Product', [], (_, { rows: { _array } }) => console.log({ items: _array }));
  //   console.log(products);
  // });
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

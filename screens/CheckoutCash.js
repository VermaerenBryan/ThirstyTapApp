import React from 'react';
import { Text, FlatList, View, Image, TouchableOpacity, Button, Alert, onPress, HeaderBarButton } from 'react-native';

import core from '../style/core';

const CheckoutCash = ({ navigation }) => {
  return (
    <>
      <View style={core.header}>
        <Text style={core.headerTextComponent}>Checkout</Text>
      </View>

      <Image style={core.imageBartender} resizeMode="contain" source={{ uri: 'https://images.pexels.com/photos/1324896/pexels-photo-1324896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}></Image>

      <View style={core.marginImage}>
        <Text style={core.imageText}>The bartender will be there in a minute with your order.</Text>
        <Text></Text>
        <Text style={core.imageText}>Keep your cash ready.</Text>
      </View>

      <View style={core.container}>
        <TouchableOpacity style={core.continue} onPress={() => navigation.navigate('Checkout')}>
          <Text style={core.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CheckoutCash;

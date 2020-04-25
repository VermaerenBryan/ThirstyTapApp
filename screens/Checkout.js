import React from 'react';
import { Text, FlatList, View, Image, TouchableOpacity, Button, Alert, onPress, HeaderBarButton } from 'react-native';
import { Header } from 'react-native-elements';

import core from '../style/core';

const Checkout = () => {
  return (
    <>
      {/* <Header centerComponent={{ text: 'Checkout', style: { color: '#fff', fontSize: 24, fontWeight: '600' } }} backgroundColor="#FF4E3A" containerStyle={{ height: 64, paddingBottom: 24 }} /> */}
      <View style={core.headerComponent}>
        <Text style={core.headerTextComponent}>Checkout</Text>
        <TouchableOpacity style={core.buttonHeader}>
          <Text style={core.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <Text>Checkout</Text>
    </>
  );
};

export default Checkout;
